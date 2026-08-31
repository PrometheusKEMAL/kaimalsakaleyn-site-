import { Metadata } from "next";
import { mockConcepts } from "@/lib/mock-data";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const concept = mockConcepts.find((c) => c.slug === slug);
  
  if (!concept) return {};

  return {
    title: `${concept.title} | İslami Kavramlar`,
    description: concept.definition,
    openGraph: {
      title: concept.title,
      description: concept.definition,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: concept.title,
      description: concept.definition,
    }
  };
}

export default async function KavramlarLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = mockConcepts.find((c) => c.slug === slug);

  return (
    <>
      {concept && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Thing",
              "name": concept.title,
              "description": concept.definition,
              "url": `${siteConfig.url}/kavramlar/${concept.slug}`
            })
          }}
        />
      )}
      {children}
    </>
  );
}
