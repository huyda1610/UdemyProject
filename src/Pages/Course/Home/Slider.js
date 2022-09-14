import React, { useState } from 'react'
import slider from "../../../Images/slider.jpg"
export default function Slider() {

    return (
        <div className="slider">
            <div className="slider-image">
                <img className="w-100" src={slider} alt="slider"></img>
            </div>
            <div className="slider-form-search">
                <h1>Our biggest sale of the season</h1>
                <p>
                Stock up on courses from $9.99. From coding to leadership to photography, you can learn almost anything. Ends Aug. 31.
                </p>
            </div>
        </div>
    )
}
