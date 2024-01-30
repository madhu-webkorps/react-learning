import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../Heading'


const Home = () => {
  return (
    <>
     <Heading data = "Home"/>
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

export default Home