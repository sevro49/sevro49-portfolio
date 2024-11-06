import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const references = [
  {
    id: 1,
    title: "Quartz Soft",
    img: "/file/references/quartzsoft-test.webp",
    url: "https://quartzsoft.com/",
    hoverUrl: "www.quartzsoft.com",
  },
  {
    id: 2,
    title: "Istanbul Medeniyet University",
    img: "/file/references/imu.webp",
    url: "https://medeniyet.edu.tr/",
    hoverUrl: "www.medeniyet.edu.tr",
  }
];

const References = () => {
  return (
    <div className='mt-12 px-4'>
      <div className='text-center'>
        <h1 className="text-yellow-400 font-semibold text-2xl md:text-3xl lg:text-5xl">My References</h1>
        <p className="text-white text-xs md:text-base md:mt-1 lg:mt-2">
        Companies that have trusted me to bring their projects to life.
        </p>
      </div>
      <div className="mt-6 lg:mt-12 pb-6 px-6 md:px-28 lg:px-48 gap-8 flex flex-col sm:flex-row items-center justify-center">
        {references.map((reference) => (
          <Card key={reference.id} className="w-72">
            <CardHeader className=" relative space-y-0 p-0 rounded-xl overflow-hidden border-2">
              <VisuallyHidden><CardDescription></CardDescription></VisuallyHidden>
              <a href={reference?.url} target="_blank" className="group">
                <img src={reference.img} alt={reference.title} className="rounded-t-xl w-full h-auto group-hover:scale-110 duration-300" />
                <div className="bg-opacity-90 bg-zinc-800 text-white w-full h-full absolute top-full group-hover:top-0 transition-all duration-300 flex flex-col gap-4 items-center justify-center">
                  <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center">{reference.title}</p> 
                  <p>{reference.hoverUrl}</p>
                </div>
              </a>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default References