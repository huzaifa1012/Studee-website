import React from "react";
import Hero from "../component/home component/hero";
import Whystudee from "../component/home component/whystudee";
import WorldMap from "../component/home component/worldMap.jsx";
import Testimonial from "../component/home component/Testimonial.jsx";
import StudyingAbroad from "../component/home component/StudyingAbroad.jsx";
import BrowseByCountry from "../component/home component/browseByCountry.jsx";
import PopularSubjects from "../component/home component/popularSubjects.jsx";
import TreeProjectComponent from "../component/home component/treesProject.jsx";
const Home = () => {
  return (
    <>
      <Hero />
      <Whystudee />
      <TreeProjectComponent
        imageUrl="https://images.studee.com/images/content/content__trees-for-degrees-badge.svg"
        heading="Trees for degrees - The one million trees project"
        paragraph="When you enroll through us, you become part of a new movement to help reduce the environmental impact of international student flights. We’ll donate to Plant-for-the-Planet, who plant trees on your behalf. These trees contribute towards absorbing the CO2 released into our atmosphere, which helps to protect our climate and the planet."
        linkText="Find out more about Project 1"
        linkUrl="https://example.com/project1"
      />
      <WorldMap />
      <Testimonial />
      <StudyingAbroad />
      <BrowseByCountry />
      <PopularSubjects />
    </>
  );
};

export { Home };
