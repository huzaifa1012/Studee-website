import React from "react";
import "./BrowseByCountry.css";
import dad from "../../assets/studee_short_logo.png";
const BrowseByCountry = () => {
  return (
    <>
      <div className="browseByCountry_wrap">
        <div className="browseByCountry_main">
          <div className="browseByCountry_head">
            <h1 className="mtc">Browse by country</h1>
          </div>
          <div className="browseByCountry_body">
            <div
              className="browseByCountry_card"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${"https://images.studee.com/images/country/country__usa.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=580&h=350&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"})`,
              }}
            >
              <h2>USA</h2>
            </div>
            <div
              className="browseByCountry_card"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${"https://images.studee.com/images/country/country__uk.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=580&h=350&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"})`,
              }}
            >
              <h2>Canada</h2>
            </div>
            <div
              className="browseByCountry_card"
              style={{
                backgroundImage: `url(${"https://images.studee.com/images/country/country__australia.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"})`,
              }}
            >
              <h2>UAE</h2>
            </div>
            <div
              className="browseByCountry_card"
              style={{
                backgroundImage: `url(${"https://images.studee.com/images/country/country__belgium.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"})`,
              }}
            >
              <h2>Austria</h2>
            </div>
            <div
              className="browseByCountry_card"
              style={{
                backgroundImage: `url(${"https://images.studee.com/images/country/country__canada.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"})`,
              }}
            >
              <h2>cyprus</h2>
            </div>
            <div
              className="browseByCountry_card"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${"https://images.studee.com/images/country/country__cyprus.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"})`,
              }}
            >
              <h2>UK</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseByCountry;
