"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/config/site";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": siteConfig.url
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `${siteConfig.url}${item.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground flex-wrap">
          <li>
            <Link 
              href="/" 
              className="flex items-center hover:text-foreground transition-colors"
              aria-label="Ana Sayfa"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={item.href} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 opacity-50" />
                {isLast ? (
                  <span className="text-foreground font-medium line-clamp-1" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="hover:text-foreground transition-colors line-clamp-1"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
