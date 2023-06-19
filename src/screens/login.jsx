import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_container_wrap">
      <div className="login_container">
        <div className="login_form">
          <h2>Sign in to your account</h2>
          <i>
            <p className="ltc">*required information</p>
          </i>
          <form>
            <div className="login_input_group">
              <label htmlFor="username">Email address*</label>
              <input type="text" id="username" className="login_input" />
            </div>
            <div className="login_input_group">
              <label htmlFor="password">Password*</label>
              <input type="password" id="password" className="login_input" />
            </div>
            <div className="login_card_bottom">
              <a href="/sd">Forgot your password</a>
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
            <button className="login_register_button">Register for free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
