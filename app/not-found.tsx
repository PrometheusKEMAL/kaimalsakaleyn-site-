import Link from "next/link";
import { LogoMark } from "@/components/layout/LogoMark";
import { AdvancedSearch } from "@/components/ui/AdvancedSearch";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <LogoMark className="w-12 h-12 mb-6 opacity-50" />
      <h1 className="font-serif text-[72px] md:text-[96px] leading-none text-primary/20 mb-4">
        404
      </h1>
      <h2 className="font-serif text-[24px] md:text-[32px] text-foreground mb-6">
        Sayfa Bulunamadı
      </h2>
      <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-8">
        Aradığınız içerik taşınmış, silinmiş veya hiç var olmamış olabilir. Külliyatta arama yapabilir veya ana bölümlere dönebilirsiniz.
      </p>

      <div className="w-full max-w-md mb-10 flex justify-center">
        <AdvancedSearch />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl w-full text-sm">
        <Link href="/" className="btn-outline-gold w-full">Ana Sayfa</Link>
        <Link href="/kutuphane" className="btn-outline-gold w-full">Kütüphane</Link>
        <Link href="/kavramlar" className="btn-outline-gold w-full">Ansiklopedi</Link>
        <Link href="/ehlibeyt" className="btn-outline-gold w-full">Ehl-i Beyt</Link>
        <Link href="/defterler" className="btn-outline-gold w-full">Sekaleyn Defterleri</Link>
        <Link href="/kesfet" className="btn-outline-gold w-full">Keşfet</Link>
      </div>
    </div>
  );
}
