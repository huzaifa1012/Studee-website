import React from "react";
import "./hero.css";
import heroImage from "../../assets/illustration__feature--homepage-hero.avif";

const Hero = () => {
  return (
    <div className="main-hero_wrap">
    <div className="hero_container">
      <div className="left_div">
        <h1 className="mtc">
          We maximize your chance of getting admitted to your chosen
          universities
        </h1>
        <p className="ltc">
          The smart alternative to applying direct for a degree abroad and the
          easy way to find programs that match your eligibility and aspirations
        </p>
      </div>
      <div className="right_div">
        <img src={heroImage} alt="" className="hero-right-img" />
      </div>
    </div>
    </div>
  );
};

export default Hero;
