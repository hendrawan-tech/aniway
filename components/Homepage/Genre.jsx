import Link from "next/link";
import React, { useState, useEffect } from "react";
import { fetchAnime } from "../Fetch/fetchAnime";

const Genre = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let fetch = await fetchAnime.genres();
      setData(fetch);
    }
    fetchData();
  }, []);
  return (
    <div className='flex flex-col w-full gap-3'>
      <div>
        <h1 className='text-4xl text-white font-bold'>Genre&#39;s</h1>
        <p className='text-gray-500 text-xl'>Available anime genre&#39;s</p>
      </div>
      <ul className='columns-2 gap-x-2 text-gray-500 md:text-sm'>
        {data.map((item, i) => {
          return (
            <Link href={`/genre/${item.id}`}  key={i}>
              <li className="cursor-pointer hover:text-white transition mb-1">{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Genre;
