import React from "react";
import ProgramDetailHero from "../component/programs components/programDetailHero.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
import VerticalizeTreeProjectComponent from "../component/home component/Verticalize layout treeProject.jsx";
import VisaRequirementCard from "../component/programs components/visaRequirementCard.jsx";
import DetalilsWithImage from "../component/detalilsWithImage detalilsWithImage.jsx";
const ProgramDetails = () => {
  return (
    <>
      <ProgramDetailHero />
      <Whystudee />
      <br />
      <VerticalizeTreeProjectComponent
        heading={"Program overview"}
        paragraph={`What AIT Academy of Interactive Technology says about their program:
"AIT is the only higher education provider of a specific 2D Animation Bachelor in Australia, so in this program we really deep-dive into this artform together. Because of our specialisation, AIT is very well-known within the animation industry for producing quality 2D animation graduates.
Be immersed in the world of 2D animation, discovering how to draw, design and animate characters, environments and stories in multiple styles, using professional equipment, contemporary software, and processes used by industry experts. You will develop skills in storyboarding, colour styling, bio-mechanics, movement, rigging, light and colour theory, and the principles of animation.
Delivered in our 2D animation studio, you will be working side by side with like-minded creatives on the latest animation software and hardware, just like in a professional studio.


Software Programs we'll provide:`}
        imageUrl={
          "https://images.studee.com/illustrations/illustration__programs--programs.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
      />
      <br />
      {/* <TreeProjectComponent
        heading={"Admission Requirements"}
        paragraph={`What AIT Academy of Interactive Technology says about their program:
"AIT is the only higher educat animation, discovering how to draw, design and animate characters, environments and stories in multiple styles, using professional equipment, contemporary software, and processes used by industry experts. You will develop skills in storyboarding, colour styling, bio-mechanics, movement, rigging, light and colour theory, and the principles of animation.
Delivered in our 2D animation studio, you will be working side by side with like-minded creatives on the latest animation software and hardware, just like in a professional studio.


Software Programs we'll provide:`}
        imageUrl={
          "https://images.studee.com/illustrations/illustration__for-students--what-is-studee.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
      /> */}
      <div style={{backgroundColor:'#f7f8f9'}}>

      <DetalilsWithImage
        heading={"Admission Requirements"}
        imageUrl={
          "https://images.studee.com/illustrations/illustration__for-students--what-is-studee.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
        body={
          <>
            <h3>Undergraduate academic requirements</h3>
            <ul>
              <li>
                Be 17 years or older at the time of commencement (students under
                18 will require a support letter from their parent or guardian)
              </li>
              <li>
                Have completed high school certification equivalent to year 12;
                OR )
              </li>
              <li>
                Have completed year 11 (or equivalent) and be able to provide
                year 11 results, a support letter from a parent or guardian &
                attend a screening interview; OR
              </li>
              <li>
                Have successfully completed a certificate IV, VET Diploma or
                Higher Education Diploma; OR
              </li>
              <li>
                Have successfully completed one year of full time study in a
                degree course at a higher education provider
              </li>
            </ul>
            <h3>English proficiency</h3>
            <ul>
              <li>
                IELTS: Diploma 5.5 (no band less than 5.0) | Bachelor 6.0 (no
                band less than 5.5). Exams must have been completed within the
                last 12 months
              </li>
              <li>
                PTE Academic: Diploma 46 no band less than 42 | Bachelor 6.0 no
                band less than 5.5
              </li>
              <li>Cambridge (CAE): Diploma 162 | Bachelor 169</li>
              <li>TOEFL: Diploma PB 506, TWE 3.5 | Bachelor PB 534, TWE 4</li>
              <li>EF SET Scores: Diploma & Bachelor B2 upper intermediate</li>
            </ul>
          </>
        }
      />
      </div>

      <DetalilsWithImage
        heading={"Fees And Funding"}
        imageUrl={
          "https://images.studee.com/illustrations/illustration__general--fees-and-funding.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        }
        body={
          <>
            <h3>Fee information</h3>
            <ul>
              <li>
                Undergraduate tuition: from AUD$8,000 to AUD$16,050 per year
              </li>
            </ul>
            <h3>Funding</h3>
            <p>
              International Scholarship Excluding Subcontinent International
              Scholarship Excluding Subcontinent : Save up to AUD$16,050 (Save
              AUD$5,350 per year for 3 years on Bachelors and 1 year on
              Diplomas). Scholarship applies to Bachelors and Diplomas of the
              following courses: 2D Animation, Film, 3D Animation or Game
              Design.
            </p>
            <h3>Qualifications</h3>
            <ul>
              <li>
                Continue a full-time enrolment in the course listed on their
                Letter of Offer
              </li>
              <li>
                Remain up-to-date with all Tuition fees as per student Letter of
                Offer
              </li>
              <li>Meet the conditions of their student visa</li>
              <li>
                Maintain at least a Pass average in each Trimester in the course
                of study
              </li>
              <li>
                Must not receive a Fail in any unit in any Trimester in the
                course of study
              </li>
            </ul>
            <h3>English proficiency</h3>
            <ul>
              <li>
                IELTS: Diploma 5.5 (no band less than 5.0) | Bachelor 6.0 (no
                band less than 5.5). Exams must have been completed within the
                last 12 months
              </li>
              <li>
                PTE Academic: Diploma 46 no band less than 42 | Bachelor 6.0 no
                band less than 5.5
              </li>
              <li>Cambridge (CAE): Diploma 162 | Bachelor 169</li>
              <li>TOEFL: Diploma PB 506, TWE 3.5 | Bachelor PB 534, TWE 4</li>
              <li>EF SET Scores: Diploma & Bachelor B2 upper intermediate</li>
            </ul>
          </>
        }
      />

      <VisaRequirementCard/>

    </>
  );
};
export default ProgramDetails;
