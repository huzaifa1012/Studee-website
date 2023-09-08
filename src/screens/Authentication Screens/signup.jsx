import React, { useEffect, useState } from "react";
import "../../component/css storation/Login.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/sign in/your own dedicated advisor.png";
import image2 from "../../assets/sign in/In-depth-review-your-application.png";
import image3 from "../../assets/sign in/essential-guidance-and-reminders.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { countryCode } from '../../assets/CountryCodes'
import { setUserId } from "../../store/userIdSlice";
import { useDispatch } from "react-redux";
const Register = () => {
  const navigate = useNavigate();
  const gender = [{ name: "Male" }, { name: "Female" }, { name: "Other" }];
  const currencyArray = [
    { name: "PKR" },
    { name: "AED" },
    { name: "USD" },
    { name: "IND" },
    { name: "EUR" },
  ];
  const region = [
    { name: "Asia" },
    { name: "Africa" },
    { name: "Central America" },
    { name: "Middle East" },
    { name: "North America" },
    { name: "Pacific" },
    { name: "South America" },
  ];
  // to display error message
  const [error, setError] = useState("");

  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  // Country code starts
  // 
  // Country code ends

  const dispatch = useDispatch()

  // for drop downs
  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [AllProvinces, setAllProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [AllCities, setAllCities] = useState([]);

  async function fetchCountries() {
    const apiUrl = "https://studyapi.ieodkv.com/core-settings/country";

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      console.log('data CoUNTRY ', data)
      const countriesData = data.data.map((country) => ({
        code: country._id,
        name: country.name,
      }));
      setCountries(countriesData);

    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }
  async function fetchProvinces() {
    const apiUrl = "https://studyapi.ieodkv.com/core-settings/province";

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      const provincesData = data.data.map((province) => ({
        name: province.name,
        country: province.country,
        _id: province._id,
      }));
      // console.log(provincesData)
      setProvinces(provincesData);
      setAllProvinces(provincesData);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }
  async function fetchCities() {
    const apiUrl = "https://studyapi.ieodkv.com/core-settings/city";

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      const citiesData = data.data.map((city) => ({
        name: city.name,
        country: city.country,
        province: city.province,
        _id: city._id,
      }));
      setCities(citiesData);
      setAllCities(citiesData);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 characters")
      animateScroll.scrollToTop();
      return
    }
    if (!Fname || !Lname) {
      setError("Please enter your first & last name")
      animateScroll.scrollToTop();
      return
    }
    if (!email) {
      setError("Please enter your email")
      animateScroll.scrollToTop();
      return
    }
    console.log(
      Fname,
      Lname,
      email,
      phone,
      selectedGender,
      password,
      selectedRegion,
      selectedCountry,
      selectedNationality,
      selectedCurrency,
      selectedProvince,
      selectedCity
    );


    try {
      localStorage.setItem("email", email);
      const response = await axios.post(
        "https://studyapi.ieodkv.com/students/register",
        {
          firstname: Fname,
          lastname: Lname,
          email: email,
          phoneNo: selectedCountryCode + phone,
          password: password,
          nationality: selectedNationality,
          currency: selectedCurrency,
          gender: selectedGender,
          city: selectedCity,
          countryLivingIn: selectedCountry,
          region: selectedRegion,
          province: selectedProvince,
        }
      );
      const studentId = response.data._id;

      localStorage.setItem("id", studentId);
      const userId = localStorage.getItem("id");
      dispatch(setUserId(userId));

      console.log(response.data);
      navigate("/verification", { state: { fromForget: false } });
    } catch (error) {
      console.log("error", error.message);
      if (error.response) {
        console.log("message", error.response.data);
        setError(error.response.data);
        animateScroll.scrollToTop();
      }
    }
  };

  useEffect(() => {
    animateScroll.scrollToTop();

    fetchCountries();
    fetchProvinces();
    fetchCities();
  }, []);

  const handleGenderChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGender(selectedValue);
  };

  const handleRegionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedRegion(selectedValue);
  };

  const handleCurrencyChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCurrency(selectedValue);
  };
  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
    // setSelectedCountryCode(selectedValue)
    console.log(selectedValue)
    const country = countryCode.find(
      (item) => item.name.toLowerCase() === selectedValue.toLowerCase()
    );
    console.log(country)
    setSelectedCountryCode(country.dial_code)


  };

  // Here I'm saving only those specific provinces in the province dropdown those are in selected country
  useEffect(() => {
    const ProvincesForSelectedCountry = AllProvinces.filter(data => data.country.toLowerCase() === selectedCountry.toLowerCase())
    setProvinces(ProvincesForSelectedCountry)
    console.log(ProvincesForSelectedCountry)
  }, [selectedCountry])


  useEffect(() => {
    const CitiesForSelectedProvince = AllCities.filter(data => data.province.toLowerCase() === selectedProvince.toLowerCase())
    console.log(CitiesForSelectedProvince)
    setCities(CitiesForSelectedProvince)
  }, [selectedProvince])

  function handleProvinceChange(event) {
    setSelectedProvince(event.target.value);
  }
  const handleNationalityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedNationality(selectedValue);
  };
  function handleCityChange(event) {
    setSelectedCity(event.target.value);
  }

  // Phone
  const PHhandleCountryChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };


  return (
    <div className="login_container_wrap">
      <div className="login_container">
        <div className="login_form">
          <h2>Create your free account</h2>

          <p>
            Just enter a few details and we'll create your free Studee account.
            We'll also send you regular expert tips on applying, visas,
            scholarships and more, straight to your inbox.
          </p>

          <i>
            {error ? (
              <p style={{ color: "red" }}> {error} </p>
            ) : (
              <p className="ltc"> *required information</p>
            )}
          </i>

          <form onSubmit={handleRegister} onChange={() => setError("")}>
            <div className="login_input_group">
              <label htmlFor="username" className="lable_in_signup_screen">
                First name *
              </label>
              <input
                type="text"
                id="username"
                placeholder="Your first name"
                className="login_input"
                onChange={(e) => {
                  setFName(e.target.value);
                }}
              />
            </div>

            <div className="login_input_group">
              <label htmlFor="password" className="lable_in_signup_screen">
                Last name *
              </label>
              <input
                type="text"
                id="password"
                placeholder="Your last name"
                className="login_input"
                onChange={(e) => {
                  setLName(e.target.value);
                }}
              />
            </div>

            <div className="login_input_group">
              <label htmlFor="password" className="lable_in_signup_screen">
                Email address *
              </label>
              <input
                type="text"
                id="password"
                className="login_input"
                name="email"
                placeholder="Enter email address"

                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <span className="ltc">
                We'll send you an activation code to your email.
              </span>
            </div>
            {/* 
            <div className="login_input_group">
              <label htmlFor="password" className="lable_in_signup_screen">
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="login_input"
                name="email"
                placeholder="Enter email address"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <span className="ltc">
                We'll send you an activation code to your email.
              </span>
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
            </div>


            {/* <div className="login_input_group">
              <label htmlFor="password" className="lable_in_signup_screen">
                Phone No *
              </label>
              <input
                type="number"
                // id="password"
                className="login_input"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div> */}

            {/* <div className="login_input_group">
              <label htmlFor="phone" className="label_in_signup_screen">
                Phone No *
              </label>
              <div className="phone_input_container">
                <select
                  value={selectedCountry}
                  onChange={PHhandleCountryChange}
                  style={{ background: 'none', textAlign: 'center' }}
                  className="phone_input_select p-1.5"
                >
                  {countryCode.map((data, index) => {
                    return (
                      <>
                        <option className="login_input" value={data.dial_code} style={{ maxWidth: '100px' }} >{data.dial_code}</option>
                      </>
                    )
                  })}
                </select>
                <input
                  type="text"
                  id="phone"
                  className="phone_input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div> */}

            <div className="login_input_group">
              <label htmlFor="country" className="lable_in_signup_screen">
                Country living in *
              </label>
              <select
                id="country"
                className="login_input signup_countries_dropdown"
                onChange={handleCountryChange}
                value={selectedCountry}
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <p>Selected Country: {selectedCountry}</p>
            </div>
            <div className="login_input_group">
              <label htmlFor="phone" className="label_in_signup_screen">
                Phone No *
              </label>
              <div className="phone_input_container">
                <input
                  type="text"
                  list="countryCodes"
                  value={selectedCountryCode}
                  placeholder="+"
                  onChange={PHhandleCountryChange}
                  className="country_select phone_input_select p-1.5"
                  style={{ background: 'none', textAlign: 'center' }}

                />
                <datalist id="countryCodes">
                  {countryCode.map((data, index) => (
                    <option key={index} value={data.dial_code}>
                      {data.dial_code}
                    </option>
                  ))}
                </datalist>
                <input
                  type="text"
                  id="phone"
                  className="phone_input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>


            </div>


            <div className="login_input_group">
              <label htmlFor="gender" className="lable_in_signup_screen">
                Gender *
              </label>
              <select
                id="gender"
                className="login_input signup_countries_dropdown"
                onChange={handleGenderChange}
                value={selectedGender}
              >
                <option value="">Select Gender</option>
                {gender.map((data) => (
                  <option key={data.name} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </select>
              <p>Selected Gender: {selectedGender}</p>
            </div>

            <br />

            <div className="login_input_group">
              <label htmlFor="country" className="lable_in_signup_screen">
                Region
              </label>
              <select
                id="country"
                className="login_input signup_countries_dropdown"
                onChange={handleRegionChange}
                value={selectedRegion}
              >
                <option value="">Select region</option>
                {region.map((data) => (
                  <option key={data.code} value={data.code}>
                    {data.name}
                  </option>
                ))}
              </select>
              {/* You can display the selected region value elsewhere in your component */}
              <p>Selected Region: {selectedRegion}</p>
            </div>

            <div className="login_input_group">
              <label htmlFor="country" className="lable_in_signup_screen">
                Nationality *
              </label>
              <span className="ltc country_of_nationality_p">
                For dual nationality, enter the most relevant country of
                nationality for the program you want to apply for
              </span>
              <select
                id="country"
                className="login_input signup_countries_dropdown"
                onChange={handleNationalityChange}
                value={selectedNationality}
              >
                <option value="">Select Nationality</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <p>Selected Nationality: {selectedNationality}</p>
            </div>

            <div className="login_input_group">
              <label htmlFor="country" className="lable_in_signup_screen">
                Currency You Use *
              </label>
              <select
                id="country"
                className="login_input signup_countries_dropdown"
                onChange={handleCurrencyChange}
                value={selectedCurrency}
              >
                <option value="">Select a country</option>
                {currencyArray.map((currency) => (
                  <option key={selectedCurrency.name} value={currency.name}>
                    {currency.name}
                  </option>
                ))}
              </select>
              <p>Selected Currency: {selectedCurrency}</p>
            </div>

            <div className="login_input_group">
              <label htmlFor="province" className="lable_in_signup_screen">
                Province
              </label>
              <select
                id="province"
                className="login_input"
                onChange={handleProvinceChange}
                value={selectedProvince}
              >
                <option value="">Select a province</option>
                {provinces.map((province) => (
                  <option key={province._id} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
              <br />
            </div>

            {/* <div className="login_input_group">
              <label htmlFor="city" className="lable_in_signup_screen">
                City
              </label>
              <select
                id="city"
                className="login_input"
                onChange={handleCityChange}
                value={selectedCity}
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city._id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <br />
            </div> */}
            <div className="login_input_group">
              <label htmlFor="city" className="label_in_signup_screen">
                City
              </label>
              <input
                type="text"
                id="city"
                className="login_input"
                onChange={handleCityChange}
                value={selectedCity}
                placeholder="Select or enter city name  "
                list="cityOptions"
              />
              <datalist id="cityOptions">
                {cities
                  .filter((city) => city.name.toLowerCase().includes(selectedCity.toLowerCase()))
                  .map((city) => (
                    <option key={city._id} value={city.name} />
                  ))}
              </datalist>
              <br />
            </div>

            <div className="login_card_bottom">
              <br />
              <button type="submit" className="login_button">
                Create your account
              </button>
            </div>
          </form>
        </div>

        <div className="login_register_box">
          <div className="login_register_box_main">
            <h3>Already have an account?</h3>
            <p>Sign in and continue your study abroad journey</p>
            <Link to="/login">
              <button className="login_register_button">Sign in</button>
            </Link>
          </div>
          <div className="login_register_box_main border-t-2 ">
            <h3>
              When you apply via Studee, we can maximize your chance of getting
              admitted
            </h3>
            <div className="Register_side_box_wrap">
              <div className="Register_individual_side_box">
                <img src={image1} alt="" />
                <div>
                  <h3 className="mtc">Your own dedicated advisor</h3>
                  <p className="ltc">
                    Sign in and continue your study abroad journey
                  </p>
                </div>
              </div>
              <div className="Register_individual_side_box">
                <img src={image2} alt="" />
                <div>
                  <h3 className="mtc">In-depth review of your application</h3>
                  <p className="ltc">
                    We ensure your application has the best chance of being
                    accepted
                  </p>
                </div>
              </div>
              <div className="Register_individual_side_box">
                <img src={image3} alt="" />
                <div>
                  <h3 className="mtc">Essential guidance & reminders</h3>
                  <p className="ltc">
                    Get clarity on exactly what needs to be done and when
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Register;
