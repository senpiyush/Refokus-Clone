import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 text-white'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App