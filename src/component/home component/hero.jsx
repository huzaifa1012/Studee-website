import React, { useEffect, useState } from "react";
import "./hero.css";
import parse from "html-react-parser";

import heroImage2 from "../../assets/new-project.png";
import heroImage3 from "../../assets/heroimge3.png";
import heroImage from "../../assets/illustration__feature--homepage-hero.avif";
import clgStude from "../../assets/college-students-pana.png";
import { BiRightArrowAlt } from "react-icons/bi";
import ViewProgMod from "../Reusable components/program_Modal";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Hero = ({ data }) => {
  // modal code starts here
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [location, setLocation] = useState();
  const [subject, setSubject] = useState();

  const [subjectFor, setSubjectFor] = useState("");
  const [locationFor, setLocationFor] = useState("");

  // These states added when i change my hero options into input 
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);


  const navigate = useNavigate();
  const id = useSelector((state) => state.userId);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // modal code ends

  useEffect(() => {
    axios
      .get(`https://studyapi.ieodkv.com/popular/locations`)
      .then((response) => {
        setLocationData(response.data);
      })
      .catch((error) => console.log(error));
    axios
      .get(`https://studyapi.ieodkv.com/popular/subjects`)
      .then((response) => {
        setSubjectData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParameters = [];
    let url = "/search-programs/";
    if (locationFor) {
      console.log(locationFor);
      searchParameters.push(locationFor);
    }
    if (subject) {
      searchParameters.push(subjectFor);
    }
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (id) {
      axios
        .put(`https://studyapi.ieodkv.com/students/${id}`, {
          searchParameters: searchParameters,
        }, config)
        .then((response) => {
          if (locationFor) {
            const formattedLocation = location
              ? location.toLowerCase().replace(/\s+/g, "-")
              : null;
            url += `?${locationFor.field}=${encodeURIComponent(
              formattedLocation
            )}`;
          }

          if (subject) {
            const formattedSubject = subject
              ? subject.toLowerCase().replace(/\s+/g, "-")
              : null;
            url += `${locationFor ? "&" : "?"}subject=${encodeURIComponent(
              formattedSubject
            )}`;
          }

          // Navigate to the new page
          setLocation("");
          setSubject("");
          navigate(url);
        })
        .catch((error) => console.log(error));

      axios
        .post(`https://studyapi.ieodkv.com/popular`, {
          subject: subjectFor,
          location: locationFor,
        })

        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post(`https://studyapi.ieodkv.com/popular`, {
          subject: subjectFor,
          location: locationFor,
        })

        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      if (locationFor) {
        const formattedLocation = location
          ? location.toLowerCase().replace(/\s+/g, "-")
          : null;
        url += `?${locationFor.field}=${encodeURIComponent(formattedLocation)}`;
      }

      if (subject) {
        const formattedSubject = subject
          ? subject.toLowerCase().replace(/\s+/g, "-")
          : null;
        url += `${locationFor ? "&" : "?"}subject=${encodeURIComponent(
          formattedSubject
        )}`;
      }

      localStorage.setItem(`${locationFor.field}`, locationFor.name);

      localStorage.setItem(`${subjectFor.field}`, subjectFor.name || null);

      // Navigate to the new page
      setLocation("");
      setSubject("");
      navigate(url);
    }
  };

  return (
    <div className="main-hero_wrap">
      {data && (
        <div className="hero_container">
          <div className="hero_left_div">
            {data.headingName && parse(`${data.headingName}`)}

            {data.contentText &&
              parse(`
  ${data.contentText}
  `)}
          </div>

          <div className="hero_right_div">
            {data.image ? (
              <img
                src={`https://studyapi.ieodkv.com/content/images/${data.image}`}
                alt=""
                className="hero-right-img"
              />
            ) : (
              <div className="custom-shader hero-right-img"></div>
            )}
          </div>

          <form className="hero_user-input-section" onSubmit={handleSearch}>

            <div className="theHero_label">
              <p className="mtc hero_labelP">Location</p>

              <input
                type="text"
                placeholder="Enter a country, campus or university"
                className="hero_inpbox-style"
                value={location}
                onChange={(e) => {
                  const enteredValue = e.target.value;
                  setLocation(enteredValue);

                  if (enteredValue.trim() === '') {
                    setFilteredLocations([]); // Clear the filtered locations
                  } else {
                    const locationFilter = locationData.filter(
                      (row) =>
                        row.name.toLowerCase().includes(enteredValue.toLowerCase()) ||
                        row.showName.toLowerCase().includes(enteredValue.toLowerCase())
                    );
                    setFilteredLocations(locationFilter);
                  }
                }}
              />

              {filteredLocations.length > 0 && location.trim() !== '' && (
                <div className="main_hero_option_box">
                  {filteredLocations.map((row) => (
                    <div
                      key={row.name}
                      className="main_hero_option"
                      style={{ fontSize: 18, cursor: "pointer" }}
                      onClick={() => {
                        setLocation(row.name);
                        setLocationFor({
                          field: row.for,
                          name: row.name,
                        });
                        setFilteredLocations([]); // Clear the filtered locations
                      }}
                    >
                      {row.showName.slice(0, 30)}
                    </div>
                  ))}
                </div>
              )}
            </div>




            <div className="theHero_label">
              <p className="mtc hero_labelP">Subject</p>

              <input
                type="text"
                placeholder="Enter a subject"
                className="hero_inpbox-style"
                value={subject}
                onChange={(e) => {
                  const enteredValue = e.target.value;
                  setSubject(enteredValue);

                  if (enteredValue.trim() === '') {
                    setFilteredOptions([]); // Clear the filtered options
                  } else {
                    const subjectFilter = subjectData.filter(
                      (row) => row.name.toLowerCase().includes(enteredValue.toLowerCase())
                    );
                    setFilteredOptions(subjectFilter);
                  }
                }}
              />

              {filteredOptions.length > 0 && subject.trim() !== '' && (
                <div className="main_hero_option_box">
                  {filteredOptions.map((row) => (
                    <div
                      key={row.name}
                      className="main_hero_option"
                      style={{ fontSize: 18, cursor: "pointer" }}
                      onClick={() => {
                        setSubject(row.name);
                        setSubjectFor({
                          field: row.for,
                          name: row.name,
                        });
                        setFilteredOptions([]); // Clear the filtered options
                      }}
                    >
                      {row.name.slice(0, 30)}
                    </div>
                  ))}
                </div>
              )}
            </div>


            <div className="heroBtnCover">
              <button
                name=""
                id=""
                className="hero_btn"
              // onClick={() => setIsModalOpen(true)}
              // onClick={() => handleSearch()}
              >
                Find Your Perfect Program
                <BiRightArrowAlt className="heroBtnIcon" size={25} />
              </button>
            </div>
          </form>
          <div className="studee_home_hero_bottom ltc">
            <p>
              {/* Promote your university to students worldwide. <u> Learn more </u> */}
            </p>
          </div>
        </div>
      )}
      <ViewProgMod isModalOpen={isModalOpen} onClose={handleCancel} />
    </div>
  );
};

export default Hero;
