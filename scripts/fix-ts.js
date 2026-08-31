const fs = require('fs');

const fixLayout = (path) => {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/person\.life/g, "(person.life || person.bio || '')");
  fs.writeFileSync(path, content);
};

const fixPage = (path) => {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/person\.life/g, "(person.life || person.bio || '')");
  content = content.replace(/person\.chronology/g, "(person.chronology || [])");
  content = content.replace(/person\.quotes/g, "(person.quotes || [])");
  fs.writeFileSync(path, content);
};

const fixKavramlar = (path) => {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/person\.id/g, "person.slug");
  fs.writeFileSync(path, content);
};

fixLayout('c:/Users/Kemal/Desktop/KaimAlSakaleyn Site/app/ehlibeyt/[slug]/layout.tsx');
fixPage('c:/Users/Kemal/Desktop/KaimAlSakaleyn Site/app/ehlibeyt/[slug]/page.tsx');
fixKavramlar('c:/Users/Kemal/Desktop/KaimAlSakaleyn Site/app/kavramlar/[slug]/page.tsx');
console.log('Fixed TS errors!');
