import React from "react";
import SelectedUniHero from "../component/Selected University/selecteduniHero.jsx";
import Whystudee from "../component/home component/whystudee.jsx" 
import Uni_details_And_Logo from "../component/Selected University/uni_detailsAndLogo.jsx"
import Uni_FindAndApplyCard from "../component/Selected University/Uni_FindAndApplyCard.jsx"
const SelectedUniversity = () => {
  return (
    <>
      <SelectedUniHero/>
      <Whystudee/>
      <Uni_details_And_Logo/>
      <Uni_FindAndApplyCard/>
    </>
  );
};

export default SelectedUniversity;
