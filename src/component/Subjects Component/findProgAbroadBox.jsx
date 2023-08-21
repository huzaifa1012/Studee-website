import React, { useState } from "react";
import "./findProgAbroad.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdOutlineNavigateNext } from "react-icons/md";
import find1Img from "../../assets/Australlia country/accounting/bachelors-program-in-australlia.png"
import find2Img from "../../assets/Australlia country/accounting/masters-program-in-australlia.png"
import find3Img from "../../assets/Australlia country/accounting/PHd-program-in-australia.png"
import ViewProgMod from "../Reusable components/program_Modal";
const FindProgramAbroadbox = ({ paramsFeild, degree, subjectName }) => {



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [degreeQuery, setDegreeQuery] = useState(false);
  const [selectQuery, setSelectQuery] = useState(false);



  const showModal = (data) => {
    setSelectedProgram(data)
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>


      <ViewProgMod
        isModalOpen={isModalOpen}
        paramsFeild={paramsFeild ? paramsFeild : selectQuery}
        programQuery={selectedProgram}
        onClose={handleCancel}
      />



      {subjectName &&
        <div className="findProgBox_main_wrap">
          <div className="findProgBox_head">
            <h2 className="mtc">Find your perfect {subjectName.toLowerCase()} programs abroad </h2>
            <p className="mtc">
              Find {subjectName.toLowerCase()} programs you love that match your needs & aspirations,
              where you stand a high chance of acceptance.
            </p>
          </div>
          <div className="findProgBox_studee_wrap">
            <div className="findProgBox_studee_body">
              {degree.map((data, index) => {
                return (

                  <div className="findProgBox_studee_box" onClick={() => { showModal(data), setSelectedProgram(data), setSelectQuery('degree') }}>
                    <img src={find1Img} />
                    <h2 className="mtc">{data}</h2>
                    <MdOutlineNavigateNext className="findProgBox_nextIcon" />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="findProgBox_bottom_wrap">
            <div className="findProgBox_bottom" onClick={() => { showModal(subjectName), setSelectQuery('subject') }}>
              <button style={{ backgroundColor: 'var(--primary-color)', padding: '15px 20px', color: 'white', borderRadius: '8px' }}>Find your perfect programs </button>
            </div>
          </div>
        </div>
      };
    </div>
  );
};
export default FindProgramAbroadbox;
