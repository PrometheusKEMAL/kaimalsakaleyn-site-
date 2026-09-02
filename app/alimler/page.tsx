"use client";

import Link from "next/link";
import { BookOpen, Search } from "lucide-react";

export default function alimlerPage() {
  return (
    <div className="pt-24 pb-32 min-h-screen">
      <section className="py-16 px-6 text-center border-b border-border/50 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-6">Bilgi Merkezi</span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Şiî Âlimler
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-light text-balance">
            Geçmişten günümüze önde gelen Şiî uleması.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
          <input
            type="text"
            placeholder="İçerik ara..."
            className="w-full bg-card border border-border/50 focus:border-primary/50 rounded-md pl-12 pr-4 py-3 text-foreground transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className="card-base p-6 text-center border-dashed border-border/50 hover:border-primary/50 cursor-default">
             <BookOpen className="w-8 h-8 mx-auto mb-4 text-primary/40" />
             <h3 className="font-serif text-xl text-foreground mb-2">Editoryal Süreçte</h3>
             <p className="text-sm text-muted-foreground">Bu merkezdeki içerikler taslak aşamasındadır ve kaynak kontrolünden geçmektedir.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
