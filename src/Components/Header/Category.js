import React from 'react'
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi"
export default function Category({ listCourse }) {
    return (
        <div className="category">
           <ul className="sub-category">
               
               <li className="sub-category__develpoment">
                   <span className="sub">
                        <span>Development</span> 
                        <BiChevronRight />
                   </span>
                   
                   <ul className="sub-category__develpoment__one">
                       <li className="sub-category__develpoment__one__all">
                       <span className="sub">
                            <span>Development Web</span> 
                            <BiChevronRight />
                        </span>
                           <ul className="sub-category__develpoment__two">
                                {listCourse.map((item) => (
                                    <li  key={Math.random()} >
                                        <Link to={`/courseList/${item.maDanhMuc}`} >{item.maDanhMuc}</Link>
                                    </li>
                                ))}
                           </ul>
                       </li>
                   </ul>
               </li>
           </ul>
        </div>
    )
}
