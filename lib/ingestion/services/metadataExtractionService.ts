import { ExtractedBookMetadata } from "../types";

/**
 * Service responsible for extracting structured data from raw HTML/JSON.
 * In a real-world scenario, this uses isomorphic-dompurify or regex patterns
 * specific to academic metadata formats.
 */
export class MetadataExtractionService {
  
  /**
   * Mock implementation of extraction logic for demonstration.
   * Extracts basic fields assuming standard meta tags or JSON-LD.
   */
  public extractFromHtml(html: string, url: string): Partial<ExtractedBookMetadata> {
    const data: Partial<ExtractedBookMetadata> = {
      source_urls: [url],
      keywords: [],
    };

    // Very naive regex extraction for demonstration purposes.
    // In production, use standard HTML parsers like Cheerio (Node) or DOMParser (Browser)
    
    // Extract Title (<title> or og:title)
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i) 
      || html.match(/<title>([^<]+)<\/title>/i);
    if (titleMatch) data.title = titleMatch[1].trim();

    // Extract Author (meta name="author")
    const authorMatch = html.match(/<meta name="author" content="([^"]+)"/i);
    if (authorMatch) data.author = authorMatch[1].trim();

    // Extract Description
    const descMatch = html.match(/<meta name="description" content="([^"]+)"/i)
      || html.match(/<meta property="og:description" content="([^"]+)"/i);
    if (descMatch) data.description = descMatch[1].trim();

    // Mock extraction of ISBN if present in text
    const isbnMatch = html.match(/ISBN:?\s*([0-9-X]{10,17})/i);
    if (isbnMatch) data.isbn = isbnMatch[1].trim();
    
    return data;
  }

  /**
   * Applies Arabic text normalization (removing harakat, normalizing alifs, etc.)
   * Used for 'arabic_title' or search fields, but original is kept.
   */
  public normalizeArabicText(text: string): string {
    return text
      .replace(/[\u064B-\u065F\u0670]/g, "") // Remove harakat/tashkeel
      .replace(/[إأآا]/g, "ا") // Normalize Alifs
      .replace(/ة/g, "ه") // Normalize Ta-Marbuta
      .replace(/ى/g, "ي"); // Normalize Alef Maksura
  }

  /**
   * Applies Turkish transliteration rules for canonical mapping
   */
  public transliterate(text: string): string {
    const rules: Record<string, string> = {
      "كافي": "el-Kâfî",
      "غيبة": "Gaybet",
      "ولاية": "Velâyet",
      "توحيد": "Tevhid"
    };
    return rules[text] || text;
  }
}

export const metadataExtractionService = new MetadataExtractionService();
