import Link from "next/link";
import React from "react";

const Menu = ({ open, openstate }) => {
  return (
    <section id='Menu' className='md:hidden' onClick={() => open(false)}>
      <div
        className={`${
          openstate ? "visible translate-x-0" : "invisible -translate-x-full"
        } bg-[#232b33] transition-all ease-in-out duration-300 fixed w-full h-screen z-50 flex flex-col justify-center`}>
        <div className='flex flex-col gap-4 px-20 text-2xl text-white'>
          <Link href='/'>Home</Link>
          <Link href='/#New'>New Release</Link>
          <Link href='/#Top'>Top Anime</Link>
          <Link href='/#Genre'>Genre&#39;s</Link>
        </div>
        <p className="text-center text-sm text-gray-500 absolute bottom-0 w-full mb-5">Touch anywhere to close</p>
      </div>
    </section>
  );
};

export default Menu;
