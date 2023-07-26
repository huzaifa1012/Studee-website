import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CitiesAndUniForSelectedCountry = ({ heading, heading2, body, countryId }) => {

  const [cities, setCities] = useState([])
  const [universities, setUniversities] = useState([])


  useEffect(() => {
    fetchCitiesCountry()
    fetchUniofThesCountry()
  }, [countryId])

  const fetchCitiesCountry = async () => {
    try {
      const response = await axios.get(
        `https://ieodkvapi-548f8ac2251a.herokuapp.com/cities/${countryId}`
      );
      setCities(response.data);
    } catch (error) {
      console.error(
        "Error fetching cities for selected country:",
        error
      );
    }
  };

  const fetchUniofThesCountry = async () => {
    try {
      const response = await axios.get(
        `https://ieodkvapi-548f8ac2251a.herokuapp.com/countries/university/${countryId}`
      );
      setUniversities(response.data);
      console.log("Universities", response.data);
    } catch (error) {
      console.error(
        "Error fetching cities for selected country:",
        error
      );
    }
  };

  return (
    <div className="boxesAndData_wrap">
      <div className="boxesAndData_main">
        <div className="boxesAndData_head">
          <h1 className="mtc">{heading}</h1>

          <p>{body}</p>
        </div>
        <div className="boxesAndData_body">
          {cities.map((city, index) => (
            <div
              className="boxesAndData_card"
              key={index}
              style={{
                backgroundImage: `url(https://ieodkvapi-548f8ac2251a.herokuapp.com/cities/images/${city.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                blendAlpha: 80,
              }}
            >
              <h2>{city.name}</h2>
            </div>
          ))}
        </div>
        <br />
        {heading2 &&
          <div className="boxesAndData_head">
            <h1 className="mtc">{heading2}</h1>
            <div className="boxesAndData_body">

              {universities.map((uni, index) => (

                <div
                  className="boxesAndData_card"
                  key={index}
                  style={{
                    backgroundImage: `url(https://ieodkvapi-548f8ac2251a.herokuapp.com/universities/images/${uni.banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply",
                    blendAlpha: 80,
                  }}
                >
                  <h2>{uni.universityName}</h2>
                </div>
              ))}
            </div>
          </div>
        }



      </div>
    </div>
  );
};

export default CitiesAndUniForSelectedCountry;
