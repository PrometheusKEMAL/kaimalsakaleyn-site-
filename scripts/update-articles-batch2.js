const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../lib/mock-data/index.ts');
let content = fs.readFileSync(indexPath, 'utf-8');

// Book 6: Ehl-i Beyt'in Doğuşu
content = content.replace(
  /slug:\s*"ehl-i-beytin-dogusu"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?toc:\s*\[[\s\S]*?\]/,
  `slug: "ehl-i-beytin-dogusu",
    "originalTitle": "Ehl-i Beyt'in Doğuşu (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 347,
    "isbn": "978-605-8152-94",
    "summary": "Ayetullah Cafer Sübhani'nin kaleme aldığı bu değerli eser, İslam'ın ilk yıllarından itibaren Ehl-i Beyt mektebinin nasıl şekillendiğini tarihi, teolojik ve sosyolojik boyutlarıyla ele almaktadır. Müellif, Ehl-i Beyt taraftarlığının (Şiiliğin) sonradan ortaya çıkmış siyasi bir fırka olmadığını; bizzat Hz. Peygamber'in (s.a.a) hayatında, Gadir-i Hum'da ve Kur'an ayetlerinin tefsirinde temellerinin atıldığını sağlam delillerle ispatlamaktadır. Eser, ilk dönem İslam tarihini Sünni ve Şii kaynakların ortak verileri ışığında tarafsız ve akademik bir yöntemle incelemektedir.",
    "toc": [
      "Önsöz: Tarih Yazıcılığı ve Objektiflik",
      "Birinci Bölüm: Şia Kelimesinin Lügat ve Istılah Anlamı",
      "İkinci Bölüm: Hz. Peygamber (s.a.a) Döneminde Ali Şiası",
      "Üçüncü Bölüm: Sakife Vakıası ve İlk Ayrılıkların Kökeni",
      "Dördüncü Bölüm: İmam Ali'nin (a.s) Sükutu ve Vahdet Anlayışı",
      "Sonuç: İtret'in İslam Ümmetindeki Koruyucu Rolü"
    ]`
);

// Book 7: İmamet ve Liderlik
content = content.replace(
  /slug:\s*"imamet-ve-liderlik"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?toc:\s*\[[\s\S]*?\]/,
  `slug: "imamet-ve-liderlik",
    "originalTitle": "İmamet ve Liderlik (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 290,
    "isbn": "978-605-6921-83",
    "summary": "Çağdaş İslam düşünürü Şehit Murtaza Mutahhari'nin temel eserlerinden biri olan İmamet ve Liderlik, imamet inancını yalnızca siyasi bir iktidar meselesi olarak değil, ontolojik, felsefi ve irfani bir zorunluluk olarak açıklar. Mutahhari, peygamberliğin bitişinden sonra ilahi hidayetin kesilmesinin imkansızlığını rasyonel (akli) argümanlarla ortaya koyarken, Kur'an ayetleri ve nebevi hadisler üzerinden imametin dini mercilik, siyasi liderlik ve velayet-i tekviniye (kozmik rehberlik) olmak üzere üç ayrı boyutunu derinlemesine analiz eder.",
    "toc": [
      "Önsöz: İmamet Meselesinin Kelamdaki Yeri",
      "Birinci Bölüm: İmamet'in Anlamı ve Mertebeleri",
      "İkinci Bölüm: Kur'an'da İmamet (İbrahim'in İmtihanı)",
      "Üçüncü Bölüm: Sünni ve Şii Ekollerde İmamet Tasavvuru",
      "Dördüncü Bölüm: Masumiyetin Felsefi Temelleri",
      "Sonuç: İmamet ve Modern Çağda Liderlik İhtiyacı"
    ]`
);

