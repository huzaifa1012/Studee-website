import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../component/css storation/personalizedMatches.css";
import { animateScroll } from "react-scroll";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { addCheckboxData, resetCheckboxData } from "../store/checkboxDataSlice.jsx";
import { useDispatch } from "react-redux";
import { setSelectedProgram } from "../store/selectedProgramSlice";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const steps = [
    "What to study",
    // "Where to study",
    // "How to study",
    // "Your Profile",
];

const StepContent01 = () => {
    // const [programData, setProgramData] = useState([]);
    // const [programName, setProgramName] = useState([]);
    // const [filteredSubjects, setFilteredSubjects] = useState([]);
    // const [showSubjectSuggestions, setShowSubjectSuggestions] = useState(true); // Show subject suggestions flag state
    // const [selectedProgram, setSelectedProgramUseState] = useState([]); // Show subject suggestions flag state


    // const [selectedOption, setSelectedOption] = useState(""); // To keep track of the selected option
    // const [program, setProgram] = useState("");
    // const [programFor, setProgramFor] = useState("");

    // const params = useParams()

    // const [filteredLocations, setFilteredLocations] = useState([]);
    // const [selectedLocation, setSelectedLocation] = useState('');
    // const [showSuggestions, setShowSuggestions] = useState(true); // Show suggestions flag state



    // const dispatch = useDispatch();

    // useEffect(() => {
    // }, [programFor])

    // useEffect(() => {
    //     axios
    //         .get(`https://studyapi.ieodkv.com/programs/application/${params.name}/${programFor.name}`)
    //         .then((response) => {
    //             setProgramData(response.data);
    //             console.log("Matched Programs Data", response.data);
    //         })
    //         .catch((error) => console.log(error));
    // }, [programFor]);

    return (
        <></>
        // <div className="StepContent01_wrap">
        //     <div className="StepContent01_Main">
        //         <div className="StepContent01_head">
        //             <h1>Select your chosen program below to start your application?</h1>
        //         </div>
        //         <div className="StepContent01_body_wrap">
        //             <div className="StepContent01_body">
        //                 <div className="StepContent_Body_data "></div>
        //                 <div style={{ position: "relative", margin: "0px 15px " }}>

        //                     <div className="theHero_label">
        //                         <p className="mtc hero_labelP">Program Type</p>

        //                         <div className="button-container flex justify-arround ">
        //                             <input
        //                                 value={"Postgraduate"}
        //                                 type="button"
        //                                 className={`education-button hero_inpbox-style cursor-pointer border p-4 rounded ${selectedOption === "postgraduate" ? "selected" : ""}`}
        //                                 style={selectedOption === "postgraduate" ? { background: "var(--secondary-color)", color: "white" } : {}}

        //                                 onClick={() => {
        //                                     setSelectedProgramUseState('')
        //                                     setProgramName('')
        //                                     setSelectedOption("postgraduate")

        //                                     setProgram("Postgraduate")
        //                                     setProgramFor({
        //                                         field: "graduate",
        //                                         name: "Postgraduate",
        //                                     });
        //                                 }}
        //                             />

        //                             <input
        //                                 type="button"
        //                                 value={'Undergraduate'}
        //                                 className={`education-button hero_inpbox-style cursor-pointer border p-4 ml-2 rounded ${selectedOption === "undergraduate" ? "selected" : ""}`}
        //                                 onClick={() => {
        //                                     setSelectedProgramUseState('')
        //                                     setProgramName('')
        //                                     setSelectedOption("undergraduate")

        //                                     setProgram("Undergraduate")
        //                                     setProgramFor({
        //                                         field: "graduate",
        //                                         name: "Undergraduate",
        //                                     });
        //                                 }}
        //                                 style={selectedOption === "undergraduate" ? { background: "var(--secondary-color)", color: "white" } : {}}

        //                             />
        //                         </div>
        //                     </div>

        //                     <div className="theHero_label" style={{ height: "90px" }}>
        //                         <p className="mtc hero_labelP">Programs</p>
        //                         <input
        //                             type="text"
        //                             className="hero_inpbox-style-personolized-matches"
        //                             placeholder="Enter a country, campus or university"
        //                             value={programName}
        //                             onChange={(e) => {
        //                                 const enteredValue = e.target.value;
        //                                 setProgramName(enteredValue);

        //                                 if (enteredValue.trim() === '') {
        //                                     setShowSubjectSuggestions(false);
        //                                     setFilteredSubjects([]); // Clear the filtered subjects
        //                                 } else {
        //                                     setShowSubjectSuggestions(true); // Show suggestions when there's input
        //                                     const subjectFilter = programData.filter(
        //                                         (row) => row.name.toLowerCase().includes(enteredValue.toLowerCase())
        //                                     );

        //                                     setFilteredSubjects(subjectFilter);
        //                                 }
        //                             }}
        //                         />

        //                         {showSubjectSuggestions && filteredSubjects.length > 0 && (
        //                             <div className="main_hero_option_box">
        //                                 {filteredSubjects.map((row) => (
        //                                     <div
        //                                         key={row.name}
        //                                         className="main_hero_option"
        //                                         style={{ fontSize: 18, cursor: "pointer" }}
        //                                         onClick={() => {
        //                                             console.log(filteredSubjects)
        //                                             setSelectedProgramUseState(row);
        //                                             console.log(row)
        //                                             setProgramName(row.name);
        //                                             dispatch(
        //                                                 addCheckboxData({
        //                                                     field: row.for,
        //                                                     name: row.name,
        //                                                 })
        //                                             );
        //                                             setFilteredSubjects([]); // Clear the filtered subjects
        //                                             setShowSubjectSuggestions(false); // Hide suggestions after selection
        //                                         }}
        //                                     >
        //                                         {row.name.slice(0, 30)}
        //                                     </div>
        //                                 ))}
        //                             </div>
        //                         )}
        //                     </div>

        //                     <h4 className="mt-4 mb-2 ">
        //                         Selected Program : <b>{programName}</b>
        //                     </h4>
        //                     {selectedProgram.university &&

        //                         <>


        //                             <div className="selected_uni_right_div">
        //                                 <div className="selected_uni_right_div_section_body">
        //                                     <h2>Uni Facts</h2>
        //                                     <p className="mtc">
        //                                         {selectedProgram.city.name},
        //                                         <span className="dtc" style={{ marginBottom: "5px" }}>
        //                                             <b> {selectedProgram.country.name}</b>
        //                                         </span>
        //                                         <span className="dtc" style={{ marginBottom: "5px" }}>
        //                                             <b> {selectedProgram.campus.name}</b>
        //                                         </span>
        //                                     </p>
        //                                     <div className="uni_bottom_square_wrap">
        //                                         <div className="uni_bottom_square_box">
        //                                             <p className="ltc" style={{ fontSize: '12px' }}>Type</p>
        //                                             <b>{selectedProgram.university.type}</b>
        //                                         </div>
        //                                         <div className="uni_bottom_square_box" style={{ fontSize: '12px' }}>
        //                                             <p className="ltc">Students</p>
        //                                             <b> {selectedProgram.university.internationalStudents} </b>
        //                                         </div>
        //                                         <div className="uni_bottom_square_box">
        //                                             <p className="ltc" style={{ fontSize: '12px' }}>Nationalities</p>
        //                                             <b> {selectedProgram.university.nationalities}</b>
        //                                         </div>
        //                                         <div className="uni_bottom_square_box">
        //                                             <p className="ltc" style={{ fontSize: '12px' }} >Annual Fees</p>
        //                                             <b>{selectedProgram.campus.currency} {selectedProgram.annualTutionFees}</b>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
};
const ApplyToUniversity = () => {
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


    // Steps State Starts here
    const [programData, setProgramData] = useState([]);
    const [programName, setProgramName] = useState([]);
    const [filteredSubjects, setFilteredSubjects] = useState([]);
    const [showSubjectSuggestions, setShowSubjectSuggestions] = useState(true); // Show subject suggestions flag state
    const [selectedProgram, setSelectedProgramUseState] = useState([]); // Show subject suggestions flag state

    const [selectedOption, setSelectedOption] = useState(""); // To keep track of the selected option
    const [program, setProgram] = useState("");
    const [programFor, setProgramFor] = useState("");

    const params = useParams()
    // Steps State Ends here 
    // Steps useEffect Starts here
    useEffect(() => {
    }, [programFor])

    useEffect(() => {
        axios
            .get(`https://studyapi.ieodkv.com/programs/application/${params.name}/${programFor.name}`)
            .then((response) => {
                setProgramData(response.data);
                console.log("Matched Programs Data", response.data);
            })
            .catch((error) => console.log(error));
    }, [programFor]);


    // Steps useEffect Ends here 


    useEffect(() => {
        animateScroll.scrollToTop();

        handleResetClick();
    }, []);

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
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.put(
                `https://studyapi.ieodkv.com/students/${id}`,
                { searchParameters: checkboxData }, config
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

    const handleNext = (data) => {
        if (!data) {
            Swal.fire(
                "Program is not selected!",
                "Before applying in program you need to select program!",
                "warning"
            );
            return
        }
        console.log(data)
        dispatch(setSelectedProgram({ data }));
        localStorage.setItem("universityId", data.university._id);
        localStorage.setItem("programId", data._id);

        navigate("/apply/program/eligibility");

        // 


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
                                            {activeStep == 0 && <div className="StepContent01_wrap">
                                                <div className="StepContent01_Main">
                                                    <div className="StepContent01_head">
                                                        <h1 style={{ marginTop: '0px' }} >Select your chosen program below to start your application?</h1>
                                                    </div>
                                                    <div className="StepContent01_body_wrap">
                                                        <div className="StepContent01_body">
                                                            <div className="StepContent_Body_data "></div>
                                                            <div className="ml-0 sm:ml-30"
                                                                style={{ position: "relative", }}
                                                            >

                                                                <div className="theHero_label" style={{ minWidth: '50%', height: "100px" }}>
                                                                    <p className="mtc hero_labelP">Program Type</p>

                                                                    <div className="button-container flex justify-arround ">
                                                                        <input
                                                                            value={"Postgraduate"}
                                                                            type="button"
                                                                            className={`education-button hero_inpbox-style cursor-pointer border p-4 rounded ${selectedOption === "postgraduate" ? "selected" : ""}`}
                                                                            style={selectedOption === "postgraduate" ? { background: "var(--secondary-color)", color: "white" } : {}}

                                                                            onClick={() => {
                                                                                setSelectedProgramUseState('')
                                                                                setProgramName('')
                                                                                setSelectedOption("postgraduate")

                                                                                setProgram("Postgraduate")
                                                                                setProgramFor({
                                                                                    field: "graduate",
                                                                                    name: "Postgraduate",
                                                                                });
                                                                            }}
                                                                        />

                                                                        <input
                                                                            type="button"
                                                                            value={'Undergraduate'}
                                                                            className={`education-button hero_inpbox-style cursor-pointer border p-4 ml-2 rounded ${selectedOption === "undergraduate" ? "selected" : ""}`}
                                                                            onClick={() => {
                                                                                setSelectedProgramUseState('')
                                                                                setProgramName('')
                                                                                setSelectedOption("undergraduate")

                                                                                setProgram("Undergraduate")
                                                                                setProgramFor({
                                                                                    field: "graduate",
                                                                                    name: "Undergraduate",
                                                                                });
                                                                            }}
                                                                            style={selectedOption === "undergraduate" ? { background: "var(--secondary-color)", color: "white" } : {}}

                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="theHero_label" style={{ height: "90px", }}>
                                                                    <p className="mtc hero_labelP">Programs</p>
                                                                    <input
                                                                        type="text"

                                                                        // style={{ minWidth: '285px' }}

                                                                        className="   hero_inpbox-style-personolized-matches hero_inpbox-style-personolized-matches_program"
                                                                        placeholder="Enter a country, campus or university"
                                                                        value={programName}
                                                                        onChange={(e) => {
                                                                            const enteredValue = e.target.value;
                                                                            setProgramName(enteredValue);

                                                                            if (enteredValue.trim() === '') {
                                                                                setShowSubjectSuggestions(false);
                                                                                setFilteredSubjects([]); // Clear the filtered subjects
                                                                            } else {
                                                                                setShowSubjectSuggestions(true); // Show suggestions when there's input
                                                                                const subjectFilter = programData.filter(
                                                                                    (row) => row.name.toLowerCase().includes(enteredValue.toLowerCase())
                                                                                );

                                                                                setFilteredSubjects(subjectFilter);
                                                                            }
                                                                        }}
                                                                    />

                                                                    {showSubjectSuggestions && filteredSubjects.length > 0 && (
                                                                        <div className="main_hero_option_box">
                                                                            {filteredSubjects.map((row) => (
                                                                                <div
                                                                                    key={row.name}
                                                                                    className="main_hero_option"
                                                                                    style={{ fontSize: 18, cursor: "pointer" }}
                                                                                    onClick={() => {
                                                                                        console.log(filteredSubjects)
                                                                                        setSelectedProgramUseState(row);
                                                                                        console.log(row)
                                                                                        setProgramName(row.name);
                                                                                        dispatch(
                                                                                            addCheckboxData({
                                                                                                field: row.for,
                                                                                                name: row.name,
                                                                                            })
                                                                                        );
                                                                                        setFilteredSubjects([]); // Clear the filtered subjects
                                                                                        setShowSubjectSuggestions(false); // Hide suggestions after selection
                                                                                    }}
                                                                                >
                                                                                    {row.name.slice(0, 30)}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                <h4 className="mt-4 mb-2 ">
                                                                    Selected Program : <b>{programName}</b>
                                                                </h4>
                                                                {selectedProgram.university &&

                                                                    <>

                                                                        <div className="selected_uni_right_div">
                                                                            <div className="selected_uni_right_div_section_body">
                                                                                <h2>Program Facts</h2>
                                                                                <p className="mtc">
                                                                                    {selectedProgram.city.name},
                                                                                    <span className="dtc" style={{ marginBottom: "5px" }}>
                                                                                        <b> {selectedProgram.country.name}</b>
                                                                                    </span>
                                                                                    <span className="dtc" style={{ marginBottom: "5px" }}>
                                                                                        <b> {selectedProgram.campus.name}</b>
                                                                                    </span>
                                                                                </p>
                                                                                <div className="uni_bottom_square_wrap">
                                                                                    <div className="uni_bottom_square_box">
                                                                                        <p className="ltc" style={{ fontSize: '12px' }}>Campus</p>
                                                                                        <b>{selectedProgram.campus.name}</b>
                                                                                    </div>
                                                                                    <div className="uni_bottom_square_box" style={{ fontSize: '12px' }}>
                                                                                        <p className="ltc">Duration</p>
                                                                                        <b> {selectedProgram.duration} </b>
                                                                                    </div>
                                                                                    <div className="uni_bottom_square_box">
                                                                                        <p className="ltc" style={{ fontSize: '12px' }}>Scholarship</p>
                                                                                        <b>£{selectedProgram.scholarship}</b>
                                                                                    </div>
                                                                                    <div className="uni_bottom_square_box">
                                                                                        <p className="ltc" style={{ fontSize: '12px' }} >Annual Fees</p>
                                                                                        <b>£{selectedProgram.annualTutionFees}</b>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            }
                                            {/* {activeStep == 1 && <StepContent02 />} */}
                                            {/* {activeStep == 2 && <StepContent03 />} */}
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
                                                onClick={() => handleNext(selectedProgram)}
                                                sx={{ mr: 1 }}
                                            >
                                                Start application
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

export default ApplyToUniversity;
