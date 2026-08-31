"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Plus, Edit3, Trash2, Eye, EyeOff, BookOpen } from "lucide-react";

const mockBooks = [
  { id: 1, title: "Sahife-i Seccadiye", author: "İmam Zeynelabidin (a.s)", category: "Dua", language: "Arapça/Türkçe", status: "Yayında", date: "28 Ağustos 2026" },
  { id: 2, title: "Nehcü'l-Belâğa", author: "Seyyid Razi", category: "Hadis", language: "Arapça/Türkçe", status: "Yayında", date: "25 Ağustos 2026" },
  { id: 3, title: "Tevhid'in Sırları", author: "Örnek Yazar", category: "Akaid", language: "Türkçe", status: "Taslak", date: "29 Ağustos 2026" },
];

export default function AdminKutuphanePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-2xl text-primary-text mb-1">
            Kütüphane Yönetimi
          </h1>
          <p className="text-secondary-text text-sm">
            Kütüphanedeki PDF eserleri ve dokümanları yönetin.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/admin/kutuphane/yeni" className="btn-primary py-2.5 px-4 text-[10px]">
            <Plus className="w-4 h-4 mr-1.5" />
            Yeni Eser Ekle
          </Link>
        </motion.div>
      </div>

      {/* Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-card-bg p-4 rounded-button border border-gold-border"
      >
        <div className="relative w-full sm:w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/40 group-focus-within:text-antique-gold/60 transition-colors" />
          <input
            type="text"
            placeholder="Eser veya yazar ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background/50 border border-transparent focus:border-antique-gold/30 rounded-md pl-10 pr-4 py-2 text-sm text-primary-text placeholder:text-secondary-text/30 focus:outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select className="bg-background/50 border border-gold-border text-secondary-text text-sm rounded-md px-3 py-2 focus:outline-none focus:border-antique-gold/40 w-full sm:w-auto">
            <option value="all">Tüm Kategoriler</option>
            <option value="dua">Dua</option>
            <option value="hadis">Hadis</option>
            <option value="akaid">Akaid</option>
          </select>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card-base overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gold-border bg-black/20">
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Eser Adı</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Müellif</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Kategori</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Durum</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-border/50">
              {mockBooks.map((book) => (
                <tr key={book.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-background-secondary border border-gold-border flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4 text-antique-gold/50" />
                      </div>
                      <span className="text-sm font-medium text-primary-text line-clamp-1 max-w-xs" title={book.title}>
                        {book.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-secondary-text/80">{book.author}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-secondary-text">{book.category}</span>
                      <span className="text-[10px] text-secondary-text/50">{book.language}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest ${
                      book.status === "Yayında" ? "bg-primary-emerald/10 text-primary-emerald border border-primary-emerald/20" : "bg-white/5 text-secondary-text/60 border border-white/10"
                    }`}>
                      {book.status === "Yayında" ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                      {book.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-secondary-text hover:text-antique-gold hover:bg-antique-gold/10 rounded-md transition-colors" title="Düzenle">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-secondary-text hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors" title="Sil">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
