import React, { useEffect, useState } from "react";
import SelectedSubjectHero from "../component/Subjects Component/selectedSubjectHero.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
import VerticalizeTreeProjectComponent from "../component/home component/Verticalize layout treeProject.jsx";
import FindProgramAbroadbox from "../component/Subjects Component/findProgAbroadBox.jsx";
import TreeProjectComponent from "../component/home component/treesProject.jsx";
import PopularSubjects from "../component/home component/PopularSubjects.jsx";
import BrowseByCountry from "../component/home component/browseByCountry.jsx";
import Undergraduate_programs from "../component/Subjects Component/Undergraduate_programs.jsx";
import Agent from "../component/Selected University/agent/agent.jsx";
import accountingProgramStructure from "../assets/Australlia country/accounting/accounting-program-structure.png";
import futureAccountingCareer from "../assets/Australlia country/accounting/future-accounting-career.png";
import FutureFinance from "../assets/Australlia country/accounting/Future-finance.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import { animateScroll } from "react-scroll";
// import CitiesAndUniForSelectedCountry from "../component/selectedCountry/Cities and Uni for selected country.jsx";
import Countries from "../component/Subjects Component/Countries.jsx";
import Universities from "../component/Subjects Component/Universities.jsx";
import { GraduateProgramsHome } from "../component/Subjects Component/GraduateProgram.jsx";
import { UndergraduateProgramsHome } from "../component/Subjects Component/UndergraduateProgramsHome.jsx";
import AustriaKangaroImage from "../assets/Australlia country/australlia/Why study in Australia.png";
import DetalilsWithImage from "../component/detalilsWithImage";
import ViewProgMod from "../component/Reusable components/program_Modal.jsx";


