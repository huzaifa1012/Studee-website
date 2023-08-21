import React, { useState, useRef, useEffect } from "react";
import "./whystudy.css";
import { BiRightArrowAlt } from "react-icons/bi";
import ViewProgMod from "../Reusable components/program_Modal";
import axios from "axios";
import parse from "html-react-parser";

const Whystudee = ({ scrollToComponent2, paramsFeild, programQuery }) => {
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

  return (
    <div>
      <ViewProgMod paramsFeild={paramsFeild} programQuery={programQuery} isModalOpen={isModalOpen} onClose={handleCancel} />

      <div className="why_use_main_wrap" id="whyStudee" ref={component2Ref}>
        <div className="why_use_head">
          <h1 className="mtc">{data.mainHeadingName && data.mainHeadingName}</h1>
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
