import { Header } from "@/components/sections/header";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";

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
