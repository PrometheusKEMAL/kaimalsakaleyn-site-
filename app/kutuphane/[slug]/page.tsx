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
  PenTool,
  CheckCircle2
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
    <div className="pt-24 pb-32 bg-background">
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
          <Link href="/" className="hover:text-primary-text transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/kutuphane" className="hover:text-primary-text transition-colors">Kütüphane</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-antique-gold truncate max-w-[200px]">{book.category}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Cover & Actions */}
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            {/* Cover Placeholder */}
            <div className="relative aspect-[2/3] bg-card-bg border border-gold-border/40 rounded-md mb-6 flex flex-col items-center justify-center shadow-card overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/80 to-transparent z-20" />
              
              <Book className="w-16 h-16 text-antique-gold/20 mb-6 group-hover:text-antique-gold/40 transition-colors duration-500" />
              <h2 className="font-serif text-lg text-primary-text text-center px-6 leading-tight z-10 text-balance">
                {book.title}
              </h2>
              <span className="text-secondary-text text-xs mt-4 z-10">{book.author}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="btn-primary w-full justify-center group flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Online Oku
              </button>
              <button className="flex justify-center items-center gap-2 w-full py-2.5 rounded-sm border border-gold-border/40 text-sm text-secondary-text hover:bg-white/5 hover:text-primary-text transition-all">
                <FileText className="w-4 h-4" />
                PDF İndir / Aç
              </button>
              <button className="flex justify-center items-center gap-2 w-full py-2.5 rounded-sm border border-gold-border/20 text-sm text-secondary-text hover:bg-white/5 hover:text-primary-text transition-all">
                <ExternalLink className="w-4 h-4" />
                Kaynağa Git
              </button>
            </div>
            
            {/* Copyright Warning */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-md bg-background-secondary border border-gold-border/10">
              <ShieldAlert className="w-4 h-4 text-secondary-text shrink-0 mt-0.5" />
              <p className="text-[11px] text-secondary-text leading-relaxed">
                {book.copyrightStatus}
              </p>
            </div>
          </div>

          {/* Right Column: Metadata & Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            
            <header className="mb-12 border-b border-gold-border/20 pb-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-2.5 py-1 bg-background-secondary border border-gold-border/20 rounded-sm text-[10px] tracking-widest uppercase text-antique-gold">
                  {book.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-primary-emerald bg-primary-emerald/10 border border-primary-emerald/20 px-2.5 py-1 rounded-sm">
                  <CheckCircle2 className="w-3 h-3" /> Doğrulanmış Kaynak
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-text mb-4 leading-tight">
                {book.title}
              </h1>
              {book.originalTitle !== "-" && (
                <h2 className="text-2xl text-secondary-text font-arabic rtl-text" style={{ direction: 'rtl' }}>
                  {book.originalTitle}
                </h2>
              )}
            </header>

            {/* Academic Metadata Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 mb-16">
              
              <div className="flex flex-col border-l border-gold-border/20 pl-4">
                <span className="text-[10px] text-secondary-text uppercase tracking-widest mb-1.5">Müellif</span>
                <span className="text-sm font-medium text-primary-text">{book.author}</span>
              </div>
              
              <div className="flex flex-col border-l border-gold-border/20 pl-4">
                <span className="text-[10px] text-secondary-text uppercase tracking-widest mb-1.5">Mütercim</span>
                <span className="text-sm font-medium text-primary-text">{book.translator}</span>
              </div>
              
              <div className="flex flex-col border-l border-gold-border/20 pl-4">
                <span className="text-[10px] text-secondary-text uppercase tracking-widest mb-1.5">Tahkik</span>
                <span className="text-sm font-medium text-primary-text">{book.verification}</span>
              </div>

              <div className="flex flex-col border-l border-gold-border/20 pl-4">
                <span className="text-[10px] text-secondary-text uppercase tracking-widest mb-1.5">Yayınevi & Baskı</span>
                <span className="text-sm font-medium text-primary-text">{book.publisher}, {book.edition}</span>
              </div>
              
              <div className="flex flex-col border-l border-gold-border/20 pl-4">
                <span className="text-[10px] text-secondary-text uppercase tracking-widest mb-1.5">Dil & Hacim</span>
                <span className="text-sm font-medium text-primary-text">{book.language}, {book.pageCount} Syf</span>
              </div>
              
              <div className="flex flex-col border-l border-gold-border/20 pl-4">
                <span className="text-[10px] text-secondary-text uppercase tracking-widest mb-1.5">ISBN & Yıl</span>
                <span className="text-sm font-medium text-primary-text font-mono">{book.isbn} • {book.year}</span>
              </div>
              
            </div>

            {/* Navigation Tabs Placeholder */}
            <div className="flex items-center gap-6 border-b border-gold-border/20 mb-8">
              <button className="text-sm font-medium text-antique-gold border-b-2 border-antique-gold pb-3">Eser Hakkında</button>
              <button className="text-sm font-medium text-secondary-text hover:text-primary-text pb-3 transition-colors">İçindekiler</button>
              <button className="text-sm font-medium text-secondary-text hover:text-primary-text pb-3 transition-colors">Müellif</button>
              <button className="text-sm font-medium text-secondary-text hover:text-primary-text pb-3 transition-colors">Kaynak Bilgileri</button>
            </div>

            {/* Summary & Intro */}
            <div className="mb-16 reading-width ml-0">
              <p className="text-secondary-text leading-relaxed font-light text-base text-balance">
                {book.summary}
              </p>
            </div>

            {/* TOC (Table of Contents) */}
            {book.toc && book.toc.length > 0 && (
              <div className="bg-background-secondary rounded-md p-8 border border-gold-border/10">
                <h3 className="font-serif text-xl text-primary-text mb-6 flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-antique-gold" /> İçindekiler
                </h3>
                <ul className="space-y-3">
                  {book.toc.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-sm text-secondary-text hover:text-primary-text transition-colors">
                      <span className="text-antique-gold/50 font-serif w-6 shrink-0">{index + 1}.</span>
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
