import Link from "next/link";
import React from "react";
import Style from "./Search.module.scss";

const SearchList = ({ data }) => {
  return (
    <div className='mt-2 z-10 flex max-h-[50vh] overflow-hidden w-[17vw] bg-[#192026] rounded-3xl p-3'>
      <div className={`overflow-scroll ${Style.hide__scroll} text-white`}>
        {data.map((item, i) => {
          return (
            <a href={`/anime/${item.id}`} className='flex gap-3 my-2' key={i}>
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
