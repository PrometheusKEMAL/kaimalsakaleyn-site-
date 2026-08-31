"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard,
  Users,
  FileText,
  Library,
  CalendarDays,
  Settings,
  LogOut,
  ShieldAlert,
} from "lucide-react";

const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/kullanicilar", label: "Kullanıcılar", icon: Users },
  { href: "/admin/yazilar", label: "Yazılar", icon: FileText },
  { href: "/admin/kutuphane", label: "Kütüphane", icon: Library },
  { href: "/admin/etkinlikler", label: "Etkinlikler", icon: CalendarDays },
  { href: "/admin/ayarlar", label: "Ayarlar", icon: Settings },
];

export function AdminSidebar({ role = "admin" }: { role?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <aside className="w-64 shrink-0 hidden lg:flex flex-col min-h-[calc(100vh-8rem)]">
      <div className="sticky top-24 glass-panel p-6 rounded-card flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <ShieldAlert className="w-5 h-5 text-antique-gold" />
          <h3 className="font-serif text-sm text-antique-gold uppercase tracking-widest">
            Yönetim
          </h3>
        </div>
        
        <nav className="space-y-1.5 flex-1">
          {adminNavItems
            .filter((item) => !(role === "moderator" && item.href === "/admin/kullanicilar"))
            .map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-button text-sm transition-all duration-300",
                  isActive
                    ? "bg-antique-gold/10 text-antique-gold border border-antique-gold/30"
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
        <div className="pt-6 mt-6 border-t border-gold-border">
          <Link
            href="/pano"
            className="flex items-center gap-3 px-3 py-2 text-sm rounded-button text-secondary-text hover:text-primary-text hover:bg-card-bg transition-colors w-full mb-2"
          >
            Meclise Dön
          </Link>
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
