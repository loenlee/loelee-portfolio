// Coaching — dedicated page. Structure inspired by margaretleecoaching.com:
// hero → who I coach → why coaching → themed testimonials → what to expect →
// packages/form → about → writings & talks.

// ── Reused content (kept in sync with pages/home.jsx's ARTICLES) ──────────
const COACH_ARTICLES = [
  {
    title: 'Designing Design Management',
    desc: "Great designers don't need to start from scratch to become excellent design managers. They just evolve the tools they already have.",
    src: 'LinkedIn',
    href: 'https://www.linkedin.com/pulse/designing-design-management-loe-lee/',
  },
  {
    title: "An Empath's Guide to Healthy Teams & Happy Customers",
    desc: 'Turn your empathy into a super power with these seven steps as a design leader.',
    src: 'HubSpot · Medium',
    href: 'https://medium.com/hubspot-product/an-empaths-guide-to-creating-healthy-teams-and-happy-customers-3fd88207445f',
  },
  {
    title: '15 Things to Consider for Your UX Portfolio',
    desc: 'Published in UX Magazine: the 15 things I look for as a hiring manager.',
    src: 'UX Magazine',
    href: 'https://medium.com/ux-magazine/15-things-to-consider-for-your-ux-portfolio-7a5827d13470',
  },
  {
    title: "You're Still You When You're Remote",
    desc: "A houseboat in Fiji or a high rise in Australia. Great workers are great workers.",
    src: 'LinkedIn',
    href: 'https://www.linkedin.com/pulse/youre-still-you-when-remote-loe-lee/',
  },
  {
    title: 'Creating a User-Focused Cover Letter & Résumé',
    desc: 'How to design for your hiring manager and your recruiters.',
    src: 'HubSpot · Medium',
    href: 'https://medium.com/hubspot-product/designing-a-user-centered-cover-letter-and-resume-355c0d557eb5',
  },
];

// ── Growth areas ("Are you seeking growth in…") ────────────────────────────
const GROWTH_AREAS = [
  'Navigating a tough manager or stakeholder relationship',
  'Getting promoted, or leveling up your career ladder',
  'Building executive presence and confidence',
  'Increasing your visibility and influence across the org',
  'Balancing leadership with life outside of work',
  'Exploring a transition: new role, new company, or going hands-on again',
  'Finding authenticity as a woman or marginalized person in tech',
];

// ── Themed testimonials (DRAFT — confirm titles/companies before publishing) ──
const COACH_TESTIMONIALS = [
  {
    theme: 'Vision & direction',
    quote: "On my first day at HubSpot, Loe asked me: “Where do you want to end up? What's your vision for personal growth?” — that question shifted how I thought about my career.",
    who: 'Philipp Walzer',
    title: 'Principal Product Designer, HubSpot',
  },
  {
    theme: 'Promotion & advocacy',
    quote: 'Loe coached me to a promotion to senior designer by helping me assess my performance and gaps against the career ladder and advocating for me with leadership.',
    who: 'Jenna Clemens',
    title: 'Staff Product Designer, Gusto',
  },
  {
    theme: 'Confidence & reflection',
    quote: 'Loe acted as a mirror for my work, helping me reflect on both my strengths and areas for growth. These opportunities, combined with her constructive feedback, were key to achieving my goals and building my confidence.',
    who: 'Lisa Covino',
    title: 'Senior Design Manager, HubSpot',
  },
  {
    theme: 'Visibility & influence',
    quote: 'Loe significantly accelerated my career growth by expanding the reach and impact of my work. She mentored me in stakeholder relationship building and securing buy-in across all levels.',
    who: 'Christel Kemp',
    title: 'Principal Product Designer, Attentive',
  },
];

// ── Packages + form (moved here from home.jsx — this is now the only copy) ──
const COACH_TIERS = [
  {
    name: 'Free 30-min intro call',
    price: 'Free',
    tag: "“Let's see if we're a fit.”",
    desc: 'Low pressure, no prep required. We focus the conversation on where you are now and what’s feeling hard.',
    calendly: 'https://calendly.com/loenlee/30-minute-intro-w-loe',
  },
  {
    name: '3-session package',
    price: '$400',
    tag: '“For a specific challenge.”',
    desc: 'Great for someone navigating a promotion conversation, a job change, or a moment of burnout. Focused and actionable.',
    featured: true,
  },
  {
    name: '10-session package',
    price: '$1,200',
    tag: '“For sustained growth.”',
    desc: 'For clients who want to go deeper: building long-term confidence, developing their leadership voice, or reshaping how they show up at work over time.',
  },
];

const FORMSPREE_ID = "xbdewvpq";      // live — submissions go to loenlee@gmail.com
const COACH_EMAIL = "loenlee@gmail.com";

