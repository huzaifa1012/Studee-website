import React from 'react'
import worldMapImg from "../../assets/green-map.png"  
import "./world_map.css"
import Logo1 from "../../assets/University logos/logo1.png"
import Logo2 from "../../assets/University logos/logo2.png"
import Logo3 from "../../assets/University logos/logo3.png"
import Logo4 from "../../assets/University logos/logo4.png"
import Logo5 from "../../assets/University logos/logo5.png"
import Logo6 from "../../assets/University logos/logo6.png"
function worldMap() {
    return (
        <>
        <div className='world_map_wrap'>
            <div className='world_map_head'>
                <h1>We match students with <br />
                    universities all over the world</h1>
                <h2>Over 400 universities in 30 countries</h2>
            </div>
            <div className='world_map_body'>
                <img src={worldMapImg} />
            </div>
        </div>
        <div className="world_map_brands_wrap">
        <div className="world_map_brands">
            <span className='world_map_brands_image_row2' >
            <img className='world_map_brand_image' src={Logo1} alt="" />
            <img className='world_map_brand_image' src={Logo2} alt="" />
            <img className='world_map_brand_image' src={Logo3} alt="" />
            </span>
            <span className='world_map_brands_image_row1' >
            <img className='world_map_brand_image' src={Logo4} alt="" />
            <img className='world_map_brand_image' src={Logo5} alt="" />
            <img className='world_map_brand_image' src={Logo6} alt="" />
            </span>

        </div>
        </div>
        </>

    )
}

export default worldMap