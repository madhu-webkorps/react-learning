import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <header>
        <a href="">LOGO</a>
        <nav>
          <li><Link to = '/about'>Home</Link></li>
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/contact'>Contact</Link></li>
        </nav>
      </header>

    </>
  )
}

export default Home