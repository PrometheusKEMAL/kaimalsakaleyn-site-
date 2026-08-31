"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Book, FileText, User } from "lucide-react";
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
    <div className="pt-24 pb-section-lg bg-background min-h-screen">
      
      {/* Hero */}
      <section className="relative px-6 py-16 border-b border-gold-border/20 bg-card-bg/30">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs text-secondary-text mb-8 font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-antique-gold transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/kavramlar" className="hover:text-antique-gold transition-colors">Kavramlar</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-text">{concept.title}</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-primary-text mb-6">
            {concept.title}
          </h1>
          <p className="text-xl text-secondary-text/90 font-light leading-relaxed max-w-2xl mx-auto">
            {concept.definition}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12 max-w-4xl mx-auto space-y-12">
        
        {/* Etymology */}
        <div>
          <h2 className="font-serif text-2xl text-primary-text mb-4 text-antique-gold">Kelime Kökeni ve Istılah</h2>
          <div className="prose prose-invert prose-gold max-w-none text-secondary-text/90 font-light leading-relaxed">
            <p>{concept.etymology}</p>
          </div>
        </div>

        {/* Quranic Usage */}
        <div>
          <h2 className="font-serif text-2xl text-primary-text mb-4 text-antique-gold">Kur'an-ı Kerim'de Yeri</h2>
          <div className="prose prose-invert prose-gold max-w-none text-secondary-text/90 font-light leading-relaxed bg-card-bg/20 p-6 rounded-xl border border-gold-border/20">
            <p>{concept.quranicUsage}</p>
          </div>
        </div>

        {/* Hadith Usage */}
        <div>
          <h2 className="font-serif text-2xl text-primary-text mb-4 text-antique-gold">Hadis ve Rivayetlerde</h2>
          <div className="prose prose-invert prose-gold max-w-none text-secondary-text/90 font-light leading-relaxed bg-card-bg/20 p-6 rounded-xl border border-gold-border/20">
            <p>{concept.hadithUsage}</p>
          </div>
        </div>

        <hr className="border-gold-border/20 my-12" />

        {/* Related Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Persons */}
          {relatedPersonsData.length > 0 && (
            <div className="col-span-1 md:col-span-2 mb-4">
              <h3 className="font-serif text-xl text-primary-text mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-antique-gold" /> İlgili Şahsiyetler
              </h3>
              <div className="flex flex-wrap gap-3">
                {relatedPersonsData.map(person => (
                  <Link href={`/ehlibeyt/${person.slug}`} key={person.slug}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-border/30 bg-card-bg/30 text-sm text-secondary-text hover:text-primary-text hover:border-antique-gold/50 transition-colors">
                      {person.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Books */}
          {relatedBooksData.length > 0 && (
            <div>
              <h3 className="font-serif text-xl text-primary-text mb-4 flex items-center gap-2">
                <Book className="w-5 h-5 text-antique-gold" /> İlgili Kitaplar
              </h3>
              <div className="space-y-3">
                {relatedBooksData.map(book => (
                  <Link href={`/kutuphane/${book.slug}`} key={book.id}>
                    <div className="p-4 border border-gold-border/20 rounded-lg hover:border-antique-gold/50 transition-colors bg-card-bg/20 group">
                      <h4 className="font-serif text-base text-primary-text group-hover:text-antique-gold transition-colors line-clamp-1">{book.title}</h4>
                      <p className="text-xs text-secondary-text">{book.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {relatedArticlesData.length > 0 && (
            <div>
              <h3 className="font-serif text-xl text-primary-text mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-antique-gold" /> İlgili Yazılar
              </h3>
              <div className="space-y-3">
                {relatedArticlesData.map(article => (
                  <Link href={`/defterler/${article.slug}`} key={article.id}>
                    <div className="p-4 border border-gold-border/20 rounded-lg hover:border-antique-gold/50 transition-colors bg-card-bg/20 group">
                      <h4 className="font-serif text-base text-primary-text group-hover:text-antique-gold transition-colors line-clamp-1">{article.title}</h4>
                      <p className="text-xs text-secondary-text">{article.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bibliography */}
        {concept.bibliography && concept.bibliography.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gold-border/20">
            <h3 className="text-sm font-medium tracking-wide uppercase text-secondary-text/60 mb-4">Kaynakça</h3>
            <ul className="list-disc list-inside text-sm text-secondary-text space-y-2">
              {concept.bibliography.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

      </section>
    </div>
  );
}
