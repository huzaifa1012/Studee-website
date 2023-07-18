import React from "react";
import "./agent.css";
const Agent = () => {
  return (
    <div>
      {/* <h2>{name}</h2> */}
      <div className="co-founders-wrap ltc  ">
        <div className="abt-box center ">
          <h3>Hire An Agent</h3>
          <p className="boldisnga">Leading the Way with Vision and Expertise</p>
          <p>
            The Breakaway Co-Founders Are Driving Success in the Delivery
            Industry.
          </p>

          <hr />
          <br />
          <br />
        </div>
        <div className="co-founders">
          <div className="founder">
            <img
            className="agenImage"
              src={
                "https://media.licdn.com/dms/image/C4E03AQE30YXm923OYA/profile-displayphoto-shrink_800_800/0/1630809681285?e=2147483647&v=beta&t=SvpFq8IqgatSEc9tsKdYvg9uvDlTph61q_HGBa9BJaA"
              }
              alt=""
            />
            <h4 className="agent_h4">John Doe</h4>
            <p>lorem ipsum dolor te</p>
          </div>
          <div className="founder">
            <img
            className="agenImage"
              src={
                "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"
              }
              alt=""
            />
            <h4 className="agent_h4">Lina angelin</h4>
            <p>lorem ipsum dolor te</p>
          </div>
          <div className="founder">
            <img
            className="agenImage"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgvXcdf2lN61vYKYqCFEEkHru1_Pnorn9_Q&usqp=CAU"
              }
              alt=""
            />
            <h4 className="agent_h4">Waseem Khan</h4>
            <p>lorem ipsum dolor te</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Agent;
