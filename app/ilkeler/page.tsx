"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Heart, BookOpen, Users, Lock, Scale, HandHeart } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const principles = [
  {
    icon: Shield,
    title: "Şiddetin ve Nefretin Reddi",
    desc: "KaimAlSakaleyn, her türlü şiddeti, nefret söylemini ve ayrımcılığı kesinlikle reddeder. Düşünce ve ifade özgürlüğü, saygı çerçevesinde korunur.",
  },
  {
    icon: HandHeart,
    title: "İstismarın Reddi",
    desc: "Maddi veya manevi hiçbir istismar kabul edilmez. Manevî hizmet para karşılığı satılmaz. Bağış ve yardımlar şeffaf olarak yönetilir.",
  },
  {
    icon: Users,
    title: "Gönüllülük Esası",
    desc: "Üyelik tamamen gönüllüdür. Hiçbir kişi zorla üye yapılamaz, üyelikten ayrılması engellenemez veya bu nedenle baskıya maruz bırakılamaz.",
  },
  {
    icon: Heart,
    title: "Aile ve Sosyal Bağların Korunması",
    desc: "Hiçbir üye, ailelerinden veya sosyal çevrelerinden koparılmaya teşvik edilmez. Topluluk, mevcut insani bağları güçlendirmeyi hedefler.",
  },
  {
    icon: Eye,
    title: "Sorgulanabilirlik",
    desc: "Hiçbir insan sorgulanamaz veya mutlak otorite olarak sunulamaz. Her yönetici hesap verebilir, her karar sorgulanabilir olmalıdır.",
  },
  {
    icon: Scale,
    title: "Kör İtaatin Reddi",
    desc: "Kör itaate dayalı bir yapı oluşturulması kesinlikle reddedilir. İlim, akıl ve vicdan rehber alınır. Her birey kendi sorumluluğunu taşır.",
  },
  {
    icon: Lock,
    title: "Kişisel Verilerin Korunması",
    desc: "Üyelerin kişisel bilgileri en üst düzeyde korunur. Veriler üçüncü taraflarla paylaşılmaz. KVKK ve gizlilik standartlarına tam uyum sağlanır.",
  },
  {
    icon: BookOpen,
    title: "İlim, Ahlak ve Kardeşlik",
    desc: "Topluluğun temeli; ilim, güzel ahlak ve kardeşliktir. Her üye, öğrenmeye, paylaşmaya ve kardeşlerinin haklarını gözetmeye teşvik edilir.",
  },
];

export default function IlkelerPage() {
  return (
    <div className="pt-24 pb-section-lg">
      {/* Hero */}
      <section className="py-section px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="section-label">Şeffaflık</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-6">
            İlkelerimiz
          </h1>
          <p className="text-secondary-text text-base md:text-lg leading-relaxed">
            KaimAlSakaleyn, aşağıdaki ilkeleri açıkça ve şeffaf biçimde
            beyan eder. Bu ilkeler, topluluğumuzun temelini oluşturur ve her
            koşulda geçerliliğini korur.
          </p>
        </motion.div>
      </section>

      {/* Principles Grid */}
      <section className="py-section px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
              className="card-hover-gold bg-card-bg p-7 rounded-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full border border-antique-gold/20 flex items-center justify-center">
                  <p.icon className="w-4.5 h-4.5 text-antique-gold/60" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-primary-text mb-2">
                    {p.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Note */}
      <section className="py-section px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="gold-line w-16 mx-auto mb-8" />
          <p className="text-secondary-text/80 text-sm leading-relaxed italic">
            Bu ilkeler, KaimAlSakaleyn&apos;in var oluş sebebidir. Bu ilkelere
            aykırı davranan hiçbir kişi — yönetici dahil — dokunulmaz değildir.
          </p>
        </div>
      </section>
    </div>
  );
}
