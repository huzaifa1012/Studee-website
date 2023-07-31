import React, { useState, useRef   } from "react";
import "./selectedSubject.css";
import { BiRightArrowAlt } from "react-icons/bi";
import ViewProgMod from "../Reusable components/program_Modal";
import { Link } from "react-scroll";

const SelectedSubjectHero = ({ subjectName, BGImage , scrollToComponent2,countryName }) => {
  const component1Ref = useRef(null);

  const handleButtonClick = () => {
    scrollToComponent2();
  };
  
  // modal code starts here
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // modal code ends


  
  
  return (
    <>
      <ViewProgMod isModalOpen={isModalOpen} onClose={handleCancel} />
      <div className="modalContainer">
      </div>
      <div
        className="main-selectedSubHero_wrap"
        style={{
          backgroundImage: `url(${BGImage})`,
        }}
      >
        <div className="selectedSubHero_container">
          <div className="selectedSubHero_left_div">
            {countryName ? 
              <h1 className=" pb-5">StudyA {subjectName} In {countryName} </h1>
            
            :
            <h1 className=" pb-5">StudyB {subjectName} Abroad</h1>
            
            }
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
                Find Your Perfect Program
                <BiRightArrowAlt className="heroBtnIcon" size={25} />
              </button>

<Link to="whyStudee" smooth={true} duration={1500} >
 
              <button   className="universities_hero_left_btn_trp">
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
