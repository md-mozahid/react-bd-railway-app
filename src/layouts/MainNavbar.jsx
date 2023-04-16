import React, { useState } from 'react'
import {
  MdAccountCircle,
  MdCardTravel,
  MdEmail,
  MdLogout,
  MdPassword,
  MdPhoneIphone,
} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/bangladesh-railway.png'

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
          </div>
          <div className="relative">
            <button
              className="rounded bg-slate-100 w-52 px-3 py-2"
              onClick={() => setToggle(!toggle)}>
              {toggle ? 'MUZAHID' : 'MUZAHID'}
            </button>
            <div className="absolute">
              {toggle && (
                <div className="w-72 mt-2 leading-10 bg-gradient-to-r from-cyan-500 to-blue-400 p-5 rounded-sm ">
                  <h2 className="">Md Muzahid</h2>
                  <div className="flex items-center content-center gap-4 ">
                    <i>
                      <MdEmail />
                    </i>
                    <p>ce.muzahid@gmail.com</p>
                  </div>
                  <div className="">
                    <i>
                      <MdPhoneIphone />
                    </i>
                    <p>Phone</p>
                  </div>
                  <hr />
                  <div className="">
                    <i>
                      <MdAccountCircle />
                    </i>
                    <p>Profile</p>
                  </div>
                  <div>
                    <i>
                      <MdCardTravel />
                    </i>
                    <p>Purchase History</p>
                  </div>
                  <div>
                    <i>
                      <MdPassword />
                    </i>
                    <p>Update Password</p>
                  </div>
                  <div>
                    <i>
                      <MdLogout />
                    </i>
                    <p>Logout</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MainNavbar
