const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib', 'mock-data', 'index.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add image to Article interface
content = content.replace(
  '  summary: string;\n  content?: string;',
  '  summary: string;\n  content?: string;\n  image?: string;'
);

// 2. Assign images to mockBooks
content = content.replace(
  /"title": "Kur'an-ı Kerim Meali",/g,
  '"title": "Kur\'an-ı Kerim Meali",\n    "cover": "/images/books/book_quran.jpg",'
);

content = content.replace(
  /"title": "El-Mizan Fi Tefsir'il Kur'an",/g,
  '"title": "El-Mizan Fi Tefsir\'il Kur\'an",\n    "cover": "/images/books/book_nahj.jpg",' // Using nahj for tafsir, it fits
);

content = content.replace(
  /"title": "Usul-u Kafi",/g,
  '"title": "Usul-u Kafi",\n    "cover": "/images/books/book_sahifa.jpg",'
);

content = content.replace(
  /"title": "Nehcü'l Belâğa",/g,
  '"title": "Nehcü\'l Belâğa",\n    "cover": "/images/books/book_nahj.jpg",'
);

content = content.replace(
  /"title": "Sahife-i Seccadiye",/g,
  '"title": "Sahife-i Seccadiye",\n    "cover": "/images/books/book_sahifa.jpg",'
);

// 3. Assign images to mockArticles
content = content.replace(
  /title: "Hakikatin İki Kanadı: Kur'an ve İtret",/g,
  'title: "Hakikatin İki Kanadı: Kur\'an ve İtret",\n    image: "/images/articles/article_imamah.jpg",'
);

content = content.replace(
  /title: "İrfani Açıdan Dua",/g,
  'title: "İrfani Açıdan Dua",\n    image: "/images/articles/article_hadith.jpg",'
);

content = content.replace(
  /title: "Modern Dünyada İmamet",/g,
  'title: "Modern Dünyada İmamet",\n    image: "/images/articles/article_imamah.jpg",'
);

content = content.replace(
  /title: "Kerbela'nın Evrensel Mesajı",/g,
  'title: "Kerbela\'nın Evrensel Mesajı",\n    image: "/images/articles/article_ashura.jpg",'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated mock-data/index.ts with images');
