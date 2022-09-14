import React, { useRef,useState } from "react";
import * as yup from "yup";
import { useDispatch, useSelector} from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import Loading from "../../../Components/Loading/Loading";
import { getCourseList } from "../../../Slices/courseSlice";
import { adminAddCourse, resetCourseRegisterStatus } from "../../../Slices/courseSlice";
import { useFormik } from "formik";

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

const initialValues = {
  maKhoaHoc: "",
  maNhom: "",
  tenKhoaHoc: "",
  moTa: "",
  luotXem: "",
  danhGia: "",
  hinhAnh: "",
  ngayTao: "",
  maDanhMucKhoaHoc: "",
  taiKhoanNguoiTao: "",
}

const schema = yup.object().shape({
    maKhoaHoc: yup.string()
      .required("This field is required"),
    tenKhoaHoc: yup.string()
      .required("This field is required"),
    moTa: yup.string()
      .required("This field is required"),
    luotXem: yup
      .string().required("This field is required").matches(/^[0-9]+$/,"This field contains only number").min(0,"Minimum at least 0"),
    danhGia: yup
      .string().required("This field is required").matches(/^[0-9]+$/,"This field contains only number").min(0,"Minimum at least 0"),
});

export default function CourseAdd() {
    const dispatch = useDispatch();
    const [buttonTrigger, setButton]= useState(false);
    const { courseList, courseRegisterStatus, courseIsLoading } = useSelector((state) => state.course);
    const [file, setFile] = useState(null);
    const { userInfo } = useSelector((state) => state.auth);
    const [input, setInput] = useState(initialValues);

    useEffect(() => {
      dispatch(getCourseList());
    }, []);

    const formIk = useFormik({
      initialValues: input,
      enableReinitialize: true,
      onSubmit: (data) => {
        let [year, month, day] =  data.ngayTao.split('-')
        dispatch(adminAddCourse({
          ...data,
          ngayTao: `${day}/${month}/${year}`,
        }));
        setButton(true);
      },
      validateOnMount: true,
      validateOnBlur: true,
      validationSchema: schema,
  })
    
    useEffect(() => {
      if (userInfo) {
          setInput({
            maKhoaHoc: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "",
            maNhom: `${userInfo.maNhom.toUpperCase()}`,
            ngayTao: (new Date()).toISOString().split('T')[0],
            maDanhMucKhoaHoc: "",
            taiKhoanNguoiTao: `${userInfo.taiKhoan}`,
        })
      }
    }, [userInfo, setInput])

    if (buttonTrigger) {
        if (courseRegisterStatus === "success") {
            toast.success("Added complete !!!");
            setButton(false);
            dispatch(resetCourseRegisterStatus());
            formIk.resetForm();
            setFile(null);
        } 
        if (courseRegisterStatus === "failed") {
            toast.error("Added failed !!! Please try again");
            setButton(false);
            dispatch(resetCourseRegisterStatus());
        };
    }

  return (
    <div>
    <Toaster/>
    <h3 className="admin-title py-3">ADD USER</h3>
      <div>
        <div className="admin-add-course">
          {courseIsLoading ? 
          Loading()
          :
          <form className="mg-auto c" onSubmit={formIk.handleSubmit}>
          <div className="form-group">
            <label className="text-info">Course ID*</label>
            <input type="text" name="maKhoaHoc" className="form-control" value={formIk.values.maKhoaHoc} onChange={formIk.handleChange}/>

            {formIk.errors.maKhoaHoc && formIk.touched.maKhoaHoc && (
              <div className="alert alert-danger">{formIk.errors.maKhoaHoc}</div>
            )}
          </div>
          <div className="form-group">
            <label className="text-info">Course Name*</label>
            <input type="text" className="form-control" value={formIk.values.tenKhoaHoc} onChange={formIk.handleChange} name="tenKhoaHoc"/>
            
            {formIk.errors.tenKhoaHoc && formIk.touched.tenKhoaHoc && (
              <div className="alert alert-danger">{formIk.errors.tenKhoaHoc}</div>
            )}
          </div>
          <div className="form-group">
            <label className="text-info">Description*</label>
            <input
              type="text"
              className="form-control"
              value={formIk.values.moTa} onChange={formIk.handleChange}
              name="moTa"
            />
            {formIk.errors.moTa && formIk.touched.moTa && (
              <div className="alert alert-danger">{formIk.errors.moTa}</div>
            )}
          </div>
          <div className="form-group">
            <label className="text-info">Views*</label>
            <input
              type="text"
              className="form-control"
              value={formIk.values.luotXem} onChange={formIk.handleChange}
              name="luotXem"
            />
            {formIk.errors.luotXem && formIk.touched.luotXem && (
              <div className="alert alert-danger">{formIk.errors.luotXem}</div>
            )}
          </div>
          <div className="form-group">
            <label className="text-info">Ratings*</label>
            <input
              type="text"
              className="form-control"
              value={formIk.values.danhGia} onChange={formIk.handleChange}
              name="danhGia"
            />
            {formIk.errors.danhGia && formIk.touched.danhGia && (
              <div className="alert alert-danger">{formIk.errors.danhGia}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="" className='text-info'>Image*</label>
            <div className="d-flex justify-content-center pl-5">
                <img className='mb-3 mr-5'
                    src={
                        file
                            ? URL.createObjectURL(file)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                        width="250px"
                        height="250px"
                        onClick={() => document.getElementById("image").click()}
                />
            </div>
            <input 
                id="image"
                type="file" 
                className="form-control"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFile(e.target.files[0]);
                    formIk.values.hinhAnh = e.target.files[0]
                  }
                }}
                name="hinhAnh"
                placeholder="hinhAnh"
                style={{display: "none"}}
            />
            <div className="info alert-info text-center">Click to change image</div>
            { (file === null) &&  (
              <div className="alert alert-danger">"File is required"</div>
            )}
          </div>
          <div className="form-group">
              <label className="text-info">Group*</label>
              <select
                type="text"
                className="form-control"
                value={formIk.values.maNhom} onChange={formIk.handleChange}
                disabled
                name="maNhom"
              >
                {groupID.map((item) => {
                    return <option key={item.id} value={item.id}>{item.id}</option>
                })}
              </select>
          </div>
          <div className="form-group">
                <label htmlFor="" className='text-info'>Create Date</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formIk.values.ngayTao} onChange={formIk.handleChange}
                  name="ngayTao"
                />
          </div>
          <div className="form-group">
              <label className="text-info">Group*</label>
              <select
                type="text"
                className="form-control"
                value={formIk.values.maDanhMucKhoaHoc} onChange={formIk.handleChange}
                name="maDanhMucKhoaHoc"
              >
                {courseList.map((item,key) => {
                    return <option key={key + 1} value={item.maDanhMuc}>{item.tenDanhMuc}</option>
                })}
              </select>
          </div>
          <div className="form-group">
            <label className="text-info">Account Created*</label>
            <input
              type="text"
              className="form-control"
              value={formIk.values.taiKhoanNguoiTao} onChange={formIk.handleChange}
              disabled
            />
          </div>
          <button className="btn btn-success" disabled={!(formIk.dirty && (file !== null))}>Submit</button>
        </form>
            }
        </div>
        </div>
    </div>
  );
}
