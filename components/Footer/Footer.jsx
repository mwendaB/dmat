import React from 'react'

function Footer() {
  return (

        <div className="flex flex-col items-center px-8 py-12 bg-neutral-900 max-md:px-5">
          <div className="flex flex-col items-center px-16 max-w-full text-base text-white whitespace-nowrap w-[1216px] max-md:px-5">
            <div className="flex items-center h-6">
              <div className="self-stretch px-5 py-2 my-auto">About</div>
              <div className="self-stretch px-5 py-2 my-auto">Services</div>
              <div className="self-stretch px-5 py-2 my-auto">Partners</div>
            </div>
          </div>
          <div className="flex gap-6 items-center mt-8">
            <div className="flex items-center self-stretch my-auto w-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6ae185583d6f07db9c732abc3e372cd22469a4ef150671e43ff444026c519a?placeholderIfAbsent=true&apiKey=5c97223cf28f4ed8aa1572099a445922"
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex items-center self-stretch my-auto w-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15823a25dce3be16c69d16b996c30c9a31860547f6062ada681b3be5ec2e82f4?placeholderIfAbsent=true&apiKey=5c97223cf28f4ed8aa1572099a445922"
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex items-center self-stretch my-auto w-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f951be31d7179cd952675c55178522a64a4d12e685b5487d33dcb4f19be1346?placeholderIfAbsent=true&apiKey=5c97223cf28f4ed8aa1572099a445922"
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </div>
          </div>
          <div className="self-stretch mt-8 text-base text-center text-white max-md:max-w-full">
            © 2024 Digital Media Africa. All rights reserved.
          </div>
        </div>
  
  )
}

export default Footer