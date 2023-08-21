import React, { useState } from "react";
import "./unicards.css";
import Whystudee from "../home component/whystudee";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ViewProgMod from "../Reusable components/program_Modal";
const Unicards = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUni, setSelectedUni] = useState("");
  const [selectedUniData, setSelectedUniData] = useState("");
  const navigate = useNavigate();
  const handlenavigation = (country, city, university) => {
    navigate(`/${country}/${city}/${university}`);
    console.log(country, city, university);
  };

  const showModal = (uniName) => {
    setIsModalOpen(true);
    console.log(uniName);
    setSelectedUni(uniName);
    setSelectedUniData(uniName);
    console.log(selectedUni);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="uni_cards_main_wrap">
        <div className="uni_cards_main">
          <div className="university_card_body">
            {data &&
              data.map((item, index) => {
                return (
                  <>
                    <div className="university_card_card">
                      <div
                        onClick={() =>
                          handlenavigation(
                            item.country.urlName,
                            item.city.urlName,
                            item.urlName
                          )
                        }
                      >
                        <img
                          src={`https://studyapi.ieodkv.com/universities/images/${item.banner}`}
                          alt=""
                        />
                      </div>
                      <div className="university_card_card_bottom">
                        <div
                          onClick={() =>
                            handlenavigation(
                              item.country.urlName,
                              item.city.urlName,
                              item.urlName
                            )
                          }
                        >
                          <h2>{item.universityName}</h2>
                          <p className="ltc uni_country_city-p">
                            <b>{item.city.name},</b> {item.country.name}
                          </p>
                        </div>
                        <div className="uni_bottom_square_wrap">
                          <div className="uni_bottom_square_box">
                            <p className="ltc">Type</p>
                            <b> {item.type} </b>
                          </div>
                          <div className="uni_bottom_square_box">
                            <p className="ltc">Students</p>
                            <b> {item.internationalStudents} </b>
                          </div>
                          <div className="uni_bottom_square_box">
                            <p className="ltc">Nationalities</p>
                            <b> {item.nationalities} </b>
                          </div>
                          <div className="uni_bottom_square_box">
                            <p className="ltc">Total programs</p>
                            <b>140</b>
                          </div>
                        </div>
                        <div className="unicard_btn_wrap">
                          <button
                            className="unicard_btn_orange"
                            onClick={() => {
                              showModal(item.universityName);
                              setSelectedUniData(item)
                            }}
                          >
                            Start an application
                          </button>
                          <button
                            className="unicard_btn"
                            onClick={() =>
                              handlenavigation(
                                item.country.urlName,
                                item.city.urlName,
                                item.urlName
                              )
                            }
                          >
                            View university details
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Whystudee />
      <ViewProgMod
        uniModal={true}
        universityTitle={`Start your application to ${selectedUni}`}
        dataToAddProgram={selectedUniData}
        university={true}
        paramsFeild="universityName"
        programQuery={selectedUni}
        isModalOpen={isModalOpen}
        onClose={handleCancel}
      />
    </>
  );
};
export default Unicards;

// Here i have readymade code with mapping on data
// will use it when i will connct the Apis
// import React from "react";
// import "./unicards.css";

// const cardData = [
//   {
//     imageSrc:
//       "https://images.studee.com/images/university/university__modul-university-vienna.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272",
//     title: "Webster Vienna Private University",
//     location: "Wels, Austria",
//     type: "Private",
//     students: 3000,
//     nationalities: 42,
//     totalPrograms: 140,
//   },
//   {
//     imageSrc:
//       "https://images.studee.com/images/university/university__university-of-applied-sciences-upper-austria.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272",
//     title: "Artevelde University of Applied Sciences",
//     location: "Korea, Surinas",
//     type: "Private",
//     students: 3000,
//     nationalities: 42,
//     totalPrograms: 140,
//   },
//   // Add more objects for additional cards
// ];

// const Unicards = () => {
//   return (
//     <>
//       <div className="uni_cards_main_wrap">
//         <div className="uni_cards_main">
//           <div className="university_card_body">
//             {cardData.map((card, index) => (
//               <div className="university_card_card" key={index}>
//                 <img src={card.imageSrc} alt="" />
//                 <div className="university_card_card_bottom">
//                   <h2>{card.title}</h2>
//                   <p className="ltc uni_country_city-p">
//                     <b>{card.location}</b>
//                   </p>
//                   <div className="uni_bottom_square_wrap">
//                     <div className="uni_bottom_square_box">
//                       <p>Type</p>
//                       <b>{card.type}</b>
//                     </div>
//                     <div className="uni_bottom_square_box">
//                       <p>Students</p>
//                       <b>{card.students}</b>
//                     </div>
//                     <div className="uni_bottom_square_box">
//                       <p>Nationalities</p>
//                       <b>{card.nationalities}</b>
//                     </div>
//                     <div className="uni_bottom_square_box">
//                       <p>Total programs</p>
//                       <b>{card.totalPrograms}</b>
//                     </div>
//                   </div>
//                   <div className="unicard_btn_wrap">
//                     <button className="unicard_btn_orange">
//                       How study can help
//                     </button>
//                     <button className="unicard_btn">
//                       How study can help
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Unicards;
