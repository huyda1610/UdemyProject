import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../Slices/userSlice';
import { useDispatch } from 'react-redux';

export default function NavbarMobile({ SideBar, setSideBar, listCourse }) {
    const dispatch= useDispatch();
    const [SideBar1, setSideBar1] = useState(false);
    const { userInfo } = useSelector((state) => state.auth);
    
    useEffect(() => {
        dispatch(getUserProfile());
    },[])

    return (
        <div className="navbar-mobile">
        <div className={`${SideBar ? "active-sidebar" : ""} sidebar-mobile`}>
            <div className={`${SideBar ? "show-icon-close" : ""} icon-close-menu`}>
                <i onClick={() => (setSideBar(!SideBar), setSideBar1(false))} className="fal fa-times"></i>
            </div>
            <div className="active-sidebar__login-signup">
            {userInfo ? 
                <ul>
                    <li>Welcome <span className='text-info fs-3'>{userInfo.hoTen}</span></li>
                    <li><Link onClick={() => setSideBar(!SideBar)} to="/profile">My Profile</Link></li>
                </ul>
            :
                <ul>
                    <li><Link onClick={() => setSideBar(!SideBar)} to="/login">Log in</Link></li>
                    <li><Link onClick={() => setSideBar(!SideBar)} to="/register">Sign up</Link></li>
                </ul>
            }
            </div>
            <div className="active-sidebar-popular">
                <ul>
                    <li onClick={() => setSideBar1(true)}>
                        Web Development
                        <ul className={`${SideBar1 ? "close-sidebar1" : ""} sub-popular`}>
                            <li onClick={() => setSideBar1(false)}><i className="fal fa-chevron-left"></i>   Menu</li>
                            {listCourse.map((item) => (
                                <Link key={Math.random()} to={`/courseList/${item.maDanhMuc}`}> <li>{item.maDanhMuc}</li></Link>
                               
                            ))}
                        </ul>
                    </li>
                    <li>Mobile Development</li>
                </ul>
            </div>
            <div className="active-sidebar-more">
                <ul>
                    <li>Get the app</li>
                    <li>Invite friends</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
        </div>
    )
}
