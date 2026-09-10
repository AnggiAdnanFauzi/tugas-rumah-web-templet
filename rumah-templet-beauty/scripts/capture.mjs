import puppeteer from 'puppeteer';
import { templates } from '../src/data/templates.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1280, height: 800 }
  });
  
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

    console.log(`Capturing ${template.title} at ${template.demoUrl}...`);
    const page = await browser.newPage();
    try {
      await page.goto(template.demoUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      // wait a bit for any animations
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({ path: outputPath, type: 'jpeg', quality: 80 });
      console.log(`Saved screenshot for ${template.slug}`);
    } catch (err) {
      console.error(`Failed to capture ${template.slug}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Done!');
}

captureScreenshots();
