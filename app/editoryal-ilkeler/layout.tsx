import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Editoryal İlkeler | " + siteConfig.name,
  description: "KaimAlSakaleyn yayın politikaları, akademik standartları ve Ehl-i Beyt mektebinin temel ilkeleri.",
  openGraph: {
    title: "Editoryal İlkeler | " + siteConfig.name,
    description: "KaimAlSakaleyn yayın politikaları, akademik standartları ve Ehl-i Beyt mektebinin temel ilkeleri.",
    type: "website",
  },
};

export default function EditoryalIlkelerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
