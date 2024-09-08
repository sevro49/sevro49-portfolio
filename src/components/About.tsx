import profilePic from "../assets/img/eg.jpg";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center py-4 md:py-12 lg:py-20 text-white"
    >
      <div className="flex flex-col items-center gap-6 md:gap-6 px-12 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <img
            src={profilePic}
            alt="Emre Güler"
            className="w-48 lg:w-96 h-auto rounded-full shadow-lg hover:shadow-xl duration-300 mb-4"
          />
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
              I'm <span className="text-yellow-400">Emre Güler</span>
            </h1>
            <h2 className="text-lg md:text-xl lg:text-3xl text-center">
              Frontend Developer &#x2022; UI/UX Designer
            </h2>
            <p className="text-center max-w-xl text-xs md:text-sm lg:text-base mt-1 md:mt-4">
              Passionate about crafting interactive web experiences and creating
              visually stunning user interfaces. Currently exploring new horizons in
              JavaScript frameworks and UI/UX design.
            </p>
          </div>
        </div>
        <div className="md:mt-6 text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Technologies I'm Working With:</h3>
          <div className="flex flex-wrap items-center justify-center gap-6 text-yellow-400 text-3xl md:text-4xl lg:text-5xl">
            <Icon icon="simple-icons:react"/>
            <Icon icon="teenyicons:nextjs-solid"/>
            <Icon icon="akar-icons:javascript-fill"/>
            <Icon icon="akar-icons:typescript-fill"/>
            <Icon icon="mdi:tailwind"/>
            <Icon icon="akar-icons:bootstrap-fill"/>
            <Icon icon="solar:figma-outline"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
