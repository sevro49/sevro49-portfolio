export type Project = {
  id: number;
  slug: string;
  title: string;
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
    slug: "athlyze",
    title: "Athlyze",
    img: "/file/projects/athlyze.webp",
    status: "Ongoing",
    url: "https://ath-lyze.vercel.app/",
    year: "2025",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    slug: "rio-petfood",
    title: "Rio Petfood",
    img: "/file/projects/rio-petfood.webp",
    status: "Completed",
    url: "https://riopetfood.com/",
    year: "2024",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    id: 3,
    slug: "climassist",
    title: "Climassist",
    img: "/file/projects/climassist.webp",
    status: "Completed",
    year: "2024",
    techStack: ["React", "Redux Toolkit", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 4,
    slug: "wur",
    title: "World University Rankings",
    img: "/file/projects/wur.webp",
    status: "Ongoing",
    year: "2023",
    techStack: ["React", "Redux Toolkit", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 5,
    slug: "jotbot",
    title: "Jotbot",
    img: "/file/projects/jotbot.webp",
    githubUrl: "https://github.com/sevro49/jotbot",
    url: "https://sevro49.github.io/jotbot/",
    status: "Completed",
    year: "2022",
    techStack: ["React", "Jotform API", "Figma"],
  },
  {
    id: 6,
    slug: "ultimaker-thingiverse",
    title: "Ultimaker Thingiverse",
    img: "/file/projects/ultimaker-thingiverse.webp",
    url: "https://sevro49.github.io/ultimaker-thingiverse-clone/",
    githubUrl: "https://github.com/sevro49/ultimaker-thingiverse-clone",
    status: "Completed",
    year: "2022",
    techStack: ["Vue.js", "Pinia", "Thingiverse API"],
  },
];
