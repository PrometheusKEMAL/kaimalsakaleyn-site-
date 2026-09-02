"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { LogoMark } from "./LogoMark";
import { AdvancedSearch } from "@/components/ui/AdvancedSearch";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled || activeMegaMenu
            ? "bg-background/95 backdrop-blur-md border-border/50 shadow-sm"
            : "bg-transparent border-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Ana Sayfa"
          >
            <LogoMark className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <div className="font-serif text-[13px] tracking-[0.2em] uppercase font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                {siteConfig.nameFormatted}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8 h-full">
            {mainNavigation.map((item) => (
              <div 
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.children ? setActiveMegaMenu(item.label) : setActiveMegaMenu(null)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 font-sans text-[11px] tracking-widest uppercase font-medium transition-colors duration-200",
                      activeMegaMenu === item.label
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "font-sans text-[11px] tracking-widest uppercase font-medium transition-colors duration-200",
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeMegaMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-card border border-border/30 rounded-md shadow-lg overflow-hidden py-2"
                      >
                        <div className="flex flex-col">
                          {item.children.map(child => (
                            <Link 
                              key={child.href}
                              href={child.href}
                              className="px-5 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <AdvancedSearch />
            
            {/* Login Button */}
            <Link
              href="/giris"
              className="hidden md:inline-flex btn-outline-gold py-1.5 px-4 text-[10px]"
            >
              Giriş
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-muted-foreground hover:text-foreground transition-colors p-1"
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
