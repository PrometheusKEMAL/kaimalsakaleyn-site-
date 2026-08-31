"use client";

import { useState } from "react";
import { Search, Filter, LayoutGrid, List, Book } from "lucide-react";
import { mockBooks } from "@/lib/mock-data";
import { BookCard } from "@/components/ui/BookCard";

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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredBooks = mockBooks.filter(
    (book) =>
      (activeCategory === "Tümü" || book.category === activeCategory) &&
      (activeLanguage === "Tümü" || book.language === activeLanguage) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="py-16 px-6 text-center border-b border-gold-border/10 bg-background-secondary/50">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-6">Katalog</span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
            KaimAlSakaleyn Dijital Kütüphanesi
          </h1>
          <p className="text-secondary-text text-lg leading-relaxed max-w-2xl mx-auto font-light text-balance">
            Şiî ilim geleneğinin temel eserlerini, müelliflerini ve araştırma 
            kaynaklarını tek bir akademik çatı altında keşfedin.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Left Sidebar - Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="font-serif text-lg text-primary-text mb-6 flex items-center gap-2">
              <Filter className="w-4 h-4 text-antique-gold" /> Filtreler
            </h3>
            
            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-secondary-text mb-4 font-medium">Kategori</h4>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm transition-colors text-left w-full ${
                          activeCategory === cat ? "text-antique-gold" : "text-primary-text/70 hover:text-primary-text"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language */}
              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-secondary-text mb-4 font-medium">Dil</h4>
                <ul className="space-y-2">
                  {languages.map((lang) => (
                    <li key={lang}>
                      <button
                        onClick={() => setActiveLanguage(lang)}
                        className={`text-sm transition-colors text-left w-full ${
                          activeLanguage === lang ? "text-antique-gold" : "text-primary-text/70 hover:text-primary-text"
                        }`}
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content - Books */}
        <main className="flex-1 min-w-0">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/50" />
              <input
                type="text"
                placeholder="Eser veya yazar ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card-bg border border-gold-border/30 focus:border-antique-gold/50 rounded-md pl-10 pr-4 py-2 text-primary-text text-sm focus:outline-none transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-2 text-secondary-text border border-gold-border/20 rounded-md p-1 bg-card-bg/50">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-sm transition-colors ${viewMode === "grid" ? "bg-background-secondary text-primary-text shadow-sm" : "hover:text-primary-text"}`}
                aria-label="Grid Görünümü"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-sm transition-colors ${viewMode === "list" ? "bg-background-secondary text-primary-text shadow-sm" : "hover:text-primary-text"}`}
                aria-label="Liste Görünümü"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-xs text-secondary-text mb-6">
            {filteredBooks.length} kaynak bulundu
          </div>

          {/* Grid/List Container */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
            {filteredBooks.map((book) => (
              viewMode === "grid" ? (
                <BookCard 
                  key={book.id}
                  slug={book.slug}
                  title={book.title}
                  author={book.author}
                  category={book.category}
                  isVerified={true}
                />
              ) : (
                <div key={book.id} className="card-base p-4 flex items-center gap-6 group hover:-translate-y-0.5">
                  <div className="w-12 h-16 bg-[#1a1a1a] border border-gold-border/20 flex items-center justify-center rounded-sm shrink-0">
                     <Book className="w-4 h-4 text-antique-gold/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                     <h3 className="font-serif text-lg text-primary-text group-hover:text-antique-gold transition-colors truncate">{book.title}</h3>
                     <p className="text-sm text-secondary-text">{book.author}</p>
                  </div>
                  <div className="hidden sm:block shrink-0 text-right">
                     <span className="text-[10px] uppercase tracking-widest text-antique-gold font-medium block">{book.category}</span>
                     <span className="text-xs text-secondary-text">{book.language}</span>
                  </div>
                </div>
              )
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="py-24 text-center border border-dashed border-gold-border/20 rounded-md">
              <p className="text-secondary-text">Kriterlerinize uygun eser bulunamadı.</p>
              <button 
                onClick={() => { setActiveCategory("Tümü"); setActiveLanguage("Tümü"); setSearchQuery(""); }}
                className="mt-4 text-sm text-antique-gold hover:underline"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </main>
      </section>
    </div>
  );
}
