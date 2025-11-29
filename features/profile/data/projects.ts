import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "coya",
    title: "COYA",
    period: {
      start: "11.2024",
    },
    link: "https://coya.gg",
    skills: [
      "Social Network",
      "Gaming Platform",
      "Real-time Collaboration",
      "Next.js 16",
      "TypeScript",
      "WebRTC",
    ],
    shortDescription:
      "Next-generation social network platoform for gamers, creators, and communities. Connect with gamers worldwide, discover new games, and build your gaming legacy.",

    description: `Next-generation social network platoform for gamers, creators, and communities. Connect with gamers worldwide, discover new games, and build your gaming legacy.

- 🎮 Gamer profile with your identity as a gamer including stats and integrations

- 🕹️ Advanced matchmaking and team formation tools

- 💬 Real-time chat, voice and video communication powered by WebRTC

- 🎥 Live streaming integration and discovery

- 🏆 Tournament and event management system

- 👥 Community-driven content creation and sharing



- 📊 Stats tracking and achievement showcases`,
    logo: "/projects/coya.svg",
    isExpanded: false,
  },
  {
    id: "munitrack",
    title: "Munitrack",
    period: {
      start: "01.2025",
    },
    link: "private-client",
    skills: [
      "Government Platform",
      "Digital Transformation",
      "Data Analytics",
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "shadcn/ui",
      "Recharts",
    ],
    shortDescription:
      "Centralized web platform that serves as the operational backbone for the governmental task force for digital transformation in local government.",
    description: `Centralized web platform that serves as the operational backbone for the governmental task force for digital transformation in local government. The platform tracks and manages 259+ Israeli municipalities, enabling the inter-ministerial unit to monitor digital transformation initiatives across multiple teams and munis. The platform captures and analyzes interactions between agency personnel and municipal officials, manages contact relationships, and provides data-driven insights for strategic planning and decision-making.

**Key Features:**

- 🏛️ Centralized management of all Israeli municipalities with detailed profiles and status tracking

- 📈 Real-time dashboards for monitoring digital initiatives, implementation timelines, and success metrics

- 👥 Stakeholder CRM for managing relationships with municipal leadership and IT departments

- 📊 Data analytics engine for identifying trends and informing strategic policy decisions

- 📋 Automated reporting and visualization for ministry leadership

**Impact:**

- Centralized coordination of national digital transformation efforts

- Data-driven policy making for infrastructure development

- Streamlined communication between national and municipal authorities`,
    logo: "/projects/munitrack.svg",
    isExpanded: false,
  },
  {
    id: "goalset",
    title: "Goalset",
    period: {
      start: "06.2025",
    },
    link: "https://goalset.ai",
    skills: [
      "AI Application",
      "LLM Integration",
      "Personal Growth",
      "Next.js 16",
      "TypeScript",
      "OpenAI API",
      "Supabase",
      "Vercel AI SDK",
    ],
    shortDescription:
      "AI-powered goal-setting app that transforms personal growth into a seamless, intuitive journey by leveraging LLM's to help define goals and ensure their achievement.",
    description: `AI-powered goal-setting platform that transforms personal growth into an actionable journey.

- 🤖 Conversational AI to help articulate and define clear, achievable goals

- 🎯 Smart breakdown of goals into milestones and actionable steps

- 📊 Visual progress tracking with streak monitoring

- 💡 Personalized AI insights based on behavior patterns

- 🔔 Smart reminders and motivational prompts

- 🔒 Privacy-first with end-to-end encryption`,
    logo: "/projects/goalset.svg",
    isExpanded: false,
  },
  {
    id: "munigrant",
    title: "Munigrant",
    period: {
      start: "01.2024",
      end: "01.2025",
    },
    link: "private-client",
    skills: [
      "Government CRM",
      "Fund Management",
      "Data Visualization",
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
    shortDescription:
      "Web-based CRM tool for efficient management and oversight of government support funds, featuring dashboards, data visualizations, and robust funding controls.",

    description: `Government CRM for managing support funds allocated to municipalities with complete transparency and oversight.

- 💰 Track fund allocation, disbursement, and utilization across municipalities

- 📝 Streamlined application processing and approval workflows

- ✅ Compliance tracking and reporting requirements monitoring

- 📊 Real-time financial dashboards and budget visualization

- 📁 Secure document management with audit trails

- 📈 Improved transparency and reduced processing time for funding applications`,
    logo: "/projects/munigrant-nobg.png",
    isExpanded: false,
  },
  {
    id: "thinkmate",
    title: "Thinkmate",
    period: {
      start: "06.2023",
      end: "01.2024",
    },
    link: "https://thinkmate.vercel.app",
    skills: [
      "AI Application",
      "Idea Generation",
      "LLM Integration",
      "Next.js 16",
      "TypeScript",
      "OpenAI API",
      "Vercel AI SDK",
    ],
    shortDescription:
      "AI-powered platform that effortlessly generates creative ideas on every topic, providing step-by-step further context guidance to bring those ideas to life.",

    description: `AI-powered creative platform that generates ideas and provides implementation roadmaps.

- 💡 Instant idea generation on any topic using GPT-4

- 🔍 AI-guided contextual exploration with step-by-step elaboration

- 🗺️ Detailed action plans from concept to reality

- 📝 Multi-format export (Markdown, PDF, shareable links)

- 📚 Organize and categorize ideas for future reference`,
    logo: "/projects/thinkmate.png",
    isExpanded: false,
  },
  {
    id: "nexus",
    title: "Nexus",
    period: {
      start: "01.2023",
      end: "06.2023",
    },
    link: "https://neexus.vercel.app",
    skills: [
      "Collaborative Editor",
      "Real-time Collaboration",
      "Document Management",
      "Next.js 16",
      "TypeScript",
      "Liveblocks",
      "Tiptap",
    ],
    shortDescription:
      "A collaborative, real-time document editor that empowers seamless organization, flexible workspaces, and secure file management, streamlining productivity.",

    description: `Notion-like collaborative document editor with real-time synchronization and workspace management.

- ⏳ Real-time collaboration with live cursors and presence indicators

- ✍️ Rich text editing with markdown support and slash commands

- 📂 Hierarchical folder structure and document organization

- 🕐 Version history with restore capabilities

- 🔐 Granular permissions (view, comment, edit)

- 💬 Inline comments with @mentions`,
    logo: "/projects/nexus-nogbg.png",
    isExpanded: false,
  },
];
