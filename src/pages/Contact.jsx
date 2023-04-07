import React from 'react'

const Contact = () => {
  return (
    <div className="">
      <div className="container mx-auto max-w-6xl py-10">
        <h1>Contact Us</h1>
        <hr />
        <div className="w-2/4 mx-auto py-10 divide-y divide-blue-200">
          <small>
            For refund of unsuccessful purchases and card <br /> charging issues
          </small>
          <div className="contact">
            <p>bKash</p>
            <p>16247</p>
          </div>
          <div className="contact">
            <p>Nagad</p>
            <p>16167</p>
          </div>
          <div className="contact">
            <p>Rocket / DBBL Nexus</p>
            <p>16216</p>
          </div>
          <div className="contact">
            <p>Visa / Mastercard</p>
            <p>N/A</p>
          </div>
          <div>
            <small>
              Reach out to our support team to report identity theft!
            </small>
            <p>
              If any user has registered with someone else's NID using his/her
              mobile number, the real/actual NID holder can claim the identity
              by following the mentioned steps below :-
            </p>
            <div className="flex justify-between">
              <p>Send an email to</p>
              <a href="">support@eticket.railway.gov.bd</a>
            </div>
            <div>
              <p>Must attach the following documents with the email:</p>
              <small>
                01. A scanned copy of the ownership document for the SIM (mobile
                number)
              </small>
              <small>02. A scanned copy of the NID card</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
