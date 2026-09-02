import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Book, FileText, User, ArrowRight, Library, Sparkles } from "lucide-react";
import Link from "next/link";
import { AdvancedSearch } from "@/components/ui/AdvancedSearch";
import { mockArticles, mockBooks, mockConcepts, mockPersons } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Keşfet | KaimAlSakaleyn",
  description: "Kur'an ve Ehl-i Beyt dijital külliyatında yeni eklenen eserleri, öne çıkan araştırmaları ve ansiklopedi maddelerini keşfedin.",
};

export default function DiscoveryPage() {
  const breadcrumbItems = [
    { label: "Keşfet", href: "/kesfet" }
  ];

  // In a real implementation, this would be fetched from the database
  const latestBooks = mockBooks.slice(0, 3);
  const latestConcepts = mockConcepts.slice(0, 4);
  const featuredArticles = mockArticles.slice(0, 3);
  const randomPerson = mockPersons[0]; // Example

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <Breadcrumbs items={breadcrumbItems} />

      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
          Külliyatı Keşfet
        </h1>
        <p className="text-muted-foreground text-lg mb-10">
          Binlerce kaynak, araştırma dosyası ve kavram arasında araştırma yapın veya editörlerimizin seçtiği öne çıkan içeriklere göz atın.
        </p>
        
        <div className="w-full max-w-xl mx-auto">
          <AdvancedSearch />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-8 space-y-16">
          
          <section>
            <div className="flex items-center gap-2 border-b border-border pb-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-serif text-foreground">Öne Çıkan Araştırmalar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Link key={article.slug} href={`/defterler/${article.slug}`} className="card-base p-6 group flex flex-col h-full">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{article.category}</span>
                  <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                    <span>{article.author}</span>
                    <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                      Oku <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 border-b border-border pb-2 mb-6">
              <Book className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-serif text-foreground">Kütüphaneye Yeni Eklenenler</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {latestBooks.map((book) => (
                <Link key={book.slug} href={`/kutuphane/${book.slug}`} className="card-base p-4 group flex flex-col items-center text-center">
                  <div className="w-24 h-32 bg-muted rounded mb-4 border border-border shadow-sm flex items-center justify-center">
                    <Library className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                  <h3 className="font-serif text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm mb-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          
          <section className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-sm tracking-widest uppercase text-primary font-medium mb-6">
              Yeni Kavramlar
            </h2>
            <div className="space-y-4">
              {latestConcepts.map((concept) => (
                <Link key={concept.slug} href={`/kavramlar/${concept.slug}`} className="block group">
                  <h3 className="text-foreground group-hover:text-primary font-serif transition-colors text-base mb-1">
                    {concept.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {concept.definition}
                  </p>
                </Link>
              ))}
            </div>
            <Link href="/kavramlar" className="inline-flex items-center gap-1 text-xs text-primary mt-6 hover:underline">
              Tüm Ansiklopediyi Gör <ArrowRight className="w-3 h-3" />
            </Link>
          </section>

          <section className="bg-card border border-border p-6 rounded-lg text-center">
            <h2 className="text-sm tracking-widest uppercase text-primary font-medium mb-6">
              Tarihi Şahsiyet
            </h2>
            <div className="w-20 h-20 bg-background border border-border rounded-full mx-auto flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-2">{randomPerson.name}</h3>
            <p className="text-xs text-muted-foreground mb-4">{randomPerson.title}</p>
            <Link href={`/ehlibeyt/${randomPerson.slug}`} className="btn-outline-gold w-full text-xs">
              Profili İncele
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}
