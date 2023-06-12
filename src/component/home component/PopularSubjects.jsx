import React, { useState } from "react";
import "./PopularSubjects.css";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

const PopularSubjects = () => {
  const allSubjects = [
    "Accounting",
    "Agriculture",
    "Economics",
    "Art",
    "Biology",
    "Communication",
    "History",
    "Economics",
    "Design",
    "Engineering",
    "Agriculture",
    "History",
  ];

  const [visibleSubjects, setVisibleSubjects] = useState(
    allSubjects.slice(0, 9)
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

  return (
    <>
      <div className="populer_subject_wrap">
        <div className="populer_subject_main">
          <div className="populer_subject_head">
            <h1 className="mtc">Popular Subjects</h1>
          </div>
          <div className={`populer_subject_body ${showAll ? "fade-in" : ""}`}>
            {visibleSubjects.map((subject, index) => (
              <div key={index} className="populer_subject_card">
                <h2>{subject}</h2>
              </div>
            ))}
          </div>
          <div className="populer_subject_bottom">
             <p style={{display:'flex', alignItems:'center',padding:'5px 0px',cursor:'pointer'}} onClick={handleSeeAllSubjects}>
              {showAll ? (
                <>
                  See less subjects <BsFillArrowUpCircleFill style={{paddingLeft:'5px'}} size={25} />
                </>
              ) : (
                <>
                  See all subjects <BsFillArrowDownCircleFill style={{paddingLeft:'5px'}} size={25} />
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
