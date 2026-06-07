'use client';

import { useState } from "react";

export default function AboutHover({ cat }: { cat: string }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="absolute bottom-2 left-10 z-0 w-fit font-sans text-[clamp(2.5rem,5vw,5rem)] leading-none font-bold"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className={isHovering ? "opacity-0" : "opacity-10"}>about</span>
      {isHovering ? (
        <pre className="pointer-events-none absolute bottom-0 left-0 text-[clamp(0.28rem,0.6vw,0.6rem)] leading-none opacity-70">{cat}</pre>
      ) : null}
    </div>
  );
}
