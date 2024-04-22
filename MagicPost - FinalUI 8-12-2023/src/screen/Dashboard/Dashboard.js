import React from 'react'
import style from './Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faUsers, faBuilding, faTruck, faCubes, faClock, faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { selectAllPackages, useGetAllPackagesQuery } from '../../app/features/api/packageSlice'
import { selectAllEmployees, useGetEmployeesQuery } from '../../app/features/api/employeeSlice'

function Dashboard() {

  const packages = useSelector(selectAllPackages);
  const employees = useSelector(selectAllEmployees);
  useGetEmployeesQuery()
  useGetAllPackagesQuery();
  
  return (
    <div className={style.container}>
      <a href='/TransactionPlaces'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Total Transaction Places</p>
        </div>
        <FontAwesomeIcon icon={faBuilding} className={style.icon}/>
      </div></a>

      <a href='/GatheringPoints'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Total Gathering Points</p>
        </div>
        <FontAwesomeIcon icon={faBuilding} className={style.icon}/>
      </div></a>

      <a href='Packages/GetAll'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Total Packages</p>
        </div>
        <FontAwesomeIcon icon={faBoxOpen} className={style.icon}/>
      </div></a>

      <a href='/Packages/Pending'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Pending</p>
        </div>
        <FontAwesomeIcon icon={faClock} className={style.icon}/>
      </div></a>

      <a href='/Packages/Transportation'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Transportation</p>
        </div>
        <FontAwesomeIcon icon={faTruck} className={style.icon}/>
      </div></a>

      <a href='/Packages/Arrived'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Shipped</p>
        </div>
        <FontAwesomeIcon icon={faCubes} className={style.icon}/>
      </div></a>

      <a href='/Packages/Failed'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Unsuccessfull Delivery</p>
        </div>
        <FontAwesomeIcon icon={faRectangleXmark} className={style.icon}/>
      </div></a>

      <a href='Employee/GetAll'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Total Users</p>
        </div>
        <FontAwesomeIcon icon={faUsers} className={style.icon}/>
      </div></a>

      <a href='Employee/GetAll'><div className={style.options}>
        <div className={style.content}>
          <p className={style.number}>0</p>
          <p className={style.type}>Total Online Users</p>
        </div>
        <FontAwesomeIcon icon={faUsers} className={style.icon}/>
      </div></a>

    </div>
  )
}
export default Dashboard