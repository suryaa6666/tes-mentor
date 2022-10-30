import { useState } from "react";

function State() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Tambahkan Angka</button>
    </>
  );
}

export default State;
