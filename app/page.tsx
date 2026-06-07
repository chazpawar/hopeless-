import AboutHover from "@/component/AboutHover";
import ConsoleAscii from "@/component/ConsoleAscii";
import ThemeToggle from "@/component/ThemeToggle";
import { readFile } from "fs/promises";
import Image from "next/image";

export default async function Home() {
  const consoleArt = await readFile(`${process.cwd()}/ascii`, "utf8");
  const catArt = await readFile(`${process.cwd()}/cat`, "utf8");

  return <div className="relative min-h-screen overflow-hidden">
  <ConsoleAscii art={consoleArt} />
  <div className="mx-auto flex max-w-xl flex-col gap-12 p-6 font-sans md:px-0 md:py-20 ">
      <div className=" flex flex-col">
        <h1 className="w-fit text-xl leading-tight font-semibold">Chaitanya </h1>
        <p className="w-fit text-base opacity-50">Software Developer</p>
      </div>
      <div className="flex items-center gap-4"><a target="_blank" rel="noopener noreferrer" href="https://x.com/Chaitan94778762"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="2.25" stroke="currentColor"><path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25"></path></svg></a>

      <a target="_blank" 
      rel="noopener noreferrer" 
      href="https://github.com/chazpawar">
        <Image src="/github.gif" alt="GitHub" width={26} height={26} unoptimized />
      </a>
      </div>
      <p className="text-foreground/50 w-full text-base text-pretty lg:text-lg"> You know what, just keep it simple. :) </p>
      <section className="flex flex-col gap-4">
        <h1 className="w-fit text-xl leading-tight font-semibold">Career</h1>
        <div className="flex items-center gap-4">
          <Image src="/Lowe's-Logo.wine.svg" alt="Lowe's" width={84} height={60} />
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-semibold leading-tight">Lowe&apos;s SDE </h2>
            <p className="text-sm text-foreground/50">SSC-B Data Transparency Department</p>
            <p className="text-sm text-foreground/50">June 2026 - Present  · Bengaluru, India</p>
          </div>
        </div>
      </section>
      <p className="mt-8 text-center text-lg font-bold text-foreground/50">Update coming soon</p>


    
  </div>
  <AboutHover cat={catArt} />
  <div className="absolute bottom-2 right-10 z-0 font-sans leading-none font-bold opacity-70">
    <ThemeToggle />
  </div>
  </div>;
}
