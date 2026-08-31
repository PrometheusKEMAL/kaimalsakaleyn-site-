export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İlkeler", href: "/ilkeler" },
  { label: "Ehl-i Beyt", href: "/ehlibeyt" },
  { label: "Kavramlar", href: "/kavramlar" },
  { label: "Sekaleyn Defterleri", href: "/defterler" },
  { label: "Kütüphane", href: "/kutuphane" },
  { label: "Neşriyat", href: "/nesriyat" },
  { label: "Etkinlikler", href: "/etkinlikler" },
  { label: "Meclis", href: "/meclis" },
];

export const footerNavigation = {
  kesfet: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İlkeler", href: "/ilkeler" },
    { label: "Ehl-i Beyt", href: "/ehlibeyt" },
    { label: "Kavramlar", href: "/kavramlar" },
    { label: "Sekaleyn Defterleri", href: "/defterler" },
    { label: "Kütüphane", href: "/kutuphane" },
    { label: "Neşriyat", href: "/nesriyat" },
    { label: "Etkinlikler", href: "/etkinlikler" },
  ],
  meclis: [
    { label: "Üye Girişi", href: "/giris" },
    { label: "Davet Usulü", href: "/hakkimizda#davet" },
    { label: "İletişim", href: "/iletisim" },
  ],
  hukuki: [
    { label: "Editoryal İlkeler", href: "/editoryal-ilkeler" },
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
    { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
  ],
};
