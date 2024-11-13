"use client";

import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <FadeIn>
        <div className="flex justify-between items-start mb-12">
          <div>
            <Heading className="font-serif font-extrabold tracking-normal">
              Raz Levi
            </Heading>
            <Text className="mb-3 tracking-tight">
              Building SaaS products that fit seamlessly into life 🚀{" "}
            </Text>
            <div className="flex items-center gap-1 text-primary transition-colors mb-4 group cursor-default">
              <MapPin
                size={16}
                className="group-hover:text-primary transition-colors"
              />
              <span className="text-sm">TLV</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary transition-colors"
              >
                <IconBrandGithub className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary transition-colors"
              >
                <IconBrandLinkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary transition-colors"
              >
                <IconBrandX className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/avatar-120x120.png"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-lg object-cover ring-2 ring-transparent hover:ring-primary transition-all duration-300"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="mb-12">
          <Heading level={2} className="font-mono font-bold tracking-tight">
            About
          </Heading>
          <div className="space-y-4 tracking-tight">
            <Text>TODO TODO TODO TODO </Text>
            <Text>
              TODO TODO TODO TODO
            </Text>
          </div>
        </section>
      </FadeIn>

      <section className="mb-12">
        <FadeIn delay={0.3}>
          <Heading level={2} className="mb-6 font-mono font-bold tracking-tight">
            Portfolio
          </Heading>
        </FadeIn>
        <StaggerContainer>
          <div className="grid grid-cols-1 gap-4">
            <StaggerItem>
              <ProjectCard
                title="MuniGrant"
                description="Web-based CRM tool for efficient management and oversight of government support funds, featuring dashboards, data visualizations, and robust funding controls."
                icon="🏛️"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="Pixeltribe"
                description="Comprehensive gaming platform that seamlessly integrates players, creators, and communities, enabling personalized experiences, real-time collaboration, and discovery of engaging gaming content."
                icon="🎮"
                status="Building"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="Goalset"
                description="An AI-powered goal-setting platform that transforms personal growth into a seamless, intuitive journey by leveraging LLM's to help users define actionable plans and ensure the achievement of their goals."
                icon="🎯"
                status="Building"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="Thinkmate"
                description="An AI-powered ideation platform that effortlessly generates creative ideas on every topic, providing step-by-step further context guidance to bring those ideas to life."
                icon="💡"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="Nexus"
                description="A collaborative, real-time document editor that empowers seamless organization, flexible workspaces, and secure file management, streamlining productivity for teams and individuals."
                icon="📝"
              />
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      <section>
        <FadeIn delay={0.4}>
          <Heading level={2} className="mb-6 font-mono font-bold tracking-tight">
            Products I use & love
          </Heading>
        </FadeIn>
        <StaggerContainer delay={0.5}>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Supabase",
                url: "https://supabase.com",
                description: "Open source Firebase alternative",
                icon: "⚡",
              },
              {
                title: "Upstash",
                url: "https://upstash.com",
                description: "Serverless Redis and Kafka",
                icon: "🚀",
              },
              {
                title: "Trigger.dev",
                url: "https://trigger.dev",
                description: "Background jobs and workflows",
                icon: "⚙️",
              },
              {
                title: "Resend",
                url: "https://resend.com",
                description: "Email API for developers",
                icon: "📧",
              },
              {
                title: "LiveKit",
                url: "https://livekit.io",
                description: "Open source WebRTC",
                icon: "🎥",
              },
              {
                title: "Cursor",
                url: "https://cursor.sh",
                description: "AI-first code editor",
                icon: "👨‍💻",
              },
              {
                title: "Linear",
                url: "https://linear.app",
                description: "The issue tracking tool you'll enjoy using",
                icon: "📊",
              },
              {
                title: "Notion",
                url: "https://notion.so",
                description: "All-in-one workspace",
                icon: "📓",
              },
              {
                title: "Excalidraw",
                url: "https://excalidraw.com",
                description: "Virtual whiteboard for sketching",
                icon: "✏️",
              },
            ].map((product) => (
              <StaggerItem key={product.title}>
                <ProductCard {...product} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  icon,
  status,
}: {
  title: string;
  description: string;
  icon: string;
  status?: string;
}) {
  return (
    <Card className="p-4 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_0_1px_hsl(var(--primary))]">
      <div className="flex items-start gap-3">
        <span className="text-2xl min-w-[32px] text-center">{icon}</span>
        <div>
          <div className="flex items-center gap-2">
            <Heading level={3} className="mb-0 font-mono font-bold tracking-tight">
              {title}
            </Heading>
            {status && (
              <Badge
                variant="secondary"
                className="bg-accent text-accent-foreground font-medium"
              >
                {status}
              </Badge>
            )}
          </div>
          <Text className="text-sm mt-1 tracking-tight">{description}</Text>
        </div>
      </div>
    </Card>
  );
}

function ProductCard({
  title,
  description,
  icon,
  url,
}: {
  title: string;
  description: string;
  icon: string;
  url: string;
}) {
  return (
    <Card className="p-4 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_0_1px_hsl(var(--primary))]">
      <div className="flex items-start gap-3">
        <span className="text-2xl min-w-[32px] text-center">{icon}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <Heading level={3} className="mb-0">
              {title}
            </Heading>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          </div>
          <Text className="text-sm mt-1">{description}</Text>
        </div>
      </div>
    </Card>
  );
}
