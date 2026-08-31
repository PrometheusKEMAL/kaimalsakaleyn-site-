"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon, Book, FileText, Bookmark, User } from "lucide-react";
import { mockBooks, mockArticles, mockConcepts, mockPersons } from "@/lib/mock-data";
import { BookCard } from "@/components/ui/BookCard";
import { ConceptCard } from "@/components/ui/ConceptCard";
import { PersonCard } from "@/components/ui/PersonCard";
import Link from "next/link";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<"all" | "books" | "concepts" | "persons" | "articles">("all");

  const [results, setResults] = useState({
    books: [] as typeof mockBooks,
    concepts: [] as typeof mockConcepts,
    persons: [] as typeof mockPersons,
    articles: [] as typeof mockArticles,
  });

  useEffect(() => {
    if (!query.trim()) {
      setResults({ books: [], concepts: [], persons: [], articles: [] });
      return;
    }

    const lowerQuery = query.toLowerCase();

    setResults({
      books: mockBooks.filter(b => b.title.toLowerCase().includes(lowerQuery) || b.author.toLowerCase().includes(lowerQuery)),
      concepts: mockConcepts.filter(c => c.title.toLowerCase().includes(lowerQuery) || c.definition.toLowerCase().includes(lowerQuery)),
      persons: mockPersons.filter(p => p.name.toLowerCase().includes(lowerQuery) || p.title.toLowerCase().includes(lowerQuery)),
      articles: mockArticles.filter(a => a.title.toLowerCase().includes(lowerQuery) || a.author.toLowerCase().includes(lowerQuery)),
    });
  }, [query]);

  const totalResults = results.books.length + results.concepts.length + results.persons.length + results.articles.length;

  return (
    <div className="pt-24 pb-32 min-h-screen bg-background">
      
      {/* Header with Search Input */}
      <section className="py-16 px-6 border-b border-gold-border/10 bg-background-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-primary-text mb-8">
            Platformda Ara
          </h1>
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-text/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kitap, yazar, makale veya kavram adı yazın..."
              className="w-full bg-card-bg border border-gold-border focus:border-antique-gold/50 rounded-md pl-12 pr-4 py-4 text-primary-text text-lg focus:outline-none transition-colors shadow-sm"
              autoFocus
            />
          </div>
        </div>
      </section>

      {query.trim() && (
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-10 border-b border-gold-border/20 pb-4">
              <button
                onClick={() => setActiveTab("all")}
                className={`text-sm font-medium tracking-wide transition-colors ${activeTab === "all" ? "text-antique-gold" : "text-secondary-text hover:text-primary-text"}`}
              >
                Tüm Sonuçlar ({totalResults})
              </button>
              <button
                onClick={() => setActiveTab("books")}
                className={`text-sm font-medium tracking-wide transition-colors ${activeTab === "books" ? "text-antique-gold" : "text-secondary-text hover:text-primary-text"}`}
              >
                Kütüphane ({results.books.length})
              </button>
              <button
                onClick={() => setActiveTab("concepts")}
                className={`text-sm font-medium tracking-wide transition-colors ${activeTab === "concepts" ? "text-antique-gold" : "text-secondary-text hover:text-primary-text"}`}
              >
                Ansiklopedi ({results.concepts.length})
              </button>
              <button
                onClick={() => setActiveTab("persons")}
                className={`text-sm font-medium tracking-wide transition-colors ${activeTab === "persons" ? "text-antique-gold" : "text-secondary-text hover:text-primary-text"}`}
              >
                Ehl-i Beyt ({results.persons.length})
              </button>
              <button
                onClick={() => setActiveTab("articles")}
                className={`text-sm font-medium tracking-wide transition-colors ${activeTab === "articles" ? "text-antique-gold" : "text-secondary-text hover:text-primary-text"}`}
              >
                Makaleler ({results.articles.length})
              </button>
            </div>

            {totalResults === 0 ? (
              <div className="text-center py-20 text-secondary-text">
                "{query}" ile eşleşen bir sonuç bulunamadı. Lütfen farklı kelimelerle tekrar deneyin.
              </div>
            ) : (
              <div className="space-y-16">
                
                {/* Books */}
                {(activeTab === "all" || activeTab === "books") && results.books.length > 0 && (
                  <div>
                    <h2 className="text-lg font-serif text-primary-text mb-6 flex items-center gap-2">
                      <Book className="w-5 h-5 text-antique-gold" /> Kütüphane Sonuçları
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {results.books.map(book => (
                        <BookCard key={book.id} slug={book.slug} title={book.title} author={book.author} category={book.category} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Concepts */}
                {(activeTab === "all" || activeTab === "concepts") && results.concepts.length > 0 && (
                  <div>
                    <h2 className="text-lg font-serif text-primary-text mb-6 flex items-center gap-2">
                      <Bookmark className="w-5 h-5 text-antique-gold" /> Ansiklopedi Sonuçları
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {results.concepts.map(concept => (
                        <ConceptCard key={concept.slug} slug={concept.slug} title={concept.title} definition={concept.definition} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Persons */}
                {(activeTab === "all" || activeTab === "persons") && results.persons.length > 0 && (
                  <div>
                    <h2 className="text-lg font-serif text-primary-text mb-6 flex items-center gap-2">
                      <User className="w-5 h-5 text-antique-gold" /> Ehl-i Beyt Sonuçları
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {results.persons.map(person => (
                        <PersonCard key={person.slug} slug={person.slug} name={person.name} title={person.title} birth={person.birth} death={person.death} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Articles */}
                {(activeTab === "all" || activeTab === "articles") && results.articles.length > 0 && (
                  <div>
                    <h2 className="text-lg font-serif text-primary-text mb-6 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-antique-gold" /> Makale Sonuçları
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {results.articles.map(article => (
                        <Link href={`/defterler/${article.slug}`} key={article.id}>
                          <div className="card-base p-6 group h-full">
                            <span className="text-[10px] uppercase tracking-widest text-antique-gold font-medium mb-3 block">{article.category}</span>
                            <h3 className="font-serif text-lg text-primary-text mb-2 group-hover:text-antique-gold transition-colors line-clamp-2">{article.title}</h3>
                            <p className="text-sm text-secondary-text">{article.author}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </section>
      )}

    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-secondary-text">Yükleniyor...</div>}>
      <SearchContent />
    </Suspense>
  );
}
