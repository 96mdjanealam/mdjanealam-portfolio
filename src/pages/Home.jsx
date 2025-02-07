import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import EducationAndCourses from '../components/EducationAndCourses'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <EducationAndCourses></EducationAndCourses>
        <Projects></Projects>
    </div>
  )
}

export default Home