import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { animateScroll } from "react-scroll";
import "../component/Account/docs.css";
const Documents = () => {
  animateScroll.scrollToTop();
  const id = useSelector((state) => state.userId);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUploadedDocs();
  }, []);

  const fetchUploadedDocs = async () => {
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://studyapi.ieodkv.com/students/${id}`, config
      );
      if (response.data.documents) {
        setData(response.data.documents);
        console.log("docs fetched", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };

    const handleUpload = async () => {
      console.log(selectedFile);

      try {
        const token = localStorage.getItem('token')
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const documents = {};
        documents.name = fileName;
        documents.document = selectedFile;
        const response = await axios.patch(
          `https://studyapi.ieodkv.com/students/upload/${id}`,
          documents, config
        );
        console.log("response", response.data);
        console.log("response", response.status);
        console.log("done");
        fetchUploadedDocs();
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <div className="custom_document_wrap">
          <label htmlFor="fileInput" className="custom-file-btn">
            <span className="icon-wrapper">
              <div
                className="my-file-icon-under-wrap"
                style={{
                  display: " flex",
                  justifyContent: " center",
                  alignItems: " center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-file-earmark-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z" />
                </svg>
              </div>
            </span>
            Select Document
          </label>
          <input
            type="file"
            id="fileInput"
            className="file-input"
            onChange={handleFileChange}
          />
          <span
            id="selectedFileName"
            className="selected-doc-filename p-1  text-sm"
          >
            {selectedFile
              ? selectedFile.name.slice(0, 12) + "..."
              : "No file selected"}
          </span>
        </div>
        <input
          className="mt-2 mb-2 rounded-md"
          type="text"
          placeholder="Document name"
          onChange={(e) => {
            setFileName(e.target.value);
          }}
        />
        <button className="upload_doc_btn" onClick={() => handleUpload()}>
          Upload
        </button>
      </>
    );
  };
  return (
    <>
      <div className="account_containerWrap">
        <div className="acc_container">
          <h1 className="acc_heading">Documents</h1>
          <h1>Documents you uploaded</h1>
          <br />
          <hr />
          <br />
          <div className="documents-ultra-wrap">
            <div className="documents-section-right">
              <div>
                {data?.map((item, index) => {
                  return (
                    <>
                      <div className="mt-5 mb-5">
                        <h2 className="text-lg">{item.name}</h2>
                        {/* <img src={item.name} /> */}
                        <h3 className="text-sm">{item.date}</h3>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="documents-section-left">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
