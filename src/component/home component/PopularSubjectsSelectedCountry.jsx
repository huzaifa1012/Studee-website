import React, { useState } from "react";
import "./PopularSubjects.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const PopularSubjectsSelectedCountry = ({ heading, allSubjects, length, countryUrl }) => {

  const [subjects, setVisibleSubjects] = useState(allSubjects.slice(0, length));
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate()

  const handleSeeAllSubjects = () => {
    if (showAll) {
      setVisibleSubjects(allSubjects.slice(0, 9));
    } else {
      setVisibleSubjects(allSubjects);
    }
    setShowAll(!showAll);

  };
  const handleNavigation = () => {
    animateScroll.scrollToTop();
  };
  const handle_subject_click = (item) => {

    // navigate(`/subjects/country/${countryUrl}/subject/${item.urlName}`)
    navigate(`/subjects/${item.urlName}`)
  };
  return (
    <>
      <div className="populer_subject_wrap">
        <div className="populer_subject_main">
          <div className="populer_subject_head">
            <h1 className="mtc">{heading}</h1>
          </div>
          <div className={`populer_subject_body ${showAll ? "fade-in" : ""}`}>
            {allSubjects?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handle_subject_click(item)}
                  className="populer_subject_card"
                >
                  <div key={index}>
                    <h2>{item.name}</h2>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="populer_subject_bottom">
            <p
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 0px",
                cursor: "pointer",
              }}
              onClick={handleSeeAllSubjects}
            >
              {showAll ? (
                <>
                  See less subjects{" "}
                  <BsFillArrowUpCircleFill
                    style={{ paddingLeft: "5px" }}
                    size={25}
                  />
                </>
              ) : (
                <>
                  See all subjects{" "}
                  <BsFillArrowDownCircleFill
                    style={{ paddingLeft: "5px" }}
                    size={25}
                  />
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularSubjectsSelectedCountry;
