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
          <h1 className="font-serif text-display-lg text-foreground mb-4">
            Sekaleyn Defterleri
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
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
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
            <input
              type="text"
              placeholder="Yazı ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border focus:border-primary/40 rounded-button pl-11 pr-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/30 focus:outline-none transition-colors"
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
                    ? "bg-emerald-600 text-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
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
                  <Link href={`/defterler/${article.slug}`} className="flex flex-col md:flex-row card-base hover:-translate-y-1 transition-transform group overflow-hidden">
                    {article.image && (
                      <div className="w-full md:w-1/3 shrink-0 h-48 md:h-auto border-b md:border-b-0 md:border-r border-border/50 overflow-hidden bg-muted/30">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                      </div>
                    )}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] tracking-wider uppercase text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-muted-foreground/60 text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.publishedAt}
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                        {article.summary}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/30">
                        <div className="text-sm text-muted-foreground">
                          Yazar: <span className="text-foreground">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground/60 text-xs">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime} okuma
                        </div>
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
