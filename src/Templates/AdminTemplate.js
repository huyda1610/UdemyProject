import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
export default function AdminTemplate() {

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
  };

  return (
    <div className="menu-admin d-flex">
      <div className="menu-admin__left">
        <div className="admin-logo">
          <Link to="/">
            <h5> <span> <i className="fas fa-user-shield"></i></span> ADMIN</h5>
          </Link>
        </div>
        <div className="menu-admin__list">
          <ul className="menu-admin__sub">
            <li><Link to="/admin/course"><i className="far fa-list-alt"></i> <span>Courses Management</span> </Link></li>
            <li><Link to="/admin/addCourse"><i className="far fa-address-book"></i> Add Course</Link></li>
            <li><Link to="/admin/user"><i className="fas fa-users"></i> Users Management</Link></li>
            <li><Link to="/admin/addUser"><i className="fas fa-user-plus"></i> Add Users</Link></li>
            <li><Link to="/admin/adminProfile"><i className="fas fa-user-secret"></i> Admin Profile</Link></li>
            <li><Link to="/admin/login" onClick={() => handleLogout()}><i className="fas fa-sign-in"></i> Log out</Link></li>
          </ul>
        </div>
      </div>
      <div className="menu-admin__right">
        <div className="menu-admin__right-content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
