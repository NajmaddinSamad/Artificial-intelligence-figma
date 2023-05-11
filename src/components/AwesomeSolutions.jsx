import React from "react";
import '../assets/style/AwesomeSolutions.css'

const AwesomeSolutions = () => {
  return (
    <article className="awesome-solutions row">
      <div className="left-solutions col-12 col-md-6 col-lg-6">
        <h3>What our clients say about  our awesome solutions</h3>
        <p>
          To take a trivial example, which of us ever undertakes
          laborious physical exercise, except to obtain some advantage
          from it who do not know.
        </p>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing.
        </p>
        <p>
          Lorem ipsum is placeholder previewing layouts and visual
          mockups.
        </p>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and
          visual mockups.
        </p>
      </div>
      <div className="right-solutions col-12 col-md-6 col-lg-6">
        <img src="https://res.cloudinary.com/doqjpxywu/image/upload/v1681730724/about3_1_ryfkkn.png" />
      </div>
    </article>
  );
};

export default AwesomeSolutions;
