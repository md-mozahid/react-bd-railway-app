import React from 'react'

const VerifyTicket = () => {
  return (
    <>
      <div>
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl mt-5">Verify Ticket</h1>
          <hr className="mb-10 mt-5" />
          <div className="grid grid-cols-2 gap-10 justify-between items-center">
            <div className="w-96 bg-slate-200 p-4">
              <div className="flex justify-start items-center gap-14">
                <div className="flex items-center gap-3">
                  <input type="radio" name="" id="" />
                  <p>Online Ticket</p>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="" id="" />
                  <p>Counter Ticket</p>
                </div>
              </div>
              <div>
                <input
                  className="inputText"
                  type="text"
                  placeholder="Enter PNR/Ticket Number"
                />
                <input
                  className="inputText"
                  type="number"
                  placeholder="Mobile Number"
                />
              </div>
              <button className="btn-primary w-52">VERIFY TICKET</button>
            </div>
            <div className="bg-slate-200 p-16 ">
              <p>
                To verify online purchased tickets, please enter your PNR/ticket
                number and mobile number you used during ticket purchase. For
                counter purchased tickets, please enter your PNR/ticket number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyTicket
