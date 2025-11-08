import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "coya",
    title: "COYA",
    period: {
      start: "01.2024",
    },
    link: "https://coya.gg",
    skills: [
      "Gaming Platform",
      "Social Network",
      "Real-time Collaboration",
      "Next.js",
      "TypeScript",
      "WebSockets",
    ],
    description:
      "Gaming social platform that seamlessly integrates gamers, creators, and communities, enhancing gaming experiences, real-time collaboration, and gaming related content.",
    logo: "/projects/coya.svg",
    isExpanded: true,
  },
  {
    id: "munitrack",
    title: "Munitrack",
    period: {
      start: "03.2024",
    },
    link: "private-client",
    skills: [
      "Government Platform",
      "Digital Transformation",
      "Data Analytics",
      "Next.js",
      "TypeScript",
      "Dashboard",
      "CRM",
    ],
    description:
      "A centralized web platform for Israel inter-ministerial digital task force of Ministry of Interior & National Digital Agency to oversee 259+ municipalities, manage digital transformation initiatives, track team activities, monitor stakeholder relationships, and leverage interaction data for smarter, tech-driven municipal advancement.",
    logo: "/projects/munitrack.svg",
    isExpanded: true,
  },
  {
    id: "goalset",
    title: "Goalset",
    period: {
      start: "06.2024",
    },
    link: "https://goalset.ai",
    skills: [
      "AI",
      "LLM Integration",
      "Goal Setting",
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Personal Growth",
    ],
    description:
      "AI-powered goal-setting app that transforms personal growth into a seamless, intuitive journey by leveraging LLM's to help define goals and ensure their achievement.",
    logo: "/projects/goalset.svg",
  },
  {
    id: "munigrant",
    title: "Munigrant",
    period: {
      start: "01.2024",
      end: "06.2024",
    },
    link: "private-client",
    skills: [
      "CRM",
      "Government",
      "Data Visualization",
      "Dashboard",
      "Next.js",
      "TypeScript",
      "Fund Management",
    ],
    description:
      "Web-based CRM tool for efficient management and oversight of government support funds, featuring dashboards, data visualizations, and robust funding controls.",
    logo: "/projects/munigrant-nobg.png",
  },
  {
    id: "thinkmate",
    title: "Thinkmate",
    period: {
      start: "08.2024",
      end: "10.2024",
    },
    link: "https://thinkmate.vercel.app",
    skills: [
      "AI",
      "Idea Generation",
      "LLM Integration",
      "Next.js",
      "TypeScript",
      "OpenAI",
    ],
    description:
      "AI-powered platform that effortlessly generates creative ideas on every topic, providing step-by-step further context guidance to bring those ideas to life.",
    logo: "/projects/thinkmate.png",
  },
  {
    id: "nexus",
    title: "Nexus",
    period: {
      start: "05.2024",
      end: "08.2024",
    },
    link: "https://neexus.vercel.app",
    skills: [
      "Collaborative Editor",
      "Real-time",
      "Document Management",
      "Next.js",
      "TypeScript",
      "WebSockets",
    ],
    description:
      "A collaborative, real-time document editor that empowers seamless organization, flexible workspaces, and secure file management, streamlining productivity.",
    logo: "/projects/nexus-nogbg.png",
  },
];

