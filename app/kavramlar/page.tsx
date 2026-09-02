"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { mockConcepts } from "@/lib/mock-data";
import { ConceptCard } from "@/components/ui/ConceptCard";

const alphabet = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split("");

export default function KavramlarPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  // Filter by search query and active letter
  const filteredConcepts = mockConcepts.filter(concept => {
    const matchesSearch = 
      concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.definition.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLetter = activeLetter 
      ? concept.title.toLocaleUpperCase('tr-TR').startsWith(activeLetter)
      : true;

    return matchesSearch && matchesLetter;
  });

  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="py-16 px-6 text-center border-b border-border/50 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-6">İlim Sözlüğü</span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Şiî Kavramlar Ansiklopedisi
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-light text-balance">
            Kur'an ve Ehl-i Beyt ekolündeki temel ıstılahların, fıkhi ve kelami
            kavramların akademik tanımları ve kaynak analizleri.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-6 py-12 border-b border-border/50 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
              <input
                type="text"
                placeholder="Kavramlarda ara (örn. İmamet)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-border/50 focus:border-primary/50 rounded-md pl-11 pr-4 py-3 text-foreground text-sm focus:outline-none transition-colors"
              />
            </div>

            {/* Alphabet Filter */}
            <div className="flex flex-wrap justify-center gap-1">
              <button
                onClick={() => setActiveLetter(null)}
                className={`w-8 h-8 flex items-center justify-center text-xs font-medium rounded-sm transition-colors ${
                  activeLetter === null 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                }`}
              >
                Hepsi
              </button>
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => setActiveLetter(letter)}
                  className={`w-8 h-8 flex items-center justify-center text-xs font-medium rounded-sm transition-colors ${
                    activeLetter === letter 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-6 text-sm text-muted-foreground">
            {filteredConcepts.length} kavram listeleniyor
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConcepts.map(concept => (
              <ConceptCard 
                key={concept.slug}
                slug={concept.slug}
                title={concept.title}
                definition={concept.definition}
                category="Ansiklopedi Maddesi"
              />
            ))}
          </div>

          {filteredConcepts.length === 0 && (
            <div className="py-24 text-center border border-dashed border-border/50 rounded-md mt-6">
              <p className="text-muted-foreground">Aradığınız kriterlere uygun kavram bulunamadı.</p>
              <button 
                onClick={() => { setActiveLetter(null); setSearchQuery(""); }}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
