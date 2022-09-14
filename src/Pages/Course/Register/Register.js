import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector} from "react-redux";
import { registerAccount, login } from "../../../Slices/authSlice";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    hoTen: yup.string()
        .required("This field is required"),
    soDT: yup
        .string().required("This field is required").matches(/^[0-9]+$/,"This field only contains numbers"),
    taiKhoan: yup
        .string()
        .required("This field is required")
        .min(5, "Minimum at least 5 character")
        .max(20, "Allowed maximum is 10 character"),
    matKhau: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required")
});

export default function Register() {
  const dispatch = useDispatch();
  const { registerStatus } =  useSelector( (state) => state.auth)
  const { register, formState: { errors, isDirty, isValid  }, handleSubmit, control,} = useForm({ resolver: yupResolver(schema), mode: "onTouched",});
  const [buttonTrigger, setButton]= useState(false);
  const [value, setValue]= useState();
  const navigate = useNavigate();


  const handleRegister = (values) => {
    dispatch(registerAccount(values));
    setButton(true);
    setValue(values);
  };

  if (buttonTrigger && registerStatus) {
      if (registerStatus.includes("success")) {
          toast.success(`${registerStatus} Auto go to main page after 1s`);
          dispatch(login({taiKhoan: value.taiKhoan, matKhau:value.matKhau }))
          setTimeout(() => {
            navigate("/")
          }, 1000);
          setButton(false);
      } 
      if (registerStatus.includes("failed")) {
          toast.error(registerStatus);
          setButton(false)
      };
  }
  
  return (
    <div className="form-signup">
      <Toaster/>
      <form onSubmit={handleSubmit(handleRegister)}>
        <p>Sign Up and Start Learning!</p>
        
        {/* Tài Khoản */}
        <div className="form-group">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Account" className="form-control" {...register("taiKhoan")}/>
          {errors.taiKhoan && (
            <div className="alert alert-danger">{errors.taiKhoan.message}</div>
          )}
        </div>

        {/* Mật khẩu */}
        <div className="form-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" className="form-control" {...register("matKhau")}/>
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
 
        <button className="btn btn-danger btn-signup" disabled = {(!isDirty || !isValid)}>Sign Up</button>
        <div className="foward-login">
          <div className="policy">
              By signing up, you agree to our
              <a href="#"> Terms of Use </a>
              and
                <a href="#"> Privacy Policy</a>
          </div>
          <span>Already have an account?</span>
          <Link to="/login"> Log In</Link>
        </div>
      </form>
    </div>
  );
}
