import Link from "next/link";
import React, { useState } from "react";
import { AiFillStar, AiOutlineLoading } from "react-icons/ai";
import { BiPlayCircle, BiXCircle } from "react-icons/bi";
import Genre from "../Homepage/Genre";
import Navbar from "../Navbar/Navbar";

const Render = () => {
  const [id, setId] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState();
  React.useEffect(() => {
    const windowloc = window.location.pathname;
    setId(windowloc.split("/anime/").join(""));
  }, []);
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
                    <div className='grid gap-4'>
                      <img
                        src={item.image_url}
                        className='w-full object-cover rounded-2xl'
                        alt=''
                      />
                      <div className='flex gap-3 bg-blue-500 text-xl h-16 justify-center items-center rounded-xl text-white'>
                        <h1 className=''># {item.rank ? item.rank : "N/A"}</h1>|
                        <h1 className='flex gap-1 items-center'>
                          <AiFillStar />
                          {item.score ? item.score : "N/A"}
                        </h1>
                      </div>
                      {loading ? (
                        eps ? (
                          <Link
                            href={`/anime/[id]/[watch]`}
                            as={`/anime/${item.mal_id}/${epsitem.map(
                              (e) => e.item.documents[0].anime_id
                            )}`}>
                            <a className='flex gap-1 justify-center bg-blue-500 text-xl h-16 items-center rounded-xl text-white'>
                              <BiPlayCircle />
                              <h1>Watch</h1>
                            </a>
                          </Link>
                        ) : (
                          <div className='flex gap-1 justify-center bg-blue-500 text-xl h-16 items-center rounded-xl text-white'>
                            <BiXCircle />
                            <h1>Not Available</h1>
                          </div>
                        )
                      ) : (
                        <div className='flex justify-center bg-blue-500 text-xl h-16 items-center rounded-xl text-white'>
                          <AiOutlineLoading className='animate-spin' />
                        </div>
                      )}
                    </div>
                    <div className='col-span-3'>
                      <div>
                        <h1 className='text-white text-lg font-semibold'>Synopsis</h1>
                        <p className='text-gray-500'>{item.synopsis ? item.synopsis : "N/A"}</p>
                      </div>
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

export default Render;
