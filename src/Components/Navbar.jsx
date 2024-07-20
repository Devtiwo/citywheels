import React, { useState } from 'react';
import { BsCaretLeft } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const links = [
    {
      path: "/home",
      text: "Home"
    },
    {
      path: "#howitworks",
      text: "How it works"
    },
    {
      path: "#aboutus",
      text: "About Us"
    },
    {
      path: "#whychooseus",
      text: "Why choose us"
    }
  ]
  const toggleMenu = () => {
    setIsNavExpanded(!isNavExpanded);
  }
  
  return (
    <header>
     <nav>
        <div>
         <img className="h-16" src="/images/citywheellogo.png" alt="citywheels logo" />
        </div>
       <div onClick={() => setIsNavExpanded(false)} className={isNavExpanded ? `${style.navlinksmob}` : `${style.navlinks}`}>
        <ul className={style.navwrap}>
          {links.map((link, index) => (
            <li key={index} className={style.navitems}><Link to={link.path}>{link.text}</Link></li>
          ))}
          <ul>
         <li className={style.log}><Link to="/login">Login</Link></li>
         </ul>
        </ul>
       </div>
       
         
        <div className={`${style.mobile} p-5`} onClick={toggleMenu}>
        {isNavExpanded ? <button className="text-white bg-lime-600 hover:bg-lime-500 ps-4 p-2 rounded-l-full"><BsCaretLeft className="text-4xl"/></button> : <button><GiHamburgerMenu  className="text-5xl text-lime-600"/></button>}
       </div>
      
      </nav>
    </header>
  )
}

export default Navbar;