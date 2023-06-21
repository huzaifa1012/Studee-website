import React from "react";
import "./visaRequirmentCard.css";
import { BiRightArrowAlt } from "react-icons/bi";

const VisaRequirementCard = () => {
  return (
    <div className="main-visaRequirmentCard_wrap">
      <div className="visaRequirmentCard_container">
        <div className="visaRequirmentCard_left_div">
          <h1 className="mtc pb-5">Find & apply for your ideal program</h1>
          <p className="ltc">
            Get a free 48 hour fast-track assessment (worth $185*) to maximize
            your chance of getting admitted
          </p>
          <div className="universities_hero_left_btn_wrap">
            <button className="universities_hero_left_btn">
              How study can help
            </button>
          </div>
        </div>

        <div className="visaRequirmentCard_right_div">
          <div className="visaRequirmentCard_right_div_section_body">
           
            {/* <h2>Find your best matches</h2>
            <p className="mtc">
              Answer a few simple questions to get a tailored list of the
              programs that best match your needs
            </p>
            <div className="universities_hero_right_btn_wrap">
            <button className="universities_hero_right_btn">Get Started <BiRightArrowAlt className="heroBtnIcon" size={25} /></button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaRequirementCard;
