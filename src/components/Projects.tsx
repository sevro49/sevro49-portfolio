import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const projects = [
  {
    id: 1,
    title: "Rio Petfood",
    description: "I am solely responsible for the development of Rio Petfood, a responsive website optimized for mobile, tablet, and desktop devices. Built with Next.js and utilizing client-side rendering, the project leverages Next.js's strengths in optimizing performance for large-scale applications. I focused on improving the page's overall optimization to ensure smooth and efficient performance. By optimizing the image loading strategies and implementing lazy loading, I decreased the page load time by 30%. Tailwind CSS is used for responsive design, while Shadcn/UI ensures a modern and user-friendly interface. Iconify Icons enhance visual consistency and clarity across the site. This ongoing project highlights my expertise in delivering high-performance, mobile-optimized solutions.",
    img: "/file/projects/rio-petfood.webp",
    status: "Completed",
    url: "https://riopetfood.com/",
    techStack: [
      "NextJS",
      "Tailwind CSS",
      "Shadcn/UI",
      "Iconify Icons"
    ],
  },
  {
    id: 2,
    title: "Climassist",
    description: "In the Climassist project, my team and I developed a system designed to manage and process maintenance and installation requests from customers. I utilized React for dynamic interfaces, Tailwind CSS for responsive design, and Redux Toolkit combined with React Context API for efficient state management. Shadcn/UI was employed to create user-friendly components. The system supports multiple user roles and admin controls, effectively handling customer requests and streamlining operations.",
    img: "/file/projects/climassist.webp",
    status: "Completed",
    techStack: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Context API",
      "Shadcn/UI",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    title: "World University Rankings (SPA) 2.0",
    description: "I am leading the development of Version 2 of the World University Rankings SPA, designing a robust system for managing and analyzing large datasets related to global university performance. Utilizing React for dynamic user interfaces, Tailwind CSS for responsive design, and Redux Toolkit for efficient state management, I am enhancing the application’s scalability and data handling capabilities. Additionally, I am leveraging Shadcn/UI to create intuitive and accessible UI components, ensuring a seamless user experience. My role also involves optimizing data visualization and retrieval processes to support informed decision-making by stakeholders.",
    img: "/file/projects/wur.webp",
    status: "Ongoing",
    techStack: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Shadcn/UI",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    title: "World University Rankings (SPA)",
    description: "Developed as part of a 4-person team at the special request of the Istanbul Medeniyet University Rectorate, this Single Page Application (SPA) is designed to collect and manage data for world university rankings. The project involved 2 frontend and 2 backend developers, collaborating to create a dynamic and responsive platform. React was utilized for the frontend, ensuring an interactive user experience, while Tailwind CSS handled the responsive design. On the backend, Spring Boot and PostgreSQL provided robust data management and retrieval capabilities. This project, now in use, supports the university's goal of streamlining the process of gathering and analyzing global university performance data.",
    img: "/file/projects/upg.webp",
    status: "Completed",
    techStack: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    id: 5,
    title: "Jotbot",
    description: "Developed during my summer internship as a UI Developer Intern at Jotform, Jotbot was my first project using React. While the bot does not use artificial intelligence, it employs an algorithm to analyze user messages. By leveraging the Jotform API, it filters through pre-stored questions and answers to provide accurate responses to users. I designed the user interface, ensuring an intuitive and visually appealing layout, and made the project fully responsive for seamless use across different devices.",
    img: "/file/projects/jotbot.webp",
    githubUrl: "https://github.com/sevro49/jotbot",
    url: "https://sevro49.github.io/jotbot/",
    status: "Completed",
    techStack: [
      "React",
      "Jotform API",
      "Jotform CSS",
      "Jotform Icons",
      "Figma"
    ],
  },
  {
    id: 6,
    title: "Ultimaker Thingiverse",
    description: "Developed during my summer internship as a Frontend Developer Intern at Sompo Japan Insurance, this project is a responsive clone of the Ultimaker Thingiverse platform. I focused on delivering an optimized user experience, utilizing Bootstrap 5 for clean and modern styling. For state management, I implemented Pinia, ensuring smooth and efficient data handling across the application. The project also integrates the Thingiverse API to provide real-time data and functionality.",
    img: "/file/projects/ultimaker-thingiverse.webp",
    url: "https://sevro49.github.io/ultimaker-thingiverse-clone/",
    githubUrl: "https://github.com/sevro49/ultimaker-thingiverse-clone",
    status: "Completed",
    techStack: [
      "Vue.js",
      "Bootstrap 5",
      "Thingiverse API",
      "Pinia"
    ],
  },
];

const Projects = () => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <h1 className="text-yellow-400 font-semibold text-2xl md:text-3xl lg:text-5xl">
          My Recent Works
        </h1>
        <p className="text-white text-xs md:text-base md:mt-1 lg:mt-2">
          A collection of projects I've worked on.
        </p>
      </div>
      <div className="mt-6 lg:mt-12 pb-6 px-4 md:px-16 2xl:px-48 grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projects?.map((project) => (
          <Card key={project.id}>
            <CardHeader className="space-y-0 m-1 md:m-4 p-0 rounded-t-xl overflow-hidden border-2">
              <Dialog>
                <DialogTrigger>
                  <img src={project.img} alt={project.title} className="rounded-t-xl w-full h-auto hover:scale-110 duration-300" />
                </DialogTrigger>
                <DialogContent className="w-[22rem] sm:w-[30rem] md:w-[45rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[90rem] h-auto max-w-none p-0">
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <img src={project.img} alt={project.title} className="rounded-t-xl w-full h-auto" />
                    <DialogDescription>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-lg md:text-2xl">{project?.title}</CardTitle>
                <Badge className={`p-1 rounded-xl text-xs text-white ${
                  project?.status === 'Ongoing' 
                  ? 'bg-blue-500 hover:bg-blue-600' 
                  : project?.status === 'Completed'
                  ? 'bg-green-500 hover:bg-green-600'
                  : ''}`}>{project?.status}</Badge>
              </div>
              <p className="mt-4"><span className="font-semibold text-sm">Tech Stack: </span>{project?.techStack.join(", ")}</p>
              <p className="pt-4 text-justify">{project?.description}</p>
            </CardContent>
            {
              (project?.githubUrl || project?.url) && (
              <CardFooter className="gap-2 items-center p-3 pt-0 md:p-6 md:pt-0">
                {project?.githubUrl && (
                  <a href={project?.githubUrl} target="_blank">
                    <Button className="text-yellow-400 hover:bg-yellow-400 hover:text-black">
                      <Icon icon="mdi:github" className="text-3xl"/>
                    </Button>
                  </a>
                )}
                {project?.url && (
                  <a href={project?.url} target="_blank">
                    <Button className="text-yellow-400 hover:bg-yellow-400 hover:text-black">
                      <Icon icon="tabler:world" className="text-3xl"/>
                    </Button>
                  </a>
                )}
              </CardFooter>)
            }
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
