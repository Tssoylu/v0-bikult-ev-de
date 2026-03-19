const https = require('https');
https.get('https://www.bikult-ev.de/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const links = data.match(/href=\"([^\"]+)\"/g) || [];
    const unique = [...new Set(links)];
    console.log(unique.filter(l => l.includes('verein')).join('\n'));
  });
});