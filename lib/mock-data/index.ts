export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  content?: string;
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
  copyrightStatus?: string;
  cover?: string;
  verificationStatus?: 'draft' | 'needs_review' | 'source_checked' | 'editorial_approved';
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
    "originalTitle": "-",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 579,
    "isbn": "978-605-1922-56",
    "summary": "Kur'an-ı Kerim Meali eseri, Kur'an alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
  },
  {
    "id": 2,
    "title": "El-Mizan Fi Tefsir'il Kur'an",
    "author": "Allame Tabatabai",
    "category": "Tefsir",
    "language": "Türkçe",
    "year": 1995,
    "slug": "el-mizan-fi-tefsiril-kuran",
    "originalTitle": "El-Mizan Fi Tefsir'il Kur'an (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 366,
    "isbn": "978-605-4276-33",
    "summary": "El-Mizan Fi Tefsir'il Kur'an eseri, Tefsir alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
  },
  {
    "id": 3,
    "title": "Usul-u Kafi",
    "author": "Şeyh Kuleyni",
    "category": "Hadis",
    "language": "Türkçe",
    "year": 2005,
    "slug": "usul-u-kafi",
    "originalTitle": "Usul-u Kafi (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 100,
    "isbn": "978-605-8468-34",
    "summary": "Usul-u Kafi eseri, Hadis alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
  },
  {
    "id": 4,
    "title": "Nehcü'l-Belâğa",
    "author": "İmam Ali (a.s)",
    "category": "Nehcü'l-Belâğa",
    "language": "Türkçe",
    "year": 2010,
    "slug": "nehcul-belaga",
    "originalTitle": "Nehcü'l-Belâğa (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 559,
    "isbn": "978-605-6418-51",
    "summary": "Nehcü'l-Belâğa eseri, Nehcü'l-Belâğa alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
  },
  {
    "id": 5,
    "title": "Sahife-i Seccadiye",
    "author": "İmam Zeynelabidin (a.s)",
    "category": "Sahife-i Seccadiye",
    "language": "Türkçe",
    "year": 2012,
    "slug": "sahife-i-seccadiye",
    "originalTitle": "Sahife-i Seccadiye (Arapça/Farsça Orijinal)",
    "translator": "KaimAlSakaleyn Çeviri Heyeti",
    "verification": "Enstitü Tahkik Kurulu",
    "publisher": "KaimAlSakaleyn Yayınları",
    "edition": "1. Baskı",
    "pageCount": 584,
    "isbn": "978-605-6928-40",
    "summary": "Sahife-i Seccadiye eseri, Sahife-i Seccadiye alanında yazılmış en temel başvuru kaynaklarından biridir. İnsanlığın hakikate ulaşma yolculuğunda önemli köşe taşlarından birini temsil eder.",
    "toc": [
      "Önsöz",
      "Giriş ve Metodoloji",
      "Birinci Bölüm: Temel Kavramlar",
      "İkinci Bölüm: Derinlemesine Tahlil",
      "Sonuç ve Değerlendirme"
    ],
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
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
    "copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"
  }
];

export const mockArticles: Article[] = [
  {
    id: 1,
    slug: "hakikatin-iki-kanadi-kuran-ve-itret",
    title: "Hakikatin İki Kanadı: Kur'an ve İtret",
    subtitle: "Sekaleyn Hadisi Ekseninde Bir İnceleme",
    summary: "Peygamber Efendimiz'in (s.a.v.) Veda Haccı'nda bıraktığı iki emanetin günümüzdeki anlamı üzerine tefekkür.",
    content: `
      <p>Peygamber Efendimiz (s.a.v.) ömrünün son demlerinde, ümmetine kıyamete kadar yol gösterecek iki büyük emanet bırakmıştır. Bu emanetlerin mahiyeti ve birbirleriyle olan ayrılmaz bağı, İslam düşünce tarihinin en temel konularından biridir.</p>
      
      <h2>Sekaleyn Hadisinin Kaynakları</h2>
      <p>Hadis-i Sekaleyn, hem Şii hem de Sünni kaynaklarda mütevatir derecesine ulaşmış, inkarı mümkün olmayan bir hakikattir. Resulullah (s.a.v) şöyle buyurmuştur: "Ben size iki paha biçilmez emanet bırakıyorum: Allah'ın Kitabı ve Ehl-i Beytim (İtretim). Bunlara sarıldığınız sürece asla sapıtmazsınız."</p>
      
      <h2>Kur'an ve Ehl-i Beyt'in Birlikteliği</h2>
      <p>Bu iki emanet sadece yan yana duran iki rehber değil, birbirini tamamlayan, biri olmadan diğerinin tam anlaşılamayacağı bir bütündür. Kur'an ilahi vahyin yazılı metni, Ehl-i Beyt ise o metnin yaşayan, nefes alan, en doğru ve sapmasız tefsiridir. Nitekim hadisin devamında "Bu ikisi Havz-ı Kevser'de bana varıncaya kadar birbirinden ayrılmazlar" buyrularak bu ayrılmazlık vurgulanmıştır.</p>
      
      <p>Günümüzde Müslümanların yaşadığı en büyük kriz, bu iki kanattan birini ihmal etmekten veya ikisini birbirinden ayırmaktan kaynaklanmaktadır.</p>
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
    title: "İrfani Açıdan Dua",
    subtitle: "Sahife-i Seccadiye'nin Derinliklerinde",
    summary: "Sahife-i Seccadiye ekseninde kulun Rabbiyle olan dikey iletişiminin boyutları.",
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
    summary: "İmam Hüseyin'in (a.s.) kıyamının sadece tarihi bir olay değil, her çağda yaşayan bir mektep olması.",
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
    title: "Modern Dünyada İmamet",
    subtitle: "Rehbersiz Kalan İnsanın Savrulmaları",
    summary: "Rehbersiz bir dünyanın savrulmaları ve İmamet inancının bireysel ve toplumsal hayatımıza sunduğu ufuk.",
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
    summary: "İmam Mehdi'yi (a.f.) beklemenin pasif bir duruş değil, aktif bir hazırlık süreci olması üzerine kapsamlı bir tahlil.",
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
