import React, { useState } from "react";
import "./PopularSubjects.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const PopularSubjectsSelectedCountry = ({heading,allSubjects,length}) => {

  const [subjects, setVisibleSubjects] = useState(
    allSubjects.slice(0,length)
  );
  const [showAll, setShowAll] = useState(false);

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
  return (
    <>
      <div className="populer_subject_wrap">
        <div className="populer_subject_main">
          <div className="populer_subject_head">
            <h1 className="mtc">{heading}</h1>
          </div>
          <div className={`populer_subject_body ${showAll ? "fade-in" : ""}`}>
            {allSubjects?.map((item,index) => {
              return (
                <Link
                  key={index}
                  onClick={handleNavigation}
                  className="populer_subject_card"
                >
                  <div key={index}>
                    <h2>{item.subject}</h2>
                  </div>
                </Link>
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
