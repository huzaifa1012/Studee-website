import React from "react";
import "./BrowseByCountry.css";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const BrowseByCountry = ({ heading, countries }) => {
  const handleNavigation = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="browseByCountry_wrap">
      <div className="browseByCountry_main">
        <div className="browseByCountry_head">
          <h1 className="mtc">{heading}</h1>
        </div>
        <div className="browseByCountry_body">
          {countries.map((country, index) => (
            <Link onClick={handleNavigation} to={`/selected-country?Cname=${encodeURIComponent(country.name)}&backgroundImage=${encodeURIComponent(country.image)}`}
              className="browseByCountry_card"
              key={index}
              style={{
                backgroundImage: `url(${country.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                blendAlpha: 80,
              }}
            >
              <h2>{country.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByCountry;
