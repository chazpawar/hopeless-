'use client';

import { useEffect } from "react";

declare global {
  interface Window {
    __portfolioConsoleAsciiLogged?: boolean;
  }
}

export default function ConsoleAscii({ art }: { art: string }) {
  useEffect(() => {
    if (window.__portfolioConsoleAsciiLogged) {
      return;
    }

    window.__portfolioConsoleAsciiLogged = true;
    console.log("Hi , you found me . This is just simple HTML site .  ");
    console.log(art);
  }, [art]);

  return null;
}
