import React from "react";
import "./boxesAndData.css";
import { Link } from "react-router-dom";

const BoxesAndData = ({ heading, heading2, body, countries}) => {
  return (
    <div className="boxesAndData_wrap">
      <div className="boxesAndData_main">
        <div className="boxesAndData_head">
          <h1 className="mtc">{heading}</h1>

          <p>{body}</p>
        </div>
        <div className="boxesAndData_body">
          {countries.map((country, index) => (
            <Link to={`/selected-country?Cname=${encodeURIComponent(country.name)}&backgroundImage=${encodeURIComponent(country.image)}`}
              className="boxesAndData_card"
              key={index}
              style={{
                backgroundImage: `url(${country.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                blendAlpha: 80,
              }}
            >
              <h2>{country.name}</h2>
            </Link>
          ))}
        </div>
        <br/>

            </div>
    </div>
  );
};

export default BoxesAndData;
