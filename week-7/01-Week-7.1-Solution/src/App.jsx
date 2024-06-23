import React, { Suspense, useState } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
// import Landing from './components/Landing'
// import Dashboard from './components/Dashboard'
const Landing  = lazy(()=> import ('./components/Landing'));
const Dashboard  = lazy(()=> import ('./components/Dashboard'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Appbar/>
      <Routes>
        {/* Now Suspense Api is usefull as there is some time when we load some data in the pages which make them slow so we add suspense api as when new page is loading it shows loading... on the sreen */}
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/')}>Landing</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </>
  )
}

export default App
