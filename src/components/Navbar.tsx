import { Icon } from "@iconify/react";
import { Button } from "./ui/button";

const Navbar = () => {

  return (
    <nav className="bg-zinc-800 flex items-center justify-center py-2 drop-shadow">
      <div id="social-icons" className="flex items-center gap-4">
        <Button className="p-0 h-auto bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-zinc-800 text-3xl md:text-4xl">
          <a href="https://github.com/sevro49" target="_blank">
            <Icon icon="mdi:github"/>
          </a>
        </Button>
        <Button className="p-0 h-auto bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-zinc-800 text-3xl md:text-4xl">
          <a href="/file/emre_guler_resume.pdf" download="emre_guler_resume.pdf">
            <Icon icon="mdi:file-download"/>
          </a>
        </Button>
        <Button className="p-0 h-auto bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-zinc-800 text-3xl md:text-4xl">
          <a href="https://www.linkedin.com/in/sevro49/" target="_blank">
            <Icon icon="ri:linkedin-fill"/>
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
