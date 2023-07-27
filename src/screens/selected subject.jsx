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
const Selected_subject = () => {
  
  const [data, setData] = useState("");
  
  const params = useParams();

  
  useEffect(()=>{
    fetchSelectedSubjectData()
  },[])
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
  const fetchSelectedSubjectData = async () => {
    try {
      const response = await axios.get(
        `https://ieodkvapi-548f8ac2251a.herokuapp.com/subjects/subject1/${params.name}`
      );
      setData(response.data);
      console.log("subject",response.data);

    } catch (error) {
      console.error("Error in selected subject (Home):", error);
    }
  };

  return (
    <>
      <SelectedSubjectHero subjectName={params.name} BGImage={`https://ieodkvapi-548f8ac2251a.herokuapp.com/subjects/images/${data && data.image}`} />

          <FindProgramAbroadbox subjectName={data.name} degree={data.degree} />

      <VerticalizeTreeProjectComponent
        imageUrl={futureAccountingCareer}
        heading={`${data.name} degrees abroad`}

        paragraph={
      data.abroad
        }
      />

      <Whystudee />
      
      <Agent />

      <TreeProjectComponent
        imageUrl={accountingProgramStructure}
        heading="Art program structure"
        paragraph={`There are a wide range of specific art programs you can choose to study, so think carefully about which area you’re most interested in and look for the degree that best matches your interests and skills.

        You can study a degree in art as a BA at undergraduate level for three or four years, depending on your country of study. At master’s level you can get an MA over one or two years, or a doctorate as a PhD, MPhil or DFA (Doctorate in Fine Arts).
        Most arts programs are very practical in nature, and you will spend a lot of your time working on projects on your own or in a group. You will be assessed through examples of your work, and some written coursework and exams. 
        The program structure and content of an art program will vary massively depending on the course you choose. It is possible to study a general art degree, but most of these programs require you to choose a specialism in your second year of study.`}
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
