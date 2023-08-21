import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import female1 from "../../assets/testomonial images/female1.png"
import female2 from "../../assets/testomonial images/female2.png"
import male1 from "../../assets/testomonial images/male1.png"
import axios from "axios";
import parse from "html-react-parser";

const Testimonial = () => {

  const [data, setData] = useState('')

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(
        "https://studyapi.ieodkv.com/content/page/testimonals"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching testimonials :", error);
    }
  };
  useEffect(() => {
    fetchTestimonials()
  }, [])
  return (
    <>
      {data &&
        <div className="testimonial-container-wrap">
          <div className="testimonial-container">
            <div className="testimonial_left">
              <h1>
                {parse(data.description)}
              </h1>
            </div>
            <div className="testimonial_right">
              <div className="testimonial_card">
                <div className="testimonial_head">
                  <img
                    src={`https://studyapi.ieodkv.com/content/images/${data.heading[0].image}`}
                    alt=""
                    title="Ex studet of IEO from Honduras"

                  />
                  <div>
                    <h2>{parse(data.heading[0].headingName)}</h2>
                    {/* <h3>Honduras</h3> */}
                    {/* <p className="ltc">Kent State University</p> */}
                  </div>
                </div>
                <div className="testimonial_body">
                  <p className="ltc">
                    <br />
                    {parse(data.heading[0].contentText)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-container">
            <div className="testimonial_right">
              <div className="testimonial_card">
                <div className="testimonial_head">
                  <img
                    src={`https://studyapi.ieodkv.com/content/images/${data.heading[1].image}`}
                    alt=""
                    title="Ex studet of IEO from Honduras"

                  />
                  <div>
                    <h2>{parse(data.heading[1].headingName)}</h2>
                    {/* <h3>Honduras</h3> */}
                    {/* <p className="ltc">Kent State University</p> */}
                  </div>
                </div>
                <div className="testimonial_body">
                  <p className="ltc">
                    <br />
                    {parse(data.heading[1].contentText)}
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial_right">
              <div className="testimonial_card">
                <div className="testimonial_head">
                  <img
                    src={`https://studyapi.ieodkv.com/content/images/${data.heading[2].image}`}
                    alt=""
                    title="Ex studet of IEO from Honduras"

                  />
                  <div>
                    <h2>{parse(data.heading[2].headingName)}</h2>
                    {/* <h3>Honduras</h3> */}
                    {/* <p className="ltc">Kent State University</p> */}
                  </div>
                </div>
                <div className="testimonial_body">
                  <p className="ltc">
                    <br />
                    {parse(data.heading[2].contentText)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  );
};
export default Testimonial;
