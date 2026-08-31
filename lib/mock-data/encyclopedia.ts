export interface TimelineEvent {
  year: string;
  event: string;
}

export interface Quote {
  text: string;
  source: string;
}

export interface Person {
  id: number;
  slug: string;
  name: string;
  title: string;
  laqabs: string[];
  life: string;
  chronology: TimelineEvent[];
  quotes: Quote[];
  relatedBooks: number[];
  relatedArticles: string[];
  bibliography: string[];
}

export interface Concept {
  id: number;
  slug: string;
  title: string;
  definition: string;
  etymology: string;
  quranicUsage: string;
  hadithUsage: string;
  relatedPersons: string[]; // slugs
  relatedBooks: number[];
  relatedArticles: string[];
  bibliography: string[];
}

export const mockPersons: Person[] = [
  {
    id: 1,
    slug: "imam-ali",
    name: "İmam Ali (a.s)",
    title: "Müminlerin Emiri",
    laqabs: ["Emire'l-Müminin", "Murtaza", "Haydar", "Ebu Turab", "Esedullah"],
    life: "<p>İmam Ali (a.s), Kâbe'nin içinde doğan tek insandır. Hz. Peygamber'in (s.a.v) amcasının oğlu, damadı ve birinci vasisidir. Hayatı boyunca Hz. Peygamber'in yanından ayrılmamış, İslam'ın en zorlu savaşlarında en ön saflarda çarpışmıştır. Hz. Peygamber'in vefatından sonra hilafet hakkı gasp edilmesine rağmen 25 yıl boyunca ümmetin maslahatı için sabretmiş, daha sonra ümmetin ısrarıyla halifeliği kabul etmiştir.</p><p>Dört buçuk yıllık hilafeti döneminde adaletin tesisi için tavizsiz bir mücadele yürütmüş, Cemel, Sıffin ve Nehrevan savaşlarında iç karışıklıkları bastırmaya çalışmıştır. Nihayetinde Kufe Mescidi'nde ibadet halindeyken İbn Mülcem isimli bir Harici tarafından zehirli bir kılıç darbesiyle şehit edilmiştir.</p>",
    chronology: [
      { year: "Bi'setten 10 yıl önce", event: "Kâbe'de dünyaya gelişi" },
      { year: "Bi'setin 1. yılı", event: "İslam'ı kabul eden ilk erkek olması" },
      { year: "Hicretin 1. yılı", event: "Mekke'den Medine'ye hicret ve Hz. Peygamber'in yatağına yatması (Leyletü'l-Mebit)" },
      { year: "Hicretin 2. yılı", event: "Hz. Fatıma (s.a) ile evliliği ve Bedir Savaşı" },
      { year: "Hicretin 10. yılı", event: "Gadir-i Hum'da Hz. Peygamber tarafından halife ilan edilmesi" },
      { year: "Hicretin 35. yılı", event: "Zahiri hilafete gelişi" },
      { year: "Hicretin 40. yılı", event: "Kufe Mescidi'nde şehit edilmesi" }
    ],
    quotes: [
      { text: "İnsanlar bilmedikleri şeyin düşmanıdırlar.", source: "Nehcü'l-Belâğa, Hikmetli Sözler 172" },
      { text: "İnsanlar iki kısımdır: Ya dinde kardeşin, ya da yaratılışta eşindir.", source: "Nehcü'l-Belâğa, Malik Eşter'e Emirnamesi" },
      { text: "Bana bir harf öğretenin kırk yıl kölesi olurum.", source: "Şia ve Sünni Kaynakları" }
    ],
    relatedBooks: [4, 7],
    relatedArticles: ["hakikatin-iki-kanadi-kuran-ve-itret"],
    bibliography: [
      "Şeyh Müfid, el-İrşad",
      "Seyyid Razi, Nehcü'l-Belâğa"
    ]
  },
  {
    id: 2,
    slug: "hz-fatima",
    name: "Hz. Fatıma (s.a)",
    title: "Peygamber'in Gözbebeği",
    laqabs: ["Zehra", "Sıddıka", "Tahirah", "Mubareke", "Seyyidetü Nisa'il Alemin"],
    life: "<p>Hz. Fatıma (s.a), Hz. Peygamber'in (s.a.v) ve Hz. Hatice'nin kızıdır. Ehl-i Beyt'in annesi ve soyunun devam ettiricisidir. Hayatı kısa olmasına rağmen, duruşu, ibadeti ve babasına olan düşkünlüğü ile tüm Müslüman kadınlar için en yüce örnek konumundadır.</p><p>Hz. Peygamber'in vefatından sonra hakkı olan Fedek arazisinin gasp edilmesi ve imamet makamının savurulmasına karşı verdiği siyasi ve hukuki mücadele (Fedek Hutbesi) İslam tarihinin en önemli dönüm noktalarından biridir. Zulme boyun eğmeyen duruşu sebebiyle genç yaşta, babasının acısıyla vefat etmiş ve vasiyeti üzerine gece gizlice defnedilmiştir.</p>",
    chronology: [
      { year: "Bi'setin 5. yılı", event: "Mekke'de dünyaya gelişi" },
      { year: "Hicretin 2. yılı", event: "İmam Ali (a.s) ile evliliği" },
      { year: "Hicretin 3. yılı", event: "İmam Hasan'ın (a.s) doğumu" },
      { year: "Hicretin 4. yılı", event: "İmam Hüseyin'in (a.s) doğumu" },
      { year: "Hicretin 11. yılı", event: "Hz. Peygamber'in vefatı, Fedek Hutbesi ve Şehadeti" }
    ],
    quotes: [
      { text: "Allah, imanı şirkten arınmanız için; namazı kibirden uzaklaşmanız için; zekatı rızkın artması için; orucu ihlasın sağlamlaşması için farz kıldı.", source: "Fedek Hutbesi" },
      { text: "Babamdan sonra üzerime öyle musibetler döküldü ki, eğer bu musibetler gündüzlerin üzerine dökülseydi, hepsi gece olurdu.", source: "Tarihi Kaynaklar" }
    ],
    relatedBooks: [6],
    relatedArticles: [],
    bibliography: [
      "Allame Meclisi, Biharü'l-Envar (Cilt 43)"
    ]
  },
  {
    id: 3,
    slug: "imam-mehdi",
    name: "İmam Mehdi (a.f)",
    title: "Beklenen Kurtarıcı",
    laqabs: ["Kaim", "Muntazar", "Sahibü'z-Zaman", "Huccet", "Baqiyyetullah"],
    life: "<p>On ikinci ve son İmam olan İmam Mehdi (a.f), hicri 255 yılında Samarra'da dünyaya gelmiştir. Babası İmam Hasan el-Askeri'nin (a.s) şehadetinden sonra 5 yaşında imamet makamına ulaşmıştır. Hayatı, Gaibet-i Suğra (Küçük Gizlilik) ve Gaibet-i Kübra (Büyük Gizlilik) olmak üzere iki ana döneme ayrılır.</p><p>Gaibet-i Suğra döneminde dört özel temsilcisi (Nuvvab-ı Erbaa) aracılığıyla Şialarıyla iletişim kurmuştur. Hicri 329 yılında son temsilcisinin vefatıyla başlayan Gaibet-i Kübra dönemi halen devam etmektedir. Şii inancına göre O hayattadır ve Allah'ın izniyle zuhur ederek dünyayı adaletle dolduracaktır.</p>",
    chronology: [
      { year: "H. 255 (M. 869)", event: "Samarra'da dünyaya gelişi" },
      { year: "H. 260 (M. 874)", event: "İmamet makamına ulaşması ve Gaibet-i Suğra'nın başlangıcı" },
      { year: "H. 329 (M. 941)", event: "Dördüncü özel temsilcinin vefatı ve Gaibet-i Kübra'nın başlangıcı" },
      { year: "?", event: "Zuhur ve Küresel Adaletin Tesisi" }
    ],
    quotes: [
      { text: "Ben yeryüzünün emniyetiyim, tıpkı yıldızların gökyüzünün emniyeti olduğu gibi.", source: "Kemalü'd-Din" },
      { text: "Biz sizi gözetmeyi ihmal etmiyoruz ve sizi unutmuş değiliz. Aksi takdirde zorluklar sizi ezer ve düşmanlar sizi yok ederdi.", source: "Şeyh Müfid'e Mektubundan" }
    ],
    relatedBooks: [8],
    relatedArticles: ["gaibet-kavraminin-sii-dusuncesindeki-yeri"],
    bibliography: [
      "Şeyh Saduk, Kemalü'd-Din",
      "Numani, el-Gaybet"
    ]
  }
];

