import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sahife-i Seccadiye | KaimAlSakaleyn",
  description: "İmam Zeynelabidin'in (a.s) dua ve münacatları."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
