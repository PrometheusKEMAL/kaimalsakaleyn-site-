"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Plus, Edit3, Trash2, Eye, EyeOff } from "lucide-react";
import { createBrowserClient } from "@supabase/ssr";

export default function AdminYazilarPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const fetchArticles = async () => {
    setIsLoading(true);
    let query = supabase.from("articles").select("*").order("created_at", { ascending: false });

    if (categoryFilter !== "all") {
      query = query.eq("category", categoryFilter);
    }
    if (statusFilter !== "all") {
      query = query.eq("status", statusFilter);
    }
    // Search is handled on the client side for now

    const { data, error } = await query;
    if (data) setArticles(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, [categoryFilter, statusFilter]);

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`"${title}" adlı yazıyı silmek istediğinize emin misiniz?`)) return;

    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (!error) {
      setArticles((prev) => prev.filter((a) => a.id !== id));
    } else {
      alert("Silinirken bir hata oluştu: " + error.message);
    }
  };

  // Client side search filter
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Yazı Yönetimi
          </h1>
          <p className="text-secondary-text text-sm">
            Sakaleyn Defterleri'ndeki tüm yazıları (makaleleri) yönetin.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/admin/yazilar/yeni" className="btn-primary py-2.5 px-4 text-[10px]">
            <Plus className="w-4 h-4 mr-1.5" />
            Yeni Yazı Ekle
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
            placeholder="Yazı başlığında ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background/50 border border-transparent focus:border-antique-gold/30 rounded-md pl-10 pr-4 py-2 text-sm text-primary-text placeholder:text-secondary-text/30 focus:outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-background/50 border border-gold-border text-secondary-text text-sm rounded-md px-3 py-2 focus:outline-none focus:border-antique-gold/40 w-full sm:w-auto"
          >
            <option value="all">Tüm Kategoriler</option>
            <option value="tefekkur">Tefekkür</option>
            <option value="ehlibeyt">Ehl-i Beyt</option>
            <option value="kuran">Kur'an</option>
            <option value="irfan">İrfan</option>
          </select>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-background/50 border border-gold-border text-secondary-text text-sm rounded-md px-3 py-2 focus:outline-none focus:border-antique-gold/40 w-full sm:w-auto"
          >
            <option value="all">Tüm Durumlar</option>
            <option value="published">Yayında</option>
            <option value="draft">Taslak</option>
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
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Başlık</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Kategori</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Görüntülenme</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Durum</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text">Tarih</th>
                <th className="px-6 py-4 font-serif text-[11px] uppercase tracking-wider text-secondary-text text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-border/50">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-secondary-text/50">
                    Yazılar yükleniyor...
                  </td>
                </tr>
              ) : filteredArticles.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-secondary-text/50">
                    Gösterilecek yazı bulunamadı.
                  </td>
                </tr>
              ) : (
                filteredArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-primary-text line-clamp-1 max-w-xs" title={article.title}>
                        {article.title}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-secondary-text/80 capitalize">{article.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-secondary-text/80">{article.views.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest ${
                        article.status === "published" ? "bg-primary-emerald/10 text-primary-emerald border border-primary-emerald/20" : "bg-white/5 text-secondary-text/60 border border-white/10"
                      }`}>
                        {article.status === "published" ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        {article.status === "published" ? "Yayında" : "Taslak"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-text/80">
                      {new Date(article.created_at).toLocaleDateString("tr-TR")}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary-text hover:text-antique-gold hover:bg-antique-gold/10 rounded-md transition-colors" title="Düzenle">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(article.id, article.title)}
                          className="p-2 text-secondary-text hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors" title="Sil"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
