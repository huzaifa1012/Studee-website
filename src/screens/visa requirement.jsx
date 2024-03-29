import React, { useEffect } from "react";
import GuideDetailHero from "../component/guides component/gude_details_hero.jsx";
import GuideDetailBody from "../component/guides component/gude_details_body.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import parse from "html-react-parser";
import { animateScroll } from "react-scroll";

const VisaRequirements = () => {
  const [guideData, setGuideData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    animateScroll.scrollToTop();

    fetchGuideDetails();
  }, []);
  const fetchGuideDetails = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/guides/country/visas-&-travel/${name}`
      );
      // console.log("Selected Guide ", response.data);
      setGuideData(response.data);
    } catch (error) {
      console.error("Error fetching Visas Requirement :", error);
    }
  };
  return (
    <>
      {!guideData ? (
        <>
          <div className="my-custom-spinner-wrap">
            <div
              className="my-custom-spinner  inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        </>
      ) : (
        <>
          <GuideDetailHero
            background={`https://studyapi.ieodkv.com/guides/${guideData.image}`}
            heading={guideData.guideName}
          />
          <GuideDetailBody
            desciption={guideData.description}
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
      )}
    </>
  );
};

export default VisaRequirements;
