import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mehdeviyet Araştırmaları | KaimAlSakaleyn",
  description: "İntizar, gaybet ve zuhur üzerine incelemeler."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
