const fs = require('fs');

let c = fs.readFileSync('lib/mock-data/index.ts', 'utf8');

c = c.replace(
  `Özetle, İmam Seccad'ın (a.s) dilinden dökülen dualar, kulun kendi acziyetini bilip ilahi kudrette fani olma (fena fillah) serüveninin yol haritasıdır.\n    tags: ["Dua", "İmam Zeynelabidin", "Sahife-i Seccadiye"],`,
  `Özetle, İmam Seccad'ın (a.s) dilinden dökülen dualar, kulun kendi acziyetini bilip ilahi kudrette fani olma (fena fillah) serüveninin yol haritasıdır.\n    \`,\n    author: "Mehmet Demir",\n    editor: "Zeynep Çelik",\n    publishedAt: "10 Mart 2024",\n    lastUpdated: "10 Mart 2024",\n    category: "İrfan",\n    readTime: "12 dk",\n    tags: ["Dua", "İmam Zeynelabidin", "Sahife-i Seccadiye"],`
);

c = c.replace(
  `Gerçek bir muntazır (bekleyen), zalimlerle mücadele eden ve İmam'ın zuhuru için zemin hazırlayan aktif bir mümindir.\n    tags: ["Mehdeviyet", "Gaibet", "İntizar"],`,
  `Gerçek bir muntazır (bekleyen), zalimlerle mücadele eden ve İmam'ın zuhuru için zemin hazırlayan aktif bir mümindir.\n    \`,\n    author: "Ahmet Yılmaz",\n    editor: "Kemal Demir",\n    publishedAt: "5 Şubat 2024",\n    lastUpdated: "12 Şubat 2024",\n    category: "İmam Mehdi",\n    readTime: "14 dk",\n    tags: ["Mehdeviyet", "Gaibet", "İntizar"],`
);

fs.writeFileSync('lib/mock-data/index.ts', c);
