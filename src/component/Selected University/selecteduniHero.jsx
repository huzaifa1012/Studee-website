import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "./selecteduni.css"
const SelectedUniHero = () => {
  return (
    <>
      <div className="main-selected_uni_wrap">
        <div className="selected_uni_container">
          <div className="selected_uni_left_div">
            <div className="selected_uni_heading_wrap">
            <h1 className=" pb-5 selected_uni_first_h1">Apply to Altinbas University:</h1>
            <h1 className=" pb-5">Accredited university partner</h1>
            </div>
            <p >
              Get a free 48 hour fast-track assessment (worth $185*) to maximize
              your chance of getting admitted
            </p>
            <div className="universities_hero_left_btn_wrap">

            <label htmlFor="universities_hero_left_btn">
              <button className="universities_hero_left_btn1">
                Start Application
              </button>
              </label>
              
              <label htmlFor="universities_hero_left_btn">
              <button className="universities_hero_left_btn2">
                Boost your admission chances
              </button>
              </label>
            </div>
          </div>

          <div className="selected_uni_right_div">
            <div className="selected_uni_right_div_section_body">
              <h2>Find your best matches</h2>
              <p className="mtc">
                Answer a few simple questions to get a tailored list of the
                programs that best match your needs
              </p>
              <div className="universities_hero_right_btn_wrap">
                <button className="universities_hero_right_btn">
                  Get Started{" "}
                  <BiRightArrowAlt className="heroBtnIcon" size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectedUniHero;
