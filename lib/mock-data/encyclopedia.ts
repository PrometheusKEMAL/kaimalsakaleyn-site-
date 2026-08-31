export interface Person {
  slug: string;
  name: string;
  title: string;
  laqabs: string[];
  birth: string;
  death: string;
  father: string;
  mother: string;
  relatedBooks: number[];
  relatedArticles: string[];
  relatedPersons: string[];
  bio: string;
  life?: string;
  chronology?: Array<{ year: string; event: string }>;
  quotes?: Array<{ text: string; source: string }>;
}

export const mockPersons: Person[] = [
  {
    slug: "hz-muhammed",
    name: "Hz. Muhammed (s.a.a)",
    title: "Hatemü'l-Enbiya",
    laqabs: ["Mustafa", "Ebu'l-Kasım", "Habibullah", "Resulullah", "Emin"],
    birth: "17 Rebiülevvel, Fil Yılı",
    death: "28 Sefer, 11 H.",
    father: "Abdullah b. Abdulmuttalib",
    mother: "Amine bnt. Vehb",
    relatedBooks: [1, 5],
    relatedArticles: ["hakikatin-iki-kanadi-kuran-ve-itret"],
    relatedPersons: ["imam-ali", "hz-fatima"],
    bio: "İslam'ın son peygamberi. Kur'an-ı Kerim'in kendisine vahyedildiği, Ehl-i Beyt'in atası ve alemlere rahmet olarak gönderilen elçi."
  },
  {
    slug: "hz-fatima",
    name: "Hz. Fatıma (s.a)",
    title: "Seyyidetü Nisai'l-Alemin",
    laqabs: ["Zehra", "Sıddıka", "Tahirah", "Betül", "Ümmü Ebiha"],
    birth: "20 Cemaziyelahir",
    death: "3 Cemaziyelahir, 11 H.",
    father: "Hz. Muhammed (s.a.a)",
    mother: "Hz. Hatice (s.a)",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["hz-muhammed", "imam-ali", "imam-hasan", "imam-huseyin"],
    bio: "Peygamber Efendimiz'in (s.a.a) sevgili kızı, İmam Ali'nin (a.s) eşi, İmam Hasan ve İmam Hüseyin'in annesi. Fedek Hutbesi ile velayet savunmasının bayraktarıdır."
  },
  {
    slug: "imam-ali",
    name: "İmam Ali (a.s)",
    title: "Müminlerin Emiri",
    laqabs: ["Emirü'l-Müminin", "Murtaza", "Esedullah", "Haydar", "Ebu Turab"],
    birth: "13 Receb (Kabe'nin içi)",
    death: "21 Ramazan, 40 H.",
    father: "Ebu Talib",
    mother: "Fatıma bnt. Esed",
    relatedBooks: [4, 7],
    relatedArticles: ["hakikatin-iki-kanadi-kuran-ve-itret"],
    relatedPersons: ["hz-muhammed", "hz-fatima"],
    bio: "Birinci İmam. Nehcü'l-Belağa'nın sahibi. Gadir-i Hum'da Peygamber'in (s.a.a) halifesi olarak ilan edilen, ilim şehrinin kapısı ve velayetin babası."
  },
  {
    slug: "imam-hasan",
    name: "İmam Hasan (a.s)",
    title: "İkinci İmam",
    laqabs: ["Mücteba", "Zeki", "Seyyid", "Sıbt-ı Ekber"],
    birth: "15 Ramazan, 3 H.",
    death: "28 Sefer, 50 H.",
    father: "İmam Ali (a.s)",
    mother: "Hz. Fatıma (s.a)",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["hz-muhammed", "imam-ali", "imam-huseyin"],
    bio: "İkinci İmam. Muaviye ile yaptığı barış antlaşması ile İslam ümmetinin kanının dökülmesini engelleyen ve Kerbela'nın zeminini hazırlayan masum imam."
  },
  {
    slug: "imam-huseyin",
    name: "İmam Hüseyin (a.s)",
    title: "Seyyidü'ş-Şüheda",
    laqabs: ["Şehid", "Ebu Abdullah", "Seyyid", "Sıbt-ı Asgar", "Zeki"],
    birth: "3 Şaban, 4 H.",
    death: "10 Muharrem, 61 H. (Aşura)",
    father: "İmam Ali (a.s)",
    mother: "Hz. Fatıma (s.a)",
    relatedBooks: [9, 18],
    relatedArticles: ["kerbela-bir-direnis-okulu"],
    relatedPersons: ["hz-muhammed", "imam-ali", "imam-hasan"],
    bio: "Üçüncü İmam. Kerbela'da Yezid'in zulüm ordusuna karşı kıyam ederek İslam dinini sapkınlıktan kurtaran şehitlerin efendisi."
  },
  {
    slug: "imam-zeynelabidin",
    name: "İmam Ali b. Hüseyin (a.s)",
    title: "Seyyidü's-Sacidîn",
    laqabs: ["Zeynelabidin", "Seccad", "Zeki", "Emin"],
    birth: "5 Şaban, 38 H.",
    death: "25 Muharrem, 95 H.",
    father: "İmam Hüseyin (a.s)",
    mother: "Şehrbanu",
    relatedBooks: [6],
    relatedArticles: ["irfani-acidan-dua"],
    relatedPersons: ["imam-huseyin", "imam-bakir"],
    bio: "Dördüncü İmam. Kerbela vakıasından sonra Sahife-i Seccadiye ve dualar aracılığıyla Şiî toplumunu ahlaki ve irfani yönden yeniden inşa etmiştir."
  },
  {
    slug: "imam-bakir",
    name: "İmam Muhammed Bakır (a.s)",
    title: "Bakırü'l-Ulum",
    laqabs: ["Bakır", "Şakir", "Hadi"],
    birth: "1 Receb, 57 H.",
    death: "7 Zilhicce, 114 H.",
    father: "İmam Zeynelabidin (a.s)",
    mother: "Ümmü Abdullah",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["imam-zeynelabidin", "imam-sadik"],
    bio: "Beşinci İmam. İlimleri yaran anlamındaki lakabıyla bilinir. Şiî fıkhının ve hadis külliyatının temel kaynaklarını oluşturacak ilmi hareketi başlatmıştır."
  },
  {
    slug: "imam-sadik",
    name: "İmam Cafer Sadık (a.s)",
    title: "Cafer-i Sadık",
    laqabs: ["Sadık", "Fazıl", "Tahir"],
    birth: "17 Rebiülevvel, 83 H.",
    death: "25 Şevval, 148 H.",
    father: "İmam Muhammed Bakır (a.s)",
    mother: "Ümmü Ferve",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["imam-bakir", "imam-kazim"],
    bio: "Altıncı İmam. Dört binden fazla öğrenci yetiştirerek Caferi fıkhının (mezhebinin) sistemleşmesini sağlayan büyük ilim otoritesi."
  },
  {
    slug: "imam-kazim",
    name: "İmam Musa Kazım (a.s)",
    title: "Ebu'l-Hasan El-Evvel",
    laqabs: ["Kazım", "Salih", "Emin", "Sabir"],
    birth: "7 Sefer, 128 H.",
    death: "25 Receb, 183 H.",
    father: "İmam Cafer Sadık (a.s)",
    mother: "Hamide",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["imam-sadik", "imam-riza"],
    bio: "Yedinci İmam. Öfkesini yutan (Kazım) lakabıyla bilinir. Hayatının büyük bölümünü Abbasi zindanlarında geçirmiştir."
  },
  {
    slug: "imam-riza",
    name: "İmam Ali Rıza (a.s)",
    title: "Ebu'l-Hasan Es-Sani",
    laqabs: ["Rıza", "Sıraceddullah", "Rezi"],
    birth: "11 Zilkade, 148 H.",
    death: "Son Günü Sefer, 203 H.",
    father: "İmam Musa Kazım (a.s)",
    mother: "Necme",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["imam-kazim", "imam-cevad"],
    bio: "Sekizinci İmam. Me'mun'un veliahtlık dayatması sebebiyle Horasan'a (Tus) gitmek zorunda kalmış, ilmi münazaralarıyla tanınmıştır. Türbesi Meşhed'dedir."
  },
  {
    slug: "imam-cevad",
    name: "İmam Muhammed Taki (a.s)",
    title: "Cevad",
    laqabs: ["Taki", "Cevad", "Muhtar", "Muntaceb"],
    birth: "10 Receb, 195 H.",
    death: "Son Günü Zilkade, 220 H.",
    father: "İmam Ali Rıza (a.s)",
    mother: "Huzeran",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["imam-riza", "imam-hadi"],
    bio: "Dokuzuncu İmam. Çok genç yaşta imamet makamına ulaşmış, ilmi tartışmalardaki üstünlüğüyle Abbasi alimlerini hayrete düşürmüştür."
  },
  {
    slug: "imam-hadi",
    name: "İmam Ali Naki (a.s)",
    title: "Ebu'l-Hasan Es-Salis",
    laqabs: ["Hadi", "Naki", "Muttaki", "Nasih"],
    birth: "15 Zilhicce, 212 H.",
    death: "3 Receb, 254 H.",
    father: "İmam Muhammed Taki (a.s)",
    mother: "Semane",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["imam-cevad", "imam-askeri"],
    bio: "Onuncu İmam. Samarra'da askeri garnizonda göz hapsinde tutulmuştur. Ziyaret-i Camia-i Kebire onun önemli miraslarındandır."
  },
  {
    slug: "imam-askeri",
    name: "İmam Hasan Askeri (a.s)",
    title: "Ebu Muhammed",
    laqabs: ["Askeri", "Zeki", "Halis", "Sirac"],
    birth: "8 Rebiülahir, 232 H.",
    death: "8 Rebiülevvel, 260 H.",
    father: "İmam Ali Naki (a.s)",
    mother: "Hüdeyse",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: ["imam-hadi", "imam-mehdi"],
    bio: "On Birinci İmam. Samarra'da şiddetli baskı altında yaşamış, Şiî toplumunu Gaibet dönemine hazırlamıştır."
  },
  {
    slug: "imam-mehdi",
    name: "İmam Mehdi (a.f)",
    title: "Sahibü'z-Zaman",
    laqabs: ["Mehdi", "Kaim", "Hüccet", "Muntazar", "Baqiyyetullah"],
    birth: "15 Şaban, 255 H.",
    death: "Hayatta",
    father: "İmam Hasan Askeri (a.s)",
    mother: "Nergis (Melika)",
    relatedBooks: [8],
    relatedArticles: ["gaibet-kavraminin-sii-dusuncesindeki-yeri"],
    relatedPersons: ["imam-askeri"],
    bio: "On İkinci İmam. Gaibet'te (gizlilikte) olan, yeryüzü zulümle dolduktan sonra adaletle dolduracak olan vaat edilmiş kurtarıcı."
  }
];

