import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  StepContent01,
  StepContent02,
  StepContent03,
  StepContent04,
} from "../component/RealpersonalizeMatchescomponent.jsx";
import { useSelector } from "react-redux";

import "../component/css storation/personalizedMatches.css";
import { animateScroll } from "react-scroll";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { resetCheckboxData } from "../store/checkboxDataSlice.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const steps = [
  "What to study",
  "Where to study",
  "How to study",
  // "Your Profile",
];

const PersonalizedMatches = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const checkboxData = useSelector((state) => state.checkboxData.checkboxData);
  const id = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("checkboxData", checkboxData); // Display the checkbox data in the console
  const handleResetClick = () => {
    // Dispatch the action to reset the checkbox data state
    dispatch(resetCheckboxData());
  };

  useEffect(() => {
    animateScroll.scrollToTop();

    handleResetClick();
  }, []);

  // const ProgramTypes = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://studyapi.ieodkv.com/programTypes"
  //     );
  //     setProgTypes(response.data);

  //     const postgraduateData = response.data.filter(
  //       (entry) => entry.graduate === "Postgraduate"
  //     );
  //     const UndergraduateData = response.data.filter(
  //       (entry) => entry.graduate === "Undergraduate"
  //     );
  //     setUnderGr(setUnderGr);
  //     setPostGr(UndergraduateData);
  //     setPostGr();
  //     console.log(postgraduateData);
  //     console.log("/progTypes", response.data);
  //   } catch (error) {
  //     console.error("Error in Browse Countries:", error);
  //   }
  // };

  const handleSaveFilters = async () => {
    if (!id) {
      console.log("ID does not exist");
      console.log("phir bhi", checkboxData);
      checkboxData.map((data, index) => {
        localStorage.setItem(data.field, data.name);
      });
      return;
    }
    console.log("Saving Data", checkboxData);
    try {
      const response = await axios.put(
        `https://studyapi.ieodkv.com/students/${id}`,
        { searchParameters: checkboxData }
      );
      console.log("Response", response.data);
    } catch (error) {
      console.log("Failed to update", error);
    }
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    handleSaveFilters();
    {
      activeStep === 2 && navigate("/programs");
    }

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <div className="PersonalizeMatched_wrap">
        <div className="PersonalizeMatched_main">
          <div className="PersonalizeMatched_main_left">
            <Box sx={{ width: "100%" }} className="mt-10">
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
              <div>
                {allStepsCompleted() ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <>
                      {activeStep == 0 && <StepContent01 />}
                      {activeStep == 1 && <StepContent02 />}
                      {activeStep == 2 && <StepContent03 />}
                      {/* {activeStep == 3 && <StepContent04 />} */}
                    </>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        mb: 2,
                      }}
                    >
                      {/* <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button> */}
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button
                        className="Personalize_NextBtn"
                        onClick={handleNext}
                        sx={{ mr: 1 }}
                      >
                        {activeStep === 2 ? "Save & Done" : "Next"}
                      </Button>
                      {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                          <Typography
                            variant="caption"
                            sx={{ display: "inline-block" }}
                          >
                            Step {activeStep + 1} already completed
                          </Typography>
                        ) : (
                          ""
                        ))}
                    </Box>
                  </React.Fragment>
                )}
              </div>
            </Box>
          </div>
          <div className="PersonalizeMatched_main-right">
            <div className="PersonalizeMatched_main-right_uder">
              <img
                src="https://static.vecteezy.com/ti/vetor-gratis/p1/1827957-jovem-mulher-com-laptop-gente-fala-bolha-conversando-gratis-vetor.jpg"
                width={"70%"}
              />

              <div className="PersonalizeMatched_main-right_uder_text_content">
                <h1>Not Sure ?</h1>

                <p className="ltc">
                  Not sure what to chose ? Choose Them All! Leave your doubts
                  behind and select all the options to discover a diverse range
                  of study abroad programs tailored to your preferences. Embrace
                  the freedom of exploring various possibilities and uncover the
                  perfect opportunity that awaits you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalizedMatches;
