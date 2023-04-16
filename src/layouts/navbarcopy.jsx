import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/bangladesh-railway.png'
// import { MdAccountCircle } from "react-icons/md";

const MainNavbar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div className="bg-slate-300">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 text-lg">
          <div className="flex items-center w-96">
            <img className="h-16" src={Logo} alt="" />
            <h1 className="text-xl ml-2 font-semibold">
              Bangladesh <br /> Railway
            </h1>
          </div>
          <div className="space-x-5">
            <Link className="" to="home">
              Home
            </Link>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
            <Link to="information">Train Information</Link>
            <Link to="contact">Contact Us</Link>
            <button
              className="rounded bg-slate-100 w-52 px-3 py-2"
              onClick={() => setToggle(!toggle)}>
              {toggle ? 'MUZAHID' : 'MUZAHID'}
            </button>
          </div>
        </nav>
        {toggle && (
          <div>
            <h2>User Name</h2>
            <div>
              <p>Email</p>
            </div>
            <div>
              <p>Phone</p>
            </div>
            <hr />
            <div>
              <i>{/* <MdAccountCircle />{" "} */}</i>
              <p>Profile</p>
            </div>
            <div>
              <i></i>
              <p>Purchase History</p>
            </div>
            <div>
              <i></i>
              <p>Update Password</p>
            </div>
            <div>
              <i></i>
              <p>Logout</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MainNavbar
