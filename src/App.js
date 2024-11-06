import React from 'react';
import './styles.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
//import BlogList from './BlogList';
//import Footer from './Footer';

const App = () => {
  return (
    
<div className="App">
    <link rel="stylesheet" href="src/styles.css"></link>
      <Header />  {/* Use the Header component here */}
      <HomePage/>
    </div>
  );
};

export default App;
