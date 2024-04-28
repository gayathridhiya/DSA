import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HOC from './components/HOC';
import Counter from './components/Counter';
import FomOnlyOneState from './components/FomOnlyOneState';
import UseRefExample from './components/UseRefExample';

function App() {
  const [count, setCount] = useState(0);
  const WithLogger = HOC(Counter)
  return (
    <>
     {/* <WithLogger/> */}
     {/* <FomOnlyOneState/> */}
     <UseRefExample/>
    </>
  )
}

export default App
