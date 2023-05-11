import React from "react";
import "../assets/style/Footer.css";
import FooterLogo from "../assets/images/socialsPhoto/footerlogo.svg";
import Letter from '../assets/images/socialsPhoto/letter.svg'
import Tell from '../assets/images/socialsPhoto/tell.svg'
import Place from '../assets/images/socialsPhoto/place.svg'
import Facebook from '../assets/images/socialsPhoto/facebook.svg'
import Twitter from '../assets/images/socialsPhoto/twitter.svg'
import Instagram from '../assets/images/socialsPhoto/instagram.svg'
import Linkedin from '../assets/images/socialsPhoto/linkedin.svg'
import Youtube from '../assets/images/socialsPhoto/youtube.svg'
import DownArrow from '../assets/images/socialsPhoto/downarrow.svg'
import Globus from '../assets/images/socialsPhoto/globus.svg'
const Footer = () => {
  return (
    <footer className="row">
      <address className="col-12 col-md-4 col-lg-2">
       <img src={FooterLogo} alt="" />
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and layouts and visual mockups.
        </p>
       <span> <img src={Letter} alt="" /><a href="emailto:Company@gmail.com">Company@gmail.com</a></span>
      <span> <img src={Tell} alt="" /> <a href="tell:0643321233">Phone: (064) 332-1233</a></span>
     <span>   <img src={Place} alt="" /><a href="#"> 450 Wall Street, USA, New York</a></span>
      </address>
      <div className="links col-12 col-md-4 col-lg-2">
        <h5>INFORMATION</h5>
        <a href="#"> New Collection</a>
        <a href="#"> About Store</a>
        <a href="#"> Contact Us</a>
        <a href="#"> Latest News</a>
        <a href="#"> Our Sitemap</a>
        <a href="#"> Orders History</a>
      </div>
      <div className="links col-12 col-md-4 col-lg-2">
        <h5>FOOTER MENU</h5>
        <a href="#"> Instagram profile</a>
        <a href="#"> New Collection</a>
        <a href="#">Contact Us</a>
        <a href="#">Latest News</a>
        <a href="#"> Terms & Conditions</a>
        <a href="#">Purchase Theme</a>
      </div>
      <div className="links col-12 col-md-4 col-lg-2">
        <h5>USEFUL LINKS</h5>
        <a href="#"> Instagram profile</a>
        <a href="#"> New Collection</a>
        <a href="#">Contact Us</a>
        <a href="#">Latest News</a>
        <a href="#"> Terms & Conditions</a>
        <a href="#">Purchase Theme</a>
      </div>
      <address className="col-12 col-md-4 col-lg-2">
        <h5>ABOUT THE STORE</h5>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and layouts and visual mockups.
        </p>
        <a href="https://www.company.com">www.company.com</a>
        <div className="social">
         <img src={Facebook} alt="" />
         <img src={Instagram} alt="" />
         <img src={Twitter} alt="" />
         <img src={Linkedin} alt="" />
         <img src={Youtube} alt="" />
        </div>
       <span> <img src={Globus} alt="" /> <a href="#">English</a> <img src={DownArrow} alt="" /></span>
      </address>
    </footer>
  );
};

export default Footer;
