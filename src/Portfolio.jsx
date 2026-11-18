import { useEffect, useState } from 'react';
import Profile from './assets/Profile.jpg';
import './portfolio.css';

const RESUME = '/Abhigna_Margam_Resume.pdf';
const EMAIL = 'abhignamargam12@gmail.com';
const GITHUB = 'https://github.com/Abhigna1975';

const nav = [
  ['work', 'Work'],
  ['process', 'Process'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

const work = [
  {
    tag: 'Education product',
    title: 'Enrolment and payment flow for a student portal',
    role: 'UX research, flows, wireframes, high fidelity prototype',
    tools: ['Figma', 'Prototyping', 'React'],
    body: 'For a coding academy\'s student portal, I designed how a student goes from choosing a course to enrolling and paying. I mapped the journey, wireframed each step, and prototyped the flow in Figma before it was built.',
    points: [
      'Mapped the enrolment journey and cut it into clear, single purpose steps',
      'Designed form, plan selection and payment screens for desktop and mobile',
      'Handed off a clickable prototype and specs, then reviewed the build against it',
    ],
    img: '/work/enrolment-flow.jpg',
    alt: 'Four phone screens of the enrolment flow: choose course, your details, payment, enrolled',
    note: 'Redrawn for portfolio, client data removed',
    tone: 'clay',
  },
  {
    tag: 'Design system',
    title: 'Design tokens that made one product feel like one product',
    role: 'Visual system, tokens, rollout',
    tools: ['Figma', 'Design tokens', 'React'],
    body: 'For the same portal, I defined a small set of design tokens so every screen shares one type and shape language, then rolled it out across the codebase.',
    points: [
      'One typeface and four corner radii, applied to every component',
      'Documented the tokens so designers and developers use the same names',
      'Rolled the system out across the React codebase, screen by screen',
    ],
    img: '/work/design-tokens.jpg',
    alt: 'Design token sheet with type scale, spacing, four radii, colors and components',
    note: 'Redrawn for portfolio',
    tone: 'sage',
  },
  {
    tag: 'Startup, web and mobile',
    title: 'Starteryou: owning design for a student startup',
    role: 'Lead designer, end to end',
    tools: ['Figma', 'Adobe XD', 'User testing'],
    body: 'As the lead designer I owned every screen: the mobile app, the website, the admin dashboard and the brand assets, and I worked with engineering to ship them.',
    points: [
      'Designed the events feature from user flows to final UI and admin dashboard',
      'Created design system guidelines and a reusable component library',
      'Ran usability tests and iterated on feedback and analytics',
    ],
    img: '/work/starteryou-events.jpg',
    alt: 'Starteryou events: student event list, event detail with RSVP, and admin events dashboard',
    note: 'Redrawn for portfolio, sample data',
    tone: 'ink',
  },
  {
    tag: 'Responsive build',
    title: 'Maison Dorée: taking a luxury storefront to mobile',
    role: 'Front end build, responsive and mobile UI',
    tools: ['HTML', 'CSS', 'Responsive design'],
    body: 'I rebuilt a desktop only luxury jewelry template (credit: TemplateMo) as a component based HTML and CSS site, then designed and built its phone and tablet layouts so every section works on a small screen.',
    points: [
      'Split the page into reusable section components',
      'Designed the mobile layouts: stacked hero, two column collection grid, full width forms',
      'Kept the serif type and gold accents consistent at every screen size',
    ],
    links: [
      ['View live', 'https://abhigna1975.github.io/jewelry-site/'],
      ['View code', 'https://github.com/Abhigna1975/jewelry-site'],
    ],
    img: '/work/maison-doree.jpg',
    alt: 'Maison Doree jewelry site: home page, featured pendant and collections grid',
    note: 'Live site, desktop and mobile',
    tone: 'rose',
  },
];

const process = [
  ['01', 'Discover', 'Talk to users and stakeholders, review analytics, and find the real problem.'],
  ['02', 'Define', 'Personas, journey maps and task flows that the whole team agrees on.'],
  ['03', 'Wireframe', 'Low fidelity layouts in Figma or Adobe XD to test structure before style.'],
  ['04', 'Prototype', 'High fidelity, clickable prototypes built on the design system.'],
  ['05', 'Test', 'Usability tests, then iterate on what people actually struggled with.'],
  ['06', 'Hand off', 'Specs, tokens and reviews with engineers so the build matches the design.'],
];

const experience = [
  {
    title: 'Senior UI/UX Designer',
    company: 'S9 Technologies',
    when: 'Feb 2026 to Present',
    points: [
      'Designed the enrolment and payment flow for a coding academy student portal, from wireframes to high fidelity prototypes.',
      'Built a design token system (one typeface, four radii) and rolled it out across the React codebase.',
      'Redesigned storefront pages for a D2C grocery brand to match the live Shopify store pixel for pixel at desktop, tablet and mobile widths.',
      'Designed the in-app AI assistant for a gardening mobile app, with a curated answer bank so it only answers from verified content.',
    ],
  },
  {
    title: 'Lead UI/UX Designer',
    company: 'Starteryou',
    when: 'Apr 2025 to Feb 2026',
    points: [
      'Owned design for the startup: mobile app screens, web pages, social graphics and brand assets.',
      'Designed the events feature end to end, from user flows to final screens and an admin dashboard, and worked with engineering to ship it.',
      'Created design system guidelines and a component library, ran usability tests, and iterated on feedback and analytics.',
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'Nordstrom',
    when: 'Jun 2022 to Mar 2025',
    points: [
      'Designed customer facing e-commerce experiences across desktop and mobile for a large scale retail platform.',
      'Contributed to a shared design system and UI component library used across product teams, with a focus on consistency and WCAG accessibility.',
      'Ran usability tests and used analytics and customer feedback to improve layouts and flows.',
    ],
  },
];

const skills = [
  ['Design tools', ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Canva']],
  ['UX methods', ['User research', 'Personas', 'Journey maps', 'Information architecture', 'Wireframing', 'Prototyping', 'Usability testing']],
  ['Systems', ['Design systems', 'Design tokens', 'Component libraries', 'Accessibility (WCAG)', 'Responsive design']],
  ['Build and handoff', ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Git']],
  ['AI tools', ['ChatGPT', 'Claude', 'GitHub Copilot']],
];

function useActiveSection() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const els = nav.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

function Reveal({ children, className = '', as: Tag = 'div' }) {
  const [el, setEl] = useState(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [el]);
  return <Tag ref={setEl} className={`reveal ${shown ? 'in' : ''} ${className}`}>{children}</Tag>;
}

export default function Portfolio() {
  const active = useActiveSection();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="topbar">
        <a href="#top" className="brand" aria-label="Abhigna Margam, home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Abhigna Margam</span>
        </a>
        <button className="menu-btn" aria-expanded={menu} aria-label="Menu" onClick={() => setMenu(!menu)}>
          <span /><span />
        </button>
        <nav className={`nav ${menu ? 'open' : ''}`}>
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setMenu(false)}>{label}</a>
          ))}
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className="nav-cta">Resume</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <p className="eyebrow"><span className="dot" /> UI/UX Designer · 4+ years</p>
            <h1>Designing interfaces that feel <em>obvious</em> to use.</h1>
            <p className="lede">
              I'm Abhigna, a UI/UX designer who takes products from research and wireframes to polished,
              high fidelity prototypes in Figma and Adobe XD. I've designed for retail at Nordstrom, led design
              at a startup, and now design for client products in education, e-commerce and mobile.
            </p>
            <div className="cta-row">
              <a href="#work" className="btn primary">See my work</a>
              <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn ghost">Download resume</a>
            </div>
            <ul className="stats">
              <li><strong>4+</strong><span>years designing</span></li>
              <li><strong>3</strong><span>companies, from enterprise to startup</span></li>
              <li><strong>Web + mobile</strong><span>research to handoff</span></li>
            </ul>
          </div>
          <figure className="hero-photo">
            <img src={Profile} alt="Abhigna Margam" width="809" height="809" />
            <figcaption>
              <span>Based in Dallas-Fort Worth, TX</span>
              <span>Open to relocation</span>
            </figcaption>
          </figure>
        </section>

        <section id="work" className="section wrap">
          <div className="section-head">
            <p className="kicker">Selected work</p>
            <h2>Case studies</h2>
            <p className="section-sub">Four projects across education, a startup and retail. Click any image to see it full size.</p>
          </div>
          <div className="work-list">
            {work.map((w, i) => (
              <Reveal as="article" key={w.title} className={`case tone-${w.tone}`}>
                <a className="case-art" href={w.img} target="_blank" rel="noopener noreferrer" aria-label={`Open full size: ${w.title}`}>
                  <img src={w.img} alt={w.alt} loading="lazy" width="2000" height="1375" />
                  <span className="case-note">{String(i + 1).padStart(2, '0')} · {w.note}</span>
                </a>
                <div className="case-text">
                  <div className="case-main">
                  <p className="case-tag">{w.tag}</p>
                  <h3>{w.title}</h3>
                  <p className="case-role">{w.role}</p>
                  <p>{w.body}</p>
                  </div>
                  <div className="case-more">
                  <ul>{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  <div className="chips">{w.tools.map((t) => <span key={t}>{t}</span>)}</div>
                  {w.links && (
                    <div className="case-links">
                      {w.links.map(([l, href]) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer">{l} <span aria-hidden="true">↗</span></a>
                      ))}
                    </div>
                  )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="process" className="section band">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">How I work</p>
              <h2>My design process</h2>
            </div>
            <ol className="process">
              {process.map(([n, t, d]) => (
                <Reveal as="li" key={n}>
                  <span className="p-num">{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="experience" className="section wrap">
          <div className="section-head">
            <p className="kicker">Experience</p>
            <h2>Where I've designed</h2>
          </div>
          <ol className="timeline">
            {experience.map((e) => (
              <Reveal as="li" key={e.company}>
                <div className="t-meta">
                  <span className="t-when">{e.when}</span>
                  <span className="t-co">{e.company}</span>
                </div>
                <div className="t-body">
                  <h3>{e.title}</h3>
                  <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <section id="skills" className="section band">
          <div className="wrap skills-wrap">
            <div className="section-head">
              <p className="kicker">Toolkit</p>
              <h2>Skills and tools</h2>
            </div>
            <div className="skills">
              {skills.map(([g, list]) => (
                <div key={g} className="skill-group">
                  <h3>{g}</h3>
                  <div className="chips">{list.map((s) => <span key={s}>{s}</span>)}</div>
                </div>
              ))}
            </div>
            <div className="edu">
              <div>
                <h3>Education</h3>
                <p><strong>M.S. Computer Science and Information Technology</strong><br />Sacred Heart University, Fairfield, CT</p>
                <p><strong>B.Tech Computer Science and Engineering</strong><br />AAR Mahaveer Engineering College, Hyderabad</p>
              </div>
              <div>
                <h3>Certifications</h3>
                <p>UX Designer Certificate</p>
                <p>Front End Development Libraries</p>
                <p>Python for Data Science</p>
                <p>Communication Skills</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section wrap contact">
          <p className="kicker">Contact</p>
          <h2>Let's design something people <em>enjoy</em> using.</h2>
          <p className="section-sub">Open to UI/UX designer roles and happy to relocate.</p>
          <div className="cta-row center">
            <a href={`mailto:${EMAIL}`} className="btn primary">{EMAIL}</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn ghost">GitHub</a>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn ghost">Resume</a>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>© 2026 Abhigna Margam</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
