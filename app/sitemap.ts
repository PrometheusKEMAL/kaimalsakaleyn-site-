import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { mockArticles, mockBooks, mockPersons, mockConcepts, mockPublications } from '@/lib/mock-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = [
    '',
    '/defterler',
    '/kutuphane',
    '/ehlibeyt',
    '/kavramlar',
    '/nesriyat',
    '/etkinlikler',
    '/meclis',
    '/hakkimizda',
    '/iletisim',
    '/ilkeler',
    '/editoryal-ilkeler',
    '/kullanim-sartlari',
    '/gizlilik',
    '/kvkk',
    '/cerez-politikasi'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic content
  const articles = mockArticles.map((item) => ({
    url: `${baseUrl}/defterler/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const books = mockBooks.map((item) => ({
    url: `${baseUrl}/kutuphane/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const persons = mockPersons.map((item) => ({
    url: `${baseUrl}/ehlibeyt/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const concepts = mockConcepts.map((item) => ({
    url: `${baseUrl}/kavramlar/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const publications = mockPublications.map((item) => ({
    url: `${baseUrl}/nesriyat/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...articles, ...books, ...persons, ...concepts, ...publications];
}
