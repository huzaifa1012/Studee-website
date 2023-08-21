import React, { useState, useRef } from "react";
import "./selectedSubject.css";
import { BiRightArrowAlt } from "react-icons/bi";
import ViewProgMod from "../Reusable components/program_Modal";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";

const SelectedSubjectHero = ({
  subjectName,
  BGImage,
  countryName,
  paramsFeild,
  dataToAddProgram,
  uniModal
}) => {
  const component1Ref = useRef(null);

  // modal code starts here
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // modal code ends
  // console.log("dataToAddProgram", dataToAddProgram);

  return (
    <>
      <ViewProgMod
        dataToAddProgram={dataToAddProgram}
        university={uniModal ? uniModal : false}
        isModalOpen={isModalOpen}
        paramsFeild={paramsFeild}
        programQuery={
          dataToAddProgram.universityName
            ? dataToAddProgram.universityName
            : dataToAddProgram.name
        }
        onClose={handleCancel}
      />
      <div className="modalContainer"></div>
      <div
        className="main-selectedSubHero_wrap"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${BGImage})`,
        }}
      >
        <div className="selectedSubHero_container">
          <div className="selectedSubHero_left_div">
            {countryName ? (
              <h1 className=" pb-5">
                Study {subjectName} In {countryName}{" "}
              </h1>
            ) : (
              <h1 className=" pb-5">Study {subjectName} Abroad</h1>
            )}
            <p>
              Find & apply to programs that match your eligibility and
              aspirations. We maximise your chance of getting admitted to your
              chosen universities
            </p>
            <div className="universities_hero_left_btn_wrap">
              <button
                className="universities_hero_left_btn_org"
                onClick={showModal}
              >
                Start Application
                <BiRightArrowAlt className="heroBtnIcon" size={25} />
              </button>


              <Link to="whyStudee" smooth={true} duration={1000}>
                <button className="universities_hero_left_btn_trp">
                  How study can help
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectedSubjectHero;
