import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { fullName, email, subject, message } = await request.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Gerekli alanlar eksik." },
        { status: 400 }
      );
    }

    // SMTP yapılandırması
    // .env.local dosyasında SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS tanımlı olmalıdır.
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
      replyTo: email,
      subject: `Yeni Mesaj: ${subject || "İletişim Formu"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #cda869; text-align: center; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Yeni İletişim Mesajı</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Gönderen:</strong> ${fullName}</p>
            <p><strong>E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Konu:</strong> ${subject || "Belirtilmedi"}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px;">
            <p style="margin-top: 0; font-weight: bold;">Mesaj İçeriği:</p>
            <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #888;">
            Bu e-posta kaimalsakaleyn.com iletişim formu aracılığıyla gönderilmiştir.
          </div>
        </div>
      `,
    };

    // E-postayı gönder
    if (!process.env.SMTP_PASS) {
      console.warn("SMTP_PASS bulunamadı! Konsola yazdırılıyor:", { fullName, email, subject, message });
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
