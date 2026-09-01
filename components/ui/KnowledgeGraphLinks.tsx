import Link from "next/link";
import { BookOpen, FileText, User, Share2 } from "lucide-react";
import { mockPersons, mockConcepts, mockBooks, mockArticles, generatedConcepts, generatedScholars } from "@/lib/mock-data";

export interface KnowledgeGraphLinksProps {
  entitySlug: string;
  entityType: 'person' | 'concept' | 'book' | 'article' | 'dossier';
  title?: string;
}

export function KnowledgeGraphLinks({ entitySlug, entityType, title = "Okumaya Devam Et" }: KnowledgeGraphLinksProps) {
  // In a real DB, this would be a single query to `kg_edges` table.
  // For now, we simulate finding relationships by scanning our mock data.

  let relatedPersons: any[] = [];
  let relatedConcepts: any[] = [];
  let relatedBooks: any[] = [];
  let relatedArticles: any[] = [];

  const allPersons = [...mockPersons, ...generatedScholars];
  const allConcepts = [...mockConcepts, ...generatedConcepts];

  if (entityType === 'person') {
    const person = allPersons.find(p => p.slug === entitySlug);
    if (person) {
      relatedPersons = allPersons.filter(p => person.relatedPersons?.includes(p.slug));
      relatedConcepts = allConcepts.filter(c => c.relatedPersons?.includes(person.slug));
      relatedBooks = mockBooks.filter(b => person.relatedBooks?.includes(b.id));
      relatedArticles = mockArticles.filter(a => person.relatedArticles?.includes(a.slug));
    }
  } else if (entityType === 'concept') {
    const concept = allConcepts.find(c => c.slug === entitySlug);
    if (concept) {
      relatedPersons = allPersons.filter(p => concept.relatedPersons?.includes(p.slug));
      relatedConcepts = allConcepts.filter(c => (concept as any).relatedConcepts?.includes(c.slug)); // if implemented
      relatedBooks = mockBooks.filter(b => concept.relatedBooks?.includes(b.id));
      relatedArticles = mockArticles.filter(a => concept.relatedArticles?.includes(a.slug));
    }
  }

  const hasRelations = relatedPersons.length > 0 || relatedConcepts.length > 0 || relatedBooks.length > 0 || relatedArticles.length > 0;

  if (!hasRelations) return null;

  return (
    <div className="mt-16 pt-12 border-t border-gold-border/20">
      <h3 className="font-serif text-2xl text-primary-text mb-8 flex items-center gap-2">
        <Share2 className="w-5 h-5 text-antique-gold" /> {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Related Persons */}
        {relatedPersons.length > 0 && (
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-secondary-text mb-4 font-medium border-b border-gold-border/10 pb-2">
              İlgili Şahıslar
            </h4>
            <ul className="space-y-3">
              {relatedPersons.map(p => (
                <li key={p.slug}>
                  <Link href={`/ehlibeyt/${p.slug}`} className="flex items-center gap-2 group">
                    <User className="w-3.5 h-3.5 text-antique-gold/50 group-hover:text-antique-gold transition-colors" />
                    <span className="text-sm text-primary-text/80 group-hover:text-primary-text transition-colors">{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Concepts */}
        {relatedConcepts.length > 0 && (
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-secondary-text mb-4 font-medium border-b border-gold-border/10 pb-2">
              İlgili Kavramlar
            </h4>
            <ul className="space-y-3">
              {relatedConcepts.map(c => (
                <li key={c.slug}>
                  <Link href={`/kavramlar/${c.slug}`} className="flex items-center gap-2 group">
                    <BookOpen className="w-3.5 h-3.5 text-antique-gold/50 group-hover:text-antique-gold transition-colors" />
                    <span className="text-sm text-primary-text/80 group-hover:text-primary-text transition-colors">{c.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-secondary-text mb-4 font-medium border-b border-gold-border/10 pb-2">
              İlgili Eserler
            </h4>
            <ul className="space-y-3">
              {relatedBooks.map(b => (
                <li key={b.id}>
                  <Link href={`/kutuphane/${b.slug}`} className="flex items-center gap-2 group">
                    <BookOpen className="w-3.5 h-3.5 text-antique-gold/50 group-hover:text-antique-gold transition-colors" />
                    <span className="text-sm text-primary-text/80 group-hover:text-primary-text transition-colors truncate">{b.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-secondary-text mb-4 font-medium border-b border-gold-border/10 pb-2">
              İlgili Makaleler
            </h4>
            <ul className="space-y-3">
              {relatedArticles.map(a => (
                <li key={a.slug}>
                  <Link href={`/defterler/${a.slug}`} className="flex items-center gap-2 group">
                    <FileText className="w-3.5 h-3.5 text-antique-gold/50 group-hover:text-antique-gold transition-colors" />
                    <span className="text-sm text-primary-text/80 group-hover:text-primary-text transition-colors truncate">{a.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}
