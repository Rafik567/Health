import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Tesak from './Components/Tesak/Tesak'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='div1'>
        <Tesak />
      </div>
    </>
  )
}

export default App
