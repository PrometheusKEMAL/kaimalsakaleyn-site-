import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Şiî Âlimler | KaimAlSakaleyn",
  description: "Geçmişten günümüze önde gelen Şiî uleması."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
