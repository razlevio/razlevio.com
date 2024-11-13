import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { Instrument_Serif } from 'next/font/google';

const sans = GeistSans
const mono = GeistMono
const serif = Instrument_Serif({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif'
});


export const metadata: Metadata = {
  title: 'Raz Levi | Portfolio',
  description: 'Portfolio showcasing my software engineering journey and favorite tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${serif.variable} ${mono.variable} ${sans.variable} font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}