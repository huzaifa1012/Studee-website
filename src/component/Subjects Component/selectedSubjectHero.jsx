import React, { useState } from "react";
import "./selectedSubject.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

const SelectedSubjectHero = ({ subjectName, BGImage }) => {
  // modal code starts here
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // modal code ends

  return (
    <>
      <div className="modalContainer">
        <Modal
          className="custom-modal"
          title="Find your program matches"
          open={isModalOpen}
          footer={null}
        >

          <div className="modal_Wrap">
            <div className="modal_top">
              <p className="mb-5 mt-2 ">
                <b>
                  Get a personalized list of programs that match your needs &
                  aspirations
                </b>
              </p>
              <p className="mb-5">
                Answer a few extra questions on your background and study plans
                to get a more accurate list of program matches.
              </p>
              <Link to="/personalized-matches">
              <button className="mb-5 modal_bigBtn">
                Get your personalized matched
              </button>
              </Link>

              <div className=" ml-1  mb-2">
                <a>Already Completed</a>
                <br />
                <a>Sign in to retrieve previous answer</a>
              </div>
              <div className="mt-2 mb-2"></div>
            </div>
            <div className="modal-bottom">
              <h3 className="mb-3 mt-3"> <b> View programs </b> </h3>
              <p className="mb-3 mt-3">
                See a list of programs based on your current searches
              </p>
              <div className="modal-bottom-btn-wrap">
              <Link to='/programs'>
              <button>View Programs</button>
              </Link>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div
        className="main-selectedSubHero_wrap"
        style={{
          backgroundImage: `url(${BGImage})`,
        }}
      >
        <div className="selectedSubHero_container">
          <div className="selectedSubHero_left_div">
            <h1 className=" pb-5">Study {subjectName} Abroad</h1>
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
