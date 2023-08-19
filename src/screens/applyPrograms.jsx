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
} from "../component/personalizeMatchescomponent.jsx";
import "../component/css storation/personalizedMatches.css";
import { animateScroll } from "react-scroll";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// const steps = ["Eligibility", "Start date", "Account", "Your Profile"];

const ApplyPrograms = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const id = useSelector((state) => state.userId);
  var steps = [];

  {
    id
      ? (steps = ["Eligibility", "Start date", "Confirm",])
      : (steps = ["Eligibility", "Start date", "Account",]);
  }

  const selectedProgram = useSelector((state) => state.selectedProgram);

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
  animateScroll.scrollToTop();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
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

  const handleApply = async () => {
    // setActiveStep(0);
    // setCompleted({});
    try {
      const universityId = localStorage.getItem("universityId");
      const programId = localStorage.getItem("programId");
      const studentId = localStorage.getItem("id");
      const startDate = localStorage.getItem("startDate");
      const startMonth = localStorage.getItem("startMonth");
      const startYear = localStorage.getItem("startYear");
      const studentAge = localStorage.getItem("studentAge");
      const guardianEmail = localStorage.getItem("guardianEmail");

      const data = {
        startDate: startDate,
        // universityId: universityId,
        programId: programId,
        studentId: studentId,
        // guardianEmail: guardianEmail,
        // studentAge: studentAge,
        startMonth: startMonth,
        startYear: startYear,
      };
      if (!studentId) {
        Swal.fire(
          "You are not logged in!",
          "Before applying in program you need to sign in!",
          "warning"
        );
        return
      }

      const response = await axios.post(
        "https://studyapi.ieodkv.com/applications",
        data
      );
      console.log(response.status);
      console.log(response.data);

      if (response.status === 200) {
        localStorage.removeItem("universityId");
        localStorage.removeItem("programId");
        localStorage.removeItem("startDate");
        localStorage.removeItem("startMonth");
        localStorage.removeItem("startYear");
        localStorage.removeItem("guardianEmail");
        localStorage.removeItem("studentAge");
        Swal.fire("Good job!", "You've Successfully Applied !", "success");
        navigate("/programs");
      }
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        console.log(error.response.data);
        Swal.fire(
          "Choose Another Program!",
          "You've Already Applied For This Program !",
          "warning"
        );
        navigate("/programs");
      }
    }
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
                      {activeStep == 0 && (
                        <StepContent01 data={selectedProgram} />
                      )}
                      {activeStep == 1 && (
                        <StepContent02 data={selectedProgram} />
                      )}
                      {activeStep == 2 && (
                        <StepContent03 data={selectedProgram} />
                      )}
                      {activeStep == 3 && (
                        <StepContent04 data={selectedProgram} />
                      )}
                    </>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        mb: 2,
                      }}
                    >
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button
                        className="Personalize_NextBtn"
                        // {activeStep !== 2 ? "Next" : "Apply"}
                        onClick={activeStep !== 2 ? handleNext : handleApply}
                        sx={{ mr: 1 }}
                      >
                        {activeStep !== 2 ? "Next" : "Apply"}
                      </Button>
                      {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                          <Typography
                            variant="caption"
                            sx={{ display: "inline-block" }}
                          >
                            {/* Step {activeStep + 1} already completed */}
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

export default ApplyPrograms;
