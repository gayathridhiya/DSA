import React, { useState } from 'react'

export default function FomOnlyOneState() {
  const [name, setName]  = useState({});

  return (
    <>
    <div>FomOnlyOneState</div>
    <div>
    <input type="text" placeholder='FirstName' value={name.firstName} onChange={(e) => setName( (prevState)  => {return {...prevState, firstName : e.target.value}})}></input>
    <input type="text" placeholder='LastName' value={name.lastName} onChange={(e) => setName( (prevState)  => {return {...prevState, lastName : e.target.value}})}></input>
    </div>

    <div>
        {
            name.firstName
        }
        {
            name.lastName
        }
    </div>
    
    </>
    
  )
}
