import React, { useEffect, useState } from "react";
import './index.css'


const GetTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString())

  return (
    <div>
      <h1>{currentTime}</h1>
      <button onClick={() => setCurrentTime(new Date().toLocaleString())}>Get Time</button>
    </div>
  )
};

const UpdateCounter = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h3>Increment count value</h3>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

const DigitalClock = () => {
  let time = new Date().toLocaleString()
  const [currentTime, setCurrentTime] = useState(time)
  setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000)
  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  )
}

// Use Effect example
const AlertAfterClick = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${num1} times`;
  }, ([num1]));

  return (
    <>
     <button onClick={() => setNum1(num1 + 1)}>See Effect {num1}</button>
     <button onClick={() => setNum2(num2 + 1)}>See Effect2 - {num2}</button>

    </>
  )

}



const Hooks = () => {
  return (
    <div id='count'>
      {/* <UpdateCounter/> */}
      {/* <GetTime/> */}
      {/* <DigitalClock/> */}
      <AlertAfterClick/>
    </div>
  )
}
export default Hooks;