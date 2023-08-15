import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Campuses = ({ id, logoImage }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCampuses();
  }, [id]); // Fetch data whenever the 'id' prop changes

  const fetchCampuses = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://studyapi.ieodkv.com/campus/${id}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch data from the API.");
      setLoading(false);
    }
  };

  const handleNavigation = (selectedCampus) => {
    console.log("selectedCampus", selectedCampus);
    navigate(
      `/${selectedCampus.country.urlName}/${selectedCampus.city.urlName}/${selectedCampus.university.urlName}/${selectedCampus.urlName}`
    );
  };
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  return (
    <div className="browseByCountry_wrap">
      <div className="browseByCountry_main">
        <div className="browseByCountry_head">
          <h1 className="mtc">Campuses</h1>
        </div>
        <div className="browseByCountry_body">
          {data?.map((row, index) => (
            <div
              onClick={() => handleNavigation(row)}
              className="browseByCountry_card"
              key={index}
              style={{
                backgroundImage: `url(https://studyapi.ieodkv.com/universities/images/${logoImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                blendAlpha: 80,
              }}
            >
              <h2>{row.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="country-view-home">
    //   {data.map((row, index) => {
    //     return (

    //       </Link>
    //     );
    //   })}
    // </div>
  );
};

export default Campuses;
