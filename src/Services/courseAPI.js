import axiosClient from "./axiosClient";

const maNhom = "GP03";

const courseAPI = {
  getCourse : () => {
    return axiosClient.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },
  getCourseList : () => {
    return axiosClient.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  getCourseByCategory : (category) => {
    return axiosClient.get("QuanLyKhoaHoc/LayThongTinKhoaHoc",{
      params: {
        maKhoaHoc: category,
      },
    });
  },
  registerCourse : (value) => {
    return axiosClient.post("QuanLyKhoaHoc/DangKyKhoaHoc",value);
  },
  adminUpdateCourse : (course) => {
    const formData = new FormData();
    for (let key in course) {
      formData.append(key, course[key]);
    }
    return axiosClient.post("QuanLyKhoaHoc/CapNhatKhoaHocUpload",formData);
    // return axiosClient.put("QuanLyKhoaHoc/CapNhatKhoaHoc",course);
  },
  adminAddCourse : (course) => {
    const formData = new FormData();
    for (let key in course) {
      formData.append(key, course[key]);
    }
    return axiosClient.post("QuanLyKhoaHoc/ThemKhoaHocUploadHinh",formData);
    // return axiosClient.put("QuanLyKhoaHoc/CapNhatKhoaHoc",course);
  },
  adminDeleteCourse : (id) => {
    return axiosClient.delete("QuanLyKhoaHoc/XoaKhoaHoc",{
      params: {
        maKhoaHoc: id,
      },
    });
  },
};

export default courseAPI;