// Book 8: Mehdeviyet İnancı
content = content.replace(
  /slug:\s*"mehdeviyet-inanci"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?toc:\s*\[[\s\S]*?\]/,
  `slug: "mehdeviyet-inanci",
    "originalTitle": "Mehdeviyet İnancı (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 252,
    "isbn": "978-605-5070-80",
    "summary": "Ayetullah İbrahim Emini'nin 'Adalet Güneşi' olarak da bilinen bu çalışması, İmam Mehdi (a.f) inancını akli, nakli ve felsefi şüpheler üzerinden rasyonel bir yaklaşımla ele alan başucu niteliğinde bir eserdir. Eserde; uzun ömürlülük problemi, gaybetin (gizliliğin) felsefesi, İmam Mehdi'nin zuhur alametleri ve zuhur sonrası kurulacak küresel adalet devleti gibi konular ayrıntılı olarak tartışılır. Müellif, intizar (bekleyiş) kavramını pasif bir süreç olmaktan çıkarıp, bireyin ve toplumun ahlaki ve siyasi anlamda kendini hazırladığı aktif bir direniş hali olarak tanımlamaktadır.",
    "toc": [
      "Önsöz: İnsanlığın Kurtarıcı Beklentisi",
      "Birinci Bölüm: Tarihi ve Hadislerle İmam Mehdi",
      "İkinci Bölüm: Gaybet-i Suğra ve Gaybet-i Kübra Dönemleri",
      "Üçüncü Bölüm: Rasyonel İtirazlar (Uzun Ömür Meselesi)",
      "Dördüncü Bölüm: Gerçek İntizarın Anlamı ve Bekleyenlerin Sorumlulukları",
      "Sonuç: Adalet Devletinin Kurulması"
    ]`
);

// Book 9: Aşura Kıyamı
content = content.replace(
  /slug:\s*"asura-kiyami"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?toc:\s*\[[\s\S]*?\]/,
  `slug: "asura-kiyami",
    "originalTitle": "Aşura Kıyamı (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 593,
    "isbn": "978-605-6885-72",
    "summary": "Şehit Murtaza Mutahhari'nin 'Hamase-i Hüseyni' adıyla bilinen bu anıtsal eseri, Kerbela olayını sıradan bir tarihi trajedi veya sadece gözyaşı dökülecek bir musibet olmaktan çıkarıp, sosyolojik bir ıslahat hareketi ve destansı (hamasi) bir direniş olarak inceler. Kitap, Aşura kıyamının hedeflerini İmam Hüseyin'in (a.s) kendi sözleri üzerinden tahlil ederken, Emevi zihniyetinin İslam'ı nasıl yozlaştırdığını da gözler önüne serer. Eserde ayrıca Aşura merasimlerine karışmış olan hurafeler ve tahrifatlar da cesurca eleştirilerek, Hüseyni mektebin asıl felsefesi ortaya konmaktadır.",
    "toc": [
      "Önsöz: Trajedi mi, Destan mı?",
      "Birinci Bölüm: Aşura'nın Tahrif Edilmesi ve Tehlikeleri",
      "İkinci Bölüm: Kıyamın Ana Nedeni: Emr-i bi'l Maruf",
      "Üçüncü Bölüm: İmam Hüseyin'in (a.s) Şahsiyetindeki Hamaset",
      "Dördüncü Bölüm: Kerbela Kadınlarının ve Zeyneb'in (s.a) Rolü",
      "Sonuç: Aşura'nın Evrensel ve Kalıcı Mesajı"
    ]`
);

