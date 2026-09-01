"use client";

import { motion } from "framer-motion";
import { Users, FileText, Library, CalendarDays, TrendingUp, AlertTriangle, FilePenLine, Database, Activity, ArchiveX } from "lucide-react";
import { mockArticles, mockBooks, mockConcepts, generatedConcepts, mockPersons, generatedScholars } from "@/lib/mock-data";
import Link from "next/link";

export default function AdminDashboardPage() {
  const allConcepts = [...mockConcepts, ...generatedConcepts];
  const allPersons = [...mockPersons, ...generatedScholars];
  
  const totalContent = mockArticles.length + mockBooks.length + allConcepts.length + allPersons.length;
  const draftContent = allConcepts.filter(c => c.editorialStatus === 'draft').length + allPersons.filter(p => p.editorialStatus === 'draft').length;
  
  // Simulated missing sources (AI generated content without a proper bibliography)
  const unverifiedSources = [...allConcepts, ...allPersons].filter(item => item.aiGenerated && item.editorialStatus !== 'published');

  const stats = [
    { label: "Toplam İçerik", value: totalContent.toString(), icon: Database, trend: "Sistemdeki tüm varlıklar" },
    { label: "Editoryal Taslak", value: draftContent.toString(), icon: FilePenLine, trend: "İnceleme bekliyor" },
    { label: "Yayınlanmış", value: (totalContent - draftContent).toString(), icon: Activity, trend: "Yayında" },
    { label: "Kaynak Eksik", value: unverifiedSources.length.toString(), icon: ArchiveX, trend: "Kritik uyarı" },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-display-sm text-primary-text mb-2">
          Editoryal Kontrol Paneli
        </h1>
        <p className="text-secondary-text text-sm">
          Knowledge Graph ve içerik iş akışı özeti.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card-base p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-5 h-5 text-antique-gold" />
            </div>
            <div className="mb-2">
              <span className="font-serif text-3xl text-primary-text">
                {stat.value}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-secondary-text/80">
                {stat.label}
              </span>
              <span className="text-xs text-secondary-text/60">
                {stat.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Missing Sources Warning */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2 card-base p-8 border-l-4 border-l-red-500/50"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h2 className="font-serif text-xl text-primary-text">Kaynağı Eksik İçerikler</h2>
          </div>
          <p className="text-sm text-secondary-text mb-6">
            Aşağıdaki içerikler yapay zeka tarafından taslak olarak oluşturulmuştur. Kaynak doğrulaması (verification) yapılmadan yayına alınmamalıdır.
          </p>
          
          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {unverifiedSources.slice(0, 10).map((item: any, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-md bg-background-secondary/30 border border-gold-border/10">
                <div>
                  <h4 className="text-primary-text text-sm font-medium">{item.title || item.name}</h4>
                  <span className="text-xs text-secondary-text capitalize">Türü: {item.title ? 'Kavram' : 'Şahıs'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-medium uppercase tracking-wider">
                    [VERIFY SOURCE]
                  </span>
                  <Link href={item.title ? `/admin/kavramlar` : `/admin/sahsiyetler`} className="text-xs text-antique-gold hover:underline">
                    İncele
                  </Link>
                </div>
              </div>
            ))}
            {unverifiedSources.length > 10 && (
              <p className="text-xs text-center text-secondary-text pt-4">ve {unverifiedSources.length - 10} içerik daha...</p>
            )}
          </div>
        </motion.div>

        {/* Recent Activity Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-base p-8"
        >
          <h2 className="font-serif text-xl text-primary-text mb-6">İş Akışı Özeti</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 relative before:absolute before:left-1.5 before:top-6 before:w-px before:h-8 before:bg-gold-border/20">
              <div className="w-3 h-3 rounded-full bg-antique-gold mt-1.5 shrink-0" />
              <div>
                <p className="text-sm text-primary-text">100 adet Kavram taslağı eklendi</p>
                <span className="text-xs text-secondary-text">Sistem (AI) • Biraz önce</span>
              </div>
            </div>
            <div className="flex items-start gap-4 relative before:absolute before:left-1.5 before:top-6 before:w-px before:h-8 before:bg-gold-border/20">
              <div className="w-3 h-3 rounded-full bg-antique-gold mt-1.5 shrink-0" />
              <div>
                <p className="text-sm text-primary-text">25 adet Âlim taslağı eklendi</p>
                <span className="text-xs text-secondary-text">Sistem (AI) • Biraz önce</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-antique-gold/40 mt-1.5 shrink-0" />
              <div>
                <p className="text-sm text-primary-text">Bekleyen Onay: Yok</p>
                <span className="text-xs text-secondary-text">Henüz inceleme talep edilmedi.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
