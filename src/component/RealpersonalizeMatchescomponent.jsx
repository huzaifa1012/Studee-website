import React, { useState } from "react";
import "./personilzeMatchesCompo.css";
import "./personilzeMatchesCompoOptRuff.css";
import { GrFormClose } from "react-icons/gr";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCheckboxData } from "../store/checkboxDataSlice";

const dummyData = [
  "Apple",
  "Banana",
  "Cherry",
  "Durian",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Ivy gourd",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papayas",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli fruit",
  "Vanilla",
  "Watermelon",
  "Xigua",
  "Yellow passionfruit",
  "Zucchini",
];
const dummySubject = [
  "Commerce",
  "Computer Science",
  "Engineering",
  "Medical",
  "Artsy",
  "Business",
  "Communication",
];
const dummyCountries = [
  "China",
  "India",
  "United States",
  "Indonesia",
  "Pakistan",
  "Brazil",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Ethiopia",
  "Philippines",
  "Egypt",
  "Vietnam",
  "DR Congo",
  "Turkey",
  "Iran",
  "Germany",
  "Thailand",
  "United Kingdom",
  "France",
  "Italy",
  "Tanzania",
  "South Africa",
  "Myanmar",
  "Kenya",
  "South Korea",
  "Colombia",
  "Spain",
  "Uganda",
  "Argentina",
  "Algeria",
  "Sudan",
  "Ukraine",
  "Iraq",
  "Afghanistan",
  "Poland",
  "Canada",
  "Morocco",
  "Saudi Arabia",
  "Uzbekistan",
  "Peru",
  "Angola",
  "Malaysia",
  "Mozambique",
  "Ghana",
  "Yemen",
  "Nepal",
  "Venezuela",
  "Madagascar",
];

const handleSearchTextChange = (e) => {
  setSearchText(e.target.value);
};

