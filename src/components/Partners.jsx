import Partner from './Partner'
import Partner1 from    '../assets/images/Group 400.png'
import Partner2 from    '../assets/images/Group 401.png'
import Partner3 from    '../assets/images/Group 402.png'
import Partner4 from    '../assets/images/Group 403.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../../src/App.css'

const Partners = () => {
  return (
   <>
  
     <div className="swiper">
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
            slidesPerView: 4 ,
            spaceBetween: 50,
          },
        }}
      modules={[Autoplay]}
      autoplay={{ delay: 1000 }}
      
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
     </div>
   </>
  )
}

export default Partners