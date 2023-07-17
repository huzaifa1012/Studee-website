import React from 'react'
import worldMapImg from "../../assets/green-map.png"  
import "./world_map.css"
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
            <img className='world_map_brand_image' src="https://images.studee.com/images/university/university__concordia-university-of-edmonton--logo.svg" alt="" />
            <img className='world_map_brand_image' src="https://images.studee.com/images/university/university__avans-university-of-applied-sciences--logo.svg" alt="" />
            <img className='world_map_brand_image' src="https://images.studee.com/images/university/university__durham-college--logo.svg" alt="" />
            <img className='world_map_brand_image' src="https://images.studee.com/images/university/university__greenville-university--logo.png?ixlib=js-2.3.2&auto=format&w=170&h=170&crop=fit&q=45" alt="" />
            </span>
            <span className='world_map_brands_image_row1' >
            <img className='world_map_brand_image' src="https://images.studee.com/images/university/university__global-humanistic-university--logo.png?ixlib=js-2.3.2&auto=format&w=170&h=170&crop=fit&q=45" alt="" />
            <img className='world_map_brand_image' src="https://images.studee.com/images/university/university__central-michigan-university--logo.svg" alt="" />
            <img className='world_map_brand_image' src="https://images.studee.com/images/university/university__central-queensland-university--logo.svg" alt="" />
            </span>

        </div>
        </div>
        </>

    )
}

export default worldMap