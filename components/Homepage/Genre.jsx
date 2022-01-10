import React, { useState, useEffect } from "react";
import { fetchAnime } from "../Fetch/fetchAnime";

const Genre = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let fetch = await fetchAnime.genres();
    setData(fetch);
  }, []);
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <h1 className='text-4xl text-white font-bold'>Genre&#39;s</h1>
        <p className='text-gray-500 text-xl'>Available anime genre&#39;s</p>
      </div>
      <ul className='columns-2 gap-x-2 text-gray-400 text-sm'>
        {data.map((item, i) => {
          return <li className="" key={i}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Genre;
