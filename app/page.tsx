"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Easing } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  Users,
  Scale,
  GraduationCap,
  Heart,
  Sparkles,
  ArrowRight,
  Calendar,
  Library,
  Clock,
  Book,
  FileText,
  Download,
  MapPin
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/layout/LogoMark";
import { 
  mockArticles, 
  mockBooks, 
  mockPublications, 
  mockEvents, 
  dailyQuote, 
  mehdeviyetDossier 
} from "@/lib/mock-data";

/* ─── Animation Helpers ──────────────────────── */
const ease: Easing = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Principle Card Data ────────────────────── */
const principles = [
  { num: "01", title: "Tevhid", desc: "Her şeyin kaynağı ve dönüş noktası olan tek ilâhî hakikate iman.", icon: Sparkles },
  { num: "02", title: "Kur'an", desc: "İlâhî kelamın rehberliğinde hayatı anlamlandırmak ve yaşamak.", icon: BookOpen },
  { num: "03", title: "Ehl-i Beyt", desc: "Peygamber'in pak nesline bağlılık ve onların öğretilerine sadakat.", icon: Heart },
  { num: "04", title: "Adalet", desc: "Her koşulda hakkaniyeti gözetmek, zulme karşı durmak.", icon: Scale },
  { num: "05", title: "İlim ve İrfan", desc: "Bilgiyi aramak, hikmeti keşfetmek ve marifete ulaşmak.", icon: GraduationCap },
  { num: "06", title: "Ahlak ve Kardeşlik", desc: "Güzel ahlakla donanmak, insanları sevgiyle kucaklamak.", icon: Users },
];

