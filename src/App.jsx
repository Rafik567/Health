import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Tesak from './Components/Tesak/Tesak'
import Advanture from './Components/Advanture/Advanture'
import Plan from './Components/Plan/Plan'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='div1'>
        <Tesak />
      </div>
      <Advanture/>
      <Plan/>
      <Footer/>
    </>
  )
}

export default App
