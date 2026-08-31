import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sekaleyn Defterleri | KaimAlSakaleyn',
  description: "Kur'an ve Ehl-i Beyt ekseninde araştırma makaleleri."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
