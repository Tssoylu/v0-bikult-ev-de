const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const path = require('path');

const SITE_URL = 'https://bikult-ev.de';

const pagesToScrape = [
  { slug: 'ueber-uns', url: '/verein/über-uns/' },
  { slug: 'satzung', url: '/verein/satzung/' },
  { slug: 'aktivitaten', url: '/verein/aktivitäten/' },
  { slug: 'kooperationen', url: '/verein/kooperationen/' },
  { slug: 'foto-galerie', url: '/verein/foto-galerie/' },
  { slug: 'ehrenamt', url: '/verein/ehrenamt/' },
  { slug: 'spenden', url: '/verein/spenden/' },
  { slug: 'impressum', url: '/impressum/' }
];

async function downloadImage(url, filepath) {
    if (url.startsWith('//')) { url = 'https:' + url; }
    if (url.startsWith('/')) { url = SITE_URL + url; }
    
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                   .on('error', reject)
                   .once('close', () => resolve());
            } else {
                res.resume();
                resolve();
            }
        }).on('error', reject);
    });
}

async function scrape() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  for (const info of pagesToScrape) {
    console.log('Scraping: ' + info.url);
    try {
        await page.goto(SITE_URL + info.url, { waitUntil: 'networkidle2', timeout: 30000 });
        
        // Extract content blocks (headers, paragraphs, images)
        const content = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('h1, h2, h3, p, img'));
            return elements.map(el => {
                if (el.tagName.toLowerCase() === 'img') return { type: 'img', src: el.src, alt: el.alt };
                if (el.tagName.toLowerCase().startsWith('h')) return { type: 'heading', text: el.innerText, level: el.tagName.toLowerCase() };
                return { type: 'text', text: el.innerText };
            }).filter(item => item.src || (item.text && item.text.trim().length > 0));
        });
        
        let fileContent = `
import { PageHero } from "@/components/page-hero"

export default function ${info.slug.replace(/-/g, '')}Page() {
  return (
    <>
      <PageHero
        title="${info.slug}"
        description="BiKult e.V. - ${info.slug}"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-8">
        <div className="prose prose-lg max-w-none text-muted-foreground">
`;
        
        let imgCount = 0;
        for (const item of content) {
            if (item.type === 'heading') {
                const Tag = item.level;
                fileContent += `          <${Tag} className="text-foreground font-serif mt-12 mb-6">${item.text}</${Tag}>\n`;
            } else if (item.type === 'text') {
                 fileContent += `          <p className="mb-4 text-balance">${item.text}</p>\n`;
            } else if (item.type === 'img' && item.src && !item.src.includes('data:image')) {
                 imgCount++;
                 const imgName = `${info.slug}-${imgCount}.jpg`;
                 const imgPath = path.join(__dirname, 'public', 'images', 'scraped', imgName);
                 const imgDir = path.dirname(imgPath);
                 if(!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
                 
                 console.log('Downloading image: ' + item.src);
                 await downloadImage(item.src, imgPath);
                 
                 fileContent += `          <div className="rounded-xl overflow-hidden my-8"><img src="/images/scraped/${imgName}" alt="${item.alt || ''}" className="w-full h-auto object-cover" /></div>\n`;
            }
        }
        
        fileContent += `
        </div>
      </div>
    </>
  )
}
`;
        
        const pagePath = info.slug === 'impressum' ? path.join(__dirname, 'app', 'impressum', 'page.tsx') : path.join(__dirname, 'app', 'verein', info.slug, 'page.tsx');
        fs.mkdirSync(path.dirname(pagePath), { recursive: true });
        fs.writeFileSync(pagePath, fileContent);
        console.log('Saved: ' + pagePath);

    } catch(err) {
        console.error('Error scraping ' + info.url, err);
    }
  }

  await browser.close();
}

scrape().catch(console.error);