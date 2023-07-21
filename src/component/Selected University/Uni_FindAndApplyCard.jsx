import React from "react";
import "./Uni_FindAndApplyCard.css";
const Uni_FindAndApplyCard = ({name}) => {
  return (
    <>
      <div className="Uni_FindAndApplyCard_wrap">
        <div className="Uni_FindAndApplyCard_main">
          <div className="Uni_FindAndApplyCard_top">
            
          </div>
          <div className="Uni_FindAndApplyCard_bottom">
            <div className="UniFindAndApply_Main_wrap">
            <h1>
              Find & apply to programs in the {name}
            </h1>
            <p className="ltc">
              Find programs you love that match your needs & aspirations, where
              you stand a high chance of acceptance.
            </p>
            <div className="UniFindAndApply_user-input-section">
              <div className="theUniFindAndApply_label">
                <p className="mtc UniFindAndApply_labelP">Subject</p>
                <input
                  type="text"
                  name=""
                  id="subject"
                  placeholder="Enter a subject"
                  className="UniFindAndApply_inpbox-style"
                />
              </div>
              <div className="UniFindAndApplyBtnCover">
                <button name="" id="" className="UniFindAndApply_btn">
                  Find Your Perfect Program{" "}
                  {/* <BiRightArrowAlt className="UniFindAndApplyBtnIcon" size={25} /> */}
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uni_FindAndApplyCard;
