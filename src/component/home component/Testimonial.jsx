import React from "react";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <>
      <div className="testimonial-container-wrap">
        <div className="testimonial-container">
          <div className="testimonial_left">
            <h1>
              180,000 international students started their journey through
              Studee
            </h1>
          </div>
          <div className="testimonial_right">
            <div className="testimonial_card">
              <div className="testimonial_head">
                <img
                  src="https://images.studee.com/images/testimonial/testimonial__calebina-espinoza.jpg?ixlib=js-2.3.2&auto=format&w=88&h=88&q=45&fit=crop&crop=faces,entropy"
                  alt=""
                />
                <div>
                  <h2>Calebina Espinoza</h2>
                  <h3>Honduras</h3>
                  <p className="ltc">Kent State University</p>
                </div>
              </div>
              <div className="testimonial_body">
                <p className="ltc">
                  <br />
                  <q>
                    I would like to thank my International Admission Advisor
                    (Nastassja) for her moral support and the excellent,
                    outstanding service she has provided towards my application
                    and requirements.
                  </q>
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
                  src="https://images.studee.com/images/testimonial/testimonial__jovana-andjelkovic.jpg?ixlib=js-2.3.2&auto=format&w=88&h=88&q=45&fit=crop&crop=faces,entropy"
                  alt=""
                />
                <div>
                  <h2>Jovana Andjelkovic</h2>
                  <h3>Serbia</h3>
                  <p className="ltc">Texas State University</p>
                </div>
              </div>
              <div className="testimonial_body">
                <p className="ltc">
                  <br />
                  <q>
                    I have an excellent experience with Studee especially with
                    my coordinators Cecilia Piedra and Michael Galarza. They
                    were there for me from the being till the end during the
                    whole process even when I was applying for my visa! They
                    were always responding to my emails and contacted me via
                    phone, always had good advice and were very helpful. The
                    whole process was overwhelming, from time to time confusing,
                    but with them on my side everything went smoothly. I would
                    gladly recommend them to anyone who is thinking of
                    furthering their education.
                  </q>
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial_right">
            <div className="testimonial_card">
              <div className="testimonial_head">
                <img
                  src="https://images.studee.com/images/testimonial/testimonial__corey-tate.jpg?ixlib=js-2.3.2&auto=format&w=88&h=88&q=45&fit=crop&crop=faces,entropy"
                  alt=""
                />
                <div>
                  <h2>Corey Tate</h2>
                  <h3>United States of America</h3>
                  <p className="ltc">Kent State University</p>
                </div>
              </div>
              <div className="testimonial_body">
                <p className="ltc">
                  <br />
                  <q>
                    I recall checking the Studee website in my search for a post
                    graduate degree to study and like any other form, filling my
                    contact details, what really surprised me was the level of
                    commitment from the staff to ensuring that I was on the
                    right track with my application and enrollment.
                  </q>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
