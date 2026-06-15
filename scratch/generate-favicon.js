const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const svgPath = path.join(__dirname, '../public/AEGRIX_right_logo_icon.svg');
  const icoPath = path.join(__dirname, '../public/favicon.ico');

  if (!fs.existsSync(svgPath)) {
    throw new Error(`SVG file not found at: ${svgPath}`);
  }

  console.log('Rendering SVG to PNG buffer...');
  const pngBuffer = await sharp(svgPath)
    .resize(32, 32)
    .png()
    .toBuffer();

  console.log('Generating ICO format buffer...');
  // 6-byte Header
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved (0)
  icoHeader.writeUInt16LE(1, 2); // Type (1 = ICO)
  icoHeader.writeUInt16LE(1, 4); // Number of images (1)

  // 16-byte Directory Entry
  const icoDir = Buffer.alloc(16);
  icoDir.writeUInt8(32, 0); // Width (32)
  icoDir.writeUInt8(32, 1); // Height (32)
  icoDir.writeUInt8(0, 2); // Colors (0 = no palette)
  icoDir.writeUInt8(0, 3); // Reserved (0)
  icoDir.writeUInt16LE(1, 4); // Color Planes (1)
  icoDir.writeUInt16LE(32, 6); // Bits Per Pixel (32)
  icoDir.writeUInt32LE(pngBuffer.length, 8); // Size of the image data
  icoDir.writeUInt32LE(22, 12); // Offset of image data (6 + 16 = 22)

  const icoBuffer = Buffer.concat([icoHeader, icoDir, pngBuffer]);

  fs.writeFileSync(icoPath, icoBuffer);
  console.log(`Favicon written successfully to: ${icoPath}`);
}

main().catch(err => {
  console.error('Error generating favicon:', err);
  process.exit(1);
});
