import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";
import { mono, sans, serif } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.username,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.username,
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@razlevio", // Twitter username
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "any",
      },
      {
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/favicon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${serif.variable} ${mono.variable} ${sans.variable} overscroll-none font-mono`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Navbar />
          <main className="max-w-screen overflow-x-hidden px-2">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
