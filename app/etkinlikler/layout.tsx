import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Etkinlikler | KaimAlSakaleyn',
  description: 'Sohbet, konferans ve okuma programları takvimi.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
