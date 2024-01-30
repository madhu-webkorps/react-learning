import React from 'react'
import Heading from '../Heading'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
     <Heading data = "About"/>
     <header>
        <a href="">LOGO</a>
        <nav>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/contact'>Contact</Link></li>
        </nav>
      </header>
    </>
    
  )
}

export default About