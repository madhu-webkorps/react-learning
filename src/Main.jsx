import React, { useState, useEffect } from "react";
import * as calc from './Calculation';

export function Main() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });

  const getGreeting = () => {
    const currentHour = currentTime.getHours();
    let greetingMsg = 'Good';

    if (currentHour >= 1 && currentHour <= 11) {
      greetingMsg += ' morning';
    } else if (currentHour >= 12 && currentHour <= 17) {
      greetingMsg += ' afternoon';
    } else {
      greetingMsg += ' night';
    }

    return greetingMsg;
  };

  const msgStyle = {
    color: 'black',
  };

  return (
    <div>
      <p>Current date is <b>{currentTime.toLocaleDateString()}</b></p>
      <p>Current time is <b>{formattedTime}</b></p>
      <img src="https://picsum.photos/200/300" alt="palak" />
      <ol>
        <li>Sum of 2 and 5 is = {calc.Addition(2, 3)}</li>
        <li>one</li>
        <li>one</li>
      </ol>
      {/* <p>Hello <span style={{ ...msgStyle, color: getGreeting() === 'Good night' ? 'red' : 'blue' }}>{getGreeting()}</span></p> */}
    </div>
  );
}

export default Main;
