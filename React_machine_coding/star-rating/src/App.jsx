import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Star from './component/Star'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Star/>
    </>
  )
}

export default App
