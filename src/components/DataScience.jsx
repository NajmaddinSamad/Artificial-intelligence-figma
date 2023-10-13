import React from "react";
import "../assets/style/DataScience.css";
import Button from "./Button";
const DataScience = () => {
  return (
    <section className="data-science row">
      <div className="data-left col-12 col-md-6 col-lg-6">
        <img src="https://res.cloudinary.com/doqjpxywu/image/upload/v1681721705/about_4_ot2l6t.png" alt="" />
      </div>
      <div className="data-right col-12 col-md-6 col-lg-6">
        <h2>Apply AI, Deep Learning and Data Sciece to solve</h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the <br /> graphic, print,
          and publishing industries for previewing <br /> layouts and visual mockups.
        </p>
        <Button
          nameOfClass="btn btn-primary text-white  "
          valueOfButton="Learn More"
        />
      </div>
    </section>
  );
};

export default DataScience;
