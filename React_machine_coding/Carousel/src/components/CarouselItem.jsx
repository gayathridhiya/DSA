import React from 'react'


//format
// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// }

function CarouselItem( props) {

  const { id, title, url } = props.item;

  const { show } = props;

//   console.log(props)

  return (<>
    {
        show && (<div>
                    <h2>{title}</h2>
                    <img crossorigin src={url} alt="carousel_item"/>
                </div>)
    }
     </>
    
  )
}

export default CarouselItem