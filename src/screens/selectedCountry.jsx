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

const SelectedCountry = () => {

  const [subject, setSubjects] = useState("");
  const [countryData, setCountryData] = useState("");

  const params = useParams();

  const component2Ref = useRef(null);

  useEffect(() => {
    fetchSelectedCountryData()
    fetchPopularSubjectForTheCountry();
  }, []);

  const fetchSelectedCountryData = async () => {
    try {
      const response = await axios.get(
        `https://ieodkvapi-548f8ac2251a.herokuapp.com/countries/${params.name}`
      );
      setCountryData(response.data);
    } catch (error) {
      console.error(
        "Error fetching popular subjec for selected country:",
        error
      );
    }
  };
  const fetchPopularSubjectForTheCountry = async () => {
    try {
      const response = await axios.get(
        `https://ieodkvapi-548f8ac2251a.herokuapp.com/popular/country/${params.name}`
      );
      setSubjects(response.data);
    } catch (error) {
      console.error(
        "Error fetching popular subjec for selected country:",
        error
      );
    }
  };
  const scrollToComponent2 = () => {
    component2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <SelectedSubjectHero
        scrollToComponent2={scrollToComponent2}
        subjectName={params.name}
        BGImage={`https://ieodkvapi-548f8ac2251a.herokuapp.com/countries/images/${countryData.countryImage}`}

      />
      <DetalilsWithImage
        imageUrl={AustriaKangaroImage}
        body={
          <>
            <h1>Why study in {params.name}?</h1>
            {parse(countryData && countryData.whyStudyHere)}

            <button className="why_use_bottom_btn">
              Search for a university
            </button>
          </>
        }
      />
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <DetalilsWithImage
          imageUrl={AustriaKangaroImage}
          body={
            <>
              <h1>What are the best programs in the {countryData.name}?</h1>
              {parse(countryData && countryData.bestPrograms)}
            </>
          }
        />
      </div>

      <Uni_FindAndApplyCard name={countryData && countryData.name} />

      <Whystudee scrollToComponent2={scrollToComponent2} />
     
      {subject &&
        <PopularSubjectsSelectedCountry
          heading={`Popular subjects to study in ${countryData && countryData?.name}`}
          allSubjects={subject}
          length={subject.length}
          countryUrl={params.name}
        />
      }
      <TreeProjectComponent
        heading={`What is the cost of studying in ${countryData && countryData?.name}?`}
        imageUrl={costOfStudyingImage}
        paragraph={parse(countryData && countryData.costOfStudy)}
      />

      <KeyFacts KeyFactsDatas={countryData && countryData.keyFacts} />
{countryData && 
      <CitiesAndUniForSelectedCountry      
        countryId={countryData._id}
        heading={`Where can you study in ${countryData && countryData?.name}?`}
        body={<>{parse(countryData && countryData.whereCanYouStudy)}</>}
        heading2={`Universities in ${countryData && countryData?.name}?`}
      />
}
      <DetalilsWithImage
        heading={`What are the requirements to study in ${countryData && countryData.name}?`}
        body={parse(countryData && countryData.requirements.qualifications)}
        imageUrl={whatAreRequirmenets}
        paragraph2={parse(countryData && countryData.requirements.englishLanguageTest)}
      />
      <div style={{ backgroundColor: "##f7f8f9" }}>
        <DetalilsWithLeftImage
          imageUrl={StudentVisa}
          body={
            <>
              <h1>{countryData && countryData.name} student visa?</h1>
              {parse(countryData && countryData.studentVisa)}

              <Link to={`/visas-&-travel/${params.name}`}>
                <button className="universities_hero_left_btn fsinm">
                  {countryData && countryData.name} Visa Requirements
                </button>
              </Link>
            </>
          }
        />
      </div>

      <DetalilsWithImage
        heading={`How to study in ${params.name}?`}
        body={
          <>
            <br />
            <p>
              If you are studying as an international student in English, then
              the IELTS academic test is most commonly used in Austria. In
              situations where students have previously studied with English as
              the language of instruction an English language certification is
              not always needed.
            </p>
            <button className="why_use_bottom_btn">
              How to study abroad with IEO
            </button>
          </>
        }
        imageUrl={howStudyinAus}
      />
      {/* <BoxesAndData
        countries={countries}
        heading={`Alternative countries to consider`}
      /> */}
    </>
  );
};
export default SelectedCountry;
