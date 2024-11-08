import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BackgrounColor from './components/BackgroundColor';
import Footer from './components/Footer';


const App = () => {
  return (
    
<div className="App">
      <BackgrounColor>
      <Header />  {/* Use the Header component here */}
      <HomePage/>
      <Footer />
      </BackgrounColor>
    </div>
  );
};

export default App;
