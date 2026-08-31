import React from "react";
import Link from "next/link";
import { mockPersons, mockConcepts, mockBooks, mockArticles } from "@/lib/mock-data";

import sanitizeHtml from 'sanitize-html';

interface EntityLinkerProps {
  content: string;
}

export function EntityLinker({ content }: EntityLinkerProps) {
  // Build a dictionary of entities from our knowledge base
  const entities: { name: string; url: string }[] = [];

  mockPersons.forEach(person => {
    entities.push({ name: person.name, url: `/ehlibeyt/${person.slug}` });
    person.laqabs?.forEach(laqab => {
      entities.push({ name: laqab, url: `/ehlibeyt/${person.slug}` });
    });
  });

  mockConcepts.forEach(concept => {
    entities.push({ name: concept.title, url: `/kavramlar/${concept.slug}` });
  });

  mockBooks.forEach(book => {
    entities.push({ name: book.title, url: `/kutuphane/${book.slug}` });
  });

  mockArticles.forEach(article => {
    entities.push({ name: article.title, url: `/defterler/${article.slug}` });
  });

  // Sort entities by length descending to match longer phrases first (e.g., "İmam Ali" before "Ali")
  entities.sort((a, b) => b.name.length - a.name.length);

  let processedHtml = content;
  const linkedUrls = new Set<string>();

  entities.forEach(entity => {
    const escapedName = entity.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?![^<]*>)(^|\\s|\\b)(${escapedName})(?=\\s|\\b|[.,!?;:])`, 'gi');
    
    if (!linkedUrls.has(entity.url)) {
      if (regex.test(processedHtml)) {
        processedHtml = processedHtml.replace(regex, `$1<a href="${entity.url}" class="text-antique-gold underline decoration-antique-gold/30 underline-offset-4 hover:decoration-antique-gold transition-colors">$2</a>`);
        linkedUrls.add(entity.url);
      }
    }
  });

  // Sanitize the final HTML
  const sanitizedHtml = sanitizeHtml(processedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      'a': ['href', 'class', 'target', 'rel']
    }
  });

  return (
    <div 
      className="entity-linked-content"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }} 
    />
  );
}
