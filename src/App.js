import {React, lazy} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const Home = lazy(() => import ("./Pages/Course/Home/Home"));
const CourseTemplate = lazy(() => import ("./Templates/CourseTemplate"));
const CourseDetails = lazy(() => import ("./Pages/Course/CourseDetails/CourseDetails"));
const Cart = lazy(() => import ("./Pages/Course/Cart/Cart"));
const Login = lazy(() => import ("./Pages/Course/Login/Login"));
const Register = lazy(() => import ("./Pages/Course/Register/Register"));
const AdminTemplate = lazy(() => import ("./Templates/AdminTemplate"));
const CourseManagement = lazy(() => import ("./Pages/Admin/CourseManagement/CourseManagement"));
const UserManagement = lazy(() => import ("./Pages/Admin/UserManagement/UserManagement"));
const UserAdd = lazy(() => import ("./Pages/Admin/UserAdd/UserAdd"));
const SearchCourse = lazy(() => import ("./Pages/Course/SearchCourse/SearchCourse"));
const CourseListDetails = lazy(() => import ("./Pages/Course/CourseListDetails/CourseListDetails"));
const CourseProfile = lazy(() => import ("./Pages/Course/CourseProfile/CourseProfile"));
const CourseDetailsProfile = lazy(() => import ("./Pages/Course/CourseDetails/CourseDetailsProfile"));
const ProtectedRouteProfile = lazy(() => import ("./Routes/ProtectedRouteProfile"));
const ProtectedRouteAdmin = lazy(() => import ("./Routes/ProtectedRouteAdmin"));
const AdminProfile = lazy(() => import ("./Pages/Admin/AdminProfile/AdminProfile"));
const AdminLogin = lazy(() => import ("./Pages/Admin/AdminLogin/AdminLogin"));
const CourseAdd = lazy(() => import ("./Pages/Admin/CourseAdd/CourseAdd"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CourseTemplate />}>
          <Route index element={<Home />} />
          <Route path="/course/:category" element={<CourseDetails />} />
          <Route path="/courseList/:courseId" element={<CourseListDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:name" element={<SearchCourse />} />
          <Route element={<ProtectedRouteProfile />}>
            <Route path="/profile" element={<CourseProfile />} />
            <Route path="/profile/:category" element={<CourseDetailsProfile />} />
          </Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin" element={<AdminTemplate />}>
            <Route path="/admin/course" element={<CourseManagement />} />
            <Route path="/admin/addCourse" element={<CourseAdd />} />
            <Route path="/admin/user" element={<UserManagement />} />
            <Route path="/admin/addUser" element={<UserAdd />} />
            <Route path="/admin/adminProfile" element={<AdminProfile />} />
          </Route>
      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
