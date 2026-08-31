"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-base p-16 text-center"
          >
            <FileText className="w-12 h-12 text-antique-gold/15 mx-auto mb-5" />
            <h2 className="font-serif text-xl text-primary-text mb-3">
              Yayınlar Hazırlanıyor
            </h2>
            <p className="text-secondary-text text-sm max-w-md mx-auto leading-relaxed">
              Neşriyat bölümüne yeni araştırma ve yayınlar eklenmektedir.
              İçerikler admin panelinden yönetilmektedir.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
