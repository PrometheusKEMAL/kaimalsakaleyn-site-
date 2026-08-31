import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Book,
  ChevronRight,
  Info,
  BookOpen,
  FileText,
  ExternalLink,
  ShieldAlert,
  Globe,
  Hash,
  Library,
  Languages,
  User,
  PenTool
} from "lucide-react";
import { mockBooks } from "@/lib/mock-data";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = mockBooks.find((b) => b.slug === slug);
  
  if (!book) return {};

  return {
    title: `${book.title} | KaimAlSakaleyn Kütüphanesi`,
    description: book.summary,
    openGraph: {
      title: book.title,
      description: book.summary,
      type: "book",
      authors: [book.author],
      isbn: book.isbn,
    },
    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.summary,
    }
  };
}

export default async function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = mockBooks.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="pt-24 pb-section-lg bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            "name": book.title,
            "author": {
              "@type": "Person",
              "name": book.author
            },
            "publisher": {
              "@type": "Organization",
              "name": book.publisher || siteConfig.name
            },
            "isbn": book.isbn,
            "numberOfPages": book.pageCount,
            "inLanguage": book.language,
            "description": book.summary
          })
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-secondary-text mb-10 font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-antique-gold transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/kutuphane" className="hover:text-antique-gold transition-colors">Kütüphane</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary-text truncate max-w-[200px]">{book.category}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Cover & Actions */}
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            {/* Cover Placeholder */}
            <div className="relative aspect-[2/3] bg-gradient-to-br from-card-bg to-card-bg/50 border border-gold-border/40 rounded-xl mb-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 to-transparent z-20" />
              <div className="absolute top-0 right-0 w-full h-full bg-antique-gold/5 blur-[40px] group-hover:bg-antique-gold/15 transition-colors duration-700" />
              
              <Book className="w-20 h-20 text-antique-gold/30 mb-6 group-hover:scale-110 transition-transform duration-700" />
              <h2 className="font-serif text-lg text-primary-text text-center px-6 leading-tight z-10 text-balance">
                {book.title}
              </h2>
              <span className="text-secondary-text/60 text-xs mt-4 z-10">{book.author}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="btn-primary w-full justify-center group flex items-center gap-2 py-3.5">
                <BookOpen className="w-4 h-4" />
                Online Oku
              </button>
              <button className="flex justify-center items-center gap-2 w-full py-3.5 rounded border border-gold-border/50 text-sm text-secondary-text hover:bg-card-bg hover:text-primary-text transition-all">
                <FileText className="w-4 h-4 text-antique-gold/60" />
                PDF İndir / Aç
              </button>
              <button className="flex justify-center items-center gap-2 w-full py-3.5 rounded border border-gold-border/30 text-sm text-secondary-text/70 hover:bg-card-bg hover:text-primary-text transition-all">
                <ExternalLink className="w-4 h-4" />
                Kaynağa Git
              </button>
            </div>
            
            {/* Copyright Warning */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-card-bg/30 border border-gold-border/20">
              <ShieldAlert className="w-5 h-5 text-antique-gold/60 shrink-0 mt-0.5" />
              <p className="text-xs text-secondary-text/80 leading-relaxed">
                {book.copyrightStatus}
              </p>
            </div>
          </div>

          {/* Right Column: Metadata & Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            
            <header className="mb-12">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-antique-gold/10 border border-antique-gold/20 rounded text-[10px] tracking-wider uppercase text-antique-gold">
                  {book.category}
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-text mb-4 leading-[1.1]">
                {book.title}
              </h1>
              {book.originalTitle !== "-" && (
                <h2 className="font-serif text-xl md:text-2xl text-secondary-text italic font-light mb-8">
                  {book.originalTitle}
                </h2>
              )}
            </header>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-8 border-y border-gold-border/30 mb-12 bg-card-bg/10 rounded-xl px-6 md:px-8">
              
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-secondary-text/60 uppercase tracking-wider mb-2">
                  <User className="w-3.5 h-3.5" /> Müellif
                </span>
                <span className="text-primary-text">{book.author}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-secondary-text/60 uppercase tracking-wider mb-2">
                  <PenTool className="w-3.5 h-3.5" /> Mütercim
                </span>
                <span className="text-primary-text">{book.translator}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-secondary-text/60 uppercase tracking-wider mb-2">
                  <Info className="w-3.5 h-3.5" /> Tahkik
                </span>
                <span className="text-primary-text">{book.verification}</span>
              </div>

              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-secondary-text/60 uppercase tracking-wider mb-2">
                  <Library className="w-3.5 h-3.5" /> Yayınevi / Baskı
                </span>
                <span className="text-primary-text">{book.publisher}, {book.edition}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-secondary-text/60 uppercase tracking-wider mb-2">
                  <Languages className="w-3.5 h-3.5" /> Dil / Sayfa
                </span>
                <span className="text-primary-text">{book.language}, {book.pageCount} Sayfa</span>
              </div>
              
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-secondary-text/60 uppercase tracking-wider mb-2">
                  <Hash className="w-3.5 h-3.5" /> ISBN / Yıl
                </span>
                <span className="text-primary-text">{book.isbn} - {book.year}</span>
              </div>
              
            </div>

            {/* Summary & Intro */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl text-primary-text mb-6">Kısa Tanıtım</h3>
              <p className="text-secondary-text/90 leading-relaxed font-light text-lg">
                {book.summary}
              </p>
            </div>

            {/* TOC (Table of Contents) */}
            {book.toc && book.toc.length > 0 && (
              <div className="bg-card-bg/20 border border-gold-border/20 rounded-2xl p-8">
                <h3 className="font-serif text-2xl text-primary-text mb-6 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-antique-gold" /> İçindekiler
                </h3>
                <ul className="space-y-3">
                  {book.toc.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-secondary-text/80 hover:text-primary-text transition-colors border-b border-gold-border/10 pb-3 last:border-0 last:pb-0">
                      <span className="text-antique-gold/60 font-serif w-6 shrink-0">{index + 1}.</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>

        </div>
      </div>
    </div>
  );
}
