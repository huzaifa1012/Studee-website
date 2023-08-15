import React, { useEffect, useState } from "react";
import "../../component/css storation/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { animateScroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { setUserId } from "../../store/userIdSlice";
const Login = () => {
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
      navigate("/account");
    } catch (error) {
      console.log("error", error.message);
      if (error.response) {
        console.log("message", error.response.data);
      }
    }
  };

  return (
    <div className="login_container_wrap">
      <div className="login_container">
        <div className="login_form">
          <h2>Sign in to your account</h2>
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

              <button type="submit" className="login_button">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="login_register_box">
          <div className="login_register_box_main">
            <h3>Don't have an account?</h3>
            <p>Register for free today and start your study abroad journey</p>
            <Link to="/register">
              <button className="login_register_button">
                Register for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
