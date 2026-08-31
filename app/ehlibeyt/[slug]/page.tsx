"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, Quote, BookOpen, FileText, User } from "lucide-react";
import { mockPersons, mockBooks, mockArticles } from "@/lib/mock-data";
import { Timeline } from "@/components/ui/Timeline";

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
    { id: "sozleri", label: "Hikmetli Sözleri", icon: <Quote className="w-4 h-4" /> },
    { id: "eserler", label: "İlgili Eserler", icon: <BookOpen className="w-4 h-4" /> }
  ];

  return (
    <div className="pt-24 pb-32 bg-background min-h-screen">
      
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 mb-8 mt-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-secondary-text font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-primary-text transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/ehlibeyt" className="hover:text-primary-text transition-colors">Ehl-i Beyt</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-antique-gold">{person.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 mb-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Avatar/Icon Placeholder */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-background-secondary border-2 border-gold-border/30 flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE5MywgMTYz,IDk4LCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiPjxwYXRoIGQ9Ik0xMiAyTDIyIDEyTDEyIDIyTDIgMTJ6Ii8+PC9zdmc+')] opacity-50 bg-repeat bg-[length:24px_24px]" />
             <User className="w-16 h-16 md:w-24 md:h-24 text-antique-gold/40 relative z-10" />
          </div>

          <div className="text-center md:text-left flex-1">
            <span className="text-[10px] tracking-widest uppercase text-antique-gold font-medium border border-antique-gold/20 px-2.5 py-1 bg-antique-gold/5 rounded-sm inline-block mb-4">
              {person.title}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-text mb-4 leading-tight">
              {person.name}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {person.laqabs.map(laqab => (
                <span key={laqab} className="text-xs text-secondary-text bg-card-bg border border-gold-border/20 px-3 py-1 rounded-sm">
                  {laqab}
                </span>
              ))}
            </div>
            {(person.birth || person.death) && (
              <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-sm text-secondary-text/80">
                 {person.birth && <span>Doğum: <span className="text-primary-text font-serif">{person.birth}</span></span>}
                 {person.birth && person.death && <span className="w-1 h-1 rounded-full bg-gold-border"></span>}
                 {person.death && <span>Şehadet: <span className="text-primary-text font-serif">{person.death}</span></span>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="px-6 max-w-5xl mx-auto">
        
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gold-border/20 mb-12">
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
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {activeTab === "hayati" && (
              <motion.div
                key="hayati"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="prose prose-invert max-w-[75ch] prose-p:leading-relaxed prose-p:font-light prose-p:text-secondary-text prose-headings:font-serif prose-headings:text-primary-text prose-a:text-antique-gold hover:prose-a:text-light-gold"
                dangerouslySetInnerHTML={{ __html: (person.life || person.bio || '') }}
              />
            )}

            {activeTab === "kronoloji" && (
              <motion.div
                key="kronoloji"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Timeline events={person.chronology || []} />
              </motion.div>
            )}

            {activeTab === "sozleri" && (
              <motion.div
                key="sozleri"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {(person.quotes || []).map((quote, idx) => (
                  <div key={idx} className="card-base p-8 relative group">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-antique-gold/10 group-hover:text-antique-gold/20 transition-colors" />
                    <p className="font-serif text-xl text-primary-text mb-6 leading-relaxed relative z-10 text-balance">
                      "{quote.text}"
                    </p>
                    <span className="text-sm text-secondary-text italic block">
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
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                {relatedBooksData.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-serif text-primary-text mb-6 flex items-center gap-2 pb-2 border-b border-gold-border/10">
                      <BookOpen className="w-5 h-5 text-antique-gold" /> İlgili Kütüphane Kaynakları
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {relatedBooksData.map(book => (
                        <Link href={`/kutuphane/${book.slug}`} key={book.id}>
                          <div className="p-4 border border-gold-border/20 rounded-md hover:border-antique-gold/50 transition-colors bg-card-bg flex gap-4 items-center group">
                            <div className="w-12 h-16 bg-background-secondary border border-gold-border/20 rounded-sm flex-shrink-0 flex items-center justify-center">
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
                    <h3 className="text-2xl font-serif text-primary-text mb-6 flex items-center gap-2 pb-2 border-b border-gold-border/10">
                      <FileText className="w-5 h-5 text-antique-gold" /> Akademik Makaleler
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {relatedArticlesData.map(article => (
                        <Link href={`/defterler/${article.slug}`} key={article.id}>
                          <div className="p-5 border border-gold-border/20 rounded-md hover:border-antique-gold/50 transition-colors bg-card-bg group h-full">
                            <span className="text-[10px] uppercase tracking-widest text-antique-gold/80 block mb-2">{article.category}</span>
                            <h4 className="font-serif text-lg text-primary-text group-hover:text-antique-gold transition-colors line-clamp-2 mb-2">{article.title}</h4>
                            <p className="text-xs text-secondary-text">{article.author}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {relatedBooksData.length === 0 && relatedArticlesData.length === 0 && (
                  <p className="text-secondary-text italic py-10">Bu şahıs ile ilgili henüz sisteme eklenmiş bir eser veya makale bulunmamaktadır.</p>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
