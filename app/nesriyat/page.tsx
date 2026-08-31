"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, ChevronRight } from "lucide-react";
import { mockPublications } from "@/lib/mock-data";

export default function NesriyatPage() {
  return (
    <div className="pt-24 pb-section-lg">
      <section className="py-section px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="section-label">Yayınlar</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-4">
            Neşriyat
          </h1>
          <p className="text-secondary-text text-base leading-relaxed">
            Araştırma dosyaları, makaleler, özel yayınlar, PDF çalışmalar,
            dergiler ve kitapçıklar.
          </p>
        </motion.div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockPublications.map((pub, index) => (
              <Link href={`/nesriyat/${pub.slug}`} key={pub.id} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-base p-6 hover:-translate-y-1 transition-transform group flex flex-col md:flex-row gap-6 h-full"
                >
                  <div className="w-full md:w-32 h-40 bg-antique-gold/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-antique-gold/10 transition-colors border border-antique-gold/10">
                    <FileText className="w-12 h-12 text-antique-gold/30 group-hover:text-antique-gold/50 transition-colors" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] tracking-wider uppercase text-antique-gold px-2.5 py-1 bg-antique-gold/10 rounded border border-antique-gold/20">
                        {pub.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-secondary-text/60 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        {pub.date}
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-xl text-primary-text mb-2 group-hover:text-antique-gold transition-colors">
                      {pub.title}
                    </h3>
                    
                    <p className="text-secondary-text text-sm leading-relaxed mb-4 flex-1">
                      {pub.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gold-border/30 mt-auto">
                      <span className="text-xs text-secondary-text/60">
                        {pub.downloadSize}
                      </span>
                      <span className="flex items-center gap-2 text-xs text-antique-gold hover:text-antique-gold/80 transition-colors uppercase tracking-wider font-medium">
                        İncele <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
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
