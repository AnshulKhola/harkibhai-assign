import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  //wrap anyone who wants to use the teleported value i.e count with the Context.Provider

  return (
    <div>
       <CountContext.Provider value={count}>
          <Count  setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}

function Count({ setCount }) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext)
  return (
    <div>
      {count}
    </div>
  )
}


function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Increment</button> <br></br> 
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default App
