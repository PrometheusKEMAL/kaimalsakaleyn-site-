const fs = require('fs');
const path = require('path');

const centers = [
  { path: "kuran", name: "Kur'an Araştırma Merkezi", desc: "Ayetler, tefsirler ve Kur'an ilimleri." },
  { path: "hadis", name: "Hadis Veritabanı", desc: "Şiî hadis külliyatı ve sened araştırmaları." },
  { path: "nehcul-belaga", name: "Nehcü'l-Belâğa", desc: "İmam Ali'nin (a.s) hutbeleri, mektupları ve hikmetleri." },
  { path: "sahife-i-seccadiye", name: "Sahife-i Seccadiye", desc: "İmam Zeynelabidin'in (a.s) dua ve münacatları." },
  { path: "kerbela", name: "Kerbelâ Dosyası", desc: "Aşura, Erbain ve Kerbelâ şehitleri tarihi." },
  { path: "mehdeviyet", name: "Mehdeviyet Araştırmaları", desc: "İntizar, gaybet ve zuhur üzerine incelemeler." },
  { path: "alimler", name: "Şiî Âlimler", desc: "Geçmişten günümüze önde gelen Şiî uleması." },
];

for (const center of centers) {
  const dirPath = path.join(process.cwd(), 'app', center.path);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // layout.tsx
  const layoutContent = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${center.name} | KaimAlSakaleyn",
  description: "${center.desc}"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
  fs.writeFileSync(path.join(dirPath, 'layout.tsx'), layoutContent);

  // page.tsx
  const pageContent = `"use client";

import Link from "next/link";
import { BookOpen, Search } from "lucide-react";

export default function ${center.path.replace(/-/g, '')}Page() {
  return (
    <div className="pt-24 pb-32 min-h-screen">
      <section className="py-16 px-6 text-center border-b border-gold-border/10 bg-background-secondary/50">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-6">Bilgi Merkezi</span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
            ${center.name}
          </h1>
          <p className="text-secondary-text text-lg leading-relaxed max-w-2xl mx-auto font-light text-balance">
            ${center.desc}
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
`;
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);
  console.log('Created route:', center.path);
}
