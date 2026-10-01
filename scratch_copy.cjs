const fs = require('fs');
const path = require('path');

const src = 'C:/Users/hugoj/.gemini/antigravity-ide/brain/582267d3-9e56-451e-b432-715e1c319a0b/.user_uploaded/media_1790635739271.png';
const dest = path.resolve('e:/Karvo/public/karvo-logo-original.png');

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied to:', dest);
} catch (err) {
  console.error('Error copying:', err);
}
process.exit(0);
