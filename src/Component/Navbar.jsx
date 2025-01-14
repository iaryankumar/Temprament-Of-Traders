import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-800 h-[70px] w-full flex items-center justify-between md:px-12 px-4 z-50 sticky top-0">
      <div>
        <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
      </div>
      <div>
        <ul className=" items-center gap-7 text-[16px] md:flex hidden">
          <li className="hover:scale-105 "><Link to={"/"}>Home</Link></li>
          <li className="hover:scale-105 "><Link to={"/playlist"}>Playlists</Link></li>
          <li className="hover:scale-105 "><Link to={'/mentorship'}>Mentorship</Link></li>
          <div className="flex items-center search h-[40px] w-[220px]  px-3 gap-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            <CiSearch className="text-[22px]" />
            <input type="text" placeholder="search" className="outline-none h-auto w-full " />
          </div>
        </ul>
      </div>
      <CiMenuBurger onClick={() => { setIsOpen(!isOpen) }} className="text-2xl cursor-pointer md:hidden block" />
      {isOpen && <ul className=" items-center gap-7 text-[16px] flex flex-col absolute top-[70px] left-0 w-full bg-white text-center z-50 py-5 mt-[0.1px]">
        <li className="hover:scale-105 "><Link onClick={()=>{setIsOpen(!isOpen)}} to={"/"}>Home</Link></li>
        <li className="hover:scale-105"><Link className="h-[100%] cursor-pointer">About</Link></li>
        <li className="hover:scale-105 "><Link onClick={()=>{setIsOpen(!isOpen)}} to={'/mentorship'}>Mentorship</Link></li>
      </ul>}
    </nav>
  );
};

export default Navbar;
