"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Library, Search, Book } from "lucide-react";
import { mockBooks } from "@/lib/mock-data";
import Link from "next/link";

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

      {/* Content Grid */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockBooks
              .filter(
                (book) =>
                  (activeCategory === "Tümü" || book.category === activeCategory) &&
                  (activeLanguage === "Tümü" || book.language === activeLanguage) &&
                  (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((book, index) => (
                <Link href={`/kutuphane/${book.slug}`} key={book.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="card-base p-6 hover:-translate-y-1 transition-transform group flex flex-col h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-antique-gold/5 rounded-full blur-[40px] group-hover:bg-antique-gold/15 transition-colors duration-700" />
                    
                    <div className="relative z-10 bg-gradient-to-br from-card-bg to-card-bg/50 border border-gold-border/30 rounded-lg mb-6 flex flex-col items-center justify-center h-48 group-hover:border-antique-gold/40 transition-colors shadow-lg overflow-hidden">
                      {/* Decorative spine effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent z-20" />
                      
                      <Book className="w-10 h-10 text-antique-gold/30 mb-3 group-hover:text-antique-gold/60 transition-colors group-hover:scale-110 duration-500" />
                      <span className="text-[10px] text-center font-serif px-4 text-secondary-text/50 line-clamp-2">{book.title}</span>
                    </div>

                    <div className="flex-1 relative z-10">
                      <h3 className="font-serif text-lg text-primary-text mb-1 line-clamp-2 group-hover:text-antique-gold transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-secondary-text text-sm mb-4">
                        {book.author}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gold-border/30 mt-auto relative z-10">
                      <span className="text-[10px] tracking-wider uppercase text-antique-gold/80 bg-antique-gold/10 px-2 py-1 rounded">
                        {book.category}
                      </span>
                      <span className="text-[10px] tracking-wider uppercase text-secondary-text/60">
                        {book.language}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
