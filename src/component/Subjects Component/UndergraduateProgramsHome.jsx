import React, { useEffect, useState } from "react";
// import "../Programs/Programs.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import ProgramButtons from "../../components/ProgramButtons/ProgramButtons";
import axios from "axios";
import ProgramCard from "../programs components/ProgramCard";
import { FcEmptyFilter } from "react-icons/fc";

export const UndergraduateProgramsHome = ({ subject, id }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://studyapi.ieodkv.com/programs/type/${subject}/${id}`)
            .then((response) => {
                setData(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    if (data.length > 0) {
        return (

            <ProgramCard data={data} />

        );
    } else {
        return (
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
            </>);
    }
};

export const UndergraduateProgramsCountry = ({ subject, id, name }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://studyapi.ieodkv.com/programs/type/${subject}/${id}/country/${name}`
            )
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    if (data.length > 0) {
        return (
            <div>
                {data.map((row) => (
                    <div className="programView" style={{ margin: "20px 0px" }}>
                        <div className="content-view">
                            <div className="column-1">
                                <img
                                    src={`https://studyapi.ieodkv.com/universities/images/${row.university.logoImage}`}
                                    width={"100"}
                                    height={"100"}
                                />
                                <div
                                    style={{
                                        marginLeft: 20,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <div style={{ justifyContent: "center" }}>
                                        <span style={{ fontSize: 25, fontWeight: "bold" }}>
                                            {row.name}
                                        </span>
                                        - <span style={{ fontSize: 25 }}>-{row.subject.name}</span>
                                    </div>
                                    <p style={{ fontSize: 20, fontWeight: 500 }}>
                                        {row.university.universityName},{row.country.name}
                                    </p>
                                </div>
                            </div>
                            <div className="column-2">
                                <div className="column2-row">
                                    <p style={{ fontSize: 20 }}>Program type:</p>
                                    <p style={{ fontSize: 20 }}>{row.programType.name}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: 20 }}>Duration:</p>
                                    <p style={{ fontSize: 20 }}>{row.duration}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: 20 }}>Annual tuition fee :</p>
                                    <p style={{ fontSize: 20 }}>{row.annualTutionFees}</p>
                                </div>
                                <div>
                                    <AiOutlineInfoCircle />
                                    <div>
                                        <p style={{ fontSize: 20 }}>Start Date:</p>
                                        <div style={{ display: "flex" }}>
                                            {row.startData.map((row) => {
                                                const date = new Date(row.startAt);
                                                const month = date.toLocaleString("default", {
                                                    month: "long",
                                                });
                                                return <p style={{ fontSize: 20 }}>{month}</p>;
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProgramButtons data={row} />
                    </div>
                ))}
            </div>
        );
    } else {
        return (
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
            </div>);
    }
};
