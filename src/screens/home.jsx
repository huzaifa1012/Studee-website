import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/home component/navbar";
import Hero from "../component/home component/hero";
import Whystudee from "../component/home component/whystudee";
import TreesProject from "../component/home component/treesProject.jsx";
import WorldMap from "../component/home component/worldMap.jsx";
import Testimonial from "../component/home component/Testimonial.jsx";
import StudyingAbroad from "../component/home component/StudyingAbroad.jsx";
import BrowseByCountry from "../component/home component/browseByCountry.jsx";
import PopularSubjects from "../component/home component/PopularSubjects.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Whystudee/>
      <TreesProject/>
      <WorldMap/>
      <Testimonial/>
      <StudyingAbroad/>
      <BrowseByCountry/>
      <PopularSubjects/>
    </>
  );
};

export { Home };
