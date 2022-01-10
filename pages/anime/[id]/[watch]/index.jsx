import React from "react";
import Genre from "../../../../components/Homepage/Genre";
import Navbar from "../../../../components/Navbar/Navbar";
const index = () => {
  return (
    <>
      <Navbar />
      <div className='px-[5vw] py-5 grid grid-cols-5 gap-10'>
        <div className='col-span-4'></div>
        <Genre />
      </div>
    </>
  );
};

export default index;
