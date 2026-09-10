import { templates } from '../src/data/templates.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadScreenshots() {
  const outputDir = path.join(__dirname, '../public/images/templates');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const template of templates) {
    const outputPath = path.join(outputDir, `${template.slug}.jpg`);
    
    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${template.slug}, already exists.`);
      continue;
    }

    const encodedUrl = encodeURIComponent(template.demoUrl);
    const apiUrl = `https://image.thum.io/get/width/1200/crop/800/noanimate/${template.demoUrl}`;
    
    console.log(`Downloading ${template.title} from ${apiUrl}...`);
    
    await new Promise((resolve, reject) => {
      https.get(apiUrl, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download, status code: ${response.statusCode}`));
          return;
        }
        
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Saved ${template.slug}.jpg`);
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(outputPath, () => {});
        reject(err);
      });
    }).catch(err => {
      console.error(`Error with ${template.slug}:`, err.message);
    });
    
    // Delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 1500));
  }

  console.log('Done!');
}

downloadScreenshots();
