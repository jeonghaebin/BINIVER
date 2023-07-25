import React from 'react'; 
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../App.css'

const Slider = () => {
return (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide><a href="https://www.google.com/search?q=%EB%AF%B8%EB%93%9C%EB%82%98%EC%9E%87%EC%9D%B8%ED%8C%8C%EB%A6%AC&oq=%EB%AF%B8%EB%93%9C%EB%82%98%EC%9E%87%EC%9D%B8%ED%8C%8C%EB%A6%AC&aqs=chrome..69i57.2405j0j15&sourceid=chrome&ie=UTF-8#imgrc=nQ4tc9hPGDRxBM%253A" target={"_blank"}><img src='img/미드나잇인파리.jpg'></img></a></SwiperSlide>
    <br></br> <br></br>
    <SwiperSlide><img src='img/조블랙.jpeg'></img></SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
  </Swiper>
);
};
export default Slider;