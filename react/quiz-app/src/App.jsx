import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import data from './constants/questions';
import QuestionCard from './components/QuestionCard';

function App() {
  return (
    <>
      Quiz app
      <QuestionCard data={data}/>
    </>
  )
}

export default App
