import React, { useEffect, useState } from 'react'
import { BsCollectionPlay, BsFileEarmark } from "react-icons/bs";
import { RiFolderDownloadLine } from "react-icons/ri";
import { CgInfinity } from "react-icons/cg";
import { BiMobile } from "react-icons/bi";
import { GiRibbonMedal } from "react-icons/gi";
import Loading from '../../../Components/Loading/Loading';

export default function CourseSidebarProfile( { course, isLoading }) {

    const [scrollSideBar, setScrollSideBar] = useState(false);

    useEffect(() => {
        const scrollSide = () => {
            if (window.scrollY >= 350) {
                setScrollSideBar(true);
            } else {
                setScrollSideBar(false);
            }
        };
        window.addEventListener("scroll", scrollSide);
        return () => window.removeEventListener("scroll", scrollSide);
    }, [scrollSideBar]);
    
    return (
   
        <div className={`course__detail-top-sidebar ${scrollSideBar ? "scroll" : ""}`}>
            <div className="sidebar-box">
                <div className="course-info">
                    <div className="image">
                        {isLoading ? <Loading/>
                        : <img src={course.hinhAnh} alt=""></img>
                        }
                    </div>
                    <div className="thread">
                    </div>
                    
                </div>
                <div className="course-detail">
                <p className="title">This course includes:</p>
                <p><BsCollectionPlay /><span>30.5 hour video on demand</span></p>
                <p><BsFileEarmark /><span>7 items</span></p>
                <p><RiFolderDownloadLine /><span>53 downloadable resources</span> </p>
                <p><CgInfinity /><span>Unlimited access</span> </p>
                <p><BiMobile /><span>Mobile and TV access</span> </p>
                <p><GiRibbonMedal /><span>Certificate of completion</span></p>
                <div className="training">
                    <a href="/profile">Go back to Profile</a>
                </div>
                </div>
            </div>
        </div> 
    
    )
}
