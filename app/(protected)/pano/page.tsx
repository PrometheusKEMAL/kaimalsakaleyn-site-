"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, FileText } from "lucide-react";

export default function MeclisDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card-base p-8 md:p-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-radial from-deep-emerald/10 via-transparent to-transparent" />
        <div className="relative z-10">
          <h1 className="font-serif text-display-sm text-primary-text mb-3">
            Meclise Hoş Geldiniz
          </h1>
          <p className="text-secondary-text text-sm leading-relaxed max-w-2xl">
            Bu alan meclis üyelerine özeldir. Son gelişmeleri, yaklaşan
            etkinlikleri ve sadece üyelere açık olan içerikleri buradan takip
            edebilirsiniz.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Recent Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-base p-6 lg:col-span-2"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-antique-gold" />
            <h2 className="font-serif text-lg text-primary-text">Son Duyurular</h2>
          </div>
          
          <div className="space-y-4">
            {/* Placeholder Empty State */}
            <div className="text-center py-10 px-4 border border-gold-border border-dashed rounded-button bg-background-secondary/30">
              <p className="text-secondary-text/60 text-sm">
                Henüz güncel bir duyuru bulunmuyor.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Links / Status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="card-base p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-antique-gold" />
              <h2 className="font-serif text-lg text-primary-text">Yaklaşan</h2>
            </div>
            <p className="text-secondary-text text-sm">
              Yakın zamanda planlanmış üyelere özel etkinlik yok.
            </p>
          </div>

          <div className="card-base p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-antique-gold" />
              <h2 className="font-serif text-lg text-primary-text">Son Eklenenler</h2>
            </div>
            <p className="text-secondary-text text-sm">
              Yeni ders veya dosya eklenmedi.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
