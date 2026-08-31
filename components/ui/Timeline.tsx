import React from "react";

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  if (!events || events.length === 0) return null;

  return (
    <div className="relative border-l border-antique-gold/20 ml-3 md:ml-4 my-8">
      {events.map((item, index) => (
        <div key={index} className="mb-8 relative pl-6 md:pl-8 last:mb-0">
          {/* Timeline Dot */}
          <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-antique-gold/40 border-2 border-[#161616] group-hover:bg-antique-gold transition-colors" />
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
            {/* Year Label */}
            <span className="font-serif text-antique-gold font-bold shrink-0 min-w-[80px]">
              {item.year}
            </span>
            {/* Event Description */}
            <p className="text-secondary-text text-sm">
              {item.event}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
