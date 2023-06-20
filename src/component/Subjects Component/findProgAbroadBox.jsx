import React from "react";
import "./findProgAbroad.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdOutlineNavigateNext } from "react-icons/md";

const FindProgramAbroadbox = () => {
  return (
    <div>
      <div className="findProgBox_main_wrap">
        <div className="findProgBox_head">
          <h2 className="mtc">Find your perfect art programs abroad</h2>
          <p className="mtc">
            Find art programs you love that match your needs & aspirations,
            where you stand a high chance of acceptance.
          </p>
        </div>
        <div className="findProgBox_studee_wrap">
          <div className="findProgBox_studee_body">
            <div className="findProgBox_studee_box">
              <img src="https://images.studee.com/illustrations/illustration__spot--program-bachelors.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=120" />
              <h2 className="mtc">Find your Ideal progrma</h2>
              <MdOutlineNavigateNext className="findProgBox_nextIcon" />
            </div>
            <div className="findProgBox_studee_box">
              <img src="https://images.studee.com/illustrations/illustration__spot--program-masters.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=120" />
              <h2 className="mtc">Find your Ideal progrma</h2>
              <MdOutlineNavigateNext className="findProgBox_nextIcon" />
            </div>
            <div className="findProgBox_studee_box">
              <img src="https://images.studee.com/illustrations/illustration__spot--program-phd.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=120" />
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
