// src/App.js
import React from 'react';
import './App.css';
import Experience from "./components/experience";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Education from "./components/education";
import Projects from "./components/projects";
import Certifications from "./components/certification";

const App = () => {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Mugunthan Ramesh</h1>
          <div className="contact-details">
            <p className="contact-details">
              +91-9789772721 / +91-7667432789 | mugunthanramesh6@gmail.com | <a href="https://www.linkedin.com/in/mugunthan-ramesh">mugunthan-ramesh</a> | Pudukkottai
            </p>
          </div>
        </header>
        <section id="about">
          <h2>About Me</h2>
          <Intro/>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <Experience/>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <Skills/>
        </section>

        <section id="education">
          <h2>Education</h2>
          <Education/>
        </section>

        <section id="projects">
          <h2>Academic Projects</h2>
          <Projects/>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>
          <Certifications/>
        </section>
      </div>
  );
}

export default App;
