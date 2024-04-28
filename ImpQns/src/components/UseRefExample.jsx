import React, { useRef } from 'react'
import { useState } from 'react'

function UseRefExample() {

  const [ count , setCount ] = useState(0);

  const ref = useRef(0);

  const handleRef = () =>{
    console.log(ref.current)
    ref.current = ref.current+1;
  }

  const handleState  = () => {
    setCount(count+1)
  }

  return (
    <>  
        <button ref={ref} onClick={handleRef}>
            Ref update
        </button>
        <button onClick={handleState}>
            State update
        </button>

        <div>{ref.current}</div>
        <div>{count}</div>

    </>
   
  )
}

export default UseRefExample