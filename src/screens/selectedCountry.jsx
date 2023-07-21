import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
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

const SelectedCountry = () => {
  const component2Ref = useRef(null);
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  const queryParams = new URLSearchParams(location.search);
  const countryName = queryParams.get("Cname");
  const backgroundImage = queryParams.get("backgroundImage");

  const theseAllNestedSubjects = [
    {
      subject: "Art Drawing",
      image:
        "https://images.studee.com/images/program/programs__creative-arts-design.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      subject: "Art Design",
      image:
        "https://images.studee.com/images/program/programs__agriculture-food-animal-sciences.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      subject: "Art",
      image:
        "https://images.studee.com/images/program/programs__creative-arts-design.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      subject: "Art Communication",
      image:
        "https://images.studee.com/images/program/programs__life-sciences-medicine-health.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      subject: "Art Creation",
      image:
        "https://images.studee.com/images/program/programs__business-management-studies.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    { subject: "Art Sculpture", image: "" },
  ];
  const countries = [
    {
      name: "USA",
      image:
        "https://images.studee.com/images/country/country__uk.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=580&h=350&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      name: "Canada",
      image:
        "https://images.studee.com/images/country/country__australia.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      name: "UAE",
      image:
        "https://images.studee.com/images/country/country__belgium.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      name: "Cyprus",
      image:
        "https://images.studee.com/images/country/country__cyprus.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      name: "Austria",
      image:
        "https://images.studee.com/images/country/country__canada.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      name: "UK",
      image:
        "https://images.studee.com/images/country/country__cyprus.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    // Add more country objects as needed
  ];

  const scrollToComponent2 = () => {
    component2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <SelectedSubjectHero
        scrollToComponent2={scrollToComponent2}
        subjectName={data.name}
        // here uncommit the "BGImage={backgroundImage}" and get rid from this hardcoded Background image
        // BGImage={backgroundImage}
        BGImage={
          "https://images.studee.com/images/country/country__australia.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"
        }
      />
      <DetalilsWithImage
        imageUrl={AustriaKangaroImage}
        body={
          <>
            <h1>Why study in {data.name}?</h1>
            {parse(data.whyStudyHere)}

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
              <h1>What are the best programs in the {data.name}?</h1>
              {parse(data.bestPrograms)}
            </>
          }
        />
      </div>

      <Uni_FindAndApplyCard name={data.name} />

      <Whystudee scrollToComponent2={scrollToComponent2} />

      <PopularSubjects
        heading={`Popular subjects to study in ${data.name}`}
        allSubjects={theseAllNestedSubjects}
        length={6}
      />
      <TreeProjectComponent
        heading={`What is the cost of studying in ${data.name}?`}
        imageUrl={
          // "https://images.studee.com/illustrations/illustration__feature--cost-to-study.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
          costOfStudyingImage
        }
        paragraph={parse(data.costOfStudy)}
      />

      <KeyFacts KeyFactsDatas={data.keyFacts} />
      <BoxesAndData
        countries={countries}
        heading={`Where can you study in ${data.name}?`}
        heading2={`Universities In ${countryName}`}
        body={<>{parse(data.whereCanYouStudy)}</>}
      />
      <DetalilsWithImage
        heading={`What are the requirements to study in ${data.name}?`}
        body={parse(data.requirements.qualifications)}
        imageUrl={whatAreRequirmenets}
      />
      <div style={{ backgroundColor: "##f7f8f9" }}>
        <DetalilsWithLeftImage
          imageUrl={StudentVisa}
          body={
            <>
              <h1>{data.name} student visa?</h1>
              {parse(data.studentVisa)}

              <button className="why_use_bottom_btn">
                {countryName} student visa requirement
              </button>
            </>
          }
        />
      </div>

      <DetalilsWithImage
        heading={`How to study in ${data.name}?`}
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
      <BoxesAndData
        countries={countries}
        heading={`Alternative countries to consider`}
      />
    </>
  );
};
export default SelectedCountry;
