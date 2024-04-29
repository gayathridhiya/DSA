import React, { useEffect, useRef, useState } from 'react'
// import CarouselItem from './CarouselItem';
import '../index.css';

function Carousel(props) {

  const { data, activeId, handlePrev, handleNext , imageLimit} = props;

  const [maxLen, setMaxLen] = useState(0);

  const [imageWidth, setImageWidth] = useState(0);

  const ref = useRef(600);

  useEffect(()=>{
    setMaxLen(data && data.length)
  }, [data])

  console.log(imageWidth)
//   console.log(props)
  return (
    <>
  <div className='carouselContainer' style={{width : imageWidth * imageLimit}}>
  
    {
        data && data.length && 
        data.map( (element, idx) => 
        ( 
            <div key= {element.id} className='carouselitem' style={{transform: `translateX(${activeId*imageWidth}px)`}}>
                <h2>{element.id}, {element.title}</h2>
                <img ref={ref} onLoad={ () => setImageWidth(ref?.current?.offsetWidth) } crossorigin src={element.url} alt="carousel_item"/>
                <br/>
            </div>) 
        )
        
        // <CarouselItem 
        //                                           ref = {ref}
        //                                         //   show={activeId===element.id} 
        //                                           key = {element.id} 
        //                                           item = {element}
        //                                           handleNext = {handleNext}
        //                                           handlePrev = {handlePrev}
        //                                           maxLen = {maxLen}
        //                             />)
    }

    <button className="btn-prev" onClick={handlePrev}>Previous</button>
    <button className="btn-next" onClick={handleNext}>Next</button>

    
    </div>
    </>
    
  )
}

export default Carousel