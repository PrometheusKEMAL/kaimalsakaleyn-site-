"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { LogoMark } from "@/components/layout/LogoMark";
import { createBrowserClient } from "@supabase/ssr";

export default function GirisPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        throw new Error(signInError.message);
      }

      if (data.user) {
        // Successful login, redirect to meclis or admin based on role
        // For now, let's redirect to /admin as requested
        router.push("/admin");
        router.refresh(); // Refresh the router to trigger middleware
      }
    } catch (err: any) {
      setError("Giriş başarısız. Lütfen bilgilerinizi kontrol edip tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-deep-emerald/20 via-background to-background" />
        <div className="hero-light-beam" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[420px] mx-auto px-6 py-20"
      >
        <div
          className="relative rounded-card p-8 md:p-10 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(17,23,20,0.85) 0%, rgba(13,18,16,0.95) 100%)",
            boxShadow:
              "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(184,154,91,0.12)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Top gold line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-antique-gold/50 to-transparent" />

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="section-label text-[9px]">
              Emanet Alanı
            </span>
          </div>

          {/* Logo & Title */}
          <div className="flex flex-col items-center mb-8">
            <LogoMark className="w-16 h-16 mb-5 opacity-90" />
            <div className="w-px h-5 mb-5 bg-gradient-to-b from-transparent via-antique-gold/40 to-transparent" />
            <h1 className="font-serif text-[24px] md:text-[26px] font-semibold text-primary-text text-center mb-2">
              Meclise Giriş
            </h1>
            <p className="text-secondary-text/50 text-[13px] leading-relaxed text-center max-w-[280px]">
              Bu alan KaimAlSakaleyn meclisinin yetkilendirilmiş üyelerine
              ayrılmıştır.
            </p>
          </div>

          {/* Divider */}
          <div
            className="mb-8"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(184,154,91,0.25), transparent)",
            }}
          />

          {/* Error */}
          {error && (
            <div className="mb-5 p-3 rounded-button bg-red-900/20 border border-red-900/30 text-red-300 text-[12px] text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-secondary-text/50 mb-2.5">
                E-posta
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/25 group-focus-within:text-antique-gold/60 transition-colors" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="e-posta adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-antique-gold/40 pl-11 pr-5 py-3.5 text-primary-text/90 text-[14px] placeholder:text-secondary-text/20 focus:outline-none transition-all duration-300 rounded-button"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-secondary-text/50 mb-2.5">
                Şifre
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/25 group-focus-within:text-antique-gold/60 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-antique-gold/40 pl-11 pr-11 py-3.5 text-primary-text/90 text-[14px] placeholder:text-secondary-text/20 focus:outline-none transition-all duration-300 rounded-button"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-secondary-text/25 hover:text-antique-gold/60 transition-colors focus:outline-none"
                  aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium text-primary-text bg-primary-emerald border border-transparent hover:bg-muted-emerald disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 transition-all duration-300 mt-3 hover:shadow-emerald-glow rounded-button"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-primary-text/30 border-t-primary-text rounded-full animate-spin" />
              ) : (
                "Meclise Gir"
              )}
            </button>
          </form>

          {/* Links */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <p className="text-secondary-text/30 text-[11.5px] leading-relaxed text-center mb-4">
              Bu alan kişisel verilerin ve üyelik sorumluluklarının güvenli
              biçimde korunması amacıyla sınırlı erişime sahiptir.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="/iletisim"
                className="text-[11px] tracking-wider uppercase text-antique-gold/60 hover:text-antique-gold border-b border-antique-gold/15 hover:border-antique-gold/50 pb-0.5 transition-colors"
              >
                Şifremi Unuttum
              </Link>
              <Link
                href="/hakkimizda#davet"
                className="text-[11px] tracking-wider uppercase text-antique-gold/60 hover:text-antique-gold border-b border-antique-gold/15 hover:border-antique-gold/50 pb-0.5 transition-colors"
              >
                Davet Hakkında
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
