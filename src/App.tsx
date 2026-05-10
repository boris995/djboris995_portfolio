import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { blogPosts, experience, projects, skills, steps } from './data/portfolio'
import heroImg from './assets/hero.png'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

function Layout() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50 text-slate-900">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-stone-50/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-700 text-sm font-bold text-white">
                DB
              </span>
              <span>
                <span className="block text-sm font-semibold leading-none">Djordje Boris</span>
                <span className="block text-xs text-slate-500">Frontend Developer</span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition ${
                      isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-white hover:text-slate-950'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <button
              className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white lg:hidden"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {isOpen && (
            <div className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden">
              <div className="mx-auto grid max-w-7xl gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-stone-100'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Djordje Boris. Portfolio napravljen u React + TypeScript + Tailwind.</p>
            <div className="flex gap-3">
              <a className="footer-link" href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="footer-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="footer-link" href="mailto:tvoj.email@example.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="eyebrow">Portfolio projekat</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Gradim web aplikacije koje su brze, jasne i lake za koristiti.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Ovdje možeš predstaviti svoje projekte, vještine, iskustvo, blog bilješke i kontakt. Sajt je spreman da
              zamijeniš tekstove, linkove i slike svojim pravim radovima.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="primary-button" to="/projects">
                Pogledaj projekte <ArrowRight size={18} />
              </Link>
              <Link className="secondary-button" to="/contact">
                Kontakt
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg bg-emerald-800" />
            <img
              className="relative aspect-[4/3] w-full rounded-lg border border-slate-200 bg-stone-100 object-contain p-8 shadow-xl"
              src={heroImg}
              alt="Portfolio visual"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-3">
          <Stat value="08" label="stranica" />
          <Stat value="05+" label="sekcija za projekte i radove" />
          <Stat value="100%" label="React + TypeScript + Tailwind" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Step by step</p>
            <h2 className="section-title">Kako nastavljaš uređivati portfolio</h2>
          </div>
          <Link className="text-sm font-semibold text-emerald-800 hover:text-emerald-950" to="/about">
            Uredi podatke o sebi
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.title} className="card">
              <span className="text-sm font-semibold text-emerald-800">{step.kicker}</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-4 border-emerald-700 bg-white p-6">
      <strong className="text-4xl font-semibold text-slate-950">{value}</strong>
      <span className="mt-2 block text-sm uppercase tracking-wide text-slate-500">{label}</span>
    </div>
  )
}

