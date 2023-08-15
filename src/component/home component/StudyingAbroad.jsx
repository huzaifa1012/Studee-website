import React from "react";
import "./studyingAbroad.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const StudyingAbroad = ({ studyingAbroadData }) => {
  const navigate = useNavigate();
  const navigateToDetaills = (data) => {
    navigate(`/guide1/${data}`);
  };
  return (
    <>
      <div className="studying_abroad_wrap">
        <div className="studying_abroad_main">
          <div className="studying_abroad_head">
            <h1 className="mtc">Studying abroad</h1>
          </div>
          <div className="studying_abroad_body">
            {studyingAbroadData.map((data) => (
              <div
                className="studying_abroad_card"
                onClick={() => navigateToDetaills(data.urlName)}
                key={data._id}
              >
                <img
                  src={`https://studyapi.ieodkv.com/guides/${data.image}`}
                  alt=""
                />
                <div className="studying_abroad_card_bottom">
                  <h2>{data.guideName}</h2>
                  <p className="ltc">{parse(data.description.slice(0, 100))}</p>
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
