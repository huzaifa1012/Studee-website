import React, { useState } from "react";
import "./PopularSubjects.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const allSubjects = [
  {subject: "Accounting",image:"https://images.studee.com/images/program/programs__creative-arts-design.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",},
  {subject: "Agriculture",image: "https://images.studee.com/images/program/programs__agriculture-food-animal-sciences.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",},
  // ["Economics"],
  {subject:"Art",image:'https://images.studee.com/images/program/programs__creative-arts-design.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80'},
  {subject:"Biology",image:"https://images.studee.com/images/program/programs__life-sciences-medicine-health.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
  {subject:"Communication",image:"https://images.studee.com/images/program/programs__business-management-studies.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
  {subject:"History",image:""},
  {subject:"Economics",image:""},
  {subject:"Business",image:"https://images.studee.com/images/program/programs__business-management-studies.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
  {subject:"Engineering",image:""},
  {subject:"Agriculture",image:""},
  {subject:"History",image:""},
  {subject:"LAW",image:""},
];
const PopularSubjects = ({heading,allSubjects,length}) => {

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

  return (
    <>
      <div className="populer_subject_wrap">
        <div className="populer_subject_main">
          <div className="populer_subject_head">
            <h1 className="mtc">{heading}</h1>
          </div>
          <div className={`populer_subject_body ${showAll ? "fade-in" : ""}`}>
            {subjects.map((item,index) => {
              return (
                <Link
                  key={index}
                  to={`/selected-subject?subject=${encodeURIComponent(item.subject)}&backgroundImage=${encodeURIComponent(item.image)}`}
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

export default PopularSubjects;
