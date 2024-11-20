import React from "react";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation.tsx";
import { FaAngular, FaAws, FaCss3, FaDatabase, FaHtml5, FaJava, FaPython, FaReact, FaSwift } from "react-icons/fa";
// import FlipWordsDemo from "./FlipWordsDemo.js";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-10 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Full Stack Developer
        </p>
      </div>
      <div className="w-screen p-6 flex justify-center items-center space-x-10 text-white absolute bottom-0 mb-6">
        <FaPython className="text-5xl" />
        <FaReact className="text-5xl" />
        <FaAws className="text-5xl" />
        <FaDatabase className="text-5xl" />
        <FaHtml5 className="text-5xl" />
        <FaCss3 className="text-5xl" />
        <FaSwift className="text-5xl" />
        <FaJava className="text-5xl" />
      </div>
    </BackgroundGradientAnimation>
  );
}
