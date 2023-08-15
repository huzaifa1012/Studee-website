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
import Campuses from "../component/Selected University/campuses";
import student_life_image from "../../src/assets/images/student-life.avif";
import StudentLifeGalleryAndHeading from "../component/university component/studentLife(heading/Image)";

const SelectedUniFromCity = () => {
  const [loading, setLoading] = useState(true);
  const [subject, setSubjects] = useState("");
  const [uniData, setUniData] = useState("");

  const params = useParams();

  const component2Ref = useRef(null);

  useEffect(() => {
    fetchSelecteduniData();
    fetchPopularSubjectForTheCountry();
  }, []);

  const fetchSelecteduniData = async () => {
    try {
      console.log(params.university);
      const response = await axios.get(
        `https://studyapi.ieodkv.com/universities/university1/${params.university}`
      );
      setUniData(response.data);
      console.log("response.data", response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Error fetching from selected city from selected country:",
        error
      );
    }
  };
  const fetchPopularSubjectForTheCountry = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/popular/country/${params.name}`
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SelectedSubjectHero
            scrollToComponent2={scrollToComponent2}
            subjectName={uniData && uniData.universityName}
            BGImage={`https://studyapi.ieodkv.com/universities/images/${uniData.banner}`}
          />
          <Whystudee />

          <DetalilsWithImage
            imageUrl={`https://studyapi.ieodkv.com/universities/images/${uniData.logoImage}`}
            body={
              <>
                <h1>Why study in {uniData && uniData.universityName}?</h1>
                {parse(uniData && uniData.studyAbroadDescription)}
              </>
            }
          />
          <Uni_FindAndApplyCard name={uniData && uniData.name} />
          <div style={{ backgroundColor: "#f0f0f0" }}>
            <DetalilsWithImage
              imageUrl={AustriaKangaroImage}
              body={
                <>
                  <h1>Why study at {uniData.universityName}?</h1>
                  {parse(uniData && uniData.whyStudyHere)}
                </>
              }
            />
          </div>

          <div style={{ backgroundColor: "##f7f8f9" }}>
            <DetalilsWithLeftImage
              imageUrl={StudentVisa}
              body={
                <>
                  <h1>Life as an international student</h1>
                  {parse(uniData && uniData.lifeOfInternationalStudents)}
                </>
              }
            />
          </div>
          <Campuses
            id={uniData._id}
            logoImage={uniData.logoImage}
            countryUrl={uniData.country.urlName}
          />

          <StudentLifeGalleryAndHeading
            title={"Student life & facilities"}
            image={student_life_image}
          />
          <DetalilsWithImage
            imageUrl={AustriaKangaroImage}
            body={
              <>
                <h1>Fees & funding</h1>
                {parse(uniData && uniData.feesAndfunding)}
              </>
            }
          />
          <div style={{ backgroundColor: "##f7f8f9" }}>
            <DetalilsWithLeftImage
              imageUrl={StudentVisa}
              body={
                <>
                  <h1>{uniData && uniData.country.name} student visa?</h1>
                  {parse(uniData && uniData.studentVisa)}

                  <Link to={`/visas-&-travel/${params.name}`}>
                    <button className="universities_hero_left_btn fsinm">
                      {uniData && uniData.name} Visa Requirements
                    </button>
                  </Link>
                </>
              }
            />
          </div>
          <DetalilsWithImage
            // imageUrl={AustriaKangaroImage}
            body={
              <>
                <h1>Location Of {uniData && uniData.universityName}?</h1>
                {parse(uniData && uniData.location)}
              </>
            }
          />

          {/*
      <Whystudee scrollToComponent2={scrollToComponent2} />
      <TreeProjectComponent
        heading={`How to study in ${uniData && uniData?.name}?`}
        imageUrl={costOfStudyingImage}
        paragraph={parse(uniData && uniData.howToStudy)}
      />

      <DetalilsWithImage
        imageUrl={AustriaKangaroImage}
        body={
          <>
            <h1>Cost of study in {uniData && uniData.name}?</h1>
            {parse(uniData && uniData.costOfStudy)}
          </>
        }
      />

      <KeyFacts KeyFactsDatas={uniData && uniData.keyFacts} />
 */}
          {/* 

{uniData && 
      <CitiesAndUniForSelectedCountry      
        countryId={uniData._id}
        heading={`Where can you study in ${uniData && uniData?.name}?`}
        body={<>{parse(uniData && uniData.whereCanYouStudy)}</>}
        heading2={`Universities in ${uniData && uniData?.name}?`}
      />
}
      <DetalilsWithImage
        heading={`What are the requirements to study in ${uniData && uniData.name}?`}
        body={parse(uniData && uniData.requirements.qualifications)}
        imageUrl={whatAreRequirmenets}
        paragraph2={parse(uniData && uniData.requirements.englishLanguageTest)}
      />
      <div style={{ backgroundColor: "##f7f8f9" }}>
        <DetalilsWithLeftImage
          imageUrl={StudentVisa}
          body={
            <>
              <h1>{uniData && uniData.name} student visa?</h1>
              {parse(uniData && uniData.studentVisa)}

              <Link to={`/visas-&-travel/${params.name}`}>
                <button className="universities_hero_left_btn fsinm">
                  {uniData && uniData.name} Visa Requirements
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
      /> */}
        </>
      )}
    </>
  );
};
export default SelectedUniFromCity;
