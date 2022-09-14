import React, { useState } from "react";
import { useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";
function NavbarScroll({ course }) {
    const [navIsOpen, setNavIsOpen] = useState(false);
   
    useEffect(() => {
        const scrollNarbar = () => {
            if (window.scrollY >= 100) {
                setNavIsOpen(true);
            } else {
                setNavIsOpen(false);
            }
        }
        window.addEventListener("scroll", scrollNarbar);
        return () => window.addEventListener("scroll", scrollNarbar)
    }, [navIsOpen])
    return (
        <div className={`navbar-scroll ${navIsOpen ? "open" : ""}`}>
            <div className="navbar-scroll__content">
                <h3>{course.tenKhoaHoc}</h3>
                <div className="navbar-scroll__content-rates">
                    <span>5</span>
                    <span>
                        <BsFillStarFill />
                    </span>
                    <span>({course.luotXem} ratings)</span>
                    <span>{course.soLuongHocVien} participants</span>
                </div>
            </div>
        </div>
    );
}

export default NavbarScroll;
