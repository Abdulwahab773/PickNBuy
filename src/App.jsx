import { useState } from 'react'
import './App.css'
import HomePage from './pages/homePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage'
import SignupPage from './pages/signupPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      


    </Routes>
  )
}

export default App
