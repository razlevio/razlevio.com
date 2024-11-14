import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const protest = localFont({
  src: "./protest-strike.ttf",
  weight: "400",
  variable: "--font-protest",
});

export const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const sans = GeistSans;
export const mono = GeistMono;