// Book 10: İslam Tarihi
content = content.replace(
  /slug:\s*"islam-tarihi"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?toc:\s*\[[\s\S]*?\]/,
  `slug: "islam-tarihi",
    "originalTitle": "İslam Tarihi (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 557,
    "isbn": "978-605-8513-23",
    "summary": "Tarihçi Resul Caferiyan tarafından kaleme alınan bu eser, İslam'ın doğuşundan Emevilerin yıkılışına kadar olan süreci, salt olaylar zinciri olarak değil, sosyo-politik bir perspektifle inceleyen akademik bir kaynaktır. Siyer-i Nebi (Hz. Muhammed'in hayatı), Raşid Halifeler dönemi ve İmam Ali'nin (a.s) hilafet yılları, Şiî tarih felsefesi ışığında, sağlam kaynaklara dayandırılarak tahlil edilmektedir. Eser, ilk dönem fitnelerinin, kabilecilik reflekslerinin (asabiyet) ve güç mücadelelerinin İslam toplumunu nasıl etkilediğini nesnel bir yaklaşımla okuyucuya sunar.",
    "toc": [
      "Önsöz: Tarih Metodolojisi ve Kaynakların Eleştirisi",
      "Birinci Bölüm: Cahiliye Toplumundan Medine İslam Devletine",
      "İkinci Bölüm: Hz. Peygamber'in (s.a.a) Siyasi ve Askeri Stratejileri",
      "Üçüncü Bölüm: Sakife'den Osman'ın Katline Siyasi Çalkantılar",
      "Dördüncü Bölüm: İmam Ali'nin (a.s) Adalet Devleti ve İç Savaşlar",
      "Sonuç: Emevi Hanedanlığının Doğuşu ve İslami Değerlerin Aşınması"
    ]`
);


// Replace Article 2: İrfani Açıdan Dua
const article2 = 'slug: "irfani-acidan-dua",\n' +
    '    title: "İrfani Açıdan Dua",\n' +
    '    subtitle: "Sahife-i Seccadiye\'nin Derinliklerinde",\n' +
    '    summary: "Sahife-i Seccadiye ekseninde kulun Rabbiyle olan dikey iletişiminin boyutları, duanın yalnızca istekte bulunmak değil, bir manevi inşa aracı olması.",\n' +
    '    content: `\n' +
    '# İrfani Açıdan Dua ve Sahife-i Seccadiye\n\n' +
    'Dua, İslam irfanında kulun Yaratıcısı ile kurduğu en saf, en aracısız ve en dikey iletişimdir. Kur\'an-ı Kerim\'de "Duanız olmasa Rabbim size ne diye değer versin?" (Furkan, 77) buyrularak insanın varoluşsal değerinin duaya bağlandığı görülür. Ancak Ehl-i Beyt mektebinde dua, sadece ihtiyaç anlarında Allah\'tan bir şeyler istemek (niyaz) değil, aynı zamanda kulun kendini inşa etme sürecidir.\n\n' +
    '## Duanın Hakikati\n\n' +
    'İmam Zeynelabidin\'in (a.s) eşsiz eseri Sahife-i Seccadiye, duanın bu dönüştürücü gücünü en iyi yansıtan metindir. İmam Seccad (a.s), Kerbela katliamından sonra toplumun içine düştüğü derin ahlaki çöküntüyü "dua" silahıyla tedavi etmeye çalışmıştır. Onun duaları bir yandan insanın zaaflarını ve günahkarlığını yüzüne vururken, diğer yandan Allah\'ın sonsuz rahmet okyanusuna işaret ederek ümit aşılar.\n\n' +
    '## Mekarimü\'l-Ahlak (Ahlaki Erdemler)\n\n' +
    'Sahife-i Seccadiye\'nin 20. duası olan Mekarimü\'l-Ahlak, irfanın pratik hayattaki tezahürüdür. İmam bu duada şöyle niyaz eder: \n' +
    '> "Allah\'ım! Muhammed ve Âline salat eyle ve imanımı imanın en kâmil derecesine, yakinimi yakinin en üstün mertebesine, niyetimi niyetlerin en iyisine ulaştır."\n\n' +
    'Bu dua göstermektedir ki gerçek irfan; dağlara çekilip inzivaya varmak değil, toplum içinde yaşarken nefsi kötülüklerden arındırmak, haset yerine muhabbeti, kin yerine affediciliği koyabilmektir.\n\n' +
    'Özetle, İmam Seccad\'ın (a.s) dilinden dökülen dualar, kulun kendi acziyetini bilip ilahi kudrette fani olma (fena fillah) serüveninin yol haritasıdır.\n' +
    '`,';
