"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { LogoMark } from "./LogoMark";
import { AdvancedSearch } from "@/components/ui/AdvancedSearch";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-antique-gold/8 shadow-lg shadow-black/10"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-18 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Ana Sayfa"
          >
            <LogoMark className="w-9 h-9 transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <div className="font-serif text-[13px] tracking-[0.22em] uppercase font-semibold leading-tight text-antique-gold">
                {siteConfig.nameFormatted}
              </div>
              <div className="font-sans text-[8px] tracking-[0.28em] uppercase leading-tight text-secondary-text mt-0.5">
                {siteConfig.subtitle}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-7">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-sans relative text-[10.5px] tracking-wide uppercase font-medium transition-colors duration-300 whitespace-nowrap pb-0.5",
                  pathname === item.href
                    ? "text-antique-gold"
                    : "text-secondary-text hover:text-antique-gold"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-antique-gold/50" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <AdvancedSearch />

            {/* Login Button */}
            <Link
              href="/giris"
              className="hidden md:inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase font-medium text-antique-gold border border-antique-gold/30 px-5 py-2.5 hover:bg-antique-gold/10 hover:border-antique-gold/50 transition-all duration-300 rounded-button"
            >
              Üye Girişi
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-antique-gold/70 hover:text-antique-gold transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menü"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
