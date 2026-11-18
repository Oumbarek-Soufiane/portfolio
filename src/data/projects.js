// All portfolio projects and their case-study content.
// Each chapter is a list of typed blocks rendered by <CaseStudy />.

const A = (f) => `assets/${f}`;

export const projects = [
  /* ============================ RACETIMER ============================ */
  {
    id: 'racetimer',
    title: 'RaceTimer Scoreboard',
    card: 'Real-time sports timing & broadcast desktop app',
    summary: 'Researched, designed and engineered for Racetimer Morocco. Deployed live at the 9th Rabat International Marathon.',
    tag: 'Desktop · UX/UI · Full-stack',
    cats: ['full', 'ux'],
    featured: true,
    thumb: { video: A('racetimer.mp4'), poster: A('racetimer.jpg') },
    kicker: 'Case study · Internship · Racetimer Morocco',
    h1: ['RaceTimer Scoreboard — broadcasting sports results ', 'in real time'],
    lead: 'Design and development of an interactive desktop application that pushes startlists, running clocks and results to multiple screens for organisers, officials and spectators — deployed live at the 9th Rabat International Marathon.',
    meta: [
      ['Role', 'UX/UI Designer & Software Engineer (intern)'],
      ['Timeline', 'Apr — Jun 2026'],
      ['Stack', 'Electron · Vue.js + Vite · Node.js · UDP · SSE'],
      ['Outcome', 'Live at the 9th Rabat International Marathon'],
    ],
    cover: { video: A('racetimer-demo.mp4'), poster: A('rt-live-40.jpg') },
    chapters: [
      {
        id: 'context', label: 'Context & research',
        title: 'Sports timing is about trust, and trust needs fast results.',
        blocks: [
          { t: 'p', html: '<strong>Sports timing</strong> is the set of methods and technologies used to measure, record and validate athletes’ times during a competition. My research started from one observation: showing startlists and results quickly and in real time is the backbone of a successful event.' },
          { t: 'cards', cols: 3, items: [
            { ic: 'eye', title: 'Transparency', text: 'Results visible to everyone, the moment they exist.' },
            { ic: 'users', title: 'Audience engagement', text: 'Spectators follow the race as it happens, not after it.' },
            { ic: 'clock', title: 'Informed decisions', text: 'Officials, athletes and coaches act in the moment, with less waiting stress.' },
          ]},
          { t: 'h3', text: 'The client — Racetimer Morocco' },
          { t: 'p', html: 'Racetimer Morocco organises, times and manages major sporting events across Morocco. It supplies RFID chip systems, race bibs and live rankings for athletes, and needed a modern, flexible way to put that data on screens.' },
        ],
      },
      {
        id: 'problem', label: 'Problem statement',
        title: 'The data is fast. The display isn’t.',
        blocks: [
          { t: 'cards', cols: 2, items: [
            { ic: '1', title: 'Timing software generates data quickly', text: 'FinishLynx produces results almost instantly at the finish line.' },
            { ic: '2', title: 'Result display is not modern or flexible', text: 'Existing boards look dated and can’t easily adapt to new layouts.' },
            { ic: '3', title: 'Display boards are hard to customise', text: 'Changing a design for an event means technical work, not a few clicks.' },
            { ic: '4', title: 'Operators need a simple interface', text: 'The people running the screens work under pressure and need clarity.' },
          ]},
          { t: 'quote', text: '“How do we design an interactive application that broadcasts sports results efficiently in real time, while guaranteeing a smooth user experience and a scalable architecture?”' },
        ],
      },
      {
        id: 'ops', label: 'Operational context',
        title: 'From the finish line to the big screen.',
        blocks: [
          { t: 'p', html: 'I mapped the end-to-end business flow before designing anything. Every screen in the app exists to serve one step of it.' },
          { t: 'flow', items: [
            { title: 'FinishLynx', text: 'Captures the results at the line' },
            { title: 'UDP transfer', text: 'Data is sent as UDP datagrams' },
            { title: 'RaceTimer app', text: 'Parses & processes the information' },
            { title: 'Screens', text: 'Display results to every audience' },
          ]},
          { t: 'p', html: 'The app was tested in a lab with a large-format screen simulating real event conditions. <strong>Goal: smooth, instant display of sports results.</strong>' },
          { t: 'gal', items: [
            { src: A('rt-live-40.jpg'), title: 'Running clock', cap: 'streamed live to a display screen' },
            { src: A('rt-live-85.jpg'), title: 'Live startlist', cap: 'bib, athlete name and affiliation' },
          ]},
        ],
      },
      {
        id: 'design', label: 'Design UI/UX',
        title: 'Turning technical data into information you read at a glance.',
        blocks: [
          { t: 'p', html: 'The visual identity was built for a real-time sports context. The objective: transform technical data (times, rankings, stopwatch) into information that is <strong>clear, hierarchical and immediately understandable</strong>.' },
          { t: 'h3', text: 'Colour palette' },
          { t: 'swatches', items: [
            { hex: '#ED0D0D', fg: '#fff', title: 'Accent red', text: 'Urgency, performance, important data' },
            { hex: '#000000', fg: '#fff', title: 'Black', text: 'Structure, visual foundation, stability' },
            { hex: '#FFFFFF', fg: '#000', title: 'White', text: 'Legibility, breathing room, contrast' },
          ]},
          { t: 'cards', cols: 4, items: [
            { title: 'Excellent contrast', text: 'For fast reading' },
            { title: 'Instant hierarchy', text: 'Of information' },
            { title: 'Built for giant screens', text: 'And outdoor conditions' },
            { title: 'Less visual fatigue', text: 'Over long events' },
          ]},
          { t: 'h3', text: 'Typography — Poppins' },
          { t: 'type', big: '10000m — J.F   1:04.0', mid: 'Startlist · Running Clock · Records · False Start', note: 'A large x-height keeps text readable from a distance; geometric shapes with soft curves look modern and balanced on screens, Retina and large-format displays.' },
          { t: 'h3', text: 'Applied UX foundations' },
          { t: 'cards', cols: 2, items: [
            { ic: 'H', title: 'Visual hierarchy', text: 'Information organised by importance, applying the Gestalt laws and Fitts’s law.', ref: 'Reference: ISO 9241-110' },
            { ic: 'A', title: 'Legibility & accessibility', text: 'Sans-serif typography and high contrast ratios.', ref: 'Reference: WCAG 2.1' },
            { ic: 'R', title: 'Responsiveness', text: 'Adapts to operator screens and giant LED displays.', ref: 'Reference: Nielsen heuristics' },
            { ic: 'C', title: 'Consistency & homogeneity', text: 'Uniform Vue.js components and the same patterns across every view.', ref: 'Reference: Bastien & Scapin' },
          ]},
        ],
      },
      {
        id: 'process', label: 'Design process',
        title: 'From grey boxes to a live broadcast tool.',
        blocks: [
          { t: 'p', html: 'I designed the whole application in Figma — low-fidelity wireframes, then a component library, then high-fidelity screens — before writing the Vue.js code.' },
          { t: 'stage', n: 1, text: 'Low-fidelity wireframes' },
          { t: 'gal', cols: 3, items: [
            { src: A('rt-wf-frame.jpg'), title: 'Frame editor', cap: 'canvas, toolbar, properties' },
            { src: A('rt-wf-text.jpg'), title: 'Text editor', cap: 'extended property panel' },
            { src: A('rt-wf-outputs.jpg'), title: 'Outputs', cap: 'five-screen overview' },
          ]},
          { t: 'stage', n: 2, text: 'Components & navigation system' },
          { t: 'fig', src: A('rt-components.jpg'), title: 'Sidebar component', cap: 'collapsed icon rail with tooltips, and an expanded state grouped into Design / Configuration' },
          { t: 'stage', n: 3, text: 'High-fidelity screens' },
          { t: 'gal', items: [
            { src: A('rt-text.jpg'), title: 'Design editor', cap: 'grid, snapping and live-screen targeting' },
            { src: A('rt-outputs.jpg'), title: 'Outputs', cap: 'what is live on each of the five screens' },
            { src: A('rt-shape.jpg'), title: 'Shape tool', cap: 'position, size, rotation and background' },
            { src: A('rt-template.jpg'), title: 'My Saved Designs', cap: 'reusable clock, records and startlist templates' },
          ]},
          { t: 'stage', n: 4, text: 'Built & running' },
          { t: 'gal', items: [
            { src: A('rt-live-70.jpg'), title: 'Startlist editor', cap: 'FinishLynx fields bound to text layers' },
            { src: A('rt-live-8.jpg'), title: 'Network configuration', cap: 'IPv4 binding, port, test connection' },
          ]},
        ],
      },
      {
        id: 'arch', label: 'Architecture',
        title: 'A simplified three-tier architecture.',
        blocks: [
          { t: 'fig', src: A('rt-architecture.jpg'), title: 'Architecture', cap: 'presentation (Vue.js), business logic (Node.js), data (appState in RAM)' },
          { t: 'table', head: ['Layer', 'Responsibilities'], rows: [
            ['Frontend — Vue.js + Vite', 'Displays the data, manages the views (Startlist, Running Clock, Records, False Start, Results) and provides the operator interface.'],
            ['Backend — Node.js', 'Listens on UDP, parses the data, exposes a REST API and Server-Sent Events.'],
            ['Electron', 'System and network access; packages everything as a desktop application.'],
            ['Data', 'In-memory appState state manager shared by processing and distribution.'],
          ]},
        ],
      },
      {
        id: 'network', label: 'Network engineering',
        title: 'Lightweight, fast, built for real time.',
        blocks: [
          { t: 'cards', cols: 2, items: [
            { ic: 'FL', title: 'Data source — FinishLynx', text: 'The world reference for photo-finish systems.' },
            { ic: 'UDP', title: 'Communication — UDP', text: 'No guaranteed delivery, but very fast broadcast and suited to real time — so validation happens on our side.' },
          ]},
          { t: 'h3', text: 'Processing & distribution' },
          { t: 'flow', items: [
            { title: 'udpListener.js', text: 'Receives packets → parses → validates' },
            { title: 'REST API', text: 'Startlist · Records · static information' },
            { title: 'SSE stream', text: 'Running clock · continuous real-time data' },
          ]},
          { t: 'p', html: '<strong>Why this split:</strong> data that rarely changes is fetched over REST, while the running clock is pushed continuously over SSE — light, high-performance communication.' },
        ],
      },
      {
        id: 'gov', label: 'Project governance',
        title: 'Agile Kanban on Trello, GitFlow on GitHub.',
        blocks: [
          { t: 'h3', text: 'Trello workflow' },
          { t: 'kanban', items: ['Information', 'Task', 'To do', 'In progress', 'Blocked', 'Code review', 'Tested & done'] },
          { t: 'p', html: 'Benefits: task tracking and full traceability of every change.' },
          { t: 'h3', text: 'GitFlow strategy' },
          { t: 'branches', items: [
            { name: 'main', color: '#ED0D0D', text: 'Production releases' },
            { name: 'develop', color: '#333333', text: 'Integration branch' },
            { name: 'feature', color: 'var(--accent)', dark: true, text: 'One branch per feature' },
          ]},
        ],
      },
      {
        id: 'security', label: 'Security',
        title: 'Protecting the FinishLynx parser and the code.',
        blocks: [
          { t: 'cards', cols: 2, items: [
            { ic: 'check', title: 'UDP packet validation', text: 'Error handling with try/catch and filtering of corrupted data before it reaches a screen.' },
            { ic: 'lock', title: 'Code protection', text: 'JavaScript obfuscation (lexical renaming, flow flattening, string encryption) and a sealed ASAR package to limit reverse-engineering.' },
          ]},
          { t: 'fig', src: A('rt-security.jpg'), title: 'Security pipeline', cap: 'readable source → obfuscation (Vite/Rollup) → sealed ASAR → protected .exe' },
        ],
      },
      {
        id: 'outcome', label: 'Outcome',
        title: 'Validated in the lab, proven at the marathon.',
        blocks: [
          { t: 'out', items: [
            { b: 'Live', s: 'Deployed at the 9th Rabat International Marathon' },
            { b: '5 screens', s: 'Controlled from one operator interface' },
            { b: 'UX + Code + Network', s: 'Designed and engineered end to end' },
          ]},
          { t: 'p', html: 'This project combined UX/UI design, software development and network engineering into one real-time broadcasting tool. The tests validated the solution and showed the value of this architecture for sporting events.' },
        ],
      },
    ],
  },

  /* ============================ FASHIONFLOW ============================ */
  {
    id: 'fashionflow',
    title: 'FashionFlow',
    card: 'Video-first e-commerce platform',
    summary: 'Editorial storefront where every product moves. Angular, Spring Boot, PostgreSQL, Docker.',
    tag: 'Full-stack · UX/UI',
    cats: ['full', 'ux'],
    thumb: { video: A('fashionflow.mp4'), poster: A('fashionflow.jpg') },
    kicker: 'Case study · Full-stack engineering & UI/UX design',
    h1: ['FashionFlow — an immersive, ', 'video-first', ' e-commerce platform'],
    lead: 'End-to-end architecture, an interactive storefront, AI-assisted product recommendations and a full-stack implementation built with Angular, Spring Boot, PostgreSQL and Docker.',
    meta: [
      ['Role', 'Full-Stack Engineer & UI/UX Designer'],
      ['Timeline', 'Feb — Mar 2026'],
      ['Core stack', 'Angular · Spring Boot · PostgreSQL · Docker'],
      ['Highlights', 'Video-first catalog · AI recs · Admin CMS'],
    ],
    cover: { video: A('fashionflow-demo.mp4'), poster: A('ff-15.jpg') },
    chapters: [
      {
        id: 'overview', label: 'Overview & vision',
        title: 'Bridging high-fashion lookbooks and seamless online retail.',
        blocks: [
          { t: 'p', html: 'FashionFlow is a modern, editorial-grade e-commerce platform. Traditional online apparel stores rely on static photography, which often fails to convey <strong>garment drape, fabric movement and real-world fit</strong> — leading to buyer hesitation and high return rates.' },
          { t: 'p', html: 'FashionFlow replaces static product imagery with a <strong>video-first shopping architecture</strong>. From the ambient, voiceover-guided landing gateway to silent runway loops across catalog cards, recommendation carousels and admin dashboards, every touchpoint feels alive, tactile and responsive.' },
        ],
      },
      {
        id: 'research', label: 'Research & purpose',
        title: 'Why static photos aren’t enough.',
        blocks: [
          { t: 'ch', labels: ['The problem', 'The purpose'], items: [
            { a: 'Photos hide how clothes behave', ad: 'Shoppers can’t see drape, movement or fit, so they hesitate to buy and many purchases come back.', b: 'Let every product move', bd: 'Show garments the way a runway or lookbook does: in motion, on a body, from several angles.' },
          ]},
          { t: 'h3', text: 'Design goals' },
          { t: 'cards', cols: 3, items: [
            { ic: '1', title: 'Motion is the hero', text: 'The UI stays quiet so garment movement is the focal point.' },
            { ic: '2', title: 'Less friction', text: 'Fewer steps between seeing a product and adding it to the cart.' },
            { ic: '3', title: 'Accessible everywhere', text: 'EN / FR / AR with RTL, across 4K desktops, tablets and phones.' },
          ]},
        ],
      },
      {
        id: 'design', label: 'UI/UX design',
        title: 'Editorial visual identity & spatial hierarchy.',
        blocks: [
          { t: 'h3', text: 'High-contrast minimalism' },
          { t: 'swatches', items: [
            { hex: '#141416', fg: '#fff', title: 'Deep obsidian', text: 'Surfaces that let motion stand out' },
            { hex: '#FAFAFA', fg: '#141416', label: 'Neutral white', title: 'Crisp whites', text: 'Text and structure' },
            { hex: '#E5B109', fg: '#141416', title: 'Gold accent', text: 'Ratings and status highlights' },
          ]},
          { t: 'p', html: '<strong>Typography & readability:</strong> a geometric sans-serif hierarchy with uppercase tracked eyebrow labels, condensed display headlines, and tabular numerals for prices and ratings, so dynamic updates never shift the layout.' },
          { t: 'h3', text: 'Sensory onboarding & motion choreography' },
          { t: 'cards', cols: 3, items: [
            { ic: 'expand', title: 'Interactive entry gateway', text: 'A blurred hero stage with a deliberate “Click to Enter” that lifts the veil and triggers a welcome voiceover, while background footage stays muted.' },
            { ic: 'video', title: 'Silent autoplay video grid', text: 'Hardware-accelerated, muted looping HTML5 video with object-fit cover framing, like a luxury digital lookbook.' },
            { ic: 'repeat', title: 'Viewport-aware carousels', text: 'Sliders measure scrollWidth against clientWidth live instead of assuming fixed pixels.' },
          ]},
          { t: 'h3', text: 'Frictionless micro-interactions & i18n' },
          { t: 'cards', cols: 3, items: [
            { ic: '3→1', title: 'Hover-triggered quick-shop', text: 'Hovering a card reveals XS–XXL sizes and instant “Add to Cart” feedback — from three clicks to one.' },
            { ic: '◉', title: 'Multi-variant video switcher', text: 'Dot indicators and thumbnail strips switch angles and styling videos with no page reload.' },
            { ic: 'ع', title: 'Full RTL/LTR support', text: '@ngx-translate/core with directional CSS mirroring across English, French and Arabic.' },
          ]},
        ],
      },
      {
        id: 'screens', label: 'Key screens',
        title: 'The storefront, checkout and admin CMS.',
        blocks: [
          { t: 'fig', src: A('ff-100.jpg'), title: 'Category gateway', cap: 'Formal, Casual, Traditional, Sport and Accessories, each with a moving preview' },
          { t: 'gal', items: [
            { src: A('ff-15.jpg'), title: 'Landing', cap: 'ambient hero with language switcher' },
            { src: A('ff-grid.jpg'), title: 'Catalog', cap: 'filters, sorting and video product cards' },
            { src: A('ff-130.jpg'), title: 'Checkout', cap: 'secure payment with order summary' },
            { src: A('ff-220.jpg'), title: 'Order history', cap: 'past purchases and shipment tracking' },
            { src: A('ff-250.jpg'), title: 'Admin · Products', cap: 'catalog management' },
            { src: A('ff-280.jpg'), title: 'Admin · Orders', cap: 'status pipeline from pending to delivered' },
          ]},
        ],
      },
      {
        id: 'arch', label: 'Architecture',
        title: 'A decoupled three-tier client–server architecture.',
        blocks: [
          { t: 'p', html: 'Designed for scalability, strict type safety and a clean separation of concerns.' },
          { t: 'table', head: ['Layer', 'Technologies', 'Responsibilities'], rows: [
            ['Frontend SPA', 'Angular standalone components, TypeScript, Signals, RxJS, SCSS, ngx-translate', 'Reactive state with Signals, lazy-loaded routes, custom media components, JWT interceptors, responsive admin dashboards.'],
            ['Backend REST API', 'Java 21, Spring Boot 3, Spring Security, Spring Data JPA, Lombok, Maven', 'Layered controller–service–repository, role-based access (USER / ADMIN), DTO mapping, global exception handling, Spring Cache.'],
            ['Media pipeline', 'Multipart streaming, static resource mapping, MIME validation', '/api/upload/videos endpoint: uploads up to 200 MB, MP4/WebM/MOV only, UUID filename sanitisation.'],
            ['Persistence & infra', 'PostgreSQL, Hibernate, Flyway, Docker & Docker Compose', 'UUID keys, indexed price/timestamp queries, @ElementCollection video URLs, behavioural analytics, containerised deployment.'],
          ]},
        ],
      },
      {
        id: 'eng', label: 'Engineering',
        title: 'Backend and frontend, built together.',
        blocks: [
          { t: 'h3', text: 'Backend — Spring Boot & PostgreSQL' },
          { t: 'cards', cols: 2, items: [
            { title: 'Video-centric domain model', text: 'Product entity refactored to map videos into a dedicated product_videos table linked by UUID foreign keys.' },
            { title: 'Hardened media upload service', text: 'Server-side MIME allow-listing, 200 MB payload limits and collision-free UUID naming.' },
            { title: 'Dynamic filtering & cache eviction', text: 'Paginated multi-criteria queries backed by @Cacheable / @CacheEvict.' },
            { title: 'Stateless JWT security & RBAC', text: 'Admin endpoints guarded with @PreAuthorize("hasRole(\'ADMIN\')") and custom JWT filters.' },
          ]},
          { t: 'h3', text: 'Frontend — Angular Signals & reactive UI' },
          { t: 'cards', cols: 3, items: [
            { title: 'Fine-grained reactivity', text: 'Signals across cards, galleries, ratings and cart state to minimise change detection.' },
            { title: 'Two-step publishing pipeline', text: 'Drag-and-drop video previews; upload via FormData, resolve URLs, then dispatch the product atomically.' },
            { title: 'Telemetry & recommendations', text: 'Views, cart additions and 1–5 star ratings feed “Selected For You” and “Similar Products”.' },
          ]},
          { t: 'chips', items: ['Angular', 'TypeScript', 'Signals', 'RxJS', 'Java 21', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Flyway', 'Docker'] },
        ],
      },
      {
        id: 'challenges', label: 'Challenges',
        title: 'Problems I hit, and how I solved them.',
        blocks: [
          { t: 'ch', items: [
            { a: 'Browser autoplay restrictions & audio overlap', ad: 'Browsers block autoplay with sound, and several videos risked playing audio at once.', b: 'Strict muted binding + one audio gesture', bd: '[muted]="true" and playsinline on every video; welcome audio isolated to the explicit entry gesture.' },
            { a: 'Large video payloads & schema migration', ad: 'Videos are heavy, and the schema was built around images.', b: '200 MB multipart + zero-loss migration', bd: 'Media storage decoupled from JSON entities; product_images → product_videos migrated with no data loss.' },
            { a: 'Carousel overflow across viewports', ad: 'Fixed-pixel offset maths broke on different screen sizes.', b: 'Live DOM measurement', bd: 'scrollWidth vs clientWidth via Angular @ViewChild for accurate slide boundaries on any screen.' },
          ]},
        ],
      },
    ],
  },

  /* ============================ SAFESURF ============================ */
  {
    id: 'safesurf',
    title: 'SafeSurf Kids',
    card: 'Real-time nudity & violence detection',
    summary: 'A Chrome extension that uses AI to scan and block harmful images in real time. Presented at the Google DeepMind Hackathon.',
    tag: 'AI · Browser extension',
    cats: ['ai', 'full', 'ux'],
    thumb: { video: A('safesurf.mp4'), poster: A('safesurf.jpg') },
    kicker: 'Case study · AI · Google DeepMind Hackathon',
    h1: ['SafeSurf Kids — an AI shield that ', 'blocks harmful images', ' before children see them'],
    lead: 'A Google Chrome extension that scans every image on a page in real time, blurs it until it’s judged safe, and replaces nudity or violence with a clear explanation — with a parent PIN so only adults can turn protection off.',
    meta: [
      ['Role', 'Software Engineer & UX/UI Designer'],
      ['Timeline', 'Jan — Feb 2026'],
      ['Stack', 'Chrome Extension · JavaScript · Multimodal AI vision'],
      ['Showcase', 'Google DeepMind Hackathon'],
    ],
    cover: { video: A('safesurf-demo.mp4'), poster: A('ss-blocked.jpg') },
    chapters: [
      {
        id: 'context', label: 'Context & research',
        title: 'Harmful images don’t only live on “bad” websites.',
        blocks: [
          { t: 'p', html: 'Children browse social feeds, news sites and image-heavy pages where a violent or explicit picture can appear between two harmless posts. Most parental controls work at the <strong>website level</strong> — they block whole domains or keywords — so they miss harmful images on otherwise safe pages, and over-block useful ones.' },
          { t: 'cards', cols: 3, items: [
            { ic: 'globe', title: 'Mixed feeds', text: 'Safe and unsafe content sit side by side on the same page.' },
            { ic: 'list', title: 'Blocklists fall short', text: 'URL and keyword filters can’t “see” what an image actually shows.' },
            { ic: 'users', title: 'Parents need control', text: 'Protection must stay on — unless a parent decides otherwise.' },
          ]},
        ],
      },
      {
        id: 'problem', label: 'Problem & goals',
        title: 'Filter the image, not the website.',
        blocks: [
          { t: 'quote', text: '“How can the browser protect children from harmful images on any page, in real time, without parents having to block entire websites?”' },
          { t: 'h3', text: 'Design goals' },
          { t: 'cards', cols: 2, items: [
            { ic: '1', title: 'Safe by default', text: 'Every image is blurred first and only revealed once it’s judged safe.' },
            { ic: '2', title: 'Explain, don’t just hide', text: 'Blocked images show a short, plain-language reason.' },
            { ic: '3', title: 'Friction for adults only', text: 'A parent PIN is required to pause protection; children browse normally.' },
            { ic: '4', title: 'Visible status', text: 'A dashboard shows protection status and what has been scanned and blocked.' },
          ]},
        ],
      },
      {
        id: 'how', label: 'How it works',
        title: 'Scan → judge → reveal or block, on every image.',
        blocks: [
          { t: 'flow', items: [
            { title: 'Page loads', text: 'The extension finds the images on the page' },
            { title: 'Blur + “Scanning…”', text: 'Images stay blurred while they are checked' },
            { title: 'AI vision check', text: 'A multimodal model classifies nudity & violence' },
            { title: 'Reveal or block', text: 'Safe images unblur; unsafe ones get a BLOCKED card' },
          ]},
          { t: 'gal', items: [
            { src: A('ss-blur.jpg'), title: 'Scanning', cap: 'the feed is blurred while images are analysed' },
            { src: A('ss-blocked.jpg'), title: 'Blocked', cap: '“a threatening figure in a hood holding a large knife” — replaced with a reason' },
          ]},
        ],
      },
      {
        id: 'design', label: 'UX/UI design',
        title: 'A calm, trustworthy shield for families.',
        blocks: [
          { t: 'p', html: 'The popup is the parent’s control centre, so I designed it to communicate <strong>one state at a glance</strong>: “You are Protected”. A shield icon, a single primary action and four counters keep it understandable for non-technical parents.' },
          { t: 'h3', text: 'Palette (sampled from the designs)' },
          { t: 'swatches', items: [
            { hex: '#4B4CE7', fg: '#fff', title: 'Indigo', text: 'Trust and calm — the protection card' },
            { hex: '#F8FAFC', fg: '#1e1e2e', label: 'Soft white', title: 'Soft white', text: 'Clean background for stats' },
            { hex: '#FF6B5E', fg: '#fff', title: 'Alert coral', text: 'Reserved for blocked content only' },
          ]},
          { t: 'cards', cols: 3, items: [
            { ic: 'shield', title: 'Status first', text: '“Protection active” badge and a big “You are Protected” headline.' },
            { ic: 'lock', title: 'Parent PIN flow', text: 'Set a 4+ digit PIN on install; “PIN required to pause” prevents children from switching it off.' },
            { ic: 'chart', title: 'Transparent counters', text: 'Images scanned, Blocked, Videos blocked and Total scanned.' },
          ]},
        ],
      },
      {
        id: 'screens', label: 'Key screens',
        title: 'From install to a blocked image.',
        blocks: [
          { t: 'gal', items: [
            { src: A('ss-install.jpg'), title: 'Install', cap: 'loaded as an unpacked Chrome extension' },
            { src: A('ss-pin.jpg'), title: 'Parent PIN setup', cap: 'create and confirm a 4+ digit PIN' },
            { src: A('ss-popup.jpg'), title: 'Protection dashboard', cap: 'status, pause button and live counters' },
            { src: A('ss-unlock.jpg'), title: 'Parent PIN required', cap: 'unlock needed to pause protection' },
            { src: A('ss-feed.jpg'), title: 'Demo feed', cap: 'a test social feed used for the live demo' },
            { src: A('ss-blocked.jpg'), title: 'Blocked overlay', cap: 'reason shown in plain language' },
          ]},
        ],
      },
      {
        id: 'eng', label: 'Engineering',
        title: 'Three parts working together.',
        blocks: [
          { t: 'table', head: ['Part', 'Responsibility'], rows: [
            ['Content script', 'Runs on the page: finds images, blurs them, shows the “Scanning…” badge and swaps in the BLOCKED card or reveals the image.'],
            ['Service worker', 'Background logic: sends each image to the AI vision model and returns a verdict and a short reason.'],
            ['Popup UI', 'Parent dashboard: protection status, PIN-protected pause, and scan/block counters.'],
          ]},
          { t: 'p', html: 'Version control and collaboration were managed with <strong>Git &amp; GitHub</strong>, and a dedicated demo page (Nature Lover, Travel Guide, News Alert posts) made the behaviour easy to show live.' },
          { t: 'chips', items: ['Chrome Extension', 'JavaScript', 'Service Worker', 'Multimodal AI', 'Git', 'GitHub'] },
        ],
      },
      {
        id: 'outcome', label: 'Outcome',
        title: 'Presented at the Google DeepMind Hackathon.',
        blocks: [
          { t: 'out', items: [
            { b: 'Real time', s: 'Images checked as the page loads' },
            { b: 'Image-level', s: 'Blocks the picture, not the whole site' },
            { b: 'Parent PIN', s: 'Only adults can pause protection' },
          ]},
          { t: 'h3', text: 'Next steps' },
          { t: 'cards', cols: 3, items: [
            { title: 'Video frames', text: 'Extend scanning to video, building on the “Videos blocked” counter.' },
            { title: 'Per-child profiles', text: 'Different sensitivity levels by age.' },
            { title: 'Privacy', text: 'Explore on-device models so images never leave the browser.' },
          ]},
        ],
      },
    ],
  },

  /* ============================ BRAINSTRADA ============================ */
  {
    id: 'brainstrada',
    title: 'BrainStrada',
    card: 'E-learning website',
    summary: 'A course platform designed end to end: discover, preview, buy, learn, take the quiz and earn a certificate. Designed in Figma.',
    tag: 'UX/UI design',
    cats: ['ux'],
    thumb: { video: A('brainstrada.mp4'), poster: A('brainstrada.jpg') },
    kicker: 'Case study · UX/UI design · Figma',
    h1: ['BrainStrada — develop your career ', 'easily', ', one course at a time'],
    lead: 'An e-learning website with more than 100 animated courses taught by experts. I designed the full learner journey in Figma — from the first visit to the certificate.',
    meta: [
      ['Role', 'UX/UI Designer'],
      ['Tool', 'Figma (interactive prototype)'],
      ['Platform', 'Responsive website'],
      ['Scope', 'Landing · Auth · Course · Checkout · Quiz · Certificate'],
    ],
    cover: { video: A('brainstrada-demo.mp4'), poster: A('bs-landing.jpg') },
    chapters: [
      {
        id: 'overview', label: 'Overview',
        title: 'A learning platform that feels light and motivating.',
        blocks: [
          { t: 'p', html: 'BrainStrada invites learners to “start today and transform your future” with <strong>100+ animated courses by experts</strong>. The challenge was to make a content-heavy product feel calm, trustworthy and easy to move through.' },
          { t: 'fig', src: A('bs-landing.jpg'), title: 'Landing', cap: '“Develop your career easily with BrainStrada” — hero, CTA and partner logos' },
        ],
      },
      {
        id: 'research', label: 'Research & purpose',
        title: 'Where online learners drop off.',
        blocks: [
          { t: 'p', html: 'Looking at how people pick and finish online courses, I focused on four moments where learners commonly lose confidence or motivation, and designed a screen for each one.' },
          { t: 'cards', cols: 2, items: [
            { ic: '1', title: 'Choosing a course', text: 'Hard to judge quality before paying → free video samples, ratings and viewer counts.' },
            { ic: '2', title: 'Paying', text: 'Checkout friction → “Buy” or “Add to Cart”, saved cards and a clear success state.' },
            { ic: '3', title: 'Staying motivated', text: 'No sense of progress → a visible progression bar on every course.' },
            { ic: '4', title: 'Proving the skill', text: 'Nothing to show at the end → a quiz and a signed certificate.' },
          ]},
        ],
      },
      {
        id: 'journey', label: 'User journey',
        title: 'Discover → preview → buy → learn → test → certify.',
        blocks: [
          { t: 'flow', cols: 3, items: [
            { title: 'Discover', text: 'Landing, categories, social proof' },
            { title: 'Sign up', text: 'Glass-style sign-up & login, social sign-in' },
            { title: 'Preview', text: 'Free video samples & “What you will learn”' },
            { title: 'Buy', text: 'Cart & payment method selection' },
            { title: 'Learn & test', text: 'Progression bar and quiz' },
            { title: 'Certify', text: 'Congratulations screen & signed certificate' },
          ]},
        ],
      },
      {
        id: 'design', label: 'Visual design',
        title: 'Soft gradients, clear structure.',
        blocks: [
          { t: 'p', html: 'A soft blue-violet-orange gradient and frosted-glass cards give the product warmth, while a single royal-blue primary keeps actions obvious. Partner logos (Google, Adobe, Coursera, Stripe, LinkedIn) and learner testimonials add <strong>trust</strong> right on the landing page.' },
          { t: 'h3', text: 'Palette (sampled from the designs)' },
          { t: 'swatches', items: [
            { hex: '#3A54B5', fg: '#fff', title: 'Royal blue', text: 'Primary actions and brand mark' },
            { hex: '#8E7CF0', fg: '#fff', title: 'Soft violet', text: 'Gradient and depth' },
            { hex: '#F3A04A', fg: '#1a1a1a', title: 'Warm orange', text: 'Gradient warmth and play button' },
          ]},
          { t: 'gal', items: [
            { src: A('bs-learners.jpg'), title: 'Our Online Learners', cap: 'testimonials on a gradient background' },
            { src: A('bs-signup.jpg'), title: 'Sign up', cap: 'frosted-glass form over the brand gradient' },
          ]},
        ],
      },
      {
        id: 'screens', label: 'Key screens',
        title: 'The full learner journey.',
        blocks: [
          { t: 'gal', items: [
            { src: A('bs-login.jpg'), title: 'Login', cap: 'remember me, forgot password, social login' },
            { src: A('bs-course.jpg'), title: 'Course detail', cap: 'rating, viewers, Buy / Add to Cart' },
            { src: A('bs-samples.jpg'), title: 'Free video samples', cap: 'preview lessons before buying' },
            { src: A('bs-cart.jpg'), title: 'Cart', cap: 'courses with price and order button' },
            { src: A('bs-payment.jpg'), title: 'Payment method', cap: 'Visa, PayPal or Mastercard' },
            { src: A('bs-progress.jpg'), title: 'Payment success & progression', cap: 'confirmation toast and 100% progress bar' },
            { src: A('bs-quiz.jpg'), title: 'Quiz', cap: 'multiple-choice questions on the course' },
            { src: A('bs-certificate.jpg'), title: 'Certificate', cap: '“Congratulation Soufiane!” with signature' },
          ]},
        ],
      },
      {
        id: 'outcome', label: 'Outcome',
        title: 'A complete, testable prototype.',
        blocks: [
          { t: 'out', items: [
            { b: '6 steps', s: 'One continuous learner journey' },
            { b: '11+ screens', s: 'Designed and prototyped in Figma' },
            { b: 'Proof', s: 'Quiz and certificate close the loop' },
          ]},
          { t: 'p', html: 'BrainStrada taught me to design a full product flow rather than isolated screens — every step answers the question the learner has at that moment.' },
        ],
      },
    ],
  },

  /* ============================ NOTAFLOW ============================ */
  {
    id: 'notaflow',
    title: 'NotaFlow',
    card: 'Music platform with live chat & AI',
    summary: 'A dark, immersive music platform with live sessions and chat, AI mixes and smart search. Designed in Figma.',
    tag: 'UX/UI design',
    cats: ['ux'],
    thumb: { video: A('notaflow.mp4'), poster: A('notaflow.jpg') },
    kicker: 'Case study · UX/UI design · Figma',
    h1: ['NotaFlow — ', 'music without limits'],
    lead: 'A music platform to discover, stream and share your favourite music — with live sessions and direct chat, an AI DJ and smart search. I designed the experience end to end in Figma.',
    meta: [
      ['Role', 'UX/UI Designer'],
      ['Tool', 'Figma (interactive prototype)'],
      ['Platform', 'Web application'],
      ['Scope', 'Landing · Auth · Library · Artist · Live & chat · Profile'],
    ],
    cover: { video: A('notaflow-demo.mp4'), poster: A('nf-landing.jpg') },
    chapters: [
      {
        id: 'overview', label: 'Overview',
        title: 'Discover, stream and share.',
        blocks: [
          { t: 'p', html: 'NotaFlow is designed for people who don’t just listen to music — they want to <strong>follow artists, join live sessions and talk with other fans</strong>. The interface had to feel like a night-time concert: dark, focused and full of colour from the artwork.' },
          { t: 'fig', src: A('nf-landing.jpg'), title: 'Landing', cap: '“Music Without Limits” — hero with a single Discover action' },
        ],
      },
      {
        id: 'purpose', label: 'Research & purpose',
        title: 'Listening is passive. Fandom is social.',
        blocks: [
          { t: 'ch', labels: ['The gap', 'The idea'], items: [
            { a: 'Streaming apps are one-way', ad: 'Most platforms play music but leave fans alone, with conversation happening somewhere else.', b: 'Bring the fans in', bd: 'Live sessions with a direct chat beside the video, plus subscribe, join and share actions.' },
          ]},
          { t: 'h3', text: 'Four feature pillars' },
          { t: 'cards', cols: 4, items: [
            { ic: 'IA', title: 'AI mix of the day', text: 'A daily mix generated from your taste.' },
            { ic: 'DJ', title: 'Live AI DJ', text: 'Smooth transitions and live commentary.' },
            { ic: '🔥', title: 'Trending now', text: 'What everyone is listening to.' },
            { ic: '⌕', title: 'Smart search', text: 'Search by mood, artist or lyrics.' },
          ]},
          { t: 'fig', src: A('nf-features.jpg'), title: 'Features', cap: 'Mix du jour IA · DJ IA en direct · Tendances du moment · Recherche intelligente' },
        ],
      },
      {
        id: 'design', label: 'Visual design',
        title: 'A dark stage where artwork is the light.',
        blocks: [
          { t: 'p', html: 'Near-black surfaces let album covers and artist photos provide the colour, with magenta glows for emphasis. A thin, futuristic display face is used for section titles (“The Hottest Songs”, “Trending Artists”) against a simple sans-serif for UI text.' },
          { t: 'h3', text: 'Palette (sampled from the designs)' },
          { t: 'swatches', items: [
            { hex: '#0D0C11', fg: '#fff', title: 'Night black', text: 'Background and surfaces' },
            { hex: '#D1356A', fg: '#fff', title: 'Magenta glow', text: 'Highlights and calls to action' },
            { hex: '#EDEDED', fg: '#0D0C11', title: 'Soft white', text: 'Text and icons' },
          ]},
          { t: 'h3', text: 'Information architecture' },
          { t: 'kanban', items: ['Home', 'Songs', 'Album', 'Tendance', 'Live', 'NOTA AI', 'Log out'] },
          { t: 'p', html: 'A persistent left sidebar keeps every section one click away, while the top bar holds search and the user profile.' },
        ],
      },
      {
        id: 'screens', label: 'Key screens',
        title: 'From sign-in to a live session.',
        blocks: [
          { t: 'gal', items: [
            { src: A('nf-hottest.jpg'), title: 'The Hottest Songs', cap: 'featured tracks with play controls' },
            { src: A('nf-albums.jpg'), title: 'Albums & popular songs', cap: 'library with sidebar navigation' },
            { src: A('nf-artist.jpg'), title: 'Artist page', cap: 'portrait, bio and albums' },
            { src: A('nf-trend.jpg'), title: 'Tendance', cap: 'trending tracks' },
            { src: A('nf-live.jpg'), title: 'Live & direct chat', cap: 'video stream with fan chat, subscribe, join, share' },
            { src: A('nf-profile.jpg'), title: 'Profile', cap: 'personal details, language and time zone' },
            { src: A('nf-login.jpg'), title: 'Login', cap: 'email or social sign-in' },
            { src: A('nf-signup.jpg'), title: 'Sign up', cap: 'two-column registration form' },
          ]},
          { t: 'fig', src: A('nf-find.jpg'), title: 'Find your account', cap: 'account recovery by email or phone' },
        ],
      },
      {
        id: 'outcome', label: 'Outcome',
        title: 'A social music experience, prototyped.',
        blocks: [
          { t: 'out', items: [
            { b: 'Live + chat', s: 'Fans talk while they watch' },
            { b: '4 AI features', s: 'Mix, DJ, trends, smart search' },
            { b: '12+ screens', s: 'Designed and prototyped in Figma' },
          ]},
          { t: 'p', html: 'NotaFlow pushed me to design for emotion as much as usability: the dark UI, the glow and the artwork all serve the feeling of being at a show.' },
        ],
      },
    ],
  },
  /* ============================ GST-CS (graphic design) ============================ */
  {
    id: 'gst',
    title: 'GST-CS',
    card: 'Logo & brand guidelines for a public health group',
    summary: 'Logo proposal and full charte graphique for the Groupement Sanitaire Territorial Casablanca-Settat — logo, colours, typography, usage rules and mockups.',
    tag: 'Graphic design · Branding',
    cats: ['design'],
    thumb: { img: A('gst-variations.jpg') },
    kicker: 'Case study · Graphic design · Visual identity',
    h1: ['GST-CS — a visual identity for ', 'regional public healthcare'],
    lead: 'My logo proposal and brand guidelines (charte graphique) for the Groupement Sanitaire Territorial Casablanca-Settat, a Moroccan public institution that coordinates healthcare across the region as part of the national health system reform.',
    meta: [
      ['Role', 'Graphic Designer — logo & brand guidelines'],
      ['Client', 'GST Casablanca-Settat (proposal)'],
      ['Deliverables', 'Logo · colours · typography · usage rules · mockups'],
      ['Languages', 'French · Arabic · Tifinagh'],
    ],
    cover: { img: A('gst-cover.jpg') },
    chapters: [
      {
        id: 'context', label: 'Context',
        title: 'One identity for a whole regional health network.',
        blocks: [
          { t: 'p', html: 'The <strong>Groupement Sanitaire Territorial Casablanca-Settat (GST-CS)</strong> is a public institution responsible for coordinating the healthcare offer at regional level, within the reform of Morocco’s national health system.' },
          { t: 'p', html: 'Because it brings many hospitals and health centres under one roof, it needs a visual identity that every establishment can use consistently. The charte graphique sets the rules for the logo, colours, typography and graphic elements, so communication stays <strong>coherent, modern and institutional</strong> on every support.' },
          { t: 'quote', text: '“Ensemble pour une santé de qualité” — Together for quality healthcare.' },
          { t: 'h3', text: 'Brand values' },
          { t: 'kanban', items: ['Proximité', 'Confiance', 'Qualité', 'Innovation', 'Coordination'] },
        ],
      },
      {
        id: 'brief', label: 'Research & brief',
        title: 'What the logo had to say.',
        blocks: [
          { t: 'cards', cols: 2, items: [
            { ic: '1', title: 'Instantly read as healthcare', text: 'Citizens should recognise a health institution at a glance, on a van, a sign or a badge.' },
            { ic: '2', title: 'Express the “groupement”', text: 'Many establishments, one network — the mark should show union and continuity of care.' },
            { ic: '3', title: 'Institutional and trustworthy', text: 'A public body needs a sober, stable look rather than a trendy one.' },
            { ic: '4', title: 'Trilingual by design', text: 'Name set in French, Arabic and Tifinagh, as expected for a Moroccan public institution.' },
          ]},
        ],
      },
      {
        id: 'logo', label: 'Logotype',
        title: 'An ECG in the C, a network in the G.',
        blocks: [
          { t: 'fig', src: A('gst-logo.jpg'), title: 'Logo construction', cap: 'logotype on its construction grid, with the trilingual name' },
          { t: 'cards', cols: 2, items: [
            { ic: 'C', title: 'The ECG trace in the letter “C”', text: 'A direct reference to medicine. A universal symbol of life and of monitoring vital signs, it stands for care, hospital expertise and the Group’s commitment to citizens’ health.' },
            { ic: 'G', title: 'The stroke extending the “G”', text: 'The black curve that extends the G represents the idea of grouping. Its fluid movement symbolises the union and networking of a territory’s health establishments — a path of continuity and cohesion between all actors of the health system.' },
          ]},
          { t: 'fig', src: A('gst-logotype.jpg'), title: 'Logotype page', cap: 'concept explanation from the charte graphique' },
        ],
      },
      {
        id: 'colours', label: 'Colours',
        title: 'Sky blue, black and white.',
        blocks: [
          { t: 'swatches', items: [
            { hex: '#3184C3', fg: '#fff', title: 'Bleu ciel — sky blue', text: 'Trust, health and innovation; a feeling of safety and proximity. CMYK 78/40/2/0 · RGB 49/132/195' },
            { hex: '#000000', fg: '#fff', title: 'Noir — black', text: 'Rigour, professionalism and stability; reinforces the institutional character. CMYK 75/68/67/90' },
            { hex: '#FFFFFF', fg: '#000', title: 'Blanc — white', text: 'Purity, hygiene and transparency — essential values in healthcare. CMYK 0/0/0/0' },
          ]},
          { t: 'fig', src: A('gst-colors.jpg'), title: 'Colour page', cap: 'HEX, CMYK and RGB values with the meaning of each colour' },
        ],
      },
      {
        id: 'type', label: 'Typography',
        title: 'Arial — neutral, legible, everywhere.',
        blocks: [
          { t: 'p', html: '<strong>Arial</strong> is used for the logo and titles. It is neutral, very legible at small and large sizes, and available on every computer in every establishment — so documents produced across the network stay consistent without special fonts.' },
          { t: 'fig', src: A('gst-type.jpg'), title: 'Typography page', cap: 'Arial for the logotype and headings' },
        ],
      },
      {
        id: 'rules', label: 'Variations & usage rules',
        title: 'Protecting the mark.',
        blocks: [
          { t: 'fig', src: A('gst-variations.jpg'), title: 'Logo variations', cap: 'on black, white and sky-blue backgrounds' },
          { t: 'h3', text: 'Incorrect uses' },
          { t: 'cards', cols: 3, items: [
            { title: 'Don’t stretch or compress', text: 'The logo must always keep its proportions.' },
            { title: 'Don’t use other colours', text: 'Only the colours defined in the charte.' },
            { title: 'No shadows, gradients or 3D', text: 'Effects reduce legibility.' },
            { title: 'Keep it straight', text: 'The logo must stay upright and aligned.' },
            { title: 'Don’t remove elements', text: 'The ECG, the G stroke and the names belong together.' },
            { title: 'Mind the background', text: 'Avoid busy backgrounds that hurt visibility.' },
          ]},
          { t: 'fig', src: A('gst-misuse.jpg'), title: 'Incorrect uses', cap: 'visual examples from the charte' },
        ],
      },
      {
        id: 'mockups', label: 'Applications',
        title: 'The identity in the real world.',
        blocks: [
          { t: 'p', html: 'I tested the identity on the supports a regional health group actually uses: staff badges, business cards, signage, administrative documents, vehicles, posters and digital channels.' },
          { t: 'gal', items: [
            { src: A('gst-mock-badge.jpg'), title: 'Badge & business card', cap: 'staff identification' },
            { src: A('gst-mock-doctor.jpg'), title: 'Uniform & signage', cap: 'reception and outdoor sign' },
            { src: A('gst-mock-doc.jpg'), title: 'Documents & building', cap: 'administrative document and façade lettering' },
            { src: A('gst-mock-van.jpg'), title: 'Vehicle & poster', cap: 'mobile health unit and campaign poster' },
          ]},
          { t: 'fig', src: A('gst-mock-digital.jpg'), title: 'Digital', cap: 'website, digital platforms and social media templates' },
          { t: 'out', items: [
            { b: '1 logo', s: 'ECG + network concept' },
            { b: '3 colours', s: 'Sky blue, black, white' },
            { b: '10+ mockups', s: 'Print, signage, vehicles, digital' },
          ]},
        ],
      },
    ],
  },
];

export const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
