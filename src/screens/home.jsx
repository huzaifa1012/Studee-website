import React from "react";
import Hero from "../component/home component/hero";
import Whystudee from "../component/home component/whystudee";
import WorldMap from "../component/home component/worldMap.jsx";
import Testimonial from "../component/home component/Testimonial.jsx";
import StudyingAbroad from "../component/home component/StudyingAbroad.jsx";
import BrowseByCountry from "../component/home component/browseByCountry.jsx";
import TreeProjectComponent from "../component/home component/treesProject.jsx";
import tresImg from "../assets/TREES-FOR-PROJECT.png"
import PopularSubjects from "../component/home component/PopularSubjects";
const Home = () => {
  const allSubjects = [
    {subject: "Accounting",image:"https://images.studee.com/images/program/programs__creative-arts-design.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",},
    {subject: "Agriculture",image: "https://images.studee.com/images/program/programs__agriculture-food-animal-sciences.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80",},
    // ["Economics"],
    {subject:"Art",image:'https://images.studee.com/images/program/programs__creative-arts-design.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80'},
    {subject:"Biology",image:"https://images.studee.com/images/program/programs__life-sciences-medicine-health.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
    {subject:"Communication",image:"https://images.studee.com/images/program/programs__business-management-studies.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
    {subject:"History",image:""},
    {subject:"Economics",image:""},
    {subject:"Business",image:"https://images.studee.com/images/program/programs__business-management-studies.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"},
    {subject:"Engineering",image:""},
    {subject:"Agriculture",image:""},
    {subject:"History",image:""},
    {subject:"LAW",image:""},
  ];
  const countries = [
    {
      name: 'France',
      image: 'https://images.studee.com/images/country/country__uk.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=580&h=350&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80',
    },
    {
      name: 'Canada',
      image: 'https://images.studee.com/images/country/country__australia.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80',
    },
    {
      name: 'UAE',
      image: 'https://images.studee.com/images/country/country__belgium.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80',
    },
    {
      name: 'Cyprus',
      image: 'https://images.studee.com/images/country/country__cyprus.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80',
    },
    {
      name: 'Austria',
      image: 'https://images.studee.com/images/country/country__canada.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80',
    },
    {
      name: 'UK',
      image: 'https://images.studee.com/images/country/country__cyprus.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=340&h=296&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80',
    },
    // Add more country objects as needed
  ];
  
  
  return (
    <>
      <Hero />
      <Whystudee />
      <TreeProjectComponent
        imageUrl={tresImg}
        heading="Trees for degrees - The one million trees project"
        paragraph="When you enroll through us, you become part of a new movement to help reduce the environmental impact of international student flights. We’ll donate to Plant-for-the-Planet, who plant trees on your behalf. These trees contribute towards absorbing the CO2 released into our atmosphere, which helps to protect our climate and the planet."
        linkText="Find out more about Project 1"
        linkUrl="https://example.com/project1"
      />
      <WorldMap />
      <Testimonial />
      <StudyingAbroad />
      <BrowseByCountry heading={"Browse by country"} countries={countries}/>
      <PopularSubjects heading={"Popular Subjects"} allSubjects={allSubjects} length={9}  />

    </>
  );
};

export { Home };
