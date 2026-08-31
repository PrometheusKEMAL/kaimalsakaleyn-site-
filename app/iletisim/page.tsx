"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, FileText } from "lucide-react";

export default function IletisimPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!kvkkAccepted) return;
    setIsSubmitting(true);

    // Simulate submission — in production this hits the API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="pt-24 pb-section-lg">
      <section className="py-section px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="section-label">Bize Ulaşın</span>
            <h1 className="font-serif text-display-lg text-primary-text mb-4">
              İletişim
            </h1>
            <p className="text-secondary-text text-base leading-relaxed">
              Soru, öneri veya görüşleriniz için bizimle iletişime
              geçebilirsiniz.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-base p-12 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-antique-gold/30 flex items-center justify-center">
                <Send className="w-6 h-6 text-antique-gold" />
              </div>
              <h2 className="font-serif text-xl text-primary-text mb-3">
                Mesajınız Alındı
              </h2>
              <p className="text-secondary-text text-sm">
                En kısa sürede size dönüş yapılacaktır.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="card-base p-8 md:p-10 space-y-6"
            >
              {/* Honeypot — spam protection */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Ad Soyad */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">
                  Ad Soyad
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                  <input
                    type="text"
                    required
                    placeholder="Adınız ve soyadınız"
                    className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* E-posta */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">
                  E-posta
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                  <input
                    type="email"
                    required
                    placeholder="E-posta adresiniz"
                    className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Konu */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">
                  Konu
                </label>
                <div className="relative group">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                  <input
                    type="text"
                    required
                    placeholder="Mesajınızın konusu"
                    className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Mesaj */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">
                  Mesaj
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                  <textarea
                    required
                    rows={5}
                    placeholder="Mesajınızı yazın..."
                    className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* KVKK Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={kvkkAccepted}
                  onChange={(e) => setKvkkAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-gold-border bg-background/50 text-primary-emerald focus:ring-primary-emerald/30 accent-primary-emerald"
                />
                <span className="text-secondary-text/70 text-[12px] leading-relaxed">
                  <a
                    href="/gizlilik"
                    className="text-antique-gold/80 hover:text-antique-gold underline underline-offset-2 decoration-antique-gold/30"
                  >
                    Gizlilik Politikası
                  </a>{" "}
                  ve{" "}
                  <a
                    href="/kvkk"
                    className="text-antique-gold/80 hover:text-antique-gold underline underline-offset-2 decoration-antique-gold/30"
                  >
                    KVKK Aydınlatma Metni
                  </a>
                  &apos;ni okudum ve kabul ediyorum.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !kvkkAccepted}
                className="w-full btn-primary justify-center disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-primary-text/30 border-t-primary-text rounded-full animate-spin" />
                ) : (
                  <>
                    Mesajı Gönder
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
