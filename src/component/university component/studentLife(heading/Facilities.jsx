import React from "react";
import "./StudentLifeGalleryAndHeading.css";
const StudentLifeGalleryAndHeading = ({ title, image, facilities }) => {
  return (
    <>
      <div className="facilities_Main_wrap">
        <div className="facilities_Main">
          <br />
          <br />
          <div className="StudentLifeGalleryAndHeading_Wrap">
            <div className="StudentLifeGalleryAndHeading_main">
              <h1 className="tree_hero-heading">{title}</h1>
              <img src={image} />
            </div>

          </div>
          <div className="Facil_box_wrap">

            {facilities && facilities.map((data, index) => {
              console.log(facilities)
              return (
                <>
                  <div className="Facil_box">
                    <img src={`https://studyapi.ieodkv.com/facilities/images/${data.image}`} alt="" />
                    <h2>{data.name}</h2>
                  </div>

                </>)
            })}

          </div>
        </div>

      </div>
      <br />

      <br />
    </>
  );
};

export default StudentLifeGalleryAndHeading;
