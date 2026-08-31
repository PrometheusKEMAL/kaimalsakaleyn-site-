const fs = require('fs');
const path = require('path');

const routes = {
  'kutuphane': { title: 'Kütüphane', desc: 'İslami ve Şii kaynak eserler kütüphanesi.' },
  'defterler': { title: 'Sekaleyn Defterleri', desc: 'Kur\'an ve Ehl-i Beyt ekseninde araştırma makaleleri.' },
  'kavramlar': { title: 'Kavramlar Ansiklopedisi', desc: 'İslami kavramlar ve terimler sözlüğü.' },
  'ehlibeyt': { title: 'Ehl-i Beyt', desc: 'Ondört Masum ve Ehl-i Beyt imamlarının hayatı.' },
  'etkinlikler': { title: 'Etkinlikler', desc: 'Sohbet, konferans ve okuma programları takvimi.' },
  'meclis': { title: 'Sakaleyn Meclisi', desc: 'İrfani ve ahlaki sohbetler meclisi.' }
};

for (const [route, meta] of Object.entries(routes)) {
  const dir = path.join(process.cwd(), 'app', route);
  if (!fs.existsSync(dir)) continue;
  
  const layoutPath = path.join(dir, 'layout.tsx');
  const content = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${meta.title} | KaimAlSakaleyn',
  description: '${meta.desc}'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;

  fs.writeFileSync(layoutPath, content);
  console.log('Created layout for', route);
}
