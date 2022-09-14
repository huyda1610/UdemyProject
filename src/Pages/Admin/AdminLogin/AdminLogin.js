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
import { resetAuthError } from "../../../Slices/authSlice";

const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("This field is required")
    .min(5, "Minimum at least 5 character")
    .max(20, "Allowed maximum is 10 character"),
  matKhau: yup.string().required("This field is required"),
});

export default function AdminLogin() {
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

  if (buttonTrigger) {
    if (authError) {
      toast.error(authError);
      setButton(false);
      dispatch(resetAuthError());
    } else if (userInfo && userInfo.maLoaiNguoiDung === "HV") {
      toast.error("Please login with admin account !!!");
      setButton(false);
    } else if (userInfo && userInfo.maLoaiNguoiDung === "GV") {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      navigate("/admin/addUser")
    }
  }

  return (
    <div >
      <div className="form-login">
      <Toaster/>
      <form onSubmit={handleSubmit(handleLogin)}>
        <p>Log In To Your Admin Account!</p>
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
            <span>You do not have an admin account? Go back to</span>
            <Link to="/"> home page</Link>
          </div>
        </div>
      </form>
    </div>
    </div>

  );
}
