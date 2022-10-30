import { useState, useEffect, useRef } from "react";

export default function UseRefVsUseState() {
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  });

  // const loginForm = useRef({
  //   email: "",
  //   password: "",
  // });

  function handleChange(e) {
    // loginForm.current = {
    //   ...loginForm.current,
    //   [e.target.name]: e.target.value,
    // };

    setLoginFormState({
      ...loginFormState,
      [e.target.name]: e.target.value,
    });
  }

  console.log("re rendered this component");

  return (
    <>
      <input name="email" onChange={handleChange} />
      <input name="password" onChange={handleChange} />
      <button
        onClick={() => {
          // console.log(loginForm);
          console.log(loginFormState);
        }}
      >
        Check
      </button>
    </>
  );
}
