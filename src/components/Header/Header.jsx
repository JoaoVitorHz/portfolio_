'use client'

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-screen h-[70px] bg-white shadow-md z-50">
      <div className="w-[80%] h-full m-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">João Vitor</h1>

        {/* Menu Desktop */}
        <nav className="flex md:hidden gap-5 font-bold">
          <a href="#" className="hover:text-[#147efb] transition">Home</a>
          <a href="#" className="hover:text-[#147efb] transition">About Me</a>
          <a href="#" className="hover:text-[#147efb] transition">Experience</a>
          <a href="#" className="hover:text-[#147efb] transition">Projects</a>
          <a href="#" className="hover:text-[#147efb] transition">Skills</a>
          <a href="#" className="hover:text-[#147efb] transition">Contact</a>
        </nav>

        {/* Botão Hamburger Mobile */}
        <button className="hidden md:flex" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <IoMenu />        }
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:flex flex flex-col items-center gap-5 font-bold bg-white py-6 shadow-md">
          <a href="#" className="hover:text-[#147efb] transition">Home</a>
          <a href="#" className="hover:text-[#147efb] transition">About Me</a>
          <a href="#" className="hover:text-[#147efb] transition">Experience</a>
          <a href="#" className="hover:text-[#147efb] transition">Projects</a>
          <a href="#" className="hover:text-[#147efb] transition">Skills</a>
          <a href="#" className="hover:text-[#147efb] transition">Contact</a>
        </nav>
      )}
    </header>
  );
}
