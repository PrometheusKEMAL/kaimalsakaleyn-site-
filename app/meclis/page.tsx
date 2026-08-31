"use client";

import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import {
  Users,
  MessageSquare,
  BookOpen,
  Library,
  Calendar,
  Lock,
  ArrowRight,
  Shield,
  HeartHandshake,
  CheckCircle,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { LogoMark } from "@/components/layout/LogoMark";

const ease: Easing = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  { icon: MessageSquare, title: "Sohbetler", desc: "Haftalık düzenli irfani ve ahlaki sohbetler." },
  { icon: BookOpen, title: "Dersler", desc: "Tefsir, hadis ve Nehcü'l-Belâğa dersleri." },
  { icon: Users, title: "Okuma Halkaları", desc: "Birlikte belirlenen eserlerin müzakereli okumaları." },
  { icon: Shield, title: "Duyurular", desc: "Meclis üyelerine özel duyuru ve haberler." },
  { icon: HeartHandshake, title: "Üyeler Arası İletişim", desc: "Kardeşlik bağlarını güçlendiren iç iletişim platformu." },
  { icon: Library, title: "Özel Arşiv", desc: "Sadece üyelere açık PDF ve ses kayıtları arşivi." },
  { icon: Calendar, title: "Etkinlikler", desc: "Yüzyüze ve çevrimiçi özel etkinlikler." },
];

const faqs = [
  {
    q: "Meclise katılmak ücretli midir?",
    a: "Hayır, meclisimize katılım tamamen ücretsizdir. KaimAlSakaleyn hiçbir ticari amaç gütmez."
  },
  {
    q: "Davet usulü nasıl işliyor?",
    a: "Meclisimiz, referans ve karşılıklı tanışma esasına dayalıdır. Bize 'Davet Hakkında Bilgi Al' formundan ulaştığınızda sizinle iletişime geçer ve tanışırız."
  },
  {
    q: "Toplantılar nerede yapılıyor?",
    a: "Toplantılarımızın büyük bir kısmı çevrimiçi (Zoom vb.) platformlarda gerçekleşmektedir. Ancak belirli periyotlarla yüzyüze görüşmeler de düzenlenmektedir."
  },
  {
    q: "Kimler katılabilir?",
    a: "Kur'an ve Ehl-i Beyt ekseninde sahih dini bilgiyi arayan, kardeşlik ve ahlak ilkelerine saygı duyan herkes davet sürecinden geçerek katılabilir."
  }
];

export default function MeclisLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-section-lg overflow-hidden">
      {/* 1. Hero / Meclis Nedir? */}
      <section className="py-20 px-6 relative text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto relative z-10">
          <motion.span variants={fadeUp} className="section-label mb-6">Özel Alan</motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-[3.5rem] md:text-[5rem] text-primary-text mb-6 leading-tight">
            KaimAlSakaleyn <br className="hidden md:block" />
            <span className="text-antique-gold">Meclisi</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-secondary-text text-lg md:text-xl font-light leading-relaxed mb-12">
            Meclis; hakikati arayanların, Ehl-i Beyt'in pak öğretisinde buluştuğu, ilim, irfan ve kardeşliğin paylaşıldığı mahrem ve özel bir alandır.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#davet" className="btn-primary px-8 py-4">Davet Hakkında Bilgi Al</Link>
            <Link href="/giris" className="btn-outline-gold px-8 py-4">Üye Girişi</Link>
          </motion.div>
        </motion.div>
        
        {/* Decorative background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-antique-gold/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* 2. Amacımız ve Kapsam */}
      <section className="py-20 px-6 relative bg-background-secondary/20 border-y border-gold-border/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-primary-text mb-6">Ne Amaçlıyoruz?</motion.h2>
            <motion.p variants={fadeUp} className="text-secondary-text leading-relaxed mb-6">
              Amacımız sadece kuru bir bilgi aktarımı değil; kalpleri Kur'an ve İtret (Ehl-i Beyt) muhabbetiyle atan, ahlaki bir olgunluğa (kemal) erişmeyi hedefleyen bir kardeşlik topluluğu inşa etmektir.
            </motion.p>
            <motion.p variants={fadeUp} className="text-secondary-text leading-relaxed">
              Bu meclis, modern dünyanın savrulmalarına karşı manevi bir sığınak, soru işaretlerine sahih kaynaklardan cevap aranan bir ilim halkasıdır.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-96 rounded-2xl overflow-hidden glass-panel border border-gold-border flex items-center justify-center bg-card-bg/50">
             <LogoMark className="scale-[2.5] opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* 3. Mecliste Neler Bulunur? */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <span className="section-label mb-4">İçerik ve Faaliyetler</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-text">Mecliste Neler Bulunur?</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-base p-6 hover:-translate-y-1 transition-transform text-left group"
              >
                <div className="w-12 h-12 rounded-lg bg-antique-gold/10 flex items-center justify-center mb-6 group-hover:bg-antique-gold/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-antique-gold" />
                </div>
                <h3 className="font-serif text-xl text-primary-text mb-3">{feature.title}</h3>
                <p className="text-secondary-text text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Katılım ve İlkeler */}
      <section className="py-24 px-6 relative bg-primary-emerald/5 border-y border-primary-emerald/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block px-3 py-1 mb-4 border border-primary-emerald/30 rounded text-primary-emerald text-[10px] tracking-[0.2em] uppercase bg-primary-emerald/10">Üyelik Süreci</span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-text">Kimler Katılabilir?</h2>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="glass-panel p-8 rounded-2xl border border-primary-emerald/20">
                <h3 className="font-serif text-xl text-primary-emerald mb-4 flex items-center gap-3">
                  <Lock className="w-5 h-5" /> Davet Usulü
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  Meclisimiz, mahremiyeti ve karşılıklı güveni korumak adına tamamen **davet ve referans** usulüyle çalışır. Açık kayıt alınmamaktadır. Amacımız niceliksel bir büyüme değil, nitelikli bir kardeşlik ağı kurmaktır.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-panel p-8 rounded-2xl border border-primary-emerald/20">
                <h3 className="font-serif text-xl text-primary-emerald mb-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" /> İlkelerimiz
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  Ehl-i Beyt mektebinin asaletine yakışır bir ahlak, karşılıklı saygı, ilme hürmet ve sır saklama meclisimizin temel düsturlarıdır. Meclise giren her birey bu esasları kabul etmiş sayılır.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. SSS */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-text mb-4">Sıkça Sorulan Sorular</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-base rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-serif text-lg text-primary-text">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-antique-gold transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-6 pb-5 text-secondary-text text-sm leading-relaxed border-t border-gold-border/20 pt-4 mt-2">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Kapanış CTA */}
      <section id="davet" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 md:p-20 rounded-3xl border border-antique-gold/20 bg-card-bg/50">
          <h2 className="font-serif text-3xl md:text-5xl text-primary-text mb-6">Bize Katılın</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Meclisimize dahil olmak ve bu yolculukta bizimle beraber yürümek istiyorsanız, hakkımızda sayfasındaki davet formunu doldurarak bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/hakkimizda#davet" className="btn-primary px-10 py-4 text-base">Davet Hakkında Bilgi Al</Link>
            <Link href="/giris" className="btn-outline-gold px-10 py-4 text-base"><Lock className="w-4 h-4 mr-2 inline-block" /> Üye Girişi</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
