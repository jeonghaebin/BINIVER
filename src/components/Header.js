import React from "react";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
      
     <>
  <div className="page">
      <div className="icon">
        <a href=''><img src="img/heart.jpg" /></a>
      </div>
      <div>
        <div className="Main"><Link to="/" style={{ textDecoration: "none", color: 'rgba(210, 107, 231, 0.8)'}}>BINIVER</Link></div>
        </div>
      <input className='Inputwrap'></input>
          </div>
          </>
      
    )
}


export default Header;