import React from 'react';
import './BrowseByCountry.css';

const BrowseByCountry = ({ heading,countries }) => {
  return (
    <div className="browseByCountry_wrap">
      <div className="browseByCountry_main">
        <div className="browseByCountry_head">
          <h1 className="mtc">{heading}</h1>
        </div>
        <div className="browseByCountry_body">
          {countries.map((country, index) => (
            <div
              key={index}
              className="browseByCountry_card"
              style={{
                backgroundImage: `url(${country.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'multiply',
                blendAlpha: 80,
              }}
            >
              <h2>{country.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByCountry;
