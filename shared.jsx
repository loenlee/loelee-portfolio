// ============================================================
// Shared — data, chrome, figure system, reveal, tweaks layer.
// Sourced from Loe Lee's Vanta interview deck (157 slides).
// ============================================================

const ART = 'artifacts/';

// ---- The two case studies (the deck's spine) ----
const PROJECTS = [
  {
    id: 'vanta',
    company: 'Vanta',
    role: 'Sr. Manager of Design',
    title: "Evolving and evaluating Vanta's AI Agent at warp speed.",
    mode: ['Hands-on'],
    comingSoon: true,
    accentVar: '--accent-2',
    hero: { src: ART + 'vanta-agent.png', kind: 'plate' },
    blurb: "Honing an approach, staffing a team, and championing a fast paced design, build, and evaluation of agents to empower GRC professionals to build trust.",
  },
  {
    id: 'hubspot',
    company: 'HubSpot',
    role: 'Sr. Manager of Design',
    title: "Helping small business marketers grow on their own.",
    mode: ['Leading at Scale', 'Launched'],
    accentVar: '--accent-4',
    hero: { src: ART + 'img-126.jpg', kind: 'browser', url: 'app.hubspot.com/cms/onboarding' },
    blurb: "How I led a team to solve for customer, product, and organizational problems to help SMB marketers onboard to CMS Hub in one day, not three months.",
  },
  {
    id: 'zillow',
    company: 'Zillow',
    role: 'Director of Design',
    title: "Re-architecting sign-in for a housing super-app.",
    mode: ['Hands-on', 'In flight'],
    accentVar: '--accent-3',
    hero: { src: ART + 'zillow-signin.png', kind: 'phone' },
    blurb: "Zillow's sign-in experience needed a major upgrade to become a Housing Super App. At the time, it quietly hurt customers.",
  },
];

// ---- Why Vanta — slide 8, "I believe in…" ----
const WHY_VANTA = [
  { n: '01', t: 'Focus on the customer', meta: 'Customer', desc: 'Put customer empathy and customer needs at the center of what we do.' },
  { n: '02', t: 'Decide with data', meta: 'Data', desc: 'Harness customer and business insights to inform strategies, not personal opinions.' },
  { n: '03', t: 'Grow with feedback', meta: 'Feedback', desc: 'Nurture a feedback culture to accelerate growth, with feedback from customers, peers, managers, and direct reports.' },
  { n: '04', t: 'Improve always', meta: 'Excellence', desc: 'Do better and strive for excellence. Take time to reflect, document, and share stories.' },
];

// ---- Testimonials — slides 154–157 ----
const TESTIMONIALS = [
  {
    who: 'Jessica Prost', title: 'Principal Designer, Zillow',
    quote: "Loe is always advocating for her team, in an incredibly smart and kind way, always finding the right time to say the right thing. She is SO good at crafting a compelling narrative; it inspired me to uplevel.",
  },
  {
    who: 'Lisa Covino', title: 'Senior Design Manager, HubSpot',
    quote: "Loe acted as a mirror for my work, helping me reflect on strengths and growth areas. She made sure I had the right projects and mentorship, key to achieving my goals and building my confidence.",
  },
  {
    who: 'Jenna Clemens', title: 'Staff Product Designer, Gusto',
    quote: "Loe coached me to a promotion, helping me assess my performance against the ladder and advocating for me with leadership, with frequent, honest feedback that sharpened my work.",
  },
];

// ============================================================
// Figure system — artifacts are the heroes.
// ============================================================
const Shot = ({ src, kind = 'plate', url, no, cap, capBold, alt = '', style, imgStyle, className = '' }) => {
  let body;
  if (kind === 'phone') {
    body = (
      <div className="shot-phone" style={style}>
        <img src={src} alt={alt} style={imgStyle} loading="lazy" />
      </div>
    );
  } else if (kind === 'browser') {
    body = (
      <div className="browser" style={style}>
        <div className="bar"><i></i><i></i><i></i><span className="url">{url || ''}</span></div>
        <img src={src} alt={alt} style={imgStyle} loading="lazy" />
      </div>
    );
  } else if (kind === 'bleed') {
    body = <div className="bleed" style={style}><img src={src} alt={alt} style={imgStyle} loading="lazy" /></div>;
  } else if (kind === 'bare') {
    body = <div className="plate bare" style={style}><img src={src} alt={alt} style={imgStyle} loading="lazy" /></div>;
  } else {
    body = <div className="plate" style={style}><img src={src} alt={alt} style={imgStyle} loading="lazy" /></div>;
  }
  return (
    <figure className={`figure ${className}`}>
      {body}
      {(no || cap) && (
        <div className="fig-cap">
          {no && <span className="no">{no}</span>}
          <span className="txt">{capBold && <b>{capBold} </b>}{cap}</span>
        </div>
      )}
    </figure>
  );
};

