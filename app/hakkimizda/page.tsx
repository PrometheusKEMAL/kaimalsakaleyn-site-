"use client";

import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { LogoMark } from "@/components/layout/LogoMark";

const ease: Easing = [0.25, 0.4, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const values = [
  {
    title: "Hakikati Aramak",
    desc: "Bilgiyi kaynağından öğrenmek, önyargıdan arınmak ve sürekli sorgulamak.",
  },
  {
    title: "Ahlakı Yaşamak",
    desc: "Güzel ahlakı yalnızca bilmek değil, günlük hayatta somut olarak yaşamak.",
  },
  {
    title: "Adaleti Savunmak",
    desc: "Her koşulda ve herkese karşı hakkaniyetli olmak, zulme sessiz kalmamak.",
  },
  {
    title: "İlmi Paylaşmak",
    desc: "Öğrenilen bilgiyi saklamak değil, toplumun aydınlanmasına katkı sunmak.",
  },
  {
    title: "Kardeşliği Korumak",
    desc: "İnsanlar arası bağları güçlendirmek, bölücülükten ve fitneden uzak durmak.",
  },
  {
    title: "Sorumluluğu Kuşanmak",
    desc: "Zamanın gerektirdiği vazifeyi bilmek ve üzerine düşeni yapmak.",
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="pt-24 pb-section-lg">
      {/* Hero */}
      <section className="py-section px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <span className="section-label">Tanıtım</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-6">
            Hakkımızda
          </h1>
          <p className="text-secondary-text text-base md:text-lg leading-relaxed">
            KaimAlSakaleyn; Kur&apos;an ve Ehl-i Beyt öğretileri ışığında
            hakikati arayan, ahlakı yaşayan ve vaat edilen adalet çağının
            bilincini taşıyan bir dijital meclis ve ilim platformudur.
          </p>
        </motion.div>
      </section>

      {/* Nedir? */}
      <section className="py-section px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-display-sm text-primary-text mb-6">
              KaimAlSakaleyn Nedir?
            </h2>
            <div className="space-y-4 text-secondary-text leading-relaxed">
              <p>
                KaimAlSakaleyn, Hz. Peygamber&apos;in (s.a.v.) ümmetine emanet
                bıraktığı iki paha biçilmez değere, yani Kur&apos;an-ı Kerim ve
                Ehl-i Beyt&apos;e — sadakat üzerine kurulmuş bir dijital
                platformdur.
              </p>
              <p>
                İsmimiz, &ldquo;Sekaleyn&rdquo; (iki ağır emanet) hadisinden ve
                &ldquo;Kâim&rdquo; (ayakta duran, hakikati ayakta tutan)
                kavramından ilham alır. Bu iki kavram, hem geçmişe hem geleceğe
                dair derin bir bilinç taşır.
              </p>
              <p>
                Platform; tefekkür yazıları, akademik çalışmalar, dua
                arşivleri, kütüphane, etkinlikler ve üyelere özel meclis alanı
                aracılığıyla ilim, irfan ve kardeşlik ortamı sunmayı
                hedeflemektedir.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-line max-w-md mx-auto" />

      {/* Misyon & Vizyon */}
      <section className="py-section px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="card-hover-gold bg-card-bg p-8 rounded-card"
          >
            <h3 className="font-serif text-xl text-antique-gold mb-4">
              Misyon
            </h3>
            <p className="text-secondary-text leading-relaxed">
              Kur&apos;an ve Ehl-i Beyt öğretilerini çağdaş bir dilde, doğru
              kaynaklarla ve saygın bir üslupla insanlara ulaştırmak; ilim,
              ahlak ve kardeşlik bilincini güçlendirmek.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="card-hover-gold bg-card-bg p-8 rounded-card"
          >
            <h3 className="font-serif text-xl text-antique-gold mb-4">
              Vizyon
            </h3>
            <p className="text-secondary-text leading-relaxed">
              Hakikati arayan bireylerden oluşan, ahlaki olgunluğu hedefleyen,
              şeffaf ve sorgulanabilir bir topluluk oluşturmak; dijital alanda
              en nitelikli Sekaleyn arşivini kurmak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Değerler */}
      <section className="py-section px-6 bg-background-secondary/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="section-label">Değerler</span>
            <h2 className="font-serif text-display-sm text-primary-text">
              Temel Değerlerimiz
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: i * 0.1 },
                  },
                }}
                className="card-hover-gold bg-card-bg p-6 rounded-card"
              >
                <h3 className="font-serif text-base text-primary-text mb-2">
                  {v.title}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Davet Usulü */}
      <section className="py-section px-6" id="davet">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <LogoMark className="w-12 h-12 mx-auto mb-6" />
            <h2 className="font-serif text-display-sm text-primary-text mb-4">
              Davet Usulü
            </h2>
            <p className="text-secondary-text leading-relaxed mb-6">
              KaimAlSakaleyn meclisi, davet usulüyle üye kabul etmektedir.
              Mevcut üyeler veya yönetim tarafından uygun görülen kişilere
              davet gönderilir. Bu usul, meclisin kalitesini ve samimiyetini
              koruma amacı taşır.
            </p>
            <p className="text-secondary-text/60 text-sm">
              Üyelik başvurusu hakkında bilgi almak için{" "}
              <a
                href="/iletisim"
                className="text-antique-gold hover:text-light-gold transition-colors underline underline-offset-4 decoration-antique-gold/30"
              >
                iletişim
              </a>{" "}
              sayfasını ziyaret edebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
