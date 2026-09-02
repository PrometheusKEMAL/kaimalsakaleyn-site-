import Link from "next/link";
import { Book, ChevronRight, Search, FileText, Users, Library, Bookmark, Feather, ShieldCheck } from "lucide-react";
import { LogoMark } from "@/components/layout/LogoMark";
import { BookCard } from "@/components/ui/BookCard";
import { ConceptCard } from "@/components/ui/ConceptCard";
import { PersonCard } from "@/components/ui/PersonCard";
import { mockPersons, mockConcepts } from "@/lib/mock-data/encyclopedia";

import { mockBooks, mockArticles } from "@/lib/mock-data";

export default function Home() {
  const latestBooks = mockBooks.slice(0, 4).map(b => ({ ...b, coverImage: b.cover }));

  const articles = mockArticles.slice(0, 3).map(a => ({
    ...a,
    date: a.publishedAt
  }));

  const researchAreas = [
    { title: "Kur'an ve Tefsir", icon: Book, link: "/kutuphane?q=Kuran" },
    { title: "Hadis İlmi", icon: Bookmark, link: "/kutuphane?q=Hadis" },
    { title: "Ehl-i Beyt", icon: Users, link: "/ehlibeyt" },
    { title: "İmamet", icon: ShieldCheck, link: "/kavramlar/imamet" },
    { title: "Mehdeviyet", icon: Search, link: "/kavramlar/mehdeviyet" },
    { title: "Şiî Tarih", icon: FileText, link: "/kutuphane?q=Tarih" },
    { title: "Ahlak ve İrfan", icon: Feather, link: "/kutuphane?q=Irfan" },
    { title: "Kütüphane", icon: Library, link: "/kutuphane" },
  ];

  return (
    <>
      {/* 1. ACADEMIC HERO */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[75vh] border-b border-border/50">
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <LogoMark className="w-16 h-16 opacity-80" />
          </div>
          
          <h1 className="font-serif text-display-md md:text-display-lg text-foreground mb-6">
            Kur'an ve Ehl-i Beyt Merkezli<br />
            <span className="text-primary">Dijital Araştırma ve İlim Merkezi</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-3xl mx-auto mb-12 text-balance leading-relaxed">
            KaimAlSakaleyn; Şiî düşünce, İmamet, Mehdeviyet, Hadis ve Tefsir alanlarında 
            kapsamlı kaynak, makale ve araştırmaları bir araya getiren akademik 
            bir dijital kütüphanedir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/kutuphane" className="btn-primary w-full sm:w-auto">
              Kütüphaneyi Keşfet
            </Link>
            <Link href="/kavramlar" className="btn-outline-gold w-full sm:w-auto">
              Ansiklopediyi İncele
            </Link>
          </div>
        </div>
      </section>

      {/* 2. RESEARCH AREAS */}
      <section className="py-24 px-6 bg-muted/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-label">Araştırma Alanları</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {researchAreas.map((area, i) => (
              <Link href={area.link} key={i} className="group card-base p-6 flex items-center gap-4 hover:border-primary/40">
                <div className="w-10 h-10 rounded-sm bg-background border border-border/50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <area.icon className="w-5 h-5 text-primary/70 group-hover:text-primary" />
                </div>
                <span className="font-medium text-foreground/90 text-sm tracking-wide">{area.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED DOSSIER */}
      <section className="py-24 px-6 relative border-b border-border/50 overflow-hidden">
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-600 font-bold mb-4 inline-block bg-emerald-600/10 px-3 py-1 border border-emerald-600/20">
                Öne Çıkan Araştırma Dosyası
              </span>
              <h2 className="font-serif text-4xl text-foreground mb-6 leading-tight">Mehdeviyet:<br/>Beklenen Adalet</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                İmam Mehdi'nin (a.s) gaybeti, zuhur alametleri, bekleyiş felsefesi ve küresel adalet devleti hakkındaki en kapsamlı temel eserler, makaleler ve hadis kaynakları bu dosyada derlenmiştir.
              </p>
              <Link href="/kavramlar/mehdeviyet" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group">
                Dosyayı İncele <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               {/* Show related concepts/books for this dossier */}
               <ConceptCard slug="mehdeviyet" title="Mehdeviyet" definition="Hz. Mehdi'nin (a.s) gelişi ve kuracağı adalet devleti inancı." category="Temel Kavram" />
               <ConceptCard slug="gaybet" title="Gaybet" definition="On İkinci İmam'ın (a.s) Allah'ın emriyle gözlerden gizlenmesi." category="Kelam" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIBRARY SELECTIONS */}
      <section className="py-24 px-6 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-label">Kütüphaneden Seçmeler</h2>
              <h3 className="font-serif text-3xl text-foreground">Temel Kaynak Eserler</h3>
            </div>
            <Link href="/kutuphane" className="hidden sm:inline-flex items-center text-sm text-primary hover:text-primary/80">
              Tüm Kataloğu Gör <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestBooks.map(book => (
              <BookCard key={book.slug} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. LATEST ARTICLES */}
      <section className="py-24 px-6 bg-muted/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-label">Sekaleyn Defterleri</h2>
              <h3 className="font-serif text-3xl text-foreground">Son Eklenen Araştırmalar</h3>
            </div>
            <Link href="/defterler" className="hidden sm:inline-flex items-center text-sm text-primary hover:text-primary/80">
              Tüm Makaleler <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Link href={`/defterler/${article.slug}`} key={i} className="group card-base h-full flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                {article.image && (
                  <div className="h-48 w-full relative overflow-hidden border-b border-border/50">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1 bg-card/30 group-hover:bg-card/60 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-medium">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{article.date}</span>
                  </div>
                  <h4 className="font-serif text-xl text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 text-balance">
                    {article.title}
                  </h4>
                  <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <span className="flex items-center"><FileText className="w-3.5 h-3.5 mr-1.5" /> Araştırma Makalesi</span>
                    <span>{article.readTime} okuma</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INFALLIBLES */}
      <section className="py-24 px-6 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-label mx-auto">Ehl-i Beyt</h2>
            <h3 className="font-serif text-3xl text-foreground">Ondört Masum</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {mockPersons.slice(0, 14).map(person => (
              <PersonCard 
                key={person.slug} 
                slug={person.slug}
                name={person.name}
                title={person.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. ABOUT / MISSION */}
      <section className="py-32 px-6 bg-muted/50 text-center border-t border-border/50">
        <div className="max-w-3xl mx-auto">
          <LogoMark className="w-12 h-12 mx-auto mb-8 opacity-60" />
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">İlmi Şeffaflık ve Akademik Titizlik</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            KaimAlSakaleyn, paylaşılan her bir metnin, ayetin ve hadisin birinci elden 
            kaynaklarına ulaşılarak, Şiî hadis metodolojisi ve akademik standartlar 
            çerçevesinde doğrulandığı şeffaf bir ilim platformudur.
          </p>
          <Link href="/yayin-ilkeleri" className="text-sm font-medium text-primary uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-colors">
            Yayın İlkelerimizi Okuyun
          </Link>
        </div>
      </section>
    </>
  );
}
