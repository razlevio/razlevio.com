import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { sans, mono, serif } from "@/lib/fonts/fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Raz Levi",
  description: "Building software products that fit seamlessly into life 🚀",
  keywords: [
    "portfolio",
    "software engineer",
    "software development",
    "portfolio website",
    "software engineering",
    "software development tools",
    "software development journey",
    "software development portfolio",
  ],
  creator: "razlevio",
  authors: [{ name: "Raz Levi", url: "https://razlevio.com" }],
  icons: {
    icon: [{ url: "/avatar.jpeg" }],
    shortcut: "/avatar.jpeg",
    apple: "/avatar.jpeg",
  },
  openGraph: {
    title: "Raz Levi | Portfolio",
    description:
      "Portfolio showcasing my software engineering journey and favorite tools",
    url: "https://razlevio.com",
    siteName: "Raz Levi | Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Raz Levi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raz Levi",
    description: "Building software products that fit seamlessly into life 🚀",
    site: "@razlevio",
    creator: "@razlevio",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  manifest: "https://razlevio.com/app.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${serif.variable} ${mono.variable} ${sans.variable} font-mono`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
