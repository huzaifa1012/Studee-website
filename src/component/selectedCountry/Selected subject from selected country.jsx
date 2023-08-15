import React, { useEffect, useState } from "react";
import SelectedSubjectHero from "../../component/Subjects Component/selectedSubjectHero.jsx";
import Whystudee from "../../component/home component/whystudee.jsx";
import VerticalizeTreeProjectComponent from "../../component/home component/Verticalize layout treeProject.jsx";
import FindProgramAbroadbox from "../../component/Subjects Component/findProgAbroadBox.jsx";
import TreeProjectComponent from "../../component/home component/treesProject.jsx";
import { useLocation } from "react-router-dom";
import PopularSubjects from "../../component/home component/PopularSubjects.jsx";
import BrowseByCountry from "../../component/home component/browseByCountry.jsx";
import Undergraduate_programs from "../../component/Subjects Component/Undergraduate_programs.jsx";
import Agent from "../../component/Selected University/agent/agent.jsx";
import accountingProgramStructure from "../../assets/Australlia country/accounting/accounting-program-structure.png";
import futureAccountingCareer from "../../assets/Australlia country/accounting/future-accounting-career.png";
import FutureFinance from "../../assets/Australlia country/accounting/Future-finance.png";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import { animateScroll } from "react-scroll";
const Selected_subject_from_selected_country = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  const params = useParams();

  animateScroll.scrollToTop();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const subjectNames = searchParams.get("subject");

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
      name: "Egypt",
      image:
        "https://images.studee.com/images/country/country__uk.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=580&h=350&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      name: "Canada",
      image:
        "https://images.studee.com/images/country/country__australia.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },
    {
      name: "France",
      image:
        "https://images.studee.com/images/country/country__belgium.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },

    {
      name: "Uganda",
      image:
        "https://images.studee.com/images/country/country__canada.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",
    },

    // Add more country objects as needed
  ];

  const universities = [
    {
      name: "Liver Hope University",
      image:
        "https://images.studee.com/images/university/university__liverpool-hope-university.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__text-overlay.jpg&blend-size=inherit&blend-mode=normal&blend-alpha=80",
    },
    {
      name: "University Of Portsmouth",
      image:
        "https://images.studee.com/images/university/university__university-of-portsmouth.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__text-overlay.jpg&blend-size=inherit&blend-mode=normal&blend-alpha=80",
    },
    {
      name: "MIU University Miami",
      image:
        "https://images.studee.com/images/university/university__miu-city-university-miami.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__text-overlay.jpg&blend-size=inherit&blend-mode=normal&blend-alpha=80",
    },

    {
      name: "Aberty University",
      image:
        "https://images.studee.com/images/university/university__abertay-university.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__text-overlay.jpg&blend-size=inherit&blend-mode=normal&blend-alpha=80",
    },

    // Add more country objects as needed
  ];
  useEffect(() => {
    fetchDataForSelectedCountryAndSuject();
    fetchCountryData();
  }, [params]);
  const fetchDataForSelectedCountryAndSuject = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/subjects/country/${params.countryUrl}/subject/${params.subjectUrl}`
      );
      setSubjectData(response.data);
      console.log("Main page SubjectData data", response.data);
    } catch (error) {
      console.error(
        "Error fetching data of popular subject for selected country:",
        error
      );
    }
  };
  const fetchCountryData = async () => {
    try {
      const response = await axios.get(
        `https://studyapi.ieodkv.com/countries/${params.countryUrl}`
      );
      setCountryData(response.data);
    } catch (error) {
      console.error(
        "Error fetching data of country where fetching data of popular subject for selected country:",
        error
      );
    }
  };
  return (
    <>
      {subjectData.length && countryData.name ? (
        <>
          <SelectedSubjectHero
            subjectName={subjectData[0].name}
            countryName={countryData.name}
            BGImage={`https://studyapi.ieodkv.com/countries/images/${countryData.countryImage}`}
          />

          {/* Render the rest of your components using the fetched data */}

          <FindProgramAbroadbox
            subjectName={subjectData[0].name}
            degree={subjectData[0].degree}
          />

          <VerticalizeTreeProjectComponent
            imageUrl={futureAccountingCareer}
            heading={`${subjectData[0].name} Degree Abroad`}
            paragraph={parse(subjectData[0].abroad)}
          />
          <Whystudee />

          <Agent />

          <TreeProjectComponent
            imageUrl={accountingProgramStructure}
            heading={`${subjectData[0].name} program structure`}
            paragraph={parse(subjectData[0].programStructure)}
          />

          <PopularSubjects
            heading={`Types of ${subjectNames} Subjects`}
            allSubjects={theseAllNestedSubjects}
            length={9}
          />

          <BrowseByCountry
            heading={`Best countries to study ${subjectNames}`}
            countries={countries}
          />

          <BrowseByCountry
            heading={`Best university to study ${subjectNames}`}
            countries={universities}
          />

          <Undergraduate_programs />

          <VerticalizeTreeProjectComponent
            heading={`Future ${subjectData[0].name} Careers`}
            paragraph={parse(subjectData[0].futureCareers)}
            imageUrl={FutureFinance}
          />
          {/* ... Other components */}
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
export default Selected_subject_from_selected_country;
