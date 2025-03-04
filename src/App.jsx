import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, clicktext] = useState("this is PWA")
  function clicktestF() {
    clicktext("this is a for test1")
  }
  return (
    <>
      <h1>{text}</h1>
      <p>this a test pwa for all platforms</p>
      <button onClick={clicktestF}>click</button>
    </>
  )
}

export default App
