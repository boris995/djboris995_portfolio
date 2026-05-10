import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Platform",
    slug: "portfolio-platform",
    description:
      "Modern fullstack portfolio platform with clean UI, routing and scalable architecture.",
    longDescription:
      "A professional portfolio system built with React, TypeScript and modern frontend architecture.",
    image: "/projects/portfolio.jpg",
    category: "Fullstack",
    technologies: ["React", "TypeScript", "Node.js", "MySQL"],
    githubUrl: "https://github.com/boris995",
    liveUrl: "#",
    featured: true,
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
  {
    id: 2,
    title: "Reservation System",
    slug: "reservation-system",
    description:
      "Booking platform with users, businesses, services, employees and reservations.",
    longDescription:
      "A complete reservation system with backend logic, calendar flow and admin management.",
    image: "/projects/reservation.jpg",
    category: "Fullstack",
    technologies: ["React", "Express", "Sequelize", "MySQL"],
    githubUrl: "https://github.com/boris995",
    liveUrl: "#",
    featured: true,
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
  {
    id: 3,
    title: "Crypto Market App",
    slug: "crypto-market-app",
    description:
      "Crypto dashboard with market data, ranking, search and mobile-first layout.",
    longDescription:
      "A cryptocurrency market application with real-time style dashboard and modern UI.",
    image: "/projects/crypto.jpg",
    category: "Frontend",
    technologies: ["React", "API", "Charts", "Tailwind"],
    githubUrl: "https://github.com/boris995",
    liveUrl: "#",
    featured: false,
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
  {
    id: 4,
    title: "Tournament Manager",
    slug: "tournament-manager",
    description:
      "Tournament bracket system with teams, results, progression and admin control.",
    longDescription:
      "A sports tournament platform for league and knockout systems.",
    image: "/projects/tournament.jpg",
    category: "Backend",
    technologies: ["Node.js", "Express", "MySQL", "Sequelize"],
    githubUrl: "https://github.com/boris995",
    liveUrl: "#",
    featured: false,
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
]

export const projectCategories = [
  "All",
  "Frontend",
  "Backend",
  "Fullstack",
]
