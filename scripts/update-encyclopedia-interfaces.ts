import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'lib/mock-data/encyclopedia.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Person interface
content = content.replace(/export interface Person \{[\s\S]*?\}/, `export interface Person {
  slug: string;
  name: string;
  title: string;
  laqabs: string[];
  kunyas?: string[];
  birth: string;
  birthPlace?: string;
  death?: string;
  occultationStatus?: string;
  father: string;
  mother: string;
  imamatePeriod?: string;
  politicalContext?: string;
  legacy?: string;
  moralTeachings?: string;
  teachers?: string[];
  students?: string[];
  relatedBooks: number[];
  relatedArticles: string[];
  relatedPersons: string[];
  bio: string;
  life?: string;
  chronology?: Array<{ year: string; event: string }>;
  quotes?: Array<{ text: string; source: string }>;
  aiGenerated: boolean;
  editorialStatus: 'draft' | 'researching' | 'source_review' | 'editor_review' | 'approved' | 'published' | 'archived';
}`);

// Add missing fields to existing mockPersons
content = content.replace(/bio: (.*)\n\s*\}/g, (match, bioText) => {
  return `bio: ${bioText},\n    aiGenerated: true,\n    editorialStatus: 'draft'\n  }`;
});

// Replace Concept interface
content = content.replace(/export interface Concept \{[\s\S]*?\}/, `export interface Concept {
  slug: string;
  title: string;
  arabicTitle?: string;
  persianTitle?: string;
  shortDefinition?: string;
  definition: string;
  etymology: string;
  quranicUsage: string;
  hadithUsage?: string;
  relatedBooks: number[];
  relatedArticles: string[];
  relatedPersons: string[];
  bibliography?: string[];
  aiGenerated: boolean;
  editorialStatus: 'draft' | 'researching' | 'source_review' | 'editor_review' | 'approved' | 'published' | 'archived';
}`);

// Add missing fields to existing mockConcepts
content = content.replace(/relatedPersons: (.*)\n\s*\}/g, (match, relatedPersonsText) => {
  return `relatedPersons: ${relatedPersonsText},\n    aiGenerated: true,\n    editorialStatus: 'draft'\n  }`;
});

fs.writeFileSync(filePath, content);
console.log('Updated encyclopedia.ts');
