import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import Search from "./Search";

const Navbar = () => {
  return (
    <section id='Navbar'>
      <nav className='flex justify-between items-center px-[5vw] py-10'>
        <div className='flex gap-10 items-center'>
          <Link href='/'>
            <a>
              <img className='h-10' src='\Images\lgoniway.png' alt='' />
            </a>
          </Link>

          <ul className='flex gap-5 text-white uppercase'>
            <li>Upcoming</li>
            <li>Latest</li>
            <li>Top</li>
          </ul>
        </div>

        <div className='flex items-center gap-2'>
          <Search />
          {/* <button className='rounded-full bg-blue-500 p-4 text-lg outline-none text-white'>
            <BiSearch />
          </button> */}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
