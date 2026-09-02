import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ShieldCheck, BookOpen, Scale, ScrollText } from "lucide-react";

export const metadata: Metadata = {
  title: "Akademik Standartlar | Sekaleyn",
  description: "KaimAlSakaleyn İlim Merkezi'nin araştırma, çeviri ve tahkik süreçlerindeki editoryal ve akademik standartları.",
};

export default function AcademicStandardsPage() {
  return (
    <div className="pt-24 pb-section-lg bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        <header className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Akademik Standartlar ve Editoryal Süreçler
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto text-balance">
            KaimAlSakaleyn, salt bir içerik platformu değil, Ehl-i Beyt mektebinin ilmi mirasını modern akademik normlarla dijitale taşıyan bir araştırma enstitüsüdür.
          </p>
        </header>

        <div className="space-y-16">
          
          <section>
            <h2 className="font-serif text-2xl text-primary mb-6 flex items-center gap-3">
              <Scale className="w-6 h-6" />
              1. Tahkik ve İsnad (Verification & Attribution)
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
              <p>
                Platformumuzda yer alan her bilgi kırıntısı (hadis, tarihi olay, felsefi görüş) mutlaka asıl kaynağına dayandırılmak zorundadır. Kulaktan dolma bilgilere ve zayıf anlatılara, akademik değer taşımadıkça yer verilmez.
              </p>
              <ul>
                <li><strong>Rivayetlerin Tahkiki:</strong> Tüm hadis metinleri, cerh ve ta'dil kaideleri göz önünde bulundurularak orijinal Arapça/Farsça metinleriyle birlikte sunulur. Rivayetin sened zinciri ve güvenilirlik derecesi okuyucuya şeffaf bir şekilde aktarılır.</li>
                <li><strong>Tarihsel Çok Seslilik:</strong> Tartışmalı tarihi konularda tek bir mutlak doğru dayatmak yerine, Şiî ve Sünni ekollerin temel kaynaklarındaki farklı rivayetler objektif bir dille karşılaştırmalı olarak sunulur.</li>
                <li><strong>Görünür Kaynakça:</strong> Tüm makaleler ve kavram analizleri interaktif dipnotlar ve kapsamlı bir bibliyografya ile desteklenir.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6" />
              2. Editoryal İnceleme Süreci (Peer Review)
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
              <p>
                Ansiklopedi maddeleri, makaleler ve kitap çevirileri yayınlanmadan önce çok aşamalı bir editoryal süreçten geçer. Bir içeriğin kalitesi, yazarının yetkinliği kadar, geçtiği denetim mekanizmalarının sağlamlığıyla da ölçülür.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <ol className="space-y-4 m-0 list-decimal list-inside">
                  <li><strong>Taslak (Draft):</strong> Yazar veya araştırmacı tarafından oluşturulan ilk metin.</li>
                  <li><strong>Kaynak Kontrolü (Source Review):</strong> Araştırma görevlileri tarafından metindeki tüm atıfların doğruluğunun ve sened zincirlerinin orijinal metinlerle karşılaştırılması.</li>
                  <li><strong>Editör Onayı (Editor Review):</strong> Kıdemli editörler tarafından dil, anlatım, akademik üslup ve platform yayın ilkelerine uygunluk denetimi.</li>
                  <li><strong>Yayın (Published):</strong> İçeriğin kamuya açık hale gelmesi. Her makalenin sonunda bu sürecin şeffaf bir Sürüm Geçmişi (Version History) tablosu yer alır.</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-6 flex items-center gap-3">
              <ScrollText className="w-6 h-6" />
              3. Telif Hakları ve Açık Erişim (Open Access)
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
              <p>
                İlmin evrensel ve ücretsiz olması gerektiğine inanıyoruz. KaimAlSakaleyn bünyesinde üretilen tüm özgün içerikler (makaleler, ansiklopedi maddeleri, orijinal çeviriler) <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="text-primary hover:underline">Creative Commons (CC BY-NC-SA 4.0)</a> lisansı ile korunmaktadır.
              </p>
              <ul>
                <li><strong>Kullanım Şartları:</strong> Ticari olmamak, kaynak (URL) göstermek ve aynı lisansla paylaşmak şartıyla tüm içeriklerimizi kopyalayabilir, dağıtabilir ve uyarlayabilirsiniz.</li>
                <li><strong>Harici Kitaplar:</strong> Kütüphanemizde listelenen diğer yayınevlerine ait eserlerin telif hakları ilgili kurumlara aittir. Bu eserler yalnızca "adil kullanım" (fair use) çerçevesinde tanıtım amaçlı, veya yayınevinin/yazarın açık izniyle PDF olarak sunulmaktadır.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
