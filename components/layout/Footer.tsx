import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="mt-auto relative bg-background border-t border-border">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <LogoMark className="w-10 h-10 group-hover:scale-105 transition-transform" />
              <div>
                <div className="font-serif text-[15px] tracking-[0.2em] uppercase font-semibold leading-tight text-primary">
                  {siteConfig.nameFormatted}
                </div>
              </div>
            </Link>
            <p className="font-serif italic text-sm text-muted-foreground leading-relaxed mb-6">
              {siteConfig.subtitle}
            </p>
            <p className="font-sans text-[11px] leading-relaxed text-muted-foreground/60 max-w-xs">
              {siteConfig.footerDisclaimer}
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            <div>
              <h3 className="text-[11px] tracking-widest uppercase text-primary/90 font-medium mb-6">
                Araştırma Ağı
              </h3>
              <ul className="space-y-4">
                {footerNavigation.arastirma.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-widest uppercase text-primary/90 font-medium mb-6">
                Kurumsal
              </h3>
              <ul className="space-y-4">
                {footerNavigation.kurumsal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-widest uppercase text-primary/90 font-medium mb-6">
                Hukuki
              </h3>
              <ul className="space-y-4">
                {footerNavigation.hukuki.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] tracking-widest uppercase text-muted-foreground/60">
            © {new Date().getFullYear()} KaimAlSakaleyn. Tüm Hakları Mahfuzdur.
          </span>
          <span className="font-serif italic text-[13px] text-primary/60">
            {siteConfig.footerQuote}
          </span>
        </div>

      </div>
    </footer>
  );
}
