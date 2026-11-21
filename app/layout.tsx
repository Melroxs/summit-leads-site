import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://summitleadsltd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Summit Leads | Lead Generation, Web Development & AI Automation",
    template: "%s | Summit Leads"
  },
  description: "Summit Leads helps ambitious businesses generate qualified leads, book more conversations, build high-performing websites and custom software, and automate repetitive work with practical AI.",
  applicationName: "Summit Leads",
  keywords: [
    "lead generation",
    "appointment setting",
    "sales development",
    "website development",
    "web application development",
    "custom software",
    "CRM development",
    "AI automation",
    "AI agents",
    "business process automation"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Summit Leads | Lead Generation, Web Development & AI",
    description: "Find more customers. Build better digital experiences. Make work flow smarter.",
    url: siteUrl,
    siteName: "Summit Leads",
    type: "website",
    locale: "en_ZA"
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Leads | Digital Growth & Technology",
    description: "Lead generation, web development and practical AI automation for ambitious businesses."
  },
  robots: { index: true, follow: true }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": siteUrl + "/#organization",
      name: "Summit Leads Ltd",
      url: siteUrl,
      email: "hello@summitleadsltd.com",
      telephone: "+27739081412",
      description: "A digital growth and technology partner providing lead generation, appointment setting, web and app development, and AI-powered business automation.",
      knowsAbout: [
        "Lead generation",
        "Appointment setting",
        "Web development",
        "Custom software development",
        "AI automation"
      ]
    },
    {
      "@type": "WebSite",
      "@id": siteUrl + "/#website",
      url: siteUrl,
      name: "Summit Leads",
      publisher: { "@id": siteUrl + "/#organization" },
      inLanguage: "en"
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
