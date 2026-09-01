"use client";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

export default function KnowledgeGraphAdminPage() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-display-sm text-primary-text mb-2">
          Knowledge Graph Yönetimi
        </h1>
        <p className="text-secondary-text text-sm">
          Varlıklar (Entities) arası ilişkileri yönetin.
        </p>
      </motion.div>
      <div className="card-base p-8 text-center border-dashed border-gold-border/30">
        <Network className="w-12 h-12 mx-auto text-antique-gold/40 mb-4" />
        <h2 className="text-xl text-primary-text font-serif mb-2">Grafik Bağlantı Ekranı Yapım Aşamasında</h2>
        <p className="text-secondary-text text-sm">Bu modül üzerinden Şahısları Kitaplara, Kavramları Hadislere bağlayabileceksiniz.</p>
      </div>
    </div>
  );
}