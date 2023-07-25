import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Movies from "../components/Movies"

const Navbar = () => {
  // useEffect(() => {
  //   if (showMovies) {
      
  //   }
  // },[showMovies]);


  const [showMovies, setShowMovies] = useState(false);
  
  // 함수 하나에 여러가지 넣어서 만들어야 좋은거
  const test = () => {
    if (showMovies) {
      setShowMovies(false);
    } else {
      setShowMovies(true)
    }
  }

  return (
    <>
      <div className="Wrapper">
        <nav className="wrapper">
        <a href="https://www.notion.so/5e72e2593fcf4fa3b3adf1640a421fc5?pvs=4" target={"_blank"} ><div>노션 및 블로그</div></a>
            <div onClick= {test}>좋아하는 영화</div>
                <a href=""><div>좋아하는 음악</div></a>
                <a href=""><div>좋아하는 음식</div></a>
                <a href=""><div>프로젝트 경험</div></a>
              <a href=""><div>취미</div></a>
      </nav>
      
      </div>
      <br></br><br></br><br></br>
      {showMovies ?
      <Movies /> : <></>}
      </>
      
    )
}


export default Navbar;