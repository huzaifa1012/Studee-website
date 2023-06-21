import React from 'react';
import "./Undergraduate_underGraduatePrograms.css"
const UndergraduateProgCard = ()=>{

    return (
        <>
          <div className="underGraduateProgram_card_main">
          <div className="underGraduateProgram_card_left">
            <div className="underGraduateProgram_card_left_top">
              <div className="underGraduateProgram_card_left_top_left">
                <img
                  src="https://images.studee.com/images/university/university__academy-of-information-technology--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85"
                  alt=""
                />
              </div>
              <div className="underGraduateProgram_card_left_top_right pl-10">
                <h2><b>2D Animation (Melbourne Campus) </b>  - BAnim</h2>{" "}
                <p> <b> AIT Academy of Interactive Technology, </b> Australia </p>
              </div>
            </div>
            <div className="underGraduateProgram_card_left_bottom">
              <div className="underGraduateProgram_card_square_box_wrap">
                <div className="program_bottom_square_box">
                  <p className="ltc">Type</p>
                  <b> Private </b>
                </div>
                <div className="program_bottom_square_box">
                  <p className="ltc">Students</p>
                  <b> 3000 </b>
                </div>
                <div className="program_bottom_square_box">
                  <p className="ltc">Nationalities</p>
                  <b> 42 </b>
                </div>
                <div className="program_bottom_square_box">
                  <p className="ltc">Total programs</p>
                  <b>140</b>
                </div>
              </div>
            </div>
          </div>
          <div className="underGraduateProgram_card_right">
            <button className="underGraduatePrograms_card_right_btn1">
              Start Application{" "}
            </button>
            <button className="underGraduatePrograms_card_right_btn2 ">
              underGraduateProgram Details
            </button>
          </div>
        </div>
        </>
    )
}

export default UndergraduateProgCard