const fs = require('fs');

const frontSvg = fs.readFileSync('visiting-card/ahtisham-card-front.svg', 'utf8');
const backSvg = fs.readFileSync('visiting-card/ahtisham-card-back.svg', 'utf8');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ahtisham Ul Haq Khan - Visiting Card</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');

    @page {
      size: 3.5in 2.0in;
      margin: 0;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      margin: 0;
      padding: 0;
      width: 3.5in;
      height: 2.0in;
      background: #000;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .card-page {
      width: 3.5in;
      height: 2.0in;
      page-break-after: always;
      page-break-inside: avoid;
      overflow: hidden;
      position: relative;
    }
    .card-page:last-child {
      page-break-after: auto;
    }
    .card-page svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
</head>
<body>
  <div class="card-page">
    ${frontSvg}
  </div>
  <div class="card-page">
    ${backSvg}
  </div>
</body>
</html>`;

fs.writeFileSync('visiting-card/print.html', html, 'utf8');
console.log('visiting-card/print.html updated with inline SVGs for perfect vector PDF rendering.');

