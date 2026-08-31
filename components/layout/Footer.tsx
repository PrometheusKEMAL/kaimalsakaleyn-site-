import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer
      className="mt-auto relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0D0A 0%, #070907 100%)",
      }}
    >
      {/* Top gold line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(184,154,91,0.5) 40%, rgba(184,154,91,0.5) 60%, transparent 100%)",
        }}
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 islamic-pattern !opacity-[0.02]" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Top Section — Logo + Manifesto */}
        <div className="flex flex-col items-center text-center mb-14">
          <LogoMark className="w-14 h-14 mb-5" />
          <div className="font-serif text-[14px] tracking-[0.3em] uppercase text-antique-gold font-semibold mb-3">
            {siteConfig.nameFormatted}
          </div>
          <div
            className="w-12 h-px my-3"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(184,154,91,0.5), transparent)",
            }}
          />
          <p className="font-serif italic text-[14px] text-secondary-text/80 max-w-md leading-relaxed">
            {siteConfig.subtitle}
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-14 max-w-3xl mx-auto">
          {/* Kesfet */}
          <div className="text-center md:text-left">
            <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-antique-gold/80 font-semibold mb-5">
              Keşfet
            </h3>
            <ul className="space-y-3">
              {footerNavigation.kesfet.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[12px] text-secondary-text hover:text-antique-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Meclis */}
          <div className="text-center md:text-left">
            <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-antique-gold/80 font-semibold mb-5">
              Meclis
            </h3>
            <ul className="space-y-3">
              {footerNavigation.meclis.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[12px] text-secondary-text hover:text-antique-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hukuki */}
          <div className="text-center md:text-left">
            <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-antique-gold/80 font-semibold mb-5">
              Hukuki
            </h3>
            <ul className="space-y-3">
              {footerNavigation.hukuki.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[12px] text-secondary-text hover:text-antique-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="font-sans text-[10.5px] tracking-wide leading-relaxed text-secondary-text/60">
            {siteConfig.footerDisclaimer}
          </p>
        </div>

        {/* Bottom Divider */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "rgba(184, 154, 91, 0.08)" }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <span className="font-sans text-[9.5px] tracking-[0.18em] uppercase text-secondary-text/50">
            © 2026 KaimAlSakaleyn
          </span>
          <span className="font-serif italic text-[12px] text-antique-gold/40">
            {siteConfig.footerQuote}
          </span>
        </div>
      </div>
    </footer>
  );
}
