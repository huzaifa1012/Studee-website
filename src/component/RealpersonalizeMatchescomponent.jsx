import React, { useState } from "react";
import "./personilzeMatchesCompo.css";
import "./personilzeMatchesCompoOptRuff.css";
import { GrFormClose } from "react-icons/gr";

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

  const handleSearchTextChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    const filteredResults = dummySubject.filter((tag) =>
      tag.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) => [...prevTags, tag]);
    setSearchText("");
    setSearchResults([]);
  };

  const removeTag = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

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
                <span className="personalizeM_form__legend">Subject</span>
                <div className="StepContent_Body_data  "></div>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="hero_inpbox-style"
                    value={searchText}
                    onChange={handleSearchTextChange}
                    placeholder="Search for subjects"
                  />
                  {searchResults.length > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        width: "100%",
                        maxHeight: "160px",
                        overflow: "auto",
                        border: "1px solid #ccc",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <ul
                        style={{ listStyle: "none", padding: "0", margin: "0" }}
                      >
                        {searchResults.map((tag) => (
                          <li
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            style={{
                              cursor: "pointer",
                              padding: "5px",
                              backgroundColor:
                                hoveredTag === tag ? "#f1e4ff90" : "initial",
                            }}
                            onMouseEnter={() => setHoveredTag(tag)}
                            onMouseLeave={() => setHoveredTag(null)}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h4 className="mt-2 ">
                      {selectedTags.length > 0 && <b> Selected subjects </b>}
                    </h4>
                    <ul
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                      }}
                    >
                      {selectedTags.map((tag) => (
                        <li
                          key={tag}
                          style={{
                            backgroundColor: "#f0f0f0",
                            width: "auto",
                            margin: "10px 5px",
                            padding: "10px",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {tag}
                          <GrFormClose
                            style={{ marginLeft: "5px", cursor: "pointer" }}
                            onClick={() => removeTag(tag)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <br />
                <br />

                <span className="personalizeM_form__legend">Undergraduate</span>
                <div className="modal_data_body">
                  <label>
                    <div class="personalizeM_modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text ">Bachelors </span>
                      </div>
                    </div>
                  </label>
                  <label></label>
                  <label>
                    <div className="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="personalizeM_modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text">Associates</span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          className="modal_checkBox_inp"
                          name="undergraduate"
                        />
                        <span className="m-checkbox-text">
                          Undergraduate Diploma
                        </span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          className="modal_checkBox_inp"
                          name="undergraduate"
                        />
                        <span className="m-checkbox-text">
                          Undergraduate Pathway
                        </span>
                      </div>
                    </div>
                  </label>
                </div>

                <span className="form__legend">Postgraduate</span>
                <div className="modal_data_body">
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text">Masters</span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text">Doctorate</span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div class="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          className="modal_checkBox_inp"
                          name="undergraduate"
                        />{" "}
                        <span className="m-checkbox-text">
                          Postgraduate Diploma
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

const StepContent02 = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredTag, setHoveredTag] = useState(null);

  const handleSearchTextChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    const filteredResults = dummyCountries.filter((tag) =>
      tag.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) => [...prevTags, tag]);
    setSearchText("");
    setSearchResults([]);
  };

  const removeTag = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

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
              <input
                type="text"
                className="hero_inpbox-style"
                value={searchText}
                onChange={handleSearchTextChange}
                placeholder="Search for a country"
              />
              {searchResults.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    width: "100%",
                    maxHeight: "160px",
                    overflow: "auto",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    {searchResults.map((tag) => (
                      <li
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        style={{
                          cursor: "pointer",
                          padding: "5px",
                          backgroundColor:
                            hoveredTag === tag ? "#f1e4ff90" : "initial",
                        }}
                        onMouseEnter={() => setHoveredTag(tag)}
                        onMouseLeave={() => setHoveredTag(null)}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h4 className="mt-2 ">
                  <b> Selected Countries </b>:
                </h4>
                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                  }}
                >
                  {selectedTags.map((tag) => (
                    <li
                      key={tag}
                      style={{
                        backgroundColor: "#f0f0f0",
                        width: "auto",
                        margin: "10px 5px",
                        padding: "10px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {tag}
                      <GrFormClose
                        style={{ marginLeft: "5px", cursor: "pointer" }}
                        onClick={() => removeTag(tag)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const StepContent03 = () => {
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
                          name="undergraduate"
                          className="modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text ">On Campus </span>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div className="modal_checkBox_wrap">
                      <div class="personalizeM_modal_checkBox_body">
                        <input
                          type="checkbox"
                          name="undergraduate"
                          className="personalizeM_modal_checkBox_inp"
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
                          className="personalizeM_modal_checkBox_inp"
                        />{" "}
                        <span className="m-checkbox-text">Home Tution</span>
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
