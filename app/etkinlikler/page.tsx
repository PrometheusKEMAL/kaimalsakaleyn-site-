"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { mockEvents } from "@/lib/mock-data";

const eventTypes = [
  "Tümü", "Sohbet", "Ders", "Okuma", "Canlı Yayın",
  "Konferans", "Özel Program", "Anma Programı",
];

export default function EtkinliklerPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [activeType, setActiveType] = useState("Tümü");

  return (
    <div className="pt-24 pb-section-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            mockEvents.map(event => ({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": event.title,
              "startDate": event.date,
              "endDate": event.date,
              "eventAttendanceMode": event.location.includes("Çevrimiçi") || event.location.includes("Zoom") || event.location.includes("YouTube")
                ? "https://schema.org/OnlineEventAttendanceMode"
                : "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": event.location.includes("Çevrimiçi") || event.location.includes("Zoom") || event.location.includes("YouTube") ? "VirtualLocation" : "Place",
                "name": event.location,
                "url": event.location.includes("Çevrimiçi") ? event.location : undefined
              },
              "description": event.description
            }))
          )
        }}
      />
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

      {/* Content List */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {mockEvents
              .filter(
                (event) =>
                  (activeType === "Tümü" || event.type === activeType) &&
                  (activeTab === "past" ? event.isPast : !event.isPast)
              )
              .map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-base p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-antique-gold/30 transition-colors group"
                >
                  <div className="flex flex-col items-center justify-center w-24 h-24 bg-antique-gold/5 rounded-xl border border-antique-gold/10 shrink-0 group-hover:bg-antique-gold/10 transition-colors">
                    <span className="text-sm text-antique-gold/80 font-medium uppercase tracking-widest">
                      {new Date(event.date).toLocaleDateString('tr-TR', { month: 'short' })}
                    </span>
                    <span className="font-serif text-3xl text-antique-gold">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] tracking-wider uppercase text-primary-emerald px-2.5 py-1 bg-primary-emerald/10 rounded border border-primary-emerald/20">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl text-primary-text mb-3 group-hover:text-antique-gold transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-secondary-text leading-relaxed mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gold-border/30">
                      <div className="flex items-center gap-1.5 text-secondary-text/80 text-sm">
                        <Clock className="w-4 h-4 text-antique-gold/60" />
                        {new Date(event.date).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div className="flex items-center gap-1.5 text-secondary-text/80 text-sm">
                        <MapPin className="w-4 h-4 text-antique-gold/60" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
            {mockEvents.filter((event) => (activeType === "Tümü" || event.type === activeType) && (activeTab === "past" ? event.isPast : !event.isPast)).length === 0 && (
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
                    ? "Seçili kategoride yaklaşan etkinlik bulunmamaktadır."
                    : "Seçili kategoride geçmiş etkinlik kaydı bulunmamaktadır."}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