function About() {
  return (
    <>
      <PageHeader
        eyebrow="O meni"
        title="Frontend developer fokusiran na pregledan kod i korisničko iskustvo."
        description="Ovu stranicu popuni svojim pravim imenom, biografijom, obrazovanjem i kratkom pričom o tome šta voliš graditi."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <Sparkles className="text-emerald-700" />
          <h2 className="mt-5 text-2xl font-semibold">Kratak profil</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Ja sam web developer koji radi sa Reactom, TypeScriptom i modernim frontend alatima. Volim praviti
            aplikacije koje imaju čistu strukturu, dobru navigaciju i komponente koje se lako održavaju.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {['React aplikacije', 'Responsive dizajn', 'API integracije', 'Deploy i optimizacija'].map((item) => (
            <div key={item} className="card">
              <h3 className="font-semibold text-slate-950">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Zamijeni ovaj tekst konkretnim primjerom iz svog rada ili projekta.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projekti"
        title="Radovi koje možeš predstaviti klijentima, firmama ili za praksu."
        description="Svaki projekat ima kratak opis, stack, status i posebnu detaljnu stranicu."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="card flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <Code2 className="text-emerald-700" />
              <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">{project.status}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-950">{project.title}</h2>
            <p className="mt-3 flex-1 leading-7 text-slate-600">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800" to={`/projects/${project.slug}`}>
              Detalji projekta <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}

function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug) ?? projects[0]

  return (
    <>
      <PageHeader eyebrow="Detalji projekta" title={project.title} description={project.summary} />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_0.7fr]">
        <article className="rounded-lg border border-slate-200 bg-white p-8">
          <h2 className="section-title">Šta projekat pokazuje</h2>
          <p className="mt-5 leading-8 text-slate-600">{project.details}</p>
          <h3 className="mt-8 text-xl font-semibold">Sljedeći koraci</h3>
          <ul className="mt-4 grid gap-3 text-slate-600">
            {project.next.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <aside className="rounded-lg border border-slate-200 bg-stone-100 p-6">
          <h3 className="font-semibold text-slate-950">Tehnologije</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <a className="primary-button mt-8 w-full justify-center" href={project.link} target="_blank" rel="noreferrer">
            Otvori demo <ArrowRight size={18} />
          </a>
        </aside>
      </section>
    </>
  )
}

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tehnologije i alati koje koristiš u projektima."
        description="Ovdje dodaj nivo znanja, certifikate, biblioteke i alate koje stvarno koristiš."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article className="card" key={skill.name}>
            <h2 className="text-xl font-semibold text-slate-950">{skill.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{skill.description}</p>
            <div className="mt-5 h-2 rounded-full bg-slate-200">
              <div className="h-2 rounded-full bg-emerald-700" style={{ width: `${skill.level}%` }} />
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Iskustvo"
        title="Timeline obrazovanja, prakse, freelancinga i rada."
        description="Ako još nemaš formalno iskustvo, ovdje predstavi učenje, kurseve, praksu i projekte."
      />
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-5">
          {experience.map((item) => (
            <article className="card" key={item.role}>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <BriefcaseBusiness className="text-emerald-700" />
                  <h2 className="mt-4 text-2xl font-semibold text-slate-950">{item.role}</h2>
                  <p className="mt-1 text-slate-500">{item.company}</p>
                </div>
                <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">{item.period}</span>
              </div>
              <p className="mt-5 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog / notes"
        title="Bilješke iz učenja i kratki tekstovi o projektima."
        description="Blog stranica pomaže da pokažeš kako razmišljaš, ne samo šta si napravio."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article className="card" key={post.title}>
            <span className="text-sm font-semibold text-emerald-800">{post.date}</span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </section>
    </>
  )
}

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Spreman za saradnju, praksu ili razgovor o projektu."
        description="Zamijeni linkove svojim GitHub, LinkedIn i email podacima."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-4">
          <ContactLink icon={<Mail size={20} />} label="Email" value="tvoj.email@example.com" href="mailto:tvoj.email@example.com" />
          <ContactLink icon={<Code2 size={20} />} label="GitHub" value="github.com/tvojusername" href="https://github.com/" />
          <ContactLink
            icon={<BriefcaseBusiness size={20} />}
            label="LinkedIn"
            value="linkedin.com/in/tvojprofil"
            href="https://www.linkedin.com/"
          />
        </div>
        <form className="rounded-lg border border-slate-200 bg-white p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="field">
              Ime
              <input type="text" placeholder="Tvoje ime" />
            </label>
            <label className="field">
              Email
              <input type="email" placeholder="email@example.com" />
            </label>
          </div>
          <label className="field mt-4">
            Poruka
            <textarea rows={6} placeholder="Napiši kratku poruku..." />
          </label>
          <button className="primary-button mt-5" type="button">
            Pošalji poruku <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </>
  )
}

function ContactLink({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href: string }) {
  return (
    <a className="card flex items-center gap-4 hover:border-emerald-700" href={href} target="_blank" rel="noreferrer">
      <span className="grid h-11 w-11 place-items-center rounded-md bg-emerald-700 text-white">{icon}</span>
      <span>
        <span className="block text-sm text-slate-500">{label}</span>
        <span className="block font-semibold text-slate-950">{value}</span>
      </span>
    </a>
  )
}

export default Layout
