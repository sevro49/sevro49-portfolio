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
    title: "World University Rankings (SPA) 2.0",
    description: "I am leading the development of Version 2 of the World University Rankings SPA, designing a robust system for managing and analyzing large datasets related to global university performance. Utilizing React for dynamic user interfaces, Tailwind CSS for responsive design, and Redux Toolkit for efficient state management, I am enhancing the application’s scalability and data handling capabilities. Additionally, I am leveraging Shadcn/UI to create intuitive and accessible UI components, ensuring a seamless user experience. My role also involves optimizing data visualization and retrieval processes to support informed decision-making by stakeholders.",
    img: "/file/projects/wur.png",
    githubUrl: "https://www.github.com",
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
    id: 2,
    title: "Climassist",
    description: "In the Climassists project, my team and I are developing a system designed to manage and process maintenance and installation requests from customers. I use React for dynamic interfaces, Tailwind CSS for responsive design, and Redux Toolkit with React Context API for efficient state management. Shadcn/UI is utilized to create user-friendly components. The system supports multiple user roles and admin controls to effectively handle customer requests and streamline operations.",
    img: "/file/projects/climassist.png",
    url: "http://climassist.com",
    githubUrl: "https://www.github.com",
    status: "Ongoing",
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
];

const Projects = () => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <h1 className=" text-yellow-400 font-semibold text-2xl md:text-3xl lg:text-5xl">
          My Recent Works
        </h1>
        <p className="text-white text-xs md:text-base md:mt-1 lg:mt-2">
          A collection of projects I've worked on.
        </p>
      </div>
      <div className="mt-12 pb-6 px-6 md:px-28 lg:px-48 grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projects?.map((project) => (
          <Card key={project.id}>
            <CardHeader className="space-y-0 m-4 p-0 rounded-t-xl overflow-hidden border-2">
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
            <CardContent>
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-lg md:text-2xl">{project?.title}</CardTitle>
                <Badge className={`p-1 rounded-xl text-xs text-white ${
                  project?.status === 'Ongoing' 
                  ? 'bg-blue-500' 
                  : project?.status === 'Completed'
                  ? 'bg-green-500'
                  : ''}`}>{project?.status}</Badge>
              </div>
              <p><span className="font-semibold text-sm">Tech Stack: </span>{project?.techStack.join(", ")}</p>
              <p className="pt-4 text-justify">{project?.description}</p>
            </CardContent>
            <CardFooter>
              {project?.url && (
                <Button disabled className="text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  <a href={project?.url} target="_blank" className="text-3xl">
                    <Icon icon="tabler:world"/>
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
