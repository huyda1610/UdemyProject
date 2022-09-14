import axiosClient from "./axiosClient";

const maNhom = "GP01";
const authAPI = {
  login : (account) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap",account);
  },
  registerAccount : (account) => {
    const payload = {...account, maNhom: maNhom};
    return axiosClient.post("QuanLyNguoiDung/DangKy",payload);
  },
};

export default authAPI;