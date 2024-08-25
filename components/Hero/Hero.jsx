import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-700 text-white h-screen flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      DIGITAL MEDIA AFRICA
    </h1>
    <p className="text-lg md:text-xl mb-8">
      Pioneering marketing agency at the forefront of 360-degree digital marketing services
    </p>
    <a
      href="/enquire"
      className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
    >
      Enquire Now
    </a>
  </section>
  )
}

export default Hero