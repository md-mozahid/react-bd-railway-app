import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/bangladesh-railway.png'
// import LogoBg from '../assets/img/login-page-bg.svg'

const Login = () => {
  return (
    <div className="bg-zinc-300 h-screen">
      <div className="flex flex-col justify-center items-center ">
        <img src={Logo} alt="" />
        <h1 className="text-3xl font-semibold pt-5 pb-3">Bangladesh Railway</h1>
        <small className="pb-5">Safe * Comfortable * Save</small>
        <div className="bg-zinc-100 w-72 rounded-md p-4 shadow-md">
          <form action="">
            <div className="flex justify-between pb-4">
              <a href="">Forgot password</a>
              <a href="">Need help</a>
            </div>
            <div>
              <input
                className="inputText bg-gray-200"
                type="text"
                placeholder="Enter your mobile number"
              />
              <input
                className="inputText bg-gray-200"
                type="password"
                placeholder="Enter your password"
              />
              <button className="btn-primary btn-fw">LOGIN</button>
              <p className="text-center text-gray-400 pt-3">OR</p>
              <p className="text-center text-green-700 underline ">
                <Link to="/register">REGISTER</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
