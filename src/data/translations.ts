import type { Language } from "../context/languageContextValue"

export const languageOptions: Array<{
  code: Language
  label: string
  name: string
  flag: string
}> = [
  { code: "en", label: "EN", name: "English", flag: "/flags/gb.svg" },
  { code: "de", label: "DE", name: "Deutsch", flag: "/flags/de.svg" },
  { code: "sr", label: "SR", name: "Srpski", flag: "/flags/rs.svg" },
  { code: "bs", label: "BS", name: "Bosanski", flag: "/flags/ba.svg" },
]

const en = {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
    },
    common: {
      fullstackDeveloper: "Fullstack Developer",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      seeAllProjects: "See all projects",
      startProject: "Start Project",
      startAProject: "Start a Project",
      popular: "Popular",
      featured: "Featured",
      code: "Code",
      live: "Live",
      caseStudy: "Case Study",
      viewCode: "View Code",
      livePreview: "Live Preview",
      backToProjects: "Back to Projects",
      projects: "Projects",
      language: "Language",
    },
    home: {
      heroTitlePrefix: "Building powerful digital products with",
      heroTitleHighlight: "React & Node.js",
      heroDescription:
        "Modern portfolio, SaaS interfaces, dashboards, backend APIs, authentication systems and production-ready fullstack applications.",
      servicesEyebrow: "Services",
      servicesTitle: "What I can build for you",
      featuredEyebrow: "Featured work",
      featuredTitle: "Selected projects",
      stats: [
        { value: "20+", label: "Projects built" },
        { value: "10+", label: "Technologies" },
        { value: "5+", label: "Fullstack apps" },
        { value: "100%", label: "Focus on clean code" },
      ],
    },
    about: {
      metaTitle: "About",
      metaDescription:
        "About Djordje Boris, fullstack developer focused on React, TypeScript, Node.js and modern web applications.",
      eyebrow: "About me",
      title: "I build modern fullstack applications with clean architecture.",
      description:
        "I focus on building fast, responsive and scalable web applications using React, TypeScript, Node.js and modern database systems.",
      cards: ["Frontend", "Backend", "Deployment"],
      cardDescription:
        "Creating professional solutions with strong structure, reusable components and production-ready code.",
    },
    projectsPage: {
      eyebrow: "Projects",
      title: "Modern projects built with real-world technologies.",
      description:
        "Explore fullstack, frontend and backend projects with clean structure, scalable architecture and professional UI.",
      searchPlaceholder: "Search projects...",
      featuredOnly: "Featured projects only",
      showing: "Showing",
      projectSingular: "project",
      projectPlural: "projects",
      emptyTitle: "No projects found",
      emptyDescription: "Try another search term or category.",
      notFoundMetaTitle: "Project Not Found",
      notFoundMetaDescription: "The selected project could not be found.",
      notFoundEyebrow: "Project",
      notFoundTitle: "Project not found",
      notFoundDescription:
        "The case study you are trying to open does not exist or has been moved.",
      results: "Results",
      nextSteps: "Next steps",
    },
    categories: {
      All: "All",
      Frontend: "Frontend",
      Backend: "Backend",
      Fullstack: "Fullstack",
    },
    projectContent: {
      "portfolio-platform": {
        title: "Portfolio Platform",
        description:
          "Modern fullstack portfolio platform with clean UI, routing and scalable architecture.",
        longDescription:
          "A professional portfolio system built with React, TypeScript and modern frontend architecture.",
        results: [
          "Reusable page structure for a professional personal brand.",
          "Clear project presentation with scalable data-driven content.",
          "Ready foundation for admin features and future case studies.",
        ],
        nextSteps: [
          "Connect real project media.",
          "Add project detail CMS fields.",
          "Deploy the production build.",
        ],
      },
      "reservation-system": {
        title: "Reservation System",
        description:
          "Booking platform with users, businesses, services, employees and reservations.",
        longDescription:
          "A complete reservation system with backend logic, calendar flow and admin management.",
        results: [
          "Service, employee and reservation logic prepared for real businesses.",
          "Admin-oriented architecture for managing availability and bookings.",
          "Backend-first structure that can grow into a production platform.",
        ],
        nextSteps: [
          "Add calendar availability UI.",
          "Connect email notifications.",
          "Prepare role-based admin screens.",
        ],
      },
      "crypto-market-app": {
        title: "Crypto Market App",
        description:
          "Crypto dashboard with market data, ranking, search and mobile-first layout.",
        longDescription:
          "A cryptocurrency market application with real-time style dashboard and modern UI.",
        results: [
          "Mobile-first market overview for quick scanning.",
          "Search and ranking model ready for API integration.",
          "Dashboard UI pattern suitable for finance-style products.",
        ],
        nextSteps: [
          "Connect a live market data API.",
          "Add watchlist state.",
          "Introduce chart components.",
        ],
      },
      "tournament-manager": {
        title: "Tournament Manager",
        description:
          "Tournament bracket system with teams, results, progression and admin control.",
        longDescription:
          "A sports tournament platform for league and knockout systems.",
        results: [
          "Backend model for teams, rounds and progression.",
          "Tournament logic prepared for league and knockout flows.",
          "Admin control layer ready for result management.",
        ],
        nextSteps: [
          "Build bracket visualization.",
          "Add match scheduling.",
          "Create public tournament pages.",
        ],
      },
    },
    services: {
      eyebrow: "Services",
      title: "Development services for modern businesses and digital products.",
      description:
        "From landing pages to complete fullstack platforms, I create scalable and visually strong web solutions.",
      items: [
        {
          title: "Frontend Development",
          description:
            "Modern React interfaces, responsive layouts, animations, dashboards and SaaS-style UI systems.",
        },
        {
          title: "Backend Development",
          description:
            "Node.js REST APIs, authentication, database models, controllers, validation and deployment setup.",
        },
        {
          title: "Fullstack Apps",
          description:
            "Complete applications from database design to frontend integration and production deployment.",
        },
        {
          title: "Bug Fixing & Optimization",
          description:
            "Fixing CORS, deployment, TypeScript, database, routing, performance and UI problems.",
        },
      ],
      processEyebrow: "Process",
      processTitle: "A clear path from idea to launch.",
      process: [
        {
          step: "01",
          title: "Discovery",
          description:
            "Clarify project goals, pages, user flows, backend needs and launch priorities.",
        },
        {
          step: "02",
          title: "Architecture",
          description:
            "Plan the React structure, reusable components, API boundaries and database model.",
        },
        {
          step: "03",
          title: "Build",
          description:
            "Implement responsive UI, backend logic, validations, integrations and polished interactions.",
        },
        {
          step: "04",
          title: "Launch",
          description:
            "Run production checks, build the app and prepare deploy on Vercel, Netlify or Render.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "A practical tech stack for building real products.",
      description:
        "Focused on modern frontend, scalable backend, database logic and production deployment workflows.",
      groups: {
        Frontend: "Modern UI, responsive layouts and React architecture.",
        Backend: "REST APIs, authentication, business logic and integrations.",
        Database: "Relational database design, Sequelize models and queries.",
        Tools: "Developer workflow, deployment, debugging and Git.",
      },
      currentlyImproving: "Currently improving",
      learning: [
        "Advanced TypeScript",
        "System Design",
        "Testing",
        "CI/CD",
      ],
    },
    timeline: {
      eyebrow: "Timeline",
      title: "Growth through real projects",
      items: [
        {
          year: "2024",
          title: "Started serious fullstack development",
          description:
            "Built projects with React, Node.js, Express, Sequelize and MySQL.",
        },
        {
          year: "2025",
          title: "Built real-world app architecture",
          description:
            "Worked on reservation systems, portfolio platforms, dashboards and admin panels.",
        },
        {
          year: "2026",
          title: "Focused on production-level UI and deployment",
          description:
            "Improving frontend architecture, modern design systems, SEO, deploy workflow and scalable project structure.",
        },
      ],
    },
    pricing: {
      metaTitle: "Pricing",
      metaDescription:
        "Pricing plans for portfolio websites, business websites and fullstack web applications.",
      eyebrow: "Pricing",
      title: "Simple pricing for serious web projects.",
      description:
        "Choose a package depending on project complexity. Every plan includes clean code, responsive design and professional structure.",
      plans: [
        {
          name: "Starter",
          price: "EUR 299",
          description: "Best for landing pages and simple portfolio websites.",
          features: [
            "Responsive design",
            "Modern UI",
            "Up to 3 pages",
            "Basic SEO",
          ],
        },
        {
          name: "Professional",
          price: "EUR 799",
          description:
            "Best for business websites and full portfolio platforms.",
          features: [
            "Custom pages",
            "React frontend",
            "Backend integration",
            "Contact form",
            "Deployment setup",
          ],
          popular: true,
        },
        {
          name: "Fullstack",
          price: "EUR 1499+",
          description: "Best for apps with auth, admin panel and database.",
          features: [
            "React + Node.js",
            "Database design",
            "Admin dashboard",
            "Auth system",
            "Production deployment",
          ],
        },
      ],
      ctaTitle: "Need something custom?",
      ctaDescription:
        "Send project details and I will suggest the best technical solution and pricing package.",
    },
    estimator: {
      eyebrow: "Estimator",
      title: "Estimate your project scope.",
      description:
        "This quick estimate helps match the project idea with a realistic starting range before a final quote.",
      projectTypes: ["Landing page", "Business website", "Fullstack app"],
      pages: "Pages",
      backend: "Backend integration",
      admin: "Admin panel",
      range: "Estimated starting range",
      note:
        "Final price depends on integrations, content, custom logic and deployment needs.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      items: [
        {
          question: "Do prices include backend development?",
          answer:
            "Starter is mostly frontend. Professional can include basic backend integration. Fullstack includes backend, database and deployment setup.",
        },
        {
          question: "Can the price change?",
          answer:
            "Yes, final price depends on project complexity, number of pages, backend logic, admin panel and integrations.",
        },
        {
          question: "Do you deploy the project?",
          answer:
            "Yes. Projects can be deployed to Vercel, Netlify, Render or similar platforms.",
        },
        {
          question: "Can I add more features later?",
          answer:
            "Yes. The project structure is made to be scalable so new pages, APIs and dashboard features can be added later.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build your next digital product.",
      description:
        "Send a message about your portfolio, business website, backend API, admin dashboard or fullstack application.",
      labels: {
        email: "Email",
        location: "Location",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      locationValue: "Bosnia and Herzegovina",
      responseEyebrow: "Response time",
      responseTitle: "Usually within 24 hours",
      responseText:
        "The more details you send about your project, the faster I can suggest the best solution.",
      placeholders: {
        name: "Your name",
        email: "Email address",
        projectType: "Project type",
        budget: "Budget range",
        message: "Tell me about your project...",
      },
      projectTypes: [
        "Portfolio Website",
        "Business Website",
        "Fullstack App",
        "Bug Fix / Optimization",
      ],
      errors: {
        name: "Name is required.",
        email: "Email is required.",
        validEmail: "Enter a valid email address.",
        message: "Message is required.",
      },
      sending: "Sending...",
      send: "Send Message",
      draftSaved: "Draft saved in this browser.",
      draftEmpty: "Start typing to save a draft.",
      clearDraft: "Clear draft",
      success:
        "Message prepared successfully. Backend integration is next.",
    },
    cta: {
      title: "Ready to build something powerful?",
      description:
        "Let's turn your idea into a modern, fast and production-ready web application.",
    },
    notFound: {
      metaTitle: "Page Not Found",
      metaDescription: "The page you are looking for does not exist.",
      title: "Page not found",
      description:
        "The page you are trying to open does not exist or has been moved.",
      back: "Back to Home",
    },
    footer: "2026 Djordje Boris Portfolio",
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
}

const de = {
    nav: {
      home: "Start",
      about: "Uber mich",
      projects: "Projekte",
      services: "Leistungen",
      pricing: "Preise",
      contact: "Kontakt",
    },
    common: {
      fullstackDeveloper: "Fullstack Entwickler",
      viewProjects: "Projekte ansehen",
      contactMe: "Kontakt aufnehmen",
      seeAllProjects: "Alle Projekte ansehen",
      startProject: "Projekt starten",
      startAProject: "Projekt starten",
      popular: "Beliebt",
      featured: "Featured",
      code: "Code",
      live: "Live",
      caseStudy: "Case Study",
      viewCode: "Code ansehen",
      livePreview: "Live Vorschau",
      backToProjects: "Zuruck zu Projekten",
      projects: "Projekte",
      language: "Sprache",
    },
    home: {
      heroTitlePrefix: "Ich baue starke digitale Produkte mit",
      heroTitleHighlight: "React & Node.js",
      heroDescription:
        "Moderne Portfolios, SaaS Oberflachen, Dashboards, Backend APIs, Auth Systeme und produktionsreife Fullstack Anwendungen.",
      servicesEyebrow: "Leistungen",
      servicesTitle: "Was ich fur dich bauen kann",
      featuredEyebrow: "Ausgewahlte Arbeit",
      featuredTitle: "Ausgewahlte Projekte",
      stats: [
        { value: "20+", label: "Gebaute Projekte" },
        { value: "10+", label: "Technologien" },
        { value: "5+", label: "Fullstack Apps" },
        { value: "100%", label: "Fokus auf sauberen Code" },
      ],
    },
    about: {
      metaTitle: "Uber mich",
      metaDescription:
        "Uber Djordje Boris, Fullstack Entwickler mit Fokus auf React, TypeScript, Node.js und moderne Web Apps.",
      eyebrow: "Uber mich",
      title: "Ich baue moderne Fullstack Anwendungen mit sauberer Architektur.",
      description:
        "Mein Fokus liegt auf schnellen, responsiven und skalierbaren Web Apps mit React, TypeScript, Node.js und modernen Datenbanken.",
      cards: ["Frontend", "Backend", "Deployment"],
      cardDescription:
        "Professionelle Losungen mit klarer Struktur, wiederverwendbaren Komponenten und produktionsreifem Code.",
    },
    projectsPage: {
      eyebrow: "Projekte",
      title: "Moderne Projekte mit realen Technologien.",
      description:
        "Entdecke Fullstack, Frontend und Backend Projekte mit klarer Struktur, skalierbarer Architektur und professionellem UI.",
      searchPlaceholder: "Projekte suchen...",
      featuredOnly: "Nur Featured Projekte",
      showing: "Zeige",
      projectSingular: "Projekt",
      projectPlural: "Projekte",
      emptyTitle: "Keine Projekte gefunden",
      emptyDescription: "Versuche einen anderen Suchbegriff oder eine Kategorie.",
      notFoundMetaTitle: "Projekt nicht gefunden",
      notFoundMetaDescription: "Das ausgewahlte Projekt wurde nicht gefunden.",
      notFoundEyebrow: "Projekt",
      notFoundTitle: "Projekt nicht gefunden",
      notFoundDescription:
        "Die Case Study existiert nicht oder wurde verschoben.",
      results: "Ergebnisse",
      nextSteps: "Nachste Schritte",
    },
    categories: {
      All: "Alle",
      Frontend: "Frontend",
      Backend: "Backend",
      Fullstack: "Fullstack",
    },
    projectContent: {
      "portfolio-platform": {
        title: "Portfolio Plattform",
        description:
          "Moderne Fullstack Portfolio Plattform mit sauberem UI, Routing und skalierbarer Architektur.",
        longDescription:
          "Ein professionelles Portfolio System mit React, TypeScript und moderner Frontend Architektur.",
        results: [
          "Wiederverwendbare Seitenstruktur fur eine professionelle Personal Brand.",
          "Klare Projektprasentation mit skalierbaren, datengetriebenen Inhalten.",
          "Solide Basis fur Admin Features und zukunftige Case Studies.",
        ],
        nextSteps: [
          "Echte Projektmedien verbinden.",
          "CMS Felder fur Projektdetails erganzen.",
          "Production Build deployen.",
        ],
      },
      "reservation-system": {
        title: "Reservierungssystem",
        description:
          "Booking Plattform mit Nutzern, Unternehmen, Services, Mitarbeitern und Reservierungen.",
        longDescription:
          "Ein komplettes Reservierungssystem mit Backend Logik, Kalender Flow und Admin Verwaltung.",
        results: [
          "Service, Mitarbeiter und Reservierungslogik fur echte Unternehmen vorbereitet.",
          "Admin orientierte Architektur fur Verfugbarkeit und Buchungen.",
          "Backend-first Struktur, die zu einer Produktionsplattform wachsen kann.",
        ],
        nextSteps: [
          "Kalender Verfugbarkeit UI erganzen.",
          "E-Mail Benachrichtigungen verbinden.",
          "Rollenbasierte Admin Screens vorbereiten.",
        ],
      },
      "crypto-market-app": {
        title: "Crypto Market App",
        description:
          "Crypto Dashboard mit Marktdaten, Ranking, Suche und mobile-first Layout.",
        longDescription:
          "Eine Kryptowahrungs Market App mit Echtzeit Dashboard Stil und modernem UI.",
        results: [
          "Mobile-first Marktubersicht fur schnelles Scannen.",
          "Such- und Rankingmodell bereit fur API Integration.",
          "Dashboard UI Pattern passend fur Finance Produkte.",
        ],
        nextSteps: [
          "Live Marktdaten API verbinden.",
          "Watchlist State erganzen.",
          "Chart Komponenten einfuhren.",
        ],
      },
      "tournament-manager": {
        title: "Tournament Manager",
        description:
          "Turnier Bracket System mit Teams, Ergebnissen, Fortschritt und Admin Kontrolle.",
        longDescription:
          "Eine Sport Turnierplattform fur Liga- und Knockout-Systeme.",
        results: [
          "Backend Modell fur Teams, Runden und Fortschritt.",
          "Turnierlogik fur Liga- und Knockout-Flows vorbereitet.",
          "Admin Kontrollschicht fur Ergebnisverwaltung bereit.",
        ],
        nextSteps: [
          "Bracket Visualisierung bauen.",
          "Match Scheduling erganzen.",
          "Offentliche Turnierseiten erstellen.",
        ],
      },
    },
    services: {
      eyebrow: "Leistungen",
      title: "Entwicklung fur moderne Unternehmen und digitale Produkte.",
      description:
        "Von Landing Pages bis zu kompletten Fullstack Plattformen baue ich skalierbare und visuell starke Web Losungen.",
      items: [
        {
          title: "Frontend Entwicklung",
          description:
            "Moderne React Oberflachen, responsive Layouts, Animationen, Dashboards und SaaS UI Systeme.",
        },
        {
          title: "Backend Entwicklung",
          description:
            "Node.js REST APIs, Authentifizierung, Datenbankmodelle, Controller, Validierung und Deployment Setup.",
        },
        {
          title: "Fullstack Apps",
          description:
            "Komplette Anwendungen vom Datenbankdesign bis zur Frontend Integration und Produktion.",
        },
        {
          title: "Bug Fixing & Optimierung",
          description:
            "Fehlerbehebung fur CORS, Deployment, TypeScript, Datenbanken, Routing, Performance und UI.",
        },
      ],
      processEyebrow: "Prozess",
      processTitle: "Ein klarer Weg von der Idee zum Launch.",
      process: [
        {
          step: "01",
          title: "Discovery",
          description:
            "Projektziele, Seiten, User Flows, Backend Bedarf und Launch Prioritaten klaren.",
        },
        {
          step: "02",
          title: "Architektur",
          description:
            "React Struktur, wiederverwendbare Komponenten, API Grenzen und Datenbankmodell planen.",
        },
        {
          step: "03",
          title: "Build",
          description:
            "Responsive UI, Backend Logik, Validierungen, Integrationen und polierte Interaktionen bauen.",
        },
        {
          step: "04",
          title: "Launch",
          description:
            "Production Checks ausfuhren, App bauen und Deploy auf Vercel, Netlify oder Render vorbereiten.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Ein praktischer Tech Stack fur echte Produkte.",
      description:
        "Fokus auf modernes Frontend, skalierbares Backend, Datenbanklogik und Production Deployment Workflows.",
      groups: {
        Frontend: "Modernes UI, responsive Layouts und React Architektur.",
        Backend: "REST APIs, Authentifizierung, Business Logik und Integrationen.",
        Database: "Relationales Datenbankdesign, Sequelize Modelle und Queries.",
        Tools: "Developer Workflow, Deployment, Debugging und Git.",
      },
      currentlyImproving: "Aktuell im Ausbau",
      learning: [
        "Advanced TypeScript",
        "System Design",
        "Testing",
        "CI/CD",
      ],
    },
    timeline: {
      eyebrow: "Timeline",
      title: "Wachstum durch echte Projekte",
      items: [
        {
          year: "2024",
          title: "Ernsthafte Fullstack Entwicklung gestartet",
          description:
            "Projekte mit React, Node.js, Express, Sequelize und MySQL gebaut.",
        },
        {
          year: "2025",
          title: "Real-World App Architektur gebaut",
          description:
            "An Reservierungssystemen, Portfolio Plattformen, Dashboards und Admin Panels gearbeitet.",
        },
        {
          year: "2026",
          title: "Fokus auf Production UI und Deployment",
          description:
            "Frontend Architektur, moderne Designsysteme, SEO, Deploy Workflow und skalierbare Struktur verbessert.",
        },
      ],
    },
    pricing: {
      metaTitle: "Preise",
      metaDescription:
        "Preispakete fur Portfolio Websites, Business Websites und Fullstack Web Apps.",
      eyebrow: "Preise",
      title: "Einfache Preise fur ernsthafte Web Projekte.",
      description:
        "Wahle ein Paket je nach Projektkomplexitat. Jedes Paket enthalt sauberen Code, responsive Design und professionelle Struktur.",
      plans: [
        {
          name: "Starter",
          price: "EUR 299",
          description: "Ideal fur Landing Pages und einfache Portfolio Websites.",
          features: [
            "Responsives Design",
            "Modernes UI",
            "Bis zu 3 Seiten",
            "Basic SEO",
          ],
        },
        {
          name: "Professional",
          price: "EUR 799",
          description:
            "Ideal fur Business Websites und komplette Portfolio Plattformen.",
          features: [
            "Custom Seiten",
            "React Frontend",
            "Backend Integration",
            "Kontaktformular",
            "Deployment Setup",
          ],
          popular: true,
        },
        {
          name: "Fullstack",
          price: "EUR 1499+",
          description: "Ideal fur Apps mit Auth, Admin Panel und Datenbank.",
          features: [
            "React + Node.js",
            "Datenbankdesign",
            "Admin Dashboard",
            "Auth System",
            "Production Deployment",
          ],
        },
      ],
      ctaTitle: "Brauchst du etwas Individuelles?",
      ctaDescription:
        "Sende Projektdetails und ich schlage die beste technische Losung und das passende Preispaket vor.",
    },
    estimator: {
      eyebrow: "Estimator",
      title: "Schatze deinen Projektumfang.",
      description:
        "Diese schnelle Schatzung hilft, die Projektidee mit einer realistischen Startspanne abzugleichen.",
      projectTypes: ["Landing Page", "Business Website", "Fullstack App"],
      pages: "Seiten",
      backend: "Backend Integration",
      admin: "Admin Panel",
      range: "Geschatzter Startpreis",
      note:
        "Der finale Preis hangt von Integrationen, Content, Custom Logik und Deployment ab.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Haufige Fragen",
      items: [
        {
          question: "Sind Backend Arbeiten im Preis enthalten?",
          answer:
            "Starter ist hauptsachlich Frontend. Professional kann einfache Backend Integration enthalten. Fullstack enthalt Backend, Datenbank und Deployment Setup.",
        },
        {
          question: "Kann sich der Preis andern?",
          answer:
            "Ja, der finale Preis hangt von Komplexitat, Seitenanzahl, Backend Logik, Admin Panel und Integrationen ab.",
        },
        {
          question: "Deployest du das Projekt?",
          answer:
            "Ja. Projekte konnen auf Vercel, Netlify, Render oder ahnlichen Plattformen deployed werden.",
        },
        {
          question: "Kann ich spater weitere Features erganzen?",
          answer:
            "Ja. Die Projektstruktur ist skalierbar, damit neue Seiten, APIs und Dashboard Features spater erganzt werden konnen.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lass uns dein nachstes digitales Produkt bauen.",
      description:
        "Sende eine Nachricht zu Portfolio, Business Website, Backend API, Admin Dashboard oder Fullstack App.",
      labels: {
        email: "E-Mail",
        location: "Standort",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      locationValue: "Bosnien und Herzegowina",
      responseEyebrow: "Antwortzeit",
      responseTitle: "Normalerweise innerhalb von 24 Stunden",
      responseText:
        "Je mehr Details du sendest, desto schneller kann ich die beste Losung vorschlagen.",
      placeholders: {
        name: "Dein Name",
        email: "E-Mail Adresse",
        projectType: "Projekttyp",
        budget: "Budgetrahmen",
        message: "Erzahl mir von deinem Projekt...",
      },
      projectTypes: [
        "Portfolio Website",
        "Business Website",
        "Fullstack App",
        "Bug Fix / Optimierung",
      ],
      errors: {
        name: "Name ist erforderlich.",
        email: "E-Mail ist erforderlich.",
        validEmail: "Gib eine gultige E-Mail Adresse ein.",
        message: "Nachricht ist erforderlich.",
      },
      sending: "Senden...",
      send: "Nachricht senden",
      draftSaved: "Entwurf in diesem Browser gespeichert.",
      draftEmpty: "Beginne zu schreiben, um einen Entwurf zu speichern.",
      clearDraft: "Entwurf loschen",
      success:
        "Nachricht erfolgreich vorbereitet. Backend Integration ist der nachste Schritt.",
    },
    cta: {
      title: "Bereit, etwas Starkes zu bauen?",
      description:
        "Lass uns deine Idee in eine moderne, schnelle und produktionsreife Web App verwandeln.",
    },
    notFound: {
      metaTitle: "Seite nicht gefunden",
      metaDescription: "Die gesuchte Seite existiert nicht.",
      title: "Seite nicht gefunden",
      description:
        "Die Seite, die du offnen mochtest, existiert nicht oder wurde verschoben.",
      back: "Zuruck zur Startseite",
    },
    footer: "2026 Djordje Boris Portfolio",
    theme: {
      switchToLight: "Zu Light Mode wechseln",
      switchToDark: "Zu Dark Mode wechseln",
    },
}

const sr: typeof en = {
  ...en,
  nav: {
    home: "Pocetna",
    about: "O meni",
    projects: "Projekti",
    services: "Usluge",
    pricing: "Cene",
    contact: "Kontakt",
  },
  common: {
    ...en.common,
    fullstackDeveloper: "Fullstack developer",
    viewProjects: "Pogledaj projekte",
    contactMe: "Kontaktiraj me",
    seeAllProjects: "Pogledaj sve projekte",
    startProject: "Pokreni projekat",
    startAProject: "Pokreni projekat",
    popular: "Popularno",
    featured: "Istaknuto",
    code: "Kod",
    live: "Uzivo",
    caseStudy: "Studija slucaja",
    viewCode: "Pogledaj kod",
    livePreview: "Live prikaz",
    backToProjects: "Nazad na projekte",
    projects: "Projekti",
    language: "Jezik",
  },
  home: {
    heroTitlePrefix: "Gradim mocne digitalne proizvode uz",
    heroTitleHighlight: "React i Node.js",
    heroDescription:
      "Moderni portfolio sajtovi, SaaS interfejsi, dashboardi, backend API-ji, auth sistemi i fullstack aplikacije spremne za produkciju.",
    servicesEyebrow: "Usluge",
    servicesTitle: "Sta mogu da napravim za tebe",
    featuredEyebrow: "Istaknuti radovi",
    featuredTitle: "Odabrani projekti",
    stats: [
      { value: "20+", label: "Izgradjenih projekata" },
      { value: "10+", label: "Tehnologija" },
      { value: "5+", label: "Fullstack aplikacija" },
      { value: "100%", label: "Fokus na cist kod" },
    ],
  },
  about: {
    metaTitle: "O meni",
    metaDescription:
      "O Djordju Borisu, fullstack developeru fokusiranom na React, TypeScript, Node.js i moderne web aplikacije.",
    eyebrow: "O meni",
    title: "Gradim moderne fullstack aplikacije sa cistom arhitekturom.",
    description:
      "Fokusiram se na brze, responsivne i skalabilne web aplikacije koristeci React, TypeScript, Node.js i moderne baze podataka.",
    cards: ["Frontend", "Backend", "Deployment"],
    cardDescription:
      "Izrada profesionalnih resenja sa jakom strukturom, reusable komponentama i kodom spremnim za produkciju.",
  },
  services: {
    ...en.services,
    eyebrow: "Usluge",
    title: "Development usluge za moderne biznise i digitalne proizvode.",
    description:
      "Od landing stranica do kompletnih fullstack platformi, pravim skalabilna i vizuelno jaka web resenja.",
    items: [
      {
        title: "Frontend development",
        description:
          "Moderni React interfejsi, responsive layouti, animacije, dashboardi i SaaS UI sistemi.",
      },
      {
        title: "Backend development",
        description:
          "Node.js REST API-ji, autentifikacija, modeli baze, kontroleri, validacija i deployment setup.",
      },
      {
        title: "Fullstack aplikacije",
        description:
          "Kompletne aplikacije od dizajna baze do frontend integracije i produkcijskog deploya.",
      },
      {
        title: "Bug fixing i optimizacija",
        description:
          "Popravka CORS, deployment, TypeScript, database, routing, performance i UI problema.",
      },
    ],
    processEyebrow: "Proces",
    processTitle: "Jasan put od ideje do lansiranja.",
  },
  pricing: {
    ...en.pricing,
    metaTitle: "Cene",
    eyebrow: "Cene",
    title: "Jednostavne cene za ozbiljne web projekte.",
    description:
      "Izaberi paket prema kompleksnosti projekta. Svaki paket ukljucuje cist kod, responsive dizajn i profesionalnu strukturu.",
    ctaTitle: "Treba ti nesto posebno?",
    ctaDescription:
      "Posalji detalje projekta i predlozicu najbolje tehnicko resenje i cenovni paket.",
  },
  projectsPage: {
    ...en.projectsPage,
    eyebrow: "Projekti",
    title: "Moderni projekti napravljeni realnim tehnologijama.",
    description:
      "Pregledaj fullstack, frontend i backend projekte sa cistom strukturom, skalabilnom arhitekturom i profesionalnim UI-jem.",
    searchPlaceholder: "Pretrazi projekte...",
    featuredOnly: "Samo istaknuti projekti",
    showing: "Prikazano",
    projectSingular: "projekat",
    projectPlural: "projekta",
    emptyTitle: "Nema pronadjenih projekata",
    emptyDescription: "Probaj drugi pojam ili kategoriju.",
    notFoundMetaTitle: "Projekat nije pronadjen",
    notFoundMetaDescription: "Izabrani projekat nije pronadjen.",
    notFoundEyebrow: "Projekat",
    notFoundTitle: "Projekat nije pronadjen",
    notFoundDescription:
      "Studija slucaja koju otvaras ne postoji ili je pomerena.",
    results: "Rezultati",
    nextSteps: "Sledeci koraci",
  },
  categories: {
    All: "Sve",
    Frontend: "Frontend",
    Backend: "Backend",
    Fullstack: "Fullstack",
  },
  projectContent: {
    "portfolio-platform": {
      title: "Portfolio platforma",
      description:
        "Moderna fullstack portfolio platforma sa cistim UI-jem, routingom i skalabilnom arhitekturom.",
      longDescription:
        "Profesionalni portfolio sistem napravljen uz React, TypeScript i modernu frontend arhitekturu.",
      results: [
        "Reusable struktura stranica za profesionalni licni brend.",
        "Jasna prezentacija projekata kroz skalabilan data-driven sadrzaj.",
        "Dobra osnova za admin funkcije i buduce studije slucaja.",
      ],
      nextSteps: [
        "Povezati prave slike i medije projekata.",
        "Dodati CMS polja za detalje projekta.",
        "Objaviti production build.",
      ],
    },
    "reservation-system": {
      title: "Sistem za rezervacije",
      description:
        "Booking platforma sa korisnicima, biznisima, uslugama, zaposlenima i rezervacijama.",
      longDescription:
        "Kompletan sistem za rezervacije sa backend logikom, kalendarskim tokom i admin upravljanjem.",
      results: [
        "Logika usluga, zaposlenih i rezervacija spremna za realne biznise.",
        "Admin arhitektura za upravljanje terminima i dostupnoscu.",
        "Backend-first struktura koja moze rasti u produkcijsku platformu.",
      ],
      nextSteps: [
        "Dodati UI za dostupnost u kalendaru.",
        "Povezati email obavestenja.",
        "Pripremiti admin ekrane po ulogama.",
      ],
    },
    "crypto-market-app": {
      title: "Crypto Market aplikacija",
      description:
        "Crypto dashboard sa market podacima, rangiranjem, pretragom i mobile-first layoutom.",
      longDescription:
        "Aplikacija za kripto trziste sa dashboard stilom u real-time duhu i modernim UI-jem.",
      results: [
        "Mobile-first pregled trzista za brzo skeniranje.",
        "Model pretrage i rangiranja spreman za API integraciju.",
        "Dashboard UI obrazac pogodan za finance proizvode.",
      ],
      nextSteps: [
        "Povezati live market data API.",
        "Dodati watchlist state.",
        "Uvesti chart komponente.",
      ],
    },
    "tournament-manager": {
      title: "Tournament Manager",
      description:
        "Sistem turnirskih bracket-a sa timovima, rezultatima, progresijom i admin kontrolom.",
      longDescription:
        "Sportska turnirska platforma za ligaske i knockout sisteme.",
      results: [
        "Backend model za timove, runde i progresiju.",
        "Turnirska logika spremna za ligaske i knockout tokove.",
        "Admin sloj za upravljanje rezultatima.",
      ],
      nextSteps: [
        "Napraviti bracket vizualizaciju.",
        "Dodati zakazivanje meceva.",
        "Kreirati javne stranice turnira.",
      ],
    },
  },
  skills: {
    eyebrow: "Vestine",
    title: "Praktican tech stack za izgradnju realnih proizvoda.",
    description:
      "Fokus na moderan frontend, skalabilan backend, database logiku i production deployment tokove.",
    groups: {
      Frontend: "Moderni UI, responsive layouti i React arhitektura.",
      Backend: "REST API-ji, autentifikacija, biznis logika i integracije.",
      Database: "Relacione baze, Sequelize modeli i upiti.",
      Tools: "Developer workflow, deployment, debugging i Git.",
    },
    currentlyImproving: "Trenutno unapredjujem",
    learning: ["Advanced TypeScript", "System Design", "Testing", "CI/CD"],
  },
  timeline: {
    eyebrow: "Timeline",
    title: "Rast kroz realne projekte",
    items: [
      {
        year: "2024",
        title: "Ozbiljan fullstack razvoj",
        description:
          "Izrada projekata uz React, Node.js, Express, Sequelize i MySQL.",
      },
      {
        year: "2025",
        title: "Real-world app arhitektura",
        description:
          "Rad na sistemima za rezervacije, portfolio platformama, dashboardima i admin panelima.",
      },
      {
        year: "2026",
        title: "Fokus na production UI i deployment",
        description:
          "Unapredjenje frontend arhitekture, dizajn sistema, SEO-a, deploy workflowa i skalabilne strukture.",
      },
    ],
  },
  estimator: {
    eyebrow: "Estimator",
    title: "Proceni opseg projekta.",
    description:
      "Brza procena pomaze da se ideja projekta poveze sa realnim pocetnim rasponom pre finalne ponude.",
    projectTypes: ["Landing stranica", "Business website", "Fullstack app"],
    pages: "Stranice",
    backend: "Backend integracija",
    admin: "Admin panel",
    range: "Procenjeni pocetni raspon",
    note:
      "Finalna cena zavisi od integracija, sadrzaja, custom logike i deployment potreba.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Cesta pitanja",
    items: [
      {
        question: "Da li cene ukljucuju backend development?",
        answer:
          "Starter je uglavnom frontend. Professional moze ukljuciti osnovnu backend integraciju. Fullstack ukljucuje backend, bazu i deployment setup.",
      },
      {
        question: "Moze li cena da se promeni?",
        answer:
          "Da, finalna cena zavisi od kompleksnosti, broja stranica, backend logike, admin panela i integracija.",
      },
      {
        question: "Da li radis deploy projekta?",
        answer:
          "Da. Projekti mogu biti objavljeni na Vercel, Netlify, Render ili slicnim platformama.",
      },
      {
        question: "Mogu li kasnije dodati jos funkcija?",
        answer:
          "Da. Struktura projekta je skalabilna da se kasnije mogu dodati nove stranice, API-ji i dashboard funkcije.",
      },
    ],
  },
  contact: {
    ...en.contact,
    eyebrow: "Kontakt",
    title: "Hajde da napravimo tvoj sledeci digitalni proizvod.",
    description:
      "Posalji poruku o portfolio sajtu, business website-u, backend API-ju, admin dashboardu ili fullstack aplikaciji.",
    labels: {
      email: "Email",
      location: "Lokacija",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    locationValue: "Bosna i Hercegovina",
    responseEyebrow: "Vreme odgovora",
    responseTitle: "Obicno u roku od 24 sata",
    responseText:
      "Sto vise detalja posaljes o projektu, brze mogu predloziti najbolje resenje.",
    placeholders: {
      name: "Tvoje ime",
      email: "Email adresa",
      projectType: "Tip projekta",
      budget: "Budzet",
      message: "Reci mi nesto o projektu...",
    },
    projectTypes: [
      "Portfolio website",
      "Business website",
      "Fullstack aplikacija",
      "Bug fix / optimizacija",
    ],
    errors: {
      name: "Ime je obavezno.",
      email: "Email je obavezan.",
      validEmail: "Unesi validnu email adresu.",
      message: "Poruka je obavezna.",
    },
    sending: "Salje se...",
    send: "Posalji poruku",
    draftSaved: "Draft je sacuvan u ovom browseru.",
    draftEmpty: "Pocni da pises da sacuvas draft.",
    clearDraft: "Obrisi draft",
    success:
      "Poruka je uspesno pripremljena. Backend integracija je sledeci korak.",
  },
  cta: {
    title: "Spreman za nesto mocno?",
    description:
      "Pretvorimo tvoju ideju u modernu, brzu web aplikaciju spremnu za produkciju.",
  },
  notFound: {
    metaTitle: "Stranica nije pronadjena",
    metaDescription: "Stranica koju trazis ne postoji.",
    title: "Stranica nije pronadjena",
    description:
      "Stranica koju pokusavas da otvoris ne postoji ili je premestena.",
    back: "Nazad na pocetnu",
  },
  footer: "2026 Djordje Boris Portfolio",
  theme: {
    switchToLight: "Prebaci na light mode",
    switchToDark: "Prebaci na dark mode",
  },
}

const bs: typeof en = {
  ...sr,
  nav: {
    home: "Pocetna",
    about: "O meni",
    projects: "Projekti",
    services: "Usluge",
    pricing: "Cijene",
    contact: "Kontakt",
  },
  pricing: {
    ...sr.pricing,
    metaTitle: "Cijene",
    eyebrow: "Cijene",
    title: "Jednostavne cijene za ozbiljne web projekte.",
    description:
      "Izaberi paket prema kompleksnosti projekta. Svaki paket ukljucuje cist kod, responzivan dizajn i profesionalnu strukturu.",
    ctaDescription:
      "Posalji detalje projekta i predlozicu najbolje tehnicko rjesenje i cjenovni paket.",
  },
  projectsPage: {
    ...sr.projectsPage,
    nextSteps: "Sljedeci koraci",
    notFoundDescription:
      "Studija slucaja koju otvaras ne postoji ili je premjestena.",
  },
  estimator: {
    ...sr.estimator,
    title: "Procijeni opseg projekta.",
    range: "Procijenjeni pocetni raspon",
    note:
      "Finalna cijena zavisi od integracija, sadrzaja, custom logike i deployment potreba.",
  },
  faq: {
    ...sr.faq,
    items: [
      {
        question: "Da li cijene ukljucuju backend development?",
        answer:
          "Starter je uglavnom frontend. Professional moze ukljuciti osnovnu backend integraciju. Fullstack ukljucuje backend, bazu i deployment setup.",
      },
      {
        question: "Moze li se cijena promijeniti?",
        answer:
          "Da, finalna cijena zavisi od kompleksnosti, broja stranica, backend logike, admin panela i integracija.",
      },
      {
        question: "Da li radis deploy projekta?",
        answer:
          "Da. Projekti mogu biti objavljeni na Vercel, Netlify, Render ili slicnim platformama.",
      },
      {
        question: "Mogu li kasnije dodati jos funkcija?",
        answer:
          "Da. Struktura projekta je skalabilna da se kasnije mogu dodati nove stranice, API-ji i dashboard funkcije.",
      },
    ],
  },
  contact: {
    ...sr.contact,
    title: "Hajde da napravimo tvoj sljedeci digitalni proizvod.",
    responseEyebrow: "Vrijeme odgovora",
    responseText:
      "Sto vise detalja posaljes o projektu, brze mogu predloziti najbolje rjesenje.",
    success:
      "Poruka je uspjesno pripremljena. Backend integracija je sljedeci korak.",
  },
  cta: {
    ...sr.cta,
    description:
      "Pretvorimo tvoju ideju u modernu, brzu web aplikaciju spremnu za produkciju.",
  },
  notFound: {
    ...sr.notFound,
    description:
      "Stranica koju pokusavas otvoriti ne postoji ili je premjestena.",
  },
}

export const translations = {
  en,
  de,
  sr,
  bs,
}
