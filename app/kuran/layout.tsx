import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kur'an Araştırma Merkezi | KaimAlSakaleyn",
  description: "Ayetler, tefsirler ve Kur'an ilimleri."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
