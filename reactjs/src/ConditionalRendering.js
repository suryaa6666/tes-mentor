import { useState } from "react";

function ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(true);

  return <>{isVisible && <Component1 />}</>;
}

function Component1() {
  return <h1>Component 1</h1>;
}

function Component2() {
  return <h1>Component 2</h1>;
}

export default ConditionalRendering;
