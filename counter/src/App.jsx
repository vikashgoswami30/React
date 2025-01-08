import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let [counter, setCounter] = useState(0)
 // let counter = 5

  const addValue=()=>{
    counter = counter + 1
    if(counter>=0 && counter<=10)
    setCounter(counter)
  }
  
  const removeValue=()=>{
    counter = counter - 1;
    if(counter>=0){
      setCounter(counter)      
    }
  }
  return (
    <>
      <h1>React sikhlo guys</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue} 
      >Add values {counter}</button><br /><br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
