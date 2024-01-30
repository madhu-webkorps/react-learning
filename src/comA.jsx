import React, { createContext } from 'react';
import ComB from './ComB';

const FirstName = createContext();
const LastName = createContext();

const ComA = () => {
    
  return (
    <>
    <FirstName.Provider value = 'madhu'>
      <LastName.Provider value = 'patel'>
        <ComB/>
      </LastName.Provider>
    </FirstName.Provider>
    </>
    // 
  );

}
export {FirstName , LastName};
export default ComA;
