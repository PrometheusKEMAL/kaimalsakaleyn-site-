import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Edit3,
  Tag,
  Share2,
  FileText,
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Book,
  ChevronRight
} from "lucide-react";
import { mockArticles, mockBooks } from "@/lib/mock-data";
import { siteConfig } from "@/config/site";

import { EntityLinker } from "@/components/ui/EntityLinker";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug);
  
  if (!article) return {};

  return {
    title: `${article.title} | Sekaleyn Defterleri`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      authors: [article.author],
      publishedTime: article.publishedAt,
      modifiedTime: article.lastUpdated,
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    }
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = mockArticles.filter(a => article.relatedArticles.includes(a.slug));
  const relatedBooks = mockBooks.filter(b => article.relatedBooks.includes(b.id));

  return (
    <div className="pt-24 pb-section-lg bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": siteConfig.url },
                { "@type": "ListItem", "position": 2, "name": "Sekaleyn Defterleri", "item": `${siteConfig.url}/defterler` },
                { "@type": "ListItem", "position": 3, "name": article.title, "item": `${siteConfig.url}/defterler/${article.slug}` }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": article.title,
              "description": article.summary,
              "author": {
                "@type": "Person",
                "name": article.author
              },
              "publisher": {
                "@type": "Organization",
                "name": siteConfig.name,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteConfig.url}/logo.png`
                }
              },
              "datePublished": article.publishedAt,
              "dateModified": article.lastUpdated || article.publishedAt,
              "url": `${siteConfig.url}/defterler/${article.slug}`
            }
          ])
        }}
      />
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-secondary-text mb-10 font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-antique-gold transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/defterler" className="hover:text-antique-gold transition-colors">Sekaleyn Defterleri</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary-text truncate max-w-[200px]">{article.category}</span>
        </div>

        {/* Header (Metadata & Title) */}
        <header className="mb-16">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-antique-gold/10 border border-antique-gold/20 rounded text-[10px] tracking-wider uppercase text-antique-gold">
              {article.category}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-text mb-4 leading-[1.1] text-balance">
            {article.title}
          </h1>
          {article.subtitle && (
            <h2 className="font-serif text-xl md:text-2xl text-secondary-text mb-10 italic font-light">
              {article.subtitle}
            </h2>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-x-8 gap-y-4 py-6 border-y border-gold-border/40">
            <div className="flex items-center gap-2 text-sm text-primary-text">
              <User className="w-4 h-4 text-antique-gold/60" />
              <span><span className="text-secondary-text/60 text-xs uppercase tracking-wider block mb-0.5">Yazar</span>{article.author}</span>
            </div>
            {article.editor && (
              <div className="flex items-center gap-2 text-sm text-primary-text">
                <Edit3 className="w-4 h-4 text-antique-gold/60" />
                <span><span className="text-secondary-text/60 text-xs uppercase tracking-wider block mb-0.5">Editör</span>{article.editor}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-primary-text">
              <Calendar className="w-4 h-4 text-antique-gold/60" />
              <span><span className="text-secondary-text/60 text-xs uppercase tracking-wider block mb-0.5">Yayın Tarihi</span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-text">
              <Clock className="w-4 h-4 text-antique-gold/60" />
              <span><span className="text-secondary-text/60 text-xs uppercase tracking-wider block mb-0.5">Okuma Süresi</span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none font-light text-secondary-text/90 leading-relaxed mb-20 prose-headings:font-serif prose-headings:text-primary-text prose-a:text-antique-gold hover:prose-a:text-antique-gold/80 prose-strong:text-primary-text prose-blockquote:border-l-antique-gold/50 prose-blockquote:bg-antique-gold/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic">
          <EntityLinker content={article.content || '<p>' + article.summary + '</p>'} />
        </article>

        <hr className="border-gold-border/30 mb-12" />

        {/* Footer (Tags, Action Buttons) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-antique-gold/60 mr-2" />
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-card-bg border border-gold-border/50 rounded-full text-xs text-secondary-text hover:text-primary-text hover:border-antique-gold/50 cursor-pointer transition-colors">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded border border-gold-border/50 text-sm text-secondary-text hover:bg-card-bg hover:text-primary-text transition-all group">
              <Share2 className="w-4 h-4 group-hover:text-antique-gold transition-colors" /> Paylaş
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded border border-gold-border/50 text-sm text-secondary-text hover:bg-card-bg hover:text-primary-text transition-all group">
              <FileText className="w-4 h-4 group-hover:text-antique-gold transition-colors" /> PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded border border-red-900/30 text-sm text-secondary-text hover:bg-red-900/10 hover:text-red-400 transition-all group">
              <AlertCircle className="w-4 h-4" /> Düzeltme Bildir
            </button>
          </div>
        </div>

        {/* Academic Footer (Footnotes & Bibliography) */}
        {(article.footnotes.length > 0 || article.bibliography.length > 0) && (
          <div className="bg-card-bg/30 border border-gold-border/30 rounded-2xl p-8 mb-16">
            {article.footnotes.length > 0 && (
              <div className="mb-8">
                <h3 className="font-serif text-lg text-primary-text mb-4 border-b border-gold-border/20 pb-2">Dipnotlar</h3>
                <ol className="list-decimal list-inside text-sm text-secondary-text/80 space-y-2">
                  {article.footnotes.map((fn) => (
                    <li key={fn.id} id={`fn-${fn.id}`}>{fn.text}</li>
                  ))}
                </ol>
              </div>
            )}

            {article.bibliography.length > 0 && (
              <div>
                <h3 className="font-serif text-lg text-primary-text mb-4 border-b border-gold-border/20 pb-2">Kaynakça</h3>
                <ul className="list-disc list-inside text-sm text-secondary-text/80 space-y-2">
                  {article.bibliography.map((bib, idx) => (
                    <li key={idx}>{bib}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Related Content */}
        {(relatedArticles.length > 0 || relatedBooks.length > 0) && (
          <div className="border-t border-gold-border/30 pt-16 grid md:grid-cols-2 gap-12">
            
            {relatedArticles.length > 0 && (
              <div>
                <h3 className="font-serif text-2xl text-primary-text mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-antique-gold" /> İlgili Yazılar
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map(rel => (
                    <Link href={`/defterler/${rel.slug}`} key={rel.id} className="block group">
                      <div className="p-4 rounded-xl border border-gold-border/20 bg-card-bg/20 hover:bg-card-bg/50 hover:border-antique-gold/30 transition-all">
                        <span className="text-[10px] uppercase tracking-wider text-antique-gold/60 block mb-1">{rel.category}</span>
                        <h4 className="font-serif text-lg text-primary-text group-hover:text-antique-gold transition-colors">{rel.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedBooks.length > 0 && (
              <div>
                <h3 className="font-serif text-2xl text-primary-text mb-6 flex items-center gap-2">
                  <Book className="w-5 h-5 text-antique-gold" /> İlgili Kitaplar
                </h3>
                <div className="space-y-4">
                  {relatedBooks.map(book => (
                    <Link href="/kutuphane" key={book.id} className="block group">
                      <div className="p-4 rounded-xl border border-gold-border/20 bg-card-bg/20 hover:bg-card-bg/50 hover:border-antique-gold/30 transition-all flex items-start gap-4">
                        <div className="w-12 h-16 bg-antique-gold/10 rounded flex items-center justify-center shrink-0">
                          <Book className="w-6 h-6 text-antique-gold/50" />
                        </div>
                        <div>
                          <h4 className="font-serif text-lg text-primary-text group-hover:text-antique-gold transition-colors">{book.title}</h4>
                          <span className="text-sm text-secondary-text">{book.author}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
        
      </div>
    </div>
  );
}
