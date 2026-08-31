import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kavramlar Ansiklopedisi | KaimAlSakaleyn',
  description: 'İslami kavramlar ve terimler sözlüğü.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
