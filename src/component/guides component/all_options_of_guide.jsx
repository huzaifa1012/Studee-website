import React from "react";
import "./guides.css";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";


const AllOptionsOfGuide = () => {
  const handleNavigation = () => {
    animateScroll.scrollToTop();
  };
  return (
    <>
      <div className="guide_wrap">
        <div className="guide_main">
          <div className="guide_section_header_text_wrap">
            <div className="guide_section_header_text">
              <h1>Guides</h1>
            </div>
          </div>
          <div className="guide_head">
            <h1 className="mtc">1. Deciding to study abroad</h1>
          </div>
          <div className="guide_body">
            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__8-studying-abroad-myths-to-ignore.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>8 studying abroad myths to ignore</h2>
                <p className="ltc">
                  Here are the most common study abroad misconceptions to avoid.
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__culture-shock-for-international-students.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>Culture shock for international students</h2>
                <p className="ltc">
                  Know how to tackle culture shock during study abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__how-to-look-after-your-mental-health-as-an-international-student.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>
                  How to look after your mental health as an international
                  student
                </h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__reasons-to-study-abroad-as-a-graduate.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>Reasons to study abroad as a graduate</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__the-benefits-of-studying-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>The benefits of studying abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__why-the-usa-is-the-most-popular-study-abroad-country.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>The best countries to study abroad as an Indian student</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>
            <div className="guide_head mt-20">
              <h1 className="mtc">2. Choosing a university</h1>
            </div>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__why-the-usa-is-the-most-popular-study-abroad-country.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>Why the USA is the most popular study abroad country</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__why-you-should-study-abroad-in-2022.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>Why you should study abroad in 2022</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__toefl-vs-ielts-for-study-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>
          </div>
          <hr />
          <div className="guide_head mt-20">
            <h1 className="mtc">2. Choosing a program</h1>
          </div>
          <div className="guide_body">
            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__10-reasons-you-should-study-a-postgrad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__how-to-choose-what-to-study-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__how-to-improve-your-language-skills.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__most-popular-subjects-for-international-students.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__online-vs-on-campus-study-which-is-right-for-you.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__taught-v-research-which-masters-will-you-choose.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__the-most-popular-subjects-for-indian-students-to-study-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__types-of-postgraduate-degrees.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__types-of-undergraduate-degrees.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>
          </div>
          <hr />
          <div className="guide_head mt-20">
            <h1 className="mtc">4. Application process</h1>
          </div>
          <div className="guide_body">
            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__6-university-application-mistakes-to-avoid.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>6 university application mistakes to avoid</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__how-to-study-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__how-to-study-abroad-with-studee.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__how-to-write-a-personal-statement-as-an-international-student.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>6 university application mistakes to avoid</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__top-tips-for-a-successful-international-university-application.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__grants-for-international-students-studying-in-the-us.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__6-university-application-mistakes-to-avoid.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>6 university application mistakes to avoid</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__how-to-study-abroad.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>

            <Link to="/guide-detail-page" onClick={handleNavigation} className="guide_card">
              <img
                src="https://images.studee.com/images/guide/guides__top-tips-for-university-interviews.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=25&h=450&w=666&blend=%2Ftreatments%2Ftreatment__split-tone.jpg&blend-size=inherit&blend-mode=overlay&blend-alpha=20"
                alt=""
              />
              <div className="guide_card_bottom">
                <h2>TOEFL vs IELTS for study abroad</h2>
                <p className="ltc">
                  Here's how to look after yourself mentally when studying
                  abroad
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOptionsOfGuide;
