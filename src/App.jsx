import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TheBigGrid from './pages/grid/TheBigGrid'
import {  Route,Routes as Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home/Home'


function App() {
  
  const backgroundColor = '#151823'
  return (
    // <div className="bg-black"  style={{ backgroundColor }}>
    //    <TheBigGrid />
    // </div>
    <Router>
    <Switch>
      <Route exact path="/"  element={<Home />} />
      <Route exact path="/grid"  element={<TheBigGrid />} />
    </Switch>
  </Router>
  )
}

export default App
