import React, { useEffect, useState } from "react";
import SecondHero from "../component/university component/secondHero";
import ProgramCard from "../component/programs components/ProgramCard.jsx";
import Whystudee from "../component/home component/whystudee";
import axios from "axios";
import "../app.css";
import { AiOutlineClose } from "react-icons/ai";

import { CircularProgress, Modal } from "@mui/material";
import { BsFilterRight } from "react-icons/bs";
import VerticalTabs from "../component/Reusable components/modalContent";
const Programs = () => {
  // const [programs, setPrograms] = useState("");

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

  const id = localStorage.getItem("id");

  const countries = [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "UK", name: "United kingdom" },
  ];
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
    localStorage.setItem("country", selectedValue);
    console.log(selectedValue);
    window.location.reload();
  };

  var updatedExistingValues;
  const handleDeleteSearch = (index, name, field) => {
    if (id) {
      setLoading(true);
      axios
        .patch(
          `https://studyapi.ieodkv.com/students/${id}/search-params/${
            index - 1
          }`
        )
        .then((response) => {
          setUserParamters(response.data.searchParameters);
          fetchPrograms();

          // window.location.reload();
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      // Remove the item by field from existingValues array

      updatedExistingValues = existingValues.filter((value, i) => i !== index);

      localStorage.removeItem(`${field}`, name);
      setExistingValues(updatedExistingValues);
      fetchPrograms();

      //
      window.location.reload();
      // localStorage.removeItem(`${field}`, name);
      // setExistingValues(updatedExistingValues);
      // }
      // };
    }
  };

  useEffect(() => {
    fetchPrograms();
    fetchStudentData();
  }, [
    id,
    setUserParamters,
    setParamtersCount,
    setExistingValues,
    updatedExistingValues,
  ]);

  useEffect(() => {
    fetchPrograms();
    fetchStudentData();
  }, [programs.length, id, updatedExistingValues]);
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
  // Mine custom fetch
  // useEffect(() => {
  //   fetchAllPrograms();
  // }, []);
  // const fetchAllPrograms = async () => {
  //   try {
  //     const response = await axios.post(
  //       `https://studyapi.ieodkv.com/search/programs`,
  //       {
  //         account: false,
  //         accountId: "",
  //         Searchparameters: [],
  //       }
  //     );
  //     setPrograms(response.data);
  //     console.log("All Programs", response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.error("Error fetching from ALL UNIS:", error);
  //   }
  // };

  return (
    <>
      <div className="Program_card_wrap">
        <Modal
          // className="Program_card_wrap_mainModal"
          title="Apply Filters To Find Best Program"
          centered
          open={modal2Open}
          okButtonProps={{
            style: {
              backgroundColor: "var(--primary-color)",
              padding: "0px 40px 0px 40px",
              fontSize: "20px",
              height: "50px",
            },
          }}
          cancelButtonProps={{
            style: {
              padding: "0px 30px 0px 30px",
              fontSize: "20px",
              height: "50px",
            },
          }}
          okText={"Apply"}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <div className="filter_modal_wrap">
            <div className="filter_modal_main">
              <div className="filter_modal_main_title">
                <VerticalTabs />
              </div>
            </div>
          </div>
        </Modal>
      </div>

      {loading ? (
        <>
          <div
            style={{ minHeight: "100vh" }}
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

                            {row.field !== "annualBudget" ? (
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
                          <div
                            key={index}
                            style={{
                              margin: "0px 10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              backgroundColor: "#EEEAE9",
                              padding: "0px 20px",
                            }}
                          >
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
                      onClick={() => setModal2Open(true)}
                    >
                      <BsFilterRight size={28} /> Filter
                    </button>
                  </div>
                  <div className="Filters_sectioan_main2_right">
                    <select
                      id="country"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className="Filters_sectioan_main2_btn"
                    >
                      <option value="">Sort by country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
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
                <p>No program matched</p>
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
