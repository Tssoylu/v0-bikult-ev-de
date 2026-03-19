const https = require('https');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const SITE_URL = 'https://bikult-ev.de';

const filesToCreate = [
  { slug: 'ueber-uns', url: '/verein/über-uns/', path: 'app/verein/ueber-uns/page.tsx', title: 'Über Uns' },
  { slug: 'satzung', url: '/verein/satzung/', path: 'app/verein/satzung/page.tsx', title: 'Satzung' },
  { slug: 'aktivitaten', url: '/verein/aktivitäten/', path: 'app/verein/aktivitaten/page.tsx', title: 'Aktivitäten' },
  { slug: 'kooperationen', url: '/verein/kooperationen/', path: 'app/verein/kooperationen/page.tsx', title: 'Kooperationen' },
  { slug: 'foto-galerie', url: '/verein/foto-galerie/', path: 'app/verein/foto-galerie/page.tsx', title: 'Foto Galerie' },
  { slug: 'ehrenamt', url: '/verein/ehrenamt/', path: 'app/verein/ehrenamt/page.tsx', title: 'Ehrenamt' },
  { slug: 'spenden', url: '/verein/spenden/', path: 'app/verein/spenden/page.tsx', title: 'Spenden' },
  { slug: 'impressum', url: '/impressum/', path: 'app/impressum/page.tsx', title: 'Impressum' },
  { slug: 'datenschutz', url: '/datenschutz/', path: 'app/datenschutz/page.tsx', title: 'Datenschutz' }
];

function fetchHTMl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if(res.statusCode === 301 || res.statusCode === 302) {
          fetchHTMl(new URL(res.headers.location, url).href).then(resolve).catch(reject);
          return;
      }
      let html = '';
      res.on('data', d => html += d);
      res.on('end', () => resolve(html));
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    if(url.startsWith('//')) url = 'https:' + url;
    else if(url.startsWith('/')) url = SITE_URL + url;
    
    https.get(url, (res) => {
      if(res.statusCode !== 200) return resolve();
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', err => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function scrape() {
  for (const pageInfo of filesToCreate) {
     console.log('Fetching', SITE_URL + pageInfo.url);
     let fileContent = `import { PageHero } from "@/components/page-hero"\n\nexport default function Page() {\n  return (\n    <main>\n      <PageHero title="${pageInfo.title}" description="Informationen zu ${pageInfo.title}" />\n      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-8">\n        <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:font-serif prose-headings:text-foreground">`;

     try {
       const targetUrl = new URL(pageInfo.url, SITE_URL).href;
       const html = await fetchHTMl(targetUrl);
       const dom = new JSDOM(html);
       const doc = dom.window.document;
       
       const contentElements = Array.from(doc.querySelectorAll('.j-text p, .j-text h1, .j-text h2, .j-text h3, .j-text h4, img.j-image, figure img, article p, section p, .n-text p, .j-image-wrapper img'));
       let hasContent = false;
       let imgCount = 0;
       
       if (contentElements.length > 0) {
           for (const el of contentElements) {
               if (el.tagName === 'IMG') {
                   let src = el.getAttribute('src') || el.getAttribute('data-src') || el.getAttribute('srcset');
                   if (src) {
                      src = src.split(' ')[0]; // in case of srcset
                   }
                   if(src && !src.includes('data:image')) {
                       hasContent = true;
                       imgCount++;
                       const imgName = pageInfo.slug + '-' + imgCount + '.jpg';
                       const imgRelPath = '/images/scraped/' + imgName;
                       const dest = path.join(__dirname, 'public', 'images', 'scraped', imgName);
                       
                       fs.mkdirSync(path.dirname(dest), { recursive: true });
                       console.log('-> Download img:', src);
                       await downloadImage(src, dest);
                       fileContent += `\n          <div className="my-8 rounded-xl overflow-hidden shadow-sm border border-border"><img src="${imgRelPath}" alt="${(el.alt || '').replace(/"/g, '')}" className="w-full h-auto object-cover" /></div>`;
                   }
               } else if (el.tagName.startsWith('H')) {
                   const Tag = el.tagName.toLowerCase();
                   hasContent = true;
                   fileContent += `\n          <${Tag} className="font-serif mt-10 mb-4 text-foreground">${el.textContent.trim().replace(/</g, '')}</${Tag}>`;
               } else if (el.tagName === 'P') {
                   const text = el.textContent.trim().replace(/</g, '');
                   if (text) {
                       hasContent = true;
                       fileContent += `\n          <p className="mb-4 text-balance">${text}</p>`;
                   }
               }
           }
       }
       
       if (!hasContent) {
           fileContent += `\n          <p className="mb-4 text-balance">Inhalte für die Seite ${pageInfo.title} werden hier angezeigt. Bitte prüfen und bei Bedarf anpassen.</p>`;
       }
     } catch (err) {
        console.error('Failed to parse ' + pageInfo.url, err);
        fileContent += `\n          <p className="mb-4 text-balance">Seite ${pageInfo.title} konnte nicht geladen werden.</p>`;
     }
     
     fileContent += `\n        </div>\n      </div>\n    </main>\n  )\n}\n`;

     const targetPath = path.join(__dirname, pageInfo.path);
     fs.mkdirSync(path.dirname(targetPath), { recursive: true });
     fs.writeFileSync(targetPath, fileContent);
     console.log('Saved', targetPath);
  }
}

scrape().catch(console.error);