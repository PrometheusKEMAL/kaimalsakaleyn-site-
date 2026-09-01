"use client";

import { useState, use, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Plus, X, Network } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EditorialStatusSelector } from "@/components/ui/EditorialStatusSelector";
import { KnowledgeGraphConnector } from "@/components/ui/KnowledgeGraphConnector";

export default function KavramEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const isNew = resolvedParams.slug === "yeni";
  const router = useRouter();

  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(!isNew);
  const [isSaving, setIsSaving] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: isNew ? "" : resolvedParams.slug,
    arabic_title: "",
    persian_title: "",
    short_definition: "",
    content: "",
    ai_generated: false,
    editorial_status: "draft"
  });

  const [bibliography, setBibliography] = useState<string[]>([]);
  const [newBiblio, setNewBiblio] = useState("");

  useEffect(() => {
    if (isNew) return;
    const fetchConcept = async () => {
      const { data, error } = await supabase.from("concepts").select("*").eq("slug", resolvedParams.slug).single() as { data: any, error: any };
      if (data) {
        setFormData({
          title: data.title || data.name || "", // fallback to name
          slug: data.slug || "",
          arabic_title: data.arabic_title || "",
          persian_title: data.persian_title || "",
          short_definition: data.short_definition || "",
          content: data.definition || "", // mapping definition to content for UI
          ai_generated: data.ai_generated || false,
          editorial_status: data.editorial_status || "draft"
        });
        if (data.bibliography) setBibliography(data.bibliography);
      }
      setIsLoading(false);
    };
    fetchConcept();
  }, [isNew, resolvedParams.slug, supabase]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const { error } = await supabase.from("concepts").upsert({
      title: formData.title,
      name: formData.title, // keeping name for schema compatibility
      category: "genel", // required field fallback
      slug: formData.slug,
      arabic_title: formData.arabic_title || null,
      persian_title: formData.persian_title || null,
      short_definition: formData.short_definition || null,
      definition: formData.content || null, // UI content maps to definition
      bibliography: bibliography.length > 0 ? bibliography : null,
      ai_generated: formData.ai_generated,
      editorial_status: formData.editorial_status,
    } as any, { onConflict: "slug" });

    setIsSaving(false);
    if (error) {
      alert("Hata: " + error.message);
    } else {
      alert("Başarıyla kaydedildi!");
      router.push("/admin/kavramlar");
    }
  };

  const addBiblio = () => {
    if (newBiblio.trim() && !bibliography.includes(newBiblio.trim())) {
      setBibliography([...bibliography, newBiblio.trim()]);
      setNewBiblio("");
    }
  };

  const removeBiblio = (bib: string) => {
    setBibliography(bibliography.filter(b => b !== bib));
  };

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/kavramlar"
            className="p-2 rounded-full hover:bg-white/5 text-secondary-text hover:text-primary-text transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-display-sm text-primary-text">
              {isNew ? "Yeni Kavram Ekle" : "Kavramı Düzenle"}
            </h1>
            <p className="text-secondary-text text-sm mt-1">
              {isNew ? "Ansiklopediye yeni bir kavram (terim) ekleyin." : `${resolvedParams.slug} kavramını güncelliyorsunuz.`}
            </p>
          </motion.div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 bg-antique-gold hover:bg-antique-gold/90 text-[#1a1a1a] rounded-button font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Kaydediliyor..." : (isNew ? "Kaydet" : "Güncelle")}
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-base p-6 space-y-6">
            <h2 className="text-lg font-serif text-primary-text border-b border-gold-border/10 pb-2">Temel Bilgiler</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-text">Kavram Adı (Türkçe)</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors"
                  placeholder="Örn: İmamet, İ عصمت (İsmet)"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-text">URL (Slug)</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors"
                  placeholder="orn-imamet"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-text">Arapça Adı</label>
                <input
                  type="text"
                  dir="rtl"
                  value={formData.arabic_title}
                  onChange={(e) => setFormData({...formData, arabic_title: e.target.value})}
                  className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors font-arabic"
                  placeholder="الإمامة"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-text">Farsça Adı (Opsiyonel)</label>
                <input
                  type="text"
                  dir="rtl"
                  value={formData.persian_title}
                  onChange={(e) => setFormData({...formData, persian_title: e.target.value})}
                  className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors font-arabic"
                  placeholder="امامت"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-text">Kısa Tanım (Özet)</label>
              <textarea
                rows={3}
                value={formData.short_definition}
                onChange={(e) => setFormData({...formData, short_definition: e.target.value})}
                className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors resize-y"
                placeholder="Kavramın bir veya iki cümlelik özeti..."
              />
            </div>
          </div>

          {/* Long Text */}
          <div className="card-base p-6 space-y-6">
            <h2 className="text-lg font-serif text-primary-text border-b border-gold-border/10 pb-2">Ansiklopedik İçerik</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-text">Detaylı Açıklama</label>
              <textarea
                rows={12}
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-3 text-primary-text focus:border-antique-gold/50 transition-colors resize-y"
                placeholder="Kavramın detaylı ansiklopedik açıklaması, tarihi gelişimi, Kur'an ve hadisteki yeri..."
              />
            </div>
          </div>

          {/* Bibliography */}
          <div className="card-base p-6 space-y-6">
             <h2 className="text-lg font-serif text-primary-text border-b border-gold-border/10 pb-2">Bibliyografya & Kaynaklar</h2>
             <div className="space-y-2">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newBiblio}
                  onChange={(e) => setNewBiblio(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addBiblio(); } }}
                  className="flex-1 bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors"
                  placeholder="Kaynak ekleyin (Örn: El-Kafi, c.1, s.45)..."
                />
                <button type="button" onClick={addBiblio} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-md text-primary-text transition-colors">
                  Ekle
                </button>
              </div>
              <ul className="space-y-2">
                {bibliography.map((bib, index) => (
                  <li key={index} className="flex items-center justify-between bg-background-secondary/30 p-3 rounded-md border border-gold-border/10">
                    <span className="text-sm text-primary-text">{bib}</span>
                    <button type="button" onClick={() => removeBiblio(bib)} className="text-secondary-text hover:text-red-400 p-1">
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
                {bibliography.length === 0 && <p className="text-xs text-secondary-text p-2">Henüz kaynak eklenmedi.</p>}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="card-base p-6 space-y-6">
            <h2 className="text-lg font-serif text-primary-text border-b border-gold-border/10 pb-2">Editoryal Durum</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-text mb-2">Mevcut Statü</label>
                <EditorialStatusSelector initialStatus={formData.editorial_status} />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="aiGenerated"
                  checked={formData.ai_generated}
                  onChange={(e) => setFormData({...formData, ai_generated: e.target.checked})}
                  className="w-4 h-4 rounded border-gold-border/20 bg-background-secondary text-antique-gold focus:ring-antique-gold/50"
                />
                <label htmlFor="aiGenerated" className="text-sm text-secondary-text cursor-pointer">
                  Bu içerik yapay zeka tarafından (AI) desteklenerek oluşturuldu.
                </label>
              </div>
            </div>
          </div>

          <div className="card-base p-6 space-y-6">
             <div className="flex items-center gap-2 border-b border-gold-border/10 pb-2">
                <Network className="w-5 h-5 text-antique-gold" />
                <h2 className="text-lg font-serif text-primary-text">Bilgi Grafiği</h2>
             </div>
             
             <p className="text-sm text-secondary-text">
               Bu kavramı diğer kavramlara, alimlere veya hadislere bağlayın.
             </p>
             <KnowledgeGraphConnector entityId={resolvedParams.slug} />
          </div>
        </div>

      </form>
    </div>
  );
}
