"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Image as ImageIcon, Type, LayoutList, CheckCircle, FileText, Upload } from "lucide-react";

export default function YeniEserPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSaved(true);
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
            href="/admin/kutuphane"
            className="p-2 text-secondary-text hover:text-antique-gold hover:bg-antique-gold/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-serif text-2xl text-primary-text mb-1">Yeni Eser</h1>
            <p className="text-secondary-text text-sm">Kütüphaneye yeni bir PDF veya döküman ekleyin.</p>
          </div>
        </motion.div>
      </div>

      {isSaved ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-base p-12 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary-emerald/30 flex items-center justify-center bg-primary-emerald/10">
            <CheckCircle className="w-8 h-8 text-primary-emerald" />
          </div>
          <h2 className="font-serif text-xl text-primary-text mb-3">Eser Başarıyla Kaydedildi</h2>
          <p className="text-secondary-text text-sm mb-8">
            Yeni eser kütüphaneye eklendi. Listeden veya yayın durumundan kontrol edebilirsiniz.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setIsSaved(false)} className="btn-outline-gold">
              Yeni Eser Daha Ekle
            </button>
            <Link href="/admin/kutuphane" className="btn-primary">
              Kütüphaneye Dön
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
            <h3 className="font-serif text-lg text-primary-text mb-4 pb-2 border-b border-gold-border/50">Eser Bilgileri</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Eser Adı</label>
                <div className="relative group">
                  <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                  <input
                    type="text"
                    required
                    placeholder="Örn: Sahife-i Seccadiye"
                    className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Author */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Müellif / Yazar</label>
                <div className="relative group">
                  <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                  <input
                    type="text"
                    required
                    placeholder="Örn: İmam Zeynelabidin (a.s)"
                    className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {/* Category */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Kategori</label>
                <div className="relative group">
                  <LayoutList className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text/30 group-focus-within:text-antique-gold/60 transition-colors" />
                  <select className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button pl-11 pr-4 py-3.5 text-primary-text text-sm focus:outline-none transition-colors appearance-none">
                    <option value="dua">Dua</option>
                    <option value="hadis">Hadis</option>
                    <option value="akaid">Akaid</option>
                    <option value="tarih">Tarih</option>
                  </select>
                </div>
              </div>

              {/* Language */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Dil</label>
                <select className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button px-4 py-3.5 text-primary-text text-sm focus:outline-none transition-colors appearance-none">
                  <option value="turkce">Türkçe</option>
                  <option value="arapca">Arapça</option>
                  <option value="farsça">Farsça</option>
                  <option value="arapca-turkce">Arapça / Türkçe</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-secondary-text/60 mb-2.5">Yayın Durumu</label>
                <select className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button px-4 py-3.5 text-primary-text text-sm focus:outline-none transition-colors appearance-none">
                  <option value="draft">Taslak</option>
                  <option value="published">Yayında</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cover Image Upload */}
            <div className="card-base p-6">
              <h3 className="font-serif text-lg text-primary-text mb-4 pb-2 border-b border-gold-border/50">Kapak Görseli</h3>
              <div className="border-2 border-dashed border-gold-border hover:border-antique-gold/40 rounded-button p-10 text-center transition-colors cursor-pointer bg-background-secondary/20">
                <ImageIcon className="w-8 h-8 text-secondary-text/40 mx-auto mb-3" />
                <p className="text-secondary-text text-sm">Görsel seçmek için tıklayın</p>
                <p className="text-secondary-text/50 text-xs mt-2">Önerilen boyut: 600x900px (Max 2MB)</p>
              </div>
            </div>

            {/* PDF File Upload */}
            <div className="card-base p-6">
              <h3 className="font-serif text-lg text-primary-text mb-4 pb-2 border-b border-gold-border/50">PDF Dosyası</h3>
              <div className="border-2 border-dashed border-gold-border hover:border-antique-gold/40 rounded-button p-10 text-center transition-colors cursor-pointer bg-background-secondary/20">
                <FileText className="w-8 h-8 text-secondary-text/40 mx-auto mb-3" />
                <p className="text-secondary-text text-sm">PDF yüklemek için tıklayın</p>
                <p className="text-secondary-text/50 text-xs mt-2">Max dosya boyutu: 50MB</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card-base p-6">
            <h3 className="font-serif text-lg text-primary-text mb-4 pb-2 border-b border-gold-border/50">Kısa Açıklama</h3>
            <textarea
              rows={4}
              placeholder="Eser hakkında kısa bir açıklama veya tanıtım yazısı..."
              className="w-full bg-background/50 border border-gold-border focus:border-antique-gold/40 rounded-button p-4 text-primary-text text-sm placeholder:text-secondary-text/25 focus:outline-none resize-y transition-colors"
            />
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
                <Upload className="w-4 h-4 mr-2" />
              )}
              Eseri Kaydet ve Yükle
            </button>
          </div>
        </motion.form>
      )}
    </div>
  );
}
