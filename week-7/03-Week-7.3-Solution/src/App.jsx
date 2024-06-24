import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

function App() {
  return (
    <>
       <RecoilRoot>
        <Count/>
       </RecoilRoot>
    </>
  )
}

function Count() {
  return (
    <div>
      <CountRenderer/>
      <Buttons/>
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons() {
  const [count,setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
