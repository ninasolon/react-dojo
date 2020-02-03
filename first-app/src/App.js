import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = value => {
    setCounter(counter + value);
  };

  return (
    <div className="counter">
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={() => handleClick(20)}>+20</button>
      <p>{counter}</p>
      <button onClick={() => handleClick(-1)}>-1</button>
      <button onClick={() => handleClick(-10)}>-10</button>
      <button onClick={() => handleClick(-20)}>-20</button>
    </div>
  );
}

export default App;
