import React from "react";
import { CheckCircle2 } from "lucide-react";

export interface HadithProps {
  arabicText?: string;
  translation: string;
  sourceBook: string;
  sourceVolume?: string;
  sourcePage?: string;
  sourceHadithNumber?: string;
  isVerified?: boolean;
}

export function Hadith({
  arabicText,
  translation,
  sourceBook,
  sourceVolume,
  sourcePage,
  sourceHadithNumber,
  isVerified = true
}: HadithProps) {
  return (
    <div className="my-8 rounded-md border-l-2 border-l-antique-gold/60 bg-[#141414] p-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] uppercase tracking-[0.2em] text-antique-gold/90 font-medium">
          RİVAYET
        </span>
        {isVerified && (
          <div className="flex items-center text-[10px] text-primary-emerald/90 uppercase tracking-widest gap-1 bg-primary-emerald/10 px-2 py-1 rounded-sm border border-primary-emerald/20">
            <CheckCircle2 className="w-3 h-3" />
            Teyitli Kaynak
          </div>
        )}
      </div>

      {/* Arabic Text */}
      {arabicText && (
        <div className="mb-6 rtl-text text-2xl leading-[2.5] text-primary-text font-arabic">
          «{arabicText}»
        </div>
      )}

      {/* Translation */}
      <div className="text-primary-text leading-relaxed font-light mb-6 text-balance">
        {translation}
      </div>

      {/* Source */}
      <div className="pt-4 border-t border-gold-border/10">
        <div className="flex flex-wrap items-center gap-2 text-xs text-secondary-text">
          <span className="font-serif italic text-primary-text/90">{sourceBook}</span>
          {(sourceVolume || sourcePage || sourceHadithNumber) && <span>•</span>}
          {sourceVolume && <span>Cilt: {sourceVolume}</span>}
          {sourcePage && <span>Sayfa: {sourcePage}</span>}
          {sourceHadithNumber && <span>Hadis No: {sourceHadithNumber}</span>}
        </div>
      </div>
    </div>
  );
}
