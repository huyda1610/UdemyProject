import axios from "axios";
import qs from "qs";

const axiosClient = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIxMS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzA3MTY4MDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MDg2NDQwMH0.hImF3FD5ezlSpmo_fyOBeTlwLGcUfxyEeZIRIddaRFE",
  },
  // Bỏ qua giá trị null và undefined trong params
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});

axiosClient.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
      const {accessToken} = JSON.parse(userInfo);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
   (error) => {
    if (error.response.status === 401) {
      // xử lý logout: clear localstorage, đẩy người dùng về trang login
    }
    if (error.response.status === 500) {
      // Xử lý thông báo cho người dùng là server đang bị lỗi
      
    }
    if (error.status === 400) {
    
      // Xử lý thông báo cho người dùng là server đang bị lỗi
      
    }
    return Promise.reject(error);
  }
)

export default axiosClient;