import React from "react";
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
const SelectedCountry = () => {
  const location = useLocation();
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
  return (
    <>
      <SelectedSubjectHero
        subjectName={countryName}
        BGImage={backgroundImage}
      />

      <DetalilsWithImage
        imageUrl={
          "https://images.studee.com/illustrations/illustration__feature--country-australia.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
        body={
          <>
            <h1>Why study in {countryName}?</h1>
            <p>
              Australia is a modern and multicultural country, making it a
              popular choice for international students. There are different
              cultures, food, languages and religious backgrounds to be found
              throughout the country’s six states and their cities. Australian
              universities offer a high quality education on par with many UK
              and US institutions. <br /> <br /> English is the official
              language of Australia, however there are many words and phrases
              that are specific to Australian English.
            </p>

            <button className="why_use_bottom_btn">
              Search for a university
            </button>
          </>
        }
      />
      <Uni_FindAndApplyCard />
      <Whystudee />
      <PopularSubjects
        heading={`Popular subjects to study in ${countryName}`}
        allSubjects={theseAllNestedSubjects}
        length={6}
      />
      <TreeProjectComponent
        heading={`What is the cost of studying in ${countryName}?`}
        imageUrl={
          "https://images.studee.com/illustrations/illustration__feature--cost-to-study.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
        paragraph={`Fees in Australia can be around $30,000 per year for a bachelor’s program.
        On top of the fees, Australian living costs can also be high. This is especially the case in popular cities like Sydney and Melbourne where you may need around $15,000 a year for living expenses. case in popular cities like Sydney and Melbourne where you may need around $15,000 a year for living expenses. `}
      />

      <KeyFacts />
      <BoxesAndData
        countries={countries}
        heading={`Where can you study in ${countryName}?`}
        heading2={`Universities In ${countryName}`}
        body={
          <>
            <p>
              The UK is home to many cities that are a popular choice for
              studying abroad. London is regarded as the international hub of
              the UK and home to a large number of highly ranked universities.
              <br />
              <br />
              Northern cities of the UK such as Manchester and Edinburgh are
              steeped in history and culture much like London, but with cheaper
              living costs.
            </p>
          </>
        }
      />
      <DetalilsWithImage
        body={
          <>
            <br />
            <h3>Qualification</h3>
            <p>
              Applicants must have a qualification that is viewed as equivalent
              to an Austrian Matura examination certification. Sometimes this is
              decided on by the university themselves.
            </p>
            <h3>English language tests</h3>
            <p>
              If you are studying as an international student in English, then
              the IELTS academic test is most commonly used in Austria. In
              situations where students have previously studied with English as
              the language of instruction an English language certification is
              not always needed.
            </p>
          </>
        }
        heading={`What are the requirements to study in ${countryName}?`}
        imageUrl={
          "https://images.studee.com/illustrations/illustration__feature--admission-requirements.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
      />
      <div style={{backgroundColor:'##f7f8f9'}}>
      <DetalilsWithLeftImage 
        imageUrl={
          "https://images.studee.com/illustrations/illustration__feature--student-visa.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
        body={
          <>
            <h1>{countryName} student visa?</h1>
            <p>
              EU students wishing to stay in Austria for more than six months
              will need to apply for a residence permit. An application for this
              should be filed and approved before going to Austria.
              <br /> <br />
              All applicants must submit biometric data (10 fingerprints). You
              need to schedule an appointment at the Austrian Embassy in your
              country in order to do this.
            </p>

            <button className="why_use_bottom_btn">
              {countryName} student visa requirement
            </button>
          </>
        }/></div>
           
           <DetalilsWithImage
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
              How to studee abroad with studee
            </button>
          </>
        }
        heading={`How to study in ${countryName}?`}
        imageUrl={
          "https://images.studee.com/illustrations/illustration__feature--admission-requirements.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
      />
      <BoxesAndData

        countries={countries}
        heading={`Alternative countries to consider`}
      />
    </>
  );
};
export default SelectedCountry;
