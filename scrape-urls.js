const https = require('https');
const fs = require('fs');

https.get('https://bikult-ev.de/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const links = data.match(/href="([^"]+)"/g) || [];
    const unique = [...new Set(links)];
    console.log(unique.join('\n'));
  });
}).on('error', e => console.error(e));