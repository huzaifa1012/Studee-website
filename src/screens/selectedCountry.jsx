import React from "react";
import { useLocation } from "react-router-dom";
import SelectedSubjectHero from "../component/Subjects Component/selectedSubjectHero";
import DetalilsWithImage from "../component/detalilsWithImage detalilsWithImage";
import Uni_FindAndApplyCard from "../component/Selected University/Uni_FindAndApplyCard";
import Whystudee from "../component/home component/whystudee";
import PopularSubjects from "../component/home component/PopularSubjects";
import TreeProjectComponent from "../component/home component/treesProject";
import KeyFacts from "../component/Reusable components/Key Facts";
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
    </>
  );
};
export default SelectedCountry;
