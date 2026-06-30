// ============================================================
// GRC Agentic Workflow UX — Competitive Review
// A pageable teaser deck. Content + opinion from Loe Lee's
// April 2026 internal deck, re-set as an editorial mini-deck.
// Exposes window.GrcDeck (used in the Vanta case study).
// ============================================================

const GRC_SECTION = { rec: 'Recommendations', look: 'Look outs', context: 'Context', overview: 'Overview' };

const GRC_SLIDES = [
  { type: 'cover' },
  { type: 'overview' },
  { type: 'context' },
  { type: 'divider', sec: 'rec', kicker: 'Section 02', title: 'Recommendations', sub: 'UX principles for agentic workflows' },
  { type: 'principle', sec: 'rec', n: 1, total: 11, title: 'Let me build however I want', img: 'artifacts/grc-slack-build.png',
    body: "Natural language, voice, nodes and arrows. It doesn't matter. Don't make people choose how they build.",
    ex: { who: 'Slack', text: "Lets you create a workflow in natural language, then compiles it into a deterministic model." } },
  { type: 'principle', sec: 'rec', n: 2, total: 11, title: 'Help me review and edit easily', img: 'artifacts/grc-tines.png',
    body: "With thousands of workflows, how do customers find what they need? Once they do, how do they review and edit confidently?",
    ex: { who: 'Tines + ChatGPT', text: "Tines uses a node-and-arrow model for complex flows; ChatGPT keeps it as text in a chat. Let's test both." } },
  { type: 'principle', sec: 'rec', n: 3, total: 11, title: 'Be my co-conspirator, wherever I am', img: 'artifacts/grc-square.png',
    body: "Deliver workflow value when customers need it, not only once they realize they need it.",
    ex: { who: 'Square', text: "Spotted opportunities from market trends and offered to generate a workflow in one click. It even surfaced a suggestion mid-task, while a customer was naming a new recipe." } },
  { type: 'principle', sec: 'rec', n: 4, total: 11, title: 'Let me know my workflow status', img: 'artifacts/grc-status.png',
    body: "Help customers track their workflows so none get lost in the ether.",
    ex: { who: 'ChatGPT', text: "Has started doing this well. But when someone is juggling 20+ workflows in a day, the pattern won't scale." } },
  { type: 'principle', sec: 'rec', n: 5, total: 11, title: 'Offer me templates to start', img: 'artifacts/grc-templates.png',
    body: "A no-brainer. But we can have better brains: surface the most relevant templates from what we learn during Vanta onboarding, or from the team a user sits on via HRIS.",
    ex: null },
  { type: 'principle', sec: 'rec', n: 6, total: 11, title: 'Let me preview and test drive', img: 'artifacts/grc-notion.png',
    body: "Help me feel confident and clear about the impact of my workflow before it runs for real.",
    ex: { who: 'Notion', text: "Its Custom Agent lets you run an agent right there to test it out." } },
  { type: 'principle', sec: 'rec', n: 7, total: 11, title: 'When a workflow is stuck, be up front and help me fix it', img: 'artifacts/grc-dust.png',
    body: "Ever gone back and forth a hundred times because a workflow needs endless approvals or just can't figure things out? Let's tell folks when something is stuck, help them manage their time, and help them fix it.",
    ex: { who: 'Dust + Gemini', text: "Dust accumulates a pile of orange because nothing gets done. Gemini is annoyingly incompetent but it knows this and offers alternatives." } },
  { type: 'principle', sec: 'rec', n: 8, total: 11, title: 'Front-load approvals when possible', img: 'artifacts/grc-approvals.png',
    body: "Let people aggregate the upcoming approvals so they're not constantly bouncing between their real work and babysitting a workflow.",
    ex: { who: 'Dust', text: "A separate approval prompt for every action. Multiply that across a workflow and you're stuck babysitting it." } },
  { type: 'principle', sec: 'rec', n: 9, total: 11, title: 'Be opinionated, clear, and kind when I do something risky', img: 'artifacts/grc-claude.png',
    body: "If a customer uploads something they shouldn't or exposes data carelessly, help them make a better decision and lower the risk.",
    ex: { who: 'Claude Cowork', text: "While I configured the Obsidian MCP, it caught the risk. Instead of \u201cHey dummy, you just exposed sensitive data,\u201d it taught me, nicely, and helped me fix it." } },
  { type: 'principle', sec: 'rec', n: 10, total: 11, title: 'Help me borrow and share so I can scale', img: 'artifacts/grc-sharing.png',
    body: "Like Neo downloading kung fu in The Matrix, let users instantly pull GRC know-how from colleagues they trust. There's a marketplace and partner play here too.",
    ex: null },
  { type: 'principle', sec: 'rec', n: 11, total: 11, title: 'Help me learn, or get out of my way',
    body: "Customers with less depth lean on AI too much, which leads to bad outcomes. Customers with more depth find AI slows them down, so they use it less. Hold agents accountable to teach down-market customers at the right moments, so they grow and avoid mistakes.",
    ex: { who: 'Cam Luck', text: "Insight drawn from 11 years working in AI." } },
  { type: 'quote',
    text: "As these LLM-based applications hit real-world traffic, a troubling pattern emerged: our observability practices weren't keeping pace. Teams found themselves flying blind, unable to explain why costs spiked, struggling to reproduce bugs in non-deterministic systems, and unsure whether their models were performing well or slowly degrading.",
    source: 'Observability for AI Workloads', sourceUrl: 'https://horovits.medium.com/observability-for-ai-workloads-a-new-paradigm-for-a-new-era-b8972ba1b6ba' },
  { type: 'divider', sec: 'look', kicker: 'Section 03', title: 'Look outs', sub: "Where today's tools quietly get in the way." },
  { type: 'lookout', sec: 'look', n: 1, total: 2, title: 'Data models  \u203a  mental models',
    img: 'artifacts/grc-guru.png',
    body: "Give customers what they need from their natural language and engagement signals, not from the shape of our data model.",
    exs: [
      { who: 'Guru', text: "Makes me choose up front whether I'm searching or chatting. What if I'm not sure? What if my search needs help?" },
      { who: 'Tines', text: "Two separate full-page experiences that do the same thing, and you can't get to one from the other." },
      { who: 'Claude Cowork', text: "I described a workflow in chat, then had to rewrite it from scratch in a separate section. Why?" },
    ] },
  { type: 'lookout', sec: 'look', n: 2, total: 2, title: 'An antisocial agent', img: 'artifacts/grc-slack-agent.png',
    body: "I should always be able to find my agent and get help or take action quickly, in whatever way I choose.",
    exs: [
      { who: 'Slack', text: "Its workflows sent me down a winding path just to find the entry point, then forced another decision I hadn't planned to make." },
    ] },
  { type: 'closer' },
];

const GrcTopbar = ({ label, i, total }) => (
  <div className="grc-topbar">
    <span>{label}</span>
    <span>{String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
  </div>
);

function grcRender(s, i, total) {
  const sectionLabel = s.sec ? GRC_SECTION[s.sec] : (s.type === 'quote' ? 'Recommendations' : s.type === 'closer' ? 'Look outs' : '');

  if (s.type === 'cover') {
    return (
      <div className="grc-content grc-cover">
        <div className="grc-cover-kicker">Competitive UX Review</div>
        <h2 className="grc-cover-title">GRC Agentic<br />Workflow UX</h2>
        <div className="grc-cover-rule"></div>
        <div className="grc-cover-by">By Loe Lee · April 2026</div>
        <p className="grc-cover-note">Created to drive alignment across EPD on agentic workflow design patterns. It's evolving, and it loves your comments and feedback.</p>
      </div>
    );
  }

  if (s.type === 'overview') {
    const items = [
      ['01', 'Context', 'A quick, honest competitive UX audit'],
      ['02', 'Recommendations', 'Eleven ways to win'],
      ['03', 'Look outs', "Where today's tools get in the way"],
    ];
    return (
      <React.Fragment>
        <GrcTopbar label="Overview" i={i} total={total} />
        <div className="grc-content no-ex">
          <h3 className="grc-title grc-title-sm">What's inside</h3>
          <ol className="grc-toc">
            {items.map(([num, name, desc]) => (
              <li key={num}>
                <span className="tnum">{num}</span>
                <span><span className="tname">{name}</span><span className="tdesc">{desc}</span></span>
              </li>
            ))}
          </ol>
        </div>
      </React.Fragment>
    );
  }

  if (s.type === 'context') {
    const pts = ['11 agentic workflow competitors', 'Varying levels of threat', 'A few less-relevant companies, purely for inspiration', 'Backed by a gloriously messy FigJam'];
    return (
      <React.Fragment>
        <GrcTopbar label="Context" i={i} total={total} />
        <div className="grc-content no-ex">
          <div className="grc-cat">The audit</div>
          <h3 className="grc-title">A quick and dirty competitive UX audit</h3>
          <ul className="grc-arrows">
            {pts.map((p, k) => <li key={k}>{p}</li>)}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  if (s.type === 'divider') {
    return (
      <React.Fragment>
        <GrcTopbar label={sectionLabel} i={i} total={total} />
        <div className="grc-content grc-divider">
          <div className="grc-div-kicker">{s.kicker}</div>
          <h2 className="grc-div-title">{s.title}</h2>
          <p className="grc-div-sub">{s.sub}</p>
        </div>
      </React.Fragment>
    );
  }

  if (s.type === 'quote') {
    return (
      <React.Fragment>
        <GrcTopbar label={sectionLabel} i={i} total={total} />
        <div className="grc-content grc-quotewrap">
          <div className="grc-quote-mark">&ldquo;</div>
          <blockquote className="grc-quote">{s.text}</blockquote>
          <div className="grc-quote-source">{s.sourceUrl ? <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="grc-quote-link">{s.source} <span aria-hidden="true">&#8599;</span></a> : s.source}</div>
        </div>
      </React.Fragment>
    );
  }

  if (s.type === 'closer') {
    return (
      <React.Fragment>
        <GrcTopbar label={sectionLabel} i={i} total={total} />
        <div className="grc-content grc-closer grc-split">
          <div className="grc-col-text">
            <div className="grc-cat">Your turn</div>
            <h3 className="grc-title">Add your GRC agentic workflow UX rage here.</h3>
            <p className="grc-body">This deck is evolving. It loves your comments and feedback.</p>
          </div>
          <figure className="grc-shot grc-shot-photo"><img src="artifacts/grc-elmo.png" alt="Pure GRC workflow rage" loading="lazy" /></figure>
        </div>
      </React.Fragment>
    );
  }

  if (s.type === 'principle') {
    const exBlock = s.ex && (
      <div className="grc-ex">
        <div className="grc-ex-label">Example · <span className="grc-ex-who">{s.ex.who}</span></div>
        <p className="grc-ex-text">{s.ex.text}</p>
      </div>
    );
    if (s.img) {
      return (
        <React.Fragment>
          <GrcTopbar label={sectionLabel} i={i} total={total} />
          <div className="grc-content grc-split">
            <div className="grc-col-text">
              <div className="grc-cat">{String(s.n).padStart(2, '0')} / {s.total}</div>
              <h3 className="grc-title">{s.title}</h3>
              <p className="grc-body">{s.body}</p>
              {exBlock}
            </div>
            <figure className="grc-shot"><img src={s.img} alt={s.ex ? s.ex.who + ' UI example' : 'UI example'} loading="lazy" /></figure>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <GrcTopbar label={sectionLabel} i={i} total={total} />
        <div className="grc-ghost" aria-hidden="true">{String(s.n).padStart(2, '0')}</div>
        <div className={`grc-content ${s.ex ? 'has-ex' : 'no-ex'}`}>
          <div className="grc-main">
            <div className="grc-cat">{String(s.n).padStart(2, '0')} / {s.total}</div>
            <h3 className="grc-title">{s.title}</h3>
            <p className="grc-body">{s.body}</p>
          </div>
          {exBlock}
        </div>
      </React.Fragment>
    );
  }

  if (s.type === 'lookout') {
    const exList = (
      <div className="grc-ex grc-ex-list">
        {s.exs.map((e, k) => (
          <div className="grc-ex-row" key={k}>
            <span className="who">{e.who}</span>
            <span className="what">{e.text}</span>
          </div>
        ))}
      </div>
    );
    if (s.img) {
      return (
        <React.Fragment>
          <GrcTopbar label={sectionLabel} i={i} total={total} />
          <div className="grc-content grc-split grc-split-look">
            <div className="grc-col-text">
              <div className="grc-cat">{String(s.n).padStart(2, '0')} / {s.total}</div>
              <h3 className="grc-title">{s.title}</h3>
              <p className="grc-body">{s.body}</p>
              {exList}
            </div>
            <figure className="grc-shot"><img src={s.img} alt="UI example" loading="lazy" /></figure>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <GrcTopbar label={sectionLabel} i={i} total={total} />
        <div className="grc-ghost" aria-hidden="true">{String(s.n).padStart(2, '0')}</div>
        <div className="grc-content has-ex">
          <div className="grc-main">
            <div className="grc-cat">{String(s.n).padStart(2, '0')} / {s.total}</div>
            <h3 className="grc-title">{s.title}</h3>
            <p className="grc-body">{s.body}</p>
          </div>
          {exList}
        </div>
      </React.Fragment>
    );
  }

  return null;
}

const GRC_KEY = 'grcDeckSlide';

const GrcDeck = () => {
  const total = GRC_SLIDES.length;
  const [i, setI] = React.useState(() => {
    const v = parseInt(localStorage.getItem(GRC_KEY), 10);
    return Number.isFinite(v) && v >= 0 && v < total ? v : 0;
  });
  const [dir, setDir] = React.useState('next');
  const touchX = React.useRef(null);

  const step = React.useCallback((delta) => {
    setI((prev) => {
      const t = Math.max(0, Math.min(total - 1, prev + delta));
      if (t !== prev) setDir(delta > 0 ? 'next' : 'prev');
      return t;
    });
  }, [total]);

  const jump = React.useCallback((target) => {
    setI((prev) => {
      const t = Math.max(0, Math.min(total - 1, target));
      if (t !== prev) setDir(t > prev ? 'next' : 'prev');
      return t;
    });
  }, [total]);

  React.useEffect(() => { try { localStorage.setItem(GRC_KEY, String(i)); } catch (e) {} }, [i]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); step(1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); step(-1); }
    else if (e.key === 'Home') { e.preventDefault(); jump(0); }
    else if (e.key === 'End') { e.preventDefault(); jump(total - 1); }
  };

  const s = GRC_SLIDES[i];
  const dark = s.type === 'cover' || s.type === 'divider' || s.type === 'quote' || s.type === 'closer';

  return (
    <figure className="figure grc-deck">
      <div
        className="grc-stage"
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="GRC Agentic Workflow UX Competitive Review"
        onKeyDown={onKey}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx < -44) step(1); else if (dx > 44) step(-1);
          touchX.current = null;
        }}
      >
        <div className={`grc-slide ${dark ? 'dark' : 'light'}`} key={i} data-dir={dir}>
          {grcRender(s, i, total)}
        </div>
        <div className="grc-progress"><span style={{ width: ((i + 1) / total) * 100 + '%' }}></span></div>
      </div>

      <div className="grc-controls">
        <button className="grc-btn" onClick={() => step(-1)} disabled={i === 0} aria-label="Previous slide">&#8592;</button>
        <button className="grc-btn" onClick={() => step(1)} disabled={i === total - 1} aria-label="Next slide">&#8594;</button>
        <div className="grc-count"><b>{String(i + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}</div>
        <div className="grc-cap-side">GRC Agentic Workflow UX · Competitive Review · 2026</div>
      </div>
    </figure>
  );
};

Object.assign(window, { GrcDeck });
