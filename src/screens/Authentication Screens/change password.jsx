import axios from "axios";
import React, { useState } from "react";
// import "../component/css storation/Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let id = localStorage.getItem('id')
  const handeChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("New password & confirm password should be same")
      return
    }
    if (newPassword.length < 6 || confirmNewPassword.length < 6) {
      setError("Password should be at least 6 characters")
      return
    }
    try {
      const response = await axios.patch(
        `https://studyapi.ieodkv.com/students/update_forget_password/${id}`,
        {
          password: newPassword,
          password2: confirmNewPassword,
        }
      );
      if (response.status === 200) {
        Swal.fire("Password Updated!", "You've successfully updated your password!, Now just need to login", "success");
        navigate("/login");
      }

    } catch (error) {
      console.log(error);
      console.log(error.message);
      if (error.response.data) {
        setError(error.response.data)
      }
    }
  };
  return (
    <div className="login_container_wrap">
      <div className="login_container">
        <div className="login_form">
          <h2>Enter New Password </h2>
          <i>
            <p className="ltc">{error ? <span style={{ color: 'red' }}> {error} </span> : '*required information'}</p>
          </i>
          <form onSubmit={handeChangePassword}>
            <div className="login_input_group">
              <label htmlFor="username">New Password*</label>
              <input
                type="text"
                id="username"
                className="login_input"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setError(false)
                }}
              />
            </div>
            <div className="login_input_group">
              <label htmlFor="username">Confirm New Password*</label>
              <input
                type="text"
                id="username"
                className="login_input"
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value);
                  setError(false)

                }}
              />
            </div>
            <div className="login_card_bottom">
              <p>Create a new password for your account</p>
              <button type="submit" className="login_button">
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
