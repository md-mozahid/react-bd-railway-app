import React, { useContext, useState } from 'react'
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
import { AuthContext } from '../contextApi/AuthContext'

const MainNavbar = () => {
  const [toggle, setToggle] = useState(false)
  const { logout, user } = useContext(AuthContext)

  // console.log(user.username)
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

            {!user && (
              <>
                <Link to="login">Login</Link>
                <Link to="register">Register</Link>
              </>
            )}
            {user && (
              <>
                <Link to="information">Train Information</Link>
                <Link to="contact">Contact Us</Link>
              </>
            )}
          </div>

          <div className="relative">
            {user && (
              <button
                className="rounded bg-slate-100 w-52 px-3 py-2 uppercase"
                onClick={() => setToggle(!toggle)}>
                {toggle ? user.username : user.username}
              </button>
            )}

            <div className="absolute">
              {toggle && (
                <div className="w-68 mt-2 leading-10 bg-gradient-to-r from-cyan-500 to-blue-400 px-5 pb-2 rounded-md ">
                  <h2 className="pt-0 uppercase">
                    {user ? user.username : 'null'}
                  </h2>
                  <div className="flex items-center mx-auto gap-4 ">
                    <i className="">
                      <MdEmail />
                    </i>
                    <i className="">ce.muzahid@gmail.com</i>
                  </div>
                  <div className="flex items-center mx-auto gap-4">
                    <i>
                      <MdPhoneIphone />
                    </i>
                    <i>Mobile Number</i>
                  </div>
                  <hr />
                  <div className="flex items-center mx-auto gap-4">
                    <i>
                      <MdAccountCircle />
                    </i>
                    <i>Profile</i>
                  </div>
                  <div className="flex items-center mx-auto gap-4">
                    <i>
                      <MdCardTravel />
                    </i>
                    <i>Purchase History</i>
                  </div>
                  <div className="flex items-center mx-auto gap-4">
                    <i>
                      <MdPassword />
                    </i>
                    <i>Update Password</i>
                  </div>
                  <div className="flex items-center mx-auto gap-4">
                    <i>
                      <MdLogout />
                    </i>
                    <Link to="/login" onClick={logout}>
                      Logout
                    </Link>
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
