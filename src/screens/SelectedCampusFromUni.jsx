import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
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
import SelectedUniHero from "../component/Selected University/selecteduniHero";
import { animateScroll } from "react-scroll";

const SelectedCampusFromUni = () => {
  const [loading, setLoading] = useState(true);
  const [subject, setSubjects] = useState("");
  const [campusData, setCampusData] = useState("");

  const params = useParams();

  const component2Ref = useRef(null);

  useEffect(() => {
    animateScroll.scrollToTop();
    fetchSelectedcampusData();
    fetchPopularSubjectForTheCountry();
  }, [params]);

  const fetchSelectedcampusData = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/campus/campus1/${params.campus}`
      );
      setCampusData(response.data);
      setLoading(false); // Set loading to false after data is fetched
      console.log("response.data", response.data);
    } catch (error) {
      setLoading(false); // Set loading to false in case of error as well
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
      {/* Conditionally render based on loading state */}
      {loading ? (
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
          <SelectedUniHero
            scrollToComponent2={scrollToComponent2}
            uniName={campusData && campusData.name}
            data={campusData}
            BGImage={`https://studyapi.ieodkv.com/campus/images/${campusData.image}`}
          />

          <Whystudee />
          <DetalilsWithImage
            imageUrl={`https://studyapi.ieodkv.com/universities/images/${
              campusData && campusData.university.logoImage
            }`}
            body={
              <>
                <h1>Study abroad at {campusData && campusData.name}?</h1>
                {parse(
                  campusData && campusData.university.studyAbroadDescription
                )}
              </>
            }
          />

          <Uni_FindAndApplyCard name={campusData && campusData.name} />
          <div style={{ backgroundColor: "#f0f0f0" }}>
            <DetalilsWithImage
              imageUrl={AustriaKangaroImage}
              body={
                <>
                  <h1>Why study at {campusData.name}?</h1>
                  {parse(campusData && campusData.university.whyStudyHere)}
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
                  {parse(
                    campusData &&
                      campusData.university.lifeOfInternationalStudents
                  )}
                </>
              }
            />
          </div>
          {/* <Campuses
            id={campusData._id}
            logoImage={campusData.logoImage}
            data={campusData}
          /> */}

          <StudentLifeGalleryAndHeading
            title={"Student life & facilities"}
            image={student_life_image}
          />

          <Whystudee scrollToComponent2={scrollToComponent2} />

          <DetalilsWithImage
            imageUrl={AustriaKangaroImage}
            body={
              <>
                <h1>Fees & funding</h1>
                {parse(campusData && campusData.university.feesAndfunding)}
              </>
            }
          />
          <div style={{ backgroundColor: "##f7f8f9" }}>
            <DetalilsWithLeftImage
              imageUrl={StudentVisa}
              body={
                <>
                  <h1>{campusData && campusData.name} student visa?</h1>
                  {parse(campusData && campusData.country.studentVisa)}

                  {/*<Link to={`/visas-&-travel/${params.name}`}>
                    <button className="universities_hero_left_btn fsinm">
                      {campusData && campusData.name} Visa Requirements
                    </button>
                  </Link> */}
                </>
              }
            />
          </div>
          {/* 
          <DetalilsWithImage
            // imageUrl={AustriaKangaroImage}
            body={
              <>
                <h1>Location Of {campusData && campusData.universityName}?</h1>
                {parse(campusData && campusData.location)}
              </>
            }
          /> */}

          {/*

      <TreeProjectComponent
        heading={`How to study in ${campusData && campusData?.name}?`}
        imageUrl={costOfStudyingImage}
        paragraph={parse(campusData && campusData.howToStudy)}
      />

      <DetalilsWithImage
        imageUrl={AustriaKangaroImage}
        body={
          <>
            <h1>Cost of study in {campusData && campusData.name}?</h1>
            {parse(campusData && campusData.costOfStudy)}
          </>
        }
      />

      <KeyFacts KeyFactsDatas={campusData && campusData.keyFacts} />
 */}
          {/* 

{campusData && 
      <CitiesAndUniForSelectedCountry      
        countryId={campusData._id}
        heading={`Where can you study in ${campusData && campusData?.name}?`}
        body={<>{parse(campusData && campusData.whereCanYouStudy)}</>}
        heading2={`Universities in ${campusData && campusData?.name}?`}
      />
}
      <DetalilsWithImage
        heading={`What are the requirements to study in ${campusData && campusData.name}?`}
        body={parse(campusData && campusData.requirements.qualifications)}
        imageUrl={whatAreRequirmenets}
        paragraph2={parse(campusData && campusData.requirements.englishLanguageTest)}
      />
      <div style={{ backgroundColor: "##f7f8f9" }}>
        <DetalilsWithLeftImage
          imageUrl={StudentVisa}
          body={
            <>
              <h1>{campusData && campusData.name} student visa?</h1>
              {parse(campusData && campusData.studentVisa)}

              // <Link to={`/visas-&-travel/${params.name}`}>
                <button className="universities_hero_left_btn fsinm">
                  {campusData && campusData.name} Visa Requirements
                </button>
              // </Link>
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
export default SelectedCampusFromUni;
