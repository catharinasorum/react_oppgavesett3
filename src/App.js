import React from 'react'
import './App.css'
import Oppmuntring from './components/Oppmuntring'
import Birds from './components/Birds'

const  App = () => {
  return (
    <div className="App">    
      <Oppmuntring navn="Rick Astley" emne="Kunsten å synge rent" />
      <Birds />
    </div>
  )
}

export default App;
