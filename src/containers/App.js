import React from 'react';
import './App.scss';
import Home from '../components/home/Home';
import About from '../components/about/About';
import ContentContainer from '../components/content/ContentContainer';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Home/>
      <About/>
      <ContentContainer/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
