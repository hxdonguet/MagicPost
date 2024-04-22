import { UseSelector, useSelector } from "react-redux";
import { selectCurrentToken } from "../app/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

import React from 'react'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isAdmin = false;
    let isManage = false;
    let isEmployee = false;
    let isUser = false;

    if(token) {
        const decoded = jwtDecode(token)
        const {username, role, locationId,id, workPlace, name} = decoded.user
        // console.log(role)
        if(role === 'Employee') {
            isEmployee = true;
        } else if (role === 'Manager'){
            isManage = true;
            isEmployee = true;
        } else if(role === 'Admin') {
            isAdmin = true;
            isManage = true;
            isEmployee = true;
        } else {
            isUser = true;
        }
        return {id,username,name, role, workPlace, locationId, isAdmin, isManage, isEmployee, isUser}
    }
  return {username: '', role: ''}
}

export default useAuth