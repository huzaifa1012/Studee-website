import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { animateScroll } from "react-scroll";
import "../component/Account/account.css";
import profile from "../assets/images/profile.png"
import { RiLockPasswordLine } from 'react-icons/ri'
import { TbPassword } from 'react-icons/tb'
import Swal from "sweetalert2";
const Profile = () => {
  const [data, setData] = useState([]);
  const [ediable, setEdiable] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  // Fields
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [countryLivingIn, setCountryLivingIn] = useState("");
  const [region, setRegion] = useState("");

  const [lastInstitution, setLastInstitution] = useState("");
  const [lastEducationCountry, setLastEducationCountry] = useState("");

  const [nationality, setNationality] = useState("");
  const [annualBudget, setAnnualBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [reasonToStudyAbroad, setReasonToStudyAbroad] = useState("");
  const id = useSelector((state) => state.userId);

  useEffect(() => {
    animateScroll.scrollToTop();
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated data:", data);

    // Cleanup function, will run when the component is unmounted
    return () => {
      console.log("Component unmounted. Stopping logging data.");
    };
  }, [data]);

  const fetchData = async () => {
    if (id) {
      try {
        const response = await axios.get(
          `https://studyapi.ieodkv.com/students/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.warn("Id Not Found");
    }
  };

  const handleCancel = () => {
    setEdiable(false);
    // fetchData();
  };
  const handlePasswordChange = async () => {
    try {
      const updateData = {};

      if (password && password2) {
        updateData.password = password;
        updateData.password2 = password2;
      }
      else {
        Swal.fire(
          "Enter Valid Password", "Please check you've entered your current & new password")
        return
      }
      const response = await axios.put(
        `https://studyapi.ieodkv.com/students/${id}`,
        updateData
      );
      setPassword('')
      setPassword2('')
      fetchData();
      setChangePassword(false);
      console.log("response", response.data);
      if (response.status === 200) {
        Swal.fire(
          "Password changed", "Your password is successfully changed", "success")
      }

      // if (response.data.message) {
      //   alert(response.data.message)
      // }
      // if (response.message) {
      //   alert(response.data.message)
      // }


    } catch (error) {
      if (error.response.data) {
        Swal.fire(
          `Error`, ` ${error.response.data}`, "warning")
      }
      console.log(error);
    }
  };
  const handleSave = async () => {
    try {
      const updateData = {};
      if (firstname) {
        updateData.firstname = firstname;
      }
      if (lastname) {
        updateData.lastname = lastname;
      }
      if (reasonToStudyAbroad) {
        updateData.reasonToStudyAbroad = reasonToStudyAbroad;
      }
      if (annualBudget) {
        updateData.annualBudget = Number(annualBudget);
      }
      if (currency) {
        updateData.currency = currency;
      }
      if (nationality) {
        updateData.nationality = nationality;
      }
      if (city) {
        updateData.city = city;
      }
      if (province) {
        updateData.province = province;
      }
      if (countryLivingIn) {
        updateData.countryLivingIn = countryLivingIn;
      }
      if (region) {
        updateData.region = region;
      }
      if (phone) {
        updateData.phoneNo = Number(phone);
      }
      if (address) {
        updateData.address = address;
      }
      if (postal) {
        updateData.postalCode = postal;
      }
      if (lastInstitution) {
        updateData.lastInstitution = lastInstitution;
      }
      if (lastEducationCountry) {
        updateData.lastEducationCountry = lastEducationCountry;
      }
      if (password && password2) {
        updateData.password = password;
        updateData.password2 = password2;
      }
      const response = await axios.put(
        `https://studyapi.ieodkv.com/students/${id}`,
        updateData
      );
      fetchData();
      setEdiable(false);
      console.log("response", response.data);
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  // Rest

  return (
    <>
      {data ? (
        <div className="account_containerWrap">
          <div className="acc_container">
            <div className="make-inline">
              <div className="account_head_left">
                <img
                  className="acc_prof_box_img"
                  src={profile}
                />{" "}
                <h1 className="acc_heading"> Your Profile</h1>
              </div>
              <div className="account_head_right">
                {ediable ? (
                  <div>
                    <button
                      className="update_btn"
                      onClick={() => {
                        handleSave(false);
                      }}
                    >
                      Update
                    </button>

                    <button
                      onClick={() => {
                        handleCancel();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      className="edi_btn"
                      onClick={() => setEdiable(true)}
                    >
                      Edit Info
                    </button>
                  </>
                )}
              </div>
            </div>

            <hr />
            <br />
            <div className="profile-details-wrap-ultra">
              <div className="profile-details-wrap">
                {/*  */}
                <br />
                <span>First name</span>
                {ediable ? (
                  <>
                    <input
                      type="text"
                      className="editable-input"
                      value={firstname}
                      placeholder={data.firstname}
                      name=""
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      id=""
                    />
                  </>
                ) : (
                  <h1>{data.firstname}</h1>
                )}
                {/*  */}
                <br />
                <span>Last name</span>
                {ediable ? (
                  <>
                    <input
                      type="text"
                      value={lastname}
                      className="editable-input"
                      placeholder={data.lastname}
                      name=""
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      id=""
                    />
                  </>
                ) : (
                  <h1>{data.lastname}</h1>
                )}
                {/*  */}
                <br />
                <span>Email</span>
                <h1>{data.email}</h1>
                {/*  */}
                <br />
                <span>Phone / Whatsaspp</span>
                {ediable ? (
                  <>
                    <input
                      type="text"
                      value={phone}
                      className="editable-input"
                      placeholder={data.phoneNo}
                      name=""
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      id=""
                    />
                  </>
                ) : (
                  <h1>{data.phoneNo}</h1>
                )}
                {/*  */}
                <br />
                <span>ID Number</span>
                <h1>{data.nic}</h1>
                {/*  */}

                <br />
                <span>Address / Postal</span>
                {ediable ? (
                  <>
                    <div className="half-input-profile-wrap">
                      <input
                        type="text"
                        value={address}
                        placeholder={data.address}
                        className="editable-input mt-2 mr-2"
                        onChange={(e) => setAddress(e.target.value)}
                        style={{ width: `${data.address + 2}ch` }}
                      />
                      <input
                        type="text"
                        value={postal}
                        placeholder={data.postalCode}
                        className="editable-input ml-0 mt-2"
                        onChange={(e) => setPostal(e.target.value)}
                        style={{ width: `${+5}ch` }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <br />
                    <h1>
                      {data.address}, {data.postalCode}
                    </h1>
                  </>
                )}

                {/*  */}

                <br />
                <span>City / Province / Country / Region</span>
                {ediable ? (
                  <>
                    <div className="half-input-profile-wrap">
                      <input
                        type="text"
                        value={city}
                        placeholder={data.city}
                        className="editable-input mb-1 mt-1 mr-2"
                        onChange={(e) => setCity(e.target.value)}
                        style={{ width: `${city.length + 4}ch` }}
                        maxLength={50}
                      />
                      <input
                        type="text"
                        value={province}
                        placeholder={data.province}
                        className="editable-input mb-1 mt-1  mr-2 "
                        onChange={(e) => setProvince(e.target.value)}
                        style={{ width: `${province.length + 4}ch` }}
                        maxLength={50}
                      />
                      <input
                        type="text"
                        value={countryLivingIn}
                        placeholder={data.countryLivingIn}
                        className="editable-input  mb-1 mt-1 mr-2"
                        onChange={(e) => setCountryLivingIn(e.target.value)}
                        style={{ width: `${countryLivingIn.length + 4}ch` }}
                        maxLength={50}
                      />
                      <input
                        type="text"
                        value={region}
                        placeholder={data.region}
                        className="editable-input  mb-1 mt-1"
                        onChange={(e) => setRegion(e.target.value)}
                        style={{ width: `${region.length + 2}ch` }}
                        maxLength={50}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <br />
                    <h1>
                      {data.city}, {data.province}, {data.countryLivingIn},{" "}
                      {data.region}
                    </h1>
                  </>
                )}

                {/*  */}

              </div>

              <div className="profile-details-wrap">
                <br />
                <span>Last institution</span>
                {ediable ? (
                  <>
                    <input
                      type="text"
                      value={lastInstitution}
                      className="editable-input"
                      placeholder={data.lastInstitution}
                      name=""
                      onChange={(e) => {
                        setLastInstitution(e.target.value);
                      }}
                      id=""
                    />
                  </>
                ) : (
                  <h1>{data.lastInstitution}</h1>
                )}

                <br />
                <span>Last Education Country</span>
                {ediable ? (
                  <>
                    <input
                      type="text"
                      value={lastEducationCountry}
                      className="editable-input"
                      placeholder={data.lastEducationCountry}
                      name=""
                      onChange={(e) => {
                        setLastEducationCountry(e.target.value);
                      }}
                      id=""
                    />
                  </>
                ) : (
                  <h1>{data.lastEducationCountry}</h1>
                )}

                <br />
                <span>Your gender</span>
                <h1>{data.gender}</h1>
                {/*  */}
                <br />
                <span>Country of nationality</span>
                {ediable ? (
                  <>
                    <div className="half-input-profile-wrap">
                      <input
                        type="text"
                        value={nationality}
                        placeholder={data.nationality}
                        className="editable-input"
                        onChange={(e) => setNationality(e.target.value)}
                        style={{ width: `${data.nationality.length + 10}ch` }}
                        maxLength={10}
                      />
                    </div>
                  </>
                ) : (
                  <h1>{data.nationality}</h1>
                )}
                {/*  */}
                <br />
                <span>Currency / Annual Budget</span>
                {ediable ? (
                  <>
                    <div className="half-input-profile-wrap">
                      <input
                        type="text"
                        value={currency}
                        placeholder={data.currency}
                        className="editable-input"
                        onChange={(e) => setCurrency(e.target.value)}
                        style={{ width: `${data.currency.length + 4}ch` }}
                        maxLength={10}
                      />
                      <input
                        type="text"
                        value={annualBudget}
                        placeholder={data.annualBudget}
                        className="editable-input ml-2"
                        onChange={(e) => setAnnualBudget(e.target.value)}
                        style={{ width: `${+10}ch` }}
                        maxLength={10}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <br />
                    <h1>
                      {data.currency} {data.annualBudget}
                    </h1>
                  </>
                )}

                {/*  */}
                <br />
                {/* <span>Change Password</span> */}
                {changePassword ? (
                  <>
                    <div className="half-input-profile-wrap mt-2" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <input
                        type="text"
                        value={password}
                        placeholder={"Enter current password"}
                        className="editable-input"
                        onChange={(e) => setPassword(e.target.value)}
                        // style={{ width: `${data.nationality.length + 10}ch` }}
                        maxLength={10}
                      />

                      <input
                        type="text"
                        value={password2}
                        placeholder={"Enter new password"}
                        className="editable-input mt-2"
                        onChange={(e) => setPassword2(e.target.value)}
                        // style={{ width: `${data.nationality.length + 10}ch` }}
                        maxLength={10}
                      />
                      <div className="flex">
                        <span onClick={() => handlePasswordChange()} style={{ cursor: 'pointer', background: 'var(--secondary-color)', color: 'white' }} className="mt-2 p-2 rounded " >Update</span>
                        <span onClick={() => setChangePassword(false)} style={{ cursor: 'pointer', color: 'black' }} className="mt-2 p-2 rounded " >Cancel</span>
                      </div>

                    </div>
                  </>
                ) : (
                  // <h1 className="flex mt-1" >
                  <span onClick={() => setChangePassword(true)} style={{ cursor: 'pointer', background: 'var(--primary-color)', color: 'white' }} className="p-2 rounded " >Change password ?</span>

                )}
              </div>
            </div>
          </div >
        </div >
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

export default Profile;
