"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, BookOpen, ScrollText, Globe, GraduationCap, Scale, Users, PenTool } from "lucide-react";

export default function EditoryalIlkelerPage() {
  const principles = [
    {
      id: "kaynak-politikasi",
      title: "Genel Kaynak Politikası",
      icon: <ShieldCheck className="w-6 h-6 text-antique-gold" />,
      content: "KaimAlSakaleyn platformunda yayınlanan tüm içerikler, güvenilir ve teyit edilebilir temel İslami kaynaklara dayanmak zorundadır. Kulaktan dolma bilgiler, kaynağı belirsiz rivayetler veya zayıf tarihi anlatılar, editör onayından geçemez."
    },
    {
      id: "kuran-referans",
      title: "Kur'an Referans Standardı",
      icon: <BookOpen className="w-6 h-6 text-antique-gold" />,
      content: "Kur'an-ı Kerim ayetlerine yapılan atıflarda mutlaka Sûre Adı ve Ayet Numarası (Örn: Bakara, 2/255) açıkça belirtilmelidir. Meallerde, Ehl-i Beyt mektebinin muteber tefsirleri (El-Mizan vb.) esas alınır ve bağlam dışı yorumlardan kaçınılır."
    },
    {
      id: "hadis-standardi",
      title: "Hadis Kaynaklandırma Standardı",
      icon: <ScrollText className="w-6 h-6 text-antique-gold" />,
      content: "Hadis ve rivayetler aktarılırken Kütüb-i Erbaa (El-Kâfi, Men Lâ Yahduruhu'l-Fakih, Tehzib, İstibsar) başta olmak üzere muteber hadis külliyatına eksiksiz atıf yapılır. Sened zinciri (ricâlü'l-hadis) açısından zayıf veya mevzu (uydurma) olma ihtimali taşıyan rivayetler akademik süzgeçten geçirilir."
    },
    {
      id: "ceviri-politikasi",
      title: "Arapça ve Farsça Çeviri Politikası",
      icon: <Globe className="w-6 h-6 text-antique-gold" />,
      content: "Orijinal metinlerin (Arapça ve Farsça) Türkçe'ye aktarımında, kelime kelime çeviriden ziyade anlam (semantik) çevirisi tercih edilir. İslami ıstılahlar (kavramlar) orijinal haliyle bırakılıp, parantez içi veya dipnot ile açıklanır."
    },
    {
      id: "akademik-kaynak",
      title: "Akademik Kaynak Kullanımı",
      icon: <GraduationCap className="w-6 h-6 text-antique-gold" />,
      content: "Makalelerimizde ve araştırma dosyalarımızda, üniversite ve havza (İslami ilimler akademisi) düzeyinde kabul gören makale, tez ve eserlere atıf yapılır. Popülist yaklaşımlar yerine analitik ve ilmi derinlik gözetilir."
    },
    {
      id: "ihtilafli-rivayetler",
      title: "İhtilaflı Rivayetlerin Belirtilmesi",
      icon: <Scale className="w-6 h-6 text-antique-gold" />,
      content: "Tarihi ve fıkhî konularda ulema arasında ihtilaf bulunan rivayetler, tarafsız bir dille ve tüm boyutlarıyla (farklı görüşler) okuyucuya sunulur. Metinlerde mezhepsel taassup yerine hakikati arama ilkesi hakimdir."
    },
    {
      id: "yazar-sorumlulugu",
      title: "Yazar ve Editör Sorumluluğu",
      icon: <Users className="w-6 h-6 text-antique-gold" />,
      content: "Yazarlar, ürettikleri içeriğin ilmi doğruluğundan bizzat sorumludur. Editör kurulu ise, metnin KaimAlSakaleyn yayın ilkelerine, dil bilgisi kurallarına ve platformun vizyonuna uygunluğunu denetler."
    },
    {
      id: "tashih-politikasi",
      title: "Tashih ve Düzeltme Politikası",
      icon: <PenTool className="w-6 h-6 text-antique-gold" />,
      content: "Yayınlanan bir metinde okuyucular veya araştırmacılar tarafından tespit edilen maddi/ilmi hatalar, editör kurulu tarafından 24 saat içinde incelenir. Gerekli görüldüğünde şeffaf bir şekilde metin güncellenir ve sayfa altına 'Güncelleme Notu' eklenir."
    }
  ];

  return (
    <div className="pt-24 pb-section-lg bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 border-b border-gold-border/20 bg-card-bg/30">
        <div className="absolute inset-0 bg-gradient-to-b from-antique-gold/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs text-secondary-text mb-8 font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-antique-gold transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-text">Editoryal İlkeler</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label mb-6 inline-block">Yayın Politikamız</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-text mb-6">
              Editoryal İlkeler ve Güvenilirlik
            </h1>
            <p className="text-lg md:text-xl text-secondary-text/90 font-light leading-relaxed max-w-2xl mx-auto">
              KaimAlSakaleyn, ilmi ciddiyet, akademik dürüstlük ve Ehl-i Beyt mektebinin saf hakikatini okuyucuya en doğru şekilde ulaştırmayı temel gaye edinmiştir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl border border-gold-border/10 bg-card-bg/10 hover:bg-card-bg/30 hover:border-antique-gold/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 shrink-0 rounded-full bg-antique-gold/10 flex items-center justify-center border border-antique-gold/20 group-hover:scale-110 transition-transform duration-500">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary-text mb-3 group-hover:text-antique-gold transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed font-light">
                    {principle.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust CTA */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto bg-card-bg/40 border border-gold-border/30 rounded-3xl p-10 md:p-16 text-center">
          <ShieldCheck className="w-12 h-12 text-antique-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl text-primary-text mb-4">Hata Bildirimi ve Geri Bildirim</h2>
          <p className="text-secondary-text mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Ne kadar titiz davransak da, ilmi metinlerde gözden kaçan maddi hatalar olabilir. Tespit ettiğiniz hataları bize bildirerek hakikatin kusursuz bir şekilde aktarılmasına katkıda bulunabilirsiniz.
          </p>
          <Link href="/iletisim">
            <button className="px-8 py-3 bg-antique-gold text-background rounded font-medium hover:bg-antique-gold/90 transition-colors inline-flex items-center gap-2">
              İletişime Geç <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
