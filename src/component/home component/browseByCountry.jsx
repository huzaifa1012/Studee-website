import React from "react";
import "./BrowseByCountry.css";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const BrowseByCountry = ({ heading, countries }) => {
  const navigate = useNavigate();
  const handleNavigation = (country) => {
    animateScroll.scrollToTop();

    navigate(`/${country.urlName}`);
  };

  return (
    <div className="browseByCountry_wrap">
      <div className="browseByCountry_main">
        <div className="browseByCountry_head">
          <h1 className="mtc">{heading}</h1>
        </div>
        <div className="browseByCountry_body">
          {countries?.map((country, index) => (
            <div
              onClick={() => handleNavigation(country)}
              className="browseByCountry_card"
              key={index}
              style={{
                backgroundImage: `url(https://studyapi.ieodkv.com/countries/images/${country.countryImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                blendAlpha: 80,
              }}
            >
              <h2>{country.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByCountry;