// ============================================================
// Chrome
// ============================================================
const Nav = ({ current }) => (
  <nav className="nav">
    <a className="nav-brand" href="index.html">
      <b>LOE LEE</b>
    </a>
    <div className="nav-links">
      <details className="nav-group nav-portfolio">
        <summary aria-label="Portfolio" className={['vanta', 'hubspot', 'zillow'].includes(current) ? 'active' : ''}>
          Portfolio
        </summary>
        <div className="nav-group-menu">
          <a href="vanta.html" className={current === 'vanta' ? 'active' : ''}>Vanta</a>
          <a href="hubspot.html" className={current === 'hubspot' ? 'active' : ''}>HubSpot</a>
          <a href="zillow.html" className={current === 'zillow' ? 'active' : ''}>Zillow</a>
        </div>
      </details>
      <a href="index.html#vanta" className="nav-flat">Leadership style</a>
      <a href="coaching.html" className="nav-flat">Coaching</a>
      <details className="nav-group nav-burger-menu">
        <summary aria-label="Menu" className={['vanta', 'hubspot', 'zillow'].includes(current) ? 'active' : ''}>
          <span className="nav-burger" aria-hidden="true"><span></span><span></span><span></span></span>
          <span className="nav-burger-label">Menu</span>
        </summary>
        <div className="nav-group-menu">
          <span className="nav-group-head">Case studies</span>
          <a href="vanta.html" className={current === 'vanta' ? 'active' : ''}>Vanta</a>
          <a href="hubspot.html" className={current === 'hubspot' ? 'active' : ''}>HubSpot</a>
          <a href="zillow.html" className={current === 'zillow' ? 'active' : ''}>Zillow</a>
          <span className="nav-group-sep" role="separator"></span>
          <a href="index.html#vanta">Leadership style</a>
          <a href="coaching.html">Coaching</a>
        </div>
      </details>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div className="fwrap">
      <div className="label" style={{ color: 'rgba(236,232,224,0.55)', marginBottom: 28 }}>Thank you for your feedback, comments, questions.</div>
      <h2 className="big">I grow diverse<br />winning <span className="accent">teams.</span></h2>
      <div className="frow">
        <div className="links">
          <a className="solid" href="https://calendly.com/loenlee/30-minute-intro-w-loe" target="_blank" rel="noreferrer">Book a 30-min intro call ↗</a>
          <a className="solid" href="https://www.linkedin.com/in/loelee" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="vanta.html">Vanta</a>
          <a href="hubspot.html">HubSpot</a>
          <a href="zillow.html">Zillow</a>
          <a href="index.html#vanta">Leadership style</a>
          <a href="coaching.html">Coaching</a>
        </div>
        <div className="colota">
          Loe Lee<br />
          Senior Manager, Product Design
        </div>
      </div>
      <div className="base">
        <span>© 2026 Loe Lee</span>
      </div>
    </div>
  </footer>
);

// ============================================================
// Reveal-on-scroll (one observer, post-mount)
// ============================================================
function initReveal() {
  const all = () => document.querySelectorAll('.reveal:not(.in)');
  // Immediate pass: anything already within (or near) the viewport shows now.
  const showInView = () => {
    const vh = window.innerHeight || 800;
    all().forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.96 && r.bottom > 0) el.classList.add('in');
    });
  };
  showInView();
  if (typeof IntersectionObserver === 'undefined') {
    all().forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });
  all().forEach(el => io.observe(el));
  // Re-check on scroll (covers preview contexts where IO is sluggish) + hard fallback.
  const onScroll = () => showInView();
  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(() => { all().forEach(el => el.classList.add('in')); window.removeEventListener('scroll', onScroll); }, 2200);
}

// ============================================================
// Page wrapper
// ============================================================
const Page = ({ current, children }) => {
  React.useEffect(() => {
    const id = requestAnimationFrame(() => initReveal());
    // Hash-scroll: the page mounts via React after the browser's initial
    // anchor jump, so re-align to location.hash once content + images settle.
    const scrollToHash = (smooth) => {
      const hash = decodeURIComponent(window.location.hash || '').slice(1);
      if (!hash) return false;
      const el = document.getElementById(hash);
      if (!el) return false;
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
      return true;
    };
    const timers = [];
    if (window.location.hash) {
      // a few passes catch font swap + lazy image reflow shifting the target
      [60, 240, 600, 1100].forEach((t) => timers.push(setTimeout(() => scrollToHash(false), t)));
    }
    const onHash = () => scrollToHash(true);
    window.addEventListener('hashchange', onHash);
    // Close the mobile menu on outside click, in-menu link click, or Esc
    const closeNavGroup = (e) => {
      const clickedLink = e.target.closest('.nav-group-menu a');
      document.querySelectorAll('details.nav-group[open]').forEach((d) => {
        if (clickedLink ? d.contains(clickedLink) : !d.contains(e.target)) d.removeAttribute('open');
      });
    };
    const onKey = (e) => { if (e.key === 'Escape') document.querySelectorAll('details.nav-group[open]').forEach((d) => d.removeAttribute('open')); };
    document.addEventListener('click', closeNavGroup);
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(id);
      timers.forEach(clearTimeout);
      window.removeEventListener('hashchange', onHash);
      document.removeEventListener('click', closeNavGroup);
      document.removeEventListener('keydown', onKey);
    };
  }, []);
  return (
    <>
      <Nav current={current} />
      <main className="page">{children}</main>
      <Footer />
    </>
  );
};

Object.assign(window, { ART, PROJECTS, WHY_VANTA, TESTIMONIALS, Shot, Nav, Footer, Page, initReveal });
