import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector} from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { useEffect } from "react";
import { resetUserStatus } from "../../../Slices/userSlice";
import { updateUser } from "../../../Slices/userSlice";

const schema = yup.object().shape({
    hoTen: yup.string()
        .required("This field is required"),
    soDT: yup
        .string().required("This field is required").matches(/^[0-9]+$/,"This field only contains numbers"),
    matKhau: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required")
});

export default function UserInfo({userDetail}) {
  const dispatch = useDispatch();
  const { userStatus } = useSelector((state) => state.user);
  const { 
    register, 
    formState: { errors, isDirty, isValid  }, 
    handleSubmit, 
    setValue,
  } = 
  useForm(   
  { resolver: yupResolver(schema), 
      mode: "onTouched",
  });
  const [buttonTrigger, setButton]= useState(false);

  useEffect(() => {
    if (userDetail) {
        setValue("taiKhoan", `${userDetail.taiKhoan}`);
        setValue("hoTen", `${userDetail.hoTen}`);
        setValue("email", `${userDetail.email}`);
        setValue("soDT", `${userDetail.soDT}`);
        setValue("matKhau", `${userDetail.matKhau}`);
        setValue("maLoaiNguoiDung", `${userDetail.maLoaiNguoiDung}`);
        setValue("maNhom", `${userDetail.maNhom}`);
    }
  }, [userDetail, setValue])


  const handleRegister = (values) => {
    dispatch(updateUser(values));
    setButton(true);
  };

  if (buttonTrigger) {
    if (userStatus === 1) {
      toast.success("Update complete !!!");
      setButton(null);
      dispatch(resetUserStatus());
  } 
  if (userStatus === 0) {
      toast.error("Update failed !!! Please try again");
      setButton(null)
      dispatch(resetUserStatus());
  };
  }
  
  return (
    <div className="form-signup">
      <Toaster/>
      <form onSubmit={handleSubmit(handleRegister)}>
        <p>User Detail</p>
        
        {/* Tài Khoản */}
        <div className="form-group">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Account" className="form-control" {...register("taiKhoan")} disabled/>
        </div>

        {/* Mật khẩu */}
        <div className="form-group">
          <i className="fas fa-lock"></i>
          <input type="current-password" placeholder="Password" className="form-control" {...register("matKhau")}/>
          {errors.matKhau && (
            <div className="alert alert-danger">{errors.matKhau.message}</div>
          )}
        </div>
        {/* Họ Tên */}
        <div className="form-group">
          <i className="fas fa-user-tag"></i>
          <input type="text" className="form-control" placeholder="Fullname" {...register("hoTen")}/>
          {errors.hoTen && (
            <div className="alert alert-danger">{errors.hoTen.message}</div>
          )}
        </div>

        {/* Số điện thoại */}
        <div className="form-group">
          <i className="fas fa-mobile-alt"></i>
          <input type="text" className="form-control" placeholder="Phone Number" {...register("soDT")}/>
          {errors.soDT && (
            <div className="alert alert-danger">{errors.soDT.message}</div>
          )}
        </div>

        {/* email */}
        <div className="form-group">
          <i className="fas fa-envelope"></i>
          <input type="text" className="form-control" placeholder="Email" {...register("email")}/>
          {errors.email && (
            <div className="alert alert-danger">{errors.email.message}</div>
          )}
        </div>
 
        <button className="btn btn-danger btn-signup" disabled = {(!isDirty || !isValid)}>Edit</button>
      </form>
    </div>
  );
}
