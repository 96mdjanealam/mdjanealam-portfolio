import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import EducationAndCourses from '../components/EducationAndCourses';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <EducationAndCourses />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
