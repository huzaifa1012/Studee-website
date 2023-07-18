import React from "react";
import "./findProgAbroad.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdOutlineNavigateNext } from "react-icons/md";
import find1Img from "../../assets/Australlia country/accounting/bachelors-program-in-australlia.png" 
import find2Img from "../../assets/Australlia country/accounting/masters-program-in-australlia.png" 
import find3Img from "../../assets/Australlia country/accounting/PHd-program-in-australia.png" 
const FindProgramAbroadbox = () => {
  return (
    <div>
      <div className="findProgBox_main_wrap">
        <div className="findProgBox_head">
          <h2 className="mtc">Bachelor's programs in accounting</h2>
          <p className="mtc">
            Find art programs you love that match your needs & aspirations,
            where you stand a high chance of acceptance.
          </p>
        </div>
        <div className="findProgBox_studee_wrap">
          <div className="findProgBox_studee_body">
            <div className="findProgBox_studee_box">
              <img src={find1Img} />
              <h2 className="mtc">Find your Ideal progrma</h2>
              <MdOutlineNavigateNext className="findProgBox_nextIcon" />
            </div>
            <div className="findProgBox_studee_box">
              <img src={find2Img} />
              <h2 className="mtc">Find your Ideal progrma</h2>
              <MdOutlineNavigateNext className="findProgBox_nextIcon" />
            </div>
            <div className="findProgBox_studee_box">
              <img src={find3Img} />
              <h2 className="mtc">Find your Ideal progrma</h2>
              <MdOutlineNavigateNext className="findProgBox_nextIcon" />
            </div>
          </div>
        </div>
        <div className="findProgBox_bottom_wrap">
          <div className="findProgBox_bottom">
            <p>Find your perfect programs </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindProgramAbroadbox;
