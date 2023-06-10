import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/home component/navbar";
import Hero from "../component/home component/hero";
import Whystudee from "../component/home component/whystudee";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Whystudee/>
    </>
  );
};

export { Home };
