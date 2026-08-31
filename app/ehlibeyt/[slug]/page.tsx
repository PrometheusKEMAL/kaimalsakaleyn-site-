"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, Quote, BookOpen, FileText } from "lucide-react";
import { mockPersons, mockBooks, mockArticles } from "@/lib/mock-data";

export default function EhlibeytDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const person = mockPersons.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("hayati");

  if (!person) {
    notFound();
  }

  const relatedBooksData = mockBooks.filter(b => (person.relatedBooks || []).includes(b.id));
  const relatedArticlesData = mockArticles.filter(a => (person.relatedArticles || []).includes(a.slug));

  const tabs = [
    { id: "hayati", label: "Hayatı", icon: <FileText className="w-4 h-4" /> },
    { id: "kronoloji", label: "Kronoloji", icon: <Calendar className="w-4 h-4" /> },
    { id: "sozleri", label: "Sözleri", icon: <Quote className="w-4 h-4" /> },
    { id: "eserler", label: "Eserler & Yazılar", icon: <BookOpen className="w-4 h-4" /> }
  ];

  return (
    <div className="pt-24 pb-section-lg bg-background min-h-screen">
      
      {/* Hero */}
      <section className="relative px-6 py-12 md:py-20 overflow-hidden border-b border-gold-border/20 bg-card-bg/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-antique-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs text-secondary-text mb-8 font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-antique-gold transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/ehlibeyt" className="hover:text-antique-gold transition-colors">Ehl-i Beyt</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-text">{person.name}</span>
          </div>

          <span className="text-antique-gold/80 text-sm tracking-widest uppercase mb-4 block">
            {person.title}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-text mb-6">
            {person.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {person.laqabs.map(laqab => (
              <span key={laqab} className="text-xs text-secondary-text/70 bg-card-bg/50 border border-gold-border/20 px-3 py-1.5 rounded-full">
                {laqab}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gold-border/20 mb-10 overflow-x-auto hide-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium tracking-wide transition-colors relative whitespace-nowrap ${
                activeTab === tab.id ? "text-antique-gold" : "text-secondary-text hover:text-primary-text"
              }`}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-antique-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {activeTab === "hayati" && (
              <motion.div
                key="hayati"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="prose prose-invert prose-gold max-w-none text-lg text-secondary-text/90 font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: (person.life || person.bio || '') }}
              />
            )}

            {activeTab === "kronoloji" && (
              <motion.div
                key="kronoloji"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 pl-4 border-l border-antique-gold/30"
              >
                {(person.chronology || []).map((item, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-antique-gold" />
                    <span className="text-antique-gold text-sm font-semibold tracking-wider block mb-1">{item.year}</span>
                    <p className="text-primary-text text-lg">{item.event}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "sozleri" && (
              <motion.div
                key="sozleri"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {(person.quotes || []).map((quote, idx) => (
                  <div key={idx} className="bg-card-bg/30 border border-gold-border/20 p-8 rounded-2xl relative group hover:border-antique-gold/40 transition-colors">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-antique-gold/10 group-hover:text-antique-gold/20 transition-colors" />
                    <p className="font-serif text-xl text-primary-text mb-6 leading-relaxed relative z-10">
                      "{quote.text}"
                    </p>
                    <span className="text-sm text-secondary-text/60 italic block">
                      — {quote.source}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "eserler" && (
              <motion.div
                key="eserler"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {relatedBooksData.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-serif text-primary-text mb-6 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-antique-gold" /> Kütüphane Eserleri
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedBooksData.map(book => (
                        <Link href={`/kutuphane/${book.slug}`} key={book.id}>
                          <div className="p-4 border border-gold-border/20 rounded-xl hover:border-antique-gold/50 transition-colors bg-card-bg/20 flex gap-4 items-center group">
                            <div className="w-12 h-16 bg-antique-gold/10 rounded flex-shrink-0 flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-antique-gold/40" />
                            </div>
                            <div>
                              <h4 className="font-serif text-lg text-primary-text group-hover:text-antique-gold transition-colors line-clamp-1">{book.title}</h4>
                              <p className="text-xs text-secondary-text line-clamp-1">{book.author}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {relatedArticlesData.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-serif text-primary-text mb-6 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-antique-gold" /> İlgili Makaleler
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedArticlesData.map(article => (
                        <Link href={`/defterler/${article.slug}`} key={article.id}>
                          <div className="p-5 border border-gold-border/20 rounded-xl hover:border-antique-gold/50 transition-colors bg-card-bg/20 group">
                            <span className="text-[10px] uppercase tracking-wider text-antique-gold/80 block mb-2">{article.category}</span>
                            <h4 className="font-serif text-lg text-primary-text group-hover:text-antique-gold transition-colors line-clamp-2 mb-2">{article.title}</h4>
                            <p className="text-xs text-secondary-text">{article.author}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {relatedBooksData.length === 0 && relatedArticlesData.length === 0 && (
                  <p className="text-secondary-text italic text-center py-10">Bu şahıs ile ilgili henüz sisteme eklenmiş bir eser veya makale bulunmamaktadır.</p>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
