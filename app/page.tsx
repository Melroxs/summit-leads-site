"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    icon: "↗",
    title: "Lead generation & growth",
    description: "Turn attention into opportunities with targeted campaigns, conversion-focused landing pages and follow-up systems built to move prospects into conversations.",
    tags: ["Paid advertising", "Landing pages", "Lead capture", "Appointment setting"]
  },
  {
    number: "02",
    icon: "⌘",
    title: "Web & app development",
    description: "Give your business the digital tools it needs — from a high-performing website to a custom platform that makes complex work feel simple.",
    tags: ["Business websites", "Web applications", "Mobile apps", "CRM & portals"]
  },
  {
    number: "03",
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
  const [sent, setSent] = useState(false);

  function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("New Summit Leads enquiry");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business")}\nI'm interested in: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
    );
    window.location.href = `mailto:hello@summitleadsltd.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Summit Leads home">
          <img src="https://raw.githubusercontent.com/Melroxs/summit-leads-site/main/summit-leads-cropped.png" alt="Summit Leads" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Who we help</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> DIGITAL GROWTH. INTELLIGENT TECHNOLOGY.</div>
          <h1>Make your next<br /><span>move your best.</span></h1>
          <p className="hero-copy">We help ambitious businesses find more customers, build better digital experiences and make work flow smarter.</p>
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
              <a href="#contact" className="service-link" aria-label={`Enquire about ${service.title}`}>↗</a>
            </article>
          ))}
        </div>
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
        <div className="contact-top"><div className="section-kicker light">HAVE A GOOD ONE IN MIND?</div><h2>Let’s make<br /><em>it happen.</em></h2><p>Tell us where you want to go. We’ll help you figure out a smart way to get there.</p></div>
        <form className="contact-form" onSubmit={submitContact}>
          <label>Your name<input name="name" required placeholder="How should we address you?" /></label>
          <label>Work email<input name="email" type="email" required placeholder="you@company.com" /></label>
          <label>Business / company<input name="business" placeholder="Your business name" /></label>
          <label>What can we help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Lead generation & marketing</option><option>Website development</option><option>App & custom software development</option><option>AI & business automation</option><option>Something else</option></select></label>
          <label className="full-field">A little about your project<textarea name="message" rows={4} placeholder="What are you looking to achieve?" /></label>
          <div className="form-bottom"><button className="button button-primary" type="submit">Send your enquiry <span>↗</span></button><small>{sent ? "Your email app should open with your enquiry." : "Your details will be used only to respond to your enquiry."}</small></div>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-main"><a href="#top" className="footer-brand"><img src="https://raw.githubusercontent.com/Melroxs/summit-leads-site/main/summit-leads-cropped.png" alt="Summit Leads" /></a><p>Digital growth.<br />Intelligent technology.<br /><em>More ways forward.</em></p><a className="back-top" href="#top">BACK TO TOP ↑</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} SUMMIT LEADS LTD</span><span>GROW WITH INTENTION. BUILD WITH PURPOSE.</span><a href="https://summitleadsltd.com">SUMMITLEADSLTD.COM ↗</a></div>
      </footer>
    </main>
  );
}