// ── Sections ────────────────────────────────────────────────────────────
const CoachHero = () => (
  <header className="section hero" style={{ paddingTop: 'clamp(48px,9vw,120px)' }}>
    <div className="wrap">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="kicker reveal"><span className="bar"></span>1:1 coaching</div>
          <h1 className="display reveal" style={{ marginTop: 30 }}>
            Coaching <span className="accent">authentic leaders.</span>
          </h1>
          <p className="lede reveal" style={{ marginTop: 'clamp(14px,2vw,24px)', maxWidth: '34em' }}>
            Tough boss? Looking to grow? Parenting and leading in tech? Exploring new opportunities? I coach folks in tech to better understand themselves, the corporate systems they're in, and how to navigate those systems while staying true to themselves. I specialize in supporting women, neurodivergent folks, and folks with ethnically diverse backgrounds.
          </p>
          <a className="coach-book-btn reveal" style={{ marginTop: 28 }} href="https://calendly.com/loenlee/30-minute-intro-w-loe" target="_blank" rel="noreferrer">
            Book a free 30-min consultation ↗
          </a>
        </div>
        <figure className="hero-portrait reveal">
          <img src="artifacts/loe-portrait-color.jpg" alt="Portrait of Loe Lee" loading="eager" />
        </figure>
      </div>
    </div>
  </header>
);

