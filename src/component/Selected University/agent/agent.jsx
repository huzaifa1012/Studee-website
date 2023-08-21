import React from "react";
import "./agent.css";
const Agent = ({ data, uniName }) => {
  console.log(data)
  return (
    <div>
      <div className="co-founders-wrap ltc  ">
        <div className="abt-box center ">
          <h3 className="mb-5">Hire an agent for {uniName}</h3>
          <hr />
          <br />
          <br />
        </div>
        <div className="co-founders">
          {data && data.map((item, index) => {
            return (
              <>
                <div className="founder">
                  <img
                    className="agenImage"
                    src={
                      `https://studyapi.ieodkv.com/members/images/${item.image}`
                    }
                    alt=""
                  />
                  <h4 className="agent_h4">{item.username}</h4>
                  <p>{item.phoneNo}</p>
                </div>
              </>
            )
          })
          }

        </div>
      </div>
    </div>
  );
};
export default Agent;
