import { useState } from "react";

export default function Counter(){

  const [count,setcount] = useState(0);

  const handleClick=() => {
    const newCount= count + 1;
    setcount(newCount)
  }

  const decreaseHandle=()=>{
    const newCount=count-1;
    setcount(newCount)
  }

  return(
  <div style={{border:'2px solid yellow'}}>
    <h3>Counter: {count} </h3>
    <button onClick={handleClick}>Add</button>
    <button onClick={decreaseHandle}>Reduce</button>
  </div>
  )
}