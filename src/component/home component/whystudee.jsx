import React, { useState, useRef, useEffect } from "react";
import "./whystudy.css";
import { BiRightArrowAlt } from "react-icons/bi";
import ViewProgMod from "../Reusable components/program_Modal";
import whyStudyImg01 from "../../assets/whystudee-icons/icon-1.png";
import whyStudyImg02 from "../../assets/whystudee-icons/icon-2.png";
import whyStudyImg03 from "../../assets/whystudee-icons/icon-3.png";
import whyStudyImg04 from "../../assets/whystudee-icons/icon-4.png";
import axios from "axios";
import parse from "html-react-parser";

const Whystudee = ({ scrollToComponent2 }) => {
  const component2Ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://studyapi.ieodkv.com/content/page/why-use-studee"
      );
      // console.log(":DATA", response.data);
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // console.log(data.heading)

  return (
    <div>
      <ViewProgMod isModalOpen={isModalOpen} onClose={handleCancel} />

      <div className="why_use_main_wrap" id="whyStudee" ref={component2Ref}>
        <div className="why_use_head">
          <h1 className="mtc">{data.name && data.name}</h1>
          {data.description && parse(data.description)}
        </div>
        <div className="Why_Use_studee_wrap">
          <div className="Why_Use_studee_body">
            {data.heading?.map((item, index) => {
              return (
                <div className="Why_Use_studee_box" key={item._id}>
                  <img
                    src={`https://studyapi.ieodkv.com/content/images/${item.image}`}
                    width={110}
                  />
                  <span className="mtc headingOfWhyStudee">
                    {parse(item.headingName)}
                  </span>
                  <span className="ltc" style={{ textAlign: "left" }}>
                    {parse(item.contentText)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="why_use_bottom_wrap">
          <div className="why_use_bottom">
            <span>{data.more && parse(data.more)}</span>
            <button
              onClick={() => showModal(true)}
              className="why_use_bottom_btn"
            >
              Find your perfect programs{" "}
              <BiRightArrowAlt className="heroBtnIcon" size={25} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whystudee;
