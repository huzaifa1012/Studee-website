import React, { useEffect, useState } from "react";
import ProgramDetailHero from "../component/programs components/programDetailHero.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
import VerticalizeTreeProjectComponent from "../component/home component/Verticalize layout treeProject.jsx";
import VisaRequirementCard from "../component/programs components/visaRequirementCard.jsx";
import DetalilsWithImage from "../component/detalilsWithImage.jsx";
import { animateScroll } from "react-scroll";
import parse from "html-react-parser";

import axios from "axios";
import { useParams } from "react-router-dom";

const ProgramDetails = () => {

  const urlName = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [guide, setGuide] = useState([]);

  useEffect(() => {
    animateScroll.scrollToTop();
    console.log('urlName', urlName)
    axios
      .get(`https://studyapi.ieodkv.com/programs/program1/${urlName.name}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {data ? <>

        <ProgramDetailHero data={data} />
        <Whystudee />
        <br />
        <VerticalizeTreeProjectComponent
          heading={"Program overview"}
          paragraph={
            // parse()
            <div
              dangerouslySetInnerHTML={{
                __html: data.programOverview && data.programOverview,
              }}
            ></div>
          }
          imageUrl={
            "https://images.studee.com/illustrations/illustration__programs--programs.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
          }
        />
        <br />
        <div style={{ backgroundColor: "#f7f8f9" }}>
          <DetalilsWithImage
            heading={"Admission Requirements"}
            imageUrl={
              "https://images.studee.com/illustrations/illustration__for-students--what-is-studee.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
            }
            body={
              <div
                dangerouslySetInnerHTML={{
                  __html: data.admissionRequirements && data.admissionRequirements,
                }}
              ></div>
            }
          />
        </div>

        <DetalilsWithImage
          heading={"Fees And Funding"}
          imageUrl={
            "https://images.studee.com/illustrations/illustration__general--fees-and-funding.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
          }
          body={
            // parse()
            <div
              dangerouslySetInnerHTML={{
                __html: data.feesAndfunding && data.feesAndfunding,
              }}
            ></div>
            // <>
            //   <h3>Fee information</h3>
            //   <ul>
            //     <li>
            //       Undergraduate tuition: from AUD$8,000 to AUD$16,050 per year
            //     </li>
            //   </ul>
            //   <h3>Funding</h3>
            //   <p>
            //     International Scholarship Excluding Subcontinent International
            //     Scholarship Excluding Subcontinent : Save up to AUD$16,050 (Save
            //     AUD$5,350 per year for 3 years on Bachelors and 1 year on
            //     Diplomas). Scholarship applies to Bachelors and Diplomas of the
            //     following courses: 2D Animation, Film, 3D Animation or Game
            //     Design.
            //   </p>
            //   <h3>Qualifications</h3>
            //   <ul>
            //     <li>
            //       Continue a full-time enrolment in the course listed on their
            //       Letter of Offer
            //     </li>
            //     <li>
            //       Remain up-to-date with all Tuition fees as per student Letter of
            //       Offer
            //     </li>
            //     <li>Meet the conditions of their student visa</li>
            //     <li>
            //       Maintain at least a Pass average in each Trimester in the course
            //       of study
            //     </li>
            //     <li>
            //       Must not receive a Fail in any unit in any Trimester in the
            //       course of study
            //     </li>
            //   </ul>
            //   <h3>English proficiency</h3>
            //   <ul>
            //     <li>
            //       IELTS: Diploma 5.5 (no band less than 5.0) | Bachelor 6.0 (no
            //       band less than 5.5). Exams must have been completed within the
            //       last 12 months
            //     </li>
            //     <li>
            //       PTE Academic: Diploma 46 no band less than 42 | Bachelor 6.0 no
            //       band less than 5.5
            //     </li>
            //     <li>Cambridge (CAE): Diploma 162 | Bachelor 169</li>
            //     <li>TOEFL: Diploma PB 506, TWE 3.5 | Bachelor PB 534, TWE 4</li>
            //     <li>EF SET Scores: Diploma & Bachelor B2 upper intermediate</li>
            //   </ul>
            // </>
          }
        />

        <VisaRequirementCard />
      </> :
        <>
          <div
            style={{
              width: "100%",
              height: "50vh",
              background: "rgb(244, 245, 247)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "70%",
              }}
            >
              <FcEmptyFilter size={80} />
              <p style={{ fontSize: "20px" }}>No program matched</p>
            </div>
          </div>
        </>}

    </>);
};
export default ProgramDetails;

