"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Filter } from "lucide-react";

const categories = [
  "Tümü", "Kur'an", "Ehl-i Beyt", "İmamet", "İmam Mehdi",
  "Kerbelâ", "Ahlak", "İrfan", "Dua", "Tarih", "Tefekkür",
  "Günümüz", "Araştırmalar",
];

export default function SakaleynDefterleriPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-24 pb-section-lg">
      {/* Hero */}
      <section className="py-section px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="section-label">Yazılar</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-4">
            Sakaleyn Defterleri
          </h1>
          <p className="text-secondary-text text-base leading-relaxed">
            Kur&apos;an, Ehl-i Beyt, İmamet, irfan ve tefekkür ekseninde
            uzun form yazılar, araştırmalar ve tefekkür notları.
          </p>
        </motion.div>
      </section>

      {/* Search & Filter */}
      <section className="px-6 mb-10">
        <div className="max-w-6xl mx-auto">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/40" />
            <input
              type="text"
              placeholder="Yazı ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card-bg border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3 text-primary-text text-sm placeholder:text-secondary-text/30 focus:outline-none transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] tracking-wider uppercase px-4 py-2 rounded-button transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary-emerald text-primary-text"
                    : "bg-card-bg text-secondary-text hover:text-primary-text border border-gold-border hover:border-antique-gold/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-base p-16 text-center"
          >
            <BookOpen className="w-12 h-12 text-antique-gold/15 mx-auto mb-5" />
            <h2 className="font-serif text-xl text-primary-text mb-3">
              Defterler Hazırlanıyor
            </h2>
            <p className="text-secondary-text text-sm max-w-md mx-auto leading-relaxed">
              Sakaleyn Defterleri&apos;ne yeni yazılar hazırlanmaktadır. İlk
              içerikler yakında burada yayınlanacaktır. Yazılar admin
              panelinden yönetilmektedir.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
