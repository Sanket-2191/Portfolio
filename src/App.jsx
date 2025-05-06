import { useState } from 'react'
import './App.css'
import About from './components/About/About.jsx'
import { DETAILS } from './data/Details.js'

function App() {
  return (
    <>
      <About details={DETAILS} />
    </>
  )
}

export default App


