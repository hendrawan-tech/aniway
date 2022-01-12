import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { fetchAnime } from "../Fetch/fetchAnime";

const Top = () => {
  const [totalpage, setTotalpage] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      let fetch = await fetchAnime.popular(page);
      setData(fetch.data);
      setTotalpage(fetch.paginations);
    }
    fetchData();
  }, [page]);
  return (
    <div className='flex flex-col gap-7 items-center'>
      <div className='grid grid-cols-7 gap-x-5 gap-y-10 w-full min-h-[70vh]'>
        {data ? (
          data.map((item, i) => {
            return (
              <Link key={i} href={`/anime/[id]`} as={`/anime/${item.id}`}>
                <a className='flex flex-col hover:scale-105 transition-all gap-2'>
                  <div className='overflow-hidden rounded-xl relative h-[17.5vw] grid'>
                    <img className='object-cover w-full h-full' src={item.thumbnail} alt='' />
                  </div>
                  <p className='text-white text-center text-sm truncate'>{item.title}</p>
                </a>
              </Link>
            );
          })
        ) : (
          <>
            {Array.from(Array(21), (_, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-col hover:scale-105 transition-all gap-2 w-full h-[18.96vw] rounded-xl bg-gray-500 bg-opacity-20 animate-pulse'></div>
              );
            })}
          </>
        )}
      </div>
      <ul className='w-2/5 grid grid-cols-6 gap-2'>
        <li
          onClick={() => {
            setPage(1);
          }}
          className='p-2 flex justify-center items-center text-lg rounded-xl border-2 border-blue-500 hover:bg-blue-500 transition text-white cursor-pointer'>
          <AiOutlineHome />
        </li>
        {totalpage.map((e, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setPage(e);
              }}
              className={`${
                page == e ? "bg-blue-500" : ""
              } p-3 text-center text-sm rounded-xl border-2 border-blue-500 hover:bg-blue-500 transition text-white cursor-pointer`}>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Top;
