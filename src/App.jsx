import React from 'react';
import Heading from './Heading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {Main} from './Main';
// import Card from './Card';
// import data from './data';
// import {GetTime, Count} from './count';
// import Hooks from './hook';
// import { LoginForm } from './login';
// import ApiData from './data';
// import ComA from './comA';
import Home from './Router/home';
import About from './Router/about';
import Contact from './Router/contact';

const cardsStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}


function App() {
  return (
    <div id='app'>
      {/* <div className='cards' style={cardsStyle}>
        {
          data.map((val) => {
            return (
              <Card
                key={val.id}
                src={val.src}
                title={val.title}
                text={val.text}
                link={val.link}
              />)
          }
          )
        }
      </div> */}
      {/* <Main/> */}
      {/* <Greeting/> */}
      {/* <LoginForm/> */}
      {/* <Hooks/> */}
      {/* <ApiData/> */}
      {/* <ComA/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element = { <About/>} />
          <Route path='/contact' element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
