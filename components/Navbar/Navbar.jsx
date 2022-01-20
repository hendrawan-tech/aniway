import Link from "next/link";
import React, { useState } from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import Menu from "./Menu";
import Search from "./Search";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id='Navbar'>
      <Menu openstate={open} open={setOpen} />
      <nav className='flex flex-col gap-5 md:flex-row justify-between items-center px-[5vw] pt-10 pb-3 md:py-10'>
        <div className='grid grid-flow-col justify-center md:justify-start w-full gap-10 items-center relative'>
          <Link href='/'>
            <a>
              <img className='h-10' src='\Images\lgoniway.png' alt='' />
            </a>
          </Link>
          <div className='absolute text-4xl text-white md:hidden'>
            <BiMenu onClick={() => setOpen(true)} />
          </div>
          <div className='hidden md:flex gap-5 uppercase'>
            <Link href='/#New'>
              <a className='text-gray-500 hover:text-white cursor-pointer'>Newest</a>
            </Link>
            <Link href='/#Top'>
              <a className='text-gray-500 hover:text-white cursor-pointer'>Top</a>
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-2 w-full md:w-auto'>
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
