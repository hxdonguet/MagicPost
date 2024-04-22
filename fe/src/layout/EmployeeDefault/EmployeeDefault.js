import React from 'react'
import style from './EmployeeDefault.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import EmployeeNav from '../../components/EmployeeNav/EmployeeNav'
import { Outlet } from 'react-router-dom'

function EmployeeDefault() {
    return (
        <div className={style.container}>
            <div className={style.sidebar}>
                <Sidebar />
            </div>
            <div className={style.content}>
                <EmployeeNav />
                <Outlet />

            </div>
        </div>
    )
}

export default EmployeeDefault