"use client";

import Link from "next/link";
import { LogoMark } from "@/components/layout/LogoMark";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-antique-gold/30 to-transparent mb-8" />
      <LogoMark className="w-12 h-12 mb-6 opacity-50" />
      <h1 className="font-serif text-[48px] md:text-[64px] leading-none text-antique-gold/20 mb-4">
        500
      </h1>
      <h2 className="font-serif text-[24px] md:text-[28px] text-primary-text mb-4">
        Beklenmeyen Bir Durum Oluştu
      </h2>
      <p className="text-secondary-text text-base leading-relaxed max-w-md mb-10">
        Bir hata meydana geldi. Lütfen sayfayı yenilemeyi deneyin veya daha
        sonra tekrar ziyaret edin.
      </p>
      <div className="flex gap-4">
        <button onClick={reset} className="btn-primary">
          Tekrar Dene
        </button>
        <Link href="/" className="btn-outline-gold">
          Ana Sayfa
        </Link>
      </div>
    </div>
  );
}
