import React, { useState } from "react";
import "./PopularSubjects.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { animateScroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const PopularSubjects = ({ heading, paragraph, allSubjects, length }) => {

  const navigate = useNavigate()

  const [subjects, setVisibleSubjects] = useState(
    allSubjects.slice(0, length)
  );
  const [showAll, setShowAll] = useState(false);

  const handleSelectSubject = (item) => {
    navigate(`/subjects/${item.urlName}`)

  }
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
      <div className="populer_subject_wrap" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className="populer_subject_main" style={{ width: '90%' }}>
          <div className="populer_subject_head">
            <h1 className="mtc">{heading && heading}</h1>
            <br />
            <p>{paragraph && paragraph}</p>
            <br />
          </div>
          <div className={`populer_subject_body ${showAll ? "fade-in" : ""}`}>
            {allSubjects && allSubjects.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSelectSubject(item)}
                  className="populer_subject_card"
                >
                  <div>
                    <h2>{item.name ? item.name : item}</h2>
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

export default PopularSubjects;
