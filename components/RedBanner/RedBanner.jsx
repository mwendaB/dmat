import React from 'react'

function RedBanner() {
  return (

    <div className="mx-auto py-10">


    <div
      className="flex overflow-hidden max-w-[1280px] mx-auto flex-col justify-center items-center py-10 text-center rounded-md"
      style={{
        background: "linear-gradient(180deg, #B00010 0%, #4A0007 108.82%)",
      }}
    >
      <div className="flex flex-col justify-center items-center text-white max-md:max-w-full">
        <div className="text-2xl font-bold">Contact Us</div>
        <div className="mt-4 text-base max-md:max-w-full">
          Your masterpiece is a click away. Contact us to bring your ideas to
          life.
        </div>
      </div>
      <button className="gap-2.5  py-4 mt-10 w-[150px] text-base bg-white rounded-md shadow-[0px_3px_6px_rgba(141,141,141,0.25)] text-neutral-900 mx-auto max-md:px-5">
        Inquire about us
      </button>
    </div>
    </div>
  )
}

export default RedBanner
