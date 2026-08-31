import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "KaimAlSakaleyn çerez politikası",
};

export default function CerezPolitikasiPage() {
  return (
    <div className="pt-24 pb-section-lg">
      <section className="py-section px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label">Hukuki</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-8">
            Çerez Politikası
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-secondary-text space-y-6">
            <p>
              KaimAlSakaleyn platformu olarak, web sitemizden en verimli şekilde
              faydalanabilmeniz ve kullanıcı deneyiminizi geliştirebilmek için
              çerez (cookie) kullanıyoruz.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Çerez Nedir?
            </h2>
            <p>
              Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız
              aracılığıyla cihazınıza (bilgisayar, telefon, tablet vb.)
              kaydedilen küçük metin dosyalarıdır.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Hangi Çerezleri Kullanıyoruz?
            </h2>
            <p>
              Platformumuzda yalnızca sitenin düzgün çalışması ve temel
              işlevlerin (örneğin; güvenli üye girişi) yerine getirilmesi için
              gerekli olan <strong>Zorunlu Çerezler</strong> kullanılmaktadır.
              Kullanıcılarımızı izlemek veya profil oluşturmak amacıyla üçüncü
              taraf reklam veya takip çerezleri kullanılmaz.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Çerezleri Nasıl Yönetebilirsiniz?
            </h2>
            <p>
              Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin
              tercihlerinizi kişiselleştirebilirsiniz. Çerezleri tamamen
              engelleyebilir veya belirli siteler için sınırlayabilirsiniz.
              Ancak zorunlu çerezleri engellemeniz durumunda platformun üyelik
              gibi bazı işlevleri düzgün çalışmayabilir.
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
