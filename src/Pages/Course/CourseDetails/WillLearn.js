import React, {useState} from 'react'
import { FiCheck } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
export default function WillLearn() {
    const willLearn = [
        {
            id: 1,
            title: "Learn programming from scratch",
        },
        {
            id: 2,
            title: "Knowing how to harness the power of Python through different projects",
        },
        {
            id: 3,
            title: "Know how to create Full-Stack Web applications with DJango",
        },
        {
            id: 4,
            title: "Know how to create iOS and Android mobile applications with Kivy",
        },
        {
            id: 5,
            title: "Become versatile and know how to create all types of projects with Python",
        },
        {
            id: 6,
            title: "Use the same source code to develop on all platforms: Windows, Mac, iOS, Android",
        },
        {
            id: 7,
            title: "Get a solid foundation in python",
        },
        {
            id: 8,
            title: "Quickly learn web development from scratch: HTML / CSS",
        },
        {
            id: 9,
            title: "Create your professional website to highlight your new skills and your portfolio",
        },
        {
            id: 10,
            title: "Know how to create desktop applications with a graphical interface (Windows and Mac)",
        },
        {
            id: 11,
            title: "Knowing how to develop powerful algorithms",
        },
    ]

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="will-learn">
            <div className="will-learn__content">
                <h1 className="will-learn__title">
                    What you will learn
                </h1>
                <ul className={`will-learn__lists ${isOpen ? "open" : ""}`}>
                    {willLearn.map((item) => (
                        <li key={item.id} className="will-learn__list-item">
                            <span><FiCheck className="tick-icon" /></span>
                            <p>{item.title}</p>
                        </li>
                    ))}
                     {isOpen === false ? <div className="will-learn__overlay"></div> : null}
                </ul>
                <div className="show-more" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen === false ? <p>Show more</p> : <p>Show less</p>}
                    <span>{isOpen === false ? <FaAngleDown /> : <FaAngleUp />}</span>
                </div>
            </div>
        </div>
    )
}
