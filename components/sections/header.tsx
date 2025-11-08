import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { ThemeSwitcher } from "@/components/switchers/theme-switcher";
import { Button } from "@/components/ui/button";
import { ViewCounter } from "@/components/view-counter";
import { about } from "@/data/about";

export function Header() {
  return (
    <FadeIn>
      <section className="grid grid-cols-4 gap-8" id={useId()}>
        <div className="col-span-3 flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h1 className="font-extrabold font-serif text-4xl tracking-normal">
              {about.name}
            </h1>
            <div className="sm:hidden">
              <Image
                alt="Profile"
                className="rounded-lg object-cover ring-2 ring-transparent transition-all duration-300 hover:ring-primary"
                height={48}
                src="/avatar.png"
                width={48}
              />
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed tracking-tight sm:text-base">
            {about.headline}
          </p>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="group flex cursor-default items-center gap-1 text-primary transition-colors">
              <MapPin
                className="transition-colors group-hover:text-primary"
                size={14}
              />
              <span className="text-xs">{about.location}</span>
            </div>
            <ViewCounter />
          </div>
          <div className="flex gap-2">
            {about.socials.map((social) => (
              <Link href={social.url} key={social.url} target="_blank">
                <Button size="icon" variant="outline">
                  <social.icon className="h-5 w-5" />
                </Button>
              </Link>
            ))}
            <ThemeSwitcher />
          </div>
        </div>
        <div className="hidden sm:block">
          <Image
            alt="Profile"
            className="h-full w-full rounded-lg object-cover ring-2 ring-transparent transition-all duration-300 hover:ring-primary"
            height={120}
            src="/avatar.png"
            width={120}
          />
        </div>
      </section>
    </FadeIn>
  );
}
