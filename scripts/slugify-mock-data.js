const fs = require('fs');
const path = require('path');

function slugify(text) {
  if (!text) return '';
  const charMap = { 'İ': 'i', 'I': 'i', 'ı': 'i', 'Ş': 's', 'ş': 's', 'Ğ': 'g', 'ğ': 'g', 'Ü': 'u', 'ü': 'u', 'Ö': 'o', 'ö': 'o', 'Ç': 'c', 'ç': 'c', 'â': 'a', 'Â': 'a', 'î': 'i', 'Î': 'i', 'û': 'u', 'Û': 'u' };
  const normalized = text.split('').map(char => charMap[char] || char).join('');
  return normalized.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/['"“”‘’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const files = ['lib/mock-data/index.ts', 'lib/mock-data/encyclopedia.ts'];
for (const file of files) {
  const p = path.join(process.cwd(), file);
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf8');
  
  content = content.replace(/slug:\s*["'](.*?)["']/g, (match, p1) => {
    return `slug: "${slugify(p1)}"`;
  });
  
  // also replace string literal slugs in arrays like relatedArticles: ["modern-dunyada-imamet"]
  content = content.replace(/relatedArticles:\s*\[(.*?)\]/g, (match, p1) => {
    const newItems = p1.split(',').map(item => {
      const match2 = item.match(/["'](.*?)["']/);
      if (match2) return `"${slugify(match2[1])}"`;
      return item;
    }).join(', ');
    return `relatedArticles: [${newItems}]`;
  });

  fs.writeFileSync(p, content);
}
console.log("Slugs normalized!");
