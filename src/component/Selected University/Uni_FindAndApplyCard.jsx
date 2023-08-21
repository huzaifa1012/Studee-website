import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCheckboxData } from "../../store/checkboxDataSlice";
import { useDispatch } from "react-redux";
const Uni_FindAndApplyCard = ({ name, data }) => {

  const [subjectData, setSubjectData] = useState([]);
  const [location, setLocation] = useState();
  const [subject, setSubject] = useState();

  const [subjectFor, setSubjectFor] = useState("");
  const [program, setProgram] = useState("");
  const [programFor, setProgramFor] = useState("");


  // These states added when i change my hero options into input 
  const [filteredOptions, setFilteredOptions] = useState([]);



  const [selectedOption, setSelectedOption] = useState(""); // To keep track of the selected option


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.userId);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // modal code ends
  console.log(programFor)
  useEffect(() => {
    axios
      .get(`https://studyapi.ieodkv.com/popular/subjects`)
      .then((response) => {
        setSubjectData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParameters = [];
    let url = "/search-programs/";

    if (subject) {
      searchParameters.push(subjectFor);
    }
    if (programFor) {
      searchParameters.push(programFor);
    }
    if (id) {
      axios
        .put(`https://studyapi.ieodkv.com/students/${id}`, {
          searchParameters: searchParameters,
        })
        .then((response) => {
          // if (locationFor) {
          //   const formattedLocation = location
          //     ? location.toLowerCase().replace(/\s+/g, "-")
          //     : null;
          //   url += `?${locationFor.field}=${encodeURIComponent(
          //     formattedLocation
          //   )}`;
          // }

          if (subject) {
            const formattedSubject = subject
              ? subject.toLowerCase().replace(/\s+/g, "-")
              : null;
          }

          // Navigate to the new page
          setLocation("");
          setSubject("");
          navigate(url);
        })
        .catch((error) => console.log(error));

      axios
        .post(`https://studyapi.ieodkv.com/popular`, {
          subject: subjectFor,
          location: locationFor,
        })

        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      // axios
      //   .post(`https://studyapi.ieodkv.com/popular`, {
      //     subject: subjectFor,
      //   })

      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => console.log(error));


      if (subject) {
        const formattedSubject = subject
          ? subject.toLowerCase().replace(/\s+/g, "-")
          : null;
      }

      localStorage.setItem(`${subjectFor.field}`, subjectFor.name || null);
      if (programFor) {

        localStorage.setItem('graduate', programFor.name);
      }

      setLocation("");
      setSubject("");
      navigate(url);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center" style={{ flexDirection: 'column', width: '85% ', }}>

          <h1 className="mb-2 text-3xl">Find & Apply Programs Instantly </h1>
          <p className="ltc mb-5">
            Find programs you love that match your needs & aspirations, where
            you stand a high chance of acceptance.
          </p>

          <form style={{ border: '2px solid var(--text-color)', boxShadow: '0px 2px 3px gray ' }} className="hero_user-input-section mb-20" onSubmit={handleSearch}>

            <div className="theHero_label">
              <p className="mtc hero_labelP">Program Type</p>

              <div className="button-container flex justify-arround ">
                <input
                  value={"Postgraduate"}
                  type="button"
                  className={`education-button hero_inpbox-style-findCard cursor-pointer border  rounded ${selectedOption === "postgraduate" ? "selected" : ""}`}
                  style={selectedOption === "postgraduate" ? { background: "var(--secondary-color)", color: "white", width: '50px' } : {}}

                  onClick={() => {
                    setSelectedOption("postgraduate")

                    setProgram("Postgraduate")
                    setProgramFor({
                      field: "graduate",
                      name: "Postgraduate",
                    });
                  }}
                />

                <input
                  type="button"

                  value={'Undergraduate'}
                  className={`education-button hero_inpbox-style-findCard  cursor-pointer border  rounded ${selectedOption === "undergraduate" ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedOption("undergraduate")

                    setProgram("Undergraduate")
                    setProgramFor({
                      field: "graduate",
                      name: "Undergraduate",
                    });
                  }}
                  style={selectedOption === "undergraduate" ? { background: "var(--secondary-color)", color: "white" } : {}}

                />
              </div>
            </div>

            <div className="theHero_label">
              <p className="mtc hero_labelP">Subject</p>

              <input
                type="text"
                placeholder="Enter a subject"
                className="hero_inpbox-style"
                value={subject}
                onChange={(e) => {
                  const enteredValue = e.target.value;
                  setSubject(enteredValue);

                  if (enteredValue.trim() === '') {
                    setFilteredOptions([]); // Clear the filtered options
                  } else {
                    const subjectFilter = subjectData.filter(
                      (row) => row.name.toLowerCase().includes(enteredValue.toLowerCase())
                    );
                    setFilteredOptions(subjectFilter);
                  }
                }}
              />

              {filteredOptions.length > 0 && subject.trim() !== '' && (
                <div className="main_hero_option_box">
                  {filteredOptions.map((row) => (
                    <div
                      key={row.name}
                      className="main_hero_option"
                      style={{ fontSize: 18, cursor: "pointer" }}
                      onClick={() => {
                        setSubject(row.name);
                        setSubjectFor({
                          field: row.for,
                          name: row.name,
                        });
                        setFilteredOptions([]); // Clear the filtered options
                      }}
                    >
                      {row.name.slice(0, 30)}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="heroBtnCover">
              <button
                name=""
                id=""
                className="hero_btn"
                style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
                type="submit"
              // onClick={() => setIsModalOpen(true)}
              // onClick={() => handleSearch()}
              >
                Find Your Perfect Program
                <BiRightArrowAlt className="heroBtnIcon" style={{ color: 'white' }} size={25} />
              </button>
            </div>

          </form>
        </div>
      </div >
    </>
  );
};

export default Uni_FindAndApplyCard;
// import React from "react";
// import "./Uni_FindAndApplyCard.css";
// const Uni_FindAndApplyCard = ({ name, data }) => {
//   return (
//     <>
//       <div className="Uni_FindAndApplyCard_wrap">
//         <div className="Uni_FindAndApplyCard_main">
//           <div className="Uni_FindAndApplyCard_top">

//           </div>
//           <div className="Uni_FindAndApplyCard_bottom">
//             <div className="UniFindAndApply_Main_wrap">
//               <h1>
//                 Find & apply to programs in the {name}
//               </h1>
//               <p className="ltc">
//                 Find programs you love that match your needs & aspirations, where
//                 you stand a high chance of acceptance.
//               </p>
//               <div className="UniFindAndApply_user-input-section">
//                 <div className="theUniFindAndApply_label">
//                   <p className="mtc UniFindAndApply_labelP">Subject</p>
//                   <input
//                     type="text"
//                     name=""
//                     id="subject"
//                     placeholder="Enter a subject"
//                     className="UniFindAndApply_inpbox-style"
//                   />
//                 </div>
//                 <div className="UniFindAndApplyBtnCover">
//                   <button name="" id="" className="UniFindAndApply_btn">
//                     Find Your Perfect Program{" "}
//                     {/* <BiRightArrowAlt className="UniFindAndApplyBtnIcon" size={25} /> */}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Uni_FindAndApplyCard;
