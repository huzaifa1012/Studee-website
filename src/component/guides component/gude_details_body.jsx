import React from "react";
import "./guide_detail_body.css"
import { Link } from "react-router-dom";

const GuideDetailBody = ({ desciption, body, VisaRequirementLink, }) => {
  return (
    <div className="GuideDetailBody_wrap">
      <div className="GuideDetailBody_main">
      <div className="GuideDetailBody_left">
        <p>{desciption}</p>
{VisaRequirementLink && 
        <Link to={`/visas-&-travel/${VisaRequirementLink}`}>
        <button  className="universities_hero_left_btn fsinm">
              Student Visa Requirements
            </button>
        </Link>
}
           {body} 
      </div>

      <div className="GuideDetailBody_right">
      </div>
      </div>
    </div>
  );
};

export default GuideDetailBody;
