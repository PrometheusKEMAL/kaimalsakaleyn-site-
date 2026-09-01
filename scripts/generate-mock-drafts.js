import * as fs from 'fs';
import * as path from 'path';

const conceptsList = [
  "Tevhid", "Adalet", "Nübüvvet", "İmamet", "Mead", "Velayet", "Velayet-i Tekvini", "Velayet-i Teşrii", 
  "İsmet", "Şefaat", "Tevessül", "Takiyye", "Beda", "Recat", "Gaybet", "İntizar", "Zuhur", "Mehdeviyet", 
  "Gaybet-i Suğra", "Gaybet-i Kübra", "Niyabet-i Hassa", "Niyabet-i Amme", "Sefirler", "Süfyani", "Yemani", 
  "Deccal", "313", "Gadir", "Sekaleyn", "Mübahele", "Fadak", "Ehl-i Beyt", "Âl-i Aba", "Hadis-i Kisa", 
  "Kerbelâ", "Aşura", "Erbain", "Ziyaret", "Ziyaret-i Aşura", "Şehadet", "Mersiye", "Azadarlık", 
  "Nehcü'l-Belâğa", "Sahife-i Seccadiye", "Kütüb-i Erbaa", "el-Kafi", "Men La Yahduruhu'l-Fakih", 
  "Tehzibü'l-Ahkam", "el-İstibsar", "Usul-i Din", "Füru-i Din", "Marifetullah", "Huccet", "Vasi", "İmam", 
  "Masum", "Takva", "Sabır", "Zühd", "İhlas", "Dua", "Münacat", "Tövbe", "Marifet", "İrfan", "Akl", 
  "Nefs", "Kalp", "Adalet", "Mazlumiyet"
];

// Extend with dummy names up to 100 if needed, but 70 is enough for a draft representation.

const scholarsList = [
  "Şeyh Kuleyni", "Şeyh Saduk", "Şeyh Müfid", "Şeyh Tusi", "Şerif Murtaza", "Şerif Radi", "Allame Hilli", 
  "Muhakkik Hilli", "Allame Meclisi", "Şeyh Hurr Amili", "Allame Tabatabai", "Ayetullah Hoyi", "İmam Humeyni", 
  "Şehid Mutahhari", "Şehid Sadr", "Feyz Kaşani", "Mir Damad", "Molla Sadra", "Seyyid İbn Tavus", "Şehid-i Evvel",
  "Şehid-i Sani", "Şeyh Bahai", "Seyyid Ebu'l Kasım el-Hoyi", "Ayetullah Sistani", "Ayetullah Burucerdi"
];

function slugify(text) {
  return text.toLowerCase()
    .replace(/[ğg]/g, 'g')
    .replace(/[üu]/g, 'u')
    .replace(/[şs]/g, 's')
    .replace(/[ıiî]/g, 'i')
    .replace(/[öo]/g, 'o')
    .replace(/[çc]/g, 'c')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const conceptsData = conceptsList.map(c => {
  return `{
    slug: "${slugify(c)}",
    title: "${c}",
    arabicTitle: "TBA",
    shortDefinition: "Yapay zeka tarafından oluşturulmuş taslak içerik.",
    definition: "${c} hakkında yapay zeka tarafından üretilmiş detaylı taslak açıklama. Bu içerik editoryal incelemeden geçmeden yayına alınmamalıdır. [VERIFY SOURCE]",
    etymology: "TBA",
    quranicUsage: "TBA",
    hadithUsage: "TBA",
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: [],
    bibliography: [],
    aiGenerated: true,
    editorialStatus: 'draft'
  }`;
});

const scholarsData = scholarsList.map(s => {
  return `{
    slug: "${slugify(s)}",
    name: "${s}",
    title: "Şiî Âlim",
    laqabs: [],
    kunyas: [],
    birth: "TBA",
    birthPlace: "TBA",
    death: "TBA",
    father: "TBA",
    mother: "TBA",
    teachers: [],
    students: [],
    relatedBooks: [],
    relatedArticles: [],
    relatedPersons: [],
    bio: "${s} hakkında yapay zeka tarafından üretilmiş taslak biyografi. Bu içerik editoryal incelemeden geçmeden yayına alınmamalıdır. [VERIFY SOURCE]",
    aiGenerated: true,
    editorialStatus: 'draft'
  }`;
});

let content = `import { Concept, Person } from './encyclopedia';

export const generatedConcepts: Concept[] = [
  ${conceptsData.join(',\n  ')}
];

export const generatedScholars: Person[] = [
  ${scholarsData.join(',\n  ')}
];
`;

const dest = path.join(process.cwd(), 'lib/mock-data/generated-drafts.ts');
fs.writeFileSync(dest, content);
console.log('Created generated-drafts.ts');
