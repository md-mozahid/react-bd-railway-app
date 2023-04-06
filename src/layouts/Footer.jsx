import React from 'react'
import Logo from '../assets/img/bangladesh-railway.png'

const Footer = () => {
  return (
    <>
      <div className="bg-slate-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-5 text-lg">
          <div className="flex items-center">
            <img className="h-14" src={Logo} alt="" />
            <div className="text-center">
              <h1 className="text-2xl ml-2 font-semibold">
                Bangladesh Railway
              </h1>
              <small>Safe. Comfortable. affordable</small>
            </div>
          </div>
          <div>
            <p className="">
              <a className="text-green-700 hover:underline" href="">
                Terms and Conditions
              </a>
              <a className="text-green-700 hover:underline" href="">
                Privacy Policy
              </a>
            </p>
          </div>
          <div>
            <small className="font-semibold">Powered by</small>
            <p className="text-2xl text-green-800 font-semibold">
              Shohoz-Synesis-Vincen JV
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