content = content.replace(/slug:\s*"irfani-acidan-dua"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?(?:content:\s*`[\s\S]*?`,)?/, article2);

// Replace Article 5: Gaibet Kavramı
const article5 = 'slug: "gaibet-kavraminin-sii-dusuncesindeki-yeri",\n' +
    '    title: "Gaibet Kavramının Şii Düşüncesindeki Yeri",\n' +
    '    subtitle: "Zamanın İmamı ve İntizar Felsefesi",\n' +
    '    summary: "İmam Mehdi\'yi (a.f.) beklemenin (intizar) pasif bir duruş değil, aktif bir hazırlık ve toplumsal inşa süreci olması üzerine kapsamlı bir teolojik tahlil.",\n' +
    '    content: `\n' +
    '# Gaibet (Gizlilik) ve İntizar (Bekleyiş) Felsefesi\n\n' +
    'Şiî inancının en temel yapı taşlarından biri, on ikinci İmam, Muhammed el-Mehdi\'nin (a.f) hayatta olması, ancak ilahi bir hikmet gereği gözlerden gizli (gaip) bulunmasıdır. Gaibet kavramı, dışarıdan bakıldığında bir boşluk veya mahrumiyet gibi algılansa da, Şiî irfan ve sosyolojisinde muazzam bir dinamizmin ve devrimci ruhun kaynağıdır.\n\n' +
    '## İki Gaybet Dönemi\n\n' +
    'İmam Mehdi\'nin hayatında iki gaybet dönemi yaşanmıştır:\n' +
    '1. **Gaybet-i Suğra (Küçük Gizlilik):** Yaklaşık 69 yıl süren bu dönemde İmam, dört özel naibi (elçisi) aracılığıyla ümmetle irtibat kurmuş ve toplumu tam bir gizlilik sürecine hazırlamıştır.\n' +
    '2. **Gaybet-i Kübra (Büyük Gizlilik):** 329 (hicri) yılında dördüncü naibin vefatıyla başlamış ve halen devam eden dönemdir. Bu dönemde özel naiplik kalkmış, sorumluluk "Adil Fakih"lere (müçtehitlere) bırakılmıştır.\n\n' +
    '## Bulutların Arkasındaki Güneş\n\n' +
    'Meşhur bir hadiste İmam\'ın gaybet dönemindeki faydası, **"Bulutların arkasında kalan güneşin dünyaya faydasına"** benzetilmiştir. Bulutlar güneşin doğrudan görülmesini engellese de, ısısını, ışığını ve yerçekimi etkisini yok edemez. Benzer şekilde, İmam (a.f) da yeryüzünün ontolojik direği olarak ilahi feyzin kullara ulaşmasını sağlar.\n\n' +
    '## İntizar: Aktif Bir Eylem\n\n' +
    'Modern çağda "beklemek" genellikle eylemsizlik olarak algılanır. Ancak "En hayırlı amel ferci (kurtuluşu) beklemektir" hadisindeki **İntizar**, adaletin ve hakkın yeryüzüne hakim olması için bireyin önce kendini, sonra çevresini ıslah etmesi demektir. Silahını kuşanmış bir askerin komutanını beklemesi ile uyuyan birinin beklemesi bir tutulamaz. Gerçek bir muntazır (bekleyen), zalimlerle mücadele eden ve İmam\'ın zuhuru için zemin hazırlayan aktif bir mümindir.\n' +
    '`,';
content = content.replace(/slug:\s*"gaibet-kavraminin-sii-dusuncesindeki-yeri"[\s\S]*?summary:\s*"[^"]*"[\s\S]*?(?:content:\s*`[\s\S]*?`,)?/, article5);


fs.writeFileSync(indexPath, content);
console.log("Mock data Batch 2 updated successfully.");
