import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/home component/navbar";
import Hero from "../component/home component/hero";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div></div>
    </>
  );
};

export { Home };
