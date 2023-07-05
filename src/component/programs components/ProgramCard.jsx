import React from "react";
import "./ProgramCard.css";
import  "./FilterSection.css";
import { BsFilterRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { useState } from "react";
import VerticalTabs from "../Reusable components/modalContent.jsx";
const ProgramCard = () => {
  const [modal2Open, setModal2Open] = useState(false);
  
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
        <Modal
       className="Program_card_wrap_mainModal"  
          title="Apply Filters To Find Best Program"
          centered
          open={modal2Open}
          okButtonProps={{
            style: {
              backgroundColor: "#603392",
              padding: "0px 40px 0px 40px",
              fontSize: "20px",
              height: "50px",
            },
          }}
          cancelButtonProps={{
            style: {
              padding: "0px 30px 0px 30px",
              fontSize: "20px",
              height: "50px",
            },
          }}
          okText={"Apply"}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <div className="filter_modal_wrap">
            <div className="filter_modal_main">
              <div className="filter_modal_main_title">
                <VerticalTabs />
              </div>
            </div>
          </div>
        </Modal>
        <div className="Filters_sectioan_wrap">
          <div className="Filters_sectioan_main">
            <h2>Applied Filter :</h2>
          </div>
        </div>
        <div className="Filters_sectioan_wrap">
          <div className="Filters_sectioan_main2">
            <div className="Filters_sectioan_main2_left">
              <button
                className="Filters_sectioan_main2_btn focus:outline-blue-500"
                onClick={() => setModal2Open(true)}
              >
                <BsFilterRight size={28} /> Filter
              </button>
            </div>
            <div className="Filters_sectioan_main2_right">
              {/* <button className="mr-2">Sort by : </button> */}
              <select id="country" className="Filters_sectioan_main2_btn">
                {/* Sort by : */}
                <option value="">Sort by country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="Program_card_main">
          <div className="Program_card_left">
            <div className="Program_card_left_top">
              <div className="Program_card_left_top_left">
                <img
                  src="https://images.studee.com/images/university/university__academy-of-information-technology--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85"
                  alt=""
                />
              </div>
              <div className="Program_card_left_top_right pl-10">
                <h2>
                  <b>2D Animation (Melbourne Campus) </b> - BAnim
                </h2>{" "}
                <p>
                  {" "}
                  <b> AIT Academy of Interactive Technology, </b> Australia{" "}
                </p>
              </div>
            </div>
            <div className="Program_card_left_bottom">
              <div className="program_card_square_box_wrap">
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
          <div className="Program_card_right">
            <button className="programs_card_right_btn1">
              Start Application{" "}
            </button>
            <Link to="/program-details" className="programs_card_right_btn2">
              <button>Program Details</button>
            </Link>
          </div>
        </div>
        <div className="Program_card_main">
          <div className="Program_card_left">
            <div className="Program_card_left_top">
              <div className="Program_card_left_top_left">
                <img
                  src="https://images.studee.com/images/university/university__academy-of-information-technology--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85"
                  alt=""
                />
              </div>
              <div className="Program_card_left_top_right pl-10">
                <h2>
                  <b>2D Animation (Melbourne Campus) </b> - BAnim
                </h2>{" "}
                <p>
                  {" "}
                  <b> AIT Academy of Interactive Technology, </b> Australia{" "}
                </p>
              </div>
            </div>
            <div className="Program_card_left_bottom">
              <div className="program_card_square_box_wrap">
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
          <div className="Program_card_right">
            <button className="programs_card_right_btn1">
              Start Application{" "}
            </button>
            <Link to="/program-details" className="programs_card_right_btn2">
              <button>Program Details</button>
            </Link>
          </div>
        </div>
        <div className="Program_card_main">
          <div className="Program_card_left">
            <div className="Program_card_left_top">
              <div className="Program_card_left_top_left">
                <img
                  src="https://images.studee.com/images/university/university__academy-of-information-technology--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85"
                  alt=""
                />
              </div>
              <div className="Program_card_left_top_right pl-10">
                <h2>
                  <b>2D Animation (Melbourne Campus) </b> - BAnim
                </h2>{" "}
                <p>
                  {" "}
                  <b> AIT Academy of Interactive Technology, </b> Australia{" "}
                </p>
              </div>
            </div>
            <div className="Program_card_left_bottom">
              <div className="program_card_square_box_wrap">
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
          <div className="Program_card_right">
            <button className="programs_card_right_btn1">
              Start Application{" "}
            </button>
            <Link to="/program-details" className="programs_card_right_btn2">
              <button>Program Details</button>
            </Link>
          </div>
        </div>
        <div className="Program_card_main">
          <div className="Program_card_left">
            <div className="Program_card_left_top">
              <div className="Program_card_left_top_left">
                <img
                  src="https://images.studee.com/images/university/university__academy-of-information-technology--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85"
                  alt=""
                />
              </div>
              <div className="Program_card_left_top_right pl-10">
                <h2>
                  <b>2D Animation (Melbourne Campus) </b> - BAnim
                </h2>{" "}
                <p>
                  {" "}
                  <b> AIT Academy of Interactive Technology, </b> Australia{" "}
                </p>
              </div>
            </div>
            <div className="Program_card_left_bottom">
              <div className="program_card_square_box_wrap">
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
          <div className="Program_card_right">
            <button className="programs_card_right_btn1">
              Start Application{" "}
            </button>
            <Link to="/program-details" className="programs_card_right_btn2">
              <button>Program Details</button>
            </Link>
          </div>
        </div>
        <div className="Program_card_main">
          <div className="Program_card_left">
            <div className="Program_card_left_top">
              <div className="Program_card_left_top_left">
                <img
                  src="https://images.studee.com/images/university/university__academy-of-information-technology--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85"
                  alt=""
                />
              </div>
              <div className="Program_card_left_top_right pl-10">
                <h2>
                  <b>2D Animation (Melbourne Campus) </b> - BAnim
                </h2>{" "}
                <p>
                  {" "}
                  <b> AIT Academy of Interactive Technology, </b> Australia{" "}
                </p>
              </div>
            </div>
            <div className="Program_card_left_bottom">
              <div className="program_card_square_box_wrap">
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
          <div className="Program_card_right">
            <button className="programs_card_right_btn1">
              Start Application{" "}
            </button>
            <Link to="/program-details" className="programs_card_right_btn2">
              <button>Program Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
