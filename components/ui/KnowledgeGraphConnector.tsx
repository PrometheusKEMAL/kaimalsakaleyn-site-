import { useState } from "react";
import { Search, Plus, X, Network } from "lucide-react";

export function KnowledgeGraphConnector() {
  const [connections, setConnections] = useState([
    { id: 1, type: "Kavram", name: "İmamet" },
    { id: 2, type: "Makale", name: "Modern Dünyada İmamet" }
  ]);

  return (
    <div className="card-base p-6 border-dashed border-gold-border/30">
      <div className="flex items-center gap-3 mb-6">
        <Network className="w-5 h-5 text-antique-gold" />
        <h3 className="font-serif text-lg text-primary-text">Knowledge Graph Bağlantıları</h3>
      </div>
      
      <p className="text-sm text-secondary-text mb-6">
        Bu içeriği veritabanındaki diğer varlıklarla ilişkilendirin. Bu sayede "İlgili İçerikler" bölümünde otomatik listelenecektir.
      </p>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-text" />
        <input
          type="text"
          placeholder="İlişkilendirmek için varlık ara (Şahıs, Kavram, Hadis...)"
          className="w-full bg-background-secondary/50 border border-gold-border/20 rounded-md pl-9 pr-4 py-2.5 text-sm text-primary-text focus:border-antique-gold/50 transition-colors"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-antique-gold/10 text-antique-gold hover:bg-antique-gold/20 rounded">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs uppercase tracking-wider text-secondary-text font-medium">Mevcut Bağlantılar</h4>
        {connections.map(c => (
          <div key={c.id} className="flex items-center justify-between p-3 rounded-md bg-background-secondary/30 border border-gold-border/10">
            <div>
              <p className="text-sm font-medium text-primary-text">{c.name}</p>
              <span className="text-xs text-secondary-text">{c.type}</span>
            </div>
            <button className="p-1.5 text-secondary-text hover:text-red-400 hover:bg-red-400/10 rounded transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
