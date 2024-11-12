// src/components/HomePage.js
import React from 'react';
import Entry from '../components/Entry';
import { BackgroundGradientAnimationDemo } from '../components/BackgroundGradientDemo';

function HomePage() {

  return (
    <div className=' '>
      <section><BackgroundGradientAnimationDemo/></section>
      <section><Entry /></section>

    </div>
  );
}

export default HomePage;


