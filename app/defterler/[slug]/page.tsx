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
import { ArticleReader } from "@/components/ui/ArticleReader";
import { VersionHistory } from "@/components/ui/VersionHistory";

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

  const relatedArticles = mockArticles.filter(a => (article.relatedArticles || []).includes(a.slug));
  const relatedBooks = mockBooks.filter(b => (article.relatedBooks || []).includes(b.id));

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
      <div className="max-w-6xl mx-auto px-6">
        <ArticleReader>
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10 font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/defterler" className="hover:text-primary transition-colors">Sekaleyn Defterleri</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground truncate max-w-[200px]">{article.category}</span>
        </div>

        {/* Header (Metadata & Title) */}
        <header className="mb-16">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] tracking-wider uppercase text-primary">
              {article.category}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-[1.1] text-balance">
            {article.title}
          </h1>
          {article.subtitle && (
            <h2 className="font-serif text-xl md:text-2xl text-muted-foreground mb-10 italic font-light">
              {article.subtitle}
            </h2>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-x-8 gap-y-4 py-6 border-y border-border/40">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <User className="w-4 h-4 text-primary/60" />
              <span><span className="text-muted-foreground/60 text-xs uppercase tracking-wider block mb-0.5">Yazar</span>{article.author}</span>
            </div>
            {article.editor && (
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Edit3 className="w-4 h-4 text-primary/60" />
                <span><span className="text-muted-foreground/60 text-xs uppercase tracking-wider block mb-0.5">Editör</span>{article.editor}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Calendar className="w-4 h-4 text-primary/60" />
              <span><span className="text-muted-foreground/60 text-xs uppercase tracking-wider block mb-0.5">Yayın Tarihi</span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Clock className="w-4 h-4 text-primary/60" />
              <span><span className="text-muted-foreground/60 text-xs uppercase tracking-wider block mb-0.5">Okuma Süresi</span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Header Image */}
        {article.image && (
          <div className="w-full aspect-video md:aspect-[21/9] rounded-sm overflow-hidden mb-16 border border-border/50 bg-muted/30 shadow-sm">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none font-light text-muted-foreground/90 leading-relaxed mb-20 prose-headings:font-serif prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-blockquote:border-l-primary/50 prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic">
          <EntityLinker content={article.content || '<p>' + article.summary + '</p>'} footnotes={article.footnotes || []} />
        </article>

        <hr className="border-border/30 mb-12" />

        {/* Footer (Tags, Action Buttons) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-primary/60 mr-2" />
            {(article.tags || []).map((tag) => (
              <span key={tag} className="px-3 py-1 bg-card border border-border/50 rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 cursor-pointer transition-colors">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded border border-border/50 text-sm text-muted-foreground hover:bg-card hover:text-foreground transition-all group">
              <Share2 className="w-4 h-4 group-hover:text-primary transition-colors" /> Paylaş
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded border border-border/50 text-sm text-muted-foreground hover:bg-card hover:text-foreground transition-all group">
              <FileText className="w-4 h-4 group-hover:text-primary transition-colors" /> PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded border border-destructive/30 text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all group">
              <AlertCircle className="w-4 h-4" /> Düzeltme Bildir
            </button>
          </div>
        </div>

        {/* Academic Footer (Version History, Footnotes & Bibliography) */}
        
        <div className="mb-16">
          <VersionHistory 
            entries={(article as any).versionHistory || [
              { id: "v1", date: "10 Mart 2024", action: "İlk Taslak Oluşturuldu", user: "Ahmet Yılmaz", role: "Yazar", status: "draft" },
              { id: "v2", date: "12 Mart 2024", action: "Kaynak Taraması Yapıldı", user: "Hasan Hoca", role: "Tahkik Kurulu", notes: "Sekaleyn hadisinin ravi zinciri kontrol edildi.", status: "source_review" },
              { id: "v3", date: "15 Mart 2024", action: "Makale Yayınlandı", user: "Kemal Demir", role: "Baş Editör", status: "published" }
            ]} 
          />
        </div>

        {((article.footnotes && article.footnotes.length > 0) || (article.bibliography && article.bibliography.length > 0)) && (
          <div className="mt-16 bg-card/30 p-8 rounded-xl border border-border/20">
          <h3 className="font-serif text-2xl mb-6 text-primary flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Kaynakça ve Notlar
          </h3>
          <div className="space-y-6">
            {(article.bibliography && article.bibliography.length > 0) && (
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Kaynakça</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground/80 font-light">
                  {article.bibliography.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {(article.footnotes && article.footnotes.length > 0) && (
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Dipnotlar</h4>
                <ul className="space-y-2 text-sm text-muted-foreground/80 font-light">
                  {article.footnotes.map((note) => (
                    <li key={note.id} className="flex gap-2">
                      <span className="text-primary font-medium">[{note.id}]</span>
                      <span className="leading-relaxed">{note.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        )}

        {/* Related Content */}
        {(relatedArticles.length > 0 || relatedBooks.length > 0) && (
          <div className="border-t border-border/30 pt-16 grid md:grid-cols-2 gap-12">
            
            {relatedArticles.length > 0 && (
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> İlgili Yazılar
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map(rel => (
                    <Link href={`/defterler/${rel.slug}`} key={rel.id} className="block group">
                      <div className="p-4 rounded-xl border border-border/20 bg-card/20 hover:bg-card/50 hover:border-primary/30 transition-all">
                        <span className="text-[10px] uppercase tracking-wider text-primary/60 block mb-1">{rel.category}</span>
                        <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{rel.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedBooks.length > 0 && (
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
                  <Book className="w-5 h-5 text-primary" /> İlgili Kitaplar
                </h3>
                <div className="space-y-4">
                  {relatedBooks.map(book => (
                    <Link href="/kutuphane" key={book.id} className="block group">
                      <div className="p-4 rounded-xl border border-border/20 bg-card/20 hover:bg-card/50 hover:border-primary/30 transition-all flex items-start gap-4">
                        <div className="w-12 h-16 bg-primary/10 rounded flex items-center justify-center shrink-0">
                          <Book className="w-6 h-6 text-primary/50" />
                        </div>
                        <div>
                          <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{book.title}</h4>
                          <span className="text-sm text-muted-foreground">{book.author}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
        </ArticleReader>
        
      </div>
    </div>
  );
}
