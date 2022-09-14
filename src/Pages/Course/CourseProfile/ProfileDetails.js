import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { getUserProfile, removeRegisterCourseProfile, resetUserStatus } from '../../../Slices/userSlice';
import UserInfo from './UserInfo';

export default function ProfileDetails() {
    const dispatch = useDispatch();

    const { userDetail, userStatus} = useSelector( (state) => state.user );
    const { userInfo } = useSelector((state) => state.auth);
    
    useEffect(() => {
        dispatch(getUserProfile());
    },[])

    const [buttonTrigger, setButton]= useState(false);

    const handleRemove = (data) => {
        dispatch(removeRegisterCourseProfile({
            maKhoaHoc : data,
            taiKhoan: userInfo.taiKhoan
        }));
        
        setButton(true);
    };

    if(buttonTrigger) {
        dispatch(getUserProfile());
        if (userStatus === 1) {
            toast.success("Remove success")
            dispatch(resetUserStatus());
        }
        if (userStatus === 0) {
            toast.error("Remove error")
            dispatch(resetUserStatus());
        }
    }
    return (
        <>
            <Toaster/>
            <div className="shopping-cart__content-list">
                <div className="shopping-cart__content-list-item-thread">
                    {userDetail.hasOwnProperty("chiTietKhoaHocGhiDanh") &&
                        <div className="shopping-cart__content-list-item">  
                        <div className="shopping-cart__content-number">
                            <h4>Registered Courses</h4>
                            <h3>{userDetail.chiTietKhoaHocGhiDanh.length} Courses</h3>
                        </div>
                        {userDetail.chiTietKhoaHocGhiDanh.map((item, index) => {
                            return (
                                <div key={index} className="shopping-cart__content-list-item-detail">
                                    <Link to={`/profile/${item.maKhoaHoc}`}>
                                        <div className="shopping-cart__content-list-item--img">
                                            <img src={item.hinhAnh} alt=""></img>
                                        </div>
                                    </Link>
                                    <div className="shopping-cart__content-list-thread">
                                        <Link to={`/profile/${item.maKhoaHoc}`}>
                                            <h5>{item.tenKhoaHoc}</h5>
                                            <br />
                                            <br />
                                        </Link>
                                        <div className="star">
                                            <span>5 </span>
                                            <BsStarFill className="icon-star" />
                                            <BsStarFill className="icon-star" />
                                            <BsStarFill className="icon-star" />
                                            <BsStarFill className="icon-star" />
                                            <BsStarFill className="icon-star" />
                                            <span className="rating"> ({item.luotXem} ratings)</span>
                                        </div>
                                        <p>31 hours in total • 397 sessions • All levels</p>
                                    </div>
                                    <div className="delete-save d-flex ml-auto p-1">
                                        <p className="delete" onClick={() => handleRemove(item.maKhoaHoc)}>Remove</p>
                                    </div>
                                </div>
                                ) 
                            })}
                        </div>                    
                    }
                    <div className="shopping-cart__content-list-validation">
                        <UserInfo userDetail={userDetail}/>
                    </div>
                </div>
            </div>
        </>
    )
}
