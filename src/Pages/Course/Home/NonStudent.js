import React from 'react';
import { Link } from 'react-router-dom';
import instructor from "../../../Images/instructor.jpg";
import ub from "../../../Images/ub.jpg";
import transform from "../../../Images/transform.jpg"
export default function NonStudent({num}) {
    return (
        <>
        <div className={`non-student non-student-one ${num === 1 ? "show-non" : ""}`}>
            <div className="width-default">
                <div className="non-student-box">
                    <div className="non-student__content">
                        <div className="non-student__content-image">
                            <img src={instructor} alt=""></img>
                        </div>
                        <div className="non-student__content-info">
                            <h3 className="info-header">
                                Instructor Registration
                            </h3>
                            <p className="info-content">
                                Instructors around the world teach millions of students on Udemy. Udemy gives you the tools and techniques to teach what you love.
                            </p>
                            <Link className="info-link" to="/">Start teaching today</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`non-student non-student-two ${num === 2 ? "show-non" : ""}`}>
            <div className="width-default">
                <div className="non-student-box">
                    <div className="non-student__content">
                      
                        <div className="non-student__content-info">
                            <h3 className="info-header">
                                E-Learning
                            </h3>
                            <p className="info-content">
                                Give your team unlimited access to 6,000+ of Udemy's best lectures. Learn and advance your skills in business, technology, design and more.
                            </p>
                            <Link className="info-link" to="/">Get Udemy Business</Link>
                        </div>
                        <div className="non-student__content-image">
                            <img src={ub} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`non-student non-student-three ${num === 3 ? "show-non" : ""}`}>
            <div className="width-default">
                <div className="non-student-box">
                    <div className="non-student__content">
                        <div className="non-student__content-image">
                            <img src={transform} alt=""></img>
                        </div>
                        <div className="non-student__content-info">
                            <h3 className="info-header">
                                Enter a turning point in your life through education.
                            </h3>
                            <p className="info-content">
                                Learners all over the world are starting new careers, developing in their fields and enriching their lives.
                            </p>
                            <Link className="info-link" to="/">Find out how</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
