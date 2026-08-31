import Link from "next/link";
import { Book, ChevronRight, Search, FileText, Users, Library, Bookmark, Feather, ShieldCheck } from "lucide-react";
import { LogoMark } from "@/components/layout/LogoMark";
import { BookCard } from "@/components/ui/BookCard";
import { ConceptCard } from "@/components/ui/ConceptCard";
import { PersonCard } from "@/components/ui/PersonCard";
import { mockPersons, mockConcepts } from "@/lib/mock-data/encyclopedia";

export default function Home() {
  const latestBooks = [
    { slug: "el-kafi-cilt-1", title: "El-Kâfî", originalTitle: "الكافي", author: "Sıkatulislam Kuleynî", category: "Hadis", verificationStatus: "editorial_approved" as const },
    { slug: "nehcul-belaga", title: "Nehcü'l Belâğa", originalTitle: "نهج البلاغة", author: "Seyyid Razi", category: "Hitabet & Hadis", verificationStatus: "editorial_approved" as const },
    { slug: "sahife-i-seccadiye", title: "Sahife-i Seccadiye", originalTitle: "الصحيفة السجادية", author: "İmam Zeynelabidin (a.s)", category: "Dua & İrfan", verificationStatus: "editorial_approved" as const },
    { slug: "tefsir-el-mizan", title: "El-Mîzân Fî Tefsîr'il-Kur'ân", originalTitle: "الميزان في تفسير القرآن", author: "Allame Tabatabai", category: "Tefsir", verificationStatus: "editorial_approved" as const },
  ];

  const articles = [
    { slug: "imamet-kavrami", title: "Kur'an'da İmamet ve İlahi Rehberlik", category: "Akaid", readTime: "12 dk", date: "Ekim 2023" },
    { slug: "asura-felsefesi", title: "Aşura'nın İrfani Boyutu", category: "Tarih & İrfan", readTime: "18 dk", date: "Eylül 2023" },
    { slug: "hadis-metodolojisi", title: "Şiî Hadis İlminde Rical ve Dirayet", category: "Hadis İlmi", readTime: "24 dk", date: "Ağustos 2023" },
  ];

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
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[75vh] border-b border-gold-border/20">
        <div className="absolute inset-0 bg-background noise-texture" />
        {/* Subtle radial gradient behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-antique-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <LogoMark className="w-16 h-16 opacity-80" />
          </div>
          
          <h1 className="font-serif text-display-md md:text-display-lg text-primary-text mb-6">
            Kur'an ve Ehl-i Beyt Merkezli<br />
            <span className="text-antique-gold">Dijital Araştırma ve İlim Merkezi</span>
          </h1>
          
          <p className="text-secondary-text text-lg md:text-xl font-light max-w-3xl mx-auto mb-12 text-balance leading-relaxed">
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
      <section className="py-24 px-6 bg-background-secondary border-b border-gold-border/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-label">Araştırma Alanları</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {researchAreas.map((area, i) => (
              <Link href={area.link} key={i} className="group card-base p-6 flex items-center gap-4 hover:border-antique-gold/40">
                <div className="w-10 h-10 rounded-sm bg-background border border-gold-border/30 flex items-center justify-center group-hover:bg-antique-gold/10 transition-colors">
                  <area.icon className="w-5 h-5 text-antique-gold/70 group-hover:text-antique-gold" />
                </div>
                <span className="font-medium text-primary-text/90 text-sm tracking-wide">{area.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED DOSSIER */}
      <section className="py-24 px-6 relative border-b border-gold-border/10 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-antique-gold/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-primary-emerald font-bold mb-4 inline-block bg-primary-emerald/10 px-3 py-1 border border-primary-emerald/20">
                Öne Çıkan Araştırma Dosyası
              </span>
              <h2 className="font-serif text-4xl text-primary-text mb-6 leading-tight">Mehdeviyet:<br/>Beklenen Adalet</h2>
              <p className="text-secondary-text mb-8 leading-relaxed">
                İmam Mehdi'nin (a.s) gaybeti, zuhur alametleri, bekleyiş felsefesi ve küresel adalet devleti hakkındaki en kapsamlı temel eserler, makaleler ve hadis kaynakları bu dosyada derlenmiştir.
              </p>
              <Link href="/kavramlar/mehdeviyet" className="inline-flex items-center text-sm font-medium text-antique-gold hover:text-light-gold group">
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
      <section className="py-24 px-6 bg-background border-b border-gold-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-label">Kütüphaneden Seçmeler</h2>
              <h3 className="font-serif text-3xl text-primary-text">Temel Kaynak Eserler</h3>
            </div>
            <Link href="/kutuphane" className="hidden sm:inline-flex items-center text-sm text-antique-gold hover:text-light-gold">
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
      <section className="py-24 px-6 bg-background-secondary border-b border-gold-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-label">Sekaleyn Defterleri</h2>
              <h3 className="font-serif text-3xl text-primary-text">Son Eklenen Araştırmalar</h3>
            </div>
            <Link href="/defterler" className="hidden sm:inline-flex items-center text-sm text-antique-gold hover:text-light-gold">
              Tüm Makaleler <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Link href={`/defterler/${article.slug}`} key={i} className="group card-base p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-antique-gold font-medium">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-secondary-text">{article.date}</span>
                </div>
                <h4 className="font-serif text-xl text-primary-text mb-4 group-hover:text-light-gold transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="mt-auto flex items-center justify-between text-xs text-secondary-text pt-4 border-t border-gold-border/10">
                  <span className="flex items-center"><FileText className="w-3.5 h-3.5 mr-1.5" /> Araştırma Makalesi</span>
                  <span>{article.readTime} okuma</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INFALLIBLES */}
      <section className="py-24 px-6 bg-background border-b border-gold-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-label mx-auto">Ehl-i Beyt</h2>
            <h3 className="font-serif text-3xl text-primary-text">Ondört Masum</h3>
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
      <section className="py-32 px-6 bg-[#0d0d0d] text-center border-t border-gold-border/20">
        <div className="max-w-3xl mx-auto">
          <LogoMark className="w-12 h-12 mx-auto mb-8 opacity-60" />
          <h2 className="font-serif text-2xl md:text-3xl text-primary-text mb-6">İlmi Şeffaflık ve Akademik Titizlik</h2>
          <p className="text-secondary-text leading-relaxed text-lg mb-8">
            KaimAlSakaleyn, paylaşılan her bir metnin, ayetin ve hadisin birinci elden 
            kaynaklarına ulaşılarak, Şiî hadis metodolojisi ve akademik standartlar 
            çerçevesinde doğrulandığı şeffaf bir ilim platformudur.
          </p>
          <Link href="/yayin-ilkeleri" className="text-sm font-medium text-antique-gold uppercase tracking-widest border-b border-antique-gold/30 pb-1 hover:border-antique-gold transition-colors">
            Yayın İlkelerimizi Okuyun
          </Link>
        </div>
      </section>
    </>
  );
}
