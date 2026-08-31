import { SourceRegistry, ExtractedBookMetadata, IngestionQueueItem } from "../types";
import { duplicateService } from "./duplicateService";
import { verificationService } from "./verificationService";

/**
 * Orchestrator service for the Ingestion Pipeline.
 * Flow: fetch -> extract -> normalize -> verify -> duplicate check -> queue for admin
 */
export class IngestionService {
  /**
   * Main entry point for ingesting a URL.
   */
  public async ingestUrl(url: string, source: SourceRegistry): Promise<Partial<IngestionQueueItem>> {
    // 1. Fetch & Extract (Mocked for demonstration, would use SourceAdapter in real implementation)
    // const rawHtml = await fetch(url).then(r => r.text());
    // const extractedData = metadataExtractionService.extractFromHtml(rawHtml, url);
    
    // Mock extraction
    const extractedData: Partial<ExtractedBookMetadata> = {
      title: "Kitâbü'l-Gaybe",
      arabic_title: "كتاب الغيبة",
      author: "Muhammed b. İbrahim en-Nu'mânî",
      source_urls: [url],
      publication_year: "1997",
      publisher: "Ensar Yayıncılık", 
    };

    // 2. Normalize
    // data.arabic_title = metadataExtractionService.normalizeArabicText(data.arabic_title);
    
    // 3. Verify
    const confidenceScore = verificationService.generateScore([source]);

    // 4. Duplicate Check (mock against an existing item in DB)
    const existingDbItem: Partial<ExtractedBookMetadata> = {
      title: "Kitabul Gaybe",
      arabic_title: "كتاب الغيبة",
      author: "Numani"
    };

    const simScore = duplicateService.calculateSimilarity(extractedData, existingDbItem);
    const isDuplicate = duplicateService.isPossibleDuplicate(simScore);

    // 5. Build Queue Item
    const queueItem: Partial<IngestionQueueItem> = {
      id: crypto.randomUUID(),
      entityType: "book",
      sourceUrl: url,
      sourceId: source.id,
      extractedData,
      confidenceScore,
      status: "needs_review",
      conflictDetected: isDuplicate, // If duplicate or conflicts with existing, flag it
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return queueItem;
  }
}

export const ingestionService = new IngestionService();
