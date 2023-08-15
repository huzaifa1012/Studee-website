import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Uni_by_id = ({ id, name, allDetails }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log(allDetails);
  useEffect(() => {
    fetchCampuses();
  }, [id]); // Fetch data whenever the 'id' prop changes

  const fetchCampuses = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://studyapi.ieodkv.com/cities/university/${id}`
      );
      setData(response.data);
      console.log("response from uni by ID", response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch data for specific university by ID.");
      setLoading(false);
    }
  };
  const handleUniClick = (uni) => {
    navigate(`/${uni.country.urlName}/${uni.city.urlName}/${uni.urlName}`);
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
          <h1 className="mtc">Universities In {name}</h1>
          {allDetails.uniDescription && (
            <div
              className="browseByCountry_desc"
              dangerouslySetInnerHTML={{ __html: allDetails.uniDescription }}
            ></div>
          )}
        </div>
        <div className="browseByCountry_body">
          {data?.map((row, index) => (
            <div
              onClick={() => handleUniClick(row)}
              className="browseByCountry_card"
              key={index}
              style={{
                backgroundImage: `url(https://studyapi.ieodkv.com/universities/images/${row.banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                blendAlpha: 80,
              }}
            >
              <h2>{row.universityName}</h2>
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

export default Uni_by_id;
