import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Modal, ModalHeader, ModalFooter, ModalBody, Button} from "reactstrap"
import { getCourse } from '../../../Slices/courseSlice';
import { adminUpdateCourse,getCourseByCategory,adminDeleteCourse,resetCourseRegisterStatus } from '../../../Slices/courseSlice';
import { useFormik } from "formik";
import * as yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../../Components/Loading/Loading';

const initialValues = {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: "",
    danhGia: "",
    hinhAnh: "",
    ngayTao: new Date(),
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: "",
}

const schema = yup.object({
    tenKhoaHoc: yup.string()
      .required("This field is required"),
    moTa: yup.string()
      .required("This field is required"),
    luotXem: yup.number()
      .required("This field is required"),
    danhGia: yup.number()
      .required("This field is required"),
    taiKhoanNguoiTao: yup.string()
      .required("This field is required"),
    // img: yup.string()
    //   .required("This field is required"),
});

export default function CourseManagement() {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const { course, courseRegisterStatus, courseIsLoading } = useSelector((state) => state.course);
    const [searchTerm, setSearchTerm] = useState("");
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState(initialValues);
    const [modalConfirm, setModalConfirm] = useState(false);
    const toggleConfirm = () => setModalConfirm(!modalConfirm);
    const [buttonTrigger, setButton]= useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const toggle = () => setModal(!modal)
    const [courseDetail,setCourseDetail] = useState(null);

    const formIk = useFormik({
        initialValues: input,
        enableReinitialize: true,
        onSubmit: (value) => {
            let [year, month, day] =  value.ngayTao.split('-')

            const payload = {
                ...value,
                luotXem: +value.luotXem,
                danhGia: +value.danhGia,
                ngayTao: `${day}/${month}/${year}`,
            }
            dispatch(adminUpdateCourse(payload));
            setButton("edit");
            console.log(payload);
        },
        validateOnMount: true,
        validationSchema: schema,
    })
        
    useEffect(() => {
        dispatch(getCourse());
    },[])

    useEffect(() => {
        courseDetail && courseDetail.map((item) => {
            if (item.hasOwnProperty("danhMucKhoaHoc") && item.hasOwnProperty("nguoiTao")) {
                let [day, month, year] =  item.ngayTao.split('/')
                setInput({
                    maKhoaHoc: item.maKhoaHoc,
                    biDanh: item.biDanh,
                    tenKhoaHoc: item.tenKhoaHoc,
                    moTa: item.moTa,
                    luotXem: item.luotXem,
                    danhGia: item.soLuongHocVien,
                    hinhAnh: item.hinhAnh,
                    maNhom: item.maNhom,
                    ngayTao: `${year}-${month}-${day}`,
                    maDanhMucKhoaHoc: item.danhMucKhoaHoc.maDanhMucKhoahoc,
                    taiKhoanNguoiTao: item.nguoiTao.taiKhoan,
                })
            }
        })
    },[courseDetail])

    const handleDeleteCourse = (id) => {
        setModalConfirm(true);
        setDeleteId(id);
    }
   
    const handleChange = (event) => {
        const target = event.target.value;
        setSearchTerm(target);
    }
    
    const handleEdit = (id) => {
        setModal(!modal);
        setCourseDetail(course.filter(
            (item) => {return item.maKhoaHoc === id}
        ));
    }

    const confirmDelete = () => {
        dispatch(adminDeleteCourse(deleteId));
        setModalConfirm(!modalConfirm);
        setButton("delete");
    };

    const searchCourse = course.filter((val) => {
        if(searchTerm === "") {
            return val;
        } else if (val.tenKhoaHoc.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val;
        }
    })


    if (buttonTrigger === "delete") {
        if (courseRegisterStatus === "success") {
            toast.success("Delete complete !!!");
            dispatch(resetCourseRegisterStatus());
            dispatch(getCourse());
            setButton(null);
            setDeleteId(null);
        }
        if (courseRegisterStatus === "failed") {
            toast.error("Delete failed !!! Please try again");
            dispatch(resetCourseRegisterStatus());
            setButton(null);
            setDeleteId(null);
        }
    } else if (buttonTrigger === "edit") {
        if (courseRegisterStatus === "success") {
            toast.success("Edit complete !!!");
            dispatch(resetCourseRegisterStatus());
            dispatch(getCourse());
            setButton(null);
            setFile(null);
            toggle();
        }
        if (courseRegisterStatus === "failed") {
            toast.error("Edit failed !!! Please try again");
            dispatch(resetCourseRegisterStatus());
            setButton(null);
        }        
    }
    return (
        <div className="admin-data">
            <Toaster/>
            <h3 className="admin-titler">COURSES MANAGEMENT</h3>
            <div className="admin-content">
                <div className="table-header">
                    <form className="form-group"  action="">
                        <span>Search:</span>
                        <input onChange={handleChange} className="form-control"  type="text" />
                    </form>
                </div>
                {courseIsLoading ? <Loading/>
                :
                <div className="table-body">
                    <table className="admin-table table-striped table-bordered">
                        <thead>
                            <tr className="text-center">
                                <td>ID</td>
                                <td>Image</td>
                                <td>Course Name</td>
                                <td>Course Type</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                    <tbody>
                    {searchCourse.map((item, key) => {
                        return (
                            <tr key={key} className="text-center">
                                <td data-label="Id" className="id">
                                    {key + 1}
                                </td>
                                <td data-label="Image">
                                        <img style={{width: 150, height:70}} src={item.hinhAnh} alt="" />
                                    </td>
                                <td data-label="Course Name">{item.tenKhoaHoc}</td>
                                <td data-label="Course Type">{item.danhMucKhoaHoc.maDanhMucKhoahoc}</td>
                                <td data-label="Handel">
                                    <button onClick={ () => handleEdit(item.maKhoaHoc)}  className="btn btn-primary mr-2">
                                        <i className="far fa-edit"></i>
                                    </button>
                                    <button onClick={ () => handleDeleteCourse(item.maKhoaHoc)}  className="btn btn-danger">
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
        <Modal className="modal-admin-edit" isOpen={modal} toggle={toggle}>
            <h5 className="text-center text-primary">Update Course</h5>
            <form>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>ID</label>
                    <input
                        type="text"
                        className="form-control"
                        name="maKhoaHoc"
                        value={formIk.values.maKhoaHoc}
                        onChange={formIk.handleChange}
                        placeholder="ID"
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Code Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="biDanh"
                        value={formIk.values.biDanh}
                        onChange={formIk.handleChange}
                        placeholder="Code Name"
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Course Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tenKhoaHoc"
                        value={formIk.values.tenKhoaHoc}
                        onChange={formIk.handleChange}
                        placeholder="Course Name"
                    />
                    {formIk.errors.tenKhoaHoc && formIk.touched.tenKhoaHoc && <div className='form-text text-danger'>{formIk.errors.tenKhoaHoc}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="moTa"
                        value={formIk.values.moTa}
                        onChange={formIk.handleChange}
                        placeholder="Description"
                    />
                    {formIk.errors.moTa && formIk.touched.moTa && <div className='form-text text-danger'>{formIk.errors.moTa}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Views</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="luotXem" 
                        value={formIk.values.luotXem} 
                        onChange={formIk.handleChange} 
                        placeholder="luotXem"
                    />
                    {formIk.errors.luotXem && formIk.touched.luotXem && <div className='form-text text-danger'>{formIk.errors.luotXem}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Number of participants</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="danhGia" 
                        value={formIk.values.danhGia} 
                        onChange={formIk.handleChange} 
                        placeholder="Number of participants" 
                    />
                    {formIk.errors.danhGia && formIk.touched.danhGia && <div className='form-text text-danger'>{formIk.errors.danhGia}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Image</label>
                    <div className="d-flex justify-content-center pl-5">
                        <img className='mb-3 mr-5'
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : formIk.values.hinhAnh
                                }
                                alt=""
                                width="250px"
                                height="250px"
                                onClick={() => document.getElementById("image").click()}
                        />
                    </div>
                    <input 
                        id='image'
                        type="file" 
                        className="form-control" 
                        name="hinhAnh" 
                        onChange={(e) => {
                            if (e.target.files[0]) {
                              setFile(e.target.files[0]);
                              formIk.values.hinhAnh = e.target.files[0]
                            }
                        }}                        
                        placeholder="hinhAnh"
                        style={{display: "none"}}
                    />
                    <div className="info alert-info text-center">Click to change image</div>
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Create Date</label>
                    <input 
                        type="date" 
                        className="form-control"
                        value={formIk.values.ngayTao} 
                        name="ngayTao" 
                        onChange={formIk.handleChange} 
                        placeholder=">Create Date" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Course Type</label>
                    <div className='input-group mx-auto'>
                        <select name="maDanhMucKhoaHoc" className="form-select mr-3" aria-label="Default select example" value={formIk.values.maDanhMucKhoaHoc} onChange={formIk.handleChange}>
                            <option value="BackEnd">BackEnd</option>
                            <option value="Design">Design</option>
                            <option value="DiDong">DiDong</option>
                            <option value="FrontEnd">FrontEnd</option>
                            <option value="FullStack">FullStack</option>
                            <option value="TuDuy">TuDuy</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="" className='text-info'>Account Create</label>
                    <input
                        type="text"
                        className="form-control"
                        name="taiKhoanNguoiTao"
                        value={formIk.values.taiKhoanNguoiTao}
                        onChange={formIk.handleChange}
                        placeholder="Account Create"
                    />
                    {formIk.errors.taiKhoanNguoiTao && formIk.touched.taiKhoanNguoiTao && <div className='form-text text-danger'>{formIk.errors.taiKhoanNguoiTao}</div>}
                </div>
                <button type="button" className="btn btn-primary" onClick={formIk.handleSubmit} disabled={!(formIk.dirty)}>
                    Submit
                </button>
                <button type="button"  onClick={() => {toggle();setFile(null)}} className="btn btn-danger">
                    Close
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
