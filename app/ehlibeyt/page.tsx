"use client";

import { mockPersons } from "@/lib/mock-data";
import { PersonCard } from "@/components/ui/PersonCard";

export default function EhlibeytPage() {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="py-16 px-6 text-center border-b border-gold-border/10 bg-background-secondary/50">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-6">Ansiklopedi</span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
            Ehl-i Beyt (a.s)
          </h1>
          <p className="text-secondary-text text-lg leading-relaxed max-w-2xl mx-auto font-light text-balance">
            Peygamber Efendimiz (s.a.v) ve O'nun pak soyundan gelen masum İmamların 
            hayatları, kronolojileri, hadisleri ve haklarındaki temel eserler.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="font-serif text-3xl text-primary-text">Ondört Masum</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mockPersons.map((person) => (
              <PersonCard 
                key={person.slug}
                slug={person.slug}
                name={person.name}
                title={person.title}
                birth={person.birth}
                death={person.death}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
