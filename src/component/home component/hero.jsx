import React, {useState} from "react";
import "./hero.css";

import heroImage2 from "../../assets/new-project.png";
import heroImage from "../../assets/illustration__feature--homepage-hero.avif";
import clgStude from "../../assets/college-students-pana.png";
import { BiRightArrowAlt } from "react-icons/bi";
import ViewProgMod from "../Reusable components/program_Modal";

const Hero = () => {
    // modal code starts here
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    // modal code ends
  
  return (
    <div className="main-hero_wrap">
      <div className="hero_container">
        <div className="hero_left_div">
          <h1 className="mtc">
            We maximize your chance of getting admitted to your chosen
            universities
          </h1>
          <p className="ltc">
            The smart alternative to applying direct for a degree abroad and the
            easy way to find programs that match your eligibility and
            aspirations
          </p>
        </div>

        <div className="hero_right_div">
          <img src={heroImage2} alt="" className="hero-right-img" />
        </div>

        <div className="hero_user-input-section">
          <div className="theHero_label">
            {" "}
            <p className="mtc hero_labelP"> Location</p>
            <input
              type="text"
              name=""
              id="location"
              placeholder="Enter country or city"
              className="hero_inpbox-style"
            />
          </div>
          <div className="theHero_label">
            <p className="mtc hero_labelP">Subject</p>
            <input
              type="text"
              name=""
              id="subject"
              placeholder="Enter a subject"
              className="hero_inpbox-style"
            />
          </div>
          <div className="heroBtnCover">
            <button name="" id="" className="hero_btn" onClick={()=>setIsModalOpen(true)}>
              Find Your Perfect Program
              <BiRightArrowAlt className="heroBtnIcon" size={25} />
            </button>
          </div>
        </div>
        <div className="studee_home_hero_bottom ltc">
          <p>
            Promote your university to students worldwide. <u> Learn more </u>
          </p>
        </div>
      </div>
      <ViewProgMod isModalOpen={isModalOpen} onClose={handleCancel} />

    </div>
  );
};

export default Hero;
