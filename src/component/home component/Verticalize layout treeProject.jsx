import React from "react";
import "./treesProject.css";

function VerticalizeTreeProjectComponent({
  imageUrl,
  heading,
  paragraph,
  linkText,
  linkUrl,
}) {
  return (
    <div className="tree_hero-section">
      <div className="tree_hero-content vertical_tree_hero-content">
        <div className="tree_hero-text">
          <h1 className="tree_hero-heading">{heading}</h1>
          <p className="tree_hero-paragraph">{paragraph}</p>
          <br />
          <br />
          <a href={linkUrl} className="tree_hero-link">
            {linkText}
          </a>
        </div>
        <div className="tree_hero-image">
          <img src={imageUrl} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default VerticalizeTreeProjectComponent;
