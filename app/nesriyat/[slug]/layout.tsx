import { Metadata } from "next";
import { mockPublications } from "@/lib/mock-data";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const publication = mockPublications.find((p) => p.slug === slug);
  
  if (!publication) return {};

  return {
    title: `${publication.title} | Neşriyat`,
    description: publication.description,
    openGraph: {
      title: publication.title,
      description: publication.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: publication.title,
      description: publication.description,
    }
  };
}

export default async function NesriyatLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = mockPublications.find((p) => p.slug === slug);

  return (
    <>
      {publication && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": publication.title,
              "description": publication.description,
              "author": {
                "@type": "Organization",
                "name": siteConfig.name
              },
              "publisher": {
                "@type": "Organization",
                "name": siteConfig.name
              },
              "datePublished": publication.date,
              "url": `${siteConfig.url}/nesriyat/${publication.slug}`
            })
          }}
        />
      )}
      {children}
    </>
  );
}
