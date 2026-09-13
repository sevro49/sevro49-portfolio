export type Project = {
  id: number;
  title: string;
  year: string;
  status: "Completed" | "Ongoing";
  image: string;
  techStack: string[];
  href?: string;
  githubUrl?: string;
};

export const selectedProjects: Project[] = [
  {
    id: 1,
    title: "Rio Petfood",
    year: "2024",
    status: "Completed",
    image: "/file/projects/rio-petfood.webp",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn/UI"],
    href: "https://riopetfood.com/",
  },
  {
    id: 2,
    title: "Climassist",
    year: "2024",
    status: "Completed",
    image: "/file/projects/climassist.webp",
    techStack: ["React", "Redux Toolkit", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 3,
    title: "World University Rankings 2.0",
    year: "2025",
    status: "Ongoing",
    image: "/file/projects/wur.webp",
    techStack: ["React", "Redux Toolkit", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 4,
    title: "World University Rankings",
    year: "2023",
    status: "Completed",
    image: "/file/projects/upg.webp",
    techStack: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Jotbot",
    year: "2022",
    status: "Completed",
    image: "/file/projects/jotbot.webp",
    techStack: ["React", "Jotform API", "Figma"],
    href: "https://sevro49.github.io/jotbot/",
    githubUrl: "https://github.com/sevro49/jotbot",
  },
  {
    id: 6,
    title: "Ultimaker Thingiverse",
    year: "2022",
    status: "Completed",
    image: "/file/projects/ultimaker-thingiverse.webp",
    techStack: ["Vue.js", "Pinia", "Bootstrap 5"],
    href: "https://sevro49.github.io/ultimaker-thingiverse-clone/",
    githubUrl: "https://github.com/sevro49/ultimaker-thingiverse-clone",
  },
];
