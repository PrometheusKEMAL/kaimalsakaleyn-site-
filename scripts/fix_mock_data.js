const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'lib', 'mock-data', 'index.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Update Article Interface
content = content.replace(
  '  relatedBooks: number[]; // book ids\n}',
  '  relatedBooks: number[]; // book ids\n  image?: string;\n  versionHistory?: { id: string; date: string; action: string; user: string; role: string; notes?: string; status: any }[];\n  editorialStatus?: "draft" | "researching" | "source_review" | "editor_review" | "approved" | "published" | "archived";\n  verificationStatus?: "verified" | "partial" | "unverified";\n}'
);

// Update Book Interface
content = content.replace(
  "  copyrightStatus?: string;\n  verificationStatus?: 'draft' | 'needs_review' | 'source_checked' | 'editorial_approved';\n}",
  "  copyrightStatus?: 'public_domain' | 'licensed' | 'permission_granted' | 'external_only' | 'unknown';\n  cover?: string;\n  verificationStatus?: 'verified' | 'partial' | 'unverified';\n  editorialStatus?: 'draft' | 'researching' | 'source_review' | 'editor_review' | 'approved' | 'published' | 'archived';\n}"
);

// Update all mockBooks replacing old copyrightStatus
content = content.replace(
  /"copyrightStatus": "Telif hakkı gözetilerek yalnızca tanıtım amaçlı listelenmiştir"/g,
  '"copyrightStatus": "external_only",\n    "verificationStatus": "verified",\n    "editorialStatus": "published"'
);

// Add cover images to specific books
content = content.replace(
  /"slug": "kuran-i-kerim-meali",/g,
  '"slug": "kuran-i-kerim-meali",\n    "cover": "/images/books/book_quran.jpg",'
);
content = content.replace(
  /"slug": "el-mizan-fi-tefsiril-kuran",/g,
  '"slug": "el-mizan-fi-tefsiril-kuran",\n    "cover": "/images/books/book_nahj.jpg",'
);
content = content.replace(
  /"slug": "usul-u-kafi",/g,
  '"slug": "usul-u-kafi",\n    "cover": "/images/books/book_sahifa.jpg",'
);
content = content.replace(
  /"slug": "nehcul-belaga",/g,
  '"slug": "nehcul-belaga",\n    "cover": "/images/books/book_nahj.jpg",'
);
content = content.replace(
  /"slug": "sahife-i-seccadiye",/g,
  '"slug": "sahife-i-seccadiye",\n    "cover": "/images/books/book_sahifa.jpg",'
);

// Add images and fields to specific articles
content = content.replace(
  /slug: "hakikatin-iki-kanadi-kuran-ve-itret",/g,
  'slug: "hakikatin-iki-kanadi-kuran-ve-itret",\n    image: "/images/articles/article_imamah.jpg",\n    verificationStatus: "verified",\n    editorialStatus: "published",'
);
content = content.replace(
  /slug: "irfani-acidan-dua",/g,
  'slug: "irfani-acidan-dua",\n    image: "/images/articles/article_hadith.jpg",\n    verificationStatus: "verified",\n    editorialStatus: "published",'
);
content = content.replace(
  /slug: "modern-dunyada-imamet",/g,
  'slug: "modern-dunyada-imamet",\n    image: "/images/articles/article_imamah.jpg",\n    verificationStatus: "verified",\n    editorialStatus: "published",'
);
content = content.replace(
  /slug: "kerbelanin-evrensel-mesaji",/g,
  'slug: "kerbelanin-evrensel-mesaji",\n    image: "/images/articles/article_ashura.jpg",\n    verificationStatus: "verified",\n    editorialStatus: "published",'
);

// Fallback for any other articles
content = content.replace(
  /relatedBooks: \[(.*?)\],/g,
  'relatedBooks: [$1],\n    verificationStatus: "verified",\n    editorialStatus: "published",'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully restored mock-data/index.ts with images');
