import type { Project, SkillCategory, Experience, Achievement, SocialLink } from "@/types";

export const personalInfo = {
  name: "Popur",
  fullName: "Popur Lama",
  title: "Full Stack Developer",
  subtitle: "Building intelligent web experiences",
  bio: "I'm a passionate full-stack developer and CS student who loves turning complex problems into elegant, user-friendly solutions. From building AI-powered apps to crafting smooth animations — I care deeply about both the engineering and the experience.",
  location: "India",
  email: "popurlama@gmail.com",
  github: "https://github.com/popurlama",
  linkedin: "https://linkedin.com/in/popurlama",
  twitter: "https://twitter.com/popurlama",
  resume: "/resume.pdf",
  availableForWork: true,
};

export const projects: Project[] = [
  {
    id: "ai-app-generator",
    title: "AI App Generator",
    tagline: "Turn ideas into full-stack apps with a single prompt",
    description:
      "An intelligent platform that takes a natural-language description and generates a complete, production-ready web application — including frontend, backend, database schema, and deployment config. Powered by GPT-4 and a multi-agent architecture.",
    image: "/projects/ai-app-generator.png",
    liveUrl: "https://ai-app-generator.vercel.app",
    githubUrl: "https://github.com/popurlama/ai-app-generator",
    techStack: ["Next.js", "TypeScript", "OpenAI GPT-4", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"],
    features: [
      "Natural language → full-stack app generation",
      "Multi-agent pipeline (planner → coder → reviewer)",
      "Live preview with hot reload",
      "One-click Vercel deployment",
      "Supports 10+ tech stacks",
      "Version history & rollback",
    ],
    challenge:
      "Coordinating multiple LLM agents to produce coherent, dependency-aware code across frontend and backend without hallucinations or broken imports.",
    solution:
      "Built a deterministic orchestration layer that breaks generation into validated micro-steps, with a context-graph to track cross-file dependencies. Each agent output passes through a syntax validator before being merged.",
    result:
      "95% of generated apps run without manual edits. Average generation time under 45 seconds. Used by 200+ developers in beta.",
    featured: true,
  },
  {
    id: "devflow",
    title: "DevFlow",
    tagline: "A developer-first project management tool",
    description:
      "A full-stack project management platform built specifically for solo developers and small teams — with GitHub integration, automated standup summaries, and an AI assistant that answers questions about your own codebase.",
    image: "/projects/devflow.png",
    liveUrl: "https://devflow.vercel.app",
    githubUrl: "https://github.com/popurlama/devflow",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "OpenAI", "GitHub API"],
    features: [
      "Real-time kanban board with WebSockets",
      "GitHub PR & commit auto-linking",
      "AI-powered daily standup summaries",
      "Codebase Q&A via RAG pipeline",
      "Time tracking with analytics",
      "Team notifications via webhooks",
    ],
    challenge:
      "Implementing a RAG pipeline that could answer questions about a user's private codebase securely and accurately.",
    solution:
      "Built a secure indexing service that chunks and embeds code locally, storing vectors in a user-owned Pinecone namespace. Queries never leave the user's context window with external code.",
    result:
      "Reduced standup prep time by ~20 minutes/day for teams. 150 active users in first month after launch.",
    featured: true,
  },
  {
    id: "smartcv",
    title: "SmartCV",
    tagline: "AI resume builder that gets you past ATS filters",
    description:
      "A resume builder that analyzes job descriptions and intelligently tailors your resume content, keywords, and structure to maximize ATS match scores.",
    image: "/projects/smartcv.png",
    liveUrl: "https://smartcv.vercel.app",
    githubUrl: "https://github.com/popurlama/smartcv",
    techStack: ["Next.js", "OpenAI", "Tailwind CSS", "jsPDF", "Zustand", "Supabase"],
    features: [
      "ATS score analysis with improvement suggestions",
      "Job description keyword extraction",
      "10+ professional templates",
      "One-click PDF export",
      "Resume version management",
      "Cover letter AI generation",
    ],
    challenge: "Generating ATS-optimized resumes that feel human and natural, not keyword-stuffed.",
    solution:
      "Fine-tuned prompts with few-shot examples of high-scoring resumes. Used semantic similarity scoring to blend keywords naturally into existing bullet points.",
    result: "Average ATS score improvement of 35 points. 500+ resumes generated in first two weeks.",
    featured: false,
  },
];
