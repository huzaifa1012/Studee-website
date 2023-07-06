import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const ProgramDetailHero = () => {
  const handleNavigation = () => {
    animateScroll.scrollToTop();
  };
  return (
    <>
      <div className="main-selected_uni_wrap">
        <div className="selected_uni_container">
          <div className="selected_uni_left_div">
            <div className="selected_uni_heading_wrap">
              <h1 className="pb-5 selected_uni_first_h1">
                <b>Apply to 3A L'ecole du Management Responsable</b> :
                Accredited university partner
              </h1>
            </div>
            <p className="selectedUniHero_main_P">
              We maximize your chance of getting admitted to your chosen
              universities. Reduced application fees, a free assessment and
              access to a dedicated advisor
            </p>
            <div className="universities_hero_left_btn_wrap">
              <label htmlFor="universities_hero_left_btn  universities_hero_left_btn_main_label">
                <p className="selected_uni_left_labels"> Ready to apply</p>
                <Link to="/personalized-matches" onClick={handleNavigation} >
                  <button className="universities_hero_left_btn1">
                    Start Application
                  </button>
                </Link>
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
                Milan,{" "}
                <span className="dtc" style={{ marginBottom: "5px" }}>
                  <b>italy</b>
                </span>
              </p>
              <div className="uni_bottom_square_wrap">
                <div className="uni_bottom_square_box">
                  <p className="ltc">Program Type</p>
                  <b> Bachelor's</b>
                </div>
                <div className="uni_bottom_square_box">
                  <p className="ltc">Duration</p>
                  <b> 2 Years</b>
                </div>
                <div className="uni_bottom_square_box">
                  <p className="ltc">Annual Fee</p>
                  <b> $23300</b>
                </div>
                <div className="uni_bottom_square_box">
                  <p className="ltc">Language Taught in</p>
                  <b>English</b>
                </div>
                <div
                  className="uni_bottom_square_box"
                  style={{ width: "100%" }}
                >
                  <p className="ltc">Start Date</p>
                  <b>February, May, September</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailHero;
