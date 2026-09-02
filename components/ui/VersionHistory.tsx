import { Clock, CheckCircle2, History, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VersionHistoryEntry {
  id: string;
  date: string;
  action: string; // e.g., "Oluşturuldu", "Düzenlendi", "Tahkik Edildi", "Yayınlandı"
  user: string;
  role: string; // e.g., "Yazar", "Editör", "Tahkik Kurulu"
  notes?: string;
  status: 'draft' | 'researching' | 'source_review' | 'editor_review' | 'approved' | 'published' | 'archived';
}

interface VersionHistoryProps {
  entries: VersionHistoryEntry[];
}

const statusColors = {
  draft: "bg-secondary text-secondary-foreground",
  researching: "bg-blue-500/10 text-blue-500",
  source_review: "bg-orange-500/10 text-orange-500",
  editor_review: "bg-purple-500/10 text-purple-500",
  approved: "bg-emerald-500/10 text-emerald-500",
  published: "bg-primary/20 text-primary border-primary/30",
  archived: "bg-destructive/10 text-destructive",
};

export function VersionHistory({ entries }: VersionHistoryProps) {
  if (!entries || entries.length === 0) return null;

  return (
    <div className="bg-card/50 border border-border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
        <History className="w-5 h-5 text-primary" />
        <h3 className="font-serif text-xl text-foreground">Sürüm Geçmişi ve Tahkik Kaydı</h3>
      </div>
      
      <div className="space-y-6">
        {entries.map((entry, index) => (
          <div key={entry.id} className="relative pl-6">
            {/* Timeline line */}
            {index !== entries.length - 1 && (
              <div className="absolute left-[11px] top-6 bottom-[-24px] w-px bg-border" />
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
              {entry.status === 'published' || entry.status === 'approved' ? (
                <CheckCircle2 className="w-3 h-3 text-primary" />
              ) : (
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-foreground">{entry.action}</span>
                  <span className={cn("text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-medium border border-transparent", statusColors[entry.status])}>
                    {entry.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{entry.user} <span className="opacity-60">({entry.role})</span></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <time dateTime={entry.date}>{entry.date}</time>
                  </div>
                </div>

                {entry.notes && (
                  <p className="mt-2 text-sm text-muted-foreground/80 italic border-l-2 border-primary/30 pl-3">
                    "{entry.notes}"
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
