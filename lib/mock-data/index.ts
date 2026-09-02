export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  content?: string;
  image?: string;
  author: string;
  editor: string;
  publishedAt: string;
  lastUpdated: string;
  category: string;
  readTime: string;
  tags: string[];
  bibliography: string[];
  footnotes: { id: number; text: string }[];
  relatedArticles: string[]; // slugs
  relatedBooks: number[]; // book ids
  versionHistory?: { id: string; date: string; action: string; user: string; role: string; notes?: string; status: any }[];
  editorialStatus?: "draft" | "researching" | "source_review" | "editor_review" | "approved" | "published" | "archived";
  verificationStatus?: "verified" | "partial" | "unverified";
}

export interface Book {
  id: number;
  slug: string;
  title: string;
  originalTitle?: string;
  author: string;
  translator?: string;
  verification?: string;
  publisher?: string;
  edition?: string;
  year?: number;
  language?: string;
  pageCount?: number;
  category: string;
  isbn?: string;
  summary: string;
  toc?: string[];
  copyrightStatus?: 'public_domain' | 'licensed' | 'permission_granted' | 'external_only' | 'unknown';
  cover?: string;
  verificationStatus?: 'verified' | 'partial' | 'unverified';
  editorialStatus?: 'draft' | 'researching' | 'source_review' | 'editor_review' | 'approved' | 'published' | 'archived';
}

