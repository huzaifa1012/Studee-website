import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SelectedSubjectHero from "../component/Subjects Component/selectedSubjectHero";
import DetalilsWithImage from "../component/detalilsWithImage";
import Uni_FindAndApplyCard from "../component/Selected University/Uni_FindAndApplyCard";
import Whystudee from "../component/home component/whystudee";
import PopularSubjects from "../component/home component/PopularSubjects";
import TreeProjectComponent from "../component/home component/treesProject";
import KeyFacts from "../component/Reusable components/Key Facts";
import BoxesAndData from "../component/Reusable components/boxesAndData";
import DetalilsWithLeftImage from "../component/Reusable components/DetailsWithLeftImage";
import AustriaKangaroImage from "../assets/Australlia country/australlia/Why study in Australia.png";
import costOfStudyingImage from "../assets/Australlia country/australlia/What is the cost of studying in Australia.png";
import whatAreRequirmenets from "../assets/Australlia country/australlia/What are the requirements to study in Australia.png";
import StudentVisa from "../assets/Australlia country/australlia/What are the requirements to study in Australia.png";
import howStudyinAus from "../assets/Australlia country/australlia/How to study in Australia.png";
import parse from "html-react-parser";
import axios from "axios";
import PopularSubjectsSelectedCountry from "../component/home component/PopularSubjectsSelectedCountry";
import { useParams } from "react-router-dom";
import CitiesAndUniForSelectedCountry from "../component/selectedCountry/Cities and Uni for selected country";
import Uni_by_id from "../component/selected city/universities_by_id";
import { animateScroll } from "react-scroll";

const SelectedCityFromCountry = () => {
  const [cityData, setCityData] = useState("");

  const params = useParams();

  const component2Ref = useRef(null);

  useEffect(() => {
    animateScroll.scrollToTop();

    fetchSelectedCityData();
  }, []);

  const fetchSelectedCityData = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/cities/city1/${params.city
        }?${Math.random()}`
      );
      setCityData(response.data);
    } catch (error) {
      console.error(
        "Error fetching from selected city from selected country:",
        error
      );
    }
  };

  const scrollToComponent2 = () => {
    component2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {cityData ? (
        <>
          <SelectedSubjectHero
            dataToAddProgram={cityData}
            paramsFeild={"city"}
            scrollToComponent2={scrollToComponent2}
            subjectName={cityData.name}
            BGImage={`https://studyapi.ieodkv.com/cities/images/${cityData.image}`}
          />
          <DetalilsWithImage
            imageUrl={AustriaKangaroImage}
            body={
              <>
                <h1>Why study in {cityData && cityData.name}?</h1>
                {parse(cityData && cityData.whyToStudy)}
              </>
            }
          />
          <Uni_by_id
            id={cityData._id}
            name={cityData.name}
            allDetails={cityData}
          />
          <div style={{ backgroundColor: "#f0f0f0" }}>
            <DetalilsWithImage
              imageUrl={AustriaKangaroImage}
              body={
                <>
                  <h1>Universities In {cityData.name}?</h1>
                  {parse(cityData && cityData.uniDescription)}
                </>
              }
            />
          </div>

          <DetalilsWithImage
            imageUrl={AustriaKangaroImage}
            body={
              <>
                <h1>What to study in {cityData && cityData.name}?</h1>
                {parse(cityData && cityData.whatToStudy)}
              </>
            }
          />

          <Uni_FindAndApplyCard name={cityData && cityData.name} />

          <Whystudee scrollToComponent2={scrollToComponent2} />

          <TreeProjectComponent
            heading={`How to study in ${cityData && cityData?.name}?`}
            imageUrl={costOfStudyingImage}
            paragraph={parse(cityData && cityData.howToStudy)}
          />

          <DetalilsWithImage
            imageUrl={AustriaKangaroImage}
            body={
              <>
                <h1>Cost of study in {cityData && cityData.name}?</h1>
                {parse(cityData && cityData.costOfStudy)}
              </>
            }
          />

          <KeyFacts KeyFactsDatas={cityData && cityData.keyFacts} />
        </>
      ) : (
        <>
          <div className="my-custom-spinner-wrap">
            <div
              className="my-custom-spinner  inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        </>
      )}
    </>
  );
};
export default SelectedCityFromCountry;
