import React from "react";
import { FlipWords } from "./FlipWords.tsx";


function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    (<div className="h-[18rem] md:h-[18rem] sm:h-[25rem] flex justify-center items-center px-4 lg: pt-10 sm:px-4 md:px-8">
      <div className="text-xl sm:text-2xl md:text-4xl  mx-auto font-normal  dark:text-white text-center">
        <h1>Blog</h1>
      I love building
        <FlipWords words={words} /> 
        web applications solutions with a blend of precision and creativity. 
        
      </div>
      <div>🪄</div>
    </div>
    )
  );
}
export default FlipWordsDemo;