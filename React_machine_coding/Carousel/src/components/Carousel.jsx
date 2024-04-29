import React, { useEffect, useState } from 'react'
import CarouselItem from './CarouselItem'

function Carousel(props) {

  const { data, activeId, handlePrev, handleNext } = props;

  const [maxLen, setMaxLen] = useState(0);

  useEffect(()=>{
    setMaxLen(data && data.length)
  }, [data])

//   console.log(props)
  return (<>
    {/* {
        data.length && <CarouselItem/>
    } */}
    {
        data && data.length && 
        data.map( (element, idx) => <CarouselItem show={activeId===element.id} 
                                                  key = {element.id} 
                                                  item = {element}
                                                  handleNext = {handleNext}
                                                  handlePrev = {handlePrev}
                                                  maxLen = {maxLen}
                                    />)
    }
    </>
    
  )
}

export default Carousel