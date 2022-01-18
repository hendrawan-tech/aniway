import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { fetchAnime } from "../Fetch/fetchAnime";
import Genre from "../Homepage/Genre";
import Navbar from "../Navbar/Navbar";

const IdGenre = () => {
  const [totalpage, setTotalpage] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    const windowloc = window.location.pathname;
    setId(windowloc.split("/genre/").join(""));
  });
  useEffect(() => {
    async function fetchData() {
      let fetch = await fetchAnime.genreList(id, page);
      setData(fetch.data);
      setTotalpage(fetch.paginations);
    }
    id && fetchData();
  }, [id, page]);
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
      <Navbar />
      <div className='px-[5vw] py-5 grid grid-cols-5 gap-10'>
        <div className='col-span-full md:col-span-4'>
          <h1 id='New' className='text-white font-bold text-4xl mb-5'>
            Genre: {id && Capitalize(id)}
          </h1>
          <div className='flex flex-col gap-7 items-center'>
            <div className='grid grid-cols-2 md:grid-cols-7 gap-x-5 gap-y-10 w-full min-h-[70vh]'>
              {data ? (
                data.map((item, i) => {
                  return (
                    <Link key={i} href={`/anime/${item.id}`}>
                      <a className='flex flex-col hover:scale-105 transition-all gap-2'>
                        <div className='overflow-hidden rounded-xl relative h-[70vw] md:h-[17.5vw] grid'>
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
                        className='flex flex-col hover:scale-105 transition-all gap-2 w-full h-[72vw] md:h-[18.96vw] rounded-xl bg-gray-500 bg-opacity-20 animate-pulse'></div>
                    );
                  })}
                </>
              )}
            </div>
            {totalpage.length > 1 ? (
              <ul className='md:max-w-[40%] grid grid-flow-col gap-2'>
                <li
                  onClick={() => {
                    setData();
                    setTimeout(() => {
                      setPage(1);
                    }, 200);
                  }}
                  className='w-[50px] p-2 flex justify-center items-center text-lg rounded-xl border-2 border-blue-500 hover:bg-blue-500 transition text-white cursor-pointer'>
                  <AiOutlineHome />
                </li>
                {totalpage.map((e, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        setData();
                        setTimeout(() => {
                          setPage(e);
                        }, 200);
                      }}
                      className={`${
                        page == e ? "bg-blue-500" : ""
                      } min-w-[50px] p-3 text-center text-sm rounded-xl border-2 border-blue-500 hover:bg-blue-500 transition text-white cursor-pointer`}>
                      {e}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
        <div className='hidden md:block'>
          <Genre />
        </div>
      </div>
    </>
  );
};

export default IdGenre;
