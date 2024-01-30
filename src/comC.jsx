import React, { useContext } from 'react';
import {FirstName, LastName} from './comA'


const ComC = () => {
  let fname = useContext(FirstName);
  let lname = useContext(LastName);

  return (
    <h1>my name is {fname} {lname}</h1>
  );

}

export default ComC;