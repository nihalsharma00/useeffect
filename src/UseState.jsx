import React from 'react'
import { useState } from 'react'
import './UseState.css';
const UseState = () => {

    const[count,setCount] = useState(0)
    

  const handleIncrement=()=>{
    setCount(count + 1)
}

  const handleDecrement=()=>{
    setCount(count - 1)
}


  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default UseState;