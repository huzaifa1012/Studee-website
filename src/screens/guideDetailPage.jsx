import React, { useEffect } from "react";
import GuideDetailHero from "../component/guides component/gude_details_hero.jsx";
import GuideDetailBody from "../component/guides component/gude_details_body.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import parse from "html-react-parser";
import { animateScroll } from "react-scroll";

const GuideDetailPage = () => {
  const [guideData, setGuideData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    animateScroll.scrollToTop();
    console.log("guideData.name", guideData);
    fetchGuideDetails();
  }, []);
  const fetchGuideDetails = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/guides/guide1/${name}`
      );
      // console.log("Selected Guide ", response.data);
      setGuideData(response.data);
    } catch (error) {
      console.error("Error fetching guides data :", error);
    }
  };
  return (
    <>
      <GuideDetailHero
        background={`https://studyapi.ieodkv.com/guides/${guideData.image}`}
        heading={guideData.guideName}
      />
      <GuideDetailBody
        desciption={guideData.description}
        VisaRequirementLink={guideData.name}
        body={
          <div className="guide_detail_bodySection">
            {guideData.heading &&
              guideData.heading.map((data, index) => {
                {
                  /* console.log(data) */
                }

                return (
                  <div key={index}>
                    <h1>{parse(data.headingName)}</h1>
                    <p>{parse(data.content)}</p>
                  </div>
                );
              })}
          </div>
        }
      />
      <hr />
      <Whystudee />
    </>
  );
};

export default GuideDetailPage;
