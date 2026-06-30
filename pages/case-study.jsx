// Case study pages — artifact-forward, following the deck's internal structure.
// ?p=zillow | hubspot

// ---------- small helpers ----------
const gradeClass = (g) => (g[0] === 'A' ? 'grade a' : g[0] === 'B' ? 'grade b' : (g[0] === 'F' || g[0] === 'D') ? 'grade f' : 'grade');

const Tile = ({ src, cap, capBold, h = 280, cover = false, credit = null }) => (
  <div className={`tile ${cover ? 'cover' : ''}`}>
    <div className="frame" style={{ ['--tile-h']: h + 'px' }}>
      <img src={src} alt={capBold || cap || ''} loading="lazy" />
      {credit && (
        <div className="credit-tag">
          <div className="credit-faces">
            <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
            <img className="credit-face sm" src={ART + credit.face} alt={credit.name} />
          </div>
          <span>Loe &amp; {credit.name} <span className="credit-sub">({credit.role})</span></span>
        </div>
      )}
    </div>
    {(cap || capBold) && <div className="tcap">{capBold && <b>{capBold} </b>}{cap}</div>}
  </div>
);

const Findings = ({ rows, cols = '210px 1fr', numbered = false }) => (
  <div className="findings">
    {rows.map(([t, b], i) => (
      <div className={`finding${numbered ? ' is-numbered' : ''}`} key={i} style={{ '--fcols': numbered ? `28px ${cols}` : cols }}>
        {numbered && <div className="fn">{String(i + 1).padStart(2, '0')}</div>}
        <div className="ft">{t}</div>
        <div className="fb">{b}</div>
      </div>
    ))}
  </div>
);

const StatBand = ({ stats }) => (
  <div className="stats" style={{ ['--cols']: stats.length }}>
    {stats.map((s, i) => (
      <div className="s" key={i}><div className="num">{s.num}</div><div className="cap">{s.cap}</div></div>
    ))}
  </div>
);

const Report = ({ rows }) => (
  <div className="report">
    {rows.map((r, i) => (
      <div className="r" key={i}>
        <div>
          <div className="rt">{r.task}</div>
          {r.detail && <div className="rd">{r.detail}</div>}
        </div>
        <div className="grades">
          {r.to
            ? <><span className={gradeClass(r.from)}>{r.from}</span><span className="arrow">→</span><span className={gradeClass(r.to)}>{r.to}</span></>
            : <span className={gradeClass(r.grade)}>{r.grade}</span>}
        </div>
      </div>
    ))}
  </div>
);

const Steps = ({ items }) => (
  <div className="findings">
    {items.map((it, i) => (
      <div className="finding" key={i} style={{ gridTemplateColumns: '56px 1fr', alignItems: 'baseline' }}>
        <div className="ft" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-text)', fontSize: 14 }}>{String(i + 1).padStart(2, '0')}</div>
        <div className="fb" style={{ color: 'var(--ink)', fontSize: 17 }}>{it}</div>
      </div>
    ))}
  </div>
);

const Chapter = ({ n, id, label, lead, note, children }) => (
  <section className="chapter wrap" id={id}>
    <div className="chapter-head">
      <div className="kicker"><span className="bar"></span>{label}</div>
      <div className="chapter-cols">
        <div className="lead">
          <h2 className="h-lg">{lead}</h2>
        </div>
        <div className="notes">
          {Array.isArray(note) ? note.map((p, i) => <p className="note" key={i}>{p}</p>) : (note && <p className="note">{note}</p>)}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 'clamp(32px,5vw,60px)', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vw,52px)' }}>
      {children}
    </div>
  </section>
);

const Pull = ({ children }) => (
  <div className="wrap" style={{ paddingTop: 'clamp(48px,7vw,96px)', paddingBottom: 'clamp(8px,2vw,16px)' }}>
    <p className="pull reveal">{children}</p>
  </div>
);

const NextCase = ({ to, name, kicker }) => (
  <a href={`${to}.html`} className="wrap" style={{ display: 'block', borderTop: '1px solid var(--line)' }}>
    <div className="nextcase">
      <div>
        <div className="lbl">{kicker}</div>
        <div className="nm">{name} →</div>
      </div>
      <span className="read" style={{ alignSelf: 'end' }}>Next case</span>
    </div>
  </a>
);

