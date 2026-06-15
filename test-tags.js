const http = require('http');

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function checkTags(url) {
  try {
    const html = await fetchHtml(url);
    console.log(`\n=== URL: ${url} ===`);
    
    // Check canonical
    const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*>/i);
    if (canonicalMatch) console.log('Canonical:', canonicalMatch[0]);
    else console.log('Canonical: NOT FOUND');

    // Check hreflang
    const hreflangMatches = html.match(/<link[^>]*rel="alternate"[^>]*hreflang=[^>]*>/ig);
    if (hreflangMatches) {
      console.log('Hreflangs:');
      hreflangMatches.forEach(m => console.log('  ', m));
    } else {
      console.log('Hreflangs: NOT FOUND');
    }

    // Check favicon
    const iconMatches = html.match(/<link[^>]*rel="(shortcut )?icon"[^>]*>/ig);
    if (iconMatches) {
      console.log('Icons:');
      iconMatches.forEach(m => console.log('  ', m));
    } else {
      console.log('Icons: NOT FOUND');
    }

  } catch (e) {
    console.error(`Error fetching ${url}:`, e);
  }
}

async function run() {
  await checkTags('http://localhost:3000/es/nosotros');
  await checkTags('http://localhost:3000/es/nosotros/');
  await checkTags('http://localhost:3000/es/seguridad');
  await checkTags('http://localhost:3000/es');
  await checkTags('http://localhost:3000/en');
}

run();
