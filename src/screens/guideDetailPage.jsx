import React from "react";
import GuideDetailHero from "../component/guides component/gude_details_hero.jsx";
import GuideDetailBody from "../component/guides component/gude_details_body.jsx";
import Whystudee from "../component/home component/whystudee.jsx";
const GuideDetailPage = () => {
  return (
    <>
      <GuideDetailHero
        background={
          "https://images.studee.com/images/guide/guides__how-to-apply-for-an-australia-student-visa.jpg?ixlib=js-2.3.2&auto=format&fit=crop&q=35&fallback=true&w=1920&h=640&blend=%2Ftreatments%2Ftreatment__split-tone-with-overlay.jpg&blend-size=inherit&blend-mode=multiply&blend-alpha=80"
        }
        heading={"How to apply for an Australia student visa"}
      />
      <GuideDetailBody
        desciption={
          "There are a number of reasons why studying abroad as a graduate can be an incredibly valuable experience. Whether you want to achieve a master’s, or doctorate, here’s why studying for a postgraduate degree overseas is an excellent idea."
        }
        body={
          <div className="guide_detail_bodySection">
            <h1>Boost your employability</h1>
            <p>
              Studying overseas as a graduate can help you stand out from the
              crowd when it comes to applying for jobs. As the world is becoming
              more connected, an increasing number of employers are looking for
              specialist candidates with overseas experience, so studying abroad
              can be a great way to bolster your career prospects.
              <br />
              <br />
              The thought of studying abroad can seem daunting but it can pay
              off massively. Employers will see that you can step outside your
              comfort zone and adapt to new surroundings, which is a highly
              sought-after quality in the world of work.
              <br />
              <br />
              You may be eligible to work as an international student depending
              on the country you choose to study in. Overseas work experience
              will help you develop your intercultural skills and make you a
              more attractive candidate when it's time to start your career.
              You’ll also be interacting with people from around the world,
              giving you the chance to expand your professional connections and
              <br />
              develop meaningful relationships, which can be incredibly useful
              throughout your personal and work life.
            </p>
            <h1>Earn more money</h1>
            <p>
              Research from across the world shows that people with postgraduate
              degrees tend to earn higher salaries compared to those that don’t.
              <br />
              <br />
              The Higher Education Policy Institute found that on average,
              postgraduates earn 18% more than those who only hold undergraduate
              <br />
              degrees. Not only will you have a postgraduate degree when you
              graduate, but you will also have international experience, which
              is highly desirable in the world of work. You’ll put yourself
              ahead of the competition and in line for a tidy salary.
            </p>
            <h1>Continue studying</h1>
            <p>
              If you enjoyed your time as an undergraduate student and want to
              carry on studying after graduation, then pursuing a postgraduate
              degree abroad is a great idea. Not only will you be able to carry
              on studying but you’ll also get to do it in an exciting new
              setting.
              <br />
              <br />
              Graduate-level coursework typically requires you to think
              critically and out of the box to solve complex problems. If you
              love being academically challenged and stimulated, a postgraduate
              degree could be the perfect thing to do.
            </p>
            <h1>Explore a new country</h1>
            <p>
              Pursuing a graduate program in a different country is a great
              opportunity to expand your horizons in ways you might not have
              thought possible. It’s a fantastic opportunity to:
              <br />
              <br />
            </p>
            <ul>
              <li>Meet people from around the world</li>
              <li>Try new cuisines</li>
              <li>Experience different cultures</li>
              <li>Enjoy different climates</li>
            </ul>
            <br />
            <p>
              Living overseas can be a truly life-changing experience as it’ll
              allow you to gain unique insights and perspectives that you simply
              cannot find at home.
              <br />
              <br />
              If you want to study for a postgraduate degree and also love
              traveling, then studying a graduate program abroad could be the
              right thing for you.
            </p>
            <h1>Learn a language</h1>
            <p>
              Whether you’re looking to{" "}
              <span className="dtc">
                {" "}
                <b> improve your existing language </b>
              </span>{" "}
              skills or learn entirely new ones, studying for a postgraduate
              degree abroad is a great way to gain valuable linguistic skills.
              <br />
              <br />
              Not only will learning a new language give you a better
              understanding of the culture and society you’re living in, but it
              can also help you build lasting friendships and relationships with
              the locals.
              <br />
              <br />
              It can also be very beneficial in your professional life,
              especially if you decide to work overseas or for an international
              company where multi-lingual abilities are very much desired.
            </p>
          </div>
        }
      />
      <hr />
      <Whystudee />
    </>
  );
};

export default GuideDetailPage;
