import React, { useEffect, useState } from 'react'
import { BsCollectionPlay, BsFileEarmark } from "react-icons/bs";
import { RiFolderDownloadLine } from "react-icons/ri";
import { CgInfinity } from "react-icons/cg";
import { BiMobile } from "react-icons/bi";
import { GiRibbonMedal } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Slices/cartSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';

export default function CourseSidebar( { course, isLoading }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [scrollSideBar, setScrollSideBar] = useState(false);
    const {cart} = useSelector((state) => state.cart);

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
    
    const courseExistInCart = cart.findIndex(
        (product) => product.maKhoaHoc === course.maKhoaHoc
    );

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
                    <p className="price">$ 79.99</p>
                    {courseExistInCart === -1 ? 
                        <button onClick={() => dispatch(addToCart(course))} className="btn-addcart">Add to Cart</button>
                        : <button onClick={() => navigate("/cart")} className="btn-addcart">Go to Cart</button>
                    }
                    <button onClick={() => {navigate("/cart");dispatch(addToCart(course))}} className="btn-buy">Buy now</button>
                    <p className="dayoff">30-day money-back guarantee</p>
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
                <a>Apply Coupon</a>
                </div>
                <div className="training">
                <h5 className="training__title">Training 5 or more people?</h5>
                <p>Give your team members access to over 6,000 of the best Udemy courses anytime, anywhere.</p>
                <a href="">Try Udemy Business</a>
                </div>
            </div>
        </div> 
    
    )
}
