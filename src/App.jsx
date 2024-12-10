import React from 'react'
import { useState } from 'react';


const App = () => {

  const[count, setCount] = useState(0);
 

  const IncreseHandle = () => {
    setCount((count) => count + 1);
    console.log(count); 
  }


  return (
    <>
    <div className="container">
     <h1>Counter: {count}</h1>
    <div>
      <button className="animated-btn" onClick={() => IncreseHandle()}>Increase</button>
      <button className="animated-btn" onClick={() => setCount((count) => count - 1) }>Decrease</button>
      <button className="animated-btn" onClick={() => setCount((count) => 0)}>Reset</button>

      <button className="animated-btn" onClick={() => setCount((count) => count+5)}>Plus5Increse</button>
      </div>
    </div>
    </>

    
  )
}

export default App;