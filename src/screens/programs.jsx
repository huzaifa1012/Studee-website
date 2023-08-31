import React, { useEffect, useState } from "react";
import SecondHero from "../component/university component/secondHero";
import ProgramCard from "../component/programs components/ProgramCard.jsx";
import Whystudee from "../component/home component/whystudee";
import axios from "axios";
import "../app.css";
import { AiOutlineClose } from "react-icons/ai";
import { FcEmptyFilter } from "react-icons/fc";

import { BsFilterRight } from "react-icons/bs";
import VerticalTabs from "../component/Reusable components/modalContent";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addCheckboxData } from "../store/checkboxDataSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { selectActiveLink } from "../store/navlinkSLicer";
import { animateScroll } from "react-scroll";

const Programs = () => {


  const [userParamters, setUserParamters] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [paramtersCount, setParamtersCount] = useState();
  const [existingValues, setExistingValues] = useState([]);
  const countryValue = localStorage.getItem("country");
  const campusValue = localStorage.getItem("campus");
  const cityValue = localStorage.getItem("city");
  const universityValue = localStorage.getItem("universityName");
  const subjectValue = localStorage.getItem("subject");
  const degreeValue = localStorage.getItem("degree");
  const [loading, setLoading] = useState([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  const checkboxData = useSelector((state) => state.checkboxData.checkboxData);
  const id = useSelector((state) => state.userId);

  const [locationData, setLocationData] = useState([]);
  const [location, setLocation] = useState();

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var updatedExistingValues;
  const handleDeleteSearch = (index, name, field) => {
    if (id) {
      setLoading(true);
      axios
        .patch(
          `https://studyapi.ieodkv.com/students/${id}/search-params/${index
          }`
        )
        .then((response) => {
          setUserParamters(response.data.searchParameters);
          fetchPrograms();

          // window.location.reload();
          setLoading(false);
          fetchPrograms();
          fetchStudentData();
        })
        .catch((error) => console.log(error));
    } else {
      // Remove the item by field from existingValues array

      updatedExistingValues = existingValues.filter((value, i) => i !== index);

      localStorage.removeItem(`${field}`, name);
      setExistingValues(updatedExistingValues);
      setExistingValues(updatedExistingValues);
      fetchPrograms();

      window.location.reload();


    }
  };

  useEffect(() => {
    fetchData();
    fetchPrograms();
    fetchStudentData();
    animateScroll.scrollToTop();

  }, [
    id,
    setUserParamters,
    setParamtersCount,
    setExistingValues,
    updatedExistingValues,
    location,
    locationData,
  ]);

  useEffect(() => {
    fetchPrograms();
    fetchStudentData();
  }, [
    programs.length,
    id,
    updatedExistingValues,
    location,
    loading,
    locationData,
  ]);

  function fetchPrograms() {
    if (id) {
      axios
        .post(`https://studyapi.ieodkv.com/search/programs`, {
          account: true,
          accountId: id,
        })
        .then((response) => {
          setPrograms(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(`https://studyapi.ieodkv.com/search/programs`, {
          account: false,
          accountId: id,
          Searchparameters: existingValues,
        })
        .then((response) => {
          setPrograms(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  function fetchStudentData() {
    if (id) {
      axios
        .get(`https://studyapi.ieodkv.com/students/${id}`)
        .then((response) => {
          if (typeof response.data.annualBudget !== "undefined") {
            setUserParamters([
              { name: response.data.annualBudget, field: "annualBudget" },
              ...response.data.searchParameters,
            ]);
            setParamtersCount(response.data.searchParameters.length + 1);
          } else {
            setUserParamters([...response.data.searchParameters]);
            setParamtersCount(response.data.searchParameters.length);
          }
        })
        .catch((error) => console.log(error));
    } else {
      const updatedExistingValues = [];

      if (countryValue !== "null" && countryValue !== null) {
        updatedExistingValues.push({
          name: countryValue,
          field: "country",
        });
      }

      if (campusValue !== "null" && campusValue !== null) {
        updatedExistingValues.push({
          name: campusValue,
          field: "campus",
        });
      }
      if (cityValue !== "null" && cityValue !== null) {
        updatedExistingValues.push({
          name: cityValue,
          field: "city",
        });
      }

      if (universityValue !== "null" && universityValue !== null) {
        updatedExistingValues.push({
          name: universityValue,
          field: "universityName",
        });
      }

      if (subjectValue !== "null" && subjectValue !== null) {
        updatedExistingValues.push({
          name: subjectValue,
          field: "subject",
        });
      }
      if (degreeValue !== "null" && degreeValue !== null) {
        updatedExistingValues.push({
          name: degreeValue,
          field: "degree",
        });
      }

      setExistingValues(updatedExistingValues);
    }
  }

  const fetchData = async () => {
    if (id) {
      try {
        const response = await axios.get(
          `https://studyapi.ieodkv.com/students/${id}`
        );
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.warn("Id Not Found");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  // start for location change
  const dispatch = useDispatch();

  const handleSaveFilters = async (forSave) => {
    if (!id) {
      console.log("ID does not exist");
      console.log("phir bhi", forSave);
      const data = [forSave];
      try {
        data.map((data, index) => {
          localStorage.setItem(data.field, data.name);
          fetchPrograms();
        });
      } catch (error) { }
      fetchPrograms();
      window.location.reload();
      return;
    }
    try {
      setLoading(true);
      console.log(forSave);
      const response = await axios.put(
        `https://studyapi.ieodkv.com/students/${id}`,
        { searchParameters: [forSave] }
      );
      console.log("Response", response.data);
      fetchPrograms();
      fetchPrograms();
      setLoading(false);
    } catch (error) {
      console.log("Failed to update", error);
    }
  };
  useEffect(() => {
    axios
      .get(`https://studyapi.ieodkv.com/popular/locations`)
      .then((response) => {
        setLocationData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleCountryChange = (e) => {
    if (id) {
      setLocation(e.target.value);
      const locationFilter = locationData.filter(
        (row) => row.name === e.target.value
      );
      const forSave = {
        field: locationFilter[0].for,
        name: e.target.value,
      };
      handleSaveFilters(forSave);
    } else {
      setLocation(e.target.value);
      const locationFilter = locationData.filter(
        (row) => row.name === e.target.value
      );
      const forSave = {
        field: locationFilter[0].for,
        name: e.target.value,
      };
      handleSaveFilters(forSave);
    }
  };


  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            <Box sx={style} className="modalSizingMineCustom">
              <VerticalTabs />
            </Box>

            <div className="filt_modal_bot">
              <button className="filt_modal_bot_1">Cancel</button>
              <button className="filt_modal_bot_2">Apply</button>
            </div>
          </>
        </Modal>
      </div>

      {loading ? (
        <>
          <div
            style={{ minHeight: "100vh", position: 'absolute', top: '0', }}
            className="my-custom-spinner-wrap"
          >
            <div
              className="my-custom-spinner  inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        </>
      ) : (
        <div>
          <>

            <SecondHero />
            <div
              className="filters_ultra_wrap"
              style={{ background: "#f4f5f7" }}
            >
              <div className="Filters_sectioan_wrap">
                <div className="Filters_sectioan_main">
                  <h2>{paramtersCount} Applied Filter :</h2>
                  {id
                    ? userParamters.map((row, index) => {
                      return (
                        <div key={index} className="eachFilterBoxWrap">
                          <span className="Filter-text">{row.name}</span>

                          {/* {row.field !== "annualBudget" ? ( */}
                          {row.field !== "annualBudget" ? (
                            // {true ? (
                            <AiOutlineClose
                              onClick={() =>
                                handleDeleteSearch(index, row.name, row.field)
                              }
                              style={{ cursor: "pointer" }}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })
                    : existingValues.map((row, index) => {
                      return (
                        <div key={index} className="eachFilterBoxWrap">
                          <p style={{ margin: "15px" }}>{row.name}</p>
                          <AiOutlineClose
                            onClick={() =>
                              handleDeleteSearch(index, row.name, row.field)
                            }
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="Filters_sectioan_wrap">
                <div className="Filters_sectioan_main2">
                  <div className="Filters_sectioan_main2_left">
                    <button
                      className="Filters_sectioan_main2_btn focus:outline-blue-500"
                      // onClick={() => handleOpen(true)}

                      onClick={() => (navigate('/personalized-matches'))}
                    >
                      <BsFilterRight size={28} />Filter
                    </button>
                  </div>
                  <div className="Filters_sectioan_main2_right">
                    <select
                      id="country"
                      value={location}
                      onChange={handleCountryChange}
                      className="Filters_sectioan_main2_btn"
                    >
                      <option value="">Sort by country, city..</option>
                      {locationData.map((country) => (
                        <option
                          key={country.code}
                          style={{ paddingBottom: "4px" }}
                          value={country.name}
                        >
                          {country.name.length > 20
                            ? country.name.slice(0, 20)
                            : country.name}
                          &nbsp; &nbsp; &nbsp;
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {programs.length > 0 ? (
              <ProgramCard data={programs} />
            ) : (
              <>
                <div
                  style={{
                    width: "100%",
                    height: "50vh",
                    background: "rgb(244, 245, 247)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "70%",
                    }}
                  >
                    <FcEmptyFilter size={80} />
                    <p style={{ fontSize: "20px" }}>No program matched</p>
                  </div>
                </div>
              </>
            )}
          </>
        </div>
      )}
      <Whystudee />
    </>
  );
};
export default Programs;
