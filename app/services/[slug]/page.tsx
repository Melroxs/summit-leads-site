import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const services = {
  "lead-generation": {
    title: "Lead generation & sales development",
    short: "Build a healthier pipeline.",
    heading: <>Turn the right attention<br /><em>into real conversations.</em></>,
    description: "A practical growth engine for businesses that need a clearer path from prospect research to qualified conversations. We help you identify the right audience, create a reason to engage and build consistent follow-up.",
    intro: "More leads only matter when they are the right leads. We focus on fit, relevance and a repeatable process that helps your team spend more time in worthwhile conversations.",
    items: [
      ["Prospect research", "Define your ideal customer and build focused prospect lists around the sectors, locations and decision-makers that matter."],
      ["Lead generation systems", "Create campaign and capture journeys that turn interest into identifiable enquiries."],
      ["Appointment setting", "Support the follow-up process that moves prospects from first contact to booked conversations."],
      ["Sales development", "Bring structure to outreach, qualification and pipeline handover so opportunities do not disappear between steps."]
    ],
    outcome: "A more focused pipeline, clearer outreach and a better-organised route from prospect to conversation."
  },
  "web-development": {
    title: "Websites, apps & custom software",
    short: "Build digital tools that work.",
    heading: <>Digital experiences<br /><em>built around your business.</em></>,
    description: "From a polished business website to a custom web application, CRM or customer portal, we build digital products around the way your business actually operates.",
    intro: "Your website and software should do more than look good. They should make it easier for customers to understand your offer and easier for your team to deliver it.",
    items: [
      ["Business websites", "Responsive, fast-loading websites with clear messaging, considered design and conversion-focused journeys."],
      ["Web applications", "Purpose-built platforms, dashboards and portals that organise information and simplify important workflows."],
      ["CRM & internal tools", "Custom systems for managing leads, customers, tasks, bookings and operational processes."],
      ["Mobile experiences", "Mobile-friendly product experiences designed for customers and teams working on the move."]
    ],
    outcome: "A stronger digital presence and technology that supports real operational needs instead of adding complexity."
  },
  "ai-automation": {
    title: "AI & business automation",
    short: "Make the work flow smarter.",
    heading: <>Give repetitive work<br /><em>a smarter way forward.</em></>,
    description: "Use practical AI and automation to connect tools, reduce manual admin and create more responsive customer experiences without adding unnecessary complexity.",
    intro: "Automation should solve a real problem, not become another system to manage. We start with the workflow, identify the friction and design a useful solution around it.",
    items: [
      ["AI agents & assistants", "Task-focused assistants that help teams find information, handle routine requests and move work forward."],
      ["Workflow automation", "Connect forms, inboxes, CRMs and business tools to reduce repetitive hand-offs and manual data entry."],
      ["Voice & customer engagement", "Explore voice-enabled workflows for enquiries, qualification, reminders and appointment coordination."],
      ["System integrations", "Connect the platforms your business already uses and create more consistent information flows."]
    ],
    outcome: "Less repetitive administration, better-connected systems and more time for work that needs a human touch."
  }
};

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: `${service.title} | Summit Leads`, description: service.description, url: `https://summitleadsltd.com/services/${slug}`, siteName: "Summit Leads", type: "website" }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) notFound();

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/"><img src="/summit-leads-cropped.png" alt="Summit Leads" /></Link>
        <nav className="nav"><Link href="/#services">What we do</Link><Link href="/#approach">Our approach</Link><Link href="/#about">About</Link><Link className="nav-cta" href="/#contact">Let’s talk <span>↗</span></Link></nav>
      </header>
      <section className="service-detail-hero">
        <div className="service-detail-inner">
          <div className="breadcrumb"><Link href="/">SUMMIT LEADS</Link> / SERVICES</div>
          <h1>{service.heading}</h1>
          <p>{service.description}</p>
          <div className="hero-actions"><Link className="button button-primary" href="/#contact">Discuss your project <span>↗</span></Link><Link className="text-link" href="/#services">Explore all services ↓</Link></div>
        </div>
      </section>
      <section className="service-detail-content">
        <div className="section-kicker">A PRACTICAL APPROACH</div>
        <h2>{service.short}<br /><em>Designed around your goals.</em></h2>
        <p style={{maxWidth:760,lineHeight:1.8,color:"#5e6d6a",marginTop:24}}>{service.intro}</p>
        <div className="service-detail-grid">
          {service.items.map(([title, copy], index) => <article className="service-detail-item" key={title}><span>CAPABILITY / 0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      <section className="service-detail-cta">
        <div><div className="section-kicker light">THE OUTCOME</div><h2>Make progress<br /><em>with purpose.</em></h2><p>{service.outcome}</p></div>
        <Link className="button button-primary" href="/#contact">Start a conversation <span>↗</span></Link>
      </section>
      <footer className="footer"><div className="footer-bottom"><span>© {new Date().getFullYear()} SUMMIT LEADS LTD</span><Link href="/">SUMMIT LEADS HOME ↗</Link><a href="mailto:hello@summitleadsltd.com">HELLO@SUMMITLEADSLTD.COM</a></div></footer>
    </main>
  );
}
