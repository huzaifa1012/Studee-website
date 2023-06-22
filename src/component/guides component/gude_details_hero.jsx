import React from "react";
import "./guide_detail_hero.css"

const GuideDetailHero = ({ heading, background }) => {
  return (
    <div className="GuideDetailHero_wrap">
      <div
        className="GuideDetailHero_Main"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default GuideDetailHero;
