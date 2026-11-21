"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    slug: "lead-generation",
    icon: "↗",
    title: "Lead generation & growth",
    description: "Turn attention into opportunities with targeted campaigns, conversion-focused landing pages and follow-up systems built to move prospects into conversations.",
    tags: ["Prospect research", "Lead capture", "Appointment setting", "Sales development"]
  },
  {
    number: "02",
    slug: "web-development",
    icon: "⌘",
    title: "Web & app development",
    description: "Give your business the digital tools it needs — from a high-performing website to a custom platform that makes complex work feel simple.",
    tags: ["Business websites", "Web applications", "Mobile apps", "CRM & portals"]
  },
  {
    number: "03",
    slug: "ai-automation",
    icon: "✳",
    title: "AI & business automation",
    description: "Connect the pieces of your operation, reduce repetitive work and create more responsive customer experiences with practical AI.",
    tags: ["AI agents", "Workflow automation", "Voice agents", "Integrations"]
  }
];

const process = [
  ["01", "Understand", "We learn how your business works, where it is getting stuck and what a meaningful result looks like."],
  ["02", "Design", "We shape a practical plan around your audience, workflow, goals and budget."],
  ["03", "Build & launch", "We bring the campaign or technology to life, test it properly and get it into the real world."],
  ["04", "Improve", "We use feedback and performance data to refine what is working and identify the next opportunity."]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSent("sending");
    setFormMessage("");
    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@summitleadsltd.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...data, _subject: "New Summit Leads website enquiry", _template: "table", _url: "https://summitleadsltd.com/" })
      });
      const result = await response.json();
      if (String(result.success) !== "true") {
        setSent("error");
        const detail = String(result.message || "The enquiry could not be submitted.");
        setFormMessage(detail.toLowerCase().includes("activation")
          ? "One-time setup is still required: please check hello@summitleadsltd.com for FormSubmit’s activation email and confirm the form. You can also contact us directly on WhatsApp."
          : detail + " Please try WhatsApp or email instead.");
        return;
      }
      setSent("success");
      setFormMessage("Thanks — your enquiry has been sent. We’ll be in touch soon.");
      form.reset();
    } catch {
      setSent("error");
      setFormMessage("We couldn’t connect to the enquiry service. Please contact us directly by WhatsApp or email.");
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Summit Leads home">
          <img src="https://raw.githubusercontent.com/Melroxs/summit-leads-site/main/summit-leads-cropped.png" alt="Summit Leads" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} type="button" aria-label="Toggle navigation" aria-controls="primary-navigation" aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <nav id="primary-navigation" className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Our work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> DIGITAL GROWTH. INTELLIGENT TECHNOLOGY.</div>
          <h1>Make your next<br /><span>move your best.</span></h1>
          <p className="hero-copy">We help ambitious businesses generate qualified leads, book more conversations, build better digital experiences and make work flow smarter.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Tell us what you’re building <span>↗</span></a>
            <a className="text-link" href="#services">Explore our services <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div className="proof-mark">S<span>+</span></div>
            <p><strong>One partner. More ways forward.</strong><br />Strategy, creative and technology — working together.</p>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract digital growth illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="visual-core"><div className="core-inner">S<span>+</span></div></div>
          <div className="float-card card-leads"><span className="card-icon">↗</span><div><small>GROWTH</small><strong>More opportunity</strong></div><i>↗</i></div>
          <div className="float-card card-build"><span className="card-icon">⌘</span><div><small>DEVELOPMENT</small><strong>Built for your business</strong></div></div>
          <div className="float-card card-ai"><span className="card-icon">✳</span><div><small>AUTOMATION</small><strong>Work smarter</strong></div></div>
          <div className="visual-caption">IDEAS INTO MOMENTUM <span>✳</span></div>
        </div>
        <div className="hero-bottom"><span>INDEPENDENT DIGITAL PARTNER</span><span>BUILT AROUND YOUR NEXT CHAPTER</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro section-pad">
        <div className="section-kicker">THE SUMMIT APPROACH <span>01 / 04</span></div>
        <div className="intro-grid">
          <h2>Growth shouldn’t<br />be <em>complicated.</em></h2>
          <div className="intro-text"><p>Too many businesses are juggling disconnected agencies, tools and systems. We bring the important pieces closer together.</p><p>From finding your next customer to building the platform that serves them, Summit Leads combines commercial thinking with hands-on digital execution.</p><a className="inline-link" href="#about">A little more about us <span>↗</span></a></div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-kicker">WHAT WE DO <span>02 / 04</span></div>
        <div className="section-heading"><h2>Three capabilities.<br /><em>One clear direction.</em></h2><p>Choose the support you need today. Bring us in for the next challenge when you’re ready.</p></div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number} / CAPABILITY</span><span className="service-icon">{service.icon}</span></div>
              <h3>{service.title}</h3><p>{service.description}</p>
              <div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a href={`/services/${service.slug}`} className="service-link" aria-label={`Explore ${service.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio section-pad" id="portfolio">
        <div className="section-kicker">SELECTED DIGITAL CONCEPTS <span>LIVE DEMOS / 11 EXPERIENCES</span></div>
        <div className="section-heading portfolio-heading">
          <h2>Ideas made<br /><em>real and explorable.</em></h2>
          <p>A collection of live website concepts and digital journeys created to demonstrate how thoughtful design, clear messaging and useful technology can work together.</p>
        </div>
        <div className="portfolio-feature">
          <div className="portfolio-feature-copy">
            <span className="portfolio-label">LEAD GENERATION / CUSTOMER JOURNEY</span>
            <h3>NPP Roofing & Restoration</h3>
            <p>A focused lead-generation portfolio for a U.S. roofing and restoration business, organised around three high-intent customer needs: preventative inspections, storm damage and restoration, and roof repairs or maintenance.</p>
            <div className="journey-flow" aria-label="Illustrative customer journey">
              <span><b>01</b> Discover</span><i>→</i><span><b>02</b> Choose a need</span><i>→</i><span><b>03</b> Request help</span><i>→</i><span><b>04</b> Qualify & follow up</span><i>→</i><span><b>05</b> Book an inspection</span>
            </div>
            <small>Illustrative journey: visitor intent → relevant service landing page → enquiry → qualification and follow-up → inspection booking.</small>
            <a className="button button-primary" href="https://summit-leads-website-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Explore NPP portfolio <span>↗</span></a>
          </div>
          <div className="portfolio-feature-art" aria-hidden="true">
            <div className="roof-line roof-line-one" /><div className="roof-line roof-line-two" />
            <div className="journey-node node-one">01 <b>INSPECT</b></div>
            <div className="journey-node node-two">02 <b>RESTORE</b></div>
            <div className="journey-node node-three">03 <b>REPAIR</b></div>
            <div className="journey-center">NPP<span>GROWTH</span></div>
            <div className="journey-orbit" />
          </div>
        </div>
        <div className="portfolio-grid">
          <article className="portfolio-card portfolio-card-lodge">
            <div className="portfolio-card-top"><span>HOSPITALITY / BOOKING EXPERIENCE</span><b>01</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">⌁</span><span className="visual-word">ESCAPE<br />THE EVERYDAY</span></div>
            <h3>Mountain Lodge</h3><p>A hospitality website concept designed to sell the stay, showcase the setting and guide visitors toward an enquiry.</p>
            <a href="https://mountain-lodge-demo-wprxt3am4-melroxs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-style">
            <div className="portfolio-card-top"><span>PERSONAL BRAND / E-COMMERCE JOURNEY</span><b>02</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">✳</span><span className="visual-word">STYLE<br />CURATED</span></div>
            <h3>Personal Stylist & Shopper</h3><p>A premium personal styling concept that presents services clearly and moves visitors toward a consultation.</p>
            <a href="https://personal-stylist-shopper-demo-orl1ra43m-melroxs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-build">
            <div className="portfolio-card-top"><span>CONSTRUCTION / SERVICE WEBSITE</span><b>03</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">⌂</span><span className="visual-word">BUILT<br />WITH PURPOSE</span></div>
            <h3>G&I Construction</h3><p>A construction business concept with service-led content and clear paths for prospective customers.</p>
            <a href="https://gi-construction-demo-r5eldwu8m-melroxs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-hair">
            <div className="portfolio-card-top"><span>BEAUTY / SALON EXPERIENCE</span><b>04</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">✦</span><span className="visual-word">YOUR<br />SIGNATURE LOOK</span></div>
            <h3>Hair Salon</h3><p>A salon website concept built around visual identity, service discovery and appointment enquiries.</p>
            <a href="https://hair-salon-demo-irz848ivx-melroxs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-manna">
            <div className="portfolio-card-top"><span>FOOD / LOCAL BUSINESS</span><b>05</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">❋</span><span className="visual-word">SWEET<br />MOMENTS</span></div>
            <h3>Manna & Quail</h3><p>A bakery and sweet-treats website concept shaped around its social presence, product imagery and local discovery.</p>
            <a href="https://manna-quail-brackenfell.vercel.app/" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-azure">
            <div className="portfolio-card-top"><span>HAIR / BRAND EXPERIENCE</span><b>06</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">✧</span><span className="visual-word">AZURE<br />HAIR PROFESSIONALS</span></div>
            <h3>Azure Hair Professionals</h3><p>A polished salon concept with service discovery and direct enquiry pathways.</p>
            <a href="https://summit-local-beauty-demos.vercel.app/azure" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-salt">
            <div className="portfolio-card-top"><span>BEAUTY / WELLNESS</span><b>07</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">◌</span><span className="visual-word">SALT<br />& STILLNESS</span></div>
            <h3>Salt</h3><p>A beauty and wellness brand concept focused on atmosphere, services and conversion-friendly navigation.</p>
            <a href="https://summit-local-beauty-demos.vercel.app/salt" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-illumine">
            <div className="portfolio-card-top"><span>BEAUTY / STUDIO</span><b>08</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">✺</span><span className="visual-word">ILLUMINE<br />YOUR MOMENT</span></div>
            <h3>Illumine</h3><p>A boutique beauty studio concept with an editorial visual direction and service-led journey.</p>
            <a href="https://summit-local-beauty-demos.vercel.app/illumine" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-timeless">
            <div className="portfolio-card-top"><span>BEAUTY / PERSONAL CARE</span><b>09</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">◇</span><span className="visual-word">TIMELESS<br />BY DESIGN</span></div>
            <h3>Timeless</h3><p>A refined beauty business concept designed to communicate services and encourage enquiries.</p>
            <a href="https://summit-local-beauty-demos.vercel.app/timeless" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-dmh">
            <div className="portfolio-card-top"><span>LOCAL BUSINESS / PROFESSIONAL SERVICES</span><b>10</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">▤</span><span className="visual-word">DMH<br />PROFESSIONAL</span></div>
            <h3>DMH</h3><p>A professional services website concept with structured information and direct enquiry actions.</p>
            <a href="https://summit-local-beauty-demos.vercel.app/dmh" target="_blank" rel="noopener noreferrer">Explore live demo <span>↗</span></a>
          </article>
          <article className="portfolio-card portfolio-card-hub">
            <div className="portfolio-card-top"><span>SHOWCASE / MULTI-CONCEPT HUB</span><b>11</b></div>
            <div className="portfolio-visual"><span className="visual-mountain">S+</span><span className="visual-word">EXPLORE<br />THE COLLECTION</span></div>
            <h3>Local business demo collection</h3><p>A central showcase for the Azure, Salt, Illumine, Timeless and DMH concept websites.</p>
            <a href="https://summit-local-beauty-demos.vercel.app/" target="_blank" rel="noopener noreferrer">Explore demo hub <span>↗</span></a>
          </article>
        </div>
        <p className="portfolio-note">These are concept demonstrations and portfolio builds, not claims of commissioned client results. Demo forms and booking actions may use demonstration flows rather than live business systems.</p>
      </section>

      <section className="feature-band" id="work">
        <div className="feature-copy">
          <div className="section-kicker light">BUILT FOR REAL-WORLD BUSINESS <span>03 / 04</span></div>
          <h2>Not just another<br /><em>pretty website.</em></h2>
          <p>We care about what happens after launch. The leads that arrive. The hours your team gets back. The process that finally makes sense. Technology should earn its place in your business.</p>
          <a className="button button-light" href="#contact">Let’s solve something <span>↗</span></a>
        </div>
        <div className="feature-art">
          <div className="stack-window window-back"><div className="window-bar"><i /><i /><i /></div><div className="window-lines"><b /><b /><b /><b /></div></div>
          <div className="stack-window window-front"><div className="window-bar"><i /><i /><i /><span>YOUR NEXT CHAPTER</span></div><div className="window-content"><div className="window-label">MOMENTUM / 001</div><div className="window-chart"><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="window-footer"><b>Make it happen.</b><i>↗</i></div></div></div>
          <div className="art-orb">S<span>+</span></div>
        </div>
      </section>

      <section className="process section-pad" id="approach">
        <div className="section-kicker">HOW WE WORK <span>04 / 04</span></div>
        <div className="section-heading"><h2>Clear thinking.<br /><em>Thoughtful execution.</em></h2><p>Good work starts with listening. Then we make a plan, get moving and keep making it better.</p></div>
        <div className="process-grid">{process.map(([n, title, copy]) => <article className="process-item" key={n}><span className="process-number">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-image-wrap">
          <img src="https://raw.githubusercontent.com/Melroxs/summit-leads-site/main/image_3mb.png" alt="Summit Leads founder" className="about-image" />
          <div className="image-note"><span>THE PERSON BEHIND THE WORK</span><strong>Curiosity meets execution.</strong></div>
        </div>
        <div className="about-copy"><div className="section-kicker">A PARTNER, NOT A HAND-OFF</div><h2>Built with a<br /><em>builder’s mindset.</em></h2><p>Summit Leads is led by a hands-on digital builder who understands both the business problem and the technology behind the solution.</p><p>That means practical conversations, direct collaboration and solutions shaped around how your business actually operates — not a one-size-fits-all package.</p><div className="about-signoff">SUMMIT LEADS <span>Digital growth & technology</span></div></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-top"><div className="section-kicker light">HAVE A GOOD ONE IN MIND?</div><h2>Let’s make<br /><em>it happen.</em></h2><p>Tell us where you want to go. We’ll help you shape a practical plan to generate opportunities, build the right technology or automate the work slowing you down.</p></div>
        <form className="contact-form" onSubmit={submitContact}>
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="form-honeypot" />
          <label>Your name<input name="name" required placeholder="How should we address you?" /></label>
          <label>Work email<input name="email" type="email" required placeholder="you@company.com" /></label>
          <label>Business / company<input name="business" placeholder="Your business name" /></label>
          <label>What can we help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Lead generation & marketing</option><option>Prospect research & appointment setting</option><option>Website development</option><option>App & custom software development</option><option>AI & business automation</option><option>Something else</option></select></label>
          <label className="full-field">A little about your project<textarea name="message" rows={4} placeholder="What are you looking to achieve?" /></label>
          <div className="form-bottom"><button className="button button-primary" type="submit" disabled={sent === "sending"}>{sent === "sending" ? "Sending…" : sent === "success" ? "Enquiry sent" : "Send your enquiry"} <span>↗</span></button><small aria-live="polite">{formMessage || "Your enquiry is sent to our inbox through a third-party form service. Please don’t include sensitive information."}</small></div>
          {sent === "error" && <div className="form-feedback form-error full-field" role="alert">{formMessage} <a href="https://wa.me/27739081412?text=Hi%20Summit%20Leads%2C%20I%20tried%20your%20website%20enquiry%20form." target="_blank" rel="noopener noreferrer">Message us on WhatsApp ↗</a> · <a href="mailto:hello@summitleadsltd.com">Email us ↗</a></div>}
          {sent === "success" && <div className="form-feedback form-success full-field" role="status">{formMessage}</div>}
        </form>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/27739081412?text=Hi%20Summit%20Leads!%20I%27m%20interested%20in%20your%20services.%20Could%20you%20tell%20me%20more%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Summit Leads on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3.2A12.7 12.7 0 0 0 5.1 22.35L3.3 28.8l6.6-1.73A12.7 12.7 0 1 0 16.04 3.2Zm0 23.1c-1.93 0-3.82-.52-5.47-1.5l-.4-.24-3.92 1.03 1.05-3.82-.26-.4a10.4 10.4 0 1 1 9 4.93Zm5.7-7.8c-.31-.16-1.85-.91-2.14-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.19.21-.37.24-.69.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.7-.98-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.76.75.32 1.33.52 1.79.66.75.24 1.44.21 1.98.13.6-.09 1.85-.76 2.11-1.49.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37Z"/></svg>
        <span>Chat with us</span>
      </a>

      <footer className="footer">
        <div className="footer-main"><a href="#top" className="footer-brand"><img src="https://raw.githubusercontent.com/Melroxs/summit-leads-site/main/summit-leads-cropped.png" alt="Summit Leads" /></a><p>Digital growth.<br />Intelligent technology.<br /><em>More ways forward.</em></p><a className="back-top" href="#top">BACK TO TOP ↑</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} SUMMIT LEADS LTD</span><span>GROW WITH INTENTION. BUILD WITH PURPOSE.</span><a href="https://summitleadsltd.com">SUMMITLEADSLTD.COM ↗</a></div>
      </footer>
    </main>
  );
}