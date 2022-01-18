import React from "react";
import Suggestion from "./Suggestion";
import Top from "./Top";
import New from "./New";
import Genre from "./Genre";
import { Element } from "react-scroll/modules";

const Homepage = () => {
  return (
    <section id='Homepage'>
      <div className='px-[5vw] py-5'>
        <div className='grid grid-cols-5 gap-10'>
          <div className='col-span-full md:col-span-4 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
              <div>
                <h1 className='text-white font-bold text-4xl'>Explore</h1>
                <p className='text-gray-500 text-xl'>What are you gonna watch today?</p>
              </div>
              <div className='grid'>
                <Suggestion />
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 id="New" className='text-white font-bold text-4xl'>New release</h1>
              <New />
              <h1 id="Top" className='text-white font-bold text-4xl'>Top anime</h1>
              <Top />
            </div>
          </div>
          <div className="md:block hidden">
            <Genre />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
