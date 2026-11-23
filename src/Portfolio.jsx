import { useEffect, useState } from 'react';
import Profile from './assets/Profile.jpg';
import './portfolio.css';

const RESUME = '/Abhigna_Resume.pdf';
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
    tag: 'Mobile app, iOS and Android',
    title: 'Suggi: a kitchen garden app, from first screen to public release',
    role: 'UI/UX design and development, client Organic Mandya',
    tools: ['Figma', 'iOS', 'Android'],
    body: 'Embedded with the client as a Forward Deployed Engineer, I designed the complete UI/UX for Suggi and developed it for both platforms, covering design, development, testing and release.',
    points: [
      'Designed every screen manually in Figma, then built the app for iOS and Android',
      'Took it through testing to a full public release for real users',
      'Used AI-assisted development to design and ship faster',
    ],
    tone: 'sage',
  },
  {
    tag: 'Startup website',
    title: 'Starteryou: growing a startup website from 0 to 10K users',
    role: 'UI/UX designer and frontend developer, end to end',
    tools: ['Figma', 'Canva', 'HTML', 'CSS', 'JavaScript'],
    body: 'I owned UI/UX design end to end, from wireframes and prototypes to website redesigns in Figma and Canva, and developed several of the website pages.',
    points: [
      'Wireframes, prototypes and website redesigns in Figma and Canva',
      'Developed several website pages and helped grow the site from 0 to 10K users',
      'Created promotion graphics and ran LinkedIn and Reddit to build brand awareness',
    ],
    links: [['View live', 'https://www.starteryou.com/']],
    img: '/work/starteryou-events.jpg',
    alt: 'Starteryou events: student event list, event detail with RSVP, and admin events dashboard',
    tone: 'ink',
  },
  {
    tag: 'E-commerce',
    title: 'Popnwrap: a simpler path to checkout',
    role: 'Full UX lifecycle',
    tools: ['Figma', 'A/B testing', 'React'],
    body: 'A gift shop selling balloon bouquets. I led the full UX lifecycle, from research, personas and journey maps to wireframes and prototypes, and A/B tested the checkout.',
    points: [
      'Research, personas and journey maps for first time gift buyers',
      'Wireframed and prototyped the browse, product and cart flow',
      'A/B testing improved checkout completion by 22%',
    ],
    links: [
      ['View live', 'https://popnwrap.vercel.app/'],
      ['View code', 'https://github.com/Abhigna1975/Popnwrap'],
    ],
    img: '/work/popnwrap.jpg',
    alt: 'Popnwrap gift shop home page with balloon bouquet products',
    tone: 'rose',
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
    tone: 'rose',
  },
];

const process = [
  ['01', 'Discover', 'Talk to users and stakeholders, review analytics, and find the real problem.'],
  ['02', 'Define', 'Personas, journey maps and task flows that the whole team agrees on.'],
  ['03', 'Wireframe', 'Low fidelity layouts in Figma or Canva to test structure before style.'],
  ['04', 'Prototype', 'High fidelity, clickable prototypes built on the design system.'],
  ['05', 'Test', 'Usability tests, then iterate on what people actually struggled with.'],
  ['06', 'Build and ship', 'I build the design myself in code, test it and take it to release.'],
];

const experience = [
  {
    title: 'Forward Deployed Engineer',
    company: 'S9 Technologies',
    when: 'Jul 2026 to Nov 2026',
    points: [
      'Embedded with client Organic Mandya to understand business needs and deliver end-to-end digital solutions.',
      'Designed and developed Suggi, a kitchen garden app, for iOS and Android and took it to a full public release.',
      'Combined manual design in Figma with AI-assisted development to design and ship faster.',
      "Managed the client's Shopify store: page builds, layout changes and ongoing updates.",
      'Set up and managed Google Analytics to track traffic and user behavior and guide decisions.',
    ],
  },
  {
    title: 'UI/UX Designer and Frontend Developer',
    company: 'Starteryou',
    when: 'Feb 2025 to Feb 2026',
    points: [
      'Owned UI/UX design end to end: wireframes, prototypes and website redesigns in Figma and Canva.',
      'Developed several website pages and contributed to growing the Starteryou website from 0 to 10K users.',
      'Led promotion: created graphics and managed LinkedIn and Reddit to build brand awareness and attract users.',
      'Used AI tools such as Claude to speed up design, coding and iteration.',
    ],
  },
  {
    title: 'Web Designer and Full Stack Developer',
    company: 'Nordstrom',
    when: 'Aug 2022 to Jan 2025',
    points: [
      'Designed and built responsive web pages and UI components with HTML, CSS and JavaScript.',
      'Developed full stack features, taking designs from Figma wireframes to production code.',
      'Worked with product, design and engineering teams to turn requirements into shipped features.',
      'Tested, debugged and iterated on features to improve usability and performance.',
    ],
  },
];

const skills = [
  ['Design', ['Figma', 'Canva', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Website Redesign', 'Graphic Design']],
  ['Development', ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'Frontend Development', 'iOS and Android App Development']],
  ['Tools and platforms', ['Shopify', 'Google Analytics', 'GitHub', 'Git']],
  ['AI and marketing', ['Claude and other AI design/dev tools', 'LinkedIn and Reddit Promotion', 'Social Media Graphics']],
  ['Professional', ['Client Communication', 'Requirement Gathering', 'Problem Solving', 'Quick Learner']],
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
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0, rootMargin: '0px 0px 200px 0px' });
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
            <p className="eyebrow"><span className="dot" /> UI/UX Designer · Frontend Developer · Forward Deployed Engineer</p>
            <h1>Designing interfaces that feel <em>obvious</em> to use.</h1>
            <p className="lede">
              I'm Abhigna, with 4+ years of designing, prototyping and redesigning in Figma and Canva, building responsive websites
              and iOS/Android apps, and driving growth through promotion. I work directly with clients, from requirements to release.
            </p>
            <div className="cta-row">
              <a href="#work" className="btn primary">See my work</a>
              <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn ghost">Download resume</a>
            </div>
            <ul className="stats">
              <li><strong>4+</strong><span>years designing</span></li>
              <li><strong>10K</strong><span>users at Starteryou</span></li>
              <li><strong>iOS + Android</strong><span>app taken to public release</span></li>
            </ul>
          </div>
          <figure className="hero-photo">
            <img src={Profile} alt="Abhigna Margam" width="809" height="809" />
            <figcaption>
              <span>Based in Denton, TX</span>
              <span>Open to relocation</span>
            </figcaption>
          </figure>
        </section>

        <section id="work" className="section wrap">
          <div className="section-head">
            <p className="kicker">Selected work</p>
            <h2>Case studies</h2>
            <p className="section-sub">A mobile app, a startup website and e-commerce builds. Click any image to see it full size.</p>
          </div>
          <div className="work-list">
            {work.map((w, i) => (
              <Reveal as="article" key={w.title} className={`case tone-${w.tone}`}>
                {w.img && <a className="case-art" href={w.img} target="_blank" rel="noopener noreferrer" aria-label={`Open full size: ${w.title}`}>
                  <img src={w.img} alt={w.alt} loading="lazy" />
                </a>}
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
            <h2>Where I've designed and built</h2>
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
            </div>
          </div>
        </section>

        <section id="contact" className="section wrap contact">
          <p className="kicker">Contact</p>
          <h2>Let's design something people <em>enjoy</em> using.</h2>
          <p className="section-sub">Open to UI/UX design, frontend and forward deployed engineering roles, and happy to relocate.</p>
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