const DegreeLandingPage = () => {

  const [data, setData] = useState("");
  const [faculties, setFaculties] = useState([]);
  const [graduateProgramType, setGraduatePrgramType] = useState("");
  const [undergraduateProgramType, setUndergraduatePrgramType] = useState("");
  const [graduate, setGraduate] = useState([]);
  const [undergraduate, setUnderGraduate] = useState([]);
  const [degree, setDegree] = useState([]);
  const params = useParams();


  useEffect(() => {
    fetchSelectedSubjectData();
    {
      data &&
        fetchDegrees()
    }
    animateScroll.scrollToTop();
  }, [undergraduateProgramType]);



  useEffect(() => {




  }, [])
  useEffect(() => {
    if (data) {
      try {
        Promise.all([
          axios.get(`https://studyapi.ieodkv.com/degree/${data._id}`),
          axios.get(`https://studyapi.ieodkv.com/programTypes/graduate/${params.name}`),
          axios.get(`https://studyapi.ieodkv.com/programTypes/undergraduate/${params.name}`)
        ])
          .then(([degreeResponse, graduateResponse, undergraduateResponse]) => {
            setFaculties(degreeResponse.data);
            setGraduate(graduateResponse.data);
            setGraduatePrgramType(graduateResponse.data[0]._id);
            setUnderGraduate(undergraduateResponse.data);
            setUndergraduatePrgramType(undergraduateResponse.data[0]._id);
          })
          .catch((error) => console.log(error));
      } catch (error) {
        // Handle error
      }
    }
  }, [data]);

  const fetchSelectedSubjectData = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/subjects/subject1/${params.name}`
      );
      setData(response.data);
      console.log("subject", response.data);
    } catch (error) {
      console.error("Error in selected subject (Home):", error);
    }
  };

  const fetchDegrees = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/degree/${data._id}`
      );
      setDegree(response.data);
      console.log("Degrees Data", response.data);
    } catch (error) {
      console.error("Error in selected subject (Home):", error);
    }
  };


  return (
    <>
      {data && degree[0] ?
        <>

          <SelectedSubjectHero
            uniModal={false}
            dataToAddProgram={degree[0]}
            paramsFeild={"degree"}
            subjectName={degree[0].name}
            BGImage={`https://studyapi.ieodkv.com/degree/images/${degree[0].image}`}
          />


          <FindProgramAbroadbox paramsFeild={"degree"} subjectName={degree[0].name} degree={data.degree} />

          <VerticalizeTreeProjectComponent
            imageUrl={futureAccountingCareer}
            heading={`${degree[0].name} degrees abroad`}
            paragraph={
              <div dangerouslySetInnerHTML={{ __html: degree[0].abroad }}></div>
            }
          />

          <Whystudee paramsFeild={'degree'} programQuery={degree[0].name} />



          <TreeProjectComponent
            imageUrl={accountingProgramStructure}
            heading={`${degree[0].name} program structure`}
            paragraph={
              <div
                dangerouslySetInnerHTML={{ __html: degree[0].programStructure }}
              ></div>

            }
          />

          <div style={{ backgroundColor: "#f0f0f0" }}>
            <DetalilsWithImage

              imageUrl={AustriaKangaroImage}
              body={
                <>
                  <h1>Future Careers At {degree[0].name}?</h1>
                  {parse(degree && degree[0].futureCareers)}
                </>
              }
            />
          </div>


          <PopularSubjects
            heading={`Types of ${data.name} degrees`}
            paragraph={
              <div
                dangerouslySetInnerHTML={{ __html: data.degreeDescription }}
              ></div>
            }
            allSubjects={degree}
          />
          <TreeProjectComponent
            imageUrl={accountingProgramStructure}
            heading={` Why Study ${data.name} Abroad`}
            paragraph={
              <div
                dangerouslySetInnerHTML={{ __html: data.whyStudy }}
              ></div>

            }
          />




          <Countries
            id={data._id}
            name={degree[0].name}
            countryDescription={degree[0].countryDescription}
          />

          <Universities
            id={data._id}
            name={degree[0].name}
            universityDescription={degree[0].universityDescription}
          />



          <VerticalizeTreeProjectComponent
            imageUrl={futureAccountingCareer}
            heading={`Where to study ${data.name} abroad`}
            // paragraph={parse(data && data.abroad
            paragraph={
              <div dangerouslySetInnerHTML={{ __html: data.whereToStudy }}></div>
            }
          />



          {/* <Undergraduate_programs /> */}

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ margin: "40px 0px", width: '90%' }}>
              <p className=" tree_hero-heading">
                {degree[0].name} study abroad programs
              </p>
              <div
                className=" ltc section-content"
                dangerouslySetInnerHTML={{
                  __html: degree[0].programDescription,
                }}></div>
              <p className="section-heading" style={{
                fontSize: '30px',
                fontWeight: 'bold',
                marginTop: '20px',
              }}
              >
                {degree[0].name} undergraduate programs
              </p>
              <div
                style={{
                  width: "60%",
                  margin: "30px 0px",
                  display: "flex",
                }}>
                {undergraduate.map((row) => (
                  <p
                    style={{
                      fontSize: 20,
                      cursor: "pointer",
                      margin: "0px 50px",
                      color:
                        row._id === undergraduateProgramType
                          ? "var(--primary-color)"
                          : "#b3b2b1",
                      fontWeight: "bold",
                      padding: "20px 0px",
                      borderBottom:
                        row._id === undergraduateProgramType
                          ? "5px solid var(--secondary-color)"
                          : "none",
                    }}
                    onClick={() => setUndergraduatePrgramType(row._id)}>
                    {row.name}
                  </p>
                ))}
              </div>

              {undergraduateProgramType ?
                <UndergraduateProgramsHome
                  subject={data && data._id}
                  id={undergraduateProgramType && undergraduateProgramType}
                />
                : "Loading "}

              <p className="section-heading" style={{
                fontSize: '30px',
                fontWeight: 'bold',
                marginTop: '20px',

              }}
              >{data.name} graduate programs</p>
              <div
                style={{
                  width: "60%",
                  margin: "30px 0px",
                  display: "flex",
                }}>
                {graduate.map((row) => (
                  <p
                    style={{
                      fontSize: 20,
                      cursor: "pointer",
                      margin: "0px 50px",
                      color:
                        row._id === graduateProgramType ? "var(--primary-color)" : "#b3b2b1",
                      fontWeight: "bold",
                      padding: "20px 0px",
                      borderBottom:
                        row._id === graduateProgramType
                          ? "5px solid var(--secondary-color)"
                          : "none",
                    }}
                    onClick={() => setGraduatePrgramType(row._id)}>
                    {row.name}
                  </p>
                ))}
              </div>
              {/*Section 10, Graduate programs*/}
              <GraduateProgramsHome
                subject={data && data._id}
                id={graduateProgramType && graduateProgramType}
              />
              {/*Section 11, Maximize Chances*/}
            </div>
          </div>


          <VerticalizeTreeProjectComponent
            heading={`Entry requirements to study ${degree[0].name} abroad`}
            paragraph={
              <div dangerouslySetInnerHTML={{ __html: degree[0].entryRequirements }}></div>


            }
            imageUrl={FutureFinance}
          />
        </>
        :
        <>
          <div
            style={{ minHeight: "100vh", position: 'absolute', top: '0', }}
            className="my-custom-spinner-wrap"
          >
            <div
              className="my-custom-spinner  inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        </>}

    </>
  );
};
export default DegreeLandingPage;
