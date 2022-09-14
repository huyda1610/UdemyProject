import React, { } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

const ProtectedRouteProfile = () => {
  const { userInfo} = useSelector( (state) => state.auth );

  if (userInfo && userInfo.maLoaiNguoiDung === "HV") {
    return <Outlet/>
  }
}

export default ProtectedRouteProfile