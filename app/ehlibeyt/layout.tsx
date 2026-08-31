import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ehl-i Beyt | KaimAlSakaleyn',
  description: 'Ondört Masum ve Ehl-i Beyt imamlarının hayatı.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
