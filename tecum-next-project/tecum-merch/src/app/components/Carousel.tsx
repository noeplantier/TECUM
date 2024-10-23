import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carousel.scss';

const Carousel = () => {
  return (
    <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
      <SwiperSlide><img src="/images/slide1.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="/images/slide2.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="/images/slide3.jpg" alt="Slide 3" /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
