import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nehcü'l-Belâğa | KaimAlSakaleyn",
  description: "İmam Ali'nin (a.s) hutbeleri, mektupları ve hikmetleri."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
