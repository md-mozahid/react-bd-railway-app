import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainNavbar from './layouts/MainNavbar'
import Footer from './layouts/Footer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import TrainInformation from './pages/TrainInformation'

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="information" element={<TrainInformation />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
