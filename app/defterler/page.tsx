"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Filter, Clock, Calendar } from "lucide-react";
import { mockArticles } from "@/lib/mock-data";
import Link from "next/link";

const categories = [
  "Tümü", "Kur'an", "Ehl-i Beyt", "İmamet", "İmam Mehdi",
  "Kerbelâ", "Ahlak", "İrfan", "Dua", "Tarih", "Tefekkür",
  "Günümüz", "Araştırmalar",
];

export default function SekaleynDefterleriPage() {
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
            Sekaleyn Defterleri
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

      {/* Content List */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {mockArticles
              .filter(
                (article) =>
                  (activeCategory === "Tümü" || article.category === activeCategory) &&
                  (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    article.summary.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/defterler/${article.slug}`} className="block card-base p-6 md:p-8 hover:-translate-y-1 transition-transform group">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] tracking-wider uppercase text-antique-gold px-3 py-1 bg-antique-gold/10 rounded-full border border-antique-gold/20">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-secondary-text/60 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.publishedAt}
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-2xl md:text-3xl text-primary-text mb-3 group-hover:text-antique-gold transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-secondary-text leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                      {article.summary}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gold-border/30">
                      <div className="text-sm text-secondary-text">
                        Yazar: <span className="text-primary-text">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-secondary-text/60 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime} okuma
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
