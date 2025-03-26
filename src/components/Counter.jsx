import { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);
    let localVar = 0;
    const updateStateAndLocal = () => {
    localVar += 1;
    setCount(count += 1);
    console.log(localVar);
  }
  console.log(count);
  return(
    <>
    <h1>State: {count} </h1>
    <h1>Local Var: {localVar} </h1>
    <button onClick={() => updateStateAndLocal()}>Add</button>
    </>
  )
}

export default Counter