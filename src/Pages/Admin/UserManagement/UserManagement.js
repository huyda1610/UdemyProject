import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getUser,resetUserData, getUserDetail,updateUser, resetUserStatus, deleteUser } from '../../../Slices/userSlice';
import { useFormik } from "formik";
import * as yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap"
import Loading from '../../../Components/Loading/Loading';
import { useRef } from 'react';
const initialValues = {
  taiKhoan: "",
  hoTen: "",
  email: "",
  soDt: "",
  matKhau: "",
  maLoaiNguoiDung: "",
  maNhom: "GP03",
}

const schema = yup.object().shape({
    hoTen: yup.string()
        .required("This field is required"),
    soDT: yup
        .string().required("This field is required").matches(/^[0-9]+$/),
    matKhau: yup.string().required("This field is required"),
    email: yup.string().email('Invalid email format').required('This field is required'),
});

const isNumeric = (value) =>  {
    if (+value < 10 && value.slice(0,1) !== "0") return false;
    return /^-?\d+$/.test(value);
}

export default function UserManagement() {
    const dispatch = useDispatch();
    const { user, userDetail, userStatus, userIsLoading } = useSelector((state) => state.user);
    const [buttonTrigger, setButton]= useState(null);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const toggleConfirm = () => setModalConfirm(!modalConfirm);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchGroupID, setSearchGroupID] = useState("GP01");
    const [input, setInput] = useState(initialValues);
    const [modalConfirm, setModalConfirm] = useState(false);
    const [deleteValue, setDeleteValue] = useState(null);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
      dispatch(getUser(searchGroupID));
    }, [searchGroupID, dispatch]);

    useEffect(() => {
        setInput({
          taiKhoan: userDetail.taiKhoan,
          hoTen: userDetail.hoTen,
          email: userDetail.email,
          soDt: userDetail.soDt,
          matKhau: userDetail.matKhau,
          maLoaiNguoiDung: userDetail.maLoaiNguoiDung,
          maNhom: searchGroupID,
        });
    },[userDetail,searchGroupID]);

    const formIk = useFormik({
        initialValues: input,
        enableReinitialize: true,
        onSubmit: (value) => {
        const payload = {
            ...value,
        }
        dispatch(updateUser(payload));
        setButton("update");
        },
        validateOnMount: true,
        validationSchema: schema,
    })

    const handleEdit = (account) => {
        setModal(!modal);
        dispatch(getUserDetail({
            courseName: account,
            groupID: searchGroupID
        }));
    }

    const onChange = (event) => {
        const target = event.target.value;
        setSearchTerm(target);
    
    }

    const timeoutRef = useRef();
    const onChangeGroupID = (event) => {
        const target = event.target.value;
        clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                if (target.slice(0,2).toLowerCase() === "gp" && isNumeric(target.slice(2,4)) && +target.slice(2,4) <= 18) {
                    setSearchGroupID(target);
                    setFlag(false);
                } else {
                    dispatch(resetUserData());
                    setFlag(true);
                }
            }, 1000);
    }

    const searchData = user.filter((value) => {
        if(searchTerm === userDetail) {
            return value;
        }
        else if (value.taiKhoan.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return value;
        }
    })
    
    useEffect(() => {
        if (buttonTrigger === "update") {
            if (userStatus === 1) {
                setModal(!modal);
                toast.success("Update complete !!!");
                setButton(null);
                dispatch(resetUserStatus());
                dispatch(getUser());
            } 
            if (userStatus === 0) {
                toast.error("Update failed !!! Please try again");
                setButton(null)
                dispatch(resetUserStatus());
            };
        }
        if (buttonTrigger === "delete") {
            if (userStatus === 1) {
                toast.success("Delete complete !!!");
                setButton(null);
                dispatch(resetUserStatus());
                dispatch(getUser());
            } 
            if (userStatus === 0) {
                toast.error("Delete failed !!! Please try again");
                setButton(null)
                dispatch(resetUserStatus());
            };
        }
    }, [buttonTrigger, setButton, userStatus,modal,dispatch]);

    const handleDelete = (values) => {
        setDeleteValue(values);
        setModalConfirm(!modalConfirm);
    };

    const confirmDelete = () => {
        dispatch(deleteUser(deleteValue));
        setModalConfirm(!modalConfirm);
        setButton("delete");
    };

    return (
        <div className="admin-listsuser admin-data">
        <Toaster/>
        <h3 className="admin-title py-3">USER MANAGEMENT</h3>
        <div className="admin-content">
            <div className="table-header">
                <form className="form-group"  action="">
                    <span>Group:</span>
                    <p className='text-info'>Format: GP + Group ID .Group ID from 01 -> 18. Exp: GP09, GP16</p>
                    <input className="form-control" defaultValue={searchGroupID} onChange = {onChangeGroupID} type="text" />
                    {flag && <p className='text-danger'>Wrong Format !!!</p>}
                </form>
                <form className="form-group"  action="">
                    <span>Search Course:</span>
                    <input className="form-control" onChange = {onChange} type="text" />
                </form>
            </div>
            {userIsLoading ? Loading() 
            :
            <div className="table-body">
                <table className="admin-table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Account</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone Number</td>
                            <td>User Type</td>
                            <td>Handle</td>
                        </tr>
                    </thead>
                        <tbody>
                            {searchData.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td data-label="Id" className="id">
                                            {key + 1}
                                        </td>
                                        <td data-label="User Name">{item.taiKhoan}</td>
                                        <td data-label="User Name">{item.hoTen}</td>
                                        <td data-label="Email">{item.email}</td>
                                        <td data-label="Phone Number">{item.soDt}</td>
                                        <td data-label="User Type">{item.maLoaiNguoiDung}</td>
                                        <td data-label="Handel">
                                            <button onClick={ () => handleEdit(item.taiKhoan)} className="btn btn-primary mr-2">
                                                <i className="far fa-edit"></i>
                                            </button>
                                            <button onClick={ () => handleDelete(item.taiKhoan)} className="btn btn-danger">
                                                <i className="far fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                </table>
            </div>
            }

        </div>
        <Modal className="admin-edit-user" isOpen={modal} toggle={toggle}>
                <div className="form-group d-flex justify-content-between">
                    <h5 className="w-100 text-center text-primary">Update User</h5>
                </div>
            <form className="px-3" onSubmit={formIk.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='text-info'>Account</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Account"
                        name="taiKhoan"
                        value={formIk.values.taiKhoan}
                        onChange={formIk.handleChange}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='text-info'>Password</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        name="matKhau"
                        value={formIk.values.matKhau}
                        onChange={formIk.handleChange}
                    />
                    {formIk.errors.matKhau && formIk.touched.matKhau && <small className="form-text" style={{ color: "red" }}>{formIk.errors.matKhau}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='text-info'>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="hoTen"
                        value={formIk.values.hoTen}
                        onChange={formIk.handleChange}
                    />
                    {formIk.errors.hoTen && formIk.touched.hoTen && <small className="form-text" style={{ color: "red" }}>{formIk.errors.hoTen}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='text-info'>Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="soDt"
                        value={formIk.values.soDt}
                        onChange={formIk.handleChange}
                    />
                    {formIk.errors.soDt && formIk.touched.soDt && <small className="form-text" style={{ color: "red" }}>{formIk.errors.soDt}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='text-info'>User Type</label>
                    <div className='input-group mx-auto'>
                        <select name="maLoaiNguoiDung" className="form-select form-select-lg mr-3" aria-label="Default select example" value={formIk.values.maLoaiNguoiDung} onChange={formIk.handleChange}>
                            <option value="HV">Student</option>
                            <option value="GV">Teacher</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='text-info'>Group Id</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Group Id"
                        name="maNhom"
                        value={formIk.values.maNhom}
                        onChange={formIk.handleChange}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='text-info'>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formIk.values.email}
                        onChange={formIk.handleChange}
                    />
                    {formIk.errors.email && formIk.touched.email && <small className="form-text" style={{ color: "red" }}>{formIk.errors.email}</small>}
                </div>
                <button type="submit" className="btn btn-primary mb-3" disabled={(!formIk.dirty)}>
                    Submit
                </button>
                <button onClick={toggle} type="button" className="btn btn-danger mb-3" >
                    Cancel
                </button>
            </form>
        </Modal>
        <Modal isOpen={modalConfirm} toggle={toggleConfirm}>
            <ModalHeader>Confirm dialog</ModalHeader>
            <ModalBody>
                <h5 className='text-danger'>Are you sure? Action cannot be revert</h5>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => confirmDelete()}>
                    Yes
                </Button>
                <Button color="secondary" onClick={() => setModalConfirm(!modalConfirm)}>
                    Cancel
                </Button>
            </ModalFooter>            
        </Modal>
    </div>
    );
}
