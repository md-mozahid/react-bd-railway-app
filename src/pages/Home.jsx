import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import imageInstruction from '../assets/img/instruction-section.png'
import imagePay from '../assets/img/pay.svg'
import imageSearch from '../assets/img/search.svg'
import imageSelect from '../assets/img/select.svg'
import image from '../assets/img/train-illustration-for-train-1.jpg'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <>
      <div className="bg-slate-200 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-around items-center px-6 py-5  gap-10">
            <div className="">
              <div className="grid grid-cols-2 gap-10">
                <div className="">
                  <label>From</label>
                  <input
                    className="inputText"
                    type="text"
                    placeholder="From station"
                  />
                </div>
                <div className="">
                  <label>To</label>
                  <input
                    className="inputText"
                    type="text"
                    placeholder="To station"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label htmlFor="">Date of Journey</label>
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
                </div>
                <div>
                  <label htmlFor="">Choose a Class</label>
                  <select className="inputText" name="" id="">
                    <option value="">option 1</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary btn-fw">
                Search Train
              </button>
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
          <hr />
          <div>
            <h1 className="text-center text-2xl py-8">
              Last updated on 06/04/2023 11:57
            </h1>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <div className="bg-green-300 flex justify-around items-center py-3 rounded-t-md">
                  <p>Available Tickets*</p>
                  <p>06/04/2023</p>
                </div>
                <div className="bg-slate-300 flex justify-around items-center py-3 rounded-b-md">
                  <p>
                    Combined Tickets <br /> (Online & Offline)
                  </p>
                  <h1 className="text-2xl">59467</h1>
                </div>
              </div>
              <div>
                <div className="bg-slate-300 flex justify-around items-center py-3 rounded-t-md">
                  <p>Logged In User</p>
                </div>
                <div className="bg-green-300 flex justify-around items-center py-3 rounded-b-md">
                  <p>Web & App</p>
                  <h1 className="text-2xl">1182853</h1>
                </div>
              </div>
            </div>
          </div>
          <hr className="py-10" />
          <div className="grid grid-cols-3 gap-20">
            <div className="grid grid-rows-1 justify-center">
              <img src={imageSearch} alt="Search" />
              <div>
                <h1 className="text-2xl">Search</h1>
                <p>
                  Choose your origin, destination, journey dates and search for
                  trains
                </p>
              </div>
            </div>
            <div className="grid grid-rows-1 justify-center">
              <img src={imageSelect} alt="Select" />
              <div>
                <h1 className="text-2xl">Select</h1>
                <p>Select your desired trip and choose your seats</p>
              </div>
            </div>
            <div className="grid grid-rows-1 justify-center">
              <img src={imagePay} alt="Pay" />
              <div>
                <h1 className="text-2xl">Pay</h1>
                <p>Pay for the tickets via Debit / Credit Cards or MFS</p>
              </div>
            </div>
          </div>

          <hr className="py-10" />

          <div className="grid grid-cols-2 py-10">
            <div>
              <img src={imageInstruction} alt="Instruction" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <i className="">
                  <FaArrowAltCircleRight />
                </i>
                <p>Tickets can be bought online ten days in advance.</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="">
                  <FaArrowAltCircleRight />
                </i>
                <p>
                  You can pay for the tickets using mobile financial services:
                  bKash, Nagad, Rocket or debit/credit cards: Mastercard, Visa,
                  DBBL Nexus. Other payment options will be available soon.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <i className="">
                  <FaArrowAltCircleRight />
                </i>
                <p>
                  In case of payment or transaction failure, the deducted amount
                  would be refunded by your bank or MFS provider within 8
                  business days.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <i className="">
                  <FaArrowAltCircleRight />
                </i>
                <p>
                  In case money has been deducted from your card / mobile wallet
                  but you have not received a ticket confirmation, the deducted
                  amount would be refunded by your bank or MFS provider within 8
                  business days.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <i className="">
                  <FaArrowAltCircleRight />
                </i>
                <p>
                  If you have not received your ticket copy in email, kindly
                  check your Spam / Junk folder. You can also download your
                  ticket copy from the purchase history of your account after
                  you login.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <i className="">
                  <FaArrowAltCircleRight />
                </i>
                <p>
                  Download the official Rail Sheba app published by Bangladesh
                  Railway from Google Play..
                </p>
              </div>
              <div className="flex items-center gap-3">
                <i className="">
                  <FaArrowAltCircleRight />
                </i>
                <p>
                  In case of passengers downloading fake apps or any other app
                  from Google Play which claim to sell train tickets of
                  Bangladesh Railway, the authorities will not take any
                  liability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
