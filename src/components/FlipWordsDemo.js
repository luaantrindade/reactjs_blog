import React from "react";
import { FlipWords } from "./FlipWords.tsx";


function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    (<div className="h-[65rem] flex justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="text-6xl sm:text-xl md:text-6xl mx-auto font-normal  dark:text-neutral-400 text-left">
      Hi, I'm <b className="tracking-wide dark:text-white underline decoration-green-500">Luan Trindade!</b> <br /><br /> I love building
        <FlipWords words={words} /> 
        websites with a blend of precision and creativity. 
        
      </div>
      <div>🪄</div>
    </div>
    )
  );
}
export default FlipWordsDemo;