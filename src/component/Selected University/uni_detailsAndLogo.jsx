import React from "react";
import "./uni_detailsAndLogo.css";
const Uni_details_And_Logo = () => {
  return (
    <>
      <div className="uni_detailsAndLogo-section">
        <div className="uni_detailsAndLogo-content">
          <div className="uni_detailsAndLogo-text">
            <h1 className="uni_detailsAndLogo-heading">
              Study abroad at Abertay University
            </h1>
            <p className="uni_detailsAndLogo-paragraph ltc">
              Previously known as the University of Abertay, Abertay University
              is a public institution located in the heart of Dundee, Scotland.
              The University boasts a close-knit campus, with all buildings and
              local amenities within 15 minutes of each other. <br /><br />  The University
              offers a wide range of programs at undergraduate, postgraduate
              taught, and postgraduate research levels. Abertay is particularly
              known for its computer games degrees, and was the first university
              to offer such programs. <br /><br /> The campus is made up of four buildings,
              with another four residence halls offering double and single
              rooms, bedsits, and rooms with en-suites. There are also a number
              of leisure facilities available to students on campus, including a
              gym and more than 20 sports clubs you can join. Find & apply to
              programs <br />
              <br />
            </p>
          </div>
          <div className="uni_detailsAndLogo-image">
            <img
              src="https://images.studee.com/images/university/university__abertay-university--logo.svg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=262&h=262"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Uni_details_And_Logo;
