export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kütüphane", href: "/kutuphane" },
  { label: "Ansiklopedi", href: "/kavramlar" },
  { label: "Ehl-i Beyt", href: "/ehlibeyt" },
  { label: "Sekaleyn Defterleri", href: "/defterler" },
  { 
    label: "Keşfet", 
    href: "#",
    children: [
      { label: "Kur'an", href: "/kutuphane?q=Kuran" },
      { label: "Âlimler", href: "/alimler" },
      { label: "Araştırma Dosyaları", href: "/dosyalar" },
      { label: "Neşriyat", href: "/nesriyat" },
      { label: "Etkinlikler", href: "/etkinlikler" }
    ]
  }
];

export const footerNavigation = {
  arastirma: [
    { label: "Kütüphane", href: "/kutuphane" },
    { label: "Ansiklopedi", href: "/kavramlar" },
    { label: "Sekaleyn Defterleri", href: "/defterler" },
    { label: "Ehl-i Beyt Biyografileri", href: "/ehlibeyt" },
    { label: "Kur'an ve Tefsir", href: "/kutuphane?q=Kuran" },
    { label: "Şiî Âlimler", href: "/alimler" },
  ],
  kurumsal: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Akademik Standartlar", href: "/akademik-standartlar" },
    { label: "Üye Girişi", href: "/giris" },
    { label: "İletişim", href: "/iletisim" },
  ],
  hukuki: [
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
    { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
  ],
};
