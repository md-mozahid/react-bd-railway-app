import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import Logo from '../assets/img/verify-nid-illustration.svg'

const Register = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className="bg-zinc-200 h-screen">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl py-5">Registration</h1>
        <hr className='py-5'/>
        <div className="flex flex-col justify-center items-center">
          <hr />
          <div className="flex flex-col justify-center items-center w-96 mx-auto">
            <img src={Logo} alt="" />
            <h1 className="text-3xl font-semibold pt-5 pb-3">
              Please Verify Your NID
            </h1>
            <p className="pb-5">
              Enter the information below to verify and register your NID with
              Bangladesh Railway Ticketing Service If your NID is verified
              through SMS, please use the details used during the SMS
              verification.
            </p>
          </div>
          <div className="bg-zinc-100 w-96 rounded-md p-4 text-center">
            <form>
              <div>
                <input
                  className="inputText bg-gray-200"
                  type="text"
                  placeholder="Enter your mobile number"
                />
                <input
                  className="inputText bg-gray-200"
                  type="text"
                  placeholder="Enter your NID number"
                />
                <ReactDatePicker
                  className="inputText"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/mm/yyyy"
                  isClearable
                  showYearDropdown
                  scrollableYearDropdown
                  placeholder="Pic a date"
                />
                <button className="btn-primary btn-fw">VERIFY</button>
                <p className="pt-5">
                  If you are under 18 years old or a foreign passport holder,
                  you can register with your birth certificate or passport by
                  clicking the submit data button.
                </p>
                <button className="btn-primary-outline btn-fw text-green-600">
                  SUBMIT DATA
                </button>
                <p className="pt-6">
                  <a className="text-green-700 hover:underline" href="">
                    Already Registered?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
