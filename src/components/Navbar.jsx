import React, { useRef } from "react";
import "./Navbar.css";
import brendLogo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import Button from "./Button";
import { Link } from "react-router-dom";
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
        <Link  to="/">Home</Link>
        <Link  to="about">about</Link>
        <Link  to="services">services</Link>
        <Link  to="blog">blog</Link>
        <Link  to="contact">contact</Link>
        <Link to="signin">sign in</Link>
      </aside>
      <nav className="navbar">
      <Link  className="navbar-brand" to="/">
          <img src={brendLogo} alt="" />
        </Link>
      <ul className="navbar_ul">
          <li>
            <Link  className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link  className="nav-link" to="about">
              about
            </Link>
          </li>
          <li>
            <Link  className="nav-link" to='services'>services</Link>
          </li>
          <li>
            <Link className="nav-link" to='blog'>blog</Link>
          </li>
          <li>
            <Link className="nav-link" to='contact'>contact</Link>
          </li>
        </ul>
          <FaBars className="bars-icon" onClick={openOffcanvas} />
    <Link to= 'signin'>  <Button valueOfButton="sign in" nameOfClass="btn btn-primary" /></Link>
      </nav>
    </>
  );
};

export default Navbar;
