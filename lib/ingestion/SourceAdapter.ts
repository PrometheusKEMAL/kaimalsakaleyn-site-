import { ExtractedBookMetadata } from "./types";

/**
 * Common interface for all source site adapters.
 * Prevents writing custom hardcoded scraping everywhere.
 */
export interface SourceAdapter {
  /** Identifier of the adapter (e.g. 'shia_library_org') */
  id: string;

  /** Domain this adapter handles */
  domain: string;

  /** Checks if the adapter can handle the given URL */
  canHandle(url: string): boolean;

  /** 
   * Given a search query or a category URL, discover entity URLs.
   * Useful for the background discovery jobs.
   */
  discover(queryOrUrl: string): Promise<string[]>;

  /**
   * Fetches the HTML or JSON from the source.
   * Handles rate-limiting and caching under the hood.
   */
  fetch(url: string): Promise<string>;

  /**
   * Parses the raw content and extracts structured metadata.
   */
  parse(rawContent: string, url: string): Promise<Partial<ExtractedBookMetadata>>;

  /**
   * Normalizes the extracted data (e.g. converting Arabic numbers, transliterating titles).
   */
  normalize(data: Partial<ExtractedBookMetadata>): Partial<ExtractedBookMetadata>;

  /**
   * Determines copyright status based on the site's rules and the parsed data.
   */
  checkRights(data: Partial<ExtractedBookMetadata>): "public_domain" | "open_license" | "permission_granted" | "copyrighted" | "unknown";
}
