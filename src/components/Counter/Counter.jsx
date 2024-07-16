import React, { useState } from "react";
import { CButton } from "../CButton/CButton";
import { Title } from "../Title/Title";


export const Counter = () => {
  // Declaracion de variables y funciones y codigo js
  const title = "Counter";
  // let initValue = 0;

  const [initValue, setInitValue] = useState(0); //declare variable

  function decrement() {
    if (initValue === 0) {
      alert("Value cannot be under 0");
    } else {
      console.log("decrement");

      setInitValue(initValue - 1);

      console.log(initValue);
    }
  }

  const increment = () => {
    console.log("increment");

    setInitValue(initValue + 1);

    console.log(initValue);
  };

  const reset = () => {
    setInitValue(0);
  };
  return (
    <>
      <Title name="Counter" />

      <CButton content="+" onclick={increment} clase="button-success" />
      <div> {initValue} </div>
      <CButton content="-" onclick={decrement} clase="button-decrement" />
      <br></br>
      <br></br>
      <CButton content="Reset counter" onclick={reset} clase="button-reset" />
    </>
  );
};
