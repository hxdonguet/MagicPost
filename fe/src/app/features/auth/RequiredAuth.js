import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector  } from "react-redux";
import { selectCurrentToken } from "./authSlice";

import React from 'react'

const RequiredAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()
    
  return (
    <div>RequiredAuth</div>
  )
}

export default RequiredAuth
