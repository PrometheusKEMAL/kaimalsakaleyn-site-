import Link from "next/link";
import { Book as BookIcon } from "lucide-react";

export interface BookCardProps {
  slug: string;
  title: string;
  originalTitle?: string;
  author: string;
  category: string;
  coverImage?: string; // We might not have real images, so fallback to icon
  isVerified?: boolean;
}

export function BookCard({
  slug,
  title,
  originalTitle,
  author,
  category,
  coverImage,
  isVerified
}: BookCardProps) {
  return (
    <Link href={`/kutuphane/${slug}`} className="group block">
      <div className="card-base h-full flex flex-col overflow-hidden">
        {/* Cover Area */}
        <div className="h-48 bg-[#1a1a1a] flex items-center justify-center border-b border-gold-border/30 relative">
          {coverImage ? (
            <img src={coverImage} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          ) : (
            <div className="w-16 h-24 bg-card-bg border border-gold-border flex items-center justify-center rounded-sm">
              <BookIcon className="w-6 h-6 text-antique-gold/40" />
            </div>
          )}
          {isVerified && (
            <div className="absolute top-3 right-3 bg-primary-emerald/90 text-ivory text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
              Teyitli Kaynak
            </div>
          )}
        </div>
        
        {/* Content Area */}
        <div className="p-5 flex flex-col flex-1">
          <span className="text-[10px] text-antique-gold uppercase tracking-widest font-medium mb-2 inline-block">
            {category}
          </span>
          <h3 className="font-serif text-lg text-primary-text mb-1 leading-snug group-hover:text-light-gold transition-colors">
            {title}
          </h3>
          {originalTitle && (
            <p className="text-xs text-secondary-text/60 italic mb-3 font-serif rtl-text text-right" style={{ direction: 'rtl' }}>
              {originalTitle}
            </p>
          )}
          <div className="mt-auto pt-4 border-t border-gold-border/20">
            <p className="text-sm text-secondary-text flex items-center justify-between">
              <span>{author}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
