"use client";

import Link from "next/link";
import { BookOpen, Search } from "lucide-react";

export default function mehdeviyetPage() {
  return (
    <div className="pt-24 pb-32 min-h-screen">
      <section className="py-16 px-6 text-center border-b border-gold-border/10 bg-background-secondary/50">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-6">Bilgi Merkezi</span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
            Mehdeviyet Araştırmaları
          </h1>
          <p className="text-secondary-text text-lg leading-relaxed max-w-2xl mx-auto font-light text-balance">
            İntizar, gaybet ve zuhur üzerine incelemeler.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-text/50" />
          <input
            type="text"
            placeholder="İçerik ara..."
            className="w-full bg-card-bg border border-gold-border/30 focus:border-antique-gold/50 rounded-md pl-12 pr-4 py-3 text-primary-text transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className="card-base p-6 text-center border-dashed border-gold-border/30 hover:border-antique-gold/50 cursor-default">
             <BookOpen className="w-8 h-8 mx-auto mb-4 text-antique-gold/40" />
             <h3 className="font-serif text-xl text-primary-text mb-2">Editoryal Süreçte</h3>
             <p className="text-sm text-secondary-text">Bu merkezdeki içerikler taslak aşamasındadır ve kaynak kontrolünden geçmektedir.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
