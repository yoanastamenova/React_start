import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Declaracion de variables y funciones y codigo js
    const title = "Counter";
    // let initValue = 0;

    const [initValue, setInitValue] = useState(0)      //declare variable

    function decrement() {
         console.log("decrement")

         setInitValue(initValue - 1)

         console.log(initValue)
    }

    const increment = () => {
      console.log("increment")

      setInitValue(initValue +1)

      console.log(initValue)
    }

  return (
    <>
        <h1> {title} </h1>

        <button onClick={decrement}> - </button>
        <div> {initValue} </div>
        <button onClick={increment}> + </button>
    </>
  )
}

export default App
