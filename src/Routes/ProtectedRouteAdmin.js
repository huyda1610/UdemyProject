import React, { } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

const ProtectedRouteAdmin = () => {
  const { userInfo} = useSelector( (state) => state.auth );

  if (userInfo && userInfo.maLoaiNguoiDung === "GV") {
    return <Outlet/>
  }
}

export default ProtectedRouteAdmin