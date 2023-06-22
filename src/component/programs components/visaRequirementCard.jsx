import React from "react";
import "./visaRequirmentCard.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const VisaRequirementCard = () => {
  return (
    <div className="main-visaRequirmentCard_Ultra_wrap">
    <div className="main-visaRequirmentCard_wrap">
      <div className="visaRequirmentCard_container">
        <div className="visaRequirmentCard_left_div">
          
          <h1 className="mtc pb-5">
            Visa requirements for AIT Academy of Interactive Technology
          </h1>
          <p className="ltc">
            Many international students will require a visa to study in
            Australia, and this is a vital step of your study abroad journey.
            Make sure you understand the requirements you may need to meet
            before applying.
          </p>
          <div className="universities_hero_left_btn_wrap">
            <Link to="/guide-detail-page">
            <button  className="universities_hero_left_btn">
              Student Visa Requirements
            </button>
            </Link>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
};

export default VisaRequirementCard;
