import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./lib/fontawesome/css/all.min.css"
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WatchList from './Components/WatchList'
import Watched from './Components/Watched'
import Add from './Components/Add'

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  )
}

export default App
