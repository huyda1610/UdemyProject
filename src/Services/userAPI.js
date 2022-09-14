import axiosClient from "./axiosClient";

const userAPI = {
  getUser : (groupID) => {
    return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung",{
      params: {
        MaNhom: groupID,
      },
    });
  },
  getUserDetail : (account) => {
    return axiosClient.get("QuanLyNguoiDung/TimKiemNguoiDung",{
      params: {
        MaNhom: account.groupID,
        tuKhoa: account.courseName
      },
    });
  },

  updateUser : (info) => {
    return axiosClient.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung",info);
  },

  deleteUser : (account) => {
    return axiosClient.delete("QuanLyNguoiDung/XoaNguoiDung",{
      params: {
        TaiKhoan: account,
      },
    });
  },

  addUser : (info) => {
    return axiosClient.post("QuanLyNguoiDung/ThemNguoiDung",info);
  },
  
  getUserProfile : () => {
    return axiosClient.post("QuanLyNguoiDung/ThongTinNguoiDung");
  },

  removeRegisterCourseProfile : (value) => {
    return axiosClient.post("QuanLyKhoaHoc/HuyGhiDanh",value);
  },
};

export default userAPI;