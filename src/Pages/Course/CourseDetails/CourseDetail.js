import React from 'react'
import Loading from '../../../Components/Loading/Loading'

export default function CourseDetail({ course, isLoading }) {
    return (
       
        <div className="course__detail-top-content">
            {isLoading && <Loading/>}
            <h1 className="title">{course.tenKhoaHoc}</h1>
            <p className="description">{course.moTa}</p>
            <div className="course__detail-star">
                <div className="star">
                    <span>5</span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <span className="number">({(course.luotXem === 0) ? 3 : course.luotXem} ratings)</span>
                <span className="participant">{course.soLuongHocVien} participants</span>
            </div>
            <div className="create">
                <span>Created by </span>
                <a href="">{course.nguoiTao.hoTen}</a>
            </div>
            <div className="update">
                <span><i className="fal fa-exclamation-circle"></i> Last updated: </span>
                <span>{course.ngayTao}</span>
            </div>
            <div className="shared">
                <a className="wishlist" href="#">Wishlist <i className="fal fa-heart"></i></a>
                <a className="share" href="#">To share <i className="fas fa-share"></i></a>
                <a className="gift" href="#">Gift this course</a>
            </div>
        </div>
    )
}
