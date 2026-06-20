async function check() {
  const r = await fetch('http://localhost:3001/es/nosotros');
  const html = await r.text();
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*>/i);
  console.log('Canonical tag:', canonical ? canonical[0] : 'Not found');
  
  const alternates = html.match(/<link[^>]*rel="alternate"[^>]*>/gi);
  console.log('Alternate tags:');
  if (alternates) {
    alternates.forEach(tag => console.log('  ', tag));
  } else {
    console.log('   None');
  }
}
check().catch(console.error);
