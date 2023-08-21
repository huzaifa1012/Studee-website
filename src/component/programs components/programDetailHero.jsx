import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { FcEmptyFilter } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { setSelectedProgram } from "../../store/selectedProgramSlice";

const ProgramDetailHero = ({ data }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigation = async (data) => {
    console.log(data)
    try {
      dispatch(setSelectedProgram({ data }));

      localStorage.setItem("universityId", data.university._id);
      localStorage.setItem("programId", data._id);

      navigate("/apply/program/eligibility");
    } catch (error) { }
  };

  return (
    <>
      {data ? <>

        <div className="main-selected_uni_wrap">
          <div className="selected_uni_container">
            <div className="selected_uni_left_div">
              <div className="selected_uni_heading_wrap">
                <h1 className="pb-5 selected_uni_first_h1">
                  <b>Apply to {data.name}</b> :
                  {" "} {data.university && data.university.universityName}
                  <br />
                  {" "}At : {data.city && data.city.name}, {" "}{data.country && data.country.name}
                </h1>
              </div>
              <p className="selectedUniHero_main_P">
                {/* We maximize your chance of getting admitted to your chosen
                universities. Reduced application fees, a free assessment and
                access to a dedicated advisor */}

              </p>
              <div className="universities_hero_left_btn_wrap">
                <label htmlFor="universities_hero_left_btn  universities_hero_left_btn_main_label">
                  <p className="selected_uni_left_labels"> Ready to apply</p>
                  <div onClick={() => handleNavigation(data)} >
                    <button className="universities_hero_left_btn1">
                      Start Application
                    </button>
                  </div>
                </label>

                <label htmlFor="universities_hero_left_btn universities_hero_left_btn_main_label">
                  <p className="selected_uni_left_labels selected_uni_left_label2">
                    Why apply via Studee?{" "}
                  </p>
                  <ScrollLink to="whyStudee" smooth={true} duration={500}>
                    <button className="universities_hero_left_btn2">
                      Boost your admission chances
                    </button>
                  </ScrollLink>
                </label>
              </div>
            </div>

            <div className="selected_uni_right_div">
              <div className="selected_uni_right_div_section_body">
                <h2>Program facts</h2>
                <p className="mtc">
                  {data.country.name},
                  <span className="dtc" style={{ marginBottom: "5px" }}>
                    <b>{data.city.name}</b>
                  </span>
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p className="ltc">Program Type</p>
                    <b>{data.programTypeName}</b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p className="ltc">Duration</p>
                    <b> {data.duration}</b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p className="ltc">Annual Fee</p>
                    <b>{data.annualTutionFees}</b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p className="ltc">Language Taught in</p>
                    <b>{data.languageThoughtIn}</b>
                  </div>
                  <div
                    className="uni_bottom_square_box"
                    style={{ width: "100%" }}
                  >
                    <p className="ltc">Start Date</p>
                    <b>{data.startData && data.startData[0].startDate}</b>
                    <b>/{data.startData && data.startData[0].startMonth}</b>
                    <b>/{data.startData && data.startData[0].startYear}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </> : <>
        <div
          style={{
            width: "100%",
            height: "50vh",
            background: "rgb(244, 245, 247)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "70%",
            }}
          >
            <FcEmptyFilter size={80} />
            <p style={{ fontSize: "20px" }}>No program matched</p>
          </div>
        </div>
      </>}
    </>);
};

export default ProgramDetailHero;
