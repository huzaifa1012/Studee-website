import React from "react";
import "./ProgramCard.css";
import "./FilterSection.css";
import { BsFilterRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { useState } from "react";
import VerticalTabs from "../Reusable components/modalContent.jsx";
import { animateScroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProgram } from "../../store/selectedProgramSlice";
import { useNavigate } from "react-router-dom";
const ProgramCard = ({ data }) => {
  const [modal2Open, setModal2Open] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(data);
  const handleNavigation = async (data) => {
    console.log(data)
    try {
      dispatch(setSelectedProgram({ data }));

      localStorage.setItem("universityId", data.university._id);
      localStorage.setItem("programId", data._id);

      navigate("/apply/program/eligibility");
    } catch (error) { }
  };

  const countries = [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
  ];

  return (
    <>
      <div className="Program_card_wrap">
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div className="Program_card_main">
                  <div className="Program_card_left">
                    <div className="Program_card_left_top">
                      <div className="Program_card_left_top_left">
                        <img
                          src={`https://studyapi.ieodkv.com/universities/images/${item.logoImage}`}
                          alt=""
                        />
                      </div>
                      <div className="Program_card_left_top_right pl-10">
                        <h2>
                          <b>{item.name} - </b> {item.subject.name}
                        </h2>{" "}
                        <p>
                          {" "}
                          <b> {item.university.universityName},</b>{" "}
                          {item.city.name}, {item.country.name}
                        </p>
                      </div>
                    </div>
                    <div className="Program_card_left_bottom">
                      <div className="program_card_square_box_wrap">
                        <div className="program_bottom_square_box">
                          <p className="ltc">Type</p>
                          <b> {item.university.type} </b>
                        </div>
                        <div className="program_bottom_square_box">
                          <p className="ltc">Duration</p>
                          <b>{item.duration}</b>
                        </div>
                        <div className="program_bottom_square_box">
                          <p className="ltc">Tutuion Fees </p>
                          <b> {item.annualTutionFees} </b>
                        </div>
                        <div className="program_bottom_square_box">
                          <p className="ltc">Nationalities</p>
                          <b> {item.university.nationalities} </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Program_card_right">
                    <div
                      className="programs_card_right_btn1"
                      onClick={() => handleNavigation(item)}
                    >
                      <button>Start Application </button>
                    </div>
                    <div

                      onClick={() => {
                        navigate(`/selected-program-detail/${item.urlName}`)
                      }}
                      className="programs_card_right_btn2"
                    >
                      <button>Program Details</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ProgramCard;
