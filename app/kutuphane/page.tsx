"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Library, Search } from "lucide-react";

const categories = [
  "Tümü", "Kur'an", "Tefsir", "Hadis", "Nehcü'l-Belâğa",
  "Sahife-i Seccadiye", "Ehl-i Beyt", "İmamet", "Mehdeviyet",
  "Kerbelâ", "Tarih", "Akaid", "Ahlak ve İrfan",
];

const languages = ["Tümü", "Türkçe", "Arapça", "Farsça", "İngilizce"];

export default function KutuphanePage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [activeLanguage, setActiveLanguage] = useState("Tümü");
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
          <span className="section-label">Arşiv</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-4">
            Kütüphane
          </h1>
          <p className="text-secondary-text text-base leading-relaxed">
            Kur&apos;an, tefsir, hadis, Nehcü&apos;l-Belâğa, Sahife-i
            Seccadiye ve daha fazlasını barındıran dijital kütüphane.
          </p>
        </motion.div>
      </section>

      {/* Search & Filters */}
      <section className="px-6 mb-10">
        <div className="max-w-6xl mx-auto">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/40" />
            <input
              type="text"
              placeholder="Eser veya müellif ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card-bg border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3 text-primary-text text-sm placeholder:text-secondary-text/30 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
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

          {/* Language Filter */}
          <div className="flex justify-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-button transition-all duration-300 ${
                  activeLanguage === lang
                    ? "bg-antique-gold/20 text-antique-gold border border-antique-gold/30"
                    : "text-secondary-text/60 hover:text-secondary-text"
                }`}
              >
                {lang}
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
            <Library className="w-12 h-12 text-antique-gold/15 mx-auto mb-5" />
            <h2 className="font-serif text-xl text-primary-text mb-3">
              Kütüphaneye Yeni Eserler Hazırlanıyor
            </h2>
            <p className="text-secondary-text text-sm max-w-md mx-auto leading-relaxed">
              Kütüphanemiz yakında zengin bir koleksiyonla hizmetinize
              sunulacaktır. Eserler admin panelinden yönetilmektedir.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
