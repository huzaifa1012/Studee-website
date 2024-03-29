import React from "react";
import "./secondhero.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const SecondHero = () => {
  return (
    <div className="main-secondHero_wrap">
      <div className="secondHero_container">
        <div className="secondHero_left_div">
          <h1 className="mtc pb-5">Find & apply for your ideal program</h1>
          <p className="ltc">
            Get a free 48 hour fast-track assessment (worth $185*) to maximize
            your chance of getting admitted
          </p>
          <div className="universities_hero_left_btn_wrap sec_hero_uniBtn_wrap">
            <ScrollLink to="whyStudee" smooth={true} duration={1000}>
              <button className="universities_hero_left_btn ">
                How study can help
              </button>
            </ScrollLink>
          </div>
        </div>

        <div className="secondHero_right_div">
          <div className="secondHero_right_div_section_body">
            <h2>Find your best matches</h2>
            <p className="mtc">
              Answer a few simple questions to get a tailored list of the
              programs that best match your needs
            </p>
            <div className="universities_hero_right_btn_wrap">
          <Link to="/personalized-matches">
              <button className="universities_hero_right_btn">
                Get Started{" "}
                <BiRightArrowAlt className="heroBtnIcon" size={25} />
              </button>
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
