import * as fs from 'fs';
import * as path from 'path';

function walk(dir: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const allFiles = walk(path.join(process.cwd(), 'app')).concat(walk(path.join(process.cwd(), 'components')));
const validStaticRoutes = [
  '/', '/kutuphane', '/defterler', '/kavramlar', '/ehlibeyt', '/etkinlikler', 
  '/meclis', '/arama', '/hakkimizda', '/iletisim', '/giris', '/admin',
  '/yayin-ilkeleri', '/gizlilik', '/cerez-politikasi', '/kullanim-sartlari', '/kvkk', '/ilkeler', '/editoryal-ilkeler'
];

let brokenLinks: { file: string, link: string }[] = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Match <Link href="...">
  const regex = /<Link[^>]*href=["'](.*?)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const link = match[1];
    if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('#')) continue;
    
    // Ignore dynamic params with $ if not evaluated, e.g. /kutuphane/${book.slug}
    if (link.includes('${')) continue; 
    
    // Check if it has query params
    const basePath = link.split('?')[0];

    // If it's not a known static route, check if we have a dynamic route that matches
    if (!validStaticRoutes.includes(basePath)) {
       // Allow /admin/*
       if (basePath.startsWith('/admin/')) continue;
       // Allow things we can't easily static check but look fine
       if (basePath.startsWith('/kutuphane/') || basePath.startsWith('/defterler/') || basePath.startsWith('/kavramlar/') || basePath.startsWith('/ehlibeyt/')) continue;

       brokenLinks.push({ file, link });
    }
  }
}

// Just output to console to gather in the next step
if (brokenLinks.length > 0) {
  console.log("Broken Links Found:");
  brokenLinks.forEach(b => console.log(`- ${b.link} in ${b.file.replace(process.cwd(), '')}`));
} else {
  console.log("No broken links found!");
}
