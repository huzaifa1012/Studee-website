import React from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const handleNavigation = () => {
  animateScroll.scrollToTop();
};
const ViewProgMod = ({ isModalOpen, onClose }) => {
  return (
    <>
      <Modal
        className="custom-modal"
        title="Find your program matches"
        open={isModalOpen}
        footer={null}
        closable={true}
        onCancel={onClose}
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
              Answer a few extra questions on your background and study plans to
              get a more accurate list of program matches.
            </p>
            <Link to="/personalized-matches" onClick={handleNavigation}>
              <button className="mb-5 modal_bigBtn">
                Get your personalized matched
              </button>
            </Link>

            <div className="ml-1  mb-2">
              <a>Already Completed</a>
              <br />
              <a>Sign in to retrieve previous answer</a>
            </div>
            <div className="mt-2 mb-2"></div>
          </div>
          <div className="modal-bottom">
            <h3 className="mb-3 mt-3">
              {" "}
              <b> View programs </b>{" "}
            </h3>
            <p className="mb-3 mt-3">
              See a list of programs based on your current searches
            </p>
            <div className="modal-bottom-btn-wrap">
              <Link to="/programs" onClick={handleNavigation}>
                <button>View Programs</button>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ViewProgMod;
