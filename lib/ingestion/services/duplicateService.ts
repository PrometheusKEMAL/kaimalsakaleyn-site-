import { ExtractedBookMetadata } from "../types";

export class DuplicateService {
  /**
   * Calculates a weighted similarity score between two book metadata objects.
   * Weighting algorithm logic:
   * - ISBN match: 100% confidence
   * - Arabic Title match + Author match: 90%
   * - Transliterated Title + Publisher + Year: 80%
   * 
   * Returns a score between 0 and 100.
   * If >= 85, considered a "possible_duplicate".
   */
  public calculateSimilarity(
    sourceA: Partial<ExtractedBookMetadata>,
    sourceB: Partial<ExtractedBookMetadata>
  ): number {
    let score = 0;

    // Highest signal: ISBN
    if (sourceA.isbn && sourceB.isbn && sourceA.isbn === sourceB.isbn) {
      return 100;
    }

    // Very strong signal: Arabic Title
    if (
      sourceA.arabic_title && 
      sourceB.arabic_title && 
      sourceA.arabic_title === sourceB.arabic_title
    ) {
      score += 45;
    } else if (
      sourceA.title && 
      sourceB.title && 
      sourceA.title.toLowerCase() === sourceB.title.toLowerCase()
    ) {
      // Normal title match
      score += 40;
    }

    // Strong signal: Author
    if (
      sourceA.author && 
      sourceB.author && 
      sourceA.author.toLowerCase() === sourceB.author.toLowerCase()
    ) {
      score += 30;
    }

    // Medium signals: Publisher & Year
    if (sourceA.publisher && sourceB.publisher && sourceA.publisher === sourceB.publisher) {
      score += 15;
    }

    if (sourceA.publication_year && sourceB.publication_year && sourceA.publication_year === sourceB.publication_year) {
      score += 10;
    }

    return Math.min(score, 100);
  }

  public isPossibleDuplicate(score: number): boolean {
    return score >= 85;
  }
}

export const duplicateService = new DuplicateService();
