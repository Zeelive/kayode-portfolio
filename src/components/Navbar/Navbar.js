import React, {useState} from 'react';
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
      if(window.scrollY >= 100){
          setColor(true);
      }else{
          setColor(false);
      }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
        <div className="logoDiv">
           <a href="/#" className="logo flex">
             <h1>Kayode<span className='diff'>.dev</span></h1>
           </a>
        </div>
        <ul className={click ? "nav-menu active" : 
    "nav-menu"} onClick={() => setClick(prevState => !prevState)}>
            <li className="navItem">
               <a href="/#" className="navLink">Home</a>
            </li>
            <li className="navItem">
               <a href="/#project" className="navLink">Project</a>
            </li> 
            <li className="navItem">
               <a href="/#about" className="navLink">About</a>
            </li>
            <li className="navItem">
               <a href="/#contact" className="navLink">Contact</a>
            </li>
        </ul>
        <div className="hamburger" onClick=
        {handleClick}>
            {click ? ( 
            <FaTimes size={20} style={{ color: 
                "#fff" }} />
            ) : (
            <FaBars size={20} style={{ color: "#fff"
            }} />
            )}
        </div>
    </div>
  )
}

export default Navbar;