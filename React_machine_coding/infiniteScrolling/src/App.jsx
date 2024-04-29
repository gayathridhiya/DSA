import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfiniteScrolling from './component/InfiniteScrolling'

function App() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState([]);
  const [ param, setParam] = useState(1);
  const [ loading, setloading] = useState(false);


  const fetchData = () =>{
    setloading(true);
    fetch(`https://dummyjson.com/products?limit=${param * 10}`)
    .then( res => res.json())
    .then( data => { setdata(data.products); setloading(false); setParam( prev => prev+1)})
    .catch( error => {console.log(error)}) 
    
  }
  
  useEffect( () => {
    fetchData();
    setParam( prev => prev+1);
  }, [])

  const throttleFn = (callback, delay) => {
    let timer;
    return function (...args){
      clearTimeout(timer);
      timer = setTimeout(() => { callback() }, delay)
    }
  }

  const handleScroll =  throttleFn(()=> {
    if(((window.innerHeight + document.documentElement.scrollTop + 500) > document.documentElement.offsetHeight ) && !loading){
      // console.log("Hi")
     fetchData();
      
    }
    }, 100)

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => window.removeEventListener("scroll", () => { console.log("removed")})
  }, [handleScroll])

  return (
    <>
      <InfiniteScrolling data={data}/>
    </>
  )
}

export default App
