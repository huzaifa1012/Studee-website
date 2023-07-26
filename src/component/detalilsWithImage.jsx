import React from "react";
import "./detailsWithImage.css";

function DetalilsWithImage({ imageUrl, heading, body, linkText, linkUrl, paragraph2 }) {
  return (
    <div className="detailsWith_image-section">
      <div className="detailsWith_image-content">
        <div className="detailsWith_image-text">
          <h1 className="detailsWith_image-heading">{heading}</h1>
          <div className="detailsWith_image-body_subHeading">
          {body}
          <br />
            {paragraph2 && paragraph2}
          </div>
          <br />
          <br />
          <a href={linkUrl} className="detailsWith_image-link">
            {linkText}
          </a>
        </div>
        <div className="detailsWith_image-image">
          <img src={imageUrl} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default DetalilsWithImage;