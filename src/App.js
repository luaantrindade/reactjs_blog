import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BackgrounColor from './components/BackgroundColor';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Write from './pages/Write';
import Contact from './pages/Contact';



const App = () => {
  return (

    <div className="App">
      <BackgrounColor>
        <Header />  {/* aaaaaaUse the Header component here */}
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/write" element={<Write />} />

          </Routes>
        </BrowserRouter>
        <Footer />
      </BackgrounColor>
    </div>
  );
};

export default App;
