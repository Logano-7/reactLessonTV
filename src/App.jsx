import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Favorite Tv Lists</h1>
      <p>React Intro Lesson</p>
      <ol className='list'>
        <li>Psych</li>
        <li>Chuck</li>
        <li>Bones</li>
        <li>Brooklyn 99</li>
        <li>Doctor Who</li>
        <li>Friends</li>
        <li>How I met your Mother</li>
        <li>Big Bang Theory</li>
        <li>Fresh Prince of Bel Air</li>
        <li>Blacklist</li>
      </ol>
    </>
  )
}

export default App
