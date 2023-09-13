import { useState } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Memorable Water Bottle</h1>
      <Bottles></Bottles>
    </>
  )
}

export default App
