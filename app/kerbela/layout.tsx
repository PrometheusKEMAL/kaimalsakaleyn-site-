import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kerbelâ Dosyası | KaimAlSakaleyn",
  description: "Aşura, Erbain ve Kerbelâ şehitleri tarihi."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
