import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const statuses = [
  { id: "draft", label: "Taslak", color: "text-secondary-text bg-secondary-text/10" },
  { id: "researching", label: "Araştırılıyor", color: "text-blue-400 bg-blue-500/10" },
  { id: "source_review", label: "Kaynak Kontrolü", color: "text-orange-400 bg-orange-500/10" },
  { id: "editor_review", label: "Editör Onayı", color: "text-purple-400 bg-purple-500/10" },
  { id: "approved", label: "Onaylandı", color: "text-emerald-400 bg-emerald-500/10" },
  { id: "published", label: "Yayında", color: "text-primary-text bg-antique-gold/20 border border-antique-gold/30" },
  { id: "archived", label: "Arşivlendi", color: "text-red-400 bg-red-500/10" }
];

export function EditorialStatusSelector({ initialStatus = "draft" }: { initialStatus?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(statuses.find(s => s.id === initialStatus) || statuses[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between w-48 px-4 py-2 rounded-md text-sm font-medium transition-colors border border-transparent",
          current.color
        )}
      >
        {current.label}
        <ChevronDown className="w-4 h-4 opacity-50" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-card-bg border border-gold-border/20 shadow-xl z-50 py-1">
          {statuses.map(s => (
            <button
              key={s.id}
              onClick={() => {
                setCurrent(s);
                setIsOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-background-secondary/50 text-secondary-text transition-colors"
            >
              <span className={s.id === current.id ? "text-primary-text font-medium" : ""}>{s.label}</span>
              {s.id === current.id && <Check className="w-4 h-4 text-antique-gold" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
