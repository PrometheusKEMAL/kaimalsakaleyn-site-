import Link from "next/link";
import { User } from "lucide-react";

export interface PersonCardProps {
  slug: string;
  name: string;
  title: string;
  birth?: string;
  death?: string;
}

export function PersonCard({ slug, name, title, birth, death }: PersonCardProps) {
  return (
    <Link href={`/ehlibeyt/${slug}`} className="group block">
      <div className="card-base p-6 h-full flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-antique-gold/5 border border-antique-gold/20 flex items-center justify-center mb-4 group-hover:bg-antique-gold/10 group-hover:scale-105 transition-all">
          <User className="w-7 h-7 text-antique-gold/60 group-hover:text-antique-gold transition-colors" />
        </div>
        <h3 className="font-serif text-xl text-primary-text mb-1 group-hover:text-light-gold transition-colors">
          {name}
        </h3>
        <p className="text-secondary-text text-sm mb-4">
          {title}
        </p>
        
        {(birth || death) && (
          <div className="mt-auto flex items-center gap-2 text-xs text-secondary-text/70 border-t border-gold-border/20 pt-4 w-full justify-center">
            {birth && <span>D: {birth}</span>}
            {birth && death && <span className="w-1 h-1 rounded-full bg-antique-gold/40"></span>}
            {death && <span>Ş: {death}</span>}
          </div>
        )}
      </div>
    </Link>
  );
}
