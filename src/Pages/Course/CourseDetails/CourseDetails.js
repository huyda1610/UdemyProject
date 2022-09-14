import React, {useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getCourseByCategory } from "../../../Slices/courseSlice";
import CourseSidebar from "./CourseSidebar";
import CourseDetail from "./CourseDetail";
import WillLearn from "./WillLearn";
import CourseContent from "./CourseContent";
import NavbarScroll from "./NavbarScroll";
import Trainer from "./Trainer";
import Comments from "./Comments";
import Opinion from "./Opinion";

export default function CourseDetails() {
 
  const dispatch = useDispatch();
  const { pathname } = useLocation();
 
  const categoryAr = pathname.split("/course/");
  const category = categoryAr[1];
  const { courseDetail,courseIsLoading } =  useSelector((state) => state.course);

  const course = (!(courseDetail.length === 0)) ? courseDetail : {
    maKhoaHoc:'',
    tenKhoaHoc: '',
    moTa:'',
    luotXem:'',
    hinhAnh: '',
    maNhom:'',
    nguoiTao: {
      taiKhoan:'',
      hoTen:'',
      maLoaiNguoiDung:'HV'
    }
  };
  
  useEffect( () => {
    dispatch(getCourseByCategory(category));
  }, [category])

  return (
    <div className="course__detail">
        <div className="course__detail-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <CourseDetail course = {course} isLoading={courseIsLoading} />
              </div>
              <div className="col-lg-4  col-md-12">
                <CourseSidebar course = {course} isLoading={courseIsLoading} />
              </div>
            </div> 
          </div>   
        </div>
        <div className="course__detail-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <WillLearn />
                <CourseContent />
                <Trainer course = {course}/>
                <Comments />
                <Opinion />
              </div>
            </div>
          </div>
        </div>
      <NavbarScroll course = {course} />
    </div>
  );
}
