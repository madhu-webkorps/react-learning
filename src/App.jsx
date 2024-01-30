import React from 'react';
import Heading from './Heading';
// import {Main} from './Main';
// import Card from './Card';
// import data from './data';
// import {GetTime, Count} from './count';
import Hooks from './hook';
import { LoginForm } from './login';
import ApiData from './data';
import ComA from './comA';
import UseMemoExample from './useMemo';

const cardsStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}


function App() {
  return (
    <div id = 'app'>
      <Heading/>
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
      <UseMemoExample/>
    </div>
  )
}

export default App;
