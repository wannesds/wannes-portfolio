import React from 'react';
import './App.scss';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Content from '../components/Content';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Content/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
