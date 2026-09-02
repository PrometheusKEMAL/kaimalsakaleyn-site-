"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FootnoteProps {
  id: number;
  text: string;
}

export function Footnote({ id, text }: FootnoteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLSpanElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <span className="relative inline-block group" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center justify-center w-4 h-4 ml-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors align-super cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:ring-offset-background"
        aria-label={`Dipnot ${id}`}
      >
        {id}
      </button>

      {/* Popover */}
      <span
        className={cn(
          "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 md:w-72 p-3 z-50 text-sm text-left font-normal leading-relaxed rounded-md shadow-xl bg-popover border border-border text-popover-foreground transition-all duration-200",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <span className="text-primary font-medium mr-1.5">[{id}]</span>
        <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: text }} />
        
        {/* Arrow */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-border" />
        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] border-4 border-transparent border-t-popover" />
      </span>
    </span>
  );
}
