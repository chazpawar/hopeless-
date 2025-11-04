'use client';

import ThemeToggle from "@/component/ThemeToggle";

export default function Home() {
  return <div className="relative min-h-screen overflow-hidden">
  <div className="mx-auto flex max-w-xl flex-col gap-16 p-6 font-sans md:px-0 md:py-20 ">
      <div className=" flex flex-col">
        <h1 className="w-fit leading-tight font-semibold">Chaitanya </h1>
        <p className="w-fit text-sm opacity-50">Software Developer</p>
      </div>
      <div className="flex items-center gap-4"><a target="_blank" rel="noopener noreferrer" href="https://x.com/Chaitan94778762"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="2.25" stroke="currentColor"><path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25"></path></svg></a>

      <a target="_blank" 
      rel="noopener noreferrer" 
      href="https://github.com/chazpawar"><svg 
      xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" color="currentColor" 
      className="" strokeWidth="2.25" stroke="currentColor"><path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25"></path>
      <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25"></path></svg></a>
      </div>
      <p className="text-foreground/50 w-full text-sm text-pretty lg:text-base">I believe in the minimal and essential approach, expressed through the search for a balance between form, function and meaning, through the enhancement of details and the research of materials
      <br className="block md:medium-hidden"/>
      <br className="block md:medium-hidden"/>
      I create products characterized by their own formal and aesthetic identity, expressed through the simplicity of the form and the rationalization of the concept ...

      </p>
      <div className="flex flex-col gap-6">
        <h1 className="w-fit leading-tight font-semibold">Project</h1>
        <a href="https://github.com/chazpawar/catnip" target="_blank">
        <div className="flex flex-col"><h1 className="w-fit text-sm leading-tight font-semibold">CATNIP</h1><p className="w-fit text-sm opacity-50">Hopeless nip </p></div> 
        </a>
        <a href="https://github.com/chazpawar/ZEPHYR" target="_blank">
        <div className="flex flex-col"><h1 className="w-fit text-sm leading-tight font-semibold">ZEPHYR</h1><p className="w-fit text-sm opacity-50">Hopless Landing Page </p></div> 
        </a>
        <a href="https://github.com/chazpawar/imaverter" target="_blank">
        <div className="flex flex-col"><h1 className="w-fit text-sm leading-tight font-semibold">Imaverter</h1><p className="w-fit text-sm opacity-50">Hopeless image inverter </p></div> 
        </a>
        <a href="https://github.com/chazpawar/bettcolor" target="_blank">
        <div className="flex flex-col"><h1 className="w-fit text-sm leading-tight font-semibold">BEttCOLOR</h1><p className="w-fit text-sm opacity-50">Hopeless color picker </p></div> 
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