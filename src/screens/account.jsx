import React, { useEffect, useState } from "react";
import "../component/Account/account.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { animateScroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { setUserId } from "../store/userIdSlice";
const Account = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    animateScroll.scrollToTop();

    fetchData();
  }, []);
  const fetchData = async () => {
    const id = localStorage.getItem("id");
    console.log(id);
    const response = await axios.get(
      `https://studyapi.ieodkv.com/students/${id}`
    );
    setData(response.data);
    console.log(data);
  };
  const handleLogout = async () => {
    try {
      localStorage.removeItem("id");
      localStorage.removeItem("email");
      dispatch(setUserId(false));
      console.log("done");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {data ? (
        <div className="account_containerWrap">
          <div className="acc_container">
            <h1 className="acc_heading">Your Account</h1>
            <hr />
            <br />
            <div className="acc_box_wrap">
              <div className="acc_box">
                <img
                  className="acc_prof_box_img"
                  src="https://yt3.googleusercontent.com/ytc/AGIKgqMPsGpJrtJwiljcI3r7SP-oI2pR5WkSbFoVtQ=s900-c-k-c0x00ffffff-no-rj"
                />{" "}
                <div className="acc_box_details">
                  <h1 className="acc_prof_box_h1">
                    {data.firstname + " " + data.lastname}
                  </h1>
                  <p className="acc_box_p">{data.email}</p>
                  <button
                    className="acc_sign_out"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>

              <Link to="/your-applications" className="acc_box">
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
              </Link>
              <br />

              <Link to="/profile" className="acc_box">
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
              </Link>

              {/* Document Box Is Committed here  */}
              {/* <Link to="/documents" className="acc_box">
                <img
                  className="box_img"
                  src="https://images.studee.com/illustrations/illustration__spot--guide-students.png?ixlib=js-2.3.2&auto=format&w=98&h=64&q=45"
                />{" "}
                <div className="acc_box_details">
                  <h1 className="acc_box_h1">Documents</h1>
                  <p className="acc_box_p">
                    Tell us about yourself so we can help you find the right
                    programs
                  </p>
                </div>
              </Link> */}

              <br />
            </div>
          </div>
        </div>
      ) : (
        <div className="my-custom-spinner-wrap">
          <div
            className="my-custom-spinner  inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      )}
    </>
  );
};

export default Account;
