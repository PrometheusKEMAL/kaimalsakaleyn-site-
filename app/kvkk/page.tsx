import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "KaimAlSakaleyn KVKK aydınlatma metni",
};

export default function KVKKPage() {
  return (
    <div className="pt-24 pb-section-lg">
      <section className="py-section px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label">Hukuki</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-8">
            KVKK Aydınlatma Metni
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-secondary-text space-y-6">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
              kapsamında, KaimAlSakaleyn platformu olarak kişisel verilerinizin
              işlenmesine ilişkin sizi aydınlatmak isteriz.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Veri Sorumlusu
            </h2>
            <p>KaimAlSakaleyn platformu veri sorumlusu sıfatıyla hareket etmektedir.</p>
            <h2 className="font-serif text-primary-text text-lg">
              İşlenen Kişisel Veriler
            </h2>
            <p>
              Kimlik bilgileri (ad, soyad), iletişim bilgileri (e-posta),
              üyelik bilgileri ve platform kullanım verileri işlenmektedir.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              İşleme Amaçları
            </h2>
            <p>
              Kişisel verileriniz; üyelik işlemlerinin yürütülmesi, iletişimin
              sağlanması, platform güvenliğinin temini ve yasal yükümlülüklerin
              yerine getirilmesi amacıyla işlenmektedir.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Haklarınız
            </h2>
            <p>
              KVKK&apos;nın 11. maddesi kapsamında; kişisel verilerinizin
              işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi
              talep etme, işlenme amacını ve bunların amacına uygun kullanılıp
              kullanılmadığını öğrenme haklarına sahipsiniz.
            </p>
            <p className="text-secondary-text/50 text-xs mt-8">
              Son güncelleme: Ağustos 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
