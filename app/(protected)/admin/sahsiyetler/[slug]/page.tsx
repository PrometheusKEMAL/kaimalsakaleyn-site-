"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Plus, X, Link as LinkIcon, Network } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EditorialStatusSelector } from "@/components/ui/EditorialStatusSelector";
import { KnowledgeGraphConnector } from "@/components/ui/KnowledgeGraphConnector";

export default function SahsiyetEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const isNew = resolvedParams.slug === "yeni";
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    name: isNew ? "" : "Örnek Şahıs (Mock)",
    title: isNew ? "" : "İmam / Alim",
    slug: isNew ? "" : resolvedParams.slug,
    person_type: "scholar",
    birth_date: "",
    birth_place: "",
    death_date: "",
    father: "",
    mother: "",
    biography: "",
    moral_teachings: "",
    ai_generated: false,
    editorial_status: "draft"
  });

  const [laqabs, setLaqabs] = useState<string[]>([]);
  const [newLaqab, setNewLaqab] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving Person...", { ...formData, laqabs });
    alert("Şahsiyet verisi konsola yazdırıldı (Mock Save).");
    router.push("/admin/sahsiyetler");
  };

  const addLaqab = () => {
    if (newLaqab.trim() && !laqabs.includes(newLaqab.trim())) {
      setLaqabs([...laqabs, newLaqab.trim()]);
      setNewLaqab("");
    }
  };

  const removeLaqab = (laqab: string) => {
    setLaqabs(laqabs.filter(l => l !== laqab));
  };

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/sahsiyetler"
            className="p-2 rounded-full hover:bg-white/5 text-secondary-text hover:text-primary-text transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-display-sm text-primary-text">
              {isNew ? "Yeni Şahıs Ekle" : "Şahsiyeti Düzenle"}
            </h1>
            <p className="text-secondary-text text-sm mt-1">
              {isNew ? "Veritabanına yeni bir 14 Masum veya Alim kaydı oluşturun." : `${resolvedParams.slug} kaydını güncelliyorsunuz.`}
            </p>
          </motion.div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 bg-antique-gold hover:bg-antique-gold/90 text-[#1a1a1a] rounded-button font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Save className="w-4 h-4" />
            {isNew ? "Kaydet" : "Güncelle"}
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
                <label className="text-sm font-medium text-secondary-text">Şahıs İsmi</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors"
                  placeholder="Örn: İmam Cafer es-Sadık"
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
                  placeholder="orn-imam-cafer-es-sadik"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-text">Unvan (Title)</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors"
                  placeholder="Örn: 6. İmam"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-text">Şahıs Tipi</label>
                <select
                  value={formData.person_type}
                  onChange={(e) => setFormData({...formData, person_type: e.target.value})}
                  className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors"
                >
                  <option value="masum">14 Masum</option>
                  <option value="scholar">Şiî Alim</option>
                  <option value="historical_figure">Tarihi Şahsiyet</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-text">Lakaplar (Virgül ile ayrılmaz, tek tek ekleyin)</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newLaqab}
                  onChange={(e) => setNewLaqab(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addLaqab(); } }}
                  className="flex-1 bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-2 text-primary-text focus:border-antique-gold/50 transition-colors"
                  placeholder="Yeni lakap yazın..."
                />
                <button type="button" onClick={addLaqab} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-md text-primary-text transition-colors">
                  Ekle
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {laqabs.map(laqab => (
                  <span key={laqab} className="inline-flex items-center gap-1 px-3 py-1 bg-antique-gold/10 text-antique-gold border border-antique-gold/20 rounded-full text-sm">
                    {laqab}
                    <button type="button" onClick={() => removeLaqab(laqab)} className="hover:text-red-400"><X className="w-3 h-3" /></button>
                  </span>
                ))}
                {laqabs.length === 0 && <span className="text-xs text-secondary-text">Henüz lakap eklenmedi.</span>}
              </div>
            </div>
          </div>

          {/* Biography & Long Text */}
          <div className="card-base p-6 space-y-6">
            <h2 className="text-lg font-serif text-primary-text border-b border-gold-border/10 pb-2">Kapsamlı İçerik</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-text">Biyografi</label>
              <textarea
                rows={8}
                value={formData.biography}
                onChange={(e) => setFormData({...formData, biography: e.target.value})}
                className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-3 text-primary-text focus:border-antique-gold/50 transition-colors resize-y"
                placeholder="Şahsiyetin kapsamlı hayat hikayesi..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-text">İlmî ve Ahlakî Öğretileri</label>
              <textarea
                rows={6}
                value={formData.moral_teachings}
                onChange={(e) => setFormData({...formData, moral_teachings: e.target.value})}
                className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-4 py-3 text-primary-text focus:border-antique-gold/50 transition-colors resize-y"
                placeholder="Öne çıkan öğretiler, talebeleri, bıraktığı eserler..."
              />
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
               Şahsiyeti diğer kavramlara, alimlere veya hadislere bağlayın.
             </p>
             <KnowledgeGraphConnector entityId={resolvedParams.slug} />
          </div>

          <div className="card-base p-6 space-y-6">
             <h2 className="text-lg font-serif text-primary-text border-b border-gold-border/10 pb-2">Kimlik Detayları</h2>
             
             <div className="space-y-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-text">Doğum Tarihi / Yeri</label>
                  <input
                    type="text"
                    value={formData.birth_date}
                    onChange={(e) => setFormData({...formData, birth_date: e.target.value})}
                    className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-3 py-1.5 text-sm text-primary-text focus:border-antique-gold/50 transition-colors mb-2"
                    placeholder="Örn: 83 H. / Medine"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-text">Vefat Tarihi / Yeri</label>
                  <input
                    type="text"
                    value={formData.death_date}
                    onChange={(e) => setFormData({...formData, death_date: e.target.value})}
                    className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-3 py-1.5 text-sm text-primary-text focus:border-antique-gold/50 transition-colors"
                    placeholder="Örn: 148 H. / Baki Mezarlığı"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-text">Baba İsmi</label>
                  <input
                    type="text"
                    value={formData.father}
                    onChange={(e) => setFormData({...formData, father: e.target.value})}
                    className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-3 py-1.5 text-sm text-primary-text focus:border-antique-gold/50 transition-colors"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-text">Anne İsmi</label>
                  <input
                    type="text"
                    value={formData.mother}
                    onChange={(e) => setFormData({...formData, mother: e.target.value})}
                    className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md px-3 py-1.5 text-sm text-primary-text focus:border-antique-gold/50 transition-colors"
                  />
               </div>
             </div>
          </div>
        </div>

      </form>
    </div>
  );
}
