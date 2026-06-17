const fs = require('fs');

async function checkCSS() {
  try {
    const res = await fetch('http://localhost:3000/es/health-premium');
    const html = await res.text();
    
    // Find stylesheet URL
    const cssMatch = html.match(/href="([^"]+?\.css)"/);
    if (!cssMatch) {
      console.log('No CSS stylesheet URL found in HTML');
      return;
    }
    
    const cssUrl = cssMatch[1];
    console.log('Fetching CSS from:', cssUrl);
    
    const cssRes = await fetch(new URL(cssUrl, 'http://localhost:3000').toString());
    const cssText = await cssRes.text();
    
    console.log('CSS length:', cssText.length);
    console.log('Has .ml-0:', cssText.includes('.ml-0') || cssText.includes('\\.ml-0') || cssText.includes('ml-0'));
    console.log('Has .mr-auto:', cssText.includes('.mr-auto') || cssText.includes('\\.mr-auto') || cssText.includes('mr-auto'));
    console.log('Has .lg\\:ml-0:', cssText.includes('.lg\\:ml-0') || cssText.includes('\\.lg\\:ml-0') || cssText.includes('lg\\:ml-0'));
  } catch (err) {
    console.error('Error:', err);
  }
}

checkCSS();
