import React from "react";
import { ShieldCheck, BookOpen, Scale, Search, Users, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Yayın İlkeleri | KaimAlSakaleyn",
  description: "KaimAlSakaleyn dijital araştırma platformunun akademik, editoryal ve itikadi yayın ilkeleri.",
};

export default function YayinIlkeleriPage() {
  const principles = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Akademik Titizlik ve Doğruluk",
      description: "Platformumuzda yayımlanan her türlü metin, makale ve ansiklopedik bilgi, alanında uzman araştırmacılar veya güvenilir temel kaynaklar (Kütüb-i Erbaa vb.) referans alınarak oluşturulur. Tahkiksiz ve kaynaksız bilgilere yer verilmez."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Ehl-i Beyt Mektebine Sadakat",
      description: "Tüm içeriklerimiz, Şiî-İmamiye inanç esasları, fıkhı ve kelamı çerçevesinde şekillenir. Kur'an-ı Kerim ve Ehl-i Beyt'in (a.s) sahih hadisleri en temel başvuru kaynağımızdır."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Telif Haklarına Saygı",
      description: "Kütüphanemizde yer alan eserler, yalnızca telif hakkı süresi dolmuş (kamu malı statüsüne geçmiş), yazarı/yayınevi tarafından ücretsiz dağıtımına izin verilmiş veya platformumuz için özel olarak izin alınmış eserlerden oluşmaktadır. Ticari amaç güdülmez."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Şeffaflık ve Kaynak Gösterme",
      description: "Yayımlanan her hadis ve rivayetin cilt, sayfa ve baskı bilgileriyle birlikte tam kaynağı belirtilir. Ansiklopedi maddelerinin sonunda mutlaka bir kaynakça (bibliyografya) bölümü bulunur."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Vahdet ve Karşılıklı Saygı",
      description: "Farklı İslami mezheplere ve inançlara karşı bilimsel, akademik ve saygılı bir dil benimsenir. İhtilaflı konular, provokasyondan uzak, tamamen ilmi deliller ışığında ele alınır."
    },
  ];

  return (
    <div className="pt-24 pb-32 bg-background min-h-screen">
      
      {/* Header */}
      <section className="py-16 px-6 text-center border-b border-gold-border/10 bg-background-secondary/50">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-6">Kurumsal</span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-text mb-6">
            Yayın İlkeleri
          </h1>
          <p className="text-secondary-text text-lg leading-relaxed max-w-2xl mx-auto font-light text-balance">
            KaimAlSakaleyn platformunun içerik üretim, derleme ve neşir süreçlerindeki temel 
            akademik ve itikadi prensipleri.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        
        <div className="prose prose-invert max-w-none mb-16 prose-p:text-secondary-text prose-p:leading-relaxed prose-p:font-light">
          <p className="text-xl">
            KaimAlSakaleyn, dijital alemde dağınık halde bulunan sahih İslami bilgiyi, 
            Ehl-i Beyt (a.s) öğretileri ekseninde derlemeyi ve araştırmacıların istifadesine 
            sunmayı hedefleyen akademik bir projedir. Bu büyük sorumluluğun bilincinde olarak, 
            yayın süreçlerimizde aşağıdaki temel ilkelere sıkı sıkıya bağlıyız.
          </p>
        </div>

        <div className="space-y-12">
          {principles.map((principle, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 p-8 border border-gold-border/20 rounded-md bg-card-bg relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-antique-gold/20 group-hover:bg-antique-gold/60 transition-colors" />
              <div className="w-12 h-12 rounded-sm bg-background-secondary border border-gold-border/30 flex items-center justify-center shrink-0 text-antique-gold">
                {principle.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-primary-text mb-3">
                  {principle.title}
                </h3>
                <p className="text-secondary-text leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-16 p-6 md:p-8 bg-primary-emerald/10 border border-primary-emerald/20 rounded-md flex gap-4 items-start">
          <ShieldAlert className="w-6 h-6 text-primary-emerald shrink-0 mt-1" />
          <div>
            <h4 className="font-serif text-xl text-primary-emerald mb-2">Hata Bildirimi ve Düzeltme Politikası</h4>
            <p className="text-secondary-text/90 text-sm leading-relaxed">
              İnsani bir çabanın ürünü olan bu platformda, gösterilen tüm titizliğe rağmen dizgi, tercüme veya 
              kaynak hataları bulunabilir. Kullanıcılarımızdan gelen hata bildirimleri, editoryal kurulumuz 
              tarafından derhal incelenir ve asıl kaynaklarla teyit edildikten sonra şeffaf bir şekilde düzeltilir. 
              Hata bildirimleriniz için <a href="/iletisim" className="text-antique-gold hover:underline">iletişim sayfamızı</a> kullanabilirsiniz.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
