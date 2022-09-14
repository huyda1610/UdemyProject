import React, { useState } from 'react'
import { BsFillStarFill, BsPeopleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { GiRibbonMedal } from "react-icons/gi";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import trainer from "../../../Images/trainer.jpg"
export default function Trainer({course}) {
    const [show, setShow] = useState(false);
    return (
        <div className="trainer">
            <div className="trainer__content">
                <h2 className="trainer__title">Trainers</h2>
                <div className="trainer__info">
                    <h5>{course.nguoiTao.hoTen} | Python trainer and developer</h5>
                    <p>Python Developer</p>
                    <div className="trainer__info-item">
                        <div className="trainer__info-item-image">
                            <img src={trainer} alt={course.nguoiTao.hoTen}></img>
                        </div>
                        <div className="trainer__info-item-thread">
                            <p>
                                <BsFillStarFill />
                                <span>4.7 Instructor's Note</span>
                            </p>
                            <p>
                                <GiRibbonMedal />
                                <span>7,131 ratings</span>
                            </p>
                            <p>
                                <BsPeopleFill />
                                <span>37 921 participants</span>
                            </p>
                            <p>
                                <AiFillPlayCircle />
                                <span>15 lessons</span>
                            </p>
                        </div> 
                    </div>
                    <div className="trainer__info-content">
                        <p>Trainer for more than 5 years and Python Freelance developer.</p>
                        <p>I am the founder of Docstring, the first French site entirely dedicated to learning Python.</p>
                        <p>I give training online and in different training centers and companies and I have trained several thousand people in dozens of countries around the world.</p>
                        <p>My taste for pedagogy pushes me to always go further in my teaching methods in order to produce training of the highest possible quality.</p>
                        <p>I hope to count you soon as a student in one of my trainings on Udemy.</p>
                        {show ? null : <div className="introduce-overlay"></div>}
                    </div>
                    <div onClick={() => setShow(!show)} className="btn-show">
                        {show ? <span>Show less</span> : <span>Show more</span>}
                        {show ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </div>
            </div>
        </div>
    )
}
