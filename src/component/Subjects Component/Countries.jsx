import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Countries = ({ id, name, countryDescription }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`https://studyapi.ieodkv.com/subjects/country/${id}`)
            .then((response) => {
                setCountries(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    if (loading) {
        return <CircularProgress />;
    } else if (countries.length > 0) {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div className="browseByCountry_main " style={{ width: '90%' }}>
                    <div className="browseByCountry_head">
                        <h1 className="mtc">Best countries to study {name}</h1>
                    </div>
                    <p>

                        <div
                            className="section-content ltc "
                            dangerouslySetInnerHTML={{
                                __html: countryDescription,
                            }}></div>

                    </p>
                    <div className="browseByCountry_body">
                        {countries?.map((country, index) => (
                            <Link
                                to={`/${country.urlName}`}
                                onClick={() => handleNavigation(country)}
                                className="browseByCountry_card"
                                key={index}
                                style={{
                                    backgroundImage: `url(https://studyapi.ieodkv.com/countries/images/${country.countryImage})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundBlendMode: "multiply",
                                    blendAlpha: 80,
                                }}
                            >
                                <h2>{country.name}</h2>
                            </Link>
                        ))}

                    </div>
                </div>

            </div>

            // <div className="tree_hero-section" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
            //     <h3 className="tree_hero-heading">Best countries to study {name}</h3>
            //     <div
            //         className="section-content"
            //         dangerouslySetInnerHTML={{
            //             __html: countryDescription,
            //         }}></div>
            //     <div className="country-view-home">
            //         {countries.map((row, index) => (
            //             <Link
            //                 key={index}
            //                 className="country-all-home"
            //                 to={`/${row.urlName}`}>
            //                 <img
            //                     className="country-img-home"
            //                     alt={row.countryImage}
            //                     src={`https://studyapi.ieodkv.com/countries/images/${row.countryImage}`}
            //                 />
            //                 <p className="country-heading-home">
            //                     {name} in {row.name}
            //                 </p>
            //             </Link>
            //         ))}
            //     </div>
            // </div>
        );
    } else {
        return null;
    }
};

export default Countries;
