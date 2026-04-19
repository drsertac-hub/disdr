const https = require('https');
const fs = require('fs');

https.get('https://www.dis-eti.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Fotoğrafı bulmak için
    const matches = data.match(/<img[^>]+src=[\"']([^\"']+)[\"'][^>]*>/gi);
    if(matches) {
       matches.forEach(m => console.log(m));
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
