import React, {useState} from 'react'

const DropDown = () => {
    const [show, setShow] = useState(false)

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              type="button"
              className="text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
              MUZAHID
            </button>
            <div>
              <a
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                href="">
                action
              </a>
              <a
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                href="">
                action2
              </a>
              <a
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                href="">
                action3
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
              <a
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                href="">
                action4
              </a>
              <a
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                href="">
                action4
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DropDown
