"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LogoMark } from "./LogoMark";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-300 xl:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] xl:hidden transition-all duration-500 ease-out",
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl">
          {/* Islamic pattern in drawer */}
          <div className="islamic-pattern" aria-hidden="true" />

          {/* Close Button */}
          <button
            className="absolute top-5 right-6 text-antique-gold/70 hover:text-antique-gold transition-colors p-2 z-10"
            onClick={onClose}
            aria-label="Menüyü Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="flex flex-col items-center justify-center h-full px-8">
            {/* Logo */}
            <LogoMark className="w-12 h-12 mb-4" />
            <div className="font-serif text-[11px] tracking-[0.3em] uppercase text-antique-gold mb-12">
              {siteConfig.nameFormatted}
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-6 mb-12">
              {mainNavigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-sans text-[13px] tracking-[0.15em] uppercase font-medium transition-all duration-300",
                    pathname === item.href
                      ? "text-antique-gold"
                      : "text-secondary-text hover:text-primary-text"
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-antique-gold/30 to-transparent mb-8" />

            {/* Login Button */}
            <Link
              href="/giris"
              className="btn-outline-gold text-[10px]"
              onClick={onClose}
            >
              Üye Girişi
            </Link>

            {/* Footer Quote */}
            <p className="absolute bottom-8 text-[10px] text-secondary-text/50 tracking-wider text-center px-8">
              {siteConfig.footerQuote}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
