import React, { useEffect , useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { getCourse } from '../../../Slices/courseSlice';
import { Link } from "react-router-dom";

export default function CourseListDetails() {
    const dispatch = useDispatch();
    const { course } = useSelector((state) => state.course);
    const { courseId } = useParams();
    useEffect(() => {
        dispatch(getCourse());
    },[])

    const courseListDetails = course.filter((e) => {
        return e.danhMucKhoaHoc.maDanhMucKhoahoc === courseId;
    });

    return (
        <div className="search-course">
            <div className="container">
                <div className="search-course__content">
                    <h1>{courseListDetails.length} course for {`"${courseId}"`}</h1>
                    {courseListDetails.map((item, index) => (
                        <div key={index} className="search-course__content-item">
                            <div className="search-course__item-img">
                                <Link to={`/course/${item.maKhoaHoc}`}>
                                    <img src={item.hinhAnh} alt={item.tenKhoaHoc}></img>
                                </Link>  
                            </div>
                            <div className="search-course__item-thread">
                                <Link to={`/course/${item.maKhoaHoc}`}><h5>{item.tenKhoaHoc}</h5></Link>
                                <p className="desciption">{item.moTa}</p>
                                <div className="star">
                                    <span>5</span>
                                    <BsStarFill className="icon-star" />
                                    <BsStarFill className="icon-star" />
                                    <BsStarFill className="icon-star" />
                                    <BsStarFill className="icon-star" />
                                    <BsStarFill className="icon-star" />
                                    <span className="view">({item.luotXem})</span>
                                </div>
                                <p className="total">31 hours in total • 397 sessions • All levels</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
