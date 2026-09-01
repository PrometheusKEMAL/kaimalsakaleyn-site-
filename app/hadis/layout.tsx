import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hadis Veritabanı | KaimAlSakaleyn",
  description: "Şiî hadis külliyatı ve sened araştırmaları."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
