import Link from "next/link";
import { Book as BookIcon, CheckCircle2 } from "lucide-react";

export interface BookCardProps {
  slug: string;
  title: string;
  originalTitle?: string;
  author: string;
  category: string;
  coverImage?: string;
  verificationStatus?: 'verified' | 'partial' | 'unverified';
}

export function BookCard({
  slug,
  title,
  originalTitle,
  author,
  category,
  coverImage,
  verificationStatus
}: BookCardProps) {
  return (
    <Link href={`/kutuphane/${slug}`} className="group block h-full">
      <div className="card-base h-full flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-300">
        {/* Cover Area */}
        <div className="h-48 bg-muted/30 flex items-center justify-center border-b border-border/50 relative overflow-hidden">
          {coverImage ? (
            <img src={coverImage} alt={title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
          ) : (
            <div className="w-16 h-24 bg-card border border-border/50 flex items-center justify-center rounded-sm shadow-sm group-hover:border-primary/30 transition-colors">
              <BookIcon className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
            </div>
          )}
          {verificationStatus === 'verified' && (
            <div className="absolute top-3 right-3 bg-emerald-600/90 text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-sm backdrop-blur-sm">
              <CheckCircle2 className="w-3 h-3" /> Teyitli Kaynak
            </div>
          )}
        </div>
        
        {/* Content Area */}
        <div className="p-5 flex flex-col flex-1 bg-card/30 group-hover:bg-card/60 transition-colors">
          <span className="text-[10px] text-primary uppercase tracking-widest font-medium mb-3 inline-block">
            {category}
          </span>
          <h3 className="font-serif text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors text-balance">
            {title}
          </h3>
          {originalTitle && originalTitle !== "-" && (
            <p className="text-xs text-muted-foreground/70 italic mb-4 font-arabic rtl-text text-right" style={{ direction: 'rtl' }}>
              {originalTitle}
            </p>
          )}
          <div className="mt-auto pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground font-light">
              {author}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