const CaseHero = ({ c }) => (
  <header className="case-hero wrap">
    <a className="back" href="index.html#work">← All work</a>
    <div className="kicker reveal" style={{ marginBottom: 26 }}><span className="idx" style={{ color: 'inherit' }}>{c.caseNo}</span><span className="bar"></span>{c.company}{c.tagline ? ` · ${c.tagline}` : ''}</div>
    {c.comingSoon && <div className="soon-banner reveal"><span className="soon-dot"></span>Case study in progress - more coming soon</div>}
    <h1 className="h-xl reveal" style={{ maxWidth: '15em' }}>{c.title}</h1>
    <p className="lede reveal" style={{ marginTop: 'clamp(24px,3vw,38px)', maxWidth: '26em' }}>{c.dek}</p>
    <div className="hero-meta reveal" style={{ marginTop: 'clamp(34px,5vw,60px)' }}>
      {c.meta.map((m, i) => <div className="cell" key={i}><div className="k">{m[0]}</div><div className="v">{m[1]}</div></div>)}
    </div>
  </header>
);

// ============================================================
// ZILLOW
// ============================================================
const ZillowCase = () => {
  const c = {
    caseNo: 'Case 03', company: 'Zillow', tagline: '',
    title: "Re-architecting sign-in for a housing super-app.",
    dek: "Zillow's sign-in experience needed a major upgrade to become a Housing Super App. At the time, it quietly hurt customers.",
    meta: [['Role', 'Director of Design'], ['Team', '4 designers · 17 PMs · 50+ eng'], ['Scope', 'Onboarding · Product Communications · Authentication · Information Architecture']],
    toc: ['The challenge', 'Where we were', 'Best practices', 'A recommendation', 'Creating momentum'],
  };
  return (
    <div data-screen-label="case-zillow">
      <CaseHero c={c} />

      <div className="wrap"><hr className="rule" /></div>

      <Chapter n="01" id="ch1" label="The challenge"
        lead="Zillow's unconventional sign-in helped in the short term."
        note={["Minimal friction captured a high volume of leads. The same shortcuts made the Housing Super App impossible - blocking customization, slowing product development, and threatening Zillow's high security standards. While the team roadmapped small improvements, I ran an independent audit and crafted a holistic experience strategy to ensure we targeted the highest impact improvements."]}>
        <Findings numbered rows={[
          ["Not personalized", "Zillow couldn't connect behavior and data to an identity. Customers engaged and gave us information; we treated them like strangers."],
          ["Data wasn't protected", "The customer-data infrastructure couldn't protect what people shared."],
          ["Trust low, load high", "Customers were asked to sign in repeatedly, sometimes twice in one session."],
        ]} />
      </Chapter>

      <Chapter n="02" id="ch2" label="Where we were"
        lead="Evaluating the current experience."
        note={["I audited every place sign-in was required, how customers were asked, and what we asked for. The picture: a system that grew one feature at a time."]}>
        <StatBand stats={[
          { num: '21', cap: 'entry points where sign-in was required' },
          { num: '3', cap: 'distinct sign-in patterns' },
          { num: '5', cap: 'fields to sign-in, inconsistently used' },
          { num: '2×', cap: 'sometimes customers signed in twice (Shopping ≠ ZHL tokens)' },
        ]} />
        <div className="subsec">
          <div className="subhead">21 places to sign in</div>
          <div className="authmap">
            <div className="authmap-head">
              <span className="label">21 entry points</span>
              <span className="authmap-count">audited &amp; mapped</span>
            </div>
            <ol className="authmap-grid">
              {[
                "Global navigation",
                "Tour a rental",
                "Save a search",
                "Tour to buy",
                "Save a home",
                "Contact an agent to buy",
                "Claim a home",
                "Ask a question about a rental",
                "Get new listings in email (save search)",
                "MISO seller",
                "Hide a home",
                "ZHL PreQual",
                "Apply to rent",
                "Full Page Auth",
                "Write a review",
                "ZRM top nav (resources, price, post a listing)",
                "View owner dashboard, correct facts, edit photos",
                "PA sign in",
                "ZRM list your properties",
                "PA join",
                "ZRM advertising",
              ].map((item, i) => (
                <li className="authmap-row" key={item}>
                  <span className="authmap-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="authmap-t">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="subsec">
          <div className="subhead">Three sign in patterns</div>
          <Findings rows={[
            ["Hidden sign-in gate", "Customers acted on what they wanted and were blocked by a sign-in ask."],
            ["Hidden sign-in", "Customers completed a form and were signed in without knowing."],
            ["Visible sign-in", "Customers knew they had to sign in to get what they wanted."],
          ]} />
          <div className="tilerow c3" style={{ marginTop: 'clamp(20px,3vw,36px)' }}>
            <Tile src={ART + 'img-006.jpg'} h={300} capBold="Hidden sign-in gate" cap="Blocked on intent" />
            <Tile src={ART + 'img-021.jpg'} h={300} capBold="Hidden sign-in" cap="Signed in via a form" />
            <Tile src={ART + 'img-026.jpg'} h={300} capBold="Visible sign-in" cap="The honest version" />
          </div>
        </div>
      </Chapter>

      <Chapter n="03" id="ch3" label="Best practices"
        lead="How sign-in was crafted by companies we admired."
        note={["I studied browsing-first apps (Airbnb, Expedia) and transaction-first apps (Robinhood, Ally, CarMax). They behaved differently for a reason, and Zillow was both."]}>
        <div className="principles">
          {[
            { img: 'img-034.jpg', brand: 'Airbnb', t: 'Optional at the start', d: 'Let people in before forcing a decision.' },
            { img: 'img-035.jpg', brand: 'Airbnb', t: 'Consistent fields & UI', d: 'Same ask, same interface, every time.' },
            { img: 'img-039.jpg', brand: 'Airbnb', t: 'Streamline the next time', d: 'Use what you already know.' },
            { img: 'img-038.jpg', brand: 'Expedia', t: "Once you're in, you're in", d: 'One identity across the app.' },
            { img: 'img-041.jpg', brand: 'Expedia', t: 'Reflect customer intent', d: 'Match the moment and the risk.' },
            { img: 'img-042.jpg', brand: 'Robinhood', t: "Build trust when it's sensitive", d: 'More context as the stakes rise.' },
          ].map((p) => (
            <div className="principle" key={p.t}>
              <div className="principle-shot"><img src={ART + p.img} alt={`${p.brand}: ${p.t}`} loading="lazy" /></div>
              <div className="principle-body">
                <div className="principle-brand">{p.brand}</div>
                <h4 className="principle-t">{p.t}</h4>
                <p className="principle-d">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="subhead">Zillow vs. best practice: the report card</div>
          <Report rows={[
            { task: 'Optional at the start', detail: 'A sign-in at the start, but no way out.', grade: 'B' },
            { task: 'Consistent information & UI', detail: 'Different asks; sometimes signed people in unknowingly.', grade: 'F' },
            { task: 'Streamline future sign-ins', detail: 'Did leverage prior info to streamline form-fills.', grade: 'A' },
            { task: "Once you're in, you're in", detail: 'Multiple sign-ins across Shopping and ZHL.', grade: 'F' },
            { task: 'Reflect customer intent', detail: 'Context provided inconsistently.', grade: 'B' },
            { task: 'Build trust when sensitive', detail: 'No trust-building when Movers might be financing or buying.', grade: 'F' },
          ]} />
        </div>
      </Chapter>

      <Chapter n="04" id="ch4" label="A recommendation"
        lead="Acknowledge constraints and propose a path."
        note={["There was no single right answer until the business decided what it was optimizing for. So the recommendation was a sequence that de-risked the decision, not a finished screen."]}>
        <Findings numbered rows={[
          ["Business model tension", "Volume of unverified leads vs. quality of verified leads and secure transactions, and each added friction somewhere."],
          ["Organizational tension", "One team wanted SMS OTP. Another wanted Email OTP. Prioritizing one taxed the other."],
          ["Tech constraints", "Auth0 / multi-IDP migration forced modals that could add friction."],
          ["Missing insights", "Sign-in events hadn't been tracked consistently, or at all."],
        ]} />
        <div>
          <div className="subhead">Recommended next steps</div>
          <Steps items={[
            'Agree and align on Assurance Levels',
            'Agree on a holistic design recommendation',
            'Mitigate risk through experimentation',
            'Measure potential impact',
            'Agree on the winning sign-in strategy',
            'Agree on a roll-out plan',
          ]} />
        </div>
      </Chapter>

      <div className="wrap pull-interrupt" style={{ paddingTop: 'clamp(48px,7vw,96px)', paddingBottom: 'clamp(8px,2vw,16px)' }}>
        <div className="interrupt-row">
          <div>
            <div className="urgent-tag reveal"><span className="dot"></span>Code red · drop everything</div>
            <p className="pull reveal">In the meantime, execs suddenly uncovered an <em className="marker">urgent (and confidential) business need.</em></p>
          </div>
          <img className="interrupt-cat reveal" src={ART + 'cat-cutout.png'} alt="" aria-hidden="true" loading="lazy" />
        </div>
      </div>

      <Chapter n="05" id="ch5" label="Creating momentum"
        lead="Lead with strategy. Be the player-coach. Be the glue."
        note={["With no PM DRI, thin design resources, and sixteen engineering teams in play, the job was to manufacture alignment, and to keep craft high while doing it.", "I wrote a one page product document, met with my junior designer daily to ensure high craft, ran cross functional design workshops to align on a concept, and teed up customer research to lead through design and create clarity for the business."]}>
        <Findings numbered rows={[
          ["No PM DRI", "Lead with a design strategy."],
          ["Inadequate design resources", "Be a player-coach who designs alongside the team."],
          ["A 16-team cross-company effort", "Be the glue. Surface the gaps, including in engineering."],
        ]} />
        <div className="tilerow c3">
          <Tile src={ART + 'zillow-slack-disconnect-zoom-blur.png'} h={250} cover capBold="Surfacing disconnects" cap="Naming the gaps, in the open." />
          <Tile src={ART + 'img-119.jpg'} h={250} cover capBold="Cross-functional brainstorm" cap="Themes with PM, Content Design, Design, and Research" />
          <Tile src={ART + 'img-064.jpg'} h={250} cover capBold="Creating divergent concepts" cap="So research had something real to test." />
        </div>
        <div className="tilerow c3">
          <Tile src={ART + 'zillow-design-brief-problem-blur.png'} h={300} cover capBold="A one-page product doc" cap="Customer problem, business problem, personas, scenarios." />
          <Tile src={ART + 'zillow-design-brief-doc-blur2.png'} h={300} cover capBold="Teed up research & prototypes" cap="Solving for customers and actionable research outcomes." />
          <Tile src={ART + 'zillow-slack-share-zoom.png'} h={300} cover capBold="Sharing in the open" cap="Eng looped in, Figma open for comment." />
        </div>
      </Chapter>

      <Pull>Great work is never done. The story (probably) lives on to this day.</Pull>
      <NextCase to="vanta" name="Vanta" kicker="Case 01 · hands-on, in flight" />
    </div>
  );
};

// ============================================================
// HUBSPOT
// ============================================================
const MEERAH_TOOLS = [
  { name: 'Google Ads', file: 'google-ads' },
  { name: 'Facebook Ads', file: 'facebook-ads' },
  { name: 'Google Sheets', file: 'google-sheets' },
  { name: 'WordPress', file: 'wordpress' },
  { name: 'Shopify', file: 'shopify' },
  { name: 'Optimizely', file: 'optimizely' },
  { name: 'Semrush', file: 'semrush' },
  { name: 'Trello', file: 'trello' },
  { name: 'Google Analytics', file: 'google-analytics' },
  { name: 'Mailchimp', file: 'mailchimp' },
  { name: 'Unbounce', file: 'unbounce' },
  { name: 'Canva', file: 'canva' },
  { name: 'Zapier', file: 'zapier' },
];

const HubspotCase = () => {
  const c = {
    caseNo: 'Case 02', company: 'HubSpot', tagline: '',
    title: "Helping small business marketers grow on their own.",
    dek: "How I led a team to solve for customer, product, and organizational problems to help SMB marketers onboard to CMS Hub in one day, not three months.",
    meta: [['Role', 'Senior Manager of Design'], ['Team', '7 designers · 1 UXR · 3 leads'], ['Scope', 'CMS Hub editor · onboarding · blog · developer experience']],
    toc: ['Context', 'The user', 'The problems', 'Solutions', 'Impact'],
  };
  return (
    <div data-screen-label="case-hubspot">
      <CaseHero c={c} />

      <Chapter n="01" id="ch1" label="Setting context"
        lead="HubSpot helps companies grow better."
        note={["HubSpot is a suite of Hubs, each built for a different persona, each sold in Starter, Professional, and Enterprise tiers, except CMS Hub. This was our opportunity."]}>
        <div className="tilerow c2">
          <Tile src={ART + 'img-077.jpg'} h={300} cover capBold="Many Hubs" cap="One per persona: Marketing, Sales, Service, CMS, Ops." />
          <Tile src={ART + 'img-091.jpg'} h={300} cover capBold="The promise." cap="“The only CMS that's powerful and easy to use.” The bar the team had to actually clear." />
        </div>
      </Chapter>

      <Chapter n="02" id="ch2" label="The user"
        lead="Marketing Meerah."
        note={["A small-business marketer juggling content, sales tooling, and a website she'd love to update without a developer. Everything downstream stems from one goal."]}>
        <div className="meerah-story reveal">
          <div className="label" style={{ marginBottom: 18 }}>A day in Meerah's marketing life</div>
          <div className="comic-strip">
            <figure className="comic-panel">
              <div className="comic-frame">
                <span className="comic-no">1</span>
                <img src={ART + 'sketch-juggle.png'} alt="Meerah at her laptop, overwhelmed as data flies between a dozen spreadsheets" />
              </div>
              <div className="comic-cap">A dozen tools. A hundred tabs. One marketer.</div>
            </figure>
            <figure className="comic-panel">
              <div className="comic-frame">
                <span className="comic-no">2</span>
                <img src={ART + 'sketch-cantedit.png'} alt="Meerah panicking in front of a screen that reads CAN'T EDIT" />
              </div>
              <div className="comic-cap">Her own website? She literally can't edit it.</div>
            </figure>
            <figure className="comic-panel">
              <div className="comic-frame">
                <span className="comic-no">3</span>
                <img src={ART + 'sketch-developer.png'} alt="Meerah reluctantly handing cash to a developer to make a change" />
              </div>
              <div className="comic-cap">So every little change means paying a developer.</div>
            </figure>
          </div>
        </div>
        <div className="meerah-tools reveal">
          <div className="label" style={{ marginBottom: 18 }}>The stack she juggles to get it all done</div>
          <div className="tool-grid">
            {MEERAH_TOOLS.map((t) => (
              <div className={'tool' + (t.tint ? ' tool--tint' : '')} key={t.name} style={t.tint ? { background: t.tint } : undefined} title={t.name}>
                <img src={ART + 'tools/' + t.file + '.png'} alt={t.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="meerah-move reveal">
          <p className="pull" style={{ margin: 0 }}>Let's move Meerah to <em>HubSpot</em>.</p>
          <figure className="meerah-move-fig">
            <img src={ART + 'meerah-happy.png'} alt="A child's crayon drawing of Meerah, smiling" />
          </figure>
        </div>
      </Chapter>

      <Chapter n="03" id="ch3" label="The problems"
        lead="Customer problems"
        note={["Meerah needs a site she can build, publish, and grow on her own. The product wasn't built for her, and neither, yet, was the internal HubSpot team."]}>
        <div className="subsec reveal" style={{ marginTop: 0 }}>
          <Findings numbered rows={[
            ["3 months to onboard", "Sales → Support → a HubSpot consultant ($500 fee) → Support. Many hand-offs, real cost, lost time."],
            ["A blog built for developers", "Posts lived in HubL templates. Not Meerah's world."],
            ["A hard editor", "Marketers couldn't ship without a developer."],
          ]} />
        </div>
        <div className="subsec reveal">
          <h3 className="h-sub">3 months to onboard</h3>
          <p className="note" style={{ marginTop: 7, marginBottom: 26 }}>Meerah would have many points of contact and pay additional fees, taking precious time to find help.</p>
          <Shot src={ART + 'onboarding-journey.png'} kind="plate" alt="A 38-slide deck mapping HubSpot's CMS onboarding journey, annotated with every hand-off: a $500 consulting fee, Sales, HubSpot Consultant, and repeated Support touch-points." />
        </div>
        <div className="split" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <div className="reveal">
            <h3 className="h-sub">A blog built for developers</h3>
            <p className="note" style={{ marginTop: 7 }}>To change a post, Meerah needed to understand HubL, layouts, and partials. That's not a content tool. It's a codebase.</p>
          </div>
          <Shot src={ART + 'img-094.jpg'} kind="browser" url="design-manager · blog-index.html" />
        </div>
        <div className="subsec reveal" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <h3 className="h-sub">A hard editor</h3>
          <p className="note" style={{ marginTop: 14, marginBottom: 26 }}>All confirmed through research.</p>
          <div className="hard-editor">
            <Shot src={ART + 'hs-editor.png'} kind="browser" url="app.hubspot.com · page editor" alt="HubSpot's drag-and-drop page editor: a dense panel of modules and nested columns a marketer has to navigate to make a change." />
            <div>
              <div className="label" style={{ marginBottom: 14 }}>Task-by-task grades</div>
              <Report rows={[
                { task: 'Select a theme', grade: 'B' },
                { task: 'Change logo and navigation', grade: 'D+' },
                { task: 'Inline editing', grade: 'B+' },
                { task: 'Adding background image', grade: 'B+' },
                { task: 'Create a folder', grade: 'C' },
                { task: 'Create and add a form', grade: 'F' },
                { task: 'Set up a blog', grade: 'F' },
              ]} />
            </div>
          </div>
        </div>
        <div className="subsec reveal" style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
          <h2 className="h-lg" style={{ marginBottom: 'clamp(28px, 3vw, 40px)' }}>Org problems</h2>
          <Findings rows={[
            ["A concerned GM", "“How do I know the UX will be at the level I want? I want an A.”"],
            ["Low UX morale", "“I don't know if my designs were successful. I just do what my PM tells me.”"],
            ["Invisible career bar", "Designers felt they were executing, not deciding, which became an attrition risk."],
          ]} />
        </div>
        <div className="split narrow-img" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <div className="reveal">
            <h3 className="h-sub">A concerned GM</h3>
            <p className="note" style={{ marginTop: 16 }}>HubSpot couldn't agree on what “good” meant. I wrote a problem doc and partnered with the incredible Rosie Osire (UXR) to create Grading Research, a triangulated, A–F read on whether customers could actually get the value they paid for. It rolled out company-wide.</p>
            <div style={{ marginTop: 22 }}>
              <Report rows={[
                { task: 'Select a theme', grade: 'B' },
                { task: 'Change logo & navigation', grade: 'D+' },
                { task: 'Create & add a form', grade: 'F' },
                { task: 'Set up a blog', grade: 'F' },
              ]} />
            </div>
          </div>
          <div className="credit-wrap">
            <Shot src={ART + 'img-099.jpg'} kind="plate" />
            <div className="credit-tag">
              <div className="credit-faces">
                <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
                <img className="credit-face sm" src={ART + 'rosie-face.png'} alt="Rosie Osire" />
              </div>
              <span>Loe &amp; Rosie Osire <span className="credit-sub">(UXR partner)</span></span>
            </div>
          </div>
        </div>
        <div className="subsec reveal" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <h3 className="h-sub">Low UX morale</h3>
          <p className="note" style={{ marginTop: 14, marginBottom: 26 }}>Make one-pagers and design strategy artifacts standard to define and influence how we make product.</p>
          <div className="morale-artifacts">
            <figure className="onepager reveal">
            <div className="onepager-head">
              <span className="onepager-dot"></span>
              <span>One-pager · standard template</span>
            </div>
            <div className="onepager-body">
              <div className="op-row">
                <div className="op-label">User</div>
                <div className="op-bar"></div>
              </div>
              <div className="op-row">
                <div className="op-label">Problem</div>
                <div className="op-bar"></div>
              </div>
              <div className="op-row">
                <div className="op-label">Solution</div>
                <div className="op-bar"></div>
              </div>
              <div className="op-row">
                <div className="op-label">Impact</div>
                <div className="op-bar"></div>
              </div>
            </div>
          </figure>
            <div className="credit-wrap">
              <Shot src={ART + 'jessica-strategy.png'} kind="plate" alt="A design-strategy artifact: a 'Meet Jessica' persona slide paired with 'Jessica's goals': Promote, Nurture, Trace, and Measure ROI." />
              <div className="credit-tag">
                <div className="credit-faces">
                  <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
                  <img className="credit-face sm" src={ART + 'philipp-face.png'} alt="Philipp Walzer" />
                </div>
                <span>Loe &amp; Philipp Walzer <span className="credit-sub">(direct report)</span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="subsec reveal" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <h3 className="h-sub">Invisible career bar</h3>
          <p className="note" style={{ marginTop: 14, marginBottom: 26 }}>Have regular career discussions grounded in role expectations and a documented growth framework.</p>
          <div className="credit-wrap">
            <Shot src={ART + 'career-framework.png'} kind="plate" alt="A documented growth framework: an IC career-pathways matrix, an individual career roadmap, and an impact-over-time progression chart." />
            <div className="credit-tag">
              <div className="credit-faces">
                <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
                <img className="credit-face sm" src={ART + 'philipp-face.png'} alt="Philipp Walzer" />
              </div>
              <span>Loe &amp; Philipp Walzer <span className="credit-sub">(direct report)</span></span>
            </div>
          </div>
        </div>
      </Chapter>

      <Chapter n="04" id="ch4" label="Solutions"
        lead="Customer solutions"
        note={["Enable Meerah to build on her own, with a guided start, a marketer-friendly blog, and an editor she could actually use. Then I changed how the org works, so good decisions keep happening after I step back."]}>
        <div className="subsec reveal" style={{ marginTop: 0 }}>
          <Findings numbered rows={[
            ["Easy onboarding", "A theme marketplace, conversational setup, and tools to build solo, live in a day."],
            ["A blog set up for marketers - not developers", "Drag-and-drop modules replaced HubL. Research moved the grade from F to A−."],
            ["An easier editor", "Inline editing and content blocks let marketers ship changes without a developer."],
          ]} />
        </div>
        <div className="subsec reveal" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <h3 className="h-sub">Easy onboarding</h3>
          <p className="note" style={{ marginTop: 14, marginBottom: 'clamp(28px, 3.5vw, 44px)' }}>We first bet on a website importer, then killed it; we couldn't import unstructured data. The opposite bet won: enable Meerah to build on her own, and three moves turned a three-month, multi-hand-off setup into a guided first day. A curated marketplace of themes and templates gives her a designed starting point instead of a blank page; conversational onboarding asks a few plain-language questions and tailors the setup to her industry; and guided theme and style settings let her match her brand, with no developer and no ticket.</p>
          <div className="sol-steps">
            <div className="sol-step">
              <h4 className="sol-step-t">A helpful website theme marketplace</h4>
              <div className="credit-wrap">
                <Shot src={ART + 'sol-asset-marketplace.png'} kind="plate" alt="HubSpot's Asset Marketplace, browsing ready-made website themes." />
                <div className="credit-tag">
                  <div className="credit-faces">
                    <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
                    <img className="credit-face sm" src={ART + 'sean-face.png'} alt="Sean Landry" />
                  </div>
                  <span>Loe &amp; Sean Landry <span className="credit-sub">(direct report)</span></span>
                </div>
              </div>
            </div>
            <div className="sol-step">
              <h4 className="sol-step-t">Conversational onboarding</h4>
              <div className="credit-wrap">
                <Shot src={ART + 'sol-onboarding-industry.png'} kind="plate" alt="A conversational onboarding step asking 'What industry are you in?' beside trusted-customer logos." />
                <div className="credit-tag">
                  <div className="credit-faces">
                    <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
                    <img className="credit-face sm" src={ART + 'sean-face.png'} alt="Sean Landry" />
                  </div>
                  <span>Loe &amp; Sean Landry <span className="credit-sub">(direct report)</span></span>
                </div>
              </div>
            </div>
            <div className="sol-step">
              <h4 className="sol-step-t">Help Meerah build on her own</h4>
              <div className="credit-wrap">
                <Shot src={ART + 'sol-theme-style.png'} kind="plate" alt="A guided 'Customize your theme's style settings' step with color schemes and fonts." />
                <div className="credit-tag">
                  <div className="credit-faces">
                    <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
                    <img className="credit-face sm" src={ART + 'sean-face.png'} alt="Sean Landry" />
                  </div>
                  <span>Loe &amp; Sean Landry <span className="credit-sub">(direct report)</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subsec reveal split narrow-img" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <div>
            <h3 className="h-sub">A blog set up for marketers - not developers</h3>
            <p className="note" style={{ marginTop: 7 }}>Drag-and-drop blog modules and a live preview replaced HubL templates. Research moved the grade from F to A−.</p>
          </div>
          <div className="credit-wrap">
            <Shot src={ART + 'sol-blog-setup-v2.png'} kind="plate" alt="The re-built blog setup: a content editor and a marketer-friendly blog post list with live preview." />
            <div className="credit-tag">
              <div className="credit-faces">
                <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
                <img className="credit-face sm" src={ART + 'aburton-face.png'} alt="A Burton" />
              </div>
              <span>Loe &amp; A Burton <span className="credit-sub">(direct report)</span></span>
            </div>
          </div>
        </div>
        <div className="subsec reveal" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <h3 className="h-sub">An easier editor</h3>
          <p className="note" style={{ marginTop: 7, marginBottom: 32 }}>Inline editing and content blocks let marketers change copy, images, and CTAs directly on the page.</p>
          <div className="credit-wrap">
            <Shot src={ART + 'sol-editor.png'} kind="browser" url="app.hubspot.com/cms/editor" alt="The new drag-and-drop page editor with inline text editing." />
            <div className="credit-tag">
              <div className="credit-faces">
                <img className="credit-face lg" src={ART + 'loe-face.png'} alt="Loe" />
                <img className="credit-face sm" src={ART + 'christel-face.png'} alt="Christel Kemp" />
              </div>
              <span>Loe &amp; Christel Kemp <span className="credit-sub">(direct report)</span></span>
            </div>
          </div>
        </div>
        <div className="subsec reveal" style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
          <h2 className="h-lg" style={{ marginBottom: 'clamp(28px, 3vw, 40px)' }}>Org solutions</h2>
          <Findings rows={[
            ["Grading Research", "Triangulated insights that communicate experience readiness. PMs could finally prioritize, and it was adopted company-wide."],
            ["One-pagers as standard", "User · Problem · Hypothesis · Results · Conclusion. It changed how the org documents work."],
            ["Customer-Centric Team Missions", "Every initiative answers three questions: who, how, and what outcome."],
            ["Performance & hiring", "A clear promotion benchmark with HR, and full candidate slates with under-represented talent."],
            ["Highlighting great work", "Led critiques toward feedback and questioning; pulled in external super-powers when needed."],
          ]} />
        </div>
      </Chapter>

      <Chapter n="05" id="ch5" label="Impact"
        lead="Impact">
        <StatBand stats={[
          { num: '1 day', cap: 'to a live site, down from three months' },
          { num: '+38%', cap: 'activation for the CMS Hub offering' },
          { num: '8,000', cap: 'new CMS Starter portals, 3 months post-launch' },
        ]} />
        <StatBand stats={[
          { num: '10%', cap: 'of CMS Starter customers upgrading to Professional, YoY' },
          { num: '5', cap: 'well-deserved promotions on the design team' },
          { num: '1 of 25', cap: '2021 HubSpot Great Manager Award · 550 nominees' },
        ]} />
        <div>
          <div className="label" style={{ marginBottom: 16 }}>The editor, re-graded</div>
          <Report rows={[
            { task: 'Change logo & navigation', from: 'D+', to: 'A' },
            { task: 'Set up a blog', from: 'F', to: 'A' },
            { task: 'Create a folder', from: 'C', to: 'B' },
            { task: 'Select a theme', from: 'B', to: 'B' },
          ]} />
        </div>
        <div className="split narrow-img" style={{ marginBottom: 'clamp(44px, 6vw, 76px)' }}>
          <div className="reveal">
            <h3 className="h-md">Design Excellence</h3>
            <p className="note" style={{ marginTop: 16 }}>Five promotions, HubSpot's most diverse design team, and internal talent trying to transfer in. The team nominated me for the 2021 Great Manager Award, one of 25 chosen from 550 nominees.</p>
            <p className="note" style={{ marginTop: 16 }}>Teams are the work. Build them right and the product follows.</p>
          </div>
          <Shot src={ART + 'img-144.jpg'} kind="plate" />
        </div>
      </Chapter>

      <NextCase to="zillow" name="Zillow" kicker="Case 03 · in flight" />
    </div>
  );
};

const VantaCase = () => {
  const c = {
    caseNo: 'Case 01', company: 'Vanta', tagline: '', comingSoon: true,
    title: "Evolving and evaluating Vanta's AI Agent at warp speed.",
    dek: "Honing an approach, staffing a team, and championing a fast paced design, build, and evaluation process to enable Vanta to compete and scale.",
    meta: [['Role', 'Sr. Manager of Product Design'], ['Team', 'Design · design engineering'], ['Scope', 'GRC Agents · Personnel · Issue Management · Access Management']],
    toc: ['Coming soon'],
  };
  return (
    <div data-screen-label="case-vanta">
      <CaseHero c={c} />
      <div className="wrap reveal" style={{ marginTop: 'clamp(20px,3vw,40px)' }}>
        <div className="subhead" style={{ marginBottom: 0 }}>A teaser from the work</div>
        <p className="note" style={{ marginTop: 6, marginBottom: 'clamp(20px,3vw,34px)', maxWidth: '58ch' }}>
          The full case study is being written. In the meantime, here is a competitive UX review I authored to align engineering, product, and design on agentic workflow design patterns in one day. We like to move fast at Vanta. Page through it.
        </p>
        <GrcDeck />
      </div>
      <Pull>This one's still in flight. Check back soon.</Pull>
      <NextCase to="hubspot" name="HubSpot" kicker="Case 02 · launched" />
    </div>
  );
};

const CaseStudyPage = () => {
  const id = new URLSearchParams(window.location.search).get('p') || 'vanta';
  if (id === 'hubspot') return <HubspotCase />;
  if (id === 'zillow') return <ZillowCase />;
  return <VantaCase />;
};

Object.assign(window, { CaseStudyPage, VantaCase, HubspotCase, ZillowCase });
