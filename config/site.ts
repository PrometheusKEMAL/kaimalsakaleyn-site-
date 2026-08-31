export const siteConfig = {
  name: "KaimAlSakaleyn",
  nameFormatted: "KAIM AL-SAKALEYN",
  subtitle: "Kur'an ve Ehl-i Beyt'in İzinde",
  alternativeSubtitle: "Sekaleyn'in İzinde, Kâim'in Ahdinde",
  heroTitle: "İki Emanetin İzinde",
  heroDescription:
    "Kur'an'ın nuru ve Ehl-i Beyt'in rehberliğiyle hakikati anlamaya, ahlakı yaşamaya ve vaat edilen adalet çağını idrak etmeye çağrı.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kaimalsakaleyn.com",
  description:
    "KaimAlSakaleyn; Kur'an, Ehl-i Beyt, Sekaleyn anlayışı ekseninde içerikler barındıran modern bir dijital meclis, kütüphane ve topluluk platformudur.",
  keywords: [
    "KaimAlSakaleyn",
    "Sekaleyn",
    "Kur'an",
    "Ehl-i Beyt",
    "İmam Mehdi",
    "Kâim",
    "İslam",
    "maneviyat",
    "ilim",
    "irfan",
    "ahlak",
    "dijital meclis",
  ],
  locale: "tr_TR",
  footerQuote: "İki emanete sadakat, hakikate karşı sorumluluktur.",
  footerDisclaimer:
    "KaimAlSakaleyn; şiddeti, nefreti, istismarı ve baskıyı reddeder. Hiçbir kişi mutlak otorite değildir. Üyelik gönüllülük esasına dayanır.",
  socialMedia: {
    instagram: "",
    youtube: "",
    x: "",
    telegram: "",
    facebook: "",
    tiktok: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
