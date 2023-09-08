import React, { useEffect, useState } from "react";
import "../../component/css storation/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { animateScroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { setUserId } from "../../store/userIdSlice";
import Swal from "sweetalert2";
import RegisterSmall from "./signupSmall";
const LoginSmall = ({ prop }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  const handleChange = (event) => {
    const newState = event.target.value;
    setChildState(newState);

    // Call the callback function provided by the parent
    props.onStateChange(newState);
  };


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
      const studentId = response.data.user;
      const studentToken = response.data.token;

      localStorage.setItem("id", studentId);
      localStorage.setItem("token", studentToken);

      const userId = localStorage.getItem("id");
      dispatch(setUserId(userId));
      // navigate("/programs");
      Swal.fire("login Success", "Yo've successfully logged in, Now continue your application  ", "success")
    } catch (error) {
      console.log("error", error.message);
      if (error.response) {
        setError(error.response.data)
        console.log("message", error.response.data);
      }
    }
  };

  return (
    <>

      <div
        className="login_container_wrap"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <div className="login_container">
          <div className="login_form_small" style={{ boxShadow: "none" }}>
            <h2 className="text-2xl">Sign in</h2>
            <i>
              {error ?
                <p style={{ color: 'red' }}>{error}</p>
                :
                <p className="ltc ">*required information</p>
              }

            </i>
            <form onSubmit={handleLogin}>
              <div className="login_input_group">
                <label htmlFor="username">Email address*</label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => {
                    setError(false)
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
                    setError(false)
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
        </div>
      </div >
    </>


  );
};

export default LoginSmall;
