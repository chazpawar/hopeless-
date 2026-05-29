'use client';

import ThemeToggle from "@/component/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return <div className="relative min-h-screen overflow-hidden">
  <div className="mx-auto flex max-w-xl flex-col gap-16 p-6 font-sans md:px-0 md:py-20 ">
      <div className=" flex flex-col">
        <h1 className="w-fit text-xl leading-tight font-semibold">Chaitanya </h1>
        <p className="w-fit text-base opacity-50">Software Developer</p>
      </div>
      <div className="flex items-center gap-4"><a target="_blank" rel="noopener noreferrer" href="https://x.com/Chaitan94778762"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="2.25" stroke="currentColor"><path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25"></path></svg></a>

      <a target="_blank" 
      rel="noopener noreferrer" 
      href="https://github.com/chazpawar">
        <Image src="/github.gif" alt="GitHub" width={26} height={32} unoptimized />
      </a>
      </div>
      <p className="text-foreground/50 w-full text-base text-pretty lg:text-lg">I believe in the minimal and essential approach, expressed through the search for a balance between form, function and meaning, through the enhancement of details and the research of materials
      <br className="block md:medium-hidden"/>
      <br className="block md:medium-hidden"/>
      I create products characterized by their own formal and aesthetic identity, expressed through the simplicity of the form and the rationalization of the concept ...

      </p>
      <div className="flex flex-col gap-6">
        <h1 className="w-fit text-xl leading-tight font-semibold">Project</h1>
        <a href="https://github.com/chazpawar/catnip" target="_blank">
        <div className="flex flex-col"><h1 className="w-fit text-base leading-tight font-semibold">CATNIP</h1><p className="w-fit text-base opacity-50">Hopeless nip </p></div> 
        </a>
        <a href="https://github.com/chazpawar/ZEPHYR" target="_blank">
        <div className="flex flex-col"><h1 className="w-fit text-base leading-tight font-semibold">ZEPHYR</h1><p className="w-fit text-base opacity-50">Hopless Landing Page </p></div> 
        </a>
        <a href="https://github.com/chazpawar/imaverter" target="_blank">
        <div className="flex flex-col"><h1 className="w-fit text-base leading-tight font-semibold">Imaverter</h1><p className="w-fit text-base opacity-50">Hopeless image inverter </p></div> 
        </a>
        <a href="https://github.com/chazpawar/bettcolor" target="_blank">
        <div className="flex flex-col"><h1 className="w-fit text-base leading-tight font-semibold">BEttCOLOR</h1><p className="w-fit text-base opacity-50">Hopeless color picker </p></div> 
        </a>

      </div>


    
  </div>
  <div className="absolute bottom-2 left-10 z-0 font-sans text-[clamp(3rem,6vw,6rem)] leading-none font-bold  opacity-10 ">
  about
  </div>
  <div className="absolute bottom-2 right-10 z-0 font-sans leading-none font-bold opacity-70">
    <ThemeToggle />
  </div>
  </div>;
}
