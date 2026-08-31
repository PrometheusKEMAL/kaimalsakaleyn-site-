"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import {
  Home,
  Bell,
  BookOpen,
  FileText,
  Calendar,
  Bookmark,
  User,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/pano", label: "Ana Akış", icon: Home },
  { href: "/pano/duyurular", label: "Duyurular", icon: Bell },
  { href: "/pano/dersler", label: "Dersler", icon: BookOpen },
  { href: "/pano/dosyalar", label: "Dosyalar", icon: FileText },
  { href: "/pano/etkinlikler", label: "Etkinlikler", icon: Calendar },
  { href: "/pano/kaydedilenler", label: "Kaydedilenler", icon: Bookmark },
  { href: "/pano/profil", label: "Profil", icon: User },
];

export function MeclisSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-24 glass-panel p-6 rounded-card">
        <h3 className="font-serif text-sm text-antique-gold mb-6 uppercase tracking-widest">
          Meclis Menüsü
        </h3>
        
        <nav className="space-y-1.5 mb-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-button text-sm transition-all duration-300",
                  isActive
                    ? "bg-primary-emerald/10 text-primary-text border border-primary-emerald/30"
                    : "text-secondary-text hover:text-primary-text hover:bg-white/5 border border-transparent"
                )}
              >
                <item.icon
                  className={cn(
                    "w-4 h-4",
                    isActive ? "text-antique-gold" : "text-secondary-text/50"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Bottom */}
        <div className="pt-6 border-t border-gold-border">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-button text-sm text-red-400 hover:text-red-300 hover:bg-red-900/10 transition-colors w-full"
          >
            <LogOut className="w-4 h-4" />
            Çıkış Yap
          </button>
        </div>
      </div>
    </aside>
  );
}
