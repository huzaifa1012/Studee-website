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

const Selected_subject = () => {
  const [data, setData] = useState("");

  const params = useParams();

  useEffect(() => {
    animateScroll.scrollToTop();

    fetchSelectedSubjectData();
  }, []);
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

  return (
    <>
      <SelectedSubjectHero
        subjectName={params.name}
        BGImage={`https://studyapi.ieodkv.com/subjects/images/${
          data && data.image
        }`}
      />

      <FindProgramAbroadbox subjectName={data.name} degree={data.degree} />

      <VerticalizeTreeProjectComponent
        imageUrl={futureAccountingCareer}
        heading={`${data.name} degrees abroad`}
        // paragraph={parse(data && data.abroad
        paragraph={
          <div dangerouslySetInnerHTML={{ __html: data.abroad }}></div>
        }
      />

      <Whystudee />

      <Agent />

      <TreeProjectComponent
        imageUrl={accountingProgramStructure}
        heading="Art program structure"
        paragraph={
          // parse(data && data.programStructure)
          <div
            dangerouslySetInnerHTML={{ __html: data.programStructure }}
          ></div>
        }
      />

      <PopularSubjects
        // heading={`Types of ${subjectNames} Subjects`}
        allSubjects={theseAllNestedSubjects}
        length={9}
      />

      <BrowseByCountry
        // heading={`Best countries to study ${subjectNames}`}
        countries={countries}
      />

      <BrowseByCountry
      // heading={`Best university to study ${subjectNames}`}
      // countries={universities}
      />

      <Undergraduate_programs />

      <VerticalizeTreeProjectComponent
        heading={"Future finance careers"}
        paragraph={`Graduating with a finance degree means there are many career opportunities available to you. You are not limited to working in the country you studied in, and every country has a financial industry.

Some of the jobs international students with finance qualifications go on to do include:

Actuary
Accountant
Analyst
          CFO`}
        imageUrl={FutureFinance}
      />
    </>
  );
};
export default Selected_subject;
