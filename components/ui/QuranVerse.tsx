import React from "react";

export interface QuranVerseProps {
  surahName: string;
  surahNumber: number;
  verseNumber: number | string;
  arabicText: string;
  translation: string;
  translator?: string;
}

export function QuranVerse({
  surahName,
  surahNumber,
  verseNumber,
  arabicText,
  translation,
  translator = "Diyanet İşleri Başkanlığı"
}: QuranVerseProps) {
  return (
    <div className="my-8 rounded-md border border-gold-border/20 bg-card-bg/30 p-6 relative overflow-hidden">
      {/* Decorative subtle pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE5MywgMTYz,IDk4LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMTIgMmwxMCAxMEwxMiAyMkwyIDEyeiIvPjwvc3ZnPg==')] opacity-50 pointer-events-none -mr-10 -mt-10" />
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gold-border/10 pb-4 mb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-antique-gold/80 font-medium">
          Kur'an-ı Kerim
        </span>
        <span className="text-sm font-serif text-secondary-text">
          {surahName} Suresi, {surahNumber}:{verseNumber}
        </span>
      </div>

      {/* Arabic Text */}
      <div className="mb-6 rtl-text text-3xl leading-loose text-primary-text font-arabic">
        {arabicText} ﴿{verseNumber}﴾
      </div>

      {/* Translation */}
      <div className="text-primary-text leading-relaxed font-light mb-4 text-balance">
        {translation}
      </div>

      {/* Translator */}
      <div className="flex justify-end text-xs text-secondary-text/60 italic">
        Meal: {translator}
      </div>
    </div>
  );
}
