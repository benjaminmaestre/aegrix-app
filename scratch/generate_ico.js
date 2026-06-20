const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createIco() {
  const svgPath = path.join(__dirname, '..', 'public', 'AEGRIX_right_logo_icon.svg');
  const outputPath = path.join(__dirname, '..', 'public', 'favicon.ico');
  
  const sizes = [16, 32, 48];
  const pngBuffers = [];
  
  for (const size of sizes) {
    const png = await sharp(svgPath)
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers.push({ size, buffer: png });
  }
  
  // Header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type (1 = ICO)
  header.writeUInt16LE(sizes.length, 4); // Number of images
  
  const entries = [];
  let currentOffset = 6 + 16 * sizes.length;
  
  for (const { size, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // Width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // Height
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Size of image data
    entry.writeUInt32LE(currentOffset, 12); // Offset of image data
    
    entries.push(entry);
    currentOffset += buffer.length;
  }
  
  const icoBuffer = Buffer.concat([
    header,
    ...entries,
    ...pngBuffers.map(p => p.buffer)
  ]);
  
  fs.writeFileSync(outputPath, icoBuffer);
  console.log('Successfully generated public/favicon.ico with sizes 16x16, 32x32, and 48x48!');
}

createIco().catch(console.error);
