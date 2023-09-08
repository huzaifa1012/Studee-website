import React, { useEffect, useState } from "react";
import "./personilzeMatchesCompo.css";
import "./personilzeMatchesCompoOptRuff.css";
import LoginSmall from "../screens/Authentication Screens/loginSmall.jsx";
import axios from "axios";
import { useSelector } from "react-redux";
import RegisterSmall from "../screens/Authentication Screens/signupSmall";

const StepContent01 = ({ data }) => {
  const [confirmartion, setConfirmation] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://studyapi.ieodkv.com/content/headings/application/application-1"
      )
      .then((response) => {
        setConfirmation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="StepContent01_wrap">
        <div className="StepContent01_Main">
          <div className="StepContent01_head ">
            <h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: confirmartion.headingName,
                }}
              ></div>{" "}
            </h1>
          </div>
          <div className="StepContent01_body_wrap">
            <div className="StepContent01_body">
              <div className="StepContent_Body_data_for_program">
                {/* <span className="personalizeM_form__legend">Eligibilty</span> */}
                <div className="StepContent_Body_data_for_program"></div>
                <div style={{ position: "relative" }}>
                  {/* <h1>Please Make sure you meet the eligibility criteria</h1> */}
                  <p style={{ fontSize: 25 }} className="mb-2">
                    {data?.data.name}
                  </p>
                  <p style={{ fontSize: 20 }} className="mb-2">
                    {data?.data.university.universityName}
                  </p>
                  <p className="mt-3 mb-3">
                    Make sure you’re eligible for this program before you start
                    your application.
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: confirmartion.contentText,
                    }}
                  ></div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StepContent02 = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const myData = data.data;
  console.log("data 02 ", myData);

  const handleOptionChange = (startDate, startMonth, startYear) => {
    // Handle the selected option with the provided values
    setSelectedOption(startDate);
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("startMonth", startMonth);
    localStorage.setItem("startYear", startYear);
    // Additional logic with startMonth and startYear
  };

  return (
    <div className="StepContent01_wrap">
      <div className="StepContent01_Main">
        <div className="StepContent01_head">
          <h1>When do you want to start your program?</h1>
        </div>
        <div className="StepContent01_body_wrap">
          <div className="StepContent01_body">
            <div className="StepContent_Body_data_for_program_for_program"></div>
            <div style={{ position: "relative", margin: "0px 15px " }}>
              <h3>Which intake do you want to apply for?</h3>
              <div
                style={{ display: "flex", flexDirection: "column", margin: 20 }}
              >
                {myData.startData.map((row) => (
                  <label
                    className="container"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginBottom: "25px",
                    }}
                    key={row.startAt}
                  >
                    <input
                      type="radio"
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                      value={row.startDate}
                      checked={selectedOption === row.startDate}
                      onChange={(e) => {
                        const { startDate, startMonth, startYear } = row;
                        handleOptionChange(startDate, startMonth, startYear);
                      }}
                    />
                    <span style={{ display: "flex", flexDirection: "column" }}>
                      <span>
                        {/* {row.startDate} */}
                        {row.startMonth}{" "}
                        {row.startYear}
                      </span>
                      <span style={{ fontSize: "20px" }}>
                        Apply by {row.deadlineMonth}{" "}
                        {row.deadlineYear}
                      </span>
                    </span>

                    <span className="checkmark"></span>
                  </label>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const StepContent03 = () => {
  const id = useSelector((state) => state.userId);

  const [apply, setApply] = useState([]);
  const [studentAge, setStudentAge] = useState(false);
  const [parent, setParent] = useState(false);
  const [register, setRegiser] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://studyapi.ieodkv.com/content/headings/application/application-2"
      )
      .then((response) => {
        setApply(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchData()
  }, [id]);

  useEffect(() => {
    fetchData()
  }, [id]);


  const fetchData = async () => {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (id) {
      try {
        const response = await axios.get(
          `https://studyapi.ieodkv.com/students/${id}`, config
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.warn("Id Not Found");
    }
  };


  return (
    <>
      {!id && !data.isVerified ? (
        <>
          {" "}
          <div className="StepContent01_wrap">
            <div className="StepContent01_Main">
              <div className="StepContent01_head">
                <h1 style={{ marginBottom: '5px' }}>Before Applying You Need To Sign In With Your Account</h1>
                {register ?
                  <h2 style={{ marginBottom: '10px' }} onClick={() => setRegiser(false)}>Already Have an account? Login</h2>
                  :
                  <h2 style={{ marginBottom: '10px' }} onClick={() => setRegiser(true)}>Don't have an account? Register</h2>
                }

              </div>
              <div className="StepContent01_body_wrap">
                <div className="StepContent01_body">
                  {register ? (
                    <>
                      <RegisterSmall prop={register} />
                    </>
                  )
                    : (
                      <>
                        <LoginSmall prop={register} />
                      </>
                    )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="StepContent01_wrap">
            <div className="StepContent01_Main">
              <div className="StepContent01_head">
                <h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: apply.headingName,
                    }}
                  ></div>
                </h1>
              </div>
              <div className="StepContent01_body_wrap">
                <div className="StepContent01_body">
                  <div style={{ position: "relative", margin: "0px 15px " }}>
                    <h3>
                      {" "}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: apply.contentText,
                        }}
                      ></div>
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: 20,
                      }}
                    >


                    </div>
                  </div>
                  <div className="StepContent_Body_data_for_program ">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
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
              <div className="StepContent_Body_data_for_program ">
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
