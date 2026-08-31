"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, FileText, Calendar, Download, Eye, Tag, Share2 } from "lucide-react";
import { mockPublications } from "@/lib/mock-data";

export default function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const publication = mockPublications.find((p) => p.slug === slug);

  if (!publication) {
    notFound();
  }

  return (
    <div className="pt-24 pb-section-lg bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-secondary-text mb-10 font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-antique-gold transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/nesriyat" className="hover:text-antique-gold transition-colors">Neşriyat</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary-text">{publication.type}</span>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <div>
            <span className="inline-block px-3 py-1 bg-antique-gold/10 border border-antique-gold/20 rounded text-[10px] tracking-wider uppercase text-antique-gold mb-4">
              {publication.category || publication.type}
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
              {publication.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-secondary-text mb-8 pb-8 border-b border-gold-border/20">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-antique-gold/60" /> {publication.date}
              </span>
              {publication.editor && (
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-antique-gold/60" /> {publication.editor}
                </span>
              )}
            </div>

            <div className="prose prose-invert prose-lg max-w-none font-light text-secondary-text/90 leading-relaxed mb-12">
              <p>{publication.description}</p>
            </div>

            {publication.bibliography && publication.bibliography.length > 0 && (
              <div className="bg-card-bg/20 border border-gold-border/20 rounded-xl p-6 mb-12">
                <h3 className="font-serif text-lg text-primary-text mb-4 border-b border-gold-border/20 pb-2">Kaynakça</h3>
                <ul className="list-disc list-inside text-sm text-secondary-text/80 space-y-2">
                  {publication.bibliography.map((bib, idx) => (
                    <li key={idx}>{bib}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-card-bg/30 border border-gold-border/30 rounded-2xl p-6 sticky top-24">
              <div className="w-full aspect-[3/4] bg-antique-gold/5 rounded-lg border border-antique-gold/10 flex items-center justify-center mb-6">
                <FileText className="w-16 h-16 text-antique-gold/30" />
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm border-b border-gold-border/10 pb-2">
                  <span className="text-secondary-text/60">Dosya Tipi</span>
                  <span className="text-primary-text font-medium">{publication.type}</span>
                </div>
                {publication.pageCount && (
                  <div className="flex justify-between items-center text-sm border-b border-gold-border/10 pb-2">
                    <span className="text-secondary-text/60">Sayfa Sayısı</span>
                    <span className="text-primary-text font-medium">{publication.pageCount} Sayfa</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-sm border-b border-gold-border/10 pb-2">
                  <span className="text-secondary-text/60">Boyut</span>
                  <span className="text-primary-text font-medium">{publication.downloadSize}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 bg-antique-gold text-background rounded font-medium hover:bg-antique-gold/90 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> İndir
                </button>
                <button className="w-full py-3 border border-antique-gold text-antique-gold rounded font-medium hover:bg-antique-gold/10 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" /> PDF Oku
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gold-border/20 flex justify-center">
                <button className="flex items-center gap-2 text-xs text-secondary-text hover:text-primary-text transition-colors">
                  <Share2 className="w-4 h-4" /> Sayfayı Paylaş
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
