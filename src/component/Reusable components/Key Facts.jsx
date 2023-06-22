import React from "react";
import "./keyFact.css";
const KeyFacts = () => {
  const keyFactsData = [
    {
      title: "Australian Dollar $",
      details: "Currency",
      image:
        "https://images.studee.com/illustrations/illustration__badge--currency.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=132",
    },
    {
      title: "1 million",
      details: "Students",
      image:
        "https://images.studee.com/illustrations/illustration__badge--student-population.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=132",
    },
    {
      title: "English",
      details: "Language",
      image:
        "https://images.studee.com/illustrations/illustration__badge--language.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=132",
    },
    {
      title: "English",
      details: "Language",
      image:
        "https://images.studee.com/illustrations/illustration__badge--language.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=132",
    },
  ];
  return (
    <div className="keyFacts_wrap">
      <div className="keyFacts_main">
        <div className="keyFacts_main_heding">
          <h1>Key facts</h1>
        </div>
        <div className="keyFacts_box_wrap">
          {keyFactsData.map((data, index) => {
            return (
              <div className="keyFacts_box">
              <div className="keyFacts_box_imgWrap">
                <img src={data.image} />
              </div>
                <h1>{data.title}</h1>
                <h2>{data.details}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyFacts;
