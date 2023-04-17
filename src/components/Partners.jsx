import React from 'react'
import Partner from './Partner'
import { Swiper, SwiperSlide } from "swiper/react";
import Partner1 from    '../assets/images/Group 400.png'
import Partner2 from    '../assets/images/Group 401.png'
import Partner3 from    '../assets/images/Group 402.png'
import Partner4 from    '../assets/images/Group 403.png'
import "swiper/css";
import { Autoplay } from 'swiper';

const Partners = () => {
  return (
   <>
   <Swiper
        slidesPerView={"4"}
        spaceBetween={30}
        breakpoints={{
          327: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3 ,
            spaceBetween: 50,
          },
        }}
        Autoplay ={
         {
          delay:500 
         }
        }
       
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Partner partnersLogo={Partner1} /></SwiperSlide>
        <SwiperSlide><Partner partnersLogo={Partner2} /></SwiperSlide>
        <SwiperSlide><Partner partnersLogo={Partner3} /></SwiperSlide>
        <SwiperSlide><Partner partnersLogo={Partner4} /></SwiperSlide>
       
        <SwiperSlide><Partner partnersLogo={Partner1} /></SwiperSlide>
        <SwiperSlide><Partner partnersLogo={Partner2} /></SwiperSlide>
        <SwiperSlide><Partner partnersLogo={Partner3} /></SwiperSlide>
        <SwiperSlide><Partner partnersLogo={Partner4} /></SwiperSlide>       
       
      </Swiper>
   </>
  )
}

export default Partners