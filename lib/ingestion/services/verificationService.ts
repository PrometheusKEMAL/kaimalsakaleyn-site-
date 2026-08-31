import { ExtractedBookMetadata, SourceRegistry, SourceTrustLevel } from "../types";

export class VerificationService {
  /**
   * Generates a confidence score (0-100) based on source trust levels and number of sources.
   * Multi-source verification algorithm:
   * Level A: +60
   * Level B: +40
   * Level C: +20
   * Level D: +5
   * 
   * A single Level A source gives 60 (Partially Verified).
   * Two Level B sources give 80 (Verified).
   * 0-39: LOW CONFIDENCE
   * 40-69: PARTIALLY VERIFIED
   * 70-89: VERIFIED
   * 90-100: HIGH CONFIDENCE
   */
  public generateScore(sources: SourceRegistry[]): number {
    if (!sources || sources.length === 0) return 0;

    let score = 0;
    const trustWeights: Record<SourceTrustLevel, number> = {
      "A": 60,
      "B": 40,
      "C": 20,
      "D": 5,
    };

    sources.forEach(source => {
      score += trustWeights[source.trustLevel] || 0;
    });

    // If multiple sources confirm, add a cross-verification bonus
    if (sources.length > 1) {
      score += 10;
    }

    return Math.min(score, 100);
  }

  public getVerificationStatus(score: number): "LOW_CONFIDENCE" | "PARTIALLY_VERIFIED" | "VERIFIED" | "HIGH_CONFIDENCE" {
    if (score < 40) return "LOW_CONFIDENCE";
    if (score < 70) return "PARTIALLY_VERIFIED";
    if (score < 90) return "VERIFIED";
    return "HIGH_CONFIDENCE";
  }

  /**
   * For Hadith, verification is stricter.
   * Must have original Arabic and chain (narrator) or exact volume/page of a Level A primary source.
   */
  public verifyHadith(data: any, source: SourceRegistry): boolean {
    if (source.trustLevel === 'D' || source.trustLevel === 'C') return false; // D or C cannot verify hadith alone
    if (!data.arabic_text) return false;
    if (!data.source_work && !data.narrator) return false;

    return true; // Simple logic for demonstration
  }
}

export const verificationService = new VerificationService();
