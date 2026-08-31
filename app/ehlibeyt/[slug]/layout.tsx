import { Metadata } from "next";
import { mockPersons } from "@/lib/mock-data";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const person = mockPersons.find((p) => p.slug === slug);
  
  if (!person) return {};

  return {
    title: `${person.name} | Ehl-i Beyt`,
    description: person.life.substring(0, 160) + '...',
    openGraph: {
      title: person.name,
      description: person.life.substring(0, 160) + '...',
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: person.name,
      description: person.life.substring(0, 160) + '...',
    }
  };
}

export default async function EhlibeytLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = mockPersons.find((p) => p.slug === slug);

  return (
    <>
      {person && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": person.name,
              "alternateName": [person.title, ...person.laqabs],
              "description": person.life.substring(0, 160),
              "url": `${siteConfig.url}/ehlibeyt/${person.slug}`
            })
          }}
        />
      )}
      {children}
    </>
  );
}
