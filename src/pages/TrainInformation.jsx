import React from 'react'
import ImageInfo from '../assets/img/train-information-illustration.svg'

const TrainInformation = () => {
  return (
    <div className="bg-gray-300 h-screen py-10">
      <div className="flex justify-around items-center gap-10 mx-auto max-w-6xl">
        <div className="w-72 bg-slate-200 p-4 rounded-md">
          <h1 className="text-base font-semibold">
            Select Your Preferred Train
          </h1>
          <select
            className="inputText"
            name=""
            id=""
            placeholder="Select train">
            <option value="">option 1</option>
          </select>
          <button className="btn-primary btn-fw ">Search</button>
        </div>
        <div className="flex flex-col justify-center items-center w-2/3 py-10 bg-white rounded-lg">
          <img src={ImageInfo} alt="" />
          <p>
            Please select your preferred train to see the <br /> detailed
            information of your selected train.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrainInformation