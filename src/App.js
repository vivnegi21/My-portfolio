import React from 'react';
import './App.css';

//COMPONENTS
import Projects from "./components/Projects/projects";
import Contact from './components/Contact/contact';
import Sidebar from './components/Sidebar/sidebar';
import Home from './components/Home/home';
import About from './components/About/about';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
import Achievements from './components/Achievements/achievements';
import Skills from "./components/Skills/skills";

function App() {
  return (
    <>
      <Sidebar/>
      <main className = "main">
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Experience/>
        <Projects/>
        <Achievements/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
