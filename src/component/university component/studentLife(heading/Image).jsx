import React from "react";
import "./StudentLifeGalleryAndHeading.css";
const StudentLifeGalleryAndHeading = ({ title, image }) => {
  return (
    <>
      <br />
      <br />
      <div className="StudentLifeGalleryAndHeading_Wrap">
        <div className="StudentLifeGalleryAndHeading_main">
          <h1 className="tree_hero-heading">{title}</h1>
          <img src={image} />
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default StudentLifeGalleryAndHeading;
