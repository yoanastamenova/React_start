import "./App.css";
import { Counter } from "./components/Counter/Counter";

function App() {
  // the title imported below is the component we have in the components folder
  return (
    <>
      {/* /* <Title name="Counter"/>                 

      {/* <button onClick={decrement}> - </button>    
      <CButton content="+" onclick={increment} clase="button-success"/>             
      <div> {initValue} </div>
      {/* <button onClick={increment}> + </button>  content(name of the prop) and onclick(function) 
      <CButton content="-" onclick={decrement} clase="button-decrement"/>
      <br></br>
      <br></br>
      <CButton content="Reset counter" onclick={reset} clase="button-reset" /> */} 

      <Counter />
    </>
  );
}

export default App;
