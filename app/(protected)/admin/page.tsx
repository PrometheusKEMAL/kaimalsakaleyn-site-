"use client";

import { motion } from "framer-motion";
import { Users, FileText, Library, CalendarDays, TrendingUp } from "lucide-react";

const stats = [
  { label: "Toplam Kullanıcı", value: "0", icon: Users, trend: "+0% bu ay" },
  { label: "Yayındaki Yazılar", value: "0", icon: FileText, trend: "+0 bu hafta" },
  { label: "Kütüphane Eserleri", value: "0", icon: Library, trend: "0 yeni eklendi" },
  { label: "Yaklaşan Etkinlikler", value: "0", icon: CalendarDays, trend: "0 bu ay" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-display-sm text-primary-text mb-2">
          Yönetim Paneli
        </h1>
        <p className="text-secondary-text text-sm">
          Platform istatistikleri ve genel bakış.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card-base p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-5 h-5 text-antique-gold" />
              <TrendingUp className="w-4 h-4 text-primary-emerald/70" />
            </div>
            <div className="mb-2">
              <span className="font-serif text-3xl text-primary-text">
                {stat.value}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-secondary-text/80">
                {stat.label}
              </span>
              <span className="text-xs text-primary-emerald/60">
                {stat.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card-base p-8"
      >
        <h2 className="font-serif text-xl text-primary-text mb-6">Son Aktiviteler</h2>
        <div className="text-center py-12 border border-gold-border border-dashed rounded-button bg-background-secondary/30">
          <p className="text-secondary-text/60 text-sm">
            Henüz gösterilecek aktivite verisi yok.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
