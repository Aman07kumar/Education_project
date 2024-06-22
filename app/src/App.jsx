import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/auth/signup'
import Login from './pages/auth/login'
import Home from './pages/homePage/home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login/>} exact/>
        <Route path='/users/login' element={<Login/>} exact/>
        <Route path='/users/signup' element={<Signup/>} exact/>
      </Routes>
    </Router>
  )
}

export default App
