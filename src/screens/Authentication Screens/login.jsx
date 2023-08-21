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
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

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
      dispatch(setUserId(response.data.user.id));
      console.log(response.data);
      const studentId = response.data.user.id;

      localStorage.setItem("id", studentId);
      const userId = localStorage.getItem("id");

      // navigate("/account");
      window.location.replace('/account')
    } catch (error) {
      console.log("error", error.message);
      if (error.response) {
        setError(error.response.data)
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
            {error ?
              <p style={{ color: 'red' }}>{error}</p>
              :
              <p className="ltc">*required information</p>
            }

          </i>
          <form onSubmit={handleLogin}>
            <div className="login_input_group">
              <label htmlFor="username">Email address*</label>
              <input
                type="text"
                id="username"
                placeholder="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="login_input"
              />
            </div>


            {/* <div className="login_input_group">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                className="login_input"
              />
            </div> */}

            <div className="login_input_group">

              <div className="flex justify-between align-center">
                <label htmlFor="password" className="lable_in_signup_screen">
                  Password *
                </label>
                <span
                  className="show_password_icon lable_in_signup_screen mr-12 cursor-pointer hover:text-blue-500
    "
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
              <div className="password_input_container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="login_input"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

              </div>
              <br />
              <span className="ltc">
                We'll send you an activation code to your email.
              </span>
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
