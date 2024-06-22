import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1)
    console.log("value added")
  }

  const reduceValue = () => {
    setCounter(counter - 1)
    console.log("value reduced")
  }

  return (
    <>
      <h1>Chai aur  React</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add a Value</button>
      <br />
      <button onClick={reduceValue}>Reduce a Value</button>
    </>
  )
}

export default App
