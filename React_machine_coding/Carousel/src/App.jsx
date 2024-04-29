import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/Carousel'

function App() {
  //fake api - https://jsonplaceholder.typicode.com/albums?_limit=10

  const [data, setData] = useState([]);

  const [activeId, setactiveId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then( response => response.json())
    .then( response => { console.log(response); setData(response) })
    .catch(  error =>  {
      console.log(error)
    })

  }, [])

  useEffect(() => {
    setactiveId(data[0]?.id ?? data[0]?.id)
  }, [data])

  //photo format:
    // {
    //   "albumId": 1,
    //   "id": 1,
    //   "title": "accusamus beatae ad facilis cum similique qui sunt",
    //   "url": "https://via.placeholder.com/600/92c952",
    //   "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    // },


  return (
    <>
     <Carousel
      data = {data}
      activeId = {activeId}
     />
    </>
  )
}

export default App
