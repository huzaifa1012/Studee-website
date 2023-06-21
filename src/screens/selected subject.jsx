import React from "react";
import SelectedSubjectHero from "../component/Subjects Component/selectedSubjectHero.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
import VerticalizeTreeProjectComponent from "../component/home component/Verticalize layout treeProject.jsx";
import FindProgramAbroadbox from "../component/Subjects Component/findProgAbroadBox.jsx";
import TreeProjectComponent from "../component/home component/treesProject.jsx";
import { useLocation } from "react-router-dom";
import {BiRightArrowAlt} from "react-icons/bi"
import PopularSubjects from "../component/home component/PopularSubjects.jsx";
const Selected_subject = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const subjectNames = searchParams.get("subject");
  const BGImages = searchParams.get("backgroundImage");



  const theseAllNestedSubjects = [
    {subject: "Art Drawing",image:"https://images.studee.com/images/program/programs__creative-arts-design.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",},
    {subject: "Art Design",image: "https://images.studee.com/images/program/programs__agriculture-food-animal-sciences.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",},
    // ["Economics"],
    {subject:"Art",image:'https://images.studee.com/images/program/programs__creative-arts-design.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80'},
    {subject:"Art Communication",image:"https://images.studee.com/images/program/programs__life-sciences-medicine-health.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
    {subject:"Art Creation",image:"https://images.studee.com/images/program/programs__business-management-studies.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
    {subject:"Art Sculpture",image:""},
    // {subject:"Economics",image:""},
    // {subject:"Business",image:"https://images.studee.com/images/program/programs__business-management-studies.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
    // {subject:"Engineering",image:""},
    // {subject:"Agriculture",image:""},
    // {subject:"History",image:""},
    // {subject:"LAW",image:""},
  ];


  return (
    <>
      <SelectedSubjectHero subjectName={subjectNames} BGImage={BGImages} />
      <FindProgramAbroadbox />
      <VerticalizeTreeProjectComponent
        imageUrl="https://images.studee.com/illustrations/illustration__feature--how-to-study.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        heading="Art degrees abroad"
        paragraph={
          <ol>
            <br />
            <b>
              <li className="mtc">Conscioos campos</li>
            </b>
            <p className="ltc">
              Art is a varied subject which covers many different areas and
              specializations. Studying an art degree at a university is a great
              option if you’re a passionate artist who wants to improve their
              skills and pursue a career in the arts after graduation. You can
              study a general art degree, or specialize in something like fine
              art or sculpture.
            </p>
            <br />
            <b>
              <li className="mtc">Fine art</li>
            </b>

            <br />
            <b>
              <li className="mtc">Graphic design</li>
            </b>

            <br />
            <b>
              <li className="mtc">Photography</li>
            </b>
            <b>
              <br />
              <li className="mtc">Painting</li>
            </b>
            <br />
            <b>
              <li className="mtc">Sculpture</li>
            </b>

            <br />
            <br />
          </ol>
        }
      />
      <Whystudee />
      <TreeProjectComponent
        imageUrl="https://images.studee.com/illustrations/illustration__feature--programs.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        heading="Art program structure"
        paragraph={`There are a wide range of specific art programs you can choose to study, so think carefully about which area you’re most interested in and look for the degree that best matches your interests and skills.

        You can study a degree in art as a BA at undergraduate level for three or four years, depending on your country of study. At master’s level you can get an MA over one or two years, or a doctorate as a PhD, MPhil or DFA (Doctorate in Fine Arts).
        
        Most arts programs are very practical in nature, and you will spend a lot of your time working on projects on your own or in a group. You will be assessed through examples of your work, and some written coursework and exams. 
        The program structure and content of an art program will vary massively depending on the course you choose. It is possible to study a general art degree, but most of these programs require you to choose a specialism in your second year of study.`}
      />

<PopularSubjects heading={`Types of ${subjectNames} Subjects`} allSubjects={theseAllNestedSubjects} length={9}  />


    </>
  );
};
export default Selected_subject;
