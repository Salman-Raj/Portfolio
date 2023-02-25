import React from 'react';
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';

import './App.css'



const App = () => {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Skills/>
      <Qualifications/>
      <Contact />
    </main>
    
  );
};

export default App;