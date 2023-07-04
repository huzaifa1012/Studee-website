import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "../screens/contact";
import { Home } from "../screens/home";
import { About } from "../screens/about";
import Universities from "../screens/universities";
import SelectedUniversity from "../screens/selected university";
import Guides from "../screens/guides";
import Programs from "../screens/programs.jsx";
import Login from "../screens/Authentication Screens/login";
import ForgePassword from "../screens/Authentication Screens/forget password";
import Register from "../screens/Authentication Screens/signup";
import Selected_subject from "../screens/selected subject";
import ProgramDetails from "../screens/program details";
import GuideDetailPage from "../screens/guideDetailPage.jsx";
import SelectedCountry from "../screens/selectedCountry";
import PersonalizedMatches from "../screens/PersonalizedMatches.jsx";
const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forget-password" element={<ForgePassword />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/programs" element={<Programs />} />
    <Route path="/universities" element={<Universities />} />
    <Route path="/selected-universities" element={<SelectedUniversity />} />
    <Route path="/guide" element={<Guides />} />
    <Route path="/selected-subject" element={<Selected_subject />} />
    <Route path="/program-details" element={<ProgramDetails/>} />
    {/* <Route path="/program-details" element={</>} /> */}
    <Route path="/guide-detail-page" element={<GuideDetailPage/>} />
    <Route path="/selected-country" element={<SelectedCountry/>} />
    <Route path="/personalized-matches" element={<PersonalizedMatches/>} />
    <Route path="/*" element={<h1>Wrong Routes</h1>} />
  </Routes>    
);

export { Routing };