const handleTagClick = (tag) => {
  setSelectedTags((prevTags) => [...prevTags, tag]);
};
const StepContent01 = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredTag, setHoveredTag] = useState(null);

  const [progTypes, setProgTypes] = useState("");
  const [postGr, setPostGr] = useState("");
  const [underGr, setUnderGr] = useState("");

  const id = useSelector((state) => state.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    ProgramTypes();
  }, []);

  const ProgramTypes = async () => {
    try {
      const response = await axios.get(
        "https://studyapi.ieodkv.com/programTypes"
      );
      setProgTypes(response.data);

      const postgraduateData = response.data.filter(
        (entry) => entry.graduate === "Postgraduate"
      );
      const undergraduateData = response.data.filter(
        (entry) => entry.graduate === "Undergraduate"
      );
      setUnderGr(undergraduateData);
      setPostGr(postgraduateData);
      console.log("/progTypes", response.data);
    } catch (error) {
      console.error("Error in Browse Countries:", error);
    }
  };

  const handleCheckboxClick = async (event, data) => {
    if (event.target.checked) {
      const updateData = {
        field: "programType",
        name: data ? data.name : "",
      };

      try {
        // Dispatch the checkbox data to the Redux store

        console.log("desipi", updateData);
        dispatch(addCheckboxData(updateData));

        // ... your existing code
      } catch (error) {
        console.log("Failed to update", error);
      }
    }
  };

  // const handleCheckboxClick = async (event, data) => {

  //   if (!id) {
  //     console.log("ID does not exist");
  //     return;
  //   }

  //   if (event.target.checked) {
  //     const updateData = {
  //       field: "programType",
  //       name: data ? data.name : "",
  //     };

  //     console.log("UpdateData", [updateData]);

  //     try {
  //       const response = await axios.put(
  //         `https://studyapi.ieodkv.com/students/${id}`,
  //         { searchParameters: [updateData] }
  //       );
  //       console.log("Response", response.data);
  //     } catch (error) {
  //       console.log("Failed to update", error);
  //     }
  //   }
  // };

  return (
    <>
      <div className="StepContent01_wrap">
        <div className="StepContent01_Main">
          <div className="StepContent01_head">
            <h1>What type of program do you want to study?</h1>
          </div>
          <div className="StepContent01_body_wrap">
            <div className="StepContent01_body">
              <div className="StepContent_Body_data ">
                <br />
                <br />

                <span className="personalizeM_form__legend">Undergraduate</span>
                <div className="modal_data_body">
                  {postGr &&
                    postGr.map((data, index) => {
                      // console.log(data);
                      return (
                        <label key={index}>
                          <div className="personalizeM_modal_checkBox_wrap">
                            <div className="personalizeM_modal_checkBox_body">
                              <input
                                type="checkbox"
                                name="undergraduate"
                                value={data.name}
                                className="modal_checkBox_inp"
                                onChange={(e) => handleCheckboxClick(e, data)}
                              />{" "}
                              <span className="m-checkbox-text">
                                {data.name}
                              </span>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                </div>

                <span className="form__legend">Postgraduate</span>
                <div className="modal_data_body">
                  {postGr &&
                    postGr.map((data, index) => {
                      // console.log(data);
                      return (
                        <label>
                          <div class="personalizeM_modal_checkBox_wrap">
                            <div class="personalizeM_modal_checkBox_body">
                              <input
                                type="checkbox"
                                name="undergraduate"
                                value={data.name}
                                className="modal_checkBox_inp"
                                onChange={(e) => handleCheckboxClick(e, data)}
                              />{" "}
                              <span className="m-checkbox-text ">
                                {data.name}
                              </span>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StepContent02 = () => {
  const [locationData, setLocationData] = useState([]);
  const [location, setLocation] = useState();
  const [subjectData, setSubjectData] = useState([]);
  const [subject, setSubject] = useState();
  const [locationFor, setLocationFor] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://studyapi.ieodkv.com/popular/locations`)
      .then((response) => {
        setLocationData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get(`https://studyapi.ieodkv.com/popular/subjects`)
      .then((response) => {
        setSubjectData(response.data);
        console.log("subject Data", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="StepContent01_wrap">
      <div className="StepContent01_Main">
        <div className="StepContent01_head">
          <h1>Select country where you want to study?</h1>
        </div>
        <div className="StepContent01_body_wrap">
          <div className="StepContent01_body">
            <div className="StepContent_Body_data "></div>
            <div style={{ position: "relative", margin: "0px 15px " }}>
              <div className="theHero_label" style={{ height: "90px" }}>
                {" "}
                <p className="mtc hero_labelP"> Location</p>
                <select
                  className="hero_inpbox-style-personolized-matches"
                  placeholder="Enter a country, campus or university"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    const locationFilter = locationData.filter(
                      (row) => row.name === e.target.value
                    );
                    console.log(e.target.value);
                    dispatch(
                      addCheckboxData({
                        field: locationFilter[0].for,
                        name: e.target.value,
                      })
                    );
                  }}
                >
                  <option value="">
                    Choose country, city or university &nbsp;&nbsp; &nbsp;
                  </option>
                  {locationData.map((row) => (
                    <option
                      className="main_hero_option_box"
                      value={row.name}
                      style={{ fontSize: 18 }}
                    >
                      {row.showName.slice(0, 30)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Ends  */}
              {/* Subject Starts  */}

              <div className="theHero_label" style={{ height: "90px" }}>
                {" "}
                <p className="mtc hero_labelP"> Subject</p>
                <select
                  className="hero_inpbox-style-personolized-matches"
                  placeholder="Enter a country, campus or university"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    const subjectFilter = subjectData.filter(
                      (row) => row.name === e.target.value
                    );
                    dispatch(
                      addCheckboxData({
                        field: subjectFilter[0].for,
                        name: e.target.value,
                      })
                    );
                  }}
                >
                  <option value="">
                    Select Your Subject &nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </option>
                  {subjectData.map((row) => (
                    <option
                      className="main_hero_option_box"
                      value={row.name}
                      style={{ fontSize: 18 }}
                    >
                      {row.showName.slice(0, 30)}
                    </option>
                  ))}
                </select>
              </div>

              <h4 className="mt-7 ">
                Selected Country : <b>{location}</b>
              </h4>
              <h4 className="mt-4 ">
                Selected Subject : <b>{subject}</b>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

const StepContent03 = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="StepContent01_wrap">
        <div className="StepContent01_Main">
          <div className="StepContent01_head">
            <h1>How do you want your program to be delivered?</h1>
          </div>
          <div className="StepContent01_body_wrap">
            <div className="StepContent01_body">
              <div className="StepContent_Body_data ">
                <div className="modal_data_body">
                  <span className="personalizeM_form__legend">
                    Delivery Method
                  </span>

                  <label>
                    <div class="personalizeM_modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          value={"On campus"}
                          name="undergraduate"
                          className="modal_checkBox_inp"
                          onChange={(e) => {
                            console.log(e.target.value);

                            dispatch(
                              addCheckboxData({
                                field: "deliveryMethod",
                                name: e.target.value,
                              })
                            );
                          }}
                        />{" "}
                        <span className="m-checkbox-text ">On campus</span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div className="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          value={"Online"}
                          className="modal_checkBox_inp"
                          onChange={(e) => {
                            console.log(e.target.value);

                            dispatch(
                              addCheckboxData({
                                field: "deliveryMethod",
                                name: e.target.value,
                              })
                            );
                          }}
                        />{" "}
                        <span className="m-checkbox-text">Online</span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div className="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="modal_checkBox_inp"
                          value={"Blended Learning"}
                          onChange={(e) => {
                            console.log(e.target.value);

                            dispatch(
                              addCheckboxData({
                                field: "deliveryMethod",
                                name: e.target.value,
                              })
                            );
                          }}
                        />{" "}
                        <span className="m-checkbox-text">
                          Blended Learning
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StepContent04 = () => {
  const [budget, setBudget] = useState("");
  return (
    <>
      <div className="StepContent01_wrap">
        <div className="StepContent01_Main">
          <div className="StepContent01_head">
            <h1>What is your budget, Enter budget for your annual fee.</h1>
          </div>
          <div className="StepContent01_body_wrap">
            <div className="StepContent01_body">
              <div className="StepContent_Body_data ">
                <span className="personalizeM_form__legend">Budget</span>
                <div className="modal_data_body">
                  <label>
                    <div class="personalizeM_modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="number"
                          className="hero_inpbox-style"
                          value={budget}
                          onChange={(text) => {
                            setBudget(text.target.value);
                          }}
                          placeholder="Enter annual budget"
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { StepContent01, StepContent02, StepContent03, StepContent04 };
