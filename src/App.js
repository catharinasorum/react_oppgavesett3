import React from 'react'
import './App.css'
import Oppmuntring from './components/Oppmuntring'
import Birds from './components/Birds'
import Gud from './components/Gud'

const  App = () => {

  const birds = ["seagull", "hummingbird", "blackbird", "parakeet"]
  
  const guder = [
    {navn: "Balder", besk: "Ås, gud for lys, skjønnhet, kjærlighet og lykke"},
    {navn: "Brage", besk: "Ås, gud for diktning, veltalenhet og skaldekunst"},
    {navn: "Eir", besk: "Gudinne for legekunsten, en av Menglads Frøyas?) ni møyer"},
    {navn: "Frøya", besk: "Vane, fruktbarhetsgudinne"}
  ]

  return (
    <div className="App">    
      <Oppmuntring navn="Rick Astley" emne="Kunsten å synge rent" />
      {birds.map(bird => <Birds bird={bird}/>)}
      <h2>Norrøne guder</h2>
      {guder.map(gud => <Gud navn={gud.navn} besk={gud.besk}/>)}
    </div>
  )
}

export default App;
