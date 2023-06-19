import React from "react";
// import "../component/css storation/Login.css";

const ForgePassword = () => {
  return (
    <div className="login_container_wrap">
      <div className="login_container">
        <div className="login_form">
          <h2>Reset Your Password </h2>
          <i>
            <p className="ltc">*required information</p>
          </i>
          <form>
            <div className="login_input_group">
              <label htmlFor="username">Email address*</label>
              <input type="text" id="username" className="login_input" />
            </div>
            {/* <div className="login_input_group">
              <label htmlFor="password">Password*</label>
              <input type="password" id="password" className="login_input" />
            </div> */}
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
