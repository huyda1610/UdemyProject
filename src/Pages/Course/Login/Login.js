import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector} from "react-redux";
import { login } from "../../../Slices/authSlice";
import { useNavigate } from "react-router";
import {Link} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("This field is required")
    .min(5, "Minimum at least 5 character")
    .max(20, "Allowed maximum is 10 character"),
  matKhau: yup.string().required("This field is required"),
});

export default function Login() {
  const dispatch = useDispatch();

  const { userInfo, authError} = useSelector( (state) => state.auth );
  const [buttonTrigger, setButton]= useState(false);
  const navigate = useNavigate();

  const { register, formState: { errors ,isDirty, isValid }, handleSubmit, control, } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched"
  });

  const handleLogin = (values) => {
    dispatch(login(values));
    setButton(true);
  };

  if (userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    if (userInfo.maLoaiNguoiDung === "HV") {
      navigate("/");
    } else {
      navigate("/admin/user");
    }
  }

  if (buttonTrigger) {
    if (authError) {
      toast.error(authError);
      setButton(false);
    }
  }

  return (
    <div className="form-login">
      <Toaster/>
      <form onSubmit={handleSubmit(handleLogin)}>
        <p>Log In To Your Account!</p>
        <div className="login__facebook">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
              <span> Continue with Facebook</span>
            </a>
        </div>
        <div className="login__google">
          <a href="#">
            <i className="fab fa-google"></i>
            <span> Continue with Google</span>
          </a>
        </div>
        <div className="login__Apple">
          <a href="#">
            <i className="fab fa-apple"></i>
            <span> Continue with Apple</span>
          </a>
        </div>
        <div className="form-group form-group__email">
          <input type="text" className="form-control" placeholder="Account" {...register("taiKhoan")}/>
          
          {errors.taiKhoan && (
            <div className="alert alert-danger">{errors.taiKhoan.message}</div>
          )}
        </div>
          <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" {...register("matKhau")}/>

          {errors.matKhau && (
            <div className="alert alert-danger">{errors.matKhau.message}</div>
          )}
        </div>
        <button className="btn btn-danger btn-login" disabled = {(!isDirty || !isValid)}>Log In</button>
        <div className="forgot__password text-center">
         
          <span>or</span>
          <a href="#"> Forgot your password.</a>
          <div>
            <span>You do not have an account?</span>
            <Link to="/register"> Sign up</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