export interface Concept {
  slug: string;
  title: string;
  definition: string;
  etymology: string;
  quranicUsage: string;
  hadithUsage?: string;
  relatedBooks: number[];
  relatedArticles: string[];
  relatedPersons: string[];
  bibliography?: string[];
}

export const mockConcepts: Concept[] = [
  {
    slug: "imamet",
    title: "İmamet",
    definition: "İmamiye inancına göre nübüvvetten sonra dinin ve ümmetin ilahi olarak atanmış masum bir rehber (imam) tarafından korunması ve yönetilmesi esası.",
    etymology: "'İmam' kelimesi Arapça 'ümm' (öncülük eden, önde duran) kökünden gelir.",
    quranicUsage: "Kur'an'da Bakara 124 gibi ayetlerde ilahi bir makam olarak geçer: 'Seni insanlara imam kılacağım.'",
    relatedBooks: [7, 11],
    relatedArticles: ["modern-dunyada-imamet"],
    relatedPersons: ["imam-ali", "imam-mehdi"]
  },
  {
    slug: "mehdeviyet",
    title: "Mehdeviyet",
    definition: "Ahir zamanda Hz. Muhammed'in (s.a.a) soyundan gelecek olan İmam Mehdi'nin evrensel bir adalet devleti kuracağı inancı.",
    etymology: "'Mehdi', hidayete erdirilmiş ve başkalarını doğru yola ileten anlamındadır.",
    quranicUsage: "Kasas 5 ve Enbiya 105 gibi ayetlerde mustazafların yeryüzüne varis olacağı müjdesi.",
    relatedBooks: [8],
    relatedArticles: ["gaibet-kavraminin-sii-dusuncesindeki-yeri"],
    relatedPersons: ["imam-mehdi"]
  },
  {
    slug: "ismet",
    title: "İsmet",
    definition: "Peygamberlerin ve Masum İmamların, ilahi koruma sayesinde her türlü günah, hata, unutkanlık ve yanlıştan masum (korunmuş) olmaları durumu.",
    etymology: "'İsmet', koruma, alıkoyma, günah işlememe anlamlarına gelir.",
    quranicUsage: "Tathir ayetinde (Ahzab, 33) 'Allah siz Ehl-i Beyt'ten her türlü kiri gidermek ve sizi tertemiz kılmak istiyor' şeklinde ifade edilir.",
    relatedBooks: [7],
    relatedArticles: ["hakikatin-iki-kanadi-kuran-ve-itret"],
    relatedPersons: ["hz-muhammed", "hz-fatima", "imam-ali", "imam-hasan", "imam-huseyin", "imam-zeynelabidin", "imam-bakir", "imam-sadik", "imam-kazim", "imam-riza", "imam-cevad", "imam-hadi", "imam-askeri", "imam-mehdi"]
  },
  {
    slug: "asura",
    title: "Aşura",
    definition: "Hicri 61 yılında (680) Muharrem ayının 10. günü Kerbela'da İmam Hüseyin (a.s) ve 72 yareninin şehit edildiği gün ve bu kıyamın taşıdığı tarihi-irfani anlam.",
    etymology: "'Aşura', Arapça 'aşr' (on) kelimesinden türemiş olup, Muharrem ayının onuncu günü demektir.",
    quranicUsage: "Kur'an'da doğrudan geçmemekle birlikte, Fecr suresi 27-30 ayetlerinin 'Nefs-i Mutmainne' vasfıyla İmam Hüseyin'e (a.s) işaret ettiği rivayet edilir.",
    relatedBooks: [9, 18],
    relatedArticles: ["kerbela-bir-direnis-okulu"],
    relatedPersons: ["imam-huseyin"]
  },
  {
    slug: "gaybet",
    title: "Gaybet",
    definition: "On İkinci İmam'ın (a.f) ilahi bir takdir gereği insanlardan gizlenmesi. Küçük Gaybet (Gaybet-i Suğra) ve Büyük Gaybet (Gaybet-i Kübra) olarak ikiye ayrılır.",
    etymology: "'Gaybet', gözden kaybolma, hazır bulunmama anlamlarına gelir.",
    quranicUsage: "Gayb'a iman kavramı (Bakara 3) kapsamında değerlendirilir.",
    relatedBooks: [8],
    relatedArticles: ["gaibet-kavraminin-sii-dusuncesindeki-yeri"],
    relatedPersons: ["imam-mehdi"]
  }
];
