import axios from "axios";
import React, { useState } from "react";
// import "../component/css storation/Login.css";
import { useNavigate } from "react-router-dom";
const ForgePassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleForget = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const response = await axios.post(
        "https://studyapi.ieodkv.com/students/resend",
        {
          email: email,
        }
      );
      console.log(response.data);
      navigate("/verification");
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
  return (
    <div className="login_container_wrap">
      <div className="login_container">
        <div className="login_form">
          <h2>Change Your Password </h2>
          <i>
            <p className="ltc">*required information</p>
          </i>
          <form onSubmit={handleForget}>
            <div className="login_input_group">
              <label htmlFor="username">Email address*</label>
              <input
                type="text"
                id="username"
                className="login_input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="login_card_bottom">
              <p>We will send you a reset code to entered email address</p>
              <button type="submit" className="login_button">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgePassword;
