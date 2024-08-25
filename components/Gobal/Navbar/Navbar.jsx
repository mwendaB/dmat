
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-black">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="flex-1 text-3xl  text-black font-bold flex justify-start">
        <a href="/">ARCADIA</a>
      </div>
      <div className="flex-1 text-black hidden md:flex justify-center space-x-8">
        <a href="/about" className="text-lg">
          About
        </a>
        <a href="/services" className="text-lg">
          Services
        </a>
      </div>
      <div className="flex-1 flex justify-end">
        <a
          href="/contact"
          className="bg-black text-white px-4 py-2 rounded-md flex items-center"
        >
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-9.192-4.596A1.993 1.993 0 004 7.367v9.266a2 2 0 003.56 1.11l9.19-4.596a2 2 0 000-3.578z"
            />
          </svg>
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar