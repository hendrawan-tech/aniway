import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Style from "./Suggestion.module.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Suggestion = () => {
  return (
    <div className='rounded-xl overflow-hidden'>
      <Swiper
        touchEventsTarget='container'
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}>
        {Fakedata.map((data, i) => (
          <SwiperSlide key={i}>
            <div className='h-[25vw] rounded-xl overflow-hidden grid'>
              <span
                className={`${Style.card} z-10 w-full h-full absolute object-cover`}></span>
              <img
                className='w-full h-full absolute object-cover rounded-xl overflow-hidden'
                alt=''
                src={data.img}
              />

              <p className='self-end z-20 text-white text-xl p-5'>
                {data.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Fakedata = [
  {
    img: "https://animecorner.me/wp-content/uploads/2021/09/tensura-movie.png",
    name: "Tensei Shitara Slime Datta Ken",
  },
  {
    img: "https://animecorner.me/wp-content/uploads/2021/09/tensura-movie.png",
    name: "Tensei Shitara Slime Datta Ken",
  },
  {
    img: "https://animecorner.me/wp-content/uploads/2021/09/tensura-movie.png",
    name: "Tensei Shitara Slime Datta Ken",
  },
];

export default Suggestion;
