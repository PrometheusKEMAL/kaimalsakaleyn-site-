"use client";
import { motion } from "framer-motion";
import { Plus, Search, FilePenLine } from "lucide-react";
import Link from "next/link";
import { mockPersons, generatedScholars, mockConcepts, generatedConcepts } from "@/lib/mock-data";

export default function KavramlarAdminPage() {
  const isKavram = true as boolean;
  const data = isKavram ? [...mockConcepts, ...generatedConcepts] : [...mockPersons, ...generatedScholars];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-serif text-display-sm text-primary-text mb-2">
            Kavramlar Yönetimi
          </h1>
          <p className="text-secondary-text text-sm">
            Tüm kavramlar taslaklarını ve yayınlanmış içerikleri yönetin.
          </p>
        </motion.div>
        
        <Link
          href="/admin/kavramlar/yeni"
          className="flex items-center gap-2 px-4 py-2 bg-antique-gold hover:bg-antique-gold/90 text-[#1a1a1a] rounded-button font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Yeni Kavram Ekle
        </Link>
      </div>

      <div className="card-base overflow-hidden">
        <div className="p-4 border-b border-gold-border/10 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text" />
            <input
              type="text"
              placeholder="Ara..."
              className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md pl-9 pr-4 py-2 text-sm text-primary-text focus:border-antique-gold/50 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background-secondary/30 border-b border-gold-border/10">
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-secondary-text font-medium">Başlık / İsim</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-secondary-text font-medium">Durum</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-secondary-text font-medium">AI Durumu</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-secondary-text font-medium text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-border/5">
              {data.slice(0, 15).map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-primary-text">{(\'title\' in item ? item.title : (item as any).name)}</p>
                    <p className="text-xs text-secondary-text mt-1">{item.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full uppercase tracking-wider ${
                      item.editorialStatus === 'published' ? 'bg-primary-emerald/10 text-primary-emerald' :
                      item.editorialStatus === 'draft' ? 'bg-orange-500/10 text-orange-400' :
                      'bg-blue-500/10 text-blue-400'
                    }`}>
                      {item.editorialStatus || 'DRAFT'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {item.aiGenerated ? (
                      <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">AI Üretimi (Kaynak Doğrula)</span>
                    ) : (
                      <span className="text-xs text-secondary-text">Manuel</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/admin/kavramlar/${item.slug}`}
                      className="text-antique-gold hover:text-antique-gold/80 text-sm font-medium flex items-center gap-1 justify-end"
                    >
                      <FilePenLine className="w-4 h-4" /> Düzenle
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
