// src/components/HomePage.js
import React from 'react';
import ServicesSection from '../components/ServicesSection';
import { BackgroundGradientAnimationDemo } from '../components/BackgroundGradientDemo';
import BlogSection from '../components/BlogSection';

function HomePage() {

  return (
    <div className=''>
      <section><BackgroundGradientAnimationDemo/></section>
      <section><ServicesSection /></section>
      <section><BlogSection /></section>

    </div>
  );
}

export default HomePage;


