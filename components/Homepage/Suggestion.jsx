import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Style from "./Suggestion.module.scss";
import Link from "next/link";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Suggestion = () => {
  return (
    <div className='rounded-xl overflow-hidden'>
      <Swiper
        touchEventsTarget='container'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}>
        {Fakedata.map((data, i) => (
          <SwiperSlide key={i}>
            <Link href={data.link}>
              <a className='h-[50vw] md:h-[25vw] rounded-xl overflow-hidden grid cursor-pointer relative'>
                <span className={`${Style.card} z-10 w-full h-full absolute object-cover pointer-events-none`}></span>
                <img
                  className='w-full h-full absolute object-cover rounded-xl hover:scale-105 transition-all'
                  alt=''
                  src={data.img}
                />

                <p className='self-end text-center md:text-left md:self-end z-20 text-white text-sm md:text-xl pb-3 md:p-5'>
                  {data.name}
                </p>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Fakedata = [
  {
    img: "https://ik.imagekit.io/miukyo/1_5G5gBzn4G.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642679670900",
    name: "Tensei Shitara Slime Datta Ken",
    link: "/anime/tensei-shitara-slime-datta-ken",
  },
  {
    img: "https://ik.imagekit.io/miukyo/2_aGlyqBxBv.jpg",
    name: "Horimiya",
    link: "/anime/horimiya",
  },
  {
    img: "https://ik.imagekit.io/miukyo/3_WB2lcEQMT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642680007422",
    name: "Overlord",
    link: "/anime/overlord",
  },
];

export default Suggestion;
