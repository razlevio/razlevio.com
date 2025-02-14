import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { sans, mono, serif } from "@/lib/fonts/fonts";
import { Analytics } from "@vercel/analytics/react";
import { appConfig } from "@/config/app";

export const metadata: Metadata = {
  title: {
    default: appConfig.name,
    template: `${appConfig.name} | %s`,
  },
	metadataBase: new URL(appConfig.url),
  description: appConfig.description,
  keywords: [
    "portfolio",
    "software engineer",
    "software development",
    "portfolio website",
    "software engineering",
    "software development tools",
    "software development journey",
    "software development portfolio",
    "raz levi",
    "raz levio",
    "raz levi portfolio",
    "raz levi software engineer",
    "raz levi software development",
    "raz levi software development portfolio",
  ],
  creator: "razlevio",
  authors: [{ name: "Raz Levi", url: "https://razlevio.com" }],
  icons: {
    icon: [{ url: "/avatar.jpeg" }],
    shortcut: "/avatar.jpeg",
    apple: "/avatar.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appConfig.url,
    title: appConfig.name,
    siteName: appConfig.name,
    description: appConfig.description,
    images: [
      {
        url: appConfig.ogImage,
        width: 1200,
        height: 630,
        alt: appConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.name,
    description: appConfig.description,
    images: [appConfig.ogImage],
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
  manifest: "/app.webmanifest",
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
