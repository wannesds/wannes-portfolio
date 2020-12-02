import React from 'react';
import './App.scss';
import Home from '../components/Home';
import Content from '../components/Content';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from '../components/About';

function App() {

  return (
    <div className="App">
      <Home/>
      <About/>
      <Content/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;