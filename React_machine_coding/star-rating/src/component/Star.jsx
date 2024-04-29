import React, { useEffect, useState } from 'react'

export default function Star() {
    const [clicked, setClicked] = useState({  1: false, 2 : false, 3 : false, 4 : false, 5 : false});

    const [count, setCount] = useState(0);

    console.log(clicked)

    const handleSelection = e =>{
        let value = e.target.getAttribute("value");
        console.log(e.target.getAttribute("value"))
        setClicked((prev) => {return {...prev, [value] : !prev[value]}})
    }

    useEffect(() => {
        let cnt = 0;
        for(let i in clicked){
            if(clicked[i]) cnt++;
        }
        setCount(cnt);
    }, [clicked])

  return (
        <div className='starContainer'>
            <h2>Rate us</h2>
            {   
                <div>
                    <div value ="1" onClick = {(e) => handleSelection(e)}>⭐</div>
                    <div value ="2" onClick = {(e) => handleSelection(e)}>⭐</div>
                    <div value ="3" onClick = {(e) => handleSelection(e)}>⭐</div>
                    <div value ="4" onClick = {(e) => handleSelection(e)}>⭐</div>
                    <div value ="5" onClick = {(e) => handleSelection(e)}>⭐</div>
                </div>
            }
            <>you rated {count} stars</>
        </div>
  )
}
