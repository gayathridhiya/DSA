import React from 'react'
import CarouselItem from './CarouselItem'

function Carousel(props) {

  const { data, activeId } = props; 
//   console.log(props)
  return (<>
    {/* {
        data.length && <CarouselItem/>
    } */}
    {
        data && data.length && 
        data.map( (element, idx) => <CarouselItem show={activeId===element.id} key = {element.id} item = {element}/>)
    }
    </>
    
  )
}

export default Carousel