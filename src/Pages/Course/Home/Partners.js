import React from 'react'
import applpe from "../../../Images/apple.svg";
import box from "../../../Images/box.svg";
import volkswagen from "../../../Images/volkswagen.svg";
import netflix from "../../../Images/netflix.svg";
import eventbrite from "../../../Images/eventbrite.svg";
export default function Partners() {
    return (
        <div className="partners">
            <div className="width-default">
                <div className="partners__box">
                    <div className="partners__box-content">
                        <h3>Trusted by companies of all sizes</h3>
                        <div className="partners-companies d-flex">
                            <div className="logo-item">
                                <img src={applpe} alt=""></img>
                            </div>
                            <div className="logo-item">
                                <img src={box} alt=""></img>
                            </div>
                            <div className="logo-item">
                                <img src={volkswagen} alt=""></img>
                            </div>
                            <div className="logo-item">
                                <img src={netflix} alt=""></img>
                            </div>
                            <div className="logo-item">
                                <img src={eventbrite} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
