const fs = require('fs');

console.log('--- COMPILING EXACT CARD DESIGN FROM USER SCREENSHOT ---');

// 1. Read Portrait & convert to base64
const portraitBuffer = fs.readFileSync('images/Professional_Suit_Portrait.png');
const portraitBase64 = 'data:image/png;base64,' + portraitBuffer.toString('base64');
console.log('Portrait base64 ready (length: ' + portraitBase64.length + ')');

// 2. Read Portfolio QR code
const qrSvg = fs.readFileSync('visiting-card/qr-code.svg', 'utf8');
const qrBody = qrSvg.replace(/<\?xml[^>]*\?>/, '').replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '').trim();

// ==========================================================================
// FRONT SIDE SVG
// ==========================================================================
const frontSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 600" width="100%" height="100%">
  <defs>
    <!-- Purple Gradients -->
    <linearGradient id="purpleRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9333EA"/>
      <stop offset="50%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#581C87"/>
    </linearGradient>

    <linearGradient id="purpleRibbon2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6B21A8"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>

    <linearGradient id="accentPurpleLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="70%" stop-color="#C084FC"/>
      <stop offset="100%" stop-color="transparent"/>
    </linearGradient>

    <linearGradient id="darkBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090D16"/>
      <stop offset="50%" stop-color="#120E24"/>
      <stop offset="100%" stop-color="#060911"/>
    </linearGradient>

    <!-- Clip Path for Right Portrait Angle -->
    <clipPath id="portraitAngleClip">
      <polygon points="650,0 1050,0 1050,600 580,600 625,320 595,160"/>
    </clipPath>

    <!-- Clip Path for Inside Shard -->
    <clipPath id="photoInnerClip">
      <polygon points="670,0 1050,0 1050,600 600,600"/>
    </clipPath>

    <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Left Base White Canvas -->
  <rect width="1050" height="600" fill="#FFFFFF"/>

  <!-- Right Dark Backdrop -->
  <polygon points="630,0 1050,0 1050,600 560,600" fill="url(#darkBgGrad)"/>

  <!-- Geometric Watermark in White Area -->
  <g opacity="0.03" stroke="#581C87" stroke-width="1.5" fill="none">
    <polygon points="120,60 160,85 160,135 120,160 80,135 80,85"/>
    <polygon points="260,400 310,430 310,490 260,520 210,490 210,430"/>
    <polygon points="460,180 500,205 500,255 460,280 420,255 420,205"/>
  </g>

  <!-- Layer 1: Dark Purple Shadow Shard -->
  <polygon points="620,0 680,0 600,600 540,600" fill="url(#purpleRibbon2)" opacity="0.75"/>

  <!-- Layer 2: Main Vibrant Electric Purple Angular Ribbon -->
  <polygon points="640,0 675,0 585,600 550,600" fill="url(#purpleRibbon1)"/>
  
  <!-- Layer 3: Highlight Accent Facet (3D Fold Effect) -->
  <polygon points="655,0 668,0 578,600 565,600" fill="#A855F7" opacity="0.6"/>

  <!-- Top Geometric Fold Tip -->
  <polygon points="640,0 665,0 615,140" fill="#C084FC" opacity="0.5"/>

  <!-- Bottom Fold Accent -->
  <polygon points="550,600 585,600 565,480" fill="#7C3AED" opacity="0.7"/>

  <!-- ============================================================
       RIGHT: PROFESSIONAL PORTRAIT
       ============================================================ -->
  <g clip-path="url(#photoInnerClip)">
    <image href="${portraitBase64}"
           x="580" y="25"
           width="480" height="580"
           preserveAspectRatio="xMidYMid slice"/>
    <!-- Subtle Gradient Lighting Over Photo Edges -->
    <linearGradient id="photoVignette" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#090D16" stop-opacity="0.55"/>
      <stop offset="18%" stop-color="transparent"/>
      <stop offset="85%" stop-color="transparent"/>
      <stop offset="100%" stop-color="#090D16" stop-opacity="0.3"/>
    </linearGradient>
    <rect x="580" y="0" width="470" height="600" fill="url(#photoVignette)"/>
  </g>

  <!-- Outer Purple Glow Line between photo and white area -->
  <line x1="640" y1="0" x2="550" y2="600" stroke="#A855F7" stroke-width="2.5" opacity="0.8"/>

  <!-- ============================================================
       LEFT: CONTENT & IDENTITY
       ============================================================ -->
  <g transform="translate(60, 65)">

    <!-- Main Name -->
    <text x="0" y="55" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="44" font-weight="800" letter-spacing="-0.5">
      <tspan fill="#111827">Ahtisham Ul Haq </tspan>
      <tspan fill="#7C3AED">Khan</tspan>
    </text>

    <!-- Designation -->
    <text x="0" y="100" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="24" font-weight="600" fill="#1F2937" letter-spacing="0.5">
      Full Stack Developer
    </text>

    <!-- Underline Accent -->
    <line x1="0" y1="120" x2="280" y2="120" stroke="url(#accentPurpleLine)" stroke-width="2.5"/>

    <!-- Contact List (4 Rows with Purple Icon Circles) -->
    <g transform="translate(0, 155)">

      <!-- 1. Phone / WhatsApp -->
      <g transform="translate(0, 0)">
        <circle cx="20" cy="20" r="18" fill="#7C3AED"/>
        <!-- Phone Vector Icon -->
        <path d="M 15 13 C 14.5 13 13.5 13.5 13 14.5 C 12 16.5 13 20 16 23 C 19 26 22.5 27 24.5 26 C 25.5 25.5 26 24.5 26 24 L 24 20 C 23.5 19.5 22.5 19.5 22 20 L 21 21 C 20.5 21 18.5 20 17 18.5 C 15.5 17 14.5 15 14.5 14.5 L 15.5 13.5 C 16 13 16 12 15.5 11.5 Z" fill="#FFFFFF"/>
        <text x="52" y="26" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="19" font-weight="700" fill="#111827">+92 315 1252016</text>
      </g>

      <!-- 2. Email -->
      <g transform="translate(0, 52)">
        <circle cx="20" cy="20" r="18" fill="#7C3AED"/>
        <!-- Mail Vector Icon -->
        <path d="M 12 14 L 28 14 C 29 14 30 15 30 16 L 30 25 C 30 26 29 27 28 27 L 12 27 C 11 27 10 26 10 25 L 10 16 C 10 15 11 14 12 14 Z M 12 16 L 20 21.5 L 28 16" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="52" y="26" font-family="'Inter', 'Segoe UI', sans-serif" font-size="17" font-weight="600" fill="#1E293B">ahtishamulhaqkhan74@gmail.com</text>
      </g>

      <!-- 3. Portfolio Website -->
      <g transform="translate(0, 104)">
        <circle cx="20" cy="20" r="18" fill="#7C3AED"/>
        <!-- Globe Vector Icon -->
        <circle cx="20" cy="20" r="9" fill="none" stroke="#FFFFFF" stroke-width="1.6"/>
        <ellipse cx="20" cy="20" rx="4.5" ry="9" fill="none" stroke="#FFFFFF" stroke-width="1.2"/>
        <line x1="11" y1="20" x2="29" y2="20" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="52" y="26" font-family="'Inter', 'Segoe UI', sans-serif" font-size="17" font-weight="600" fill="#1E293B">https://ahtishamdev.netlify.app</text>
      </g>

      <!-- 4. Location -->
      <g transform="translate(0, 156)">
        <circle cx="20" cy="20" r="18" fill="#7C3AED"/>
        <!-- Location Pin Vector Icon -->
        <path d="M 20 12 C 16.5 12 14 14.5 14 18 C 14 22.5 20 28 20 28 C 20 28 26 22.5 26 18 C 26 14.5 23.5 12 20 12 Z" fill="none" stroke="#FFFFFF" stroke-width="1.7"/>
        <circle cx="20" cy="17.5" r="2.2" fill="#FFFFFF"/>
        <text x="52" y="26" font-family="'Inter', 'Segoe UI', sans-serif" font-size="18" font-weight="600" fill="#1E293B">Karachi, Pakistan</text>
      </g>
    </g>

    <!-- Bottom Italic Slogan with Purple Swoosh -->
    <g transform="translate(0, 395)">
      <text x="0" y="25" font-family="'Inter', 'Segoe UI', sans-serif" font-size="18" font-style="italic" font-weight="600" fill="#334155">
        Turning Ideas into Powerful Solutions
      </text>
      <!-- Purple Swoosh -->
      <path d="M 335 24 Q 375 22 410 26 Q 375 29 335 24 Z" fill="#7C3AED"/>
    </g>
  </g>
