import React from "react";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation.js";
import {FaAws, FaCss3, FaDatabase, FaHtml5, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
// import FlipWordsDemo from "./FlipWordsDemo.js";


export function BackgroundGradientAnimationDemo() {
  return (
<BackgroundGradientAnimation>
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none space-x-3">
    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
      Hi, I'm Luan 🙎🏻‍♂️
    </div>
    <p className="bg-clip-text text-transparent drop-shadow-2xl mb-4 bg-gradient-to-b from-white/80 to-white/20 text-lg sm:text-xl md:text-3xl lg:text-5xl">
      Full Stack Developer
    </p>
  </div>

  <div className="w-full px-4 py-2 mb-4 flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 space-y-0 text-white absolute bottom-4 sm:bottom-6 mm:bottom-8 lg:bottom-16">
    
    <FaReact className="text-2xl sm:text-5xl" />
    <FaPython className="text-2xl sm:text-5xl" />
    <FaAws className="text-2xl sm:text-5xl" />
    <FaDatabase className="text-2xl sm:text-5xl" />
    <FaHtml5 className="text-2xl sm:text-5xl" />
    <FaCss3 className="text-2xl sm:text-5xl" />
    <FaPhp className="text-2xl sm:text-5xl" />
    <FaNodeJs className="text-2xl sm:text-5xl" />
  </div>
</BackgroundGradientAnimation>
  );
}
