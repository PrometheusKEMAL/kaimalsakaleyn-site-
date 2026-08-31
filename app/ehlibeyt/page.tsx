"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mockPersons } from "@/lib/mock-data";

export default function EhlibeytPage() {
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
            Ehl-i Beyt (a.s)
          </h1>
          <p className="text-secondary-text text-base leading-relaxed">
            Peygamber Efendimiz (s.a.v) ve O'nun pak soyundan gelen masum İmamların hayatları, kronolojileri ve hikmetli sözleri.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mockPersons.map((person, index) => (
              <Link href={`/ehlibeyt/${person.slug}`} key={person.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-base p-8 hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-antique-gold/5 rounded-full blur-[50px] group-hover:bg-antique-gold/20 transition-colors duration-700" />
                  
                  <div className="relative z-10 flex-1">
                    <span className="text-[10px] tracking-wider uppercase text-antique-gold/80 bg-antique-gold/10 px-2 py-1 rounded inline-block mb-4">
                      Masumin
                    </span>
                    <h2 className="font-serif text-3xl text-primary-text mb-2 group-hover:text-antique-gold transition-colors">
                      {person.name}
                    </h2>
                    <p className="text-secondary-text text-sm italic font-light mb-6">
                      "{person.title}"
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {person.laqabs.slice(0, 3).map((laqab) => (
                        <span key={laqab} className="text-xs text-secondary-text/60 border border-gold-border/20 rounded px-2 py-1">
                          {laqab}
                        </span>
                      ))}
                      {person.laqabs.length > 3 && (
                        <span className="text-xs text-secondary-text/60 border border-gold-border/20 rounded px-2 py-1">
                          +{person.laqabs.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gold-border/20 flex items-center justify-between relative z-10">
                    <span className="text-sm text-secondary-text group-hover:text-primary-text transition-colors">
                      İncele
                    </span>
                    <span className="text-antique-gold transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
