const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/images');
const destDir = path.join(__dirname, '../public/images/landings');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const images = [
  { src: 'hero-health.png', destName: 'hero-health-medellin' },
  { src: 'hero-realestate.png', destName: 'hero-realestate-cartagena' },
  { src: 'hero-construction.png', destName: 'hero-construction-bogota' },
  { src: 'hero-legal.png', destName: 'hero-legal-medellin' },
];

async function convert() {
  for (const img of images) {
    const srcPath = path.join(srcDir, img.src);
    if (!fs.existsSync(srcPath)) {
      console.warn(`Source file not found: ${srcPath}`);
      continue;
    }

    console.log(`Processing ${img.src} -> ${img.destName}...`);
    
    // Copy original PNG
    const destPngPath = path.join(destDir, `${img.destName}.png`);
    fs.copyFileSync(srcPath, destPngPath);

    // 1920px (Desktop)
    await sharp(srcPath)
      .resize(1920)
      .avif({ quality: 75 })
      .toFile(path.join(destDir, `${img.destName}.avif`));
    
    await sharp(srcPath)
      .resize(1920)
      .webp({ quality: 80 })
      .toFile(path.join(destDir, `${img.destName}.webp`));

    // 1280px (Tablet)
    await sharp(srcPath)
      .resize(1280)
      .avif({ quality: 75 })
      .toFile(path.join(destDir, `${img.destName}-tablet.avif`));
    
    await sharp(srcPath)
      .resize(1280)
      .webp({ quality: 80 })
      .toFile(path.join(destDir, `${img.destName}-tablet.webp`));

    // 768px (Mobile)
    await sharp(srcPath)
      .resize(768)
      .avif({ quality: 75 })
      .toFile(path.join(destDir, `${img.destName}-mobile.avif`));
    
    await sharp(srcPath)
      .resize(768)
      .webp({ quality: 80 })
      .toFile(path.join(destDir, `${img.destName}-mobile.webp`));
      
    console.log(`Finished ${img.destName}`);
  }
}

convert().then(() => console.log('All images converted successfully.')).catch(console.error);
