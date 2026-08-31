import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "KaimAlSakaleyn gizlilik politikası",
};

export default function GizlilikPage() {
  return (
    <div className="pt-24 pb-section-lg">
      <section className="py-section px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label">Hukuki</span>
          <h1 className="font-serif text-display-lg text-primary-text mb-8">
            Gizlilik Politikası
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-secondary-text space-y-6">
            <p>
              KaimAlSakaleyn olarak kişisel verilerinizin korunmasına büyük
              önem veriyoruz. Bu gizlilik politikası, platformumuzu
              kullanırken toplanan, işlenen ve saklanan kişisel veriler
              hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Toplanan Veriler
            </h2>
            <p>
              Platformumuza üye olduğunuzda ad, soyad ve e-posta adresi gibi
              temel bilgiler toplanır. İletişim formu aracılığıyla
              gönderdiğiniz mesajlar da kayıt altına alınır.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Verilerin Kullanımı
            </h2>
            <p>
              Toplanan veriler yalnızca platform hizmetlerinin sunulması,
              iletişimin sağlanması ve kullanıcı deneyiminin iyileştirilmesi
              amacıyla kullanılır. Verileriniz üçüncü taraflarla
              paylaşılmaz.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              Veri Güvenliği
            </h2>
            <p>
              Kişisel verileriniz endüstri standardı güvenlik önlemleriyle
              korunmaktadır. Veritabanı erişimi yetkilendirilmiş
              personelle sınırlıdır.
            </p>
            <h2 className="font-serif text-primary-text text-lg">
              İletişim
            </h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için iletişim
              sayfamızı kullanabilirsiniz.
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
