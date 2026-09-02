import type { Metadata, Viewport } from "next";
import { Inter, Cinzel, Noto_Naskh_Arabic } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.subtitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords as unknown as string[],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.subtitle}`,
    description: siteConfig.description,
    locale: siteConfig.locale,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.subtitle}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${inter.variable} ${cinzel.variable} ${notoNaskhArabic.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": siteConfig.name,
                "url": siteConfig.url,
                "logo": `${siteConfig.url}/logo.png`,
                "sameAs": [
                  siteConfig.socialMedia.x,
                  siteConfig.socialMedia.instagram,
                  siteConfig.socialMedia.youtube
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": siteConfig.name,
                "url": siteConfig.url,
                "description": siteConfig.description,
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${siteConfig.url}/arama?q={search_term_string}`,
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />

        <Header />

        <main className="flex-1 relative z-10">{children}</main>

        <Footer />
        
        <AudioPlayer />
      </body>
    </html>
  );
}