const GrowthAreas = () => (
  <section className="section">
    <div className="wrap">
      <div className="kicker reveal" style={{ marginBottom: 'clamp(28px,4vw,48px)' }}><span className="bar"></span>Are you seeking growth in…</div>
      <div className="beliefs reveal">
        {GROWTH_AREAS.map((g, i) => {
          const palette = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-4)'];
          return (
            <div className="belief" key={i}>
              <div className="n" style={{ color: palette[i % palette.length] }}>{String(i + 1).padStart(2, '0')}</div>
              <div className="t" style={{ fontSize: 'clamp(18px,2vw,24px)' }}>{g}</div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const CoachTestimonials = () => (
  <section className="section" id="testimonials">
    <div className="wrap">
      <div className="split" style={{ alignItems: 'end', marginBottom: 'clamp(36px,5vw,60px)' }}>
        <div className="reveal">
          <div className="kicker" style={{ marginBottom: 24 }}><span className="bar"></span>What they're saying</div>
          <h2 className="h-xl">People I&#x27;ve grown.</h2>
        </div>
      </div>
      <div className="gal gal-2">
        {COACH_TESTIMONIALS.map((t, i) => {
          const palette = ['var(--accent-text)', 'var(--accent-2-text)', 'var(--accent-3-text)', 'var(--accent-4-text)'];
          const dotPalette = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-4)'];
          const color = palette[i % palette.length];
          const dotColor = dotPalette[i % dotPalette.length];
          return (
            <div className="quote reveal" key={i}>
              <div className="label" style={{ color, marginBottom: 12 }}>{t.theme}</div>
              <p className="body-q">“{t.quote}”</p>
              <div className="who">
                <span className="dot" style={{ background: dotColor }}></span>
                <span><span className="name">{t.who}</span><br /><span className="title">{t.title}</span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const WhatToExpect = () => (
  <section className="section">
    <div className="wrap">
      <div className="kicker reveal" style={{ marginBottom: 'clamp(28px,4vw,48px)' }}><span className="bar"></span>What to expect</div>
      <div className="findings">
        {[
          ['Initial consultation', 'A free 30-minute call to understand your goals, answer questions, and outline a potential path forward.'],
          ['1:1 sessions', 'Ongoing sessions scheduled around your calendar, at a cadence that works for you.'],
          ['Packages', 'Offered as 3- or 10-session packages — see below for what fits your situation.'],
          ['Direct follow-up', "Fill out the form below and I'll personally reply within a few days to set up your first paid session."],
        ].map(([t, b], i) => (
          <div className="finding" key={i} style={{ gridTemplateColumns: '220px 1fr' }}>
            <div className="ft">{t}</div>
            <div className="fb">{b}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Packages = () => {
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ID) {
      const subject = `Coaching request: ${data.get("name") || "new inquiry"}`;
      const body =
        `Name: ${data.get("name") || ""}\n` +
        `Email: ${data.get("email") || ""}\n` +
        `Package: ${data.get("package") || ""}\n\n` +
        `${data.get("message") || ""}`;
      window.location.href =
        `mailto:${COACH_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSent(true);
      return;
    }

    setBusy(true);
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) setSent(true);
      else setError("Something went wrong. Please email me directly at " + COACH_EMAIL + ".");
    } catch (err) {
      setError("Couldn’t send right now. Please email me directly at " + COACH_EMAIL + ".");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="section" id="packages">
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 'clamp(28px,3.5vw,44px)' }}>
          <div className="kicker" style={{ marginBottom: 24 }}><span className="bar"></span>Coaching packages</div>
          <h2 className="h-xl">Find the right fit.</h2>
        </div>

        <div className="coach-tiers">
          {COACH_TIERS.map((t) => (
            <div className={`coach-tier reveal ${t.featured ? 'featured' : ''}`} key={t.name}>
              {t.featured && <span className="coach-badge">Most popular</span>}
              <div className="coach-price">{t.price}</div>
              <h3 className="coach-name">{t.name}</h3>
              <p className="coach-tag">{t.tag}</p>
              <p className="coach-desc">{t.desc}</p>
              {t.calendly && (
                <a className="coach-book-btn" href={t.calendly} target="_blank" rel="noreferrer">
                  Book a time ↗
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="coach-form-wrap reveal">
          <div className="coach-form-intro">
            <h3 className="h-lg">Request a paid session.</h3>
            <p className="note" style={{ marginTop: 14, maxWidth: '26em' }}>For the $400 and $1,200 packages. Fill out the form and I’ll be in touch to find a time. For a free intro call, <a href="https://calendly.com/loenlee/30-minute-intro-w-loe" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>book directly on Calendly ↗</a>.</p>
          </div>
          {sent ? (
            <div className="coach-sent" role="status">
              <span className="coach-sent-dot"></span>
              <div>
                <strong>Thank you. Your request is in.</strong>
                <p className="note" style={{ marginTop: 6 }}>I’ll reply within a few days to set up your intro call.</p>
              </div>
            </div>
          ) : (
            <form className="coach-form" onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />
              <input type="hidden" name="_subject" value="New coaching request: loelee.com" />
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="cf-pkg">Which package interests you?</label>
                <select id="cf-pkg" name="package" defaultValue="3-session package">
                  {COACH_TIERS.filter((t) => !t.calendly).map((t) => <option key={t.name}>{t.name}</option>)}
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field field-full">
                <label htmlFor="cf-msg">What are you navigating right now?</label>
                <textarea id="cf-msg" name="message" rows="4" placeholder="A few sentences is plenty."></textarea>
              </div>
              <div className="field-full coach-form-actions">
                <button type="submit" className="coach-submit" disabled={busy}>{busy ? "Sending…" : "Request a session →"}</button>
                {error && <p className="coach-error" role="alert">{error}</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const BookCTA = () => (
  <section className="cta-dark">
    <div className="cta-inner reveal">
      <h2 className="cta-title">Book a free 30-minute consultation.</h2>
      <p className="cta-sub">Schedule a complimentary session to talk through what you're navigating and see if coaching is the right fit.</p>
      <a className="cta-btn" href="https://calendly.com/loenlee/30-minute-intro-w-loe" target="_blank" rel="noreferrer">
        Book a time ↗
      </a>
    </div>
  </section>
);

const CoachAbout = () => (
  <section className="section" id="about">
    <div className="wrap">
      <div className="reveal" style={{ maxWidth: '42em' }}>
        <div className="kicker" style={{ marginBottom: 24 }}><span className="bar"></span>About me</div>
        <h2 className="h-xl" style={{ marginBottom: 22 }}>From the inside.</h2>
        <p className="body" style={{ marginBottom: 16 }}>
          I'm a Senior Manager of Product Design, currently at Vanta, with prior leadership roles at Zillow, HubSpot, and Webflow. I've spent my career building and growing design teams — hiring, promoting, and advocating for the people on them.
        </p>
        <p className="body">
          That's the same work I do as a coach: helping you understand yourself, the systems you operate within, and how to navigate them while staying true to what you believe in. My clients are women and marginalized groups in tech — designers, managers, and leaders at every stage.
        </p>
      </div>
    </div>
  </section>
);

const CoachWritings = () => (
  <section className="section" id="writings">
    <div className="wrap">
      <div className="reveal" style={{ marginBottom: 'clamp(36px,5vw,60px)' }}>
        <div className="kicker" style={{ marginBottom: 24 }}><span className="bar"></span>Writings & talks</div>
        <h2 className="h-xl">How I think about growth.</h2>
      </div>
      <div className="writing-list">
        {COACH_ARTICLES.map((a, i) => (
          <a className="writing-item reveal" key={i} href={a.href} target="_blank" rel="noreferrer">
            <span className="w-no">{String(i + 1).padStart(2, '0')}</span>
            <span className="w-main">
              <span className="w-title">{a.title}</span>
              <span className="w-desc">{a.desc}</span>
            </span>
            <span className="w-src">{a.src}<span className="w-arrow"> ↗</span></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const CoachingPage = () => (
  <>
    <CoachHero />
    <div className="wrap"><hr className="rule" /></div>
    <GrowthAreas />
    <div className="wrap"><hr className="rule" /></div>
    <CoachTestimonials />
    <div className="wrap"><hr className="rule" /></div>
    <WhatToExpect />
    <Packages />
    <BookCTA />
    <div className="wrap"><hr className="rule" /></div>
    <CoachAbout />
    <div className="wrap"><hr className="rule" /></div>
    <CoachWritings />
  </>
);

window.CoachingPage = CoachingPage;
