import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "./components/Header";

// import Notionblog from "./pages/Notionblog"
// import Experience from "./pages/Experience"
// import Food from "./pages/Food"
// import Movie from "./pages/Movie"
// import Hobby from "./pages/Hobby"
// import Music from "./pages/Notionblog"
// import Main from './pages/Main';


function App() {
  return (
    <>
      <Header />
      <br></br><br></br>
      <Navbar />
     
      </>
  );
}

export default App;