</svg>`;

fs.writeFileSync('visiting-card/ahtisham-card-front.svg', frontSvg, 'utf8');
console.log('visiting-card/ahtisham-card-front.svg created (exact match to screenshot)!');


// ==========================================================================
// BACK SIDE SVG
// ==========================================================================
const backSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 600" width="100%" height="100%">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="backBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080C16"/>
      <stop offset="50%" stop-color="#0E1322"/>
      <stop offset="100%" stop-color="#0A0E1A"/>
    </linearGradient>

    <!-- Purple Header Underline -->
    <linearGradient id="purpleUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="60%" stop-color="#C084FC"/>
      <stop offset="100%" stop-color="transparent"/>
    </linearGradient>

    <!-- Box Shadow Filter for QR -->
    <filter id="qrShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000000" flood-opacity="0.6"/>
    </filter>

    <linearGradient id="purpleAccentPill" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#6D28D9"/>
    </linearGradient>
  </defs>

  <!-- Dark Base Canvas -->
  <rect width="1050" height="600" fill="url(#backBgGrad)"/>

  <!-- Top Left Dot Matrix Pattern (Halftone Dots) -->
  <g opacity="0.32" fill="#7C3AED">
    <!-- Row 1 -->
    <circle cx="45" cy="45" r="2.5"/><circle cx="65" cy="45" r="2.5"/><circle cx="85" cy="45" r="2.5"/><circle cx="105" cy="45" r="2.5"/><circle cx="125" cy="45" r="2.5"/><circle cx="145" cy="45" r="2.5"/><circle cx="165" cy="45" r="2.5"/>
    <!-- Row 2 -->
    <circle cx="45" cy="62" r="2.5"/><circle cx="65" cy="62" r="2.5"/><circle cx="85" cy="62" r="2.5"/><circle cx="105" cy="62" r="2.5"/><circle cx="125" cy="62" r="2.5"/><circle cx="145" cy="62" r="2.5"/>
    <!-- Row 3 -->
    <circle cx="45" cy="79" r="2.5"/><circle cx="65" cy="79" r="2.5"/><circle cx="85" cy="79" r="2.5"/><circle cx="105" cy="79" r="2.5"/><circle cx="125" cy="79" r="2.5"/>
    <!-- Row 4 -->
    <circle cx="45" cy="96" r="2.5"/><circle cx="65" cy="96" r="2.5"/><circle cx="85" cy="96" r="2.5"/><circle cx="105" cy="96" r="2.5"/>
    <!-- Row 5 -->
    <circle cx="45" cy="113" r="2.5"/><circle cx="65" cy="113" r="2.5"/><circle cx="85" cy="113" r="2.5"/>
    <!-- Row 6 -->
    <circle cx="45" cy="130" r="2.5"/><circle cx="65" cy="130" r="2.5"/>
  </g>

  <!-- Right Side Purple Angled Glow Shards -->
  <polygon points="980,0 1050,0 1050,420 860,0" fill="#7C3AED" opacity="0.12"/>
  <polygon points="1050,0 1050,260 920,0" fill="#C084FC" opacity="0.08"/>

  <!-- ============================================================
       TOP HEADING: Professional Services
       ============================================================ -->
  <g transform="translate(195, 55)">
    <text x="0" y="32" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="34" font-weight="800" letter-spacing="0.5">
      <tspan fill="#FFFFFF">Professional </tspan>
      <tspan fill="#A855F7">Services</tspan>
    </text>
    <line x1="0" y1="46" x2="310" y2="46" stroke="url(#purpleUnderline)" stroke-width="2.8"/>
  </g>

  <!-- ============================================================
       3 SERVICES COLUMNS
       ============================================================ -->
  <g transform="translate(60, 150)">

    <!-- Service 1: Website Development -->
    <g transform="translate(0, 0)">
      <!-- Icon Box (Purple Glowing Outline) -->
      <rect x="58" y="0" width="58" height="58" rx="14" fill="#18122B" stroke="#A855F7" stroke-width="2"/>
      <!-- Code Icon </> -->
      <path d="M 78 22 L 68 29 L 78 36" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M 96 22 L 106 29 L 96 36" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="91" y1="20" x2="83" y2="38" stroke="#A855F7" stroke-width="2.2" stroke-linecap="round"/>

      <text x="87" y="90" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="17" font-weight="700" fill="#FFFFFF" text-anchor="middle">Website Development</text>
      <text x="87" y="115" font-family="'Inter', 'Segoe UI', sans-serif" font-size="12.5" font-weight="500" fill="#94A3B8" text-anchor="middle">Modern &amp; Scalable</text>
      <text x="87" y="135" font-family="'Inter', 'Segoe UI', sans-serif" font-size="12.5" font-weight="500" fill="#94A3B8" text-anchor="middle">Web Solutions</text>
    </g>

    <!-- Vertical Divider 1 -->
    <line x1="195" y1="15" x2="195" y2="145" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.2"/>

    <!-- Service 2: Travel Company -->
    <g transform="translate(215, 0)">
      <!-- Icon Box -->
      <rect x="58" y="0" width="58" height="58" rx="14" fill="#18122B" stroke="#A855F7" stroke-width="2"/>
      <!-- Airplane Icon -->
      <path d="M 87 18 L 91 29 L 102 32 L 92 37 L 94 48 L 87 42 L 80 48 L 82 37 L 72 32 L 83 29 Z" fill="#FFFFFF"/>

      <text x="87" y="90" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="17" font-weight="700" fill="#FFFFFF" text-anchor="middle">Travel Company</text>
      <text x="87" y="115" font-family="'Inter', 'Segoe UI', sans-serif" font-size="12.5" font-weight="500" fill="#94A3B8" text-anchor="middle">Smart Travel &amp;</text>
      <text x="87" y="135" font-family="'Inter', 'Segoe UI', sans-serif" font-size="12.5" font-weight="500" fill="#94A3B8" text-anchor="middle">Booking Solutions</text>
    </g>

    <!-- Vertical Divider 2 -->
    <line x1="410" y1="15" x2="410" y2="145" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.2"/>

    <!-- Service 3: Real Estate Accounts Software -->
    <g transform="translate(430, 0)">
      <!-- Icon Box -->
      <rect x="68" y="0" width="58" height="58" rx="14" fill="#18122B" stroke="#A855F7" stroke-width="2"/>
      <!-- Real Estate House Icon -->
      <path d="M 85 24 L 97 16 L 109 24 L 109 42 L 85 42 Z M 92 42 L 92 32 L 102 32 L 102 42" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/>
      <!-- Little chimney/key accent -->
      <line x1="104" y1="18" x2="104" y2="21" stroke="#FFFFFF" stroke-width="2"/>

      <text x="97" y="85" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="15.5" font-weight="700" fill="#FFFFFF" text-anchor="middle">Real Estate</text>
      <text x="97" y="105" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="15.5" font-weight="700" fill="#FFFFFF" text-anchor="middle">Accounts Software</text>
      <text x="97" y="128" font-family="'Inter', 'Segoe UI', sans-serif" font-size="12" font-weight="500" fill="#94A3B8" text-anchor="middle">Complete Real Estate</text>
      <text x="97" y="146" font-family="'Inter', 'Segoe UI', sans-serif" font-size="12" font-weight="500" fill="#94A3B8" text-anchor="middle">Management System</text>
    </g>
  </g>

  <!-- ============================================================
       RIGHT: QR CODE CONTAINER CARD & PILL
       ============================================================ -->
  <g transform="translate(710, 85)">
    <!-- White QR Card with Rounded Corners & Purple Outline -->
    <rect width="180" height="180" rx="16" fill="#FFFFFF" stroke="#A855F7" stroke-width="3" filter="url(#qrShadow)"/>
    
    <!-- Scannable Vector QR Code -->
    <g transform="translate(18, 18) scale(3.2)">
      ${qrBody}
    </g>

    <!-- Purple Pill: Scan to Visit My Portfolio -->
    <g transform="translate(-7, 195)">
      <rect width="194" height="42" rx="12" fill="url(#purpleAccentPill)" stroke="#C084FC" stroke-width="1.2"/>
      <!-- Scan Corner Bracket Icon -->
      <path d="M 18 15 L 14 15 L 14 19 M 14 23 L 14 27 L 18 27 M 28 15 L 32 15 L 32 19 M 32 23 L 32 27 L 28 27" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
      <text x="40" y="21" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Scan to Visit</text>
      <text x="40" y="34" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">My Portfolio</text>
    </g>
  </g>

  <!-- ============================================================
       BOTTOM STRIP: TECH STACK + "LET'S BUILD SOMETHING GREAT TOGETHER"
       ============================================================ -->
  <g transform="translate(0, 480)">

    <!-- Left Angular Purple Shard -->
    <polygon points="0,120 70,0 150,0 80,120" fill="url(#purpleRibbon1)"/>
    <polygon points="0,120 0,60 50,0 70,0" fill="#3B0764"/>

    <!-- White Tech Band with Angled Cut -->
    <polygon points="120,0 600,0 550,120 70,120" fill="#FFFFFF"/>

    <!-- Tech Stack Logos Inside White Band -->
    <g transform="translate(145, 20)">

      <!-- Laravel (Red Cube + Text) -->
      <g transform="translate(0, 5)">
        <!-- Laravel Vector Logo -->
        <path d="M 12 5 L 25 12 L 25 27 L 12 34 L 0 27 L 0 12 Z" fill="#FF2D20"/>
        <path d="M 12 5 L 12 20 L 25 27 M 12 20 L 0 27" fill="none" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="32" y="24" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="15" font-weight="800" fill="#111827">Laravel</text>
      </g>

      <!-- React.js (Cyan Atom + Text) -->
      <g transform="translate(115, 5)">
        <ellipse cx="14" cy="18" rx="14" ry="5.5" fill="none" stroke="#00D8FF" stroke-width="1.6" transform="rotate(30 14 18)"/>
        <ellipse cx="14" cy="18" rx="14" ry="5.5" fill="none" stroke="#00D8FF" stroke-width="1.6" transform="rotate(-30 14 18)"/>
        <ellipse cx="14" cy="18" rx="14" ry="5.5" fill="none" stroke="#00D8FF" stroke-width="1.6"/>
        <circle cx="14" cy="18" r="2.8" fill="#00D8FF"/>
        <text x="34" y="24" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="15" font-weight="700" fill="#111827">React.js</text>
      </g>

      <!-- Node.js (Green Hexagon + Text) -->
      <g transform="translate(225, 5)">
        <polygon points="12,4 24,11 24,25 12,32 0,25 0,11" fill="#339933"/>
        <text x="6" y="23" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#FFFFFF">JS</text>
        <text x="30" y="24" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="15" font-weight="700" fill="#111827">Node.js</text>
      </g>

      <!-- php (Blue Oval + Text) -->
      <g transform="translate(325, 5)">
        <ellipse cx="20" cy="18" rx="20" ry="12" fill="#4F5D95"/>
        <text x="20" y="23" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">php</text>
      </g>
    </g>

    <!-- Vertical Divider | -->
    <line x1="595" y1="20" x2="595" y2="60" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2"/>

    <!-- Right Slogan: Let's Build Something Great Together! -->
    <g transform="translate(620, 44)">
      <text x="0" y="0" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="18" font-weight="700" letter-spacing="0.3">
        <tspan fill="#FFFFFF">Let's Build Something </tspan>
        <tspan fill="#C084FC">Great</tspan>
        <tspan fill="#FFFFFF"> Together!</tspan>
      </text>
      <!-- Purple Swoosh Accent -->
      <path d="M 80 14 Q 125 11 165 17 Q 125 19 80 14 Z" fill="#7C3AED"/>
    </g>
  </g>
</svg>`;

fs.writeFileSync('visiting-card/ahtisham-card-back.svg', backSvg, 'utf8');
console.log('visiting-card/ahtisham-card-back.svg created (exact match to screenshot)!');

