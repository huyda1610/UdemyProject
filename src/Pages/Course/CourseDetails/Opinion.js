import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
export default function Opinion() {
    return (
        <div className="opinion">
            <div className="opinion-content">
                <div className="opinion-content__title">
                    <h2>Opinion</h2>
                </div>
                <div className="opinion-content__form">
                    <form>
                        <input type="text" placeholder="Search Reviews" className="opinion-content__form-search"></input>
                        <span className="opinion-content__form-icon">
                            <span><AiOutlineSearch /></span>
                        </span>
                    </form>
                    <select className="opinion-content__select">
                        <option>All Notes</option>
                        <option>Five Stars</option>
                        <option>Four Stars</option>
                        <option>Three Stars</option>
                        <option>Two Stars</option>
                        <option>A Stars</option>
                    </select>
                </div>
                <div className="opinion-content__comment">
                    <div className="opinion-content__comment-item">
                        <div className="opinion-content__comment-left">
                            <div className="avatar">
                                <span>EA</span>
                            </div>
                        </div>
                        <div className="opinion-content__comment-right">
                            <p className="name">
                                Eric Amadji
                            </p>
                            <div className="five-star">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <span>a month ago</span>
                            </div>
                            <p className="comment">
                                Your pedagogy is impressive, especially when you progress in learning and you find a niche to pick up on things already learned, you realize the quality of the course. thank you so much to you, it is lucky to have discovered this course earlier.
                            </p>
                            <div className="review">
                                <p className="title">
                                    Was this review helpful to you?
                                </p>
                                <div className="report">
                                    <span className="box"><span><BiLike /></span></span>
                                    <span className="box"> <span><BiDislike /></span></span>
                                    <a href="#">Report</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opinion-content__comment-item">
                        <div className="opinion-content__comment-left">
                            <div className="avatar">
                                <span>RD</span>
                            </div>
                        </div>
                        <div className="opinion-content__comment-right">
                            <p className="name">
                                Rinaldo Dorigatti
                            </p>
                            <div className="five-star">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <span>a month ago</span>
                            </div>
                            <p className="comment">
                                Because I was able to see extracts on youtube and I found the pedagogy used incredible
                            </p>
                            <div className="review">
                                <p className="title">
                                    Was this review helpful to you?
                                </p>
                                <div className="report">
                                    <span className="box"><span><BiLike /></span></span>
                                    <span className="box"> <span><BiDislike /></span></span>
                                    <a href="#">Report</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="opinion-content__comment-item">
                        <div className="opinion-content__comment-left">
                            <div className="avatar">
                                <span>KS</span>
                            </div>
                        </div>
                        <div className="opinion-content__comment-right">
                            <p className="name">
                                Kone Nabini Siaka
                            </p>
                            <div className="five-star">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <span>a month ago</span>
                            </div>
                            <p className="comment">
                                very well explained I hope finished in the right conditions except I was not able to put my project online I tried several times no solution but I against resume case I have a great conviction and you give me the desire to 'go further thank you ..
                            </p>
                            <div className="review">
                                <p className="title">
                                    Was this review helpful to you?
                                </p>
                                <div className="report">
                                    <span className="box"><span><BiLike /></span></span>
                                    <span className="box"> <span><BiDislike /></span></span>
                                    <a href="#">Report</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
