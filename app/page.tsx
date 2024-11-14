"use client";

import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";


export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 space-y-12">
      <Header />
      <About />
      <Portfolio />
      <Services />
    </main>
  );
}
