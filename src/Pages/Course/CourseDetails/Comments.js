import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
export default function Comments() {
    return (
        <div className="comments">
            <div className="conments-content">
                <div className="comments-content__title">
                    <h2>Comments from participants</h2>
                </div>
                <div className="comments-content__rating">
                    <div className="comments-content__rating-left">
                        <div className="left-box">
                            <div className="left-box-item">
                                <p>5</p>
                                <div className="icon-rating">
                                    <BsStarFill className="icon-star" />
                                    <BsStarFill className="icon-star" />
                                    <BsStarFill className="icon-star" />
                                    <BsStarFill className="icon-star" />
                                    <BsStarFill className="icon-star" />
                                </div>
                                <span>Course grade</span>
                            </div>
                            
                        </div>
                 
                    </div>
                    <div className="comments-content__rating-right">
                        <ul>
                            <li>
                                <button>
                                    <span className="level">
                                        <span className="level-percent"></span>
                                    </span>
                                </button>
                                <div className="rate-star">
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <div className="percent">
                                        <p>91%</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <button>
                                    <span className="level">
                                        <span className="level-percent"></span>
                                    </span>
                                </button>
                                <div className="rate-star">
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <div className="percent">
                                        <p>7%</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button>
                                    <span className="level">
                                        <span className="level-percent"></span>
                                    </span>
                                </button>
                                <div className="rate-star">
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <div className="percent">
                                        <p>1%</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button>
                                    <span className="level">
                                        <span className="level-percent"></span>
                                    </span>
                                </button>
                                <div className="rate-star">
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <div className="percent">
                                        <p>0%</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button>
                                    <span className="level">
                                        <span className="level-percent"></span>
                                    </span>
                                </button>
                                <div className="rate-star">
                                    <BsStarFill className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <BsStarHalf className="rates-star-icon" />
                                    <div className="percent">
                                        <p>1%</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
