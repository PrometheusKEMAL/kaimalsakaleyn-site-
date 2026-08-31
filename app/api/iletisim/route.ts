import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import DOMPurify from 'isomorphic-dompurify';

// Simple in-memory rate limiting map
// Key: IP address, Value: { count: number, resetTime: number }
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limitRecord = rateLimitMap.get(ip);

  if (!limitRecord) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (now > limitRecord.resetTime) {
    // Reset window
    limitRecord.count = 1;
    limitRecord.resetTime = now + RATE_LIMIT_WINDOW;
    return true;
  }

  if (limitRecord.count >= MAX_REQUESTS) {
    return false; // Rate limited
  }

  limitRecord.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    // Extract IP for rate limiting
    // Note: In Next.js App Router, request.headers.get("x-forwarded-for") is the best way to get client IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin." },
        { status: 429 } // Too Many Requests
      );
    }

    const { fullName, email, subject, message } = await request.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Gerekli alanlar eksik." },
        { status: 400 }
      );
    }
    
    // Sanitize user inputs to prevent HTML/Script injection in emails
    const safeFullName = DOMPurify.sanitize(fullName, { ALLOWED_TAGS: [] });
    const safeEmail = DOMPurify.sanitize(email, { ALLOWED_TAGS: [] });
    const safeSubject = DOMPurify.sanitize(subject || "İletişim Formu", { ALLOWED_TAGS: [] });
    const safeMessage = DOMPurify.sanitize(message, { ALLOWED_TAGS: [] });

    // SMTP yapılandırması
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // 465 için true, 587 için false
      auth: {
        user: process.env.SMTP_USER || "info@kaimalsakaleyn.com",
        pass: process.env.SMTP_PASS,
      },
    });

    // E-posta içeriği
    const mailOptions = {
      from: `"KaimAlSakaleyn İletişim Formu" <${process.env.SMTP_USER || "info@kaimalsakaleyn.com"}>`,
      to: "info@kaimalsakaleyn.com",
      replyTo: safeEmail,
      subject: `Yeni Mesaj: ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #cda869; text-align: center; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Yeni İletişim Mesajı</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Gönderen:</strong> ${safeFullName}</p>
            <p><strong>E-posta:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Konu:</strong> ${safeSubject}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px;">
            <p style="margin-top: 0; font-weight: bold;">Mesaj İçeriği:</p>
            <p style="white-space: pre-wrap; line-height: 1.5;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #888;">
            Bu e-posta kaimalsakaleyn.com iletişim formu aracılığıyla gönderilmiştir.
          </div>
        </div>
      `,
    };

    // E-postayı gönder
    if (!process.env.SMTP_PASS) {
      console.warn("SMTP_PASS bulunamadı! Konsola yazdırılıyor:", { fullName: safeFullName, email: safeEmail, subject: safeSubject, message: safeMessage });
      // Geliştirme ortamında şifre yoksa başarılı sayıp geç (test için)
      return NextResponse.json({ success: true, message: "Email simulated (No SMTP_PASS)" });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("E-posta gönderme hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