export const mockBooks: Book[] = [
  {
    "id": 1,
    "title": "Kur'an-ı Kerim Meali",
    "author": "Komisyon",
    "category": "Kur'an",
    "language": "Türkçe",
    "year": 2020,
    "slug": "kuran-i-kerim-meali",
    "cover": "/images/books/book_quran.jpg",
    "originalTitle": "-",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 579,
    "isbn": "978-605-1922-56",
    "summary": "Kur'an-ı Kerim, insanlığa doğru yolu gösteren ilahi mesajın nihai formudur. Bu meal çalışması, Şiî tefsir geleneğinin ve Ehl-i Beyt mektebinin Kur'an'a yaklaşım metodolojisini merkeze alarak hazırlanmıştır. Ayetlerin çevirisinde sadece lafzi anlamlar değil, aynı zamanda Masum İmamlar'dan (a.s) nakledilen tefsir rivayetleri (hadisler) de göz önünde bulundurulmuştur. Tarihsel bağlam (esbab-ı nüzul) ve kelimelerin kök anlamları titizlikle incelenmiş olup, okuyucunun ilahi kelamı derinlemesine kavraması hedeflenmiştir. Bu eser, Kur'an'ın batıni ve zahiri boyutlarını Ehl-i Beyt perspektifiyle modern Türkçeye taşıyan nadide bir çalışmadır.",
    "toc": [
      "Önsöz: Ehl-i Beyt Mektebinde Kur'an Anlayışı",
      "Giriş: Çeviri Metodolojisi ve Tefsir Kuralları",
      "Birinci Bölüm: Fatiha Suresi ve Kısa Surelerin Tahlili",
      "İkinci Bölüm: Ahkam Ayetleri ve Tarihsel Bağlam",
      "Üçüncü Bölüm: Kıssalar ve İbretler",
      "Sonuç: Kur'an'ın Evrensel Mesajı ve İmamet"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 2,
    "title": "El-Mizan Fi Tefsir'il Kur'an",
    "author": "Allame Tabatabai",
    "category": "Tefsir",
    "language": "Türkçe",
    "year": 1995,
    "slug": "el-mizan-fi-tefsiril-kuran",
    "cover": "/images/books/book_nahj.jpg",
    "originalTitle": "El-Mizan Fi Tefsir'il Kur'an (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 366,
    "isbn": "978-605-4276-33",
    "summary": "El-Mizan Fi Tefsir'il Kur'an, 20. yüzyılın en büyük İslam alimlerinden biri olan Allame Seyyid Muhammed Hüseyin Tabatabai tarafından kaleme alınmış anıtsal bir tefsir külliyatıdır. Eserin en belirgin özelliği, 'Kur'an'ı Kur'an ile tefsir etme' (tefsiru'l-Kur'an bi'l-Kur'an) metodunu zirveye taşımasıdır. Allame Tabatabai, ayetleri tefsir ederken öncelikle diğer ayetlerden faydalanmış, ardından felsefi, kelami, sosyolojik ve tarihi tahlillerle konuyu zenginleştirmiştir. Eserde Ehl-i Beyt hadislerine geniş yer verilerek ayetlerin batıni manaları açığa çıkarılmıştır. Yalnızca Şiî dünyasında değil, tüm İslam aleminde büyük bir saygınlığa sahip olan El-Mizan, modern çağın fikri krizlerine Kur'ani çözümler sunan bir şaheserdir.",
    "toc": [
      "Müellif Allame Tabatabai'nin Hayatı ve Fikri Mirası",
      "El-Mizan'ın Tefsir Metodolojisi: Kur'an'ı Kur'an'la Açıklamak",
      "Felsefi ve Kelami Meselelere Yaklaşım",
      "Ayetlerin Sosyolojik ve Ahlaki Boyutları",
      "Ehl-i Beyt Rivayetlerinin Tefsirdeki Yeri"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 3,
    "title": "Usul-u Kafi",
    "author": "Şeyh Kuleyni",
    "category": "Hadis",
    "language": "Türkçe",
    "year": 2005,
    "slug": "usul-u-kafi",
    "cover": "/images/books/book_sahifa.jpg",
    "originalTitle": "Usul-u Kafi (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 100,
    "isbn": "978-605-8468-34",
    "summary": "El-Kâfi, Sikatü'l-İslam Ebu Cafer Muhammed bin Yakub el-Kuleyni (ö. 329/941) tarafından yirmi yılı aşkın bir sürede derlenen, Şiî dünyasının en temel ve en muteber dört hadis kitabından (Kütüb-i Erbaa) ilkidir. Usul, Furu ve Ravza olmak üzere üç ana bölümden oluşan bu devasa külliyat, toplamda 16 binden fazla hadis içerir. 'Usul-u Kafi' kısmı; Akıl ve Cehil, İlgi (Tevhid), Hüccet (İmamet), İman ve Küfür gibi inanç esaslarını kapsar. Kuleyni, Küçük Gaybet (Gaybet-i Suğra) döneminde yaşamanın avantajıyla hadisleri asıl kaynaklarına çok yakın bir zaman diliminde toplamıştır. Ehl-i Beyt'in saf öğretilerini günümüze ulaştıran bu eser, İslam düşünce tarihinin en mühim vesikalarından biridir.",
    "toc": [
      "Kitabu'l-Akl ve'l-Cehl (Akıl ve Bilgisizlik)",
      "Kitabu Fazli'l-İlm (İlmin Fazileti ve Alimlerin Konumu)",
      "Kitabu't-Tevhid (Allah'ın Birliği ve Sıfatları)",
      "Kitabu'l-Hücce (İmamet ve İlahi Rehberlik)",
      "Kitabu'l-İman ve'l-Küfr (İnanç ve İnkârın Esasları)",
      "Kitabu'd-Dua (Dua ve Münacatın Usulleri)"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 4,
    "title": "Nehcü'l-Belâğa",
    "author": "İmam Ali (a.s)",
    "category": "Nehcü'l-Belâğa",
    "language": "Türkçe",
    "year": 2010,
    "slug": "nehcul-belaga",
    "cover": "/images/books/book_nahj.jpg",
    "originalTitle": "Nehcü'l-Belâğa (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 559,
    "isbn": "978-605-6418-51",
    "summary": "Nehcü'l-Belâğa (Belâgat Yolu), Seyyid Razi (ö. 406/1015) tarafından İmam Ali'nin (a.s) hutbeleri, mektupları ve hikmetli sözlerinden (kısa vecizeler) derlenmiş muazzam bir edebi ve felsefi şaheserdir. Kur'an-ı Kerim ve Peygamber Efendimiz'in (s.a.a) hadislerinden sonra İslam dünyasının en etkili metinlerinden biri kabul edilir. Eserde tevhidin derin felsefi izahı, adaletin siyasi ve toplumsal yansımaları, ahlaki erdemler, dünyanın geçiciliği ve ahiret bilinci eşsiz bir belagat (söz sanatı) ile işlenir. Özellikle Malik el-Eşter'e yazılan mektup (Ahdname), evrensel bir devlet yönetimi ve insan hakları beyannamesi niteliğindedir. Eser, yalnızca edebi bir başyapıt değil, aynı zamanda Ali ibn Ebu Talib'in siyasi ve manevi vizyonunun kristalleşmiş halidir.",
    "toc": [
      "Seyyid Razi'nin Önsözü ve Derleme Metodolojisi",
      "Birinci Bölüm: Hutbeler (Tevhid, Yaratılış, Tarihi Uyarılar)",
      "Şıkşıkıyye Hutbesi ve Siyasi Bağlamı",
      "İkinci Bölüm: Mektuplar (Malik el-Eşter'e Emirname ve Valilere Öğütler)",
      "Üçüncü Bölüm: Hikmetli Sözler (Ahlaki Vecizeler)"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 5,
    "title": "Sahife-i Seccadiye",
    "author": "İmam Zeynelabidin (a.s)",
    "category": "Sahife-i Seccadiye",
    "language": "Türkçe",
    "year": 2012,
    "slug": "sahife-i-seccadiye",
    "cover": "/images/books/book_sahifa.jpg",
    "originalTitle": "Sahife-i Seccadiye (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 584,
    "isbn": "978-605-6928-40",
    "summary": "Sahife-i Seccadiye, Dördüncü İmam Ali bin Hüseyin Zeynelabidin'in (a.s) dualarını ve münacatlarını içeren, 'Al-i Muhammed'in Zeburu' (Zebur-u Al-i Muhammed) olarak bilinen kutsal bir eserdir. Kerbela trajedisinden sonra İslam ümmetinin içine düştüğü ahlaki çöküntü ve siyasi baskı ortamında, İmam Seccad (a.s) İslam'ın derin irfanını ve tevhid akidesini 'dua' formuyla insanlara aktarmıştır. İçerisinde yer alan 54 ana dua; anne-babaya saygıdan, sınır boylarındaki askerlere duaya, tövbe adabından, ahlaki erdemlerin inşasına (Mekarimü'l-Ahlak) kadar bireysel ve toplumsal hayatın her alanını kapsar. Eser, kulun Yaratıcısı ile kurabileceği en edebi, en derin ve en içten diyaloğun rehberidir.",
    "toc": [
      "İmam Seccad'ın (a.s) Hayatı ve Dönemin Sosyopolitik Yapısı",
      "Duanın Mahiyeti ve İslam İrfanındaki Yeri",
      "Mekarimü'l-Ahlak Duası (Ahlaki Erdemlerin Zirvesi)",
      "Ebeveyne, Evlatlara ve Komşulara Yönelik Dualar",
      "Tövbe, Bağışlanma ve Musibet Anlarında Okunacak Dualar"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 6,
    "title": "Ehl-i Beyt'in Doğuşu",
    "author": "Ayetullah Cafer Sübhani",
    "category": "Ehl-i Beyt",
    "language": "Türkçe",
    "year": 2018,
    "slug": "ehl-i-beytin-dogusu",
    "originalTitle": "Ehl-i Beyt'in Doğuşu (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 347,
    "isbn": "978-605-8152-94",
    "summary": "Ehl-i Beyt'in Doğuşu eseri, Ehl-i Beyt alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 7,
    "title": "İmamet ve Liderlik",
    "author": "Şehit Murtaza Mutahhari",
    "category": "İmamet",
    "language": "Türkçe",
    "year": 1988,
    "slug": "imamet-ve-liderlik",
    "originalTitle": "İmamet ve Liderlik (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 290,
    "isbn": "978-605-6921-83",
    "summary": "İmamet ve Liderlik eseri, İmamet alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 8,
    "title": "Mehdeviyet İnancı",
    "author": "Ayetullah İbrahim Emini",
    "category": "Mehdeviyet",
    "language": "Türkçe",
    "year": 2015,
    "slug": "mehdeviyet-inanci",
    "originalTitle": "Mehdeviyet İnancı (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 252,
    "isbn": "978-605-5070-80",
    "summary": "Mehdeviyet İnancı eseri, Mehdeviyet alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 9,
    "title": "Aşura Kıyamı",
    "author": "Şehit Murtaza Mutahhari",
    "category": "Kerbelâ",
    "language": "Türkçe",
    "year": 1992,
    "slug": "asura-kiyami",
    "originalTitle": "Aşura Kıyamı (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 593,
    "isbn": "978-605-6885-72",
    "summary": "Aşura Kıyamı eseri, Kerbelâ alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 10,
    "title": "İslam Tarihi",
    "author": "Resul Caferiyan",
    "category": "Tarih",
    "language": "Türkçe",
    "year": 2008,
    "slug": "islam-tarihi",
    "originalTitle": "İslam Tarihi (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 557,
    "isbn": "978-605-8513-23",
    "summary": "İslam Tarihi eseri, Tarih alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 11,
    "title": "Akaid-i İmamiye",
    "author": "Şeyh Muzaffer",
    "category": "Akaid",
    "language": "Türkçe",
    "year": 1990,
    "slug": "akaid-i-imamiye",
    "originalTitle": "Akaid-i İmamiye (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 554,
    "isbn": "978-605-9979-97",
    "summary": "Akaid-i İmamiye eseri, Akaid alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 12,
    "title": "Adab-ı Namaz",
    "author": "İmam Humeyni",
    "category": "Ahlak ve İrfan",
    "language": "Türkçe",
    "year": 1985,
    "slug": "adab-i-namaz",
    "originalTitle": "Adab-ı Namaz (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 199,
    "isbn": "978-605-7714-36",
    "summary": "Adab-ı Namaz eseri, Ahlak ve İrfan alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 13,
    "title": "Tevhid'in Sırları",
    "author": "Ayetullah Cevadi Amuli",
    "category": "Akaid",
    "language": "Türkçe",
    "year": 2003,
    "slug": "tevhidin-sirlari",
    "originalTitle": "Tevhid'in Sırları (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 479,
    "isbn": "978-605-1523-29",
    "summary": "Tevhid'in Sırları eseri, Akaid alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 14,
    "title": "Fıtrat",
    "author": "Şehit Murtaza Mutahhari",
    "category": "Ahlak ve İrfan",
    "language": "Türkçe",
    "year": 1980,
    "slug": "fitrat",
    "originalTitle": "Fıtrat (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 487,
    "isbn": "978-605-5020-94",
    "summary": "Fıtrat eseri, Ahlak ve İrfan alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 15,
    "title": "İnsan-ı Kamil",
    "author": "Şehit Murtaza Mutahhari",
    "category": "Ahlak ve İrfan",
    "language": "Türkçe",
    "year": 1982,
    "slug": "insan-i-kamil",
    "originalTitle": "İnsan-ı Kamil (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 407,
    "isbn": "978-605-6821-46",
    "summary": "İnsan-ı Kamil eseri, Ahlak ve İrfan alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 16,
    "title": "Al Mizan (Arabic)",
    "author": "Allame Tabatabai",
    "category": "Tefsir",
    "language": "Arapça",
    "year": 1970,
    "slug": "al-mizan-arabic",
    "originalTitle": "-",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 119,
    "isbn": "978-605-1828-65",
    "summary": "Al Mizan (Arabic) eseri, Tefsir alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 17,
    "title": "Bihar'ül Envar Seçkisi",
    "author": "Allame Meclisi",
    "category": "Hadis",
    "language": "Türkçe",
    "year": 2011,
    "slug": "biharul-envar-seckisi",
    "originalTitle": "Bihar'ül Envar Seçkisi (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 508,
    "isbn": "978-605-3133-80",
    "summary": "Bihar'ül Envar Seçkisi eseri, Hadis alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 18,
    "title": "Kerbela Şehitleri",
    "author": "Ayetullah Desteğib",
    "category": "Kerbelâ",
    "language": "Türkçe",
    "year": 1998,
    "slug": "kerbela-sehitleri",
    "originalTitle": "Kerbela Şehitleri (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 187,
    "isbn": "978-605-1670-26",
    "summary": "Kerbela Şehitleri eseri, Kerbelâ alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 19,
    "title": "Kur'an'da İnsan",
    "author": "Ayetullah Cevadi Amuli",
    "category": "Tefsir",
    "language": "Türkçe",
    "year": 2006,
    "slug": "kuranda-insan",
    "originalTitle": "Kur'an'da İnsan (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 510,
    "isbn": "978-605-2987-35",
    "summary": "Kur'an'da İnsan eseri, Tefsir alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 20,
    "title": "İlahi Adalet",
    "author": "Şehit Murtaza Mutahhari",
    "category": "Akaid",
    "language": "Türkçe",
    "year": 1978,
    "slug": "ilahi-adalet",
    "originalTitle": "İlahi Adalet (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 232,
    "isbn": "978-605-6223-62",
    "summary": "İlahi Adalet eseri, Akaid alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  },
  {
    "id": 21,
    "title": "Sırat-ı Müstakim",
    "author": "Ayetullah Misbah Yezdi",
    "category": "Ahlak ve İrfan",
    "language": "Türkçe",
    "year": 2009,
    "slug": "sirat-i-mustakim",
    "originalTitle": "Sırat-ı Müstakim (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 254,
    "isbn": "978-605-5367-92",
    "summary": "Sırat-ı Müstakim eseri, Ahlak ve İrfan alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "external_only",
    "verificationStatus": "verified",
    "editorialStatus": "published"
  }
];

export const mockArticles: Article[] = [
  {
    id: 1,
    slug: "hakikatin-iki-kanadi-kuran-ve-itret",
    image: "/images/articles/article_imamah.jpg",
    verificationStatus: "verified",
    editorialStatus: "published",
    title: "Hakikatin İki Kanadı: Kur'an ve İtret",
    subtitle: "Sekaleyn Hadisi Ekseninde Bir İnceleme",
    summary: "Peygamber Efendimiz'in (s.a.v.) Veda Haccı'nda bıraktığı iki emanetin, Kur'an ve Ehl-i Beyt'in ayrılmazlığının günümüzdeki anlamı üzerine tefekkür.",
    content: `
# Hakikatin İki Kanadı: Kur'an ve İtret

Peygamber Efendimiz (s.a.v.) ömrünün son demlerinde, Veda Haccı'nda ümmetine kıyamete kadar yol gösterecek iki büyük emanet bırakmıştır. Bu emanetlerin mahiyeti ve birbirleriyle olan ayrılmaz bağı, İslam düşünce tarihinin en temel konularından biridir. Bu makalede, Sekaleyn Hadisi merkeze alınarak Kur'an ve Ehl-i Beyt'in neden birbirinden ayrılamayacağı teolojik ve ontolojik boyutlarıyla incelenmektedir.

## Sekaleyn Hadisinin Kaynakları ve Mütevatir Oluşu

Hadis-i Sekaleyn, hem Şiî hem de Sünni kaynaklarda mütevatir derecesine ulaşmış, inkarı mümkün olmayan bir hakikattir. Resulullah (s.a.v) şöyle buyurmuştur: 
> "Ben size iki paha biçilmez emanet bırakıyorum: Allah'ın Kitabı ve Ehl-i Beytim (İtretim). Bunlara sarıldığınız sürece asla sapıtmazsınız." (Müslim, Fedailu's-Sahabe, 36)

Bu hadis, İslam ümmetinin yegane kurtuluş reçetesidir. İki emanetin "paha biçilmez" (Sekaleyn) olarak nitelendirilmesi, onların sıradan birer miras olmadığını, aksine hidayetin yegane kaynağı olduklarını gösterir.

## Kur'an ve Ehl-i Beyt'in Ayrılmaz Birlikteliği

Bu iki emanet sadece yan yana duran iki rehber değil, birbirini tamamlayan, biri olmadan diğerinin tam anlaşılamayacağı organik bir bütündür:
* **Kur'an:** İlahi vahyin yazılı metni, dilsiz (samit) bir rehberdir.
* **Ehl-i Beyt:** O metnin yaşayan, nefes alan, en doğru ve sapmasız tefsiri, konuşan (natık) Kur'an'dır.

Nitekim hadisin devamında *"Bu ikisi Havz-ı Kevser'de bana varıncaya kadar birbirinden ayrılmazlar"* buyrularak bu ontolojik ayrılmazlık vurgulanmıştır. Kur'an'ı Ehl-i Beyt'siz anlamaya çalışmak, metni kendi heva ve hevesine göre yorumlama tehlikesini doğururken; Ehl-i Beyt'i Kur'an'dan bağımsız düşünmek de imkansızdır.

### Günümüzdeki Yansımaları
Günümüzde Müslümanların yaşadığı en büyük kriz, bu iki kanattan birini ihmal etmekten veya ikisini birbirinden ayırmaktan kaynaklanmaktadır. Yalnızca Kur'an diyenler vahyin pratik ve masum tefsirinden mahrum kalırken, sadece İtret diyenler vahyin evrensel metninden uzaklaşma riski taşır. Hakikat kuşu ancak bu iki kanatla uçabilir.
`,
    author: "Ahmet Yılmaz",
    editor: "Kemal Demir",
    publishedAt: "15 Mart 2024",
    lastUpdated: "20 Mart 2024",
    category: "Kur'an",
    readTime: "8 dk",
    tags: ["Tefsir", "Hadis", "Ehl-i Beyt", "Sekaleyn"],
    bibliography: [
      "Tabatabai, M. H. (1995). El-Mizan Fi Tefsir'il Kur'an. Kevser Yayınları.",
      "Mutahhari, M. (1988). İmamet ve Liderlik. İnsan Yayınları."
    ],
    footnotes: [
      { id: 1, text: "Sekaleyn kelimesi, 'sakal' (ağır ve değerli şey) kelimesinin tesniyesidir." },
      { id: 2, text: "Müslim, Fedailu's-Sahabe, 36." }
    ],
    relatedArticles: ["modern-dunyada-imamet"],
    relatedBooks: [2, 7]
  },
  {
    id: 2,
    slug: "irfani-acidan-dua",
    image: "/images/articles/article_hadith.jpg",
    verificationStatus: "verified",
    editorialStatus: "published",
    title: "İrfani Açıdan Dua",
    subtitle: "Sahife-i Seccadiye'nin Derinliklerinde",
    summary: "Sahife-i Seccadiye ekseninde kulun Rabbiyle olan dikey iletişiminin boyutları, duanın yalnızca istekte bulunmak değil, bir manevi inşa aracı olması.",
    content: `
# İrfani Açıdan Dua ve Sahife-i Seccadiye

Dua, İslam irfanında kulun Yaratıcısı ile kurduğu en saf, en aracısız ve en dikey iletişimdir. Kur'an-ı Kerim'de "Duanız olmasa Rabbim size ne diye değer versin?" (Furkan, 77) buyrularak insanın varoluşsal değerinin duaya bağlandığı görülür. Ancak Ehl-i Beyt mektebinde dua, sadece ihtiyaç anlarında Allah'tan bir şeyler istemek (niyaz) değil, aynı zamanda kulun kendini inşa etme sürecidir.

## Duanın Hakikati

İmam Zeynelabidin'in (a.s) eşsiz eseri Sahife-i Seccadiye, duanın bu dönüştürücü gücünü en iyi yansıtan metindir. İmam Seccad (a.s), Kerbela katliamından sonra toplumun içine düştüğü derin ahlaki çöküntüyü "dua" silahıyla tedavi etmeye çalışmıştır. Onun duaları bir yandan insanın zaaflarını ve günahkarlığını yüzüne vururken, diğer yandan Allah'ın sonsuz rahmet okyanusuna işaret ederek ümit aşılar.

## Mekarimü'l-Ahlak (Ahlaki Erdemler)

Sahife-i Seccadiye'nin 20. duası olan Mekarimü'l-Ahlak, irfanın pratik hayattaki tezahürüdür. İmam bu duada şöyle niyaz eder: 
> "Allah'ım! Muhammed ve Âline salat eyle ve imanımı imanın en kâmil derecesine, yakinimi yakinin en üstün mertebesine, niyetimi niyetlerin en iyisine ulaştır."

Bu dua göstermektedir ki gerçek irfan; dağlara çekilip inzivaya varmak değil, toplum içinde yaşarken nefsi kötülüklerden arındırmak, haset yerine muhabbeti, kin yerine affediciliği koyabilmektir.

Özetle, İmam Seccad'ın (a.s) dilinden dökülen dualar, kulun kendi acziyetini bilip ilahi kudrette fani olma (fena fillah) serüveninin yol haritasıdır.
    `,
    author: "Mehmet Demir",
    editor: "Zeynep Çelik",
    publishedAt: "10 Mart 2024",
    lastUpdated: "10 Mart 2024",
    category: "İrfan",
    readTime: "12 dk",
    tags: ["Dua", "İmam Zeynelabidin", "Sahife-i Seccadiye"],
    bibliography: ["İmam Zeynelabidin (a.s). Sahife-i Seccadiye."],
    footnotes: [],
    relatedArticles: ["hakikatin-iki-kanadi-kuran-ve-itret"],
    relatedBooks: [5]
  },
  {
    id: 3,
    slug: "kerbela-bir-direnis-okulu",
    title: "Kerbela: Bir Direniş Okulu",
    subtitle: "Aşura'nın Sosyolojik ve İrfani Boyutu",
    summary: "İmam Hüseyin'in (a.s.) kıyamının sadece tarihi bir trajedi değil, her çağda yaşayan bir hak ve adalet mektebi olması.",
    content: `
# Kerbela: Bir Direniş Okulu

Hicri 61. yılda yaşanan Kerbela Vakıası, İslam tarihinin en acı verici sayfası olmakla birlikte, aynı zamanda en büyük direniş ve uyanış destanıdır. İmam Hüseyin'in (a.s.) Yezid'in gayr-i meşru yönetimine karşı başlattığı bu kıyam, sadece o döneme ait siyasi bir çatışma değil, hak ile batılın kıyamete kadar sürecek mücadelesinin sembolüdür.

## Aşura'nın Sosyolojik Mesajı

İmam Hüseyin (a.s.) kıyamının temel felsefesini şu sözlerle özetlemiştir: 
> "Ben makam, rütbe, fesat çıkarmak veya zulmetmek için yola çıkmadım. Ben ancak ceddimin ümmetini ıslah etmek, iyiliği emredip kötülükten sakındırmak için yola çıktım."

Bu söz, Kerbela'nın salt bir iktidar mücadelesi olmadığını, aksine ümmetin üzerine çöken ahlaki ve siyasi çürümüşlüğe karşı sosyolojik bir müdahale olduğunu gösterir. Aşura, pasif kalabalıkların nasıl uyandırılacağının ve adaletsizliğe karşı sessiz kalmanın nasıl bir zillet olduğunun manifestosudur.

## İrfani Boyut: Aşka Adanmışlık

Kerbela, görünürde kılıçların ve mızrakların konuştuğu bir savaş meydanı olsa da, batınında ilahi aşkın ve teslimiyetin zirvesidir. İmam Hüseyin (a.s.) ve ashabı, Allah rızası için canlarını, mallarını ve evlatlarını feda ederek irfani bir yolculuğun en yüksek makamına (fena fillah) ulaşmışlardır. Aşura günü okunan dualar, Zeyneb-i Kübra'nın (s.a.) esaret altındaki dik duruşu ve "Ben güzellikten başka bir şey görmedim" sözü, bu kıyamın irfani derinliğini yansıtır.

## Günümüzde Kerbela
"Her gün Aşura, her yer Kerbela" düsturu, bu mektebin evrenselliğini ilan eder. Günümüzde Kerbela; zulme, emperyalizme ve haksızlığa karşı direnen her onurlu insanın ilham kaynağıdır. Aşura'yı anmak, sadece geçmişe ağlamak değil, bugünün Yezidlerine karşı bugünün Hüseyni duruşunu sergileyebilmektir.
    `,
    author: "Ali Kaya",
    editor: "Hasan Öz",
    publishedAt: "28 Şubat 2024",
    lastUpdated: "2 Mart 2024",
    category: "Kerbelâ",
    readTime: "15 dk",
    tags: ["Kerbelâ", "İmam Hüseyin", "Kıyam", "Aşura"],
    bibliography: ["Mutahhari, M. (1992). Aşura Kıyamı."],
    footnotes: [],
    relatedArticles: [],
    relatedBooks: [9]
  },
  {
    id: 4,
    slug: "modern-dunyada-imamet",
    image: "/images/articles/article_imamah.jpg",
    verificationStatus: "verified",
    editorialStatus: "published",
    title: "Modern Dünyada İmamet",
    subtitle: "Rehbersiz Kalan İnsanın Savrulmaları",
    summary: "Modernizm ve sekülerleşmenin yol açtığı anlam krizine karşı, İmamet inancının bireysel ve toplumsal hayatımıza sunduğu ufuk.",
    content: `
# Modern Dünyada İmamet ve İnsanın Arayışı

Aydınlanma sonrası dönemde, aklı yegane rehber kabul eden modern insan, maddi alanda devasa ilerlemeler kaydetmiş olsa da, manevi ve varoluşsal anlamda büyük bir buhrana sürüklenmiştir. Değerlerin göreceleştiği, hakikatin parçalandığı ve sekülerizmin insanı ilahi olandan kopardığı bu çağda, "İmamet" inancı sadece teolojik bir tartışma değil, varoluşsal bir ihtiyaç olarak karşımıza çıkmaktadır.

## Rehbersizlik ve Anlam Krizi

Modernizm, insanı kendi kendine yeten, ilahi bir rehberliğe ihtiyaç duymayan bir varlık olarak tanımlamıştır. Ancak yüzyıllar süren bu tecrübe; savaşlar, ekolojik yıkımlar ve artan ruhsal çöküntülerle insanın kâmil bir rehber (İnsan-ı Kamil) olmadan yeryüzünde adaleti ve barışı tesis edemeyeceğini göstermiştir. 

> Yeryüzü hiçbir zaman ilahi bir hüccetten (imam) yoksun kalamaz. (Hadis)

Bu ilke, Allah'ın insanlığı kendi başına, rehbersiz ve karanlıkta bırakmayacağının en büyük garantisidir.

## İmamet: Kozmik ve Toplumsal Düzen

Şiî düşüncesinde İmamet, sadece siyasi bir liderlik (hilafet) meselesi değildir. İmam, yaratılış gayesinin gerçekleşmesi, ilahi feyzin yeryüzüne ulaşması ve Kur'an'ın batıni hakikatlerinin korunması için ontolojik bir zorunluluktur. İmam, Allah ile kullar arasındaki manevi köprüdür. 

Modern dünyada İmamet inancına sahip olmak:
1. **Umut ve Direniş:** Beklenen İmam (a.f.) inancı, ne kadar karanlık görünürse görünsün geleceğin hak ve adaletten yana olacağına dair sarsılmaz bir umut verir.
2. **Ahlaki Kılavuz:** İmamların masumiyeti ve kusursuz ahlakı, göreceli ahlak teorilerine karşı mutlak ve sarsılmaz bir ahlaki model sunar.
3. **Anlam Arayışı:** Hakikatin parçalandığı bir dünyada, İmamet insanı tevhide, birliğe ve varoluşun asıl gayesine yönlendirir.

İmamet, modern insanın kaybolduğu labirentten çıkış için gökyüzünden uzatılan kopmaz bir iptir (Hablullah).
    `,
    author: "Hasan Öz",
    editor: "Ahmet Yılmaz",
    publishedAt: "20 Şubat 2024",
    lastUpdated: "25 Şubat 2024",
    category: "İmamet",
    readTime: "10 dk",
    tags: ["İmamet", "Rehberiyet", "Modernizm"],
    bibliography: [],
    footnotes: [],
    relatedArticles: ["hakikatin-iki-kanadi-kuran-ve-itret"],
    relatedBooks: [7]
  },
  {
    id: 5,
    slug: "gaibet-kavraminin-sii-dusuncesindeki-yeri",
    title: "Gaibet Kavramının Şii Düşüncesindeki Yeri",
    subtitle: "Zamanın İmamı ve İntizar Felsefesi",
    summary: "İmam Mehdi'yi (a.f.) beklemenin (intizar) pasif bir duruş değil, aktif bir hazırlık ve toplumsal inşa süreci olması üzerine kapsamlı bir teolojik tahlil.",
    content: `
# Gaibet (Gizlilik) ve İntizar (Bekleyiş) Felsefesi

Şiî inancının en temel yapı taşlarından biri, on ikinci İmam, Muhammed el-Mehdi'nin (a.f) hayatta olması, ancak ilahi bir hikmet gereği gözlerden gizli (gaip) bulunmasıdır. Gaibet kavramı, dışarıdan bakıldığında bir boşluk veya mahrumiyet gibi algılansa da, Şiî irfan ve sosyolojisinde muazzam bir dinamizmin ve devrimci ruhun kaynağıdır.

## İki Gaybet Dönemi

İmam Mehdi'nin hayatında iki gaybet dönemi yaşanmıştır:
1. **Gaybet-i Suğra (Küçük Gizlilik):** Yaklaşık 69 yıl süren bu dönemde İmam, dört özel naibi (elçisi) aracılığıyla ümmetle irtibat kurmuş ve toplumu tam bir gizlilik sürecine hazırlamıştır.
2. **Gaybet-i Kübra (Büyük Gizlilik):** 329 (hicri) yılında dördüncü naibin vefatıyla başlamış ve halen devam eden dönemdir. Bu dönemde özel naiplik kalkmış, sorumluluk "Adil Fakih"lere (müçtehitlere) bırakılmıştır.

## Bulutların Arkasındaki Güneş

Meşhur bir hadiste İmam'ın gaybet dönemindeki faydası, **"Bulutların arkasında kalan güneşin dünyaya faydasına"** benzetilmiştir. Bulutlar güneşin doğrudan görülmesini engellese de, ısısını, ışığını ve yerçekimi etkisini yok edemez. Benzer şekilde, İmam (a.f) da yeryüzünün ontolojik direği olarak ilahi feyzin kullara ulaşmasını sağlar.

## İntizar: Aktif Bir Eylem

Modern çağda "beklemek" genellikle eylemsizlik olarak algılanır. Ancak "En hayırlı amel ferci (kurtuluşu) beklemektir" hadisindeki **İntizar**, adaletin ve hakkın yeryüzüne hakim olması için bireyin önce kendini, sonra çevresini ıslah etmesi demektir. Silahını kuşanmış bir askerin komutanını beklemesi ile uyuyan birinin beklemesi bir tutulamaz. Gerçek bir muntazır (bekleyen), zalimlerle mücadele eden ve İmam'ın zuhuru için zemin hazırlayan aktif bir mümindir.
`,
    author: "Ahmet Yılmaz",
    editor: "Kemal Demir",
    publishedAt: "5 Şubat 2024",
    lastUpdated: "12 Şubat 2024",
    category: "İmam Mehdi",
    readTime: "14 dk",
    tags: ["Mehdeviyet", "Gaibet", "İntizar"],
    bibliography: ["Emini, İ. (2015). Mehdeviyet İnancı."],
    footnotes: [
      { id: 1, text: "Gaibet-i Suğra ve Gaibet-i Kübra ayrımı, Şii eskatolojisinin temel direklerindendir." }
    ],
    relatedArticles: [],
    relatedBooks: [8]
  }
];

export * from './encyclopedia';

export interface Publication {
  id: number;
  slug: string;
  title: string;
  type: string;
  description: string;
  date: string;
  downloadSize: string;
  editor?: string;
  pageCount?: number;
  category?: string;
  pdfUrl?: string;
  bibliography?: string[];
}

export const mockPublications: Publication[] = [
  { id: 1, slug: "sekaleyn-dergisi-sayi-1", title: "Sekaleyn Dergisi - Sayı 1", type: "Dergi", description: "Kur'an ve Ehl-i Beyt ekseninde üç aylık düşünce ve araştırma dergisi. İlk sayımızın dosyası: Tevhid ve Adalet.", date: "2024 Kış", downloadSize: "5 MB", editor: "KaimAlSakaleyn Kurul", pageCount: 84, category: "Düşünce Dergisi", bibliography: ["Kaynak A", "Kaynak B"] },
  { id: 2, slug: "kirk-hadis-serhi-kilavuzu", title: "Kırk Hadis Şerhi Kılavuzu", type: "PDF Çalışma", description: "Gençler için hazırlanmış, günlük hayata dokunan kırk Ehl-i Beyt hadisi ve kısa açıklamaları.", date: "2023 Sonbahar", downloadSize: "2.3 MB", editor: "Kemal Demir", pageCount: 45, category: "Hadis" },
  { id: 3, slug: "asura-mektebi", title: "Aşura Mektebi", type: "Kitapçık", description: "Kerbela olayının sosyolojik ve irfani boyutlarını ele alan derleme makaleler kitapçığı.", date: "2023 Yaz", downloadSize: "3.1 MB", editor: "Ahmet Yılmaz", pageCount: 60, category: "Tarih" },
  { id: 4, slug: "islamda-insan-haklari", title: "İslam'da İnsan Hakları", type: "Araştırma Dosyası", description: "Sahife-i Seccadiye'deki Risaletü'l-Hukuk (Haklar Risalesi) merkeze alınarak hazırlanmış araştırma dosyası.", date: "2023 İlkbahar", downloadSize: "4.5 MB", editor: "Ali Kaya", pageCount: 30, category: "Fıkıh / Ahlak" }
];

export const mockEvents = [
  { id: 1, title: "Kur'an ve Tefekkür Sohbetleri", type: "Sohbet", date: "2024-04-05T20:30:00", location: "Çevrimiçi (Zoom)", description: "Her hafta Cuma akşamları gerçekleştirdiğimiz Kur'an sohbetlerinin bu haftaki konusu: 'Kıssaların Dili'." },
  { id: 2, title: "Nehcü'l-Belâğa Okumaları", type: "Okuma", date: "2024-04-10T19:00:00", location: "Vakıf Merkezi", description: "İmam Ali'nin (a.s.) hutbelerinden seçmeler ve günümüz meseleleri ışığında tahlili." },
  { id: 3, title: "Vahdet Haftası Özel Programı", type: "Özel Program", date: "2024-04-20T14:00:00", location: "Kültür Merkezi Salonu", description: "Peygamber Efendimiz'in (s.a.v.) kutlu doğumu münasebetiyle düzenlenecek olan panel ve şiir dinletisi." },
  { id: 4, title: "İrfan Derslerine Giriş", type: "Ders", date: "2024-03-01T20:00:00", location: "Çevrimiçi (YouTube)", description: "İslam irfanının temel kavramları ve şahsiyetleri üzerine yapılan geçmiş ders serimiz.", isPast: true }
];

export const mockFeatured = [
  { id: 1, title: "Hakikatin İki Kanadı: Kur'an ve İtret", type: "Makale", link: "/defterler/hakikatin-iki-kanadi-kuran-ve-itret" },
  { id: 2, title: "Sekaleyn Dergisi - İlk Sayı Çıktı", type: "Neşriyat", link: "/nesriyat" },
  { id: 3, title: "Nehcü'l-Belâğa Okumaları Başlıyor", type: "Etkinlik", link: "/etkinlikler" }
];

export const dailyQuote = {
  content: "Biz, yeryüzünde zayıf düşürülenlere lütufta bulunmak, onları önderler yapmak ve varisler kılmak istiyoruz.",
  source: "Kasas Suresi, 5. Ayet",
  type: "Ayet"
};

export const mehdeviyetDossier = {
  title: "Zamanın İmamı: Beklenen Adalet",
  description: "Yeryüzü zulüm ve haksızlıkla dolduktan sonra, onu adalet ve eşitlikle dolduracak olan İmam Mehdi'nin (a.f) evrensel kıyamı, intizar kültürü ve kurtarıcı inancı üzerine kapsamlı araştırmalar dosyası.",
  get articlesCount() { return mockArticles.filter(a => a.category === 'İmam Mehdi' || a.category === 'Mehdeviyet').length; },
  get booksCount() { return mockBooks.filter(b => b.category === 'İmam Mehdi' || b.category === 'Mehdeviyet').length; },
  link: "/defterler?category=İmam%20Mehdi"
};

export * from './generated-drafts';
