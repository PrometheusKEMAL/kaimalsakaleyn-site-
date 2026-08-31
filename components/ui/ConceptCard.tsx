import Link from "next/link";
import { BookOpen } from "lucide-react";

export interface ConceptCardProps {
  slug: string;
  title: string;
  definition: string;
  category?: string;
}

export function ConceptCard({ slug, title, definition, category }: ConceptCardProps) {
  return (
    <Link href={`/kavramlar/${slug}`} className="group block">
      <div className="card-base p-6 h-full flex flex-col">
        {category && (
          <span className="text-[10px] text-antique-gold/80 uppercase tracking-widest font-medium mb-3 inline-block">
            {category}
          </span>
        )}
        <h3 className="font-serif text-xl text-primary-text mb-3 group-hover:text-light-gold transition-colors flex items-center gap-2">
          {title}
        </h3>
        <p className="text-secondary-text text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {definition}
        </p>
        <div className="mt-auto pt-4 border-t border-gold-border/20 flex items-center text-xs text-antique-gold/60 font-medium tracking-wide uppercase group-hover:text-antique-gold transition-colors">
          <BookOpen className="w-4 h-4 mr-2" />
          Maddeyi Oku
        </div>
      </div>
    </Link>
  );
}
