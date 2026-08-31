"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hidden Player */}
      <div className="hidden">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=9Mol_Qgce5Q"
          playing={isPlaying}
          loop={true}
          volume={0.3} // Soft background music
          width="0"
          height="0"
          // @ts-ignore
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
              }
            }
          }}
        />
      </div>

      {/* Floating UI */}
      <motion.div 
        className="fixed bottom-6 left-6 z-50 flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex items-center gap-3 p-3 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 border ${
            isPlaying 
              ? "bg-antique-gold/20 border-antique-gold/40 text-antique-gold" 
              : "bg-black/60 border-gold-border/30 text-secondary-text hover:text-white"
          }`}
        >
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <>
                <Volume2 className="w-5 h-5" />
                <span className="absolute -inset-1 rounded-full border border-antique-gold/50 animate-ping opacity-70" />
              </>
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </div>
          
          <AnimatePresence>
            {(isHovered || !isPlaying) && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="overflow-hidden whitespace-nowrap text-sm font-serif pr-2"
              >
                {isPlaying ? "Müziği Kapat" : "Müziği Aç"}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </>
  );
}
