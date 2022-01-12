import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { AiFillStar, AiOutlineLoading } from "react-icons/ai";
import { fetchAnime } from "../Fetch/fetchAnime";
import { Element, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Genre from "../Homepage/Genre";
import Navbar from "../Navbar/Navbar";
import Style from "./Id.module.scss";

const IdRender = () => {
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
  return (
    <>
      <Navbar />
      <div className='px-[5vw] py-5 grid grid-cols-5 gap-10'>
        <div className='col-span-full md:col-span-4'>
          {data ? (
            <>
              {data.map((item, i) => {
                return (
                  <div className='flex flex-col gap-5' key={i}>
                    {item.episodeCount ? <Vid item={item} /> : null}
                    <h1 className='text-white font-bold text-4xl'>{item.title}</h1>
                    <div className='grid col-span-2 md:grid-cols-4 gap-5 md:gap-10'>
                      <InfoLeft item={item} />
                      <div className='md:col-span-3'>
                        <div className='flex gap-10'></div>
                        <div>
                          <h1 className='text-white text-lg font-semibold'>Summary</h1>
                          <p className='text-gray-500'>{item.summary ? item.summary : "N/A"}</p>
                        </div>
                        <div>
                          <Episodes item={item} id={id} />
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
        </div>
        <div className='hidden md:block'>
          <Genre />
        </div>
      </div>
    </>
  );
};

const InfoLeft = ({ item }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-none gap-5'>
      <img
        src={item.thumbnail}
        className='w-full object-cover rounded-2xl h-[70vw] md:h-[26vw] col-span-1'
        alt=''
      />
      <div className='grid place-items-start gap-2'>
        <div className='flex flex-col md:flex-row md:gap-2'>
          <h1 className='text-white font-semibold whitespace-nowrap'>Type :</h1>
          <p className='text-gray-500'>{item.type ? item.type : "N/A"}</p>
        </div>
        <div className='flex flex-col md:flex-row md:gap-2'>
          <h1 className='text-white font-semibold whitespace-nowrap'>Released : </h1>
          <p className='text-gray-500'>{item.released ? item.released : "N/A"}</p>
        </div>
        <div className='flex flex-col md:flex-row md:gap-2'>
          <h1 className='text-white font-semibold whitespace-nowrap'>Status :</h1>
          <p className='text-gray-500'>{item.status ? item.status : "N/A"}</p>
        </div>
        <div className='flex flex-col md:flex-row md:gap-2'>
          <h1 className='text-white font-semibold whitespace-nowrap'>Episodes :</h1>
          <p className='text-gray-500'>{item.episodeCount ? item.episodeCount : "N/A"}</p>
        </div>
        <div className='flex flex-col md:flex-row md:gap-2'>
          <h1 className='text-white font-semibold whitespace-nowrap'>Genres :</h1>
          <p className='text-gray-500 flex flex-col'>
            {item.genres.map((e) => e.title) ? item.genres.map((e) => e.title).join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

const Episodes = ({ item, id }) => {
  const [epPage, setEpPage] = useState(0);
  const [eplist, setEplist] = useState([]);
  const [scrollid, setScrollid] = useState("1");
  useEffect(() => {
    setEplist(item.episodePages[epPage]);
  }, [epPage]);
  useEffect(() => {
    scrollid
      ? scroller.scrollTo(scrollid, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          containerId: "scroll-container",
        })
      : scroller.scrollTo("1", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          containerId: "scroll-container",
        });
  }, [scrollid]);
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <h1 className='text-white text-lg font-semibold py-2'>Episodes</h1>
        <div className='min-w-[20%] flex justify-end gap-3 text-sm '>
          <a
            className='text-gray-500 hover:text-white cursor-pointer'
            onClick={() => setScrollid("1")}>
            First
          </a>
          <a
            className='text-gray-500 hover:text-white cursor-pointer'
            onClick={() => setScrollid(item.episodeCount)}>
            Last
          </a>
          <input
            className={`${Style.hide__arrow} bg-transparent outline-none whitespace-nowrap text-white overflow-hidden min-w-[4rem]`}
            type='number'
            min='1'
            max={item.episodeCount}
            placeholder='Jump to'
            onInput={(e) => {
              setScrollid(e.target.value);
            }}
          />
        </div>
      </div>
      <div className='grid gap-3 overflow-hidden h-[25rem]'>
        <div id='scroll-container' className={`overflow-auto ${Style.hide__scroll}`}>
          {item.episodeCount > 0 ? (
            Array.from(Array(item.episodeCount), (_, i) => (
              <Link key={i} href={`/anime/${id}?ep=${i + 1}`}>
                <Element
                  name={`${i + 1}`}
                  className='flex items-center border-b py-3 text-gray-500 hover:text-white transition-all border-gray-700 cursor-pointer'>
                  Episode {i + 1}
                </Element>
              </Link>
            ))
          ) : (
            <p className='text-gray-500 flex flex-col'>N/A</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Vid = ({ item }) => {
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  const episode = window.location.search.split("?ep=").join("");
  useEffect(() => {
    setId(item.id + "-episode-" + (!episode == "" ? episode : "1"));
    // setId(windowloc.split(`/anime/`).join(""));
  });
  useEffect(() => {
    async function fetchData() {
      let fetch = await fetchAnime.animeEpisodeInfo(id);
      setData([fetch]);
    }
    id && fetchData();
  }, [id]);
  const trying = data.map((e) => e.videoId);
  return (
    <iframe
      className={`aspect-[16/11] md:aspect-video md:rounded-xl overflow-hidden`}
      allowFullScreen={true}
      frameBorder='0'
      width='100%'
      height='100%'
      scrolling='no'
      src={`https://gogoplay.io/streaming.php?id=${trying}&title=${item.id}`}></iframe>
  );
};

export default IdRender;
