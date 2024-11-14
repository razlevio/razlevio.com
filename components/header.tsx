import { FadeIn } from "@/components/animations/fade-in";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { about } from "@/data/about";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/switchers/theme-switcher";

export function Header() {
  return (
    <FadeIn>
      <section id="header" className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-serif font-extrabold tracking-normal">
            {about.name}
          </h1>
          <p className="leading-relaxed tracking-tight text-muted-foreground">
            {about.headline}
          </p>
          <div className="flex items-center gap-1 text-primary transition-colors group cursor-default">
            <MapPin
              size={14}
              className="group-hover:text-primary transition-colors"
            />
            <span className="text-xs">{about.location}</span>
          </div>
          <div className="flex gap-2">
            {about.socials.map((social) => (
              <Link key={social.url} href={social.url}>
                <Button
                  variant="outline"
                  size="iconSm"
                  className="hover:text-primary hover:border-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              </Link>
            ))}
            <ThemeSwitcher />
          </div>
        </div>
        <div>
          <Image
            src="/avatar-120x120.png"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-lg object-cover ring-2 ring-transparent hover:ring-primary transition-all duration-300"
          />
        </div>
      </section>
    </FadeIn>
  );
}
