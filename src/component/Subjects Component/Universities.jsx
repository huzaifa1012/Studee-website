import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Universities = ({ id, name, universityDescription }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://studyapi.ieodkv.com/subjects/university/${id}`)
            .then((response) => {
                setData(response.data);

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    if (loading) {
        return <CircularProgress />;
    } else if (data.length > 0) {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div className="browseByCountry_main " style={{ width: '90%' }}>
                    <div className="browseByCountry_head">
                        <h1 className="mtc">Best universities to study {name}</h1>
                    </div>
                    <p>

                        <div
                            className="section-content ltc "
                            dangerouslySetInnerHTML={{
                                __html: universityDescription,
                            }}></div>
                    </p>
                    <div className="browseByCountry_body">
                        {/* {data.map((row, index) => {
                            return (
                                <Link
                                    key={index}
                                    className="browseByCountry_card"
                                    to={`/${row.countryUrl}/${row.cityUrl}/${row.urlName}`}>
                                    <img
                                        className="country-img-home"
                                        alt={row.bannerImage}
                                        src={`https://studyapi.ieodkv.com/universities/images/${row.banner}`}
                                    />
                                    <p className="country-heading-home">{row.universityName}</p>
                                </Link>
                            );
                        })} */}
                        {data?.map((row, index) => (
                            <Link
                                to={`/${row.countryUrl}/${row.cityUrl}/${row.urlName}`}
                                onClick={() => handleNavigation(row)}
                                className="browseByCountry_card"
                                key={index}
                                style={{
                                    backgroundImage: `url(https://studyapi.ieodkv.com/universities/images/${row.banner})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundBlendMode: "multiply",
                                    blendAlpha: 80,
                                }}
                            >
                                <h2>{row.universityName}</h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        );
    } else {
        return null;
    }
};

export default Universities;
