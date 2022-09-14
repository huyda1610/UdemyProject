import React, { useRef,useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector} from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { addUser, resetUserStatus } from "../../../Slices/userSlice";
import { useEffect } from "react";
import Loading from "../../../Components/Loading/Loading";
const groupID = [
  {id:"GP01"},
  {id:"GP02"},
  {id:"GP03"},
  {id:"GP04"},
  {id:"GP05"},
  {id:"GP06"},
  {id:"GP07"},
  {id:"GP08"},
  {id:"GP09"},
  {id:"GP10"},
  {id:"GP11"},
  {id:"GP12"},
  {id:"GP13"},
  {id:"GP14"},
  {id:"GP15"},
  {id:"GP16"},
  {id:"GP17"},
  {id:"GP18"},
  {id:"GP19"},
]
const schema = yup.object().shape({
    hoTen: yup.string()
        .required("This field is required"),
    soDT: yup
        .string().required("This field is required").matches(/^[0-9]+$/,"This field contains only number"),
    taiKhoan: yup
        .string()
        .required("This field is required")
        .matches(
          /^[A-Za-z0-9_]*$/,
          "This field only contains letters, numbers and _"
        ),
    matKhau: yup.string().required("This field is required"),
    email: yup.string().email('Invalid email format').required('This field is required'),
});

export default function UserAdd() {
    const dispatch = useDispatch();
    const [buttonTrigger, setButton]= useState(false);
    const { userStatus, userIsLoading } = useSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset,
    } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

    const onSubmit = (data) => {
      dispatch(addUser({...data}));
      setButton(true);
    };

    useEffect(() => {
      if (buttonTrigger) {
          if (userStatus === 1) {
              toast.success("Added complete !!!");
              setButton(false);
              dispatch(resetUserStatus());
              reset();
          } 
          if (userStatus === 0) {
              toast.error("Added failed !!! Please try again");
              setButton(false);
              dispatch(resetUserStatus());
          };
      }
  }, [buttonTrigger, setButton, userStatus,dispatch,reset]);

  return (
    <div>
    <Toaster/>
    <h3 className="admin-title py-3">ADD USER</h3>
      <div>
        <div className="admin-add-user">
          {userIsLoading ? 
          Loading()
          :
          <form className="mg-auto c" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="text-info">Account*</label>
            <input type="text" className="form-control" {...register("taiKhoan")}/>

            {errors.taiKhoan && (
              <div className="alert alert-danger">{errors.taiKhoan.message}</div>
            )}
          </div>
          <div className="form-group">
            <label className="text-info">Password*</label>
            <input type="text" className="form-control" {...register("matKhau")}/>
            {errors.matKhau && (
              <div className="alert alert-danger">{errors.matKhau.message}</div>
            )}
          </div>
          <div className="form-group">
            <label className="text-info">FullName*</label>
            <input
              type="text"
              className="form-control"
              {...register(
                "hoTen"
              )}
            />
            {errors.hoTen && (
              <div className="alert alert-danger">{errors.hoTen.message}</div>
            )}
          </div>
          <div className="form-group">
            <label className="text-info">Phone*</label>
            <input
              type="text"
              className="form-control"
              {...register(
                "soDT"
              )}
            />
            {errors.soDT && (
              <div className="alert alert-danger">{errors.soDT.message}</div>
            )}
          </div>

          <div className="form-group">
              <label className="text-info">Group*</label>
              <select
                type="text"
                className="form-control"
                {...register(
                  "maNhom"
                )}
              >
                {groupID.map((item) => {
                    return <option key={item.id} value={item.id}>{item.id}</option>
                })}
              </select>
          </div>

          <div className="form-group">
              <label className="text-info">User Type*</label>
              <select className="form-control" {...register("maLoaiNguoiDung")}>
                  <option value="GV">Teacher</option>
                  <option value="HV">Student</option>
              </select>
              {errors.maLoaiNguoiDung && (
              <div className="alert alert-danger">{errors.maLoaiNguoiDung.message}</div>
            )}
          </div>
          <div className="form-group">
            <label className="text-info">Email</label>
            <input
              type="text"
              className="form-control"
              {...register(
                "email"
              )}
            />
            {errors.email && (
              <div className="alert alert-danger">{errors.email.message}</div>
            )}
          </div>
          <button className="btn btn-success" disabled={(!isDirty || !isValid)}>Submit</button>
        </form>
            }
        </div>
        </div>
    </div>
  );
}
