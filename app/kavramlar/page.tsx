"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Search, Book } from "lucide-react";
import { mockConcepts } from "@/lib/mock-data";

export default function KavramlarPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConcepts = mockConcepts.filter(concept => 
    concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    concept.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-section-lg">
      {/* Hero */}
      <section className="py-section px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="section-label">Ansiklopedi</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-4">
            İslami Kavramlar
          </h1>
          <p className="text-secondary-text text-base leading-relaxed">
            Şii düşüncesi ve Kur'an iklimindeki temel kavramların sözlük, ıstılah ve detaylı incelemeleri.
          </p>
        </motion.div>
      </section>

      {/* Search */}
      <section className="px-6 mb-12">
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/40" />
          <input
            type="text"
            placeholder="Kavramlarda ara (örn. İmamet)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card-bg border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3 text-primary-text text-sm placeholder:text-secondary-text/30 focus:outline-none transition-colors"
          />
        </div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredConcepts.length > 0 ? (
              filteredConcepts.map((concept, index) => (
                <Link href={`/kavramlar/${concept.slug}`} key={concept.slug}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="card-base p-8 hover:-translate-y-1 transition-transform group flex flex-col h-full bg-card-bg/20 border border-gold-border/20 hover:border-antique-gold/40"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Book className="w-5 h-5 text-antique-gold/50 group-hover:text-antique-gold transition-colors" />
                      <h2 className="font-serif text-2xl text-primary-text group-hover:text-antique-gold transition-colors">
                        {concept.title}
                      </h2>
                    </div>
                    
                    <p className="text-secondary-text text-sm leading-relaxed mb-6 flex-1 line-clamp-3 font-light">
                      {concept.definition}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gold-border/20 flex items-center justify-between">
                      <div className="flex gap-2">
                        {(concept.relatedArticles.length > 0 || concept.relatedBooks.length > 0) && (
                          <span className="text-[10px] uppercase tracking-wider text-antique-gold/70 bg-antique-gold/10 px-2 py-1 rounded">
                            {concept.relatedArticles.length + concept.relatedBooks.length} İlgili Kaynak
                          </span>
                        )}
                      </div>
                      <span className="text-antique-gold text-xs tracking-wider uppercase group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Devamı <ChevronRightIcon className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 text-center py-12 text-secondary-text">
                Aradığınız kriterlere uygun kavram bulunamadı.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
