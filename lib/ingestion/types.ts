export type SourceTrustLevel = "A" | "B" | "C" | "D";

export type SourceType = 
  | "official_institution" 
  | "digital_library" 
  | "university" 
  | "publisher" 
  | "manuscript_library" 
  | "encyclopedia" 
  | "scholarly_database" 
  | "book_catalog" 
  | "open_archive" 
  | "personal_site" 
  | "unknown";

export type EntityType = "book" | "article" | "concept" | "scholar" | "hadith";

export type ReviewStatus = "discovered" | "parsed" | "needs_review" | "verified" | "approved" | "rejected" | "archived";

export interface SourceRegistry {
  id: string;
  name: string;
  domain: string;
  baseUrl: string;
  sourceType: SourceType;
  language?: string;
  country?: string;
  tradition?: string;
  reliabilityScore: number; // 0-100
  trustLevel: SourceTrustLevel;
  isOfficial: boolean;
  isPrimarySource: boolean;
  allowsMetadata: boolean;
  allowsFullText: boolean;
  allowsDownload: boolean;
  copyrightNotes?: string;
  robotsPolicy?: "respect" | "ignore";
  enabled: boolean;
  lastCheckedAt?: Date;
  notes?: string;
}

export interface ExtractedBookMetadata {
  title?: string;
  original_title?: string;
  arabic_title?: string;
  alternate_titles?: string[];
  author?: string;
  author_arabic?: string;
  death_year_author?: string;
  translator?: string;
  editor?: string;
  publisher?: string;
  publication_place?: string;
  publication_year?: string;
  edition?: string;
  volume_count?: number;
  page_count?: number;
  language?: string;
  original_language?: string;
  isbn?: string;
  subject?: string;
  category?: string;
  keywords?: string[];
  description?: string;
  table_of_contents?: string[];
  source_urls?: string[];
  pdf_url?: string | null; // Only if public domain/allowed
}

export interface IngestionQueueItem {
  id: string;
  entityType: EntityType;
  sourceUrl: string;
  sourceId: string;
  extractedData: Partial<ExtractedBookMetadata>;
  confidenceScore: number;
  status: ReviewStatus;
  duplicateOf?: string;
  conflictDetected: boolean;
  adminNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FieldProvenance {
  id: string;
  entityType: EntityType;
  entityId: string;
  fieldName: string;
  fieldValue: string | number | boolean;
  sourceId?: string;
  sourceUrl: string;
  confidence: number;
  retrievedAt: Date;
}
