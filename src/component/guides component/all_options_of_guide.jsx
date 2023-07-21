import React, { useEffect, useState } from "react";
import "./guides.css";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import axios from "axios";
import parse from "html-react-parser";


const AllOptionsOfGuide = () => {
const [guideData, setGuidesData] = useState()

  const handleNavigation = () => {
    animateScroll.scrollToTop();
  };



  useEffect(()=>{
    fetchGuides()
  },[])
  const fetchGuides = async () => {
    try {
      const response = await axios.get(
        "https://ieodkvapi-548f8ac2251a.herokuapp.com/guides"
      );
      console.log("Guide",response.data)
      setGuidesData(response.data);
    } catch (error) {
      console.error("Error fetching guides data :", error);
    }
  };
  return (
    <>
      <div className="guide_wrap">
        <div className="guide_main">
          <div className="guide_section_header_text_wrap">
            <div className="guide_section_header_text">
              <h1>Guides</h1>
            </div>
          </div>
          <div className="newWrapOfGuide">
          {guideData && guideData.map((data, index)=>{

            return (
              <>
          <div className="guide_head">
            <h1 className="mtc"> {index +1+ ")" } {data.name}</h1>
          </div>
          <div className="guide_body">
          {data.allGuides.map((data,index)=>{
            return (
              <>
            <Link to={`/guide1/${data.urlName}`} onClick={handleNavigation} className="guide_card">
              <img
                src={`https://ieodkvapi-548f8ac2251a.herokuapp.com/guides/${data.image}`}
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>{data.guideName}</h2>
                <p className="ltc">
                  {parse(data.description.slice(0,150))}
                </p>
              </div>
            </Link>
              </>
            )
          })}
          </div>

              </>
            )
          }) }
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOptionsOfGuide;