export const mockConcepts: Concept[] = [
  {
    id: 1,
    slug: "imamet",
    title: "İmamet",
    definition: "Peygamberlik misyonunun devamı olarak, dini ve dünyevi işlerde ümmetin ilahi olarak atanmış rehberliğidir.",
    etymology: "Arapça 'ümm' (ön) kökünden gelir. Önde giden, kendisine uyulan, önder ve rehber demektir.",
    quranicUsage: "Kur'an'da İmamet, nübüvvetten daha üstün bir makam olarak anlatılır. İbrahim (a.s)'ın imtihanları geçtikten sonra İmam kılınması buna örnektir: 'Seni insanlara imam yapacağım' (Bakara, 124). Ayrıca her toplumun kendi imamıyla çağrılacağı belirtilir (İsra, 71).",
    hadithUsage: "Gadir-i Hum hadisi ('Ben kimin mevlasıysam Ali de onun mevlasıdır') ve Sekaleyn hadisi İmametin en net temelleridir. İmam Sadık (a.s): 'Yeryüzü hiçbir zaman hüccetsiz (imamsız) kalmaz' buyurmuştur.",
    relatedPersons: ["imam-ali", "imam-mehdi"],
    relatedBooks: [7, 11],
    relatedArticles: ["modern-dunyada-imamet"],
    bibliography: [
      "Allame Hilli, El-Babu'l Hadi Aşer",
      "Murtaza Mutahhari, İmamet ve Liderlik"
    ]
  },
  {
    id: 2,
    slug: "mehdeviyet",
    title: "Mehdeviyet",
    definition: "Ahir zamanda Ehl-i Beyt soyundan bir kurtarıcının (İmam Mehdi) gelerek zulümle dolmuş yeryüzünü adaletle dolduracağına olan kesin inançtır.",
    etymology: "Mehdi, 'hidayete erdirilmiş' ve 'doğru yola iletilen' demektir.",
    quranicUsage: "Yeryüzüne salih kulların varis olacağı (Enbiya, 105) ve zayıf düşürülenlerin yeryüzünün önderleri kılınacağı (Kasas, 5) ayetleri Mehdeviyet'in Kur'ani temellerindendir.",
    hadithUsage: "Peygamber Efendimiz (s.a.v): 'Dünyanın ömründen sadece bir gün kalsa bile, Allah o günü uzatır ve benim soyumdan ismi ismime uygun birini gönderir. Yeryüzü zulümle dolduğu gibi, o da adaletle doldurur.'",
    relatedPersons: ["imam-mehdi"],
    relatedBooks: [8],
    relatedArticles: ["gaibet-kavraminin-sii-dusuncesindeki-yeri"],
    bibliography: [
      "İbrahim Emini, Mehdeviyet İnancı"
    ]
  },
  {
    id: 3,
    slug: "asura",
    title: "Aşura",
    definition: "Muharrem ayının 10. günü İmam Hüseyin (a.s) ve yarenlerinin Kerbela'da şehit edildiği gündür. Şii düşüncesinde direnişin, fedakarlığın ve zilleti reddetmenin sembolüdür.",
    etymology: "Aşura, Arapça 'aşere' (on) kelimesinden türemiştir ve onuncu gün anlamına gelir.",
    quranicUsage: "Doğrudan ismi geçmese de, Allah yolunda can vermenin ve zulme başkaldırmanın anlatıldığı tüm cihat ve şehadet ayetlerinin (örn. Al-i İmran 169) en yüce tecellisi olarak görülür.",
    hadithUsage: "Peygamber Efendimiz (s.a.v): 'Hüseyin bendendir, ben de Hüseyin'denim.' İmam Cafer Sadık (a.s): 'Hüseyin'in (a.s) şahadeti, müminlerin kalbinde asla sönmeyecek bir hararet yaratmıştır.'",
    relatedPersons: ["imam-huseyin"], // Even though not mock data created, slug refers conceptually
    relatedBooks: [9, 18],
    relatedArticles: ["kerbela-bir-direnis-okulu"],
    bibliography: [
      "Şeyh Abbas Kummi, Nefsü'l-Mehmum",
      "Murtaza Mutahhari, Aşura Kıyamı"
    ]
  }
];
