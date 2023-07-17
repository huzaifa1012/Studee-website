import React from "react";
import "../component/Account/account.css";
const YourApplications = () => {
  return (
    <>
      <div className="account_containerWrap">
        <div className="acc_container">
          <h1 className="acc_heading">Your Applications</h1>
          <hr />
          <br />
          <div className="acc_box_wrap">
            <h1>Looks Like You Haven't Application!</h1>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default YourApplications;
