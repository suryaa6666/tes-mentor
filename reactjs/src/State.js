import { useState } from "react";

function State() {
  const [counter, setCounter] = useState(0);

  function Add() {
    setCounter(counter + 1);
  }

  function Less() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <div>
      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
      <h1> Number : {counter}</h1>
    </div>
  );
}

export default State;
