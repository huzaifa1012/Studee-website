import React from "react";
import "../component/Account/account.css";
const Account = () => {
  return (
    <>
      <div className="account_containerWrap">
        <div className="acc_container">
          <h1 className="acc_heading">Your Account</h1>
          <div className="acc_box_wrap">
            <div className="acc_box">
              <img
                className="acc_prof_box_img"
                src="https://yt3.googleusercontent.com/ytc/AGIKgqMPsGpJrtJwiljcI3r7SP-oI2pR5WkSbFoVtQ=s900-c-k-c0x00ffffff-no-rj"
              />{" "}
              <div className="acc_box_details">
                <h1 className="acc_prof_box_h1">Huzaifa usman</h1>
                <p className="acc_box_p">huzaifahux@gmail.com</p>
                <button className="acc_sign_out">Logout</button>
              </div>
            </div>

            <div className="acc_box">
              <img
                className="box_img"
                src="https://images.studee.com/illustrations/illustration__spot--application.png?ixlib=js-2.3.2&auto=format&w=85&h=64&q=45"
              />{" "}
              <div className="acc_box_details">
                <h1 className="acc_box_h1">Your Application</h1>
                <p className="acc_box_p">
                  See and access all your applications in one place
                </p>
                {/* <button className="acc_sign_out">Logout</button> */}
              </div>
            </div>
            <br />

            <div className="acc_box">
              <img
                className="box_img"
                src="https://images.studee.com/illustrations/illustration__spot--guide-students.png?ixlib=js-2.3.2&auto=format&w=98&h=64&q=45"
              />{" "}
              <div className="acc_box_details">
                <h1 className="acc_box_h1">Your Profile</h1>
                <p className="acc_box_p">
                  Tell us about yourself so we can help you find the right
                  programs
                </p>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
