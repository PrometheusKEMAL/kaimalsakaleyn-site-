"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Printer, Share2, Download, Bookmark, Clock, ArrowLeft, ArrowUp } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function ArticleReader({ children }: { children: React.ReactNode }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Give time for DOM to render the dangerouslySetInnerHTML content
    setTimeout(() => {
      const headings = Array.from(document.querySelectorAll(".entity-linked-content h2, .entity-linked-content h3"));
      
      const newToc = headings.map((heading, index) => {
        // Ensure heading has an ID
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
        return {
          id: heading.id,
          text: heading.textContent || "",
          level: heading.tagName.toLowerCase() === "h2" ? 2 : 3
        };
      });
      setToc(newToc);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    document.querySelectorAll(".entity-linked-content h2, .entity-linked-content h3").forEach((h) => {
      observer.observe(h);
    });

    return () => observer.disconnect();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-12 items-start">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-antique-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating Action Bar (Mobile & Desktop Print) */}
      <div className="hidden lg:flex flex-col gap-4 sticky top-32 z-40 bg-card-bg/50 p-2 rounded-full border border-gold-border/20 backdrop-blur-sm">
        <button onClick={handlePrint} className="p-3 text-secondary-text hover:text-antique-gold hover:bg-white/5 rounded-full transition-all group relative">
          <Printer className="w-5 h-5" />
          <span className="absolute left-full ml-4 px-2 py-1 bg-card-bg text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-gold-border/20">Yazdır</span>
        </button>
        <button className="p-3 text-secondary-text hover:text-antique-gold hover:bg-white/5 rounded-full transition-all group relative">
          <Share2 className="w-5 h-5" />
          <span className="absolute left-full ml-4 px-2 py-1 bg-card-bg text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-gold-border/20">Paylaş</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 w-full article-content-wrapper">
        {children}
      </div>

      {/* Table of Contents (Sticky Right) */}
      {toc.length > 0 && (
        <div className="hidden xl:block w-72 sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
          <h4 className="font-serif text-lg text-primary-text mb-6 border-b border-gold-border/20 pb-4">
            İçindekiler
          </h4>
          <nav className="flex flex-col gap-3">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm transition-all duration-300 block hover:text-antique-gold ${
                  activeId === item.id 
                    ? "text-antique-gold font-medium translate-x-2" 
                    : "text-secondary-text/80 font-light"
                } ${item.level === 3 ? "ml-4 text-xs" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Scroll to Top Mobile */}
      <button 
        onClick={scrollToTop}
        className="lg:hidden fixed bottom-6 right-6 p-4 bg-antique-gold text-background rounded-full shadow-xl shadow-antique-gold/20 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <style jsx global>{`
        /* Global typography injections for Arabic Text and Quotes within articles */
        .entity-linked-content blockquote {
          border-left: 4px solid #cda869;
          background: rgba(205, 168, 105, 0.05);
          padding: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          border-radius: 0 8px 8px 0;
          color: rgba(255, 255, 255, 0.85);
        }
        .entity-linked-content .arabic-text {
          direction: rtl;
          font-family: 'Amiri', 'Traditional Arabic', serif;
          font-size: 1.8rem;
          line-height: 2.2;
          text-align: right;
          padding: 1rem 0;
          color: #e5e5e5;
        }
        .entity-linked-content .quran-verse {
          color: #cda869;
          font-weight: 500;
        }
        @media print {
          body * {
            visibility: hidden;
          }
          .article-content-wrapper, .article-content-wrapper * {
            visibility: visible;
          }
          .article-content-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            color: black !important;
            background: white !important;
          }
          .text-antique-gold {
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
