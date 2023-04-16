import React, { useRef } from "react";
import "./Navbar.css";
import brendLogo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
const Navbar = () => {
  const offcanvasRef = useRef();
  const openOffcanvas = (e)=>{
    const clicked = e.target;
    if(clicked.classList.contains('bars-icon')){
      offcanvasRef.current.classList.add('is_active');
    }
  };
  const closeOffcanvas = (e)=>{
    const clicked = e.target;
    if(clicked.classList.contains('x-icon')){
      offcanvasRef.current.classList.remove('is_active');
    }
  };
  return (
    <>
      <aside className="off-canvas" ref={offcanvasRef}>
        <HiX className="x-icon" onClick={closeOffcanvas} />
        <a href="">Home</a>
        <a href="">about</a>
        <a href="">services</a>
        <a href="">blog</a>
        <a href="">contact</a>
        <a href="">sign in</a>
      </aside>
      <nav className="navbar">
      <a className="navbar-brand" href="#">
          <img src={brendLogo} alt="" />
        </a>
      <ul className="navbar_ul">
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              about
            </a>
          </li>
          <li>
            <a className="nav-link">services</a>
          </li>
          <li>
            <a className="nav-link">blog</a>
          </li>
          <li>
            <a className="nav-link">contact</a>
          </li>
        </ul>
          <FaBars className="bars-icon" onClick={openOffcanvas} />
        <button className="btn btn-primary"  >Sign in</button>
      </nav>
    </>
  );
};

export default Navbar;
