import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 mb-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-pop text-2xl md:text-3xl font-bold text-blue-600">
          E-Ticket
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 text-[18px] font-medium">
          {["Home", "My Events", "My Tickets", "Offers", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <button className="font-pop px-4 py-2 text-blue-600 rounded">
            Sign Up
          </button>
          <button className="font-pop px-4 py-2 bg-black text-white text-[18px] rounded-full hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-center">
          {["Home", "Events", "My Tickets", "Offers", "Contact"].map((item) => (
            <p
              key={item}
              className="cursor-pointer text-lg hover:text-blue-500"
            >
              {item}
            </p>
          ))}

          <div className="flex flex-col space-y-2">
            <button className="px-4 py-2 text-blue-600">Sign Up</button>
            <button className="px-4 py-2 bg-black text-white rounded-full">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;