"use client";

import { Database, Plus, Shield, ShieldAlert, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const mockSources = [
  {
    id: "1",
    name: "Shia Online Library",
    domain: "shiaonlinelibrary.com",
    trustLevel: "A",
    reliabilityScore: 95,
    sourceType: "digital_library",
    enabled: true,
  },
  {
    id: "2",
    name: "Wikishia",
    domain: "wikishia.net",
    trustLevel: "C",
    reliabilityScore: 65,
    sourceType: "encyclopedia",
    enabled: true,
  },
  {
    id: "3",
    name: "Unknown Forum",
    domain: "random-forum.net",
    trustLevel: "D",
    reliabilityScore: 10,
    sourceType: "unknown",
    enabled: false,
  }
];

export default function SourceRegistryPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex items-center gap-3 mb-2">
        <Link href="/admin/kaynak-merkezi" className="text-secondary-text hover:text-antique-gold transition-colors text-sm">
          &larr; Kaynak Merkezi
        </Link>
        <span className="text-gold-border text-sm">/</span>
        <span className="text-primary-text text-sm">Kaynak Yönetimi</span>
      </div>

      <div className="flex justify-between items-end mb-8 border-b border-gold-border/20 pb-6">
        <div>
          <h1 className="text-3xl font-serif text-primary-text mb-2">Güvenilir Kaynaklar (Source Registry)</h1>
          <p className="text-secondary-text">Platformun veri çektiği, whitelist veya blacklist'e alınan kaynakların listesi.</p>
        </div>
        <button className="px-4 py-2 bg-antique-gold text-background rounded text-sm font-medium hover:bg-antique-gold/90 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Yeni Kaynak Ekle
        </button>
      </div>

      <div className="card-base overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gold-border/20 bg-background-secondary/50">
              <th className="py-4 px-6 text-sm font-medium text-secondary-text uppercase tracking-wider">Kaynak Adı & Domain</th>
              <th className="py-4 px-6 text-sm font-medium text-secondary-text uppercase tracking-wider">Tür</th>
              <th className="py-4 px-6 text-sm font-medium text-secondary-text uppercase tracking-wider">Güven Seviyesi</th>
              <th className="py-4 px-6 text-sm font-medium text-secondary-text uppercase tracking-wider">Durum</th>
              <th className="py-4 px-6 text-sm font-medium text-secondary-text uppercase tracking-wider text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {mockSources.map((source) => (
              <tr key={source.id} className="border-b border-gold-border/10 hover:bg-white/5 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-medium text-primary-text">{source.name}</div>
                  <div className="text-xs text-secondary-text">{source.domain}</div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-xs px-2 py-1 bg-background-secondary border border-gold-border/30 rounded text-secondary-text">
                    {source.sourceType}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    {source.trustLevel === 'A' && <Shield className="w-4 h-4 text-emerald-500" />}
                    {source.trustLevel === 'C' && <Shield className="w-4 h-4 text-amber-500" />}
                    {source.trustLevel === 'D' && <ShieldAlert className="w-4 h-4 text-red-500" />}
                    <span className="text-sm text-primary-text">Level {source.trustLevel}</span>
                    <span className="text-xs text-secondary-text ml-2">({source.reliabilityScore}%)</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  {source.enabled ? (
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      <CheckCircle className="w-3 h-3" /> Aktif (Whitelist)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">
                      <XCircle className="w-3 h-3" /> Engelli (Blacklist)
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-antique-gold hover:underline text-sm font-medium">Düzenle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
