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
import StudentLifeGalleryAndHeading from "../component/university component/studentLife(heading/Facilities";
import { animateScroll } from "react-scroll";
import Agent from "../component/Selected University/agent/agent";

const SelectedUniFromCountry = () => {
  const [loading, setLoading] = useState(true);
  const [subject, setSubjects] = useState("");
  const [uniData, setUniData] = useState("");
  const [agent, setAgents] = useState("");

  const params = useParams();

  const component2Ref = useRef(null);

  useEffect(() => {
    animateScroll.scrollToTop();
    {
      params &&
        fetchSelecteduniData();
    }
    fetchPopularSubjectForTheCountry();
    {
      uniData &&
        fetchAgents()
    }
  }, []);

  const fetchSelecteduniData = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/universities/university1/${params.university}`
      );
      setUniData(response.data);
      console.log(response.data);
      setLoading(false); // Set loading to false after data is fetched
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
  const fetchAgents = async () => {
    try {
      const response = await axios.get(

        `https://studyapi.ieodkv.com/members/university/${uniData && uniData._id}`
      );
      setAgents(response.data);
    } catch (error) {
      console.error(
        "Error fetching Agents:",
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
          <SelectedSubjectHero
            uniModal={true}
            paramsFeild={"universityName"}
            dataToAddProgram={uniData}
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
          <Uni_FindAndApplyCard name={uniData && uniData.universityName} data={uniData && uniData} />
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

          {agent &&
            <Agent data={agent && agent} uniName={uniData && uniData.universityName} />
          }


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
            data={uniData}
          />

          <StudentLifeGalleryAndHeading
            title={"Student life & facilities"}
            image={student_life_image}
            facilities={uniData.studentFacilities}
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

                  <Link to={`/guide1/how-to-apply-for-a-uk-student-visa`}>
                    <button className="universities_hero_left_btn fsinm">
                      {uniData && uniData.name} Visa Requirements
                    </button>
                  </Link>
                </>
              }
            />
          </div>
          <DetalilsWithImage
            body={
              <>
                <h1>Location Of {uniData && uniData.universityName}?</h1>
                {parse(uniData && uniData.location)}
              </>
            }
          />

          <PopularSubjects
            heading={"Popular Subjects"}
            allSubjects={subject && subject}
            length={9}
          />

        </>
      )}
    </>
  );
};
export default SelectedUniFromCountry;
