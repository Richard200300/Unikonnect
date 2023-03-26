import React from "react"
import { Routes, Route } from "react-router-dom"
import Head from "./head";
import Sell from "./components/sell"
import Innertrend from './innertrend'
function App () {

  return (
    <div>
        <Routes>
        <Route path="/" element={ <Head/> } />
        <Route path="/trend/:cat/:id" element={ <Innertrend/> } />
        <Route path="/sell" element={ <Sell/> } />
        
      </Routes>

    </div>
  )
}

export default App;