/* ─── Page Component ─────────────────────────── */
export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Data subsets
  const recentArticles = mockArticles.slice(0, 3);
  const featuredBooks = mockBooks.slice(0, 4);
  const latestPublication = mockPublications[0];
  const upcomingEvent = mockEvents.find(e => !e.isPast) || mockEvents[0];

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-[1000px]">
        {/* Background Effects with Parallax */}
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-antique-gold/10 via-background to-background" />
          <div className="hero-light-beam mix-blend-screen opacity-50" />
          <div className="absolute inset-0 bg-pattern opacity-[0.03]" />
          
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-antique-gold/5 blur-[120px]" 
          />
          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-emerald/5 blur-[100px]" 
          />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, ease }}>
            <span className="inline-block px-4 py-1.5 mb-8 border border-antique-gold/30 rounded-full text-antique-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase bg-antique-gold/5 backdrop-blur-md shadow-[0_0_20px_rgba(207,181,118,0.1)]">
              {siteConfig.nameFormatted}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease }}
            className="font-serif text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] text-primary-text mb-6 text-balance leading-[1.05] drop-shadow-2xl"
          >
            Sekaleyn'in <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-antique-gold via-yellow-100 to-antique-gold/60">
              Kutsal Emaneti
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease }}
            className="text-secondary-text text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            {siteConfig.heroDescription}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/meclis" className="btn-primary group relative overflow-hidden px-8 py-4 w-full sm:w-auto text-sm">
              <span className="relative z-10 flex items-center">
                Meclisi Tanı
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-antique-gold/0 via-white/20 to-antique-gold/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
            <Link href="/giris" className="btn-outline-gold group px-8 py-4 w-full sm:w-auto text-sm hover:bg-antique-gold/5 transition-all">
              <span className="flex items-center">
                Üye Girişi
                <Users className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-antique-gold/0 via-antique-gold/50 to-antique-gold/0 mx-auto animate-pulse" />
          <ChevronDown className="w-5 h-5 text-antique-gold/60 animate-scroll-indicator mx-auto mt-2" />
        </motion.div>
      </section>

      {/* ═══════════════ İKİ EMANET (SEKALEYN NEDİR?) ═══════════════ */}
      <Section className="py-24 md:py-32 px-6 relative" id="iki-emanet">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="section-label mb-6">Sekaleyn Nedir?</span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-text mb-6 tracking-tight">
              İki Paha Biçilmez Emanet
            </h2>
            <p className="text-secondary-text text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Hz. Peygamber'in (s.a.v.) ümmete bıraktığı miras:
              Allah'ın Kitabı ve Ehl-i Beyt.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="group relative glass-panel p-10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-antique-gold/5 rounded-full blur-[80px] group-hover:bg-antique-gold/15 transition-colors duration-700" />
              <h3 className="font-serif text-3xl text-primary-text mb-4 relative z-10">Kur'an-ı Kerim</h3>
              <p className="text-secondary-text leading-relaxed font-light relative z-10">
                İlahi kelamın son ve baki nüzulü. İnsanlığa hakikatin, adaletin ve hidayetin yolunu gösteren değişmez rehber.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="group relative glass-panel p-10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-antique-gold/5 rounded-full blur-[80px] group-hover:bg-antique-gold/15 transition-colors duration-700" />
              <h3 className="font-serif text-3xl text-primary-text mb-4 relative z-10">Ehl-i Beyt</h3>
              <p className="text-secondary-text leading-relaxed font-light relative z-10">
                Peygamber'in (s.a.v.) tertemiz nesli ve Kur'an'ın yaşayan tefsiri. İlim, ahlak, adalet ve fedakârlığın en yüce örnekleri.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════════ SON YAZILAR ═══════════ */}
      <Section className="py-24 md:py-32 px-6 relative bg-card-bg/30" id="son-yazilar">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="section-label mb-4">Sekaleyn Defterleri</span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-text">
                Son Yazılar
              </h2>
            </div>
            <Link href="/defterler" className="text-sm text-antique-gold hover:text-antique-gold/80 flex items-center transition-colors">
              Tüm Yazıları Gör
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <motion.div key={article.id} variants={fadeUp} custom={index} whileHover={{ y: -5 }} className="group">
                <Link href={`/defterler/${article.slug}`} className="block card-base p-8 h-full flex flex-col hover:border-antique-gold/50 transition-all overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-antique-gold/5 rounded-full blur-[40px] group-hover:bg-antique-gold/15 transition-colors duration-700" />
                  <span className="text-[10px] tracking-wider uppercase text-antique-gold px-3 py-1 bg-antique-gold/10 rounded-full border border-antique-gold/20 w-fit mb-6">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-2xl text-primary-text mb-4 group-hover:text-antique-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gold-border/30 mt-auto">
                    <span className="text-xs text-primary-text">{article.author}</span>
                    <div className="flex items-center gap-1.5 text-secondary-text/60 text-xs">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ ÖNE ÇIKAN KÜTÜPHANE ═══════════ */}
      <Section className="py-24 md:py-32 px-6 relative" id="one-cikan-kutuphane">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="section-label mb-4">Dijital Arşiv</span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-text">
                Öne Çıkan Eserler
              </h2>
            </div>
            <Link href="/kutuphane" className="text-sm text-antique-gold hover:text-antique-gold/80 flex items-center transition-colors">
              Kütüphaneye Git
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, index) => (
              <motion.div key={book.id} variants={fadeUp} custom={index} className="card-base p-6 hover:-translate-y-1 transition-transform group flex flex-col">
                <div className="bg-antique-gold/5 rounded-lg mb-4 flex items-center justify-center h-40 group-hover:bg-antique-gold/10 transition-colors">
                  <Book className="w-12 h-12 text-antique-gold/20 group-hover:text-antique-gold/40 transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-primary-text mb-1 line-clamp-2 group-hover:text-antique-gold transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-secondary-text text-sm mb-3">{book.author}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gold-border/30 mt-auto">
                  <span className="text-[10px] tracking-wider uppercase text-antique-gold/60">{book.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ İMAM MEHDİ DOSYASI ═══════════ */}
      <Section className="py-24 md:py-32 px-6 relative overflow-hidden" id="mehdeviyet-dosyasi">
        <div className="absolute inset-0 bg-primary-emerald/10 border-y border-primary-emerald/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-emerald/5 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-emerald/20 rounded-full blur-[120px]" />
        
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div variants={fadeUp} className="flex-1 text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-6 border border-primary-emerald/30 rounded text-primary-emerald text-[10px] tracking-[0.2em] uppercase bg-primary-emerald/10">
              Özel Dosya
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
              {mehdeviyetDossier.title}
            </h2>
            <p className="text-secondary-text text-lg leading-relaxed mb-8">
              {mehdeviyetDossier.description}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <span className="flex items-center text-sm text-secondary-text bg-card-bg/50 px-4 py-2 rounded-full border border-gold-border">
                <BookOpen className="w-4 h-4 mr-2 text-primary-emerald" /> {mehdeviyetDossier.articlesCount} Makale
              </span>
              <span className="flex items-center text-sm text-secondary-text bg-card-bg/50 px-4 py-2 rounded-full border border-gold-border">
                <Library className="w-4 h-4 mr-2 text-primary-emerald" /> {mehdeviyetDossier.booksCount} Eser
              </span>
            </div>
            <Link href={mehdeviyetDossier.link} className="btn-primary inline-flex bg-primary-emerald hover:bg-primary-emerald/80 text-background px-8 py-3 group">
              <span className="flex items-center">
                Dosyayı İncele
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
          
          <motion.div variants={fadeUp} className="hidden md:flex w-1/3 justify-center">
            <div className="w-64 h-64 rounded-full border border-primary-emerald/30 relative flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-primary-emerald/20 border-dashed animate-[spin_60s_linear_infinite]" />
              <Heart className="w-20 h-20 text-primary-emerald/40 drop-shadow-[0_0_15px_rgba(46,204,113,0.3)]" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════ GÜNÜN SÖZÜ / AYETİ ═══════════ */}
      <Section className="py-24 md:py-32 px-6 relative bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} className="relative">
            <span className="section-label mb-8">Günün {dailyQuote.type}</span>
            <div className="absolute left-1/2 -top-12 -translate-x-1/2 text-9xl text-antique-gold/10 font-serif leading-none select-none">
              "
            </div>
            <p className="font-serif text-3xl md:text-5xl text-primary-text/90 leading-snug mb-10 text-balance relative z-10">
              {dailyQuote.content}
            </p>
            <p className="text-antique-gold tracking-widest uppercase text-sm font-medium">
              — {dailyQuote.source}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════ NEŞRİYAT & ETKİNLİK ═══════════ */}
      <Section className="py-24 md:py-32 px-6 relative bg-card-bg/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Son Neşriyat */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl text-primary-text">Son Yayın</h2>
              <Link href="/nesriyat" className="text-sm text-antique-gold hover:text-antique-gold/80 flex items-center transition-colors">Tümü <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
            <Link href="/nesriyat" className="block card-base p-8 hover:-translate-y-1 transition-transform group">
              <div className="flex items-start gap-6">
                <div className="w-24 h-32 bg-antique-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-antique-gold/20 transition-colors border border-antique-gold/20">
                  <FileText className="w-8 h-8 text-antique-gold" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] tracking-wider uppercase text-antique-gold px-2.5 py-1 bg-antique-gold/10 rounded border border-antique-gold/20 mb-3 inline-block">
                    {latestPublication.type}
                  </span>
                  <h3 className="font-serif text-2xl text-primary-text mb-2 group-hover:text-antique-gold transition-colors">{latestPublication.title}</h3>
                  <p className="text-secondary-text text-sm line-clamp-2 mb-4">{latestPublication.description}</p>
                  <div className="flex items-center text-xs text-primary-emerald uppercase tracking-wider font-medium">
                    <Download className="w-4 h-4 mr-2" /> İndir ({latestPublication.downloadSize})
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Yaklaşan Etkinlik */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl text-primary-text">Yaklaşan Etkinlik</h2>
              <Link href="/etkinlikler" className="text-sm text-antique-gold hover:text-antique-gold/80 flex items-center transition-colors">Tümü <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
            <Link href="/etkinlikler" className="block card-base p-8 hover:-translate-y-1 transition-transform group">
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center justify-center w-24 h-32 bg-antique-gold/5 rounded-lg border border-antique-gold/10 shrink-0 group-hover:bg-antique-gold/10 transition-colors">
                  <span className="text-sm text-antique-gold/80 font-medium uppercase tracking-widest mb-1">
                    {new Date(upcomingEvent.date).toLocaleDateString('tr-TR', { month: 'short' })}
                  </span>
                  <span className="font-serif text-4xl text-antique-gold">
                    {new Date(upcomingEvent.date).getDate()}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] tracking-wider uppercase text-primary-emerald px-2.5 py-1 bg-primary-emerald/10 rounded border border-primary-emerald/20 mb-3 inline-block">
                    {upcomingEvent.type}
                  </span>
                  <h3 className="font-serif text-2xl text-primary-text mb-3 group-hover:text-antique-gold transition-colors">{upcomingEvent.title}</h3>
                  <div className="flex flex-col gap-2 text-sm text-secondary-text">
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-antique-gold/60" /> {new Date(upcomingEvent.date).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-antique-gold/60" /> {upcomingEvent.location}</div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </Section>

      {/* ═══════════ MECLİSE DAVET ═══════════ */}
      <Section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-antique-gold/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div variants={fadeUp}>
            <div className="flex justify-center mb-10">
              <LogoMark className="scale-150 transform-gpu" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
              Meclise Davet
            </h2>
            <p className="text-secondary-text text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
              KaimAlSakaleyn meclisi, hakikati arayan, ahlakı yaşayan ve
              bilinci diri tutan kardeşlerin buluşma noktasıdır.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/giris" className="btn-primary px-10 py-4 group">
                <span className="flex items-center">
                  Meclise Gir
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/hakkimizda#davet" className="btn-outline-gold px-10 py-4">
                Davet Usulü
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════ YOLUN ESASLARI (EDİTORYAL İLKELER) ═══════════ */}
      <Section className="py-24 md:py-32 px-6 relative bg-background-secondary/20" id="ilkeler">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={fadeUp} className="text-center mb-20">
            <span className="section-label mb-6">İlkelerimiz</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
              Editoryal ve İrfani Esaslar
            </h2>
            <p className="text-secondary-text font-light max-w-2xl mx-auto">
              İçeriklerimizi yayına hazırlarken pusulamız olan sarsılmaz ilkeler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.num}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group p-8 rounded-2xl bg-gradient-to-b from-card-bg to-transparent border border-gold-border/50 hover:border-antique-gold/30 hover:bg-card-bg transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-antique-gold/5 flex items-center justify-center group-hover:bg-antique-gold/10 transition-colors group-hover:shadow-[0_0_20px_rgba(207,181,118,0.2)]">
                    <p.icon className="w-6 h-6 text-antique-gold" />
                  </div>
                  <span className="font-serif text-3xl text-antique-gold/15 font-bold group-hover:text-antique-gold/30 transition-colors">
                    {p.num}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-primary-text mb-3">{p.title}</h3>
                <p className="text-secondary-text font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
