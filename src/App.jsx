import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import DropDown from './layouts/DropDown'
import Footer from './layouts/Footer'
import MainNavbar from './layouts/MainNavbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import TrainInformation from './pages/TrainInformation'

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="information" element={<TrainInformation />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="dropdown" element={<DropDown />} /> */}
      </Routes>
      <Footer />
      <ToastContainer autoClose={1000} hideProgressBar="true" theme="colored" />
    </>
  )
}

export default App
