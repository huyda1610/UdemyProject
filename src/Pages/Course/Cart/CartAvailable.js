import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { deleteCart } from '../../../Slices/cartSlice';
import ModalRegister from '../ModalRegister/ModalRegister';
import {Modal, ModalBody } from "reactstrap"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { registerCourse,resetCourseRegisterStatus } from '../../../Slices/courseSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { getUserProfile } from '../../../Slices/userSlice';

const checkExist = (data1,data2) => {
    const checkArray = [];
    data1.map((item1) => {
        data2.map((item2) => {
            if (item1.maKhoaHoc === item2.maKhoaHoc) checkArray.push(item1.maKhoaHoc);
        });
    });
    return checkArray;
};

export default function CartAvailable({ cart }) {
    const dispatch = useDispatch();
    const { userInfo} = useSelector( (state) => state.auth );
    const { courseRegisterStatus} = useSelector( (state) => state.course );
    const { userDetail} = useSelector( (state) => state.user );    
    const [modalRegister, setModalRegister] = useState(false);
    const toggle = () => setModalRegister(!modalRegister);
    const [buttonTrigger, setButton]= useState(false);

    const existCourse = userDetail.hasOwnProperty("chiTietKhoaHocGhiDanh") ? checkExist(cart, userDetail.chiTietKhoaHocGhiDanh) : false;
    let data = [...cart];

    existCourse && existCourse.map((item) => {
        return data = data.filter((product) => {
            return product.maKhoaHoc !== item
        })
    })

    const handleCompleteCheckout = () => {
        data.map((item) => {
            dispatch(registerCourse({
                maKhoaHoc : item.maKhoaHoc,
                taiKhoan: userInfo.taiKhoan
            }));
        });
        setButton(true);
    };
    
    useEffect(() => {
        dispatch(getUserProfile());
    },[])

    if (buttonTrigger && courseRegisterStatus) {
        if (courseRegisterStatus.includes("success")) {
            toast.success("Checkout complete !!!");
            dispatch(resetCourseRegisterStatus());
            setTimeout(() => {
                data.map((item) => {
                    dispatch(deleteCart(item.maKhoaHoc));
                });
            }, 500);
            setButton(false);
        }
         if (courseRegisterStatus.includes("failed")) {
            toast.error("Checkout failed !!!");
            dispatch(resetCourseRegisterStatus());
            setButton(false);
        }
    }

    const checkExistCourse = (data) => {
        return existCourse && 
            existCourse.findIndex((item) => item === data);
    }

    return (
        <>
            <Toaster/>
            <div className="shopping-cart__content-list">
                <div className="shopping-cart__content-list-item-thread">
                    <div className="shopping-cart__content-list-item">  
                        <div className="shopping-cart__content-number">
                            <h3>{cart.length} Course in Cart</h3>
                        </div>
                        {cart.map((item, index) => {
                            return (
                                <div key={index} className="shopping-cart__content-list-item-detail">
                                    <Link to={`/course/${item.maKhoaHoc}`}>
                                        <div className="shopping-cart__content-list-item--img">
                                            <img src={item.hinhAnh} alt=""></img>
                                        </div>
                                    </Link>
                                    <div className="shopping-cart__content-list-thread">
                                        <Link to={`/course/${item.maKhoaHoc}`}>
                                            <h5>{item.tenKhoaHoc}</h5>
                                            <span>By {item.nguoiTao.hoTen}</span>
                                            {userInfo && (checkExistCourse(item.maKhoaHoc) !== -1)
                                                && <h5 className='text-danger'>Course already exist in register course</h5>
                                            }
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
                                        <p onClick={() => dispatch(deleteCart(item.maKhoaHoc))} className="delete">Remove</p>
                                    </div>
                                    <p className="price d-flex ml-auto p-1">$ 79.99</p>
                                </div>
                                ) 
                            })}
                    </div>
                    <div className="shopping-cart__content-list-validation">
                        <div className="shopping-cart__content-list-validation-detail">
                            <p>Total:</p>
                            <p className="total-price">$ {Math.round(79.99 * cart.length)}</p>
                            {Boolean(!userInfo) && <button className="btn-validation" onClick={() => setModalRegister(true)}>Checkout</button>}
                            {Boolean(userInfo) && <button className="btn-validation" onClick={() => handleCompleteCheckout()}>Complete Checkout</button>}
                            <p className="promotion">Promotions</p>
                            <p className="keep">
                                <span><IoIosClose /></span> 
                                <span> KEEPLEARNING</span>
                                <span> is applied</span>
                            </p>
                            <form>
                                <input className="form-control" type="text" placeholder="Enter the coupon"></input>
                                <button type="submit">To apply</button>
                            </form>
                        </div>
                    </div>
                    <Modal isOpen={modalRegister && Boolean(!userInfo)} toggle={toggle}>
                        <ModalBody>
                            <ModalRegister toggleModal = {toggle}/>
                        </ModalBody>            
                    </Modal>
                </div>
            </div>
        </>
    )
}
