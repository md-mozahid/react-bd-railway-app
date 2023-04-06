import React from 'react'
import Logo from '../assets/img/bangladesh-railway.png'
// import { MdAccountCircle } from "react-icons/md";

const MainNavbar = () => {
  return (
    <>
      <div className="bg-gray-500">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 text-lg ">
          <div className="flex items-center w-96">
            <img className="h-16" src={Logo} alt="" />
            <h1 className="text-xl ml-2 font-semibold">
              Bangladesh <br /> Railway
            </h1>
          </div>
          <div className="space-x-5">
            <a href="">Home</a>
            <a href="">Verify Ticket</a>
            <a href="">Train Information</a>
            <a href="">Contact Us</a>
            <button className="rounded bg-slate-100 w-52 px-3 py-2">
              Md Mozahid
              {/* <div>
                <h2>User Name</h2>
                <div>
                  <p>Email</p>
                </div>
                <div>
                  <p>Phone</p>
                </div>
                <hr />
                <div>
                  <i>
                    {" "}
                    <MdAccountCircle />{" "}
                  </i>
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
              </div> */}
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MainNavbar
