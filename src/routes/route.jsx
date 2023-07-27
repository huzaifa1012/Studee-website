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
import Account from "../screens/account";
import YourApplications from "../screens/YourApplications";
import VisaRequirements from "../screens/visa requirement";
import Selected_subject_from_selected_country from "../component/selectedCountry/Selected subject from selected country";
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
    <Route path="/guides" element={<Guides />} />
    <Route path="/guide1/:name" element={<GuideDetailPage/>} />
    <Route path="/visas-&-travel/:name" element={<VisaRequirements />}/>
    <Route path="/subjects/:name" element={<Selected_subject />} />
    <Route path="/subjects/country/:countryUrl/subject/:subjectUrl" element={<Selected_subject_from_selected_country/>} />
    <Route path="/program-details" element={<ProgramDetails/>} />
    <Route path="/countries/:name" element={<SelectedCountry/>} />
    <Route path="/personalized-matches" element={<PersonalizedMatches/>} />
    <Route path="/account" element={<Account/>} />
    <Route path="/your-applications" element={<YourApplications/>} />
    <Route path="/*" element={<h1>Wrong Routes</h1>} />
  </Routes>    
);

export { Routing };
