export const steps = [
  {
    kicker: '01',
    title: 'Uredi osnovne podatke',
    text: 'U App.tsx promijeni ime, titulu, email i linkove za GitHub i LinkedIn.',
  },
  {
    kicker: '02',
    title: 'Dodaj projekte',
    text: 'U src/data/portfolio.ts zamijeni demo projekte svojim pravim radovima, stackom i linkovima.',
  },
  {
    kicker: '03',
    title: 'Popuni stranice',
    text: 'About, Skills, Experience i Blog su spremni kao šablon za tvoj sadržaj.',
  },
  {
    kicker: '04',
    title: 'Build i deploy',
    text: 'Pokreni npm run build, pa projekat možeš objaviti na Vercel, Netlify ili GitHub Pages.',
  },
]

export const projects = [
  {
    slug: 'portfolio-react',
    title: 'React Portfolio',
    summary: 'Lični portfolio sa više stranica, modernom navigacijom i sekcijama za radove.',
    details:
      'Ovaj projekat pokazuje sposobnost organizacije React aplikacije kroz komponente, data fajlove, responsive layout i routing. Idealan je kao centralno mjesto za predstavljanje rada.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    status: 'Live soon',
    link: 'https://example.com',
    next: ['Dodati prave slike projekata', 'Povezati kontakt formu', 'Objaviti na Vercel ili Netlify'],
  },
  {
    slug: 'dashboard-ui',
    title: 'Dashboard UI',
    summary: 'Admin panel za pregled podataka, kartica, tabela i statusa u realnom vremenu.',
    details:
      'Dashboard projekat je dobar primjer za prikaz rada sa listama, filterima, komponentama i preglednim korisničkim interfejsom.',
    stack: ['React', 'Charts', 'REST API', 'CSS'],
    status: 'Case study',
    link: 'https://example.com',
    next: ['Dodati grafikone', 'Ubaciti test podatke', 'Napraviti auth ekran'],
  },
  {
    slug: 'ecommerce-shop',
    title: 'E-commerce Shop',
    summary: 'Online shop koncept sa proizvodima, korpom i checkout tokom.',
    details:
      'E-commerce projekat pokazuje rad sa stanjem aplikacije, karticama proizvoda, cijenama, korpom i jasnim korisničkim tokom.',
    stack: ['React', 'TypeScript', 'State', 'Responsive'],
    status: 'Prototype',
    link: 'https://example.com',
    next: ['Povezati backend', 'Dodati plaćanje', 'Urediti product details stranicu'],
  },
]

export const skills = [
  {
    name: 'React',
    description: 'Komponente, props, state, hooks, routing i organizacija aplikacije.',
    level: 86,
  },
  {
    name: 'TypeScript',
    description: 'Tipovi za komponente, podatke, props i sigurniji razvoj aplikacija.',
    level: 78,
  },
  {
    name: 'Tailwind CSS',
    description: 'Brza izrada responsive interfejsa kroz utility klase i konzistentan sistem.',
    level: 82,
  },
  {
    name: 'Node / API',
    description: 'Osnovne API integracije, fetch, JSON podaci i rad sa backend servisima.',
    level: 68,
  },
  {
    name: 'Git',
    description: 'Rad sa granama, commitovima, GitHub repozitorijima i deploy tokom.',
    level: 74,
  },
  {
    name: 'UI Design',
    description: 'Jasna hijerarhija, dobra čitljivost, spacing i responsive layout.',
    level: 76,
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Lični projekti i portfolio rad',
    period: '2025 - 2026',
    description:
      'Izrada React aplikacija, komponenti, responsive stranica i projekata za portfolio. Fokus na čist kod i dobru prezentaciju rada.',
  },
  {
    role: 'Web Development Learning',
    company: 'Kursevi, dokumentacija i praksa',
    period: '2024 - 2025',
    description:
      'Učenje HTML, CSS, JavaScript, React, TypeScript, Git alata i modernog frontend workflowa kroz praktične zadatke.',
  },
  {
    role: 'Freelance Ready',
    company: 'Priprema za klijentske projekte',
    period: '2026',
    description:
      'Portfolio struktura je pripremljena da se lako dodaju case study stranice, linkovi, live demo projekti i kontakt kanali.',
  },
]

export const blogPosts = [
  {
    title: 'Kako sam organizovao React portfolio',
    date: 'Maj 2026',
    excerpt: 'Kratka bilješka o strukturi foldera, komponentama, data fajlovima i routeru.',
  },
  {
    title: 'Zašto koristiti TypeScript',
    date: 'Maj 2026',
    excerpt: 'TypeScript pomaže da greške pronađeš ranije i da komponente budu jasnije.',
  },
  {
    title: 'Plan za nove projekte',
    date: 'Maj 2026',
    excerpt: 'Ideje za dashboard, e-commerce shop, blog CMS i full-stack aplikaciju.',
  },
]
