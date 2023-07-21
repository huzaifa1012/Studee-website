import React, { useEffect } from "react";
import GuideDetailHero from "../component/guides component/gude_details_hero.jsx";
import GuideDetailBody from "../component/guides component/gude_details_body.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import parse from "html-react-parser";


const GuideDetailPage = () => {
  const [guideData, setGuideData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetchGuideDetails();
  }, []);
  const fetchGuideDetails = async () => {
    try {
      const response = await axios.get(
        `https://ieodkvapi-548f8ac2251a.herokuapp.com/guides/guide1/${name}`
      );
      console.log("Selected Guide ", response.data);
      setGuideData(response.data);
    } catch (error) {
      console.error("Error fetching guides data :", error);
    }
  };
  return (
    <>
      <GuideDetailHero
        background={`https://ieodkvapi-548f8ac2251a.herokuapp.com/guides/${guideData.image}`}
        heading={guideData.guideName}
      />
      <GuideDetailBody
        desciption={guideData.description}
        body={
          <div className="guide_detail_bodySection">
            {guideData.heading && guideData.heading.map((data, index) => {
              console.log(data)

        return(
          <>
            <h1>{parse(data.headingName)}</h1>
            <p>{parse(data.content)}</p>
          </>
        )      
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
