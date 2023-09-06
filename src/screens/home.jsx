import React, { useEffect, useState } from "react";
import Hero from "../component/home component/hero";
import Whystudee from "../component/home component/whystudee";
import WorldMap from "../component/home component/worldMap.jsx";
import Testimonial from "../component/home component/Testimonial.jsx";
import StudyingAbroad from "../component/home component/StudyingAbroad.jsx";
import BrowseByCountry from "../component/home component/browseByCountry.jsx";
import TreeProjectComponent from "../component/home component/treesProject.jsx";
import tresImg from "../assets/TREES-FOR-PROJECT.png";
import PopularSubjects from "../component/home component/PopularSubjects";
import axios from "axios";
const Home = () => {
  const [studyingAbroadData, setStudyingAbroadData] = useState([]);
  const [heroData, setHeroData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchAbroadGuide();
    fetchHeroData();
    fetchCountries();
    fetchSubjects();
  }, []);

  const fetchHeroData = async () => {
    try {
      const response = await axios.get(
        "https://studyapi.ieodkv.com/content/headings/home-page/home-page-1"
      );
      // console.log(response.data.headingName)
      setHeroData(response.data);
    } catch (error) {
      console.error("Error fetching studying abroad data:", error);
    }
  };
  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        "https://studyapi.ieodkv.com/countries/"
      );
      setCountries(response.data);
      // console.log("/countries",response.data);
    } catch (error) {
      console.error("Error in Browse Countries:", error);
    }
  };
  const fetchAbroadGuide = async () => {
    try {
      const response = await axios.get(
        "https://studyapi.ieodkv.com/guides/studying-abroad"
      );
      // console.log(response.data.allGuides)
      setStudyingAbroadData(response.data.allGuides);
    } catch (error) {
      console.error("Error fetching studying abroad data:", error);
    }
  };
  const fetchSubjects = async () => {
    try {
      const response = await axios.get(
        "https://studyapi.ieodkv.com/popular/popularForHome"
      );
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching Subjects  data:", error);
    }
  };

  return (
    <>
      <Hero data={heroData} />
      <Whystudee fromHome={true} />
      <TreeProjectComponent
        imageUrl={tresImg}
        heading="Trees for degrees - The one million trees project"
        paragraph="When you enroll through us, you become part of a new movement to help reduce the environmental impact of international student flights. We’ll donate to Plant-for-the-Planet, who plant trees on your behalf. These trees contribute towards absorbing the CO2 released into our atmosphere, which helps to protect our climate and the planet."
        linkText="Find out more about Project 1"
        linkUrl="https://example.com/project1"
      />
      <WorldMap />
      <Testimonial />
      <StudyingAbroad studyingAbroadData={studyingAbroadData} />
      <BrowseByCountry heading={"Browse by country"} countries={countries} />
      <PopularSubjects
        heading={"Popular Subjects"}
        allSubjects={subjects}
        length={9}
      />
    </>
  );
};

export { Home };
