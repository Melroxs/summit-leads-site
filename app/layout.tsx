import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://summitleadsltd.com"),
  title: {
    default: "Summit Leads | Growth Marketing, Software & AI Automation",
    template: "%s | Summit Leads"
  },
  description: "Summit Leads helps ambitious businesses generate qualified leads, build digital products and automate the work that moves them forward.",
  openGraph: {
    title: "Summit Leads | Digital Growth & Technology",
    description: "Generate demand. Build better systems. Move your business forward.",
    url: "https://summitleadsltd.com",
    siteName: "Summit Leads",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}