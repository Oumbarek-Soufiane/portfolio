import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from './icons.jsx';
import { projects, byId } from './data/projects.js';
import CaseStudy from './CaseStudy.jsx';

const NAV = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'],
  ['works', 'Works'], ['qualification', 'Qualification'], ['contact', 'Contact'],
];
const EMAIL = 'soufiane.oumbarek.officiel@gmail.com';

/* ---------- tiny hash router (#about, #works, #safesurf …) ---------- */
function useHashRoute() {
  const read = () => location.hash.replace('#', '') || 'home';
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => { setRoute(read()); window.scrollTo(0, 0); };
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  return route;
}
const go = (r) => { location.hash = r; };

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { const s = localStorage.getItem('theme'); if (s) return s; } catch { /* storage or clipboard unavailable */ }
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* storage or clipboard unavailable */ }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

function Title({ h, s }) {
  return <div className="stitle"><h2>{h}</h2><span>{s}</span></div>;
}

/* ================================ PAGES ================================ */
function Home() {
  return (
    <section className="page" id="home">
      <div className="wrap">
        <div className="hero">
          <div className="social">
            <a href="https://github.com/Oumbarek-Soufiane" target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" /></a>
            <a href="#contact" aria-label="Email"><Icon name="mail" /></a>
            <a href="#contact" aria-label="WhatsApp"><Icon name="chat" /></a>
          </div>
          <div>
            <h1>Soufiane <span className="hl">Oumbarek</span></h1>
            <div className="role">Software Engineer &amp; UX/UI Designer</div>
            <p>I design intuitive interfaces in Figma and build them end to end — from real-time desktop apps deployed at live sporting events to AI-powered extensions and full-stack, video-first web platforms.</p>
            <div className="cta">
              <a href="#contact" className="btn">Say Hello <Icon name="send" /></a>
              <a href="#works" className="btn ghost">View my work</a>
            </div>
          </div>
          <div className="blob-wrap"><div className="blob"><img src="assets/portrait.jpg" alt="Soufiane Oumbarek" /></div></div>
        </div>
        <div className="hstats">
          <div><b>6</b><span>Case studies</span></div>
          <div><b>Live</b><span>9th Rabat Int’l Marathon</span></div>
          <div><b>DeepMind</b><span>Hackathon presenter</span></div>
          <div><b>Google</b><span>UX Design Certificate</span></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page" id="about">
      <div className="wrap">
        <Title h="About Me" s="My introduction" />
        <div className="about">
          <div className="about-img"><img src="assets/portrait.jpg" alt="Portrait" /></div>
          <div>
            <div className="boxes">
              <div className="box"><Icon name="award" /><h3>Experience</h3><span>2 internships</span></div>
              <div className="box"><Icon name="case" /><h3>Completed</h3><span>10+ projects</span></div>
              <div className="box"><Icon name="head" /><h3>Languages</h3><span>AR · FR · EN</span></div>
            </div>
            <p>I’m a Software Engineer &amp; UX/UI Designer passionate about creating intuitive digital experiences. I work in Figma with modern design systems, then build what I design with React, Vue, Angular, Node.js and Spring Boot.</p>
            <p>My most recent work — the RaceTimer Scoreboard desktop app — went live at the 9th Rabat International Marathon. I’m completing my engineering degree at ENSAD Mohammedia, hold the Google UX Design Professional Certificate, and I’m looking for teams that ship thoughtful products at scale.</p>
            <div className="cta" style={{ marginTop: 10 }}>
              <a href="Soufiane_Oumbarek_CV.pdf" download="Soufiane_Oumbarek_CV.pdf" target="_blank" rel="noopener" className="btn">Download CV <Icon name="download" /></a>
              <a href="#works" className="btn or">See case studies <Icon name="arrow" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS = {
  'UX/UI Design': [['Fg', 'Figma', 'Wireframes · UI kits · prototypes'], ['Ai', 'Adobe Collection', 'Visual & multimedia design'], ['DS', 'Design Systems', 'Tokens · reusable components'], ['UX', 'UX Foundations', 'Gestalt · Fitts · Nielsen'], ['A11', 'Accessibility', 'WCAG 2.1 contrast & legibility'], ['G', 'Google UX Certificate', 'Professional certificate']],
  Frontend: [['Re', 'React.js', 'SPAs · Three.js scenes'], ['Nx', 'Next.js', 'Hybrid React apps'], ['Vu', 'Vue.js', 'Vite · component systems'], ['Ng', 'Angular', 'Signals · RxJS · i18n'], ['El', 'Electron', 'Cross-platform desktop apps'], ['JS', 'JavaScript / TypeScript', 'Core languages of the web']],
  Backend: [['No', 'Node.js', 'REST · SSE · UDP listeners'], ['Sb', 'Spring Boot', 'Java 21 · Security · JPA'], ['Pg', 'PostgreSQL', 'Hibernate · Flyway'], ['Php', 'PHP', 'Server-side web'], ['Py', 'Python', 'Scripting · ML'], ['C++', 'C · C++ · C# · Java', 'Systems & OOP']],
  'DevOps & AI': [['Git', 'Git & GitHub', 'GitFlow branching'], ['Dk', 'Docker', 'Docker Compose deployments'], ['K8', 'Kubernetes', 'Container orchestration'], ['Aws', 'AWS', 'Cloud services'], ['DL', 'Multimodal Deep Learning', 'GPT · Colab · Kaggle · Jupyter'], ['Rb', 'Robotics & Arduino', 'Embedded C++']],
};
function Skills() {
  const [tab, setTab] = useState('UX/UI Design');
  return (
    <section className="page" id="skills">
      <div className="wrap">
        <Title h="Skills" s="My technical level" />
        <div className="sk-tabs">
          {Object.keys(SKILLS).map((k) => <button key={k} className={'pill' + (tab === k ? ' on' : '')} onClick={() => setTab(k)}>{k}</button>)}
        </div>
        <div className="sk-panel on" key={tab}>
          {SKILLS[tab].map(([i, b, s]) => <div className="sk" key={b}><i>{i}</i><div><b>{b}</b><span>{s}</span></div></div>)}
        </div>
      </div>
    </section>
  );
}

const FILTERS = [['all', 'All'], ['full', 'Full-stack'], ['ux', 'UX/UI design'], ['ai', 'AI'], ['design', 'Graphic design']];
function Works() {
  const [f, setF] = useState('all');
  const list = projects.filter((p) => f === 'all' || p.cats.includes(f));
  return (
    <section className="page" id="works">
      <div className="wrap">
        <Title h="Works" s="What I realise — open any project for the full case study" />
        <div className="filters">
          {FILTERS.map(([k, l]) => <button key={k} className={'pill' + (f === k ? ' on' : '')} onClick={() => setF(k)}>{l}</button>)}
        </div>
        <div className="works">
          {list.map((p) => (
            <article className={'work' + (p.featured && f === 'all' ? ' big' : '')} key={p.id}>
              <a href={'#' + p.id} className="thumb">
                {p.thumb.video
                  ? <video src={p.thumb.video} poster={p.thumb.poster} muted loop playsInline autoPlay preload="metadata" />
                  : <img src={p.thumb.img} alt={p.title} loading="lazy" />}
                <span className="cs">Case study</span>
              </a>
              <h3>{p.title} — {p.card}</h3>
              <p>{p.summary}</p>
              <div className="work-f">
                <a href={'#' + p.id} className="go">Read case study <Icon name="arrow" /></a>
                <span className="tag">{p.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const EDU = [
  ['DENSAD Diploma', 'ENSAD Mohammedia', '2024 — 2027', true],
  ['Software & Web Development', 'ENS Tétouan', '2023 — 2024'],
  ['BTS Diploma', 'Multimedia & Web Conception', '2021 — 2023'],
];
const EXP = [
  ['Software Engineering Intern', 'Racetimer Morocco', 'Apr 2026 — Jun 2026', ['Electron · Vue.js · Node.js timing & broadcast app', 'UDP FinishLynx parsing + SSE live scoreboards', 'Deployed at the 9th Rabat International Marathon'], 'racetimer'],
  ['Full-Stack Engineer & UI/UX Designer', 'FashionFlow — engineering project', 'Feb 2026 — Mar 2026', ['Video-first Angular storefront with Signals & JWT', 'Spring Boot + PostgreSQL, 200 MB video uploads'], 'fashionflow'],
  ['Software Engineer', 'SafeSurf — engineering project', 'Jan 2026 — Feb 2026', ['Real-time harmful image detection extension', 'Presented at the Google DeepMind Hackathon'], 'safesurf'],
  ['UX/UI Designer & Front-End Developer', 'AMTIC — Link Pro', 'Jun 2025', ['Figma UI & landing-page concepts', 'React.js + Three.js landing with 3D device models']],
];
function Qualification() {
  const [tab, setTab] = useState('edu');
  return (
    <section className="page" id="qualification">
      <div className="wrap">
        <Title h="Qualification" s="My personal journey" />
        <div className="q-tabs">
          <button className={'q-tab' + (tab === 'edu' ? ' on' : '')} onClick={() => setTab('edu')}><Icon name="cap" />Education</button>
          <button className={'q-tab' + (tab === 'exp' ? ' on' : '')} onClick={() => setTab('exp')}><Icon name="case" />Experience</button>
        </div>
        {tab === 'edu' ? (
          <div className="q-panel on" key="edu">
            <div className="tl">
              {EDU.map(([h, o, d, now]) => (
                <div className="ti" key={h}><div className="c"><h3>{h}{now && <span className="now">Current</span>}</h3><div className="org">{o}</div><span className="d">{d}</span></div></div>
              ))}
            </div>
            <div className="awards">
              <div className="award"><i><Icon name="award" /></i><div><b>Google UX Design Professional Certificate</b><span>Google</span></div></div>
              <div className="award"><i><Icon name="users" /></i><div><b>Google for Developers Member</b><span>2024</span></div></div>
            </div>
          </div>
        ) : (
          <div className="q-panel on" key="exp">
            <div className="tl">
              {EXP.map(([h, o, d, li, link]) => (
                <div className="ti" key={h}><div className="c"><h3>{h}</h3><div className="org">{o}</div><span className="d">{d}</span>
                  <ul>{li.map((l) => <li key={l}>{l}</li>)}</ul>
                  {link && <a className="tl-link" href={'#' + link}>View case study →</a>}
                </div></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Contact() {
  const [note, setNote] = useState(null);
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const d = Object.fromEntries(new FormData(form));
    if (!d.name || !d.email || !d.message) return setNote({ err: 'Please fill in your name, email and project.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return setNote({ err: 'Please enter a valid email address.' });
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent('Project — ' + d.name)}&body=${encodeURIComponent(d.message + '\n\n— ' + d.name + '\n' + d.email)}`;
    setSending(true);
    emailjs.sendForm('service_dlp03ej', 'template_vw8x9ee', form, 'VP3F5AB8GHDS_KyGglBMW')
      .then(() => { setNote({ ok: true }); form.reset(); })
      .catch(() => setNote({ href: mailto, failed: true }))
      .finally(() => setSending(false));
  };
  const copy = async () => { try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* storage or clipboard unavailable */ } };
  return (
    <section className="page" id="contact">
      <div className="wrap">
        <Title h="Contact" s="Get in touch" />
        <div className="contact">
          <div>
            <h3>Talk to me</h3>
            <div className="ccards">
              <div className="ccard"><Icon name="mail" /><b>Email</b><span className="v">{EMAIL}</span><button onClick={copy}>{copied ? 'Copied ✓' : 'Copy email →'}</button></div>
              <div className="ccard"><Icon name="chat" /><b>WhatsApp / Phone</b><span className="v">+212 652 608 908</span><a className="w" href="https://wa.me/212652608908" target="_blank" rel="noopener">Write me →</a></div>
              <div className="ccard"><Icon name="github" /><b>GitHub</b><span className="v">github.com/Oumbarek-Soufiane</span><a className="w" href="https://github.com/Oumbarek-Soufiane" target="_blank" rel="noopener">View profile →</a></div>
            </div>
          </div>
          <div>
            <h3>Write me your project</h3>
            <form onSubmit={submit} noValidate>
              <div className="f"><label>Name</label><input name="name" placeholder="Insert your name" /></div>
              <div className="f"><label>Email</label><input name="email" type="email" placeholder="Insert your email" /></div>
              <div className="f"><label>Project</label><textarea name="message" placeholder="Tell me about the role or project" /></div>
              <button className="btn" type="submit" disabled={sending} style={{ justifySelf: 'start' }}>{sending ? 'Sending…' : 'Send Message'} <Icon name="send" /></button>
              {note && (
                <div className="note show">
                  {note.err || (note.ok
                    ? <>Thank you! Your message has been sent — I’ll get back to you soon.</>
                    : <>The message couldn’t be sent right now. <a href={note.href}>Open it in your email app →</a><br />Or write to <b>{EMAIL}</b>.</>)}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const PAGES = { home: Home, about: About, skills: Skills, works: Works, qualification: Qualification, contact: Contact };

/* ================================ APP ================================ */
export default function App() {
  const route = useHashRoute();
  const [, toggle] = useTheme();
  const [menu, setMenu] = useState(false);
  const [zoom, setZoom] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(scrollY > 10);
    addEventListener('scroll', on, { passive: true });
    return () => removeEventListener('scroll', on);
  }, []);
  useEffect(() => { setMenu(false); }, [route]);
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setZoom(null);
    addEventListener('keydown', k); return () => removeEventListener('keydown', k);
  }, []);

  const project = byId[route];
  const Page = PAGES[route] || Home;
  const activeNav = project ? 'works' : (PAGES[route] ? route : 'home');

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <nav className="wrap">
          <a href="#home" className="logo">Soufiane</a>
          <ul className="links">
            {NAV.map(([k, l]) => <li key={k}><a href={'#' + k} className={activeNav === k ? 'active' : ''}>{l}</a></li>)}
          </ul>
          <div className="nav-r">
            <button className="ibtn" onClick={toggle} aria-label="Toggle dark mode">
              <span className="moon"><Icon name="moon" /></span><span className="sun"><Icon name="sun" /></span>
            </button>
            <button className="ibtn menu-btn" onClick={() => setMenu((m) => !m)} aria-label="Menu"><Icon name="menu" /></button>
          </div>
        </nav>
        <div className={'mmenu' + (menu ? ' open' : '')}>
          {NAV.map(([k, l]) => <a key={k} href={'#' + k} className={activeNav === k ? 'active' : ''}>{l}</a>)}
        </div>
      </header>

      <main key={route} className="route">
        {project ? <CaseStudy p={project} go={go} onZoom={setZoom} />
          : route === 'home' || !PAGES[route]
            ? <div className="stack">{Object.values(PAGES).map((P, i) => <P key={i} />)}</div>
            : <Page />}
      </main>

      <footer>
        <div className="wrap">
          <div className="ft">
            <div><span className="logo">Soufiane</span><small>Software Engineer &amp; UX/UI Designer</small></div>
            <ul>{NAV.slice(1).map(([k, l]) => <li key={k}><a href={'#' + k}>{l}</a></li>)}</ul>
          </div>
          <p className="copy">© 2026 Soufiane Oumbarek. All rights reserved.</p>
        </div>
      </footer>

      <button className={'up' + (scrolled ? ' show' : '')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><Icon name="up" /></button>
      <div className={'lb' + (zoom ? ' on' : '')} onClick={() => setZoom(null)}>{zoom && <img src={zoom} alt="" />}</div>
    </>
  );
}
