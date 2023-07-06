import React from "react";
import "./studyingAbroad.css";
import { Link } from "react-router-dom";
const StudyingAbroad = () => {
  return (
    <>
      <div className="studying_abroad_wrap">
        <div className="studying_abroad_main">
          <div className="studying_abroad_head">
            <h1 className="mtc">Studying abroad</h1>
          </div>
          <div className="studying_abroad_body">
            <div className="studying_abroad_card">
              <img
                src="https://images.studee.com/images/guide/guides__the-benefits-of-studying-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="studying_abroad_card_bottom">
                <h2>The benefits of studying abroad</h2>
                <p className="ltc">
                  Read the reasons why so many students study abroad
                </p>
              </div>
            </div>
            <div className="studying_abroad_card">
              <img
                src="https://images.studee.com/images/guide/guides__choose-where-to-study-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="studying_abroad_card_bottom">
                <h2>The benefits of studying abroad</h2>
                <p className="ltc">
                  Read the reasons why so many students study abroad
                </p>
              </div>
            </div>
            <div className="studying_abroad_card">
              <img
                src="https://images.studee.com/images/guide/guides__how-to-study-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="studying_abroad_card_bottom">
                <h2>The benefits of studying abroad</h2>
                <p className="ltc">
                  Read the reasons why so many students study abroad
                </p>
              </div>
            </div>
          </div>
          
            <Link to="/guide" className="studying_abroad_bottom">
            <p>See all guides</p>
            </Link>
          
          </div>
      </div>
    </>
  );
};

export default StudyingAbroad;
