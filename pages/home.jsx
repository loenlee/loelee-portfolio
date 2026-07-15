// Home — the deck's spine, re-cut. Every section appears exactly once.

const ARTICLES = [
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


const Hero = () => (
  <header className="section hero" style={{ paddingTop: 'clamp(48px,9vw,120px)' }}>
    <div className="wrap">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="kicker reveal"><span className="bar"></span>Portfolio</div>
          <h1 className="display reveal" style={{ marginTop: 30 }}>
            I grow diverse<br />winning <span className="accent">teams.</span>
          </h1>
          <p className="lede reveal" style={{ marginTop: 'clamp(14px,2vw,24px)', maxWidth: '24em' }}>
            I build autonomous teams and ship AI powered experiences customers and businesses love. I also coach on the side.
          </p>
        </div>
        <figure className="hero-portrait reveal">
          <img src={ART + 'loe-portrait-bw-clean.jpg'} alt="Portrait of Loe Lee" loading="eager" />
        </figure>
      </div>
      <div className="hero-meta reveal">
        <div className="cell"><div className="k">Now</div><div className="v">Sr. Manager of Design at Vanta</div></div>
        <div className="cell"><div className="k">Before</div><div className="v">Zillow · HubSpot · Webflow</div></div>
        <div className="cell"><div className="k">This site</div><div className="v">My work and my values</div></div>
      </div>
    </div>
  </header>
);

const Approach = () => (
  <section className="section">
    <div className="wrap">
      <div className="kicker reveal" style={{ marginBottom: 'clamp(28px,4vw,48px)' }}><span className="idx">02</span><span className="bar"></span>The lens</div>
      <div className="split">
        <p className="pull reveal">
          I'll show you what <em>I</em> did,<br />not what <em>“we”</em> did.
        </p>
        <div className="reveal">
          <p className="body" style={{ marginBottom: 22 }}>
            Two case studies, deliberately different. One hands-on and in flight; one hands-off and launched. Read them for three things:
          </p>
          <div className="findings" style={{ borderTop: 'none' }}>
            {[
              ['Ownership', 'What I personally drove: strategy, coaching, and the glue between teams.'],
              ['Craft', 'How the work actually looked, screen by screen.'],
              ['Collaboration', 'How design, product, and engineering moved together.'],
            ].map(([t, b], i) => (
              <div className="finding" key={i} style={{ gridTemplateColumns: '170px 1fr' }}>
                <div className="ft">{t}</div>
                <div className="fb">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Work = () => (
  <section className="section" id="work">
    <div className="wrap">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(72px,11vw,150px)' }}>
        {PROJECTS.map((p, i) => {
          const meta = (
            <div className="case-meta">
              <div className="label" style={{ color: 'var(--ink-3)' }}>Case 0{i + 1} · {p.company} · {p.role}</div>
              <h3 className="h-lg">{p.title}</h3>
              <p className="body">{p.blurb}</p>
              <div className="case-mode">
                {p.comingSoon && <span className="chip chip-soon">Coming soon</span>}
                {p.mode.map((m) => (
                  <span
                    className="chip"
                    key={m}
                    style={{
                      background: `color-mix(in srgb, var(${p.accentVar}) 14%, var(--surface))`,
                      color: `var(${p.accentVar})`,
                      borderColor: `color-mix(in srgb, var(${p.accentVar}) 32%, transparent)`,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
              {p.stat && (
                <div className="case-stat">
                  <span className="num">{p.stat.num}</span>
                  <span className="cap">{p.stat.cap}</span>
                </div>
              )}
              <span className="read">{p.comingSoon ? 'Preview case study →' : 'Read the case →'}</span>
            </div>
          );
          if (p.video) {
            return (
              <div className="case-link reveal" key={p.id} data-screen-label={`home-case-${p.id}`}>
                <div className={`case-row ${i % 2 === 1 ? 'flip' : ''}`}>
                  <a className="case-meta-link" href={`${p.id}.html`}>{meta}</a>
                  <a className="video-frame" href={p.video} target="_blank" rel="noreferrer" aria-label={`Watch the ${p.company} video on YouTube`}>
                    <div className="browser">
                      <div className="bar"><i></i><i></i><i></i><span className="url">youtube.com/watch?v={p.videoId}</span></div>
                      <div className="video-thumb">
                        <img src={`https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`} alt={`${p.company} video thumbnail`} loading="lazy" onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg`; }} />
                        <span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5v14l11-7z" fill="currentColor"></path></svg></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          }
          return (
            <a className="case-link reveal" href={`${p.id}.html`} key={p.id} data-screen-label={`home-case-${p.id}`}>
              <div className={`case-row ${i % 2 === 1 ? 'flip' : ''}`}>
                {meta}
                <div style={p.hero.kind === 'phone' ? { display: 'flex', justifyContent: 'center' } : {}}>
                  {p.hero.kind === 'phone'
                    ? <Shot src={p.hero.src} kind="phone" style={{ maxWidth: 300 }} alt={`${p.company} screen`} />
                    : <Shot src={p.hero.src} kind={p.hero.kind} url={p.hero.url} alt={`${p.company} screen`} />}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

const WhyVanta = () => (
  <section className="section" id="vanta">
    <div className="wrap">
      <div className="split" style={{ alignItems: 'end', marginBottom: 'clamp(36px,5vw,60px)' }}>
        <div className="reveal">
          <h2 className="h-xl" style={{ whiteSpace: 'nowrap' }}>I believe in…</h2>
        </div>
      </div>
      <div className="beliefs reveal">
        {WHY_VANTA.map(b => (
          <div className="belief" key={b.n}>
            <div className="n">{b.n}</div>
            <div className="t">{b.t}</div>
            {b.desc && <p className="belief-desc">{b.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Words = () => (
  <section className="section" id="words">
    <div className="wrap">
      <div className="split" style={{ alignItems: 'end', marginBottom: 'clamp(36px,5vw,60px)' }}>
        <div className="reveal">
          <div className="kicker" style={{ marginBottom: 24 }}><span className="bar"></span>In their own words</div>
          <h2 className="h-xl">People I've grown.</h2>
        </div>
      </div>
      <div className="reveal" style={{ marginBottom: 'clamp(40px,6vw,72px)' }}>
        <Shot src={ART + 'img-075.jpg'} kind="bleed" alt="The teams Loe has led, on a video call"
          capBold="The people." cap="Designers, researchers, and managers Loe has grown. Many promoted, all still in touch." />
      </div>
      <div className="gal gal-3">
        {TESTIMONIALS.map((t, i) => (
          <div className="quote reveal" key={i}>
            <p className="body-q">“{t.quote}”</p>
            <div className="who">
              <span className="dot"></span>
              <span>
                <span className="name">{t.who}</span><br />
                <span className="title">{t.title}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ marginTop: 'clamp(64px,9vw,120px)', marginBottom: 'clamp(32px,4vw,48px)' }}>
        <div className="kicker" style={{ marginBottom: 24 }}><span className="bar"></span>Thought leadership</div>
        <h2 className="h-xl">How I manage.</h2>
      </div>
      <div className="writing-list">
        {ARTICLES.map((a, i) => (
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

// ── Coaching teaser (full packages/form now live on coaching.html) ────────

const Coaching = () => (
  <section className="section" id="coaching">
    <div className="wrap">
      <div className="split">
        <div className="reveal">
          <div className="kicker" style={{ marginBottom: 24 }}><span className="bar"></span>1:1 coaching</div>
          <h2 className="h-xl">Coaching.</h2>
        </div>
        <div className="reveal">
          <p className="lede" style={{ maxWidth: '34em', marginBottom: 28 }}>
            Tough boss? Looking to grow faster? I coach women and marginalized groups in tech to better understand themselves, the systems they operate within, and how to navigate them while staying true to themselves.
          </p>
          <a className="coach-book-btn" href="coaching.html">
            View coaching packages →
          </a>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <Hero />
    <div className="wrap"><hr className="rule" /></div>
    <Work />
    <div className="wrap"><hr className="rule" /></div>
    <WhyVanta />
    <Words />
    <div className="wrap"><hr className="rule" /></div>
    <Coaching />
  </>
);

window.HomePage = HomePage;
