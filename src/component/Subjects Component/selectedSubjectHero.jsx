import React from "react";
import "./selectedSubject.css";
import { useLocation } from "react-router-dom";
import {BiRightArrowAlt} from "react-icons/bi"
const SelectedSubjectHero = ({subjectName,BGImage}) => {
  // const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);

  // const subjectName = searchParams.get("subject");
  // const BGImage = searchParams.get("backgroundImage");

  return (
    <>
      <div className="main-selectedSubHero_wrap"   style={{
        backgroundImage: `url(${BGImage})`,}}>
        <div className="selectedSubHero_container">
          <div className="selectedSubHero_left_div">
            <h1 className=" pb-5">Study {subjectName} Abroad</h1>
            <p >
              Find & apply to programs that match your eligibility and
              aspirations. We maximise your chance of getting admitted to your
              chosen universities
            </p>
            <div className="universities_hero_left_btn_wrap">
            <button className="universities_hero_left_btn_org">
              Find Your Perfect Program
              <BiRightArrowAlt className="heroBtnIcon" size={25} />

            </button>

              <button className="universities_hero_left_btn_trp">
                How study can help
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectedSubjectHero;
