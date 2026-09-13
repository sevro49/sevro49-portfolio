export type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
  status: "Completed" | "Ongoing";
  url?: string;
  githubUrl?: string;
  techStack: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Rio Petfood",
    description:
      "Responsive, performance-focused commerce experience built with Next.js, optimized imagery, and a refined component system.",
    img: "/file/projects/rio-petfood.webp",
    status: "Completed",
    url: "https://riopetfood.com/",
    year: "2024",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    id: 2,
    title: "Climassist",
    description:
      "Operations platform for maintenance workflows — multi-role access, admin controls, and a cohesive React front end.",
    img: "/file/projects/climassist.webp",
    status: "Completed",
    year: "2024",
    techStack: ["React", "Redux Toolkit", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 3,
    title: "World University Rankings 2.0",
    description:
      "Lead engineer on a scalable SPA for large-scale academic datasets, visualization, and stakeholder reporting.",
    img: "/file/projects/wur.webp",
    status: "Ongoing",
    year: "2025",
    techStack: ["React", "Redux Toolkit", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 4,
    title: "World University Rankings",
    description:
      "Team-built ranking data platform commissioned by Istanbul Medeniyet University — full-stack delivery in production.",
    img: "/file/projects/upg.webp",
    status: "Completed",
    year: "2023",
    techStack: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Jotbot",
    description:
      "Conversational UI prototype at Jotform — algorithmic Q&A routing with a fully responsive React interface.",
    img: "/file/projects/jotbot.webp",
    githubUrl: "https://github.com/sevro49/jotbot",
    url: "https://sevro49.github.io/jotbot/",
    status: "Completed",
    year: "2022",
    techStack: ["React", "Jotform API", "Figma"],
  },
  {
    id: 6,
    title: "Ultimaker Thingiverse",
    description:
      "High-fidelity Thingiverse clone with API integration, Pinia state, and Bootstrap-driven responsive layouts.",
    img: "/file/projects/ultimaker-thingiverse.webp",
    url: "https://sevro49.github.io/ultimaker-thingiverse-clone/",
    githubUrl: "https://github.com/sevro49/ultimaker-thingiverse-clone",
    status: "Completed",
    year: "2022",
    techStack: ["Vue.js", "Pinia", "Thingiverse API"],
  },
];
