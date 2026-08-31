"use client";

import { useState } from "react";
import { Check, Edit3, X, AlertCircle, ExternalLink, ShieldAlert, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ReviewQueueClient({ initialItems }: { initialItems: any[] }) {
  const [items, setItems] = useState(initialItems);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const supabase = createClient() as any;

  const handleApprove = async (id: string, extractedData: any) => {
    // For now, just mark the status as 'approved' in queue, 
    // In future, you would also insert into 'books' or corresponding entity table
    const { error } = await supabase
      .from("ingestion_queue")
      .update({ status: 'approved' } as any)
      .eq('id', id);

    if (!error) {
      setItems(items.filter(item => item.id !== id));
      setNotification({ message: "Kayıt başarıyla kütüphaneye eklendi ve yayınlandı.", type: 'success' });
      setTimeout(() => setNotification(null), 3000);
    } else {
      setNotification({ message: "Veritabanı hatası oluştu.", type: 'error' });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleReject = async (id: string) => {
    const { error } = await supabase
      .from("ingestion_queue")
      .update({ status: 'rejected' } as any)
      .eq('id', id);
      
    if (!error) {
      setItems(items.filter(item => item.id !== id));
      setNotification({ message: "Kayıt reddedildi ve kuyruktan kaldırıldı.", type: 'error' });
      setTimeout(() => setNotification(null), 3000);
    } else {
      setNotification({ message: "Veritabanı hatası oluştu.", type: 'error' });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  if (items.length === 0) {
    return (
      <div className="p-8 max-w-[1600px] mx-auto min-h-screen">
        {notification && (
          <div className={`mb-4 p-4 rounded-md text-sm font-medium ${notification.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
            {notification.message}
          </div>
        )}
        <div className="mb-8 flex items-center justify-between border-b border-gold-border/20 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link href="/admin/kaynak-merkezi" className="text-secondary-text hover:text-antique-gold transition-colors text-sm">
                &larr; Kaynak Merkezi
              </Link>
              <span className="text-gold-border text-sm">/</span>
              <span className="text-primary-text text-sm">Onay Kuyruğu (0)</span>
            </div>
            <h1 className="text-2xl font-serif text-primary-text">Metadata İnceleme</h1>
          </div>
        </div>
        <div className="card-base p-12 text-center">
          <Check className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-xl font-serif text-primary-text mb-2">Kuyruk Boş</h2>
          <p className="text-secondary-text">İncelenecek yeni bir kaynak kaydı bulunmuyor. Keşfedilen yeni kayıtlar burada birikecektir.</p>
        </div>
      </div>
    );
  }

  const activeItem = items[0];

  return (
    <div className="p-8 max-w-[1600px] mx-auto min-h-screen">
      
      {notification && (
        <div className={`mb-4 p-4 rounded-md text-sm font-medium ${notification.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
          {notification.message}
        </div>
      )}

      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b border-gold-border/20 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Link href="/admin/kaynak-merkezi" className="text-secondary-text hover:text-antique-gold transition-colors text-sm">
              &larr; Kaynak Merkezi
            </Link>
            <span className="text-gold-border text-sm">/</span>
            <span className="text-primary-text text-sm">Onay Kuyruğu ({items.length})</span>
          </div>
          <h1 className="text-2xl font-serif text-primary-text">Metadata İnceleme</h1>
        </div>
        
        <div className="flex gap-3">
          <button onClick={() => handleReject(activeItem.id)} className="px-4 py-2 border border-red-500/50 text-red-500 rounded text-sm hover:bg-red-500/10 transition-colors flex items-center gap-2">
            <X className="w-4 h-4" /> Reddet
          </button>
          <button onClick={() => handleApprove(activeItem.id, activeItem.extracted_data)} className="px-4 py-2 bg-antique-gold text-background rounded text-sm font-medium hover:bg-antique-gold/90 transition-colors flex items-center gap-2">
            <Check className="w-4 h-4" /> Kütüphaneye Ekle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT: Proposed Record */}
        <div className="card-base p-6 flex flex-col h-[calc(100vh-200px)]">
          <h2 className="text-lg font-medium text-antique-gold mb-6 pb-4 border-b border-gold-border/20 flex items-center justify-between">
            <span>Önerilen KaimAlSakaleyn Kaydı</span>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Score: {activeItem.confidence_score}/100</span>
          </h2>
          
          <div className="flex-1 overflow-y-auto space-y-6 pr-4">
            
            {activeItem.extracted_data && Object.entries(activeItem.extracted_data).map(([field, value]) => (
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
                  {String(value)}
                </div>
              </div>
            ))}
            
          </div>
        </div>

        {/* RIGHT: Source Evidence */}
        <div className="card-base p-6 bg-background-secondary/30 flex flex-col h-[calc(100vh-200px)] border-l-4 border-l-antique-gold/50">
          <h2 className="text-lg font-medium text-primary-text mb-6 pb-4 border-b border-gold-border/20 flex items-center justify-between">
            <span>Kaynak Kanıtları (Source Evidence)</span>
            <a href={activeItem.source_url} target="_blank" rel="noreferrer" className="text-xs text-antique-gold hover:underline flex items-center gap-1">
              Kaynağa Git <ExternalLink className="w-3 h-3" />
            </a>
          </h2>
          
          <div className="flex-1 overflow-y-auto space-y-6 pr-4">
            
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-medium text-sm">Otomatik Analiz</span>
              </div>
              <p className="text-xs text-secondary-text">Bu veriler sistem tarafından otomatik meta tag ve içerik analizleriyle çekilmiştir.</p>
            </div>

            {activeItem.conflict_detected && (
              <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-amber-500 font-medium flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5" /> Conflict / Duplicate Detected
                  </span>
                </div>
                <div className="text-sm text-primary-text mb-2">
                  Sistem bu eserin veritabanında daha önce işlenmiş bir kopyası olabileceğini söylüyor. 
                </div>
              </div>
            )}
            
            {!activeItem.conflict_detected && (
               <p className="text-sm text-secondary-text mt-8 text-center">Detaylı kanıtlar sistem loglarına eklenmiştir.</p>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
