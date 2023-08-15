import React from "react";
import "./selecteduni.css";
const SelectedUniHero = ({ uniName, BGImage, data }) => {
  return (
    <>
      <div
        className="main-selected_uni_wrap"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${BGImage})`,
        }}
      >
        <div className="selected_uni_container">
          <div className="selected_uni_left_div">
            <div className="selected_uni_heading_wrap">
              <h1 className=" pb-5 selected_uni_first_h1">
                <b>Apply to {uniName}</b> : Accredited university partner
              </h1>
            </div>
            <p className="selectedUniHero_main_P">
              Get a free 48 hour fast-track assessment (worth $185*) to maximize
              your chance of getting admitted
            </p>
            <div className="universities_hero_left_btn_wrap">
              <label htmlFor="universities_hero_left_btn  universities_hero_left_btn_main_label">
                <p className="selected_uni_left_labels"> Ready to apply</p>
                <button className="universities_hero_left_btn1">
                  Start Application
                </button>
              </label>

              <label htmlFor="universities_hero_left_btn universities_hero_left_btn_main_label">
                <p className="selected_uni_left_labels selected_uni_left_label2">
                  Why apply via Studee?{" "}
                </p>
                <button className="universities_hero_left_btn2">
                  Boost your admission chances
                </button>
              </label>
            </div>
          </div>

          <div className="selected_uni_right_div">
            <div className="selected_uni_right_div_section_body">
              <h2>Uni Facts</h2>
              <p className="mtc">
                {data.city.name},
                <span className="dtc" style={{ marginBottom: "5px" }}>
                  <b> {data.country.name}</b>
                </span>
              </p>
              <div className="uni_bottom_square_wrap">
                <div className="uni_bottom_square_box">
                  <p className="ltc">Type</p>
                  <b>{data.university.type}</b>
                </div>
                <div className="uni_bottom_square_box">
                  <p className="ltc">Students</p>
                  <b> 3000 </b>
                </div>
                <div className="uni_bottom_square_box">
                  <p className="ltc">Nationalities</p>
                  <b> {data.university.nationalities}</b>
                </div>
                <div className="uni_bottom_square_box">
                  <p className="ltc">Total programs</p>
                  <b>140</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectedUniHero;
