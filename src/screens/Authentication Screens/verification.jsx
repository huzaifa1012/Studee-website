import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
// import "../component/css storation/Login.css";

const Verification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  let fromForget = location.state.fromForget
  const navigate = useNavigate();
  animateScroll.scrollToTop();


  let email = localStorage.getItem("email");
  const handleOTPSubmit = async (event) => {
    event.preventDefault();
    console.log(otp);
    try {
      console.log("MY OTP", otp);
      const response = await axios.post(
        "https://studyapi.ieodkv.com/students/verify",
        {
          email: email,
          otp: Number(otp),
        }
      );
      const studentId = response.data._id;
      localStorage.setItem("id", studentId);
      console.log(response.data);
      console.log(response.status);
      {
        fromForget ?
          navigate("/change-password") :
          navigate("/account")
      }
      // navigate("/verification", { changePasswordScreen: true });

    } catch (error) {
      console.log("error", error.message);
      if (error.response.data) {
        animateScroll.scrollToTop();
        setError(error.response.data);
      }
    }
  };
  const handleResend = async () => {
    try {
      console.log("email", email);
      const response = await axios.post(
        "https://studyapi.ieodkv.com/students/resend",
        {
          email: email,
        }
      );
      console.log(response.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "OTP Resend",
        text: `We've sent the OTP to ${email} again.  `,
        // showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);

      console.log(error.message);
    }
  };
  return (
    <div className="login_container_wrap">
      <div className="login_container">
        <div className="login_form">
          <h2>Verify Your Email </h2>
          <i>
            {error ? (
              <p style={{ color: "red" }}> {error} </p>
            ) : (
              <p className="ltc"> *required information</p>
            )}
          </i>
          <form onSubmit={handleOTPSubmit} onChange={() => setError("")}>
            <div className="login_input_group">
              <label htmlFor="username">Enter OTP*</label>
              <input
                type="text"
                id="username"
                className="login_input"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
            </div>

            <div className="login_card_bottom">
              <p>
                We have sent an OTP code to your email address,{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => {
                    handleResend();
                  }}
                >
                  Resend OTP
                </span>
              </p>
              <button type="submit" className="login_button">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
