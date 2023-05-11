import React from "react";
import "../assets/style/NextGeneration.css";
import Button from "./Button";
import generation from '../assets/images/generation.svg'
import watchLogo from '../assets/images/watch.svg'
const NextGeneration = () => {
  return (

    
    <>
      <section className="next-generation row">
        <div className="left col-12 col-md-6 col-lg-6">
          <h4>Next genaretion platform</h4>
          <h1>Artificial intelligence & Syber security</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <Button valueOfButton="Get Started" nameOfClass="btn btn-primary text-white button" />
          <Button valueOfButton="Watch Video" nameOfClass="btn btn-primary text-white" iconPhoto = {watchLogo} />
        </div>
        <div className="righ col-12 col-md-6 col-lg-6">
          <img src={generation} alt="" />
        t</div>
      </section>
    </>
  );
};

export default NextGeneration;
