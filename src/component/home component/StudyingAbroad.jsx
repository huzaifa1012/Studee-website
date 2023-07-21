import React from "react";
import "./studyingAbroad.css";
import { Link } from "react-router-dom";

const StudyingAbroad = ({ studyingAbroadData }) => {
  // console.log(studyingAbroadData)
  return (
    <>
      <div className="studying_abroad_wrap">
        <div className="studying_abroad_main">
          <div className="studying_abroad_head">
            <h1 className="mtc">Studying abroad</h1>
          </div>
          <div className="studying_abroad_body">
            {studyingAbroadData.map((data) => (
              <div className="studying_abroad_card" key={data._id}> 
                <img src={`https://ieodkvapi-548f8ac2251a.herokuapp.com/guides/${data.image}`} alt="" />
                <div className="studying_abroad_card_bottom">
                  <h2>{data.guideName}</h2>
                  <p className="ltc">{data.description.slice(0,100)}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/guide" className="studying_abroad_bottom">
            <p>See all guides</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudyingAbroad;
