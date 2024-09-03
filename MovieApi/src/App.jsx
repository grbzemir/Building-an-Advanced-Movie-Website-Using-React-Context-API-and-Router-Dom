import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <Router>
      <Header />
    </Router>
  )
}

export default App
