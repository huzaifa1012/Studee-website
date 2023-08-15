import axios from "axios";
import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import "../component/Account/account.css";
import "../component/Account/doc-modal.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineCheck,
  AiOutlineCloseCircle,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";

const YourApplications = () => {
  animateScroll.scrollToTop();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [document, setDocument] = useState(null);
  const [name, setName] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://studyapi.ieodkv.com/applications/student/${id}`)
      .then((response) => {
        setApplications(response.data);
        setLoading(false);
        console.log("applications", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("document", document);
    formData.append("name", name);
    if (document) {
      axios
        .patch(
          `https://studyapi.ieodkv.com/applications/upload/${selectedRow._id}`,
          formData
        )
        .then((response) => {
          console.log(response.data);
          setOpenModal(false);
          Swal.fire(
            "Document Uploaded!",
            "Your document is uploaded successfully!",
            "success"
          );
        })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Must upload document");
    }
  };

  const handleImageUpload = (event) => {
    setDocument(event.target.files[0]);
  };

  return (
    <>
      {openModal ? (
        <div className="modal">
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <span
                className="relative top-0 right-0 cursor-pointer text-gray-500"
                onClick={() => {
                  setOpenModal(false);
                  setName("");
                }}
              >
                <AiOutlineCloseCircle color="red" />
              </span>
              <div className="mb-6">
                {/* Image */}
                <h4 className="text-lg font-semibold mb-2">Upload Document</h4>
                <label className="block font-medium mb-1">Document Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter document name"
                  required
                />

                <div className="relative mb-2">
                  <input
                    type="file"
                    id="myFile"
                    name="myFile"
                    className="hidden h-200"
                    onChange={handleImageUpload}
                    style={{ width: "10px", height: "200px" }}
                  />
                  <label
                    htmlFor="myFile"
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-50 h-50 flex items-center justify-center cursor-pointer"
                  >
                    <AiOutlineCloudUpload size={57} className="m-1" />
                    <span>Select Document</span>
                  </label>
                  <span className="ml-2" id="fileChosen"></span>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      width: "48%",
                      background: "var(--secondary-color)",
                    }}
                    className=" hover:bg-blue-600 text-white rounded  px-4 py-2"
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                  <button
                    style={{
                      width: "48%",
                      background: "var(--primary-color)",
                    }}
                    className=" hover:bg-blue-600 text-white rounded  px-4 py-2"
                    onClick={() => {
                      setOpenModal(false);
                      setName("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              {/* <h6 className="text-sm font-medium">Upload documents</h6> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="account_containerWrap">
        <div className="acc_container">
          <h1 className="acc_heading">Your Applications</h1>
          <hr />
          <br />
          {loading ? (
            <div
              style={{
                width: "auto",
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </div>
          ) : applications.length > 0 ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {applications.map((row) => {
                const appliedAtDate = new Date(row.activity[0].date);
                const lastActivity = row.activity[row.activity.length - 1];
                const lastActivityDate = new Date(lastActivity.date);
                // Extract the desired data from the Date object
                const day = appliedAtDate.getDate();
                const month = appliedAtDate.toLocaleString("default", {
                  month: "long",
                });
                const year = appliedAtDate.getFullYear();
                const lastday = appliedAtDate.getDate();
                const lastmonth = appliedAtDate.toLocaleString("default", {
                  month: "long",
                });
                const lastyear = appliedAtDate.getFullYear();
                return (
                  <div className="Program_card_main">
                    <div className="Program_card_left">
                      <span>
                        <span className="text-2xl">
                          {" "}
                          {row.programId.programTypeName} In{" "}
                          {row.programId.name}
                        </span>
                      </span>
                      <br />
                      <div className="mt-1 mb-1">
                        <span className="text-xl"> {row.degree}</span>,
                        <span className="text-xl">
                          {" "}
                          Campus:
                          <span className="font-semibold"> {row.campus}</span>,
                        </span>
                      </div>
                      <p className="mb-1">
                        Delivery Method:{" "}
                        <span>
                          {" "}
                          <b> {`${row.programId.deliveryMethod}`} </b>{" "}
                        </span>
                      </p>
                      <p className="mb-1">
                        Applied at: {`${day}/${month}/${year}`}
                      </p>
                      <p className="mb-2">
                        Last updated at: {`${lastday}/${lastmonth}/${lastyear}`}
                      </p>
                    </div>
                    <div className="Program_card_right">
                      <div
                        style={{
                          padding: 20,
                          // backgroundColor: "orange",
                          borderRadius: 10,
                          color: "white",
                          margin: "5px 0px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setSelectedRow(row);
                          setOpenModal(true);
                        }}
                        className="programs_card_right_btn1"
                      >
                        Documents
                      </div>
                      <div
                        style={{
                          padding: 20,
                          // backgroundColor: "green",
                          borderRadius: 10,
                          color: "white",
                          margin: "5px 0px",
                        }}
                        className="programs_card_right_btn2"
                      >
                        <AiOutlineCheck color="white" /> {row.status}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                width: "auto",
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 30 }}>
                It looks like you haven’t applied for any programs with Studee
              </p>
              <Link
                style={{
                  color: "#603392",
                  textDecoration: "none",
                  fontSize: 25,
                }}
                to={"/search-programs"}
              >
                Search and apply for a program to see your applications here. If
                you have applied for a program directly through the university's
                website, that application won't be visible in your account.
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default YourApplications;
