"use client";

import { useState } from "react";
import { Check, Edit3, X, AlertCircle, ExternalLink, ShieldAlert, ShieldCheck } from "lucide-react";
import Link from "next/link";

// Mock data for UI demonstration
const mockQueueItem = {
  id: "1",
  entityType: "book",
  sourceUrl: "https://example-shia-library.org/book/123",
  confidenceScore: 82,
  extractedData: {
    title: "Kitâbü'l-Gaybe",
    arabic_title: "كتاب الغيبة",
    author: "Muhammed b. İbrahim en-Nu'mânî",
    publication_year: "1997",
    publisher: "Ensar Yayıncılık",
    page_count: 480,
  }
};

export default function ReviewQueuePage() {
  const [activeItem] = useState(mockQueueItem);

  return (
    <div className="p-8 max-w-[1600px] mx-auto min-h-screen">
      
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b border-gold-border/20 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Link href="/admin/kaynak-merkezi" className="text-secondary-text hover:text-antique-gold transition-colors text-sm">
              &larr; Kaynak Merkezi
            </Link>
            <span className="text-gold-border text-sm">/</span>
            <span className="text-primary-text text-sm">Onay Kuyruğu (12)</span>
          </div>
          <h1 className="text-2xl font-serif text-primary-text">Metadata İnceleme</h1>
        </div>
        
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-red-500/50 text-red-500 rounded text-sm hover:bg-red-500/10 transition-colors flex items-center gap-2">
            <X className="w-4 h-4" /> Reddet
          </button>
          <button className="px-4 py-2 bg-antique-gold text-background rounded text-sm font-medium hover:bg-antique-gold/90 transition-colors flex items-center gap-2">
            <Check className="w-4 h-4" /> Kütüphaneye Ekle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT: Proposed Record */}
        <div className="card-base p-6 flex flex-col h-[calc(100vh-200px)]">
          <h2 className="text-lg font-medium text-antique-gold mb-6 pb-4 border-b border-gold-border/20 flex items-center justify-between">
            <span>Önerilen KaimAlSakaleyn Kaydı</span>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Score: {activeItem.confidenceScore}/100</span>
          </h2>
          
          <div className="flex-1 overflow-y-auto space-y-6 pr-4">
            
            {Object.entries(activeItem.extractedData).map(([field, value]) => (
              <div key={field} className="group">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs uppercase tracking-wider text-secondary-text font-medium">
                    {field.replace('_', ' ')}
                  </label>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:text-emerald-400 text-secondary-text" title="Kabul Et"><Check className="w-3.5 h-3.5" /></button>
                    <button className="p-1 hover:text-antique-gold text-secondary-text" title="Düzenle"><Edit3 className="w-3.5 h-3.5" /></button>
                    <button className="p-1 hover:text-red-400 text-secondary-text" title="Sil"><X className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
                <div className="p-3 bg-background-secondary/50 border border-gold-border/30 rounded text-primary-text font-medium text-sm">
                  {value}
                </div>
              </div>
            ))}
            
          </div>
        </div>

        {/* RIGHT: Source Evidence */}
        <div className="card-base p-6 bg-background-secondary/30 flex flex-col h-[calc(100vh-200px)] border-l-4 border-l-antique-gold/50">
          <h2 className="text-lg font-medium text-primary-text mb-6 pb-4 border-b border-gold-border/20 flex items-center justify-between">
            <span>Kaynak Kanıtları (Source Evidence)</span>
            <a href={activeItem.sourceUrl} target="_blank" rel="noreferrer" className="text-xs text-antique-gold hover:underline flex items-center gap-1">
              Kaynağa Git <ExternalLink className="w-3 h-3" />
            </a>
          </h2>
          
          <div className="flex-1 overflow-y-auto space-y-6 pr-4">
            
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-medium text-sm">Güvenilir Kaynak (Level B)</span>
              </div>
              <p className="text-xs text-secondary-text">Bu veriler tanınırlığı yüksek akademik dijital kütüphaneden (Shia-Library.org) çekilmiştir.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-secondary-text uppercase tracking-wider mb-3">Field-Level Provenance</h3>
              
              <div className="p-4 bg-background rounded border border-gold-border/20">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-antique-gold font-medium">publication_year</span>
                  <span className="text-xs text-secondary-text">Confidence: 95%</span>
                </div>
                <div className="text-sm text-primary-text mb-2">
                  Bulunan Değer: <strong>1997</strong>
                </div>
                <div className="text-xs text-secondary-text bg-background-secondary p-2 rounded break-all font-mono">
                  &lt;meta name="date" content="1997" /&gt;
                </div>
              </div>

              <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-amber-500 font-medium flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5" /> Conflict Detected: publisher
                  </span>
                </div>
                <div className="text-sm text-primary-text mb-2">
                  Mevcut DB: <strong>Bilinmiyor</strong>
                </div>
                <div className="text-sm text-primary-text mb-2">
                  Kaynak Öneriyor: <strong>Ensar Yayıncılık</strong>
                </div>
                <button className="text-xs text-antique-gold hover:underline mt-1">Önerileni Kabul Et</button>
              </div>
            </div>

            <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg mt-8">
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span className="font-medium text-sm">Telif Uyarısı</span>
              </div>
              <p className="text-xs text-secondary-text mb-2">
                Bu kaynağın <code>robots_policy</code> veya telif notları uyarınca tam metin (PDF) otomatik indirilemez. Yalnızca metadata oluşturulacaktır.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
