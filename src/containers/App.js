import React from 'react';
import './App.scss';
import Home from '../components/home/Home';
import Content from '../components/content/Content';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import About from '../components/About';

function App() {

  return (
    <div className="App">
      <Home/>
      <Content/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
