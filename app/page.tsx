const institutions = [
  ["AXIS", "Executive intelligence and a private cognitive operating environment for consequential decisions."],
  ["CE Technologies", "Technology infrastructure, product engineering and intelligent systems."],
  ["Catalyst Alpha Group", "Strategy, capital, governance and institutional growth."],
  ["Catalyst Empire FZCO", "Global markets, private-client strategy and disciplined stewardship."],
  ["Catalyst Monarch", "Brand, design and creative execution across the ecosystem."],
];

const principles = [
  ["01", "Clarity", "Remove noise. Establish context. Understand what matters."],
  ["02", "Discipline", "Build the process before pursuing the outcome."],
  ["03", "Intelligence", "Combine evidence, experience and judgment."],
  ["04", "Execution", "Turn insight into deliberate, accountable action."],
  ["05", "Legacy", "Build systems capable of outlasting the moment."],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">SHAHRIAR M. HASIAN</a>
        <nav aria-label="Primary navigation">
          <a href="#story">Founder</a><a href="#axis">AXIS</a><a href="#ecosystem">Ecosystem</a><a href="#journal">Journal</a>
        </nav>
        <a className="navCta" href="#contact">Private inquiry</a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="heroMedia" />
          <div className="heroShade" />
          <div className="heroCopy">
            <p className="issue">THE FOUNDER ISSUE · MMXXVI</p>
            <h1>Shahriar<br />M. Hasian</h1>
            <p className="dek"><span>Building intelligent operating systems</span><br />for capital, companies and consequential decisions.</p>
            <div className="heroActions"><a href="#story">Enter the story</a><a href="#axis">Discover AXIS</a></div>
          </div>
          <p className="vertical">INTELLIGENCE · DISCIPLINE · EXECUTION</p>
        </section>

        <section className="opening" id="story">
          <p className="sectionNo">01 / THE FOUNDER</p>
          <div className="openingGrid">
            <h2>Built through pressure.<br />Designed for the long game.</h2>
            <div className="bodyCopy">
              <p className="lead">The future does not belong to the loudest person in the room. It belongs to the person who can see clearly, decide deliberately and execute when conditions are uncertain.</p>
              <p>The work sits at the intersection of markets, psychology, technology and institutional design. Across every venture, the objective is the same: transform fragmented information into disciplined advantage without surrendering judgment, privacy or control.</p>
            </div>
          </div>
          <blockquote>“There are decades where nothing happens, and there are days where decades happen.”</blockquote>
        </section>

        <section className="portraitBand">
          <div className="portrait" />
          <div className="portraitText"><span>THE BUILDER</span><h2>Not a personality brand.<br />A body of work.</h2><p>Each company is designed as part of a larger system: intelligence, infrastructure, capital, creativity and execution working in alignment.</p></div>
        </section>

        <section className="axis" id="axis">
          <p className="sectionNo">02 / THE FLAGSHIP</p>
          <div className="axisTop"><div><span className="axisMark">A</span><h2>AXIS</h2></div><p>Cognitive OS™</p></div>
          <div className="axisStatement">A private intelligence environment designed to strengthen context, judgment and disciplined execution.</div>
          <div className="axisVisual">
            <div className="orb"><span>A</span></div>
            <div className="axisRail left"><b>CONTEXT</b><b>RESEARCH</b><b>RISK</b></div>
            <div className="axisRail right"><b>MEMORY</b><b>JUDGMENT</b><b>EXECUTION</b></div>
          </div>
          <div className="axisFooter"><span>Signal</span><span>Intelligence</span><span>Markets</span><span>Portfolio</span><span>Memory</span><span>Research</span></div>
        </section>

        <section className="principles">
          <p className="sectionNo">03 / THE OPERATING STANDARD</p>
          <h2>The principles behind every institution.</h2>
          <div className="principleList">{principles.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
        </section>

        <section className="ecosystem" id="ecosystem">
          <p className="sectionNo">04 / THE ECOSYSTEM</p>
          <div className="ecosystemIntro"><h2>One vision.<br />Multiple institutions.</h2><p>Catalyst Alpha Group Holdings is being shaped as the parent architecture for a portfolio of focused companies. Each has a distinct role. Together, they form a system.</p></div>
          <div className="institutionList">{institutions.map(([name,text],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p>{text}</p><a href="#contact">Explore</a></article>)}</div>
        </section>

        <section className="editorialQuote">
          <div className="quoteImage" />
          <div><span>THE LONG VIEW</span><h2>Master yourself.<br />Build your empire.<br />Leave your legacy.</h2><p>Ambition without structure burns out. Structure without vision becomes bureaucracy. The work is to build both.</p></div>
        </section>

        <section className="journal" id="journal">
          <p className="sectionNo">05 / FOUNDER&apos;S JOURNAL</p>
          <div className="journalHeader"><h2>Ideas worth returning to.</h2><a href="#contact">View the journal</a></div>
          <div className="stories">
            <article className="feature"><div className="storyImg one"/><span>STRATEGY</span><h3>The discipline of building before the world understands.</h3><p>Why private conviction, patient systems and quiet execution matter more than noise.</p></article>
            <article><div className="storyImg two"/><span>INTELLIGENCE</span><h3>What a cognitive operating system should actually do.</h3></article>
            <article><div className="storyImg three"/><span>CAPITAL</span><h3>Risk before return. Process before prediction.</h3></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div><p className="sectionNo">06 / PRIVATE INQUIRY</p><h2>Serious conversations.<br />Built with discretion.</h2><p>For institutional partnerships, private-client conversations, strategic collaborations and selected media inquiries.</p></div>
          <form action="mailto:support@cag-holdings.com" method="post" encType="text/plain">
            <label>Name<input name="name" required /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>Phone<input type="tel" name="phone" required /></label>
            <label>Area of interest<select name="interest"><option>AXIS</option><option>Private Clients</option><option>Technology Partnership</option><option>Media</option></select></label>
            <label>Message<textarea name="message" rows={5} required /></label>
            <button type="submit">Begin the conversation</button>
          </form>
        </section>
      </main>

      <footer><div className="brand">SHAHRIAR M. HASIAN</div><p>Founder headquarters for the Catalyst network.</p><div><a href="#axis">AXIS</a><a href="#ecosystem">Ecosystem</a><a href="#contact">Contact</a></div><small>© 2026. All rights reserved.</small></footer>
    </>
  );
}
