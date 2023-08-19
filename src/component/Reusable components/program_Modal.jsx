import React from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCheckboxData } from "../../store/checkboxDataSlice";
const handleNavigation = () => {};
const ViewProgMod = ({ isModalOpen, onClose, programQuery, paramsFeild }) => {
  const navigate = useNavigate();
  const id = useSelector((state) => state.userId);
  const dispatch = useDispatch();

  const Query = [
    {
      field: paramsFeild,
      name: programQuery,
    },
  ];

  const handleSaveFilters = async () => {
    animateScroll.scrollToTop();
    if (!id) {
      console.log("ID does not exist");
      Query.map((data, index) => {
        localStorage.setItem(data.field, data.name);
        navigate("/programs");
      });
      return;
    }

    try {
      dispatch(addCheckboxData([Query]));
      const response = await axios.put(
        `https://studyapi.ieodkv.com/students/${id}`,
        { searchParameters: Query }
      );
      console.log("Response", response.data);
      navigate("/programs");
    } catch (error) {
      console.log("Failed to update", error);
    }
  };
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
            <div onClick={handleNavigation}>
              <Link to="/personalized-matches">
                <button className="mb-5 modal_bigBtn">
                  Get your personalized matched
                </button>
              </Link>
            </div>

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
              <div onClick={handleSaveFilters}>
                <button>View Programs</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ViewProgMod;
