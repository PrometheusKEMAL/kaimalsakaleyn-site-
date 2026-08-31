"use client";

import Link from "next/link";
import { Database, Search, CheckCircle, AlertTriangle, Clock, Layers } from "lucide-react";

export default function SourceIntelligenceDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-serif text-primary-text mb-2">Kaynak Merkezi (Ingestion)</h1>
          <p className="text-secondary-text">Otomatik keşif, metadata doğrulama ve telif kontrol paneli.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/admin/kaynak-merkezi/kuyruk" className="px-5 py-2 bg-antique-gold text-background rounded-md text-sm font-medium hover:bg-antique-gold/90 transition-colors flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Onay Bekleyenler (12)
          </Link>
          <Link href="/admin/kaynak-merkezi/kaynaklar" className="px-5 py-2 border border-gold-border text-primary-text rounded-md text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
            <Database className="w-4 h-4" />
            Kaynak Yönetimi
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="card-base p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Search className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-2xl font-serif text-primary-text">350</span>
          </div>
          <h3 className="text-secondary-text text-sm font-medium">Yeni Bulunan Kayıtlar</h3>
        </div>
        
        <div className="card-base p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-amber-500/10 rounded-lg">
              <Clock className="w-6 h-6 text-amber-500" />
            </div>
            <span className="text-2xl font-serif text-primary-text">12</span>
          </div>
          <h3 className="text-secondary-text text-sm font-medium">Onay Bekleyen (Kuyruk)</h3>
        </div>

        <div className="card-base p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="text-2xl font-serif text-primary-text">312</span>
          </div>
          <h3 className="text-secondary-text text-sm font-medium">Doğrulanmış & Yayında</h3>
        </div>

        <div className="card-base p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <span className="text-2xl font-serif text-primary-text">12</span>
          </div>
          <h3 className="text-secondary-text text-sm font-medium">Çelişkili Kayıtlar</h3>
        </div>
      </div>

      {/* Manual Discovery Action */}
      <div className="card-base p-8 mb-8">
        <h2 className="text-xl font-serif text-primary-text mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-antique-gold" />
          Manuel Kaynak Keşfi (URL / ISBN / Arapça İsim)
        </h2>
        <p className="text-secondary-text mb-6">
          Sistemin otomatik taramasını beklemeden, spesifik bir kaynaktan veya ISBN'den meta veri çıkarıp doğrulamak için burayı kullanabilirsiniz.
        </p>
        <form className="flex gap-4">
          <input 
            type="text" 
            placeholder="https://... veya ISBN veya Arapça İsim" 
            className="flex-1 bg-background-secondary border border-gold-border rounded-md px-4 py-3 text-primary-text focus:outline-none focus:border-antique-gold/50"
          />
          <button type="button" className="px-8 py-3 bg-antique-gold text-background font-medium rounded-md hover:bg-antique-gold/90 transition-colors">
            Keşfet & Doğrula
          </button>
        </form>
      </div>
    </div>
  );
}
