import React, { useState } from 'react'
import { AiOutlineFile, AiFillPlayCircle } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import CourseContentList  from "./CourseContentList";
export default function CourseContent() {
    const courseList = [
        {
            id: 1,
            title: "Introduction",
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 2,
            title: "Installation",
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
        id: 4,
        title: "Python Basics - Level 11",
        iconOpen: <FaAngleDown />,
        iconClose: <FaAngleUp />,
        hours: Math.floor(Math.random() * 24),
        minutes: Math.floor(Math.random() * 11),
        subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 5,
            title: "Visual Approach - Level 1",
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 6,
            title: 'Project "The Magic Number"',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 7,
            title: '"Maths Game" project',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 8,
            title: "Module: Funtions - Advaned concepts",
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 9,
            title: "Python: the collections - Level 2",
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 10,
            title: 'Project "Pizzas" - Lists',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 11,
            title: 'Dictionary - Level 2',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 12,
            title: "Python enviroments",
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 13,
            title: '[2 - WEB DEVELOPMENT]',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 14,
            title: 'The basics of the web: HTML 5',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 15,
            title: 'The basics of the web: HTML 3',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 16,
            title: 'Responsive design',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 17,
            title: 'Project "Your professional site" (Main page)',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 18,
            title: 'Project "Your professional site" (Portfolio)',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 19,
            title: 'Project "Your professional site" (Responsive design)',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 20,
            title: 'Super-project "Mr Beat v1',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 21,
            title: 'Super-project "Mr Beat v2',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 22,
            title: 'Super-project "Mr Beat v3',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 23,
            title: 'Super-project "Galaxy v1',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 24,
            title: 'Super-project "Galaxy v2',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
        {
            id: 25,
            title: 'Super-project "Galaxy v3',
            iconOpen: <FaAngleDown />,
            iconClose: <FaAngleUp />,
            hours: Math.floor(Math.random() * 24),
            minutes: Math.floor(Math.random() * 11),
            subList: [
                {
                    subId: 1,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Why learn the Python language?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 2,
                    icon: <AiFillPlayCircle />,
                    subTitle: "How are you going to learn and progress?",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                },
                {
                    subId: 3,
                    icon: <AiFillPlayCircle />,
                    subTitle: "Who am I",
                    textPreview: "Overview",
                    time: Math.floor(Math.random() * 11),
                }
            ]
        },
    ]
    const [showSection, setShowSection] = useState(false);
    return (
        <div className="course-content">
            <div className="course-content__body">
                <h1 className="course-content__heading">Course Content</h1>
                <div className="course-content__subheader">
                    <span>25 sections</span>
                    <span> • 520 lectures</span>
                    <span> • Total duration 42h 12m</span>
                </div>
                <div className="course-content__list">
                    {courseList.map((item) => {
                        return <CourseContentList showSection={showSection} item={item} key={item.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

