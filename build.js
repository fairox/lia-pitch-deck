const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)){
  fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(
  path.join(__dirname, 'presentation.html'),
  path.join(distDir, 'index.html')
);

console.log('Build completed successfully: dist/index.html created.');
