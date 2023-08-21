import React from "react";
import SelectedUniHero from "../component/Selected University/selecteduniHero.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
import Uni_details_And_Logo from "../component/Selected University/uni_detailsAndLogo.jsx";
import Uni_FindAndApplyCard from "../component/Selected University/Uni_FindAndApplyCard.jsx";
import TreeProjectComponent from "../component/home component/treesProject.jsx";
import VerticalizeTreeProjectComponent from "../component/home component/Verticalize layout treeProject.jsx";
import StudentLifeGalleryAndHeading from "../component/university component/studentLife(heading/Facilities.jsx";
const SelectedUniversity = () => {
  return (
    <>
      <SelectedUniHero uniName={"ABC"} />
      <Whystudee />
      <Uni_details_And_Logo />
      <Uni_FindAndApplyCard />
      <br />
      <br />
      <VerticalizeTreeProjectComponent
        imageUrl="https://images.studee.com/illustrations/illustration__feature--why-study-at-uni.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        heading="Why study at 3A Ecole du Management Responsable?"
        paragraph={
          <ol>
            <br />
            <b>
              <li className="mtc">Conscioos campos</li>
            </b>
            <p className="ltc">
              3A is dedicated to making the world a better place
            </p>
            <br />
            <b>
              <li className="mtc">Awesome location</li>
            </b>
            <p className="ltc">
              The University has connections with universities and organizations
              all over the world
            </p>
            <br />
            <b>
              <li className="mtc">Global partnerships</li>
            </b>
            <p className="ltc">
              France is a popular study abroad destination the world a better
              place
            </p>
            <br />
            <br />
          </ol>
        }
      />
      <TreeProjectComponent
        imageUrl="https://images.studee.com/illustrations/illustration__feature--life-as-a-student.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        heading="Life as an international student"
        paragraph="The University's stuplenty for international students to get involved in at 3A. The University is home to an abundance of student organizations; there is everything from sports clubs and political workshops to volunteering initiatives and environmental groups.
        Overseas students are supported throughout their studies by the outstanding international office. The friendly team goes above and beyond to help international students settle into their new surroundings - there‚Äôs always someone to help you at 3A."
      />
      <StudentLifeGalleryAndHeading
        title={"Student life & facilities"}
        image={
          "https://images.studee.com/images/content/content__university--student-life.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=80&w=1184"
        }
      />
      <VerticalizeTreeProjectComponent
        imageUrl="https://images.studee.com/illustrations/illustration__feature--fees-and-funding.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        heading="Fees and funding"
        paragraph={
          <ol>
            <br />
            <b>
              <li className="mtc">Yearly Plan</li>
            </b>
            <p className="ltc">
              3A is dedicated to making the world a better place
            </p>
            <br />
            <b>
              <li className="mtc">10 Years Plan</li>
            </b>
            <p className="ltc">
              The University has connections with universities and organizations
              all over the world
            </p>
            <br />
            <b>
              <li className="mtc">Scholarship Plan</li>
            </b>
            <p className="ltc">
              France is a popular study abroad destination the world a better
              place
            </p>
            <br />
            <br />
          </ol>
        }
      />
    </>
  );
};

export default SelectedUniversity;
