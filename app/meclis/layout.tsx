import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sekaleyn Meclisi | KaimAlSakaleyn',
  description: 'İrfani ve ahlaki sohbetler meclisi.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
