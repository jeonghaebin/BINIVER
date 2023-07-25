// import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
// import Navbar from "./components/Navbar"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from './Slider';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Movies = () => { 
  return (
  <>
  <div className="page">
      {/* <div className="icon">
        <a href=''><img src="img/heart.jpg" /></a>
      </div> */}
          <Slider/>
      </div>
      </>
  );
}

export default Movies;
