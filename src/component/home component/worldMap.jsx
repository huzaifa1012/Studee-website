import React from 'react'
import "./world_map.css"
function worldMap() {
    return (
        <div className='world_map_wrap'>
            <div className='world_map_head'>
                <h1>We match students with <br />
                    universities all over the world</h1>
                <h2>Over 400 universities in 30 countries</h2>
            </div>
            <div className='world_map_body'>
                <img src='https://images.studee.com/images/content/content__home--map.png?w=1184&auto=format&q=30&fit=crop' />
            </div>
        </div>

    )
}

export default worldMap