"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Book, User, FileText, Calendar, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { mockArticles, mockBooks, mockConcepts, mockPersons, mockEvents } from "@/lib/mock-data";
import { useRouter } from "next/navigation";

interface SearchResult {
  title: string;
  url: string;
  type: string;
  icon: React.ReactNode;
  description?: string;
}

// Helper to normalize Turkish characters for better search
const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/i/g, "i")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ç/g, "c")
    .replace(/â/g, "a")
    .replace(/î/g, "i")
    .replace(/û/g, "u");
};

export function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const normalizedQuery = normalizeText(query);
    const searchResults: SearchResult[] = [];

    // Search Concepts
    mockConcepts.forEach(c => {
      if (normalizeText(c.title).includes(normalizedQuery) || normalizeText(c.definition).includes(normalizedQuery)) {
        searchResults.push({
          title: c.title,
          description: c.definition.substring(0, 80) + "...",
          url: `/kavramlar/${c.slug}`,
          type: "Kavram",
          icon: <FileText className="w-4 h-4 text-primary" />
        });
      }
    });

    // Search Ahl-al-Bayt
    mockPersons.forEach(p => {
      if (normalizeText(p.name).includes(normalizedQuery) || 
          p.laqabs.some(l => normalizeText(l).includes(normalizedQuery))) {
        searchResults.push({
          title: p.name,
          description: p.title,
          url: `/ehlibeyt/${p.slug}`,
          type: "Ehl-i Beyt",
          icon: <User className="w-4 h-4 text-primary" />
        });
      }
    });

    // Search Books
    mockBooks.forEach(b => {
      if (normalizeText(b.title).includes(normalizedQuery) || normalizeText(b.author).includes(normalizedQuery)) {
        searchResults.push({
          title: b.title,
          description: b.author,
          url: `/kutuphane/${b.slug}`,
          type: "Kitap",
          icon: <Book className="w-4 h-4 text-primary" />
        });
      }
    });

    // Search Articles
    mockArticles.forEach(a => {
      if (normalizeText(a.title).includes(normalizedQuery) || normalizeText(a.author).includes(normalizedQuery)) {
        searchResults.push({
          title: a.title,
          description: a.author,
          url: `/defterler/${a.slug}`,
          type: "Makale",
          icon: <FileText className="w-4 h-4 text-primary" />
        });
      }
    });

    setResults(searchResults.slice(0, 8)); // limit to 8
  }, [query]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-card/50 border border-border/50 rounded-full text-muted-foreground hover:text-foreground hover:border-primary transition-colors text-sm"
      >
        <Search className="w-4 h-4" />
        <span className="hidden md:inline">Kütüphanede Ara...</span>
        <span className="hidden md:inline ml-4 text-xs opacity-50 border border-muted-foreground/30 px-1.5 rounded">Ctrl K</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl bg-card border border-border/50 shadow-2xl rounded-2xl z-50 overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="flex items-center border-b border-border/50 px-4 py-4">
                <Search className="w-5 h-5 text-primary mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Kavram, Kitap, Makale, Şahsiyet ara..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground text-lg placeholder:text-muted-foreground/50"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto no-scrollbar p-2">
                {query.length > 0 && query.length < 2 && (
                  <div className="px-4 py-8 text-center text-muted-foreground/70">
                    Arama yapmak için en az 2 karakter girin.
                  </div>
                )}
                
                {query.length >= 2 && results.length === 0 && (
                  <div className="px-4 py-8 text-center text-muted-foreground/70">
                    "{query}" ile eşleşen bir sonuç bulunamadı.
                  </div>
                )}

                {results.length > 0 && (
                  <div className="flex flex-col gap-1 p-2">
                    {results.map((result, idx) => (
                      <Link
                        key={idx}
                        href={result.url}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                          {result.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-foreground font-medium truncate">{result.title}</h4>
                          {result.description && (
                            <p className="text-xs text-muted-foreground truncate">{result.description}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-background px-2 py-1 rounded-full border border-border">
                            {result.type}
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-muted border-t border-border/50 px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground/80">Sekaleyn Araştırma ve Kaynak Merkezi</span>
                {query.length >= 2 && (
                  <Link 
                    href={`/arama?q=${encodeURIComponent(query)}`} 
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    Tüm Sonuçları Gör <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
