import React from 'react';
import SelectedSubjectHero from "../component/Subjects Component/selectedSubjectHero.jsx"
import Whystudee from '../component/home component/whystudee.jsx';
import VerticalizeTreeProjectComponent from '../component/home component/Verticalize layout treeProject.jsx';
import FindProgramAbroadbox from '../component/Subjects Component/findProgAbroadBox.jsx';
import TreeProjectComponent from "../component/home component/treesProject.jsx";
const Selected_subject = () =>{
    return (
        <>
        <SelectedSubjectHero/>
        <FindProgramAbroadbox/>
        <VerticalizeTreeProjectComponent
        imageUrl="https://images.studee.com/illustrations/illustration__feature--how-to-study.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        heading="Art degrees abroad"
        paragraph={
          <ol>
            <br />
            <b>
              <li className="mtc">Conscioos campos</li>
            </b>
            <p className="ltc">
            Art is a varied subject which covers many different areas and specializations. Studying an art degree at a university is a great option if you’re a passionate artist who wants to improve their skills and pursue a career in the arts after graduation. You can study a general art degree, or specialize in something like fine art or sculpture.
            </p>
            <br />
            <b>
              <li className="mtc">Fine art</li>
            </b>
            
            <br />
            <b>
              <li className="mtc">Graphic design</li>
            </b>
          
            <br />
            <b>
              <li className="mtc">Photography</li>
            </b>
            <b>
            <br />
              <li className="mtc">Painting</li>
            </b>
            <br />
            <b>
              <li className="mtc">Sculpture</li>
            </b>
          
            <br />
            <br />
          </ol>
        }
      />
        <Whystudee/>
        <TreeProjectComponent
        imageUrl="https://images.studee.com/illustrations/illustration__feature--programs.png?ixlib=js-2.3.2&auto=format&fit=crop&q=40&w=460&h=345"
        heading="Art program structure"
        paragraph={`There are a wide range of specific art programs you can choose to study, so think carefully about which area you’re most interested in and look for the degree that best matches your interests and skills.

        You can study a degree in art as a BA at undergraduate level for three or four years, depending on your country of study. At master’s level you can get an MA over one or two years, or a doctorate as a PhD, MPhil or DFA (Doctorate in Fine Arts).
        
        Most arts programs are very practical in nature, and you will spend a lot of your time working on projects on your own or in a group. You will be assessed through examples of your work, and some written coursework and exams. 
        The program structure and content of an art program will vary massively depending on the course you choose. It is possible to study a general art degree, but most of these programs require you to choose a specialism in your second year of study.`}
        linkText="Find out more about Project 1"
        linkUrl="https://example.com/project1"
      />

        </>
    )
}
export default Selected_subject