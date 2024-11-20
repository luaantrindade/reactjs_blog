import React from "react";
import { FlipWords } from "./FlipWords.tsx";


function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    (<div className="h-[18rem] md:h-[18rem] sm:h-[25rem] flex justify-center items-center px-4 lg: pt-10 sm:px-4 md:px-8">
      <div className="text-2xl sm:text-4xl md:text-5xl  mx-auto font-normal  dark:text-white text-left">
      Hi, I'm <b className="tracking-wide  dark:text-white underline decoration-green-500">Luan Trindade!</b> <br /><br /> I love building
        <FlipWords words={words} /> 
        websites with a blend of precision and creativity. 
        
      </div>
      <div>🪄</div>
    </div>
    )
  );
}
export default FlipWordsDemo;