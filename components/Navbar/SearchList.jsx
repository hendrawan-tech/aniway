import Link from "next/link";
import React from "react";
import Style from "./Search.module.scss";

const SearchList = ({ data }) => {
  return (
    <div className='flex max-h-[42rem] w-[90vw] md:max-h-[34rem] pt-9 overflow-hidden md:w-[17vw] bg-[#192026] border border-gray-500 rounded-b-3xl p-[0.7rem]'>
      <div
        className={`overflow-scroll ${Style.hide__scroll} text-white z-0 rounded-xl flex flex-col gap-2`}>
        {data.map((item, i) => {
          return (
            <a href={`/anime/${item.id}`} className='flex gap-3 min-w-[87.5vw]' key={i}>
              <img className='h-20 w-[50px] object-cover rounded-lg' src={item.thumbnail} alt='' />
              <h1 className='text-sm'>{item.title}</h1>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SearchList;
