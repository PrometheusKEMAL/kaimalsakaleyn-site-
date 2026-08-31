import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "KaimAlSakaleyn kullanım şartları",
};

export default function KullanimSartlariPage() {
  return (
    <div className="pt-24 pb-section-lg">
      <section className="py-section px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label">Hukuki</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-8">
            Kullanım Şartları
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-secondary-text space-y-6">
            <p>
              KaimAlSakaleyn platformuna erişerek ve platformu kullanarak bu
              kullanım şartlarını kabul etmiş sayılırsınız. Lütfen platformu
              kullanmadan önce bu şartları dikkatlice okuyunuz.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              İçerik Kullanımı
            </h2>
            <p>
              Platformda yer alan tüm içerikler (yazılar, grafikler, logolar, vb.)
              KaimAlSakaleyn&apos;e aittir veya lisanslı olarak kullanılmaktadır.
              Bu içerikler, izinsiz kopyalanamaz, çoğaltılamaz veya ticari amaçla
              kullanılamaz. Eğitim ve araştırma amacıyla, kaynak gösterilerek
              makul ölçüde alıntı yapılabilir.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Kullanıcı Davranışları
            </h2>
            <p>
              Platformu kullanan üyeler; şiddeti teşvik eden, nefret söylemi
              içeren, ayrımcı, yasa dışı veya platformun ilkelerine aykırı
              içerikler paylaşamaz ve bu yönde davranışlarda bulunamaz. KaimAlSakaleyn,
              bu tür davranışlarda bulunan kullanıcıların üyeliklerini askıya alma
              veya iptal etme hakkını saklı tutar.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Hesap Güvenliği
            </h2>
            <p>
              Davetli üyeler, hesap bilgilerinin ve şifrelerinin gizliliğinden
              kendileri sorumludur. Hesabınız üzerinden yapılan tüm işlemlerden
              sizin sorumlu olduğunuzu kabul edersiniz.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Değişiklikler
            </h2>
            <p>
              KaimAlSakaleyn, bu kullanım şartlarını önceden haber vermeksizin
              değiştirme hakkını saklı tutar. Değişiklikler platformda yayınlandığı
              andan itibaren geçerli olur.
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
