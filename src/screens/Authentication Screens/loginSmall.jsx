import React, { useEffect, useState } from "react";
import "../../component/css storation/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { animateScroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { setUserId } from "../../store/userIdSlice";
const LoginSmall = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      const response = await axios.post(
        "https://studyapi.ieodkv.com/students/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      const studentId = response.data.user.id;

      localStorage.setItem("id", studentId);
      const userId = localStorage.getItem("id");
      dispatch(setUserId(userId));
      navigate("/programs");
    } catch (error) {
      console.log("error", error.message);
      if (error.response) {
        console.log("message", error.response.data);
      }
    }
  };

  return (
    <div
      className="login_container_wrap"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <div className="login_container">
        <div className="login_form_small" style={{ boxShadow: "none" }}>
          <h2 className="text-2xl">Sign in</h2>
          <i>
            <p className="ltc">*required information</p>
          </i>
          <form onSubmit={handleLogin}>
            <div className="login_input_group">
              <label htmlFor="username">Email address*</label>
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="login_input"
              />
            </div>
            <div className="login_input_group">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                className="login_input"
              />
            </div>
            <div className="login_card_bottom">
              <Link to="/forget-password">
                <p>Forgot your password</p>
              </Link>
              <Link to="/register">
                <button className="login_register_button">
                  Register for free
                </button>
              </Link>

              <button type="submit" className="login_button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSmall;
