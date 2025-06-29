import profilePic from "../assets/img/emre-guler-talentrank.jpg";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center py-4 md:py-12 lg:py-20 text-white"
    >
      <div className="flex flex-col items-center gap-6 md:gap-6 px-12 md:px-8">
        {/* Personal Info */}
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <img
            src={profilePic}
            alt="Emre Güler"
            className="w-48 lg:w-96 h-auto aspect-square object-cover rounded-full shadow-lg hover:shadow-xl duration-300 mb-4"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
              I'm <span className="text-yellow-400">Emre Güler</span>
            </h1>
            <h2 className="text-lg md:text-xl lg:text-3xl text-center">
              Full Stack Developer
            </h2>
            <p className="text-center max-w-md lg:max-w-xl text-xs md:text-sm lg:text-base mt-1 md:mt-4">
              Full Stack Developer building AI-powered, scalable web
              applications with a focus on clean architecture and seamless user
              experiences. Experienced with modern JavaScript frameworks like
              Next.js and Express.js, and passionate about combining frontend
              design with backend logic to craft impactful digital products.
            </p>

            {/* Contact Links */}
            <div className="mt-4 flex flex-col gap-2 items-center">
              <p className="text-yellow-400 text-center text-sm md:text-base animate__animated animate__flash animate__slower animate__infinite">
                Reach out to me for web projects or collaboration inquiries!
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                {/* Mail */}
                <a href="mailto:dr.emreguler@hotmail.com.tr">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 flex items-center gap-2">
                    <Icon
                      icon="material-symbols:mail-outline"
                      className="text-3xl text-zinc-800 group-hover:bg-yellow-400 group-hover:text-zinc-800 rounded-md transition-all duration-300"
                    />
                    <span className="text-zinc-800 font-semibold text-sm md:text-base">
                      dr.emreguler@hotmail.com.tr
                    </span>
                  </Button>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/+905365618687">
                  <Button className="bg-white hover:bg-zinc-200 flex items-center gap-2">
                    <Icon
                      icon="ic:baseline-whatsapp"
                      className="text-3xl text-zinc-800 group-hover:bg-yellow-400 group-hover:text-zinc-800 rounded-md transition-all duration-300"
                    />
                    <span className="text-zinc-800 font-semibold text-sm md:text-base">
                      +90 0536 561 8687
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="md:mt-6 text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Technologies I'm Working With:
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 text-yellow-400 text-3xl md:text-4xl lg:text-5xl">
            <Icon icon="simple-icons:react" />
            <Icon icon="teenyicons:nextjs-solid" />
            <Icon icon="simple-icons:express" />
            <Icon icon="mdi:aws" />
            <Icon icon="akar-icons:javascript-fill" />
            <Icon icon="akar-icons:typescript-fill" />
            <Icon icon="mdi:tailwind" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
