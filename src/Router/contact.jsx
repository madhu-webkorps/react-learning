import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../Heading'

const Contact = () => {
  return (
    <>
     <Heading data = "Contact"/>
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

export default Contact