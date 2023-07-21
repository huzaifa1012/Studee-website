import React from "react";
import "./keyFact.css";
import australlianDollar from "../../assets/KeyFacs Icon/australlian-dollar.png"
import studednts from "../../assets/KeyFacs Icon/student-population.png"
import englsihHello from "../../assets/KeyFacs Icon/english-language.png"
import universities from "../../assets/KeyFacs Icon/universities.png"
const KeyFacts = ({KeyFactsDatas}) => {
  const keyFactsData = [
    {
      title: "Australian Dollar $",
      details: "Currency",
      image:australlianDollar
    },
    {
      title: "1 million",
      details: "Students",
      image:studednts,
    },
    {
      title: "English",
      details: "Language",
      image:englsihHello
    },
    {
      title: "English",
      details: "Language",
      image:universities
     },
  ];
  return (
    <div className="keyFacts_wrap">
      <div className="keyFacts_main">
        <div className="keyFacts_main_heding">
          <h1>Key facts</h1>
        </div>
        <div className="keyFacts_box_wrap">
              <div className="keyFacts_box">
              <div className="keyFacts_box_imgWrap">
                <img src={australlianDollar} />
              </div>
                <h1>{KeyFactsDatas.currency}</h1>
                <h2>Currency</h2>
              </div>
              <div className="keyFacts_box">
              <div className="keyFacts_box_imgWrap">
                <img src={studednts} />
              </div>
                <h1>{KeyFactsDatas.studentPopulation}</h1>
                <h2>Students Population</h2>
              </div>
              <div className="keyFacts_box">
              <div className="keyFacts_box_imgWrap">
                <img src={universities} />
              </div>
                <h1>{KeyFactsDatas.universities}</h1>
                <h2>Universities</h2>
              </div>
              <div className="keyFacts_box">
              <div className="keyFacts_box_imgWrap">
                <img src={englsihHello} />
              </div>
                <h1>{KeyFactsDatas.languages}</h1>
                <h2>Languagesy</h2>
              </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFacts;
