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
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/layout/LogoMark";

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
  {
    num: "01",
    title: "Tevhid",
    desc: "Her şeyin kaynağı ve dönüş noktası olan tek ilâhî hakikate iman.",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "Kur'an",
    desc: "İlâhî kelamın rehberliğinde hayatı anlamlandırmak ve yaşamak.",
    icon: BookOpen,
  },
  {
    num: "03",
    title: "Ehl-i Beyt",
    desc: "Peygamber'in pak nesline bağlılık ve onların öğretilerine sadakat.",
    icon: Heart,
  },
  {
    num: "04",
    title: "Adalet",
    desc: "Her koşulda hakkaniyeti gözetmek, zulme karşı durmak.",
    icon: Scale,
  },
  {
    num: "05",
    title: "İlim ve İrfan",
    desc: "Bilgiyi aramak, hikmeti keşfetmek ve marifete ulaşmak.",
    icon: GraduationCap,
  },
  {
    num: "06",
    title: "Ahlak ve Kardeşlik",
    desc: "Güzel ahlakla donanmak, insanları sevgiyle kucaklamak.",
    icon: Users,
  },
];

/* ─── Page Component ─────────────────────────── */
export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-[1000px]">
        {/* Background Effects with Parallax */}
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-antique-gold/10 via-background to-background" />
          <div className="hero-light-beam mix-blend-screen opacity-50" />
          <div className="absolute inset-0 bg-pattern opacity-[0.03]" />
          
          {/* Animated floating orbs */}
          <motion.div 
            animate={{ 
              y: [0, -30, 0], 
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-antique-gold/5 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              y: [0, 40, 0], 
              rotate: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-emerald/5 blur-[100px]" 
          />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 border border-antique-gold/30 rounded-full text-antique-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase bg-antique-gold/5 backdrop-blur-md shadow-[0_0_20px_rgba(207,181,118,0.1)]">
              {siteConfig.nameFormatted}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="font-serif text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] text-primary-text mb-6 text-balance leading-[1.05] drop-shadow-2xl"
          >
            Sekaleyn'in <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-antique-gold via-yellow-100 to-antique-gold/60">
              Kutsal Emaneti
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="text-secondary-text text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            {siteConfig.heroDescription}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/sakaleyn-defterleri" className="btn-primary group relative overflow-hidden px-8 py-4 w-full sm:w-auto text-sm">
              <span className="relative z-10 flex items-center">
                Meclisi Keşfet
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-antique-gold/0 via-white/20 to-antique-gold/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
            <Link href="/kutuphane" className="btn-outline-gold group px-8 py-4 w-full sm:w-auto text-sm hover:bg-antique-gold/5 hover:shadow-[0_0_30px_rgba(207,181,118,0.2)] transition-all">
              <span className="flex items-center">
                Kütüphaneye Gir
                <Library className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-antique-gold/0 via-antique-gold/50 to-antique-gold/0 mx-auto animate-pulse" />
          <ChevronDown className="w-5 h-5 text-antique-gold/60 animate-scroll-indicator mx-auto mt-2" />
        </motion.div>
      </section>

      {/* ═══════════════ İKİ EMANET ═══════════════ */}
      <Section className="py-24 md:py-40 px-6 relative" id="iki-emanet">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-24">
            <span className="section-label mb-6">Sakaleyn</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-text mb-6 tracking-tight">
              İki Paha Biçilmez Emanet
            </h2>
            <p className="text-secondary-text text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Hz. Peygamber&apos;in (s.a.v.) ümmete bıraktığı miras:
              Allah&apos;ın Kitabı ve Ehl-i Beyt. Bu ikisi, kıyamete dek
              birbirinden ayrılmayacak olan ilahi rehberlik zinciridir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Kur'an Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative glass-panel p-10 md:p-14 rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-antique-gold/5 rounded-full blur-[80px] group-hover:bg-antique-gold/15 transition-colors duration-700" />
              
              <span className="font-serif text-[64px] md:text-[80px] text-antique-gold/10 font-bold leading-none block mb-4 transition-transform duration-700 group-hover:scale-110 origin-left">
                01
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-primary-text mb-6 relative z-10">
                Kur&apos;an-ı Kerim
              </h3>
              <p className="text-secondary-text leading-relaxed text-lg font-light relative z-10">
                İlahi kelamın son ve baki nüzulü. İnsanlığa hakikatin, adaletin
                ve hidayetin yolunu gösteren değişmez rehber. Hayatın her
                alanında ilahi iradeyi anlamamızın temel kaynağı.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-antique-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>

            {/* Ehl-i Beyt Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative glass-panel p-10 md:p-14 rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-antique-gold/5 rounded-full blur-[80px] group-hover:bg-antique-gold/15 transition-colors duration-700" />
              
              <span className="font-serif text-[64px] md:text-[80px] text-antique-gold/10 font-bold leading-none block mb-4 transition-transform duration-700 group-hover:scale-110 origin-left">
                02
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-primary-text mb-6 relative z-10">
                Ehl-i Beyt
              </h3>
              <p className="text-secondary-text leading-relaxed text-lg font-light relative z-10">
                Peygamber&apos;in (s.a.v.) tertemiz nesli ve Kur&apos;an&apos;ın
                yaşayan tefsiri. İlim, ahlak, adalet ve fedakârlığın en yüce
                örnekleri. İnsanlığa hakikatin kapısını açan rehberler.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-antique-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════════ YOLUN ESASLARI ═══════════ */}
      <Section className="py-24 md:py-32 px-6 relative" id="ilkeler">
        <div className="absolute inset-0 bg-background-secondary/30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={fadeUp} className="text-center mb-20">
            <span className="section-label mb-6">İlkeler</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
              Yolun Esasları
            </h2>
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
                <h3 className="font-serif text-2xl text-primary-text mb-3">
                  {p.title}
                </h3>
                <p className="text-secondary-text font-light leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ ÖZEL ALINTI / MANİFESTO ═══════════ */}
      <Section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute left-1/2 -top-12 -translate-x-1/2 text-9xl text-antique-gold/10 font-serif leading-none select-none">
              "
            </div>
            <p className="font-serif text-3xl md:text-5xl text-primary-text/90 leading-snug mb-10 text-balance italic relative z-10">
              Hakikat, onu arayanların yoluna ışık tutar; onu
              görmezden gelenlerin önünde ise duvar olur.
            </p>
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
    </>
  );
}
