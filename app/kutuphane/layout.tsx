import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kütüphane | KaimAlSakaleyn',
  description: 'İslami ve Şii kaynak eserler kütüphanesi.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
