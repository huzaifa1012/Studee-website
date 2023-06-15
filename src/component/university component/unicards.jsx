import React from "react";
import "./unicards.css";
import Whystudee from "../home component/whystudee"
import { Link } from "react-router-dom";
const Unicards = () => {
  return (
    <>
      <div className="uni_cards_main_wrap">
        <div className="uni_cards_main">
          <div className="university_card_body">

            <div className="university_card_card">
          <Link to={{ pathname: "/selected-universities", state: {} }}>
              <img
                src="https://images.studee.com/images/university/university__modul-university-vienna.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>Webster Vienna Private University</h2>
                <p className="ltc uni_country_city-p">
                  <b>Wels</b>, Austria
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p className="ltc">Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p className="ltc">Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p className="ltc">Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p className="ltc">Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
          </Link>
            </div>

            <div className="university_card_card">
              <img
                src="https://images.studee.com/images/university/university__university-of-applied-sciences-upper-austria.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>Artevelde University of Applied Sciences</h2>
                <p className="ltc uni_country_city-p">
                  <b>Korea</b>, Surinas
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p>Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
            </div>
            <div className="university_card_card">
              <img
                src="https://images.studee.com/images/university/university__artevelde-university-of-applied-sciences.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>Howest University of Applied Sciences</h2>
                <p className="ltc uni_country_city-p">
                  <b>France </b>, kelinas
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p>Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
            </div>
            <div className="university_card_card">
              <img
                src="https://images.studee.com/images/university/university__university-of-antwerp.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>Thomas More University of Applied Sciences</h2>
                <p className="ltc uni_country_city-p">
                  <b>Wels</b>, Austria
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p>Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
            </div>
            <div className="university_card_card">
              <img
                src="https://images.studee.com/images/university/university__alexander-college.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>Alliant International University</h2>
                <p className="ltc uni_country_city-p">
                  <b>UAE</b>, Abu dhabi
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p>Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
            </div>
            <div className="university_card_card">
              <img
                src="https://images.studee.com/images/university/university__alma-college.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>Alma College Institute of TAFE</h2>
                <p className="ltc uni_country_city-p">
                  <b>Wels</b>, Austria
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p>Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
            </div>
            <div className="university_card_card">
              <img
                src="https://images.studee.com/images/university/university__alvernia-university.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>Alvina Gordon Academy of TAFE</h2>
                <p className="ltc uni_country_city-p">
                  <b>UK</b>, Niostra
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p>Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
            </div>
            <div className="university_card_card">
              <img
                src="https://images.studee.com/images/university/university__arts-university-plymouth.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>Artevelde University of Applied Sciences</h2>
                <p className="ltc uni_country_city-p">
                  <b>UK</b>, Niostra
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p>Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
            </div>
            <div className="university_card_card">
              <img
                src="https://images.studee.com/images/university/university__american-university.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=816&h=272"
                alt=""
              />
              <div className="university_card_card_bottom">
                <h2>American University of Applied Sciences Institute</h2>
                <p className="ltc uni_country_city-p">
                  <b>UK</b>, Niostra
                </p>
                <div className="uni_bottom_square_wrap">
                  <div className="uni_bottom_square_box">
                    <p>Type</p>
                    <b> Private </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Students</p>
                    <b> 3000 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Nationalities</p>
                    <b> 42 </b>
                  </div>
                  <div className="uni_bottom_square_box">
                    <p>Total programs</p>
                    <b>140</b>
                  </div>
                </div>
                <div className="unicard_btn_wrap">
                  <button className="unicard_btn_orange">
                    How study can help
                  </button>
                  <button className="unicard_btn">How study can help</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whystudee />
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
