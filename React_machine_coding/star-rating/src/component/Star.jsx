import React, { useEffect, useState } from 'react'

export default function Star() {
    const [clicked, setClicked] = useState({  1: false, 2 : false, 3 : false, 4 : false, 5 : false});

    const [count, setCount] = useState(0);

    console.log(clicked)

    // const handleSelection = e =>{
    //     let value = e.target.getAttribute("value");
    //     console.log(e.target.getAttribute("value"))
    //     setClicked((prev) => {return {...prev, [value] : !prev[value]}})
    // }

    // useEffect(() => {
    //     let cnt = 0;
    //     for(let i in clicked){
    //         if(clicked[i]) cnt++;
    //     }
    //     setCount(cnt);
    // }, [clicked])

    const handleSelection = (id) => {
        setCount(id)
    }

  return (
        <div className='starContainer'>
            <h2>Rate us</h2>
  
            <div className='starContent'>

                {
                    Array.from({length : 5}).map( (curr, idx) => <div value={idx+1} onClick = {() => handleSelection(idx+1)}>⭐</div>)
                }
                {/* <div value ="1" className={clicked[1] ? "rated" : null} onClick = {(e) => handleSelection(e)}>⭐</div>
                <div value ="2" className={clicked[2] ? "rated" : null} onClick = {(e) => handleSelection(e)}>⭐</div>
                <div value ="3" className={clicked[3] ? "rated" : null} onClick = {(e) => handleSelection(e)}>⭐</div>
                <div value ="4" className={clicked[4] ? "rated" : null} onClick = {(e) => handleSelection(e)}>⭐</div>
                <div value ="5" className={clicked[5] ? "rated" : null} onClick = {(e) => handleSelection(e)}>⭐</div> */}
            </div>

            <>you rated {count} stars</>
        </div>
  )
}
