"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Book, FileText, User, Info, Bookmark, ExternalLink } from "lucide-react";
import { mockConcepts, mockBooks, mockArticles, mockPersons } from "@/lib/mock-data";

export default function KavramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const concept = mockConcepts.find((c) => c.slug === slug);

  if (!concept) {
    notFound();
  }

  const relatedBooksData = mockBooks.filter(b => concept.relatedBooks.includes(b.id));
  const relatedArticlesData = mockArticles.filter(a => concept.relatedArticles.includes(a.slug));
  const relatedPersonsData = mockPersons.filter(p => concept.relatedPersons.includes(p.slug));

  return (
    <div className="pt-24 pb-32 bg-background">
      
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 mb-8 mt-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-foreground transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/kavramlar" className="hover:text-foreground transition-colors">Ansiklopedi</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">{concept.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Main Content (Left) */}
        <div className="w-full lg:w-2/3 xl:w-3/4">
          
          {/* Header */}
          <header className="mb-12 border-b border-border/50 pb-8">
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
              {concept.title}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xl text-muted-foreground font-arabic rtl-text" style={{ direction: 'rtl' }}>
                {/* Fallback arabic transliteration (mock) */}
                {concept.title === 'İmamet' ? 'الإمامة' : 
                 concept.title === 'Mehdeviyet' ? 'المهدوية' : 
                 concept.title === 'Velayet' ? 'الولاية' : ''}
              </span>
              <span className="text-xs uppercase tracking-widest text-primary border border-primary/20 px-2.5 py-1 rounded-sm bg-primary/5">
                Istılah
              </span>
            </div>
            <p className="text-xl text-muted-foreground/90 font-light leading-relaxed">
              {concept.definition}
            </p>
          </header>

          {/* Academic Content Sections */}
          <article className="space-y-16">
            
            <section id="kelime-kokeni">
              <h2 className="font-serif text-3xl text-foreground mb-6 pb-2 border-b border-border/50">1. Kelime Kökeni ve Istılah</h2>
              <div className="text-muted-foreground leading-relaxed font-light text-lg">
                <p>{concept.etymology}</p>
              </div>
            </section>

            <section id="kuran">
              <h2 className="font-serif text-3xl text-foreground mb-6 pb-2 border-b border-border/50">2. Kur'an-ı Kerim'de Yeri</h2>
              <div className="bg-muted/30 p-8 rounded-md border-l-4 border-l-primary/60">
                <p className="text-muted-foreground/90 leading-relaxed font-light text-lg">
                  {concept.quranicUsage}
                </p>
              </div>
            </section>

            {concept.hadithUsage && (
              <section id="hadis">
                <h2 className="font-serif text-3xl text-foreground mb-6 pb-2 border-b border-border/50">3. Hadis ve Rivayetlerde</h2>
                <div className="bg-muted/30 p-8 rounded-md border-l-4 border-l-emerald-600/60">
                  <p className="text-muted-foreground/90 leading-relaxed font-light text-lg">
                    {concept.hadithUsage}
                  </p>
                </div>
              </section>
            )}

            {/* Bibliography */}
            {concept.bibliography && concept.bibliography.length > 0 && (
              <section id="kaynakca" className="pt-8 mt-16 border-t border-border/50">
                <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-primary" /> Kaynakça
                </h3>
                <ul className="space-y-3">
                  {concept.bibliography.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary/50">[{idx + 1}]</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </article>
        </div>

        {/* Sidebar (Right) - Info Box & TOC */}
        <aside className="w-full lg:w-1/3 xl:w-1/4 shrink-0 space-y-8">
          
          {/* Wikipedia style Info Box */}
          <div className="card-base p-6 border-t-4 border-t-primary">
            <h3 className="font-serif text-xl text-foreground mb-6 text-center">{concept.title}</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-xs text-muted-foreground/70 uppercase font-medium">Kategori</span>
                <span className="text-sm text-foreground">Akaid / Kelam</span>
              </div>
              
              {relatedPersonsData.length > 0 && (
                <div className="flex flex-col py-2 border-b border-border/50">
                  <span className="text-xs text-muted-foreground/70 uppercase font-medium mb-2">Önemli Şahsiyetler</span>
                  <div className="flex flex-wrap gap-2">
                    {relatedPersonsData.map(person => (
                      <Link key={person.slug} href={`/ehlibeyt/${person.slug}`} className="text-xs text-primary hover:underline">
                        {person.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="pt-4 flex justify-center">
                <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="w-3 h-3" /> Maddeyi Paylaş
                </button>
              </div>
            </div>
          </div>

          {/* Sticky Table of Contents */}
          <div className="sticky top-24 card-base p-6 hidden lg:block">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground/80 font-medium mb-4 flex items-center gap-2">
              <Book className="w-4 h-4 text-primary" /> İçindekiler
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#kelime-kokeni" className="hover:text-primary transition-colors">1. Kelime Kökeni ve Istılah</a></li>
              <li><a href="#kuran" className="hover:text-primary transition-colors">2. Kur'an-ı Kerim'de Yeri</a></li>
              {concept.hadithUsage && <li><a href="#hadis" className="hover:text-primary transition-colors">3. Hadis ve Rivayetlerde</a></li>}
              {concept.bibliography && concept.bibliography.length > 0 && <li><a href="#kaynakca" className="hover:text-primary transition-colors">4. Kaynakça</a></li>}
            </ul>
          </div>
          
        </aside>

      </div>

      {/* Bottom Cross-linking Section */}
      <div className="max-w-6xl mx-auto px-6 mt-24 pt-16 border-t border-border/50">
        <h2 className="section-label mb-8">Knowledge Graph</h2>
        <h3 className="font-serif text-3xl text-foreground mb-12">İlgili Araştırma Ağı</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Books */}
          {relatedBooksData.length > 0 && (
            <div>
              <h4 className="text-sm font-medium tracking-wide uppercase text-primary flex items-center gap-2 mb-6">
                <Book className="w-4 h-4" /> Temel Eserler
              </h4>
              <div className="space-y-4">
                {relatedBooksData.map(book => (
                  <Link href={`/kutuphane/${book.slug}`} key={book.id}>
                    <div className="flex items-center gap-4 p-4 border border-border/50 rounded-md hover:border-primary/40 hover:bg-muted/50 transition-colors group">
                      <div className="w-10 h-14 bg-muted/30 border border-border/50 rounded-sm flex items-center justify-center shrink-0">
                        <Book className="w-4 h-4 text-primary/40" />
                      </div>
                      <div>
                        <h5 className="font-serif text-foreground group-hover:text-primary transition-colors">{book.title}</h5>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {relatedArticlesData.length > 0 && (
            <div>
              <h4 className="text-sm font-medium tracking-wide uppercase text-primary flex items-center gap-2 mb-6">
                <FileText className="w-4 h-4" /> Akademik Makaleler
              </h4>
              <div className="space-y-4">
                {relatedArticlesData.map(article => (
                  <Link href={`/defterler/${article.slug}`} key={article.id}>
                    <div className="p-4 border border-border/50 rounded-md hover:border-primary/40 hover:bg-muted/50 transition-colors group">
                      <span className="text-[10px] uppercase text-primary/60">{article.category}</span>
                      <h5 className="font-serif text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-1">{article.title}</h5>
                      <p className="text-xs text-muted-foreground mt-2">{article.readTime} okuma</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      
    </div>
  );
}
