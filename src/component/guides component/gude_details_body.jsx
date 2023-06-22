import React from "react";
import "./guide_detail_body.css"

const GuideDetailBody = ({ desciption, body}) => {
  return (
    <div className="GuideDetailBody_wrap">
      <div className="GuideDetailBody_main">
      <div className="GuideDetailBody_left">
        <p>{desciption}</p>
        <button  className="universities_hero_left_btn fsinm">
              Student Visa Requirements
            </button>
           {body} 
      </div>

      <div className="GuideDetailBody_right">
      </div>
      </div>
    </div>
  );
};

export default GuideDetailBody;
