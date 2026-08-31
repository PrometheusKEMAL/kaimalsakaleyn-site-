"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const eventTypes = [
  "Tümü", "Sohbet", "Ders", "Okuma", "Canlı Yayın",
  "Konferans", "Özel Program", "Anma Programı",
];

export default function EtkinliklerPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [activeType, setActiveType] = useState("Tümü");

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
          <span className="section-label">Takvim</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-4">
            Etkinlikler
          </h1>
          <p className="text-secondary-text text-base leading-relaxed">
            Sohbetler, dersler, okuma programları, canlı yayınlar ve özel
            anma programları.
          </p>
        </motion.div>
      </section>

      {/* Tabs & Filter */}
      <section className="px-6 mb-10">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-1 mb-8">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2.5 text-[11px] tracking-wider uppercase rounded-button transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-primary-emerald text-primary-text"
                  : "text-secondary-text hover:text-primary-text"
              }`}
            >
              Yaklaşan
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-2.5 text-[11px] tracking-wider uppercase rounded-button transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-primary-emerald text-primary-text"
                  : "text-secondary-text hover:text-primary-text"
              }`}
            >
              Geçmiş
            </button>
          </div>

          {/* Event Type Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-button transition-all duration-300 ${
                  activeType === type
                    ? "bg-antique-gold/20 text-antique-gold border border-antique-gold/30"
                    : "text-secondary-text/60 hover:text-secondary-text border border-transparent"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-base p-16 text-center"
          >
            <Calendar className="w-12 h-12 text-antique-gold/15 mx-auto mb-5" />
            <h2 className="font-serif text-xl text-primary-text mb-3">
              {activeTab === "upcoming"
                ? "Yaklaşan Program Bulunmuyor"
                : "Geçmiş Etkinlik Bulunmuyor"}
            </h2>
            <p className="text-secondary-text text-sm max-w-md mx-auto leading-relaxed">
              {activeTab === "upcoming"
                ? "Yeni etkinlik ve programlar planlandığında burada duyurulacaktır."
                : "Henüz geçmiş etkinlik kaydı bulunmamaktadır."}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
