import type { Metadata } from "next";
import "./globals.css";
import "./editorial-v2.css";
import "./interaction-polish.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shahriarmhasian.com"),
  title: "Shahriar M. Hasian — Founder, Builder, Systems Architect",
  description: "The founder headquarters of Shahriar M. Hasian and the institutions, systems and ideas being built across AXIS and Catalyst Alpha Group Holdings.",
  openGraph: { title: "Shahriar M. Hasian", description: "Intelligence, discipline and systems built to compound.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a>{children}</body></html>;
}
