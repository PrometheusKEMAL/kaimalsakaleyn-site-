import Link from "next/link";
import { LogoMark } from "@/components/layout/LogoMark";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-antique-gold/30 to-transparent mb-8" />
      <LogoMark className="w-12 h-12 mb-6 opacity-50" />
      <h1 className="font-serif text-[72px] md:text-[96px] leading-none text-antique-gold/20 mb-4">
        404
      </h1>
      <h2 className="font-serif text-[24px] md:text-[32px] text-primary-text mb-6">
        Aradığınız İz Burada Sona Eriyor
      </h2>
      <p className="text-secondary-text text-base leading-relaxed max-w-md mb-10">
        Aradığınız sayfa bulunamadı. Belki de başka bir kapıya yönelmek için
        bir işarettir.
      </p>
      <Link href="/" className="btn-primary">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
