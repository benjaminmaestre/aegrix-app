const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We want to replace aegrix.co with aegrix.com.co
      // But avoid replacing aegrix.com.co to aegrix.com.com.co
      content = content.replace(/aegrix\.co(?!m\.co)/g, 'aegrix.com.co');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

replaceInDir('c:/Users/BOne/Documents/aegrix-app/app/[lang]');
console.log('Replacement complete.');
