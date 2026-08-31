"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Image as ImageIcon, Type, LayoutList, CheckCircle } from "lucide-react";
import { createBrowserClient } from "@supabase/ssr";
import { slugify } from "@/lib/utils";

export default function YeniYaziPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("tefekkur");
  const [status, setStatus] = useState("draft");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverFile(file);
      const url = URL.createObjectURL(file);
      setCoverPreview(url);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // 1. Get current user
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) throw new Error("Oturum bulunamadı. Lütfen tekrar giriş yapın.");

      // 2. Upload cover image if exists
      let cover_image = null;
      if (coverFile) {
        const fileExt = coverFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `articles/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('covers')
          .upload(filePath, coverFile);

        if (uploadError) throw new Error("Görsel yüklenemedi: " + uploadError.message);

        const { data: publicUrlData } = supabase.storage
          .from('covers')
          .getPublicUrl(filePath);

        cover_image = publicUrlData.publicUrl;
      }

      // 3. Create slug
      const slug = slugify(title) + "-" + Math.random().toString(36).substring(2, 8);

      // 4. Insert article
      const { error: insertError } = await supabase
        .from('articles')
        .insert({
          title,
          slug,
          excerpt,
          content,
          category,
          status,
          cover_image,
          author_id: user.id
        });

      if (insertError) throw new Error("Yazı kaydedilemedi: " + insertError.message);

      setIsSaved(true);
    } catch (err: any) {
      setError(err.message || "Bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setTitle("");
    setCategory("tefekkur");
    setStatus("draft");
    setExcerpt("");
    setContent("");
    setCoverFile(null);
    setCoverPreview(null);
    setIsSaved(false);
    setError("");
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Link
            href="/admin/yazilar"
            className="p-2 text-secondary-text hover:text-antique-gold hover:bg-antique-gold/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-serif text-2xl text-primary-text mb-1">Yeni Yazı</h1>
            <p className="text-secondary-text text-sm">Sakaleyn Defterleri'ne yeni bir makale ekleyin.</p>
          </div>
        </motion.div>
      </div>

      {error && (
        <div className="p-4 rounded-button bg-red-900/20 border border-red-900/30 text-red-300 text-sm">
          {error}
        </div>
      )}

      {isSaved ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-base p-12 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary-emerald/30 flex items-center justify-center bg-primary-emerald/10">
            <CheckCircle className="w-8 h-8 text-primary-emerald" />
          </div>
          <h2 className="font-serif text-xl text-primary-text mb-3">Yazı Başarıyla Kaydedildi</h2>
          <p className="text-secondary-text text-sm mb-8">
            Makaleniz veritabanına eklendi. Listeden veya yayın durumundan kontrol edebilirsiniz.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={handleReset} className="btn-outline-gold">
              Yeni Yazı Daha Ekle
            </button>
            <Link href="/admin/yazilar" className="btn-primary">
              Yazılara Dön
            </Link>
          </div>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSave}
          className="space-y-6"
        >
          {/* Main Info */}
          <div className="card-base p-6 space-y-6">
            <h3 className="font-serif text-lg text-primary-text mb-4 pb-2 border-b border-gold-border/50">Genel Bilgiler</h3>
            
            {/* Title */}
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Başlık</label>
              <div className="relative group">
                <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Yazının başlığı"
                  className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Kısa Açıklama (Özet)</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Yazının kısa özeti (liste sayfalarında görünecek)..."
                rows={2}
                className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button p-4 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Category */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Kategori</label>
                <div className="relative group">
                  <LayoutList className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm focus:outline-none transition-colors appearance-none"
                  >
                    <option value="tefekkur">Tefekkür</option>
                    <option value="ehlibeyt">Ehl-i Beyt</option>
                    <option value="kuran">Kur'an</option>
                    <option value="irfan">İrfan</option>
                  </select>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Yayın Durumu</label>
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button px-4 py-3.5 text-primary-text text-sm focus:outline-none transition-colors appearance-none"
                >
                  <option value="draft">Taslak (Sadece siz görebilirsiniz)</option>
                  <option value="published">Yayında (Herkes görebilir)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cover Image Upload */}
          <div className="card-base p-6">
            <h3 className="font-serif text-lg text-primary-text mb-4 pb-2 border-b border-gold-border/50">Kapak Fotoğrafı</h3>
            <label className="block cursor-pointer">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="hidden" 
              />
              {coverPreview ? (
                <div className="relative aspect-video w-full rounded-button overflow-hidden border border-gold-border group">
                  <img src={coverPreview} alt="Kapak önizlemesi" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Değiştirmek için tıklayın</span>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gold-border hover:border-antique-gold/40 rounded-button p-10 text-center transition-colors bg-background-secondary/20">
                  <ImageIcon className="w-8 h-8 text-secondary-text/40 mx-auto mb-3" />
                  <p className="text-secondary-text text-sm">Görsel seçmek için tıklayın</p>
                  <p className="text-secondary-text/50 text-xs mt-2">Önerilen boyut: 1200x630px (Max 2MB)</p>
                </div>
              )}
            </label>
          </div>

          {/* Content Editor */}
          <div className="card-base p-6">
            <h3 className="font-serif text-lg text-primary-text mb-4 pb-2 border-b border-gold-border/50">İçerik</h3>
            <div className="rounded-button border border-gold-border overflow-hidden focus-within:border-antique-gold/40 transition-colors">
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={20}
                placeholder="Yazınızı buraya yazın (Markdown desteklenir)..."
                className="w-full bg-background/50 p-4 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none resize-y font-mono"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-primary-text/30 border-t-primary-text rounded-full animate-spin mr-2" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              {status === "published" ? "Yayınla" : "Taslak Olarak Kaydet"}
            </button>
          </div>
        </motion.form>
      )}
    </div>
  );
}
