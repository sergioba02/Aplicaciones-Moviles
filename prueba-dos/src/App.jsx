import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ejemplo from './ejemplo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Mensaje de prueba</h1>
      <Ejemplo/>
    </>
  )
}

export default App
