import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineLoading } from "react-icons/ai";
import { BiPlayCircle, BiXCircle } from "react-icons/bi";
import { fetchAnime } from "../Fetch/fetchAnime";
import Genre from "../Homepage/Genre";
import Navbar from "../Navbar/Navbar";

const Id = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState();
  useEffect(() => {
    const windowloc = window.location.pathname;
    setId(windowloc.split("/anime/").join(""));
  }, []);
  useEffect(() => {
    async function fetchData() {
      let fetch = await fetchAnime.animeInfo(id);
      setData([fetch]);
    }
    id && fetchData();
  }, [id]);
  console.log(data);
  return (
    <>
      <Navbar />
      <div className='px-[5vw] py-5 grid grid-cols-5 gap-10'>
        {data ? (
          <>
            {data.map((item, i) => {
              return (
                <div key={i} className='flex flex-col gap-5 col-span-4'>
                  <h1 className='text-white font-bold text-4xl'>{item.title}</h1>
                  <div className='grid grid-cols-4 gap-10'>
                    <div className='grid gap-5'>
                      <img
                        src={item.thumbnail}
                        className='w-full object-cover rounded-2xl h-[26vw]'
                        alt=''
                      />
                      <div className='grid gap-2'>
                        <div className='flex items-center gap-2'>
                          <h1 className='text-white font-semibold'>Season :</h1>
                          <p className='text-gray-500'>{item.type ? item.type : "N/A"}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <h1 className='text-white font-semibold'>Released : </h1>
                          <p className='text-gray-500'>{item.released ? item.released : "N/A"}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <h1 className='text-white font-semibold'>Status :</h1>
                          <p className='text-gray-500'>{item.status ? item.status : "N/A"}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <h1 className='text-white font-semibold'>Episodes :</h1>
                          <p className='text-gray-500'>
                            {item.episodeCount ? item.episodeCount : "N/A"}
                          </p>
                        </div>
                        <div className='flex gap-2'>
                          <h1 className='text-white font-semibold whitespace-nowrap'>Genres :</h1>
                          <p className='text-gray-500 flex flex-col'>
                            {item.genres.map((e) => e.title)
                              ? item.genres.map((e) => e.title).join(", ")
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-3'>
                      <div className='flex gap-10'></div>
                      <div>
                        <h1 className='text-white text-lg font-semibold'>Summary</h1>
                        <p className='text-gray-500'>{item.summary ? item.summary : "N/A"}</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className='bg-gray-500 bg-opacity-20 rounded-xl h-[75vh] col-span-4 flex justify-center items-center text-7xl text-white'>
            <AiOutlineLoading className='animate-spin' />
          </div>
        )}
        <Genre />
      </div>
    </>
  );
};

export default Id;
