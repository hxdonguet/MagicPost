import React, { useState, useEffect } from 'react'
import style from './Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faUsers, faBuilding, faTruck, faCubes, faClock, faRectangleXmark, faShop } from '@fortawesome/free-solid-svg-icons'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { selectAllPackages, useGetAllPackagesQuery } from '../../app/features/api/packageSlice'
import { selectAllEmployees, useGetEmployeesQuery } from '../../app/features/api/employeeSlice'
import { selectAllTransactionPoint, useGetAllTransactionPointQuery } from '../../app/features/api/transactionPointSlice'
import { selectAllWarehouse, useGetAllWarehouseQuery } from '../../app/features/api/wareHouseSlice'
import { Link } from 'react-router-dom'

function Dashboard() {

  const columnChart = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: ['Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
      }
    },
    series: [{
      name: 'Đơn hàng',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 20, 30]
    }]
  }

  var circleChart = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 200
      },
      labels: ['Đang vận chuyển', 'Thành công', 'Thất bại', 'Chờ xử lý', 'Giao hàng'],
      legend: {
        position: 'right',
        fontSize: '18px',
        fontFamily: 'Helvetica, Arial',
        horizontalAlign: 'center',
      }
    }
  };

  const [allPackages, setAllPackages] = useState(0);
  const [allEmployees, setAllEmployees] = useState(0);
  const [allWarehouses, setAllWarehouses] = useState(0);
  const [allTransactionPoints, setAllTransactionPoints] = useState(0);

  const { data: getAllPackages, isSuccess: successPackages } = useGetAllPackagesQuery()
  const { data: getAllEmployees, isSuccess: successEmployees } = useGetEmployeesQuery()
  const { data: getAllWarehouses, isSuccess: successWarehouses } = useGetAllWarehouseQuery()
  const { data: getAllTransactionPoints, isSuccess: successTransactions } = useGetAllTransactionPointQuery()

  useSelector(selectAllEmployees)
  useSelector(selectAllPackages)
  useSelector(selectAllWarehouse)
  useSelector(selectAllTransactionPoint)


  useEffect(() => {
    if (successPackages) {
      const { ids } = getAllPackages
      setAllPackages(ids.length)
    }
    if (successEmployees) {
      const { ids } = getAllEmployees
      setAllEmployees(ids.length)
    }
    if (successWarehouses) {
      const { ids } = getAllWarehouses
      setAllWarehouses(ids.length)
    }
    if (successTransactions) {
      const { ids } = getAllTransactionPoints
      setAllTransactionPoints(ids.length)
    }
  }, [getAllPackages, getAllEmployees, getAllWarehouses, getAllTransactionPoints])

  let tableContent;
  if (successPackages) {
    const { ids, entities } = getAllPackages
    tableContent = ids.slice(0, 5).map(id => {
      return (
        <tr key={id}>
          <td>{entities[id]._id}</td>
          <td>{entities[id].senderName}</td>
          <td>{entities[id].receiverName}</td>
          <td>{entities[id].senderTown}</td>
          <td>{entities[id].receiverTown}</td>
          <td>{entities[id].status}</td>
        </tr>
      )
    })
  }
  return (
    <div className={style.container}>
      <div className={style.info}>

        <div className={style.options}>
          <FontAwesomeIcon icon={faShop} className={style.icon1} />
          <div className={style.content}>
            <p className={style.type}>ĐIỂM GIAO DỊCH</p>
            <p className={style.number}>{allTransactionPoints} điểm</p>
            <hr className={style.ngancach}></hr>
            <p className={style.description}>Tổng điểm giao dịch trên cả nước.</p>
          </div>
        </div>

        <div className={style.options}>
          <FontAwesomeIcon icon={faBuilding} className={style.icon2} />
          <div className={style.content}>
            <p className={style.type}>ĐIỂM TẬP KẾT</p>
            <p className={style.number}>{allWarehouses} điểm</p>
            <hr className={style.ngancach}></hr>
            <p className={style.description}>Tổng điểm tập kết trên cả nước.</p>
          </div>
        </div>


        <div className={style.options}>
          <FontAwesomeIcon icon={faBoxOpen} className={style.icon3} />
          <div className={style.content}>
            <p className={style.type}>TỔNG ĐƠN HÀNG</p>
            <p className={style.number}>{allPackages} đơn hàng</p>
            <hr className={style.ngancach}></hr>
            <p className={style.description}>Tổng số đơn hàng trên cả nước.</p>
          </div>
        </div>

        <div className={style.options}>
          <FontAwesomeIcon icon={faUsers} className={style.icon4} />
          <div className={style.content}>
            <p className={style.type}>TỔNG NHÂN VIÊN</p>
            <p className={style.number}>{allEmployees} nhân viên</p>
            <hr className={style.ngancach}></hr>
            <p className={style.description}>Tổng số nhân viên trên cả nước.</p>
          </div>
        </div>

      </div>

      <div className={style.listPackage}>
        <div className={style.viewAll}>
          <p className={style.motads}>Danh sách đơn hàng gần đây</p>
          <hr></hr>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Người gửi</th>
              <th scope="col">Người nhận</th>
              <th scope="col">Nơi gửi</th>
              <th scope="col">Nơi nhận</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {tableContent}
          </tbody>
          <Link to='/packages/getall' className={style.viewMore}>Xem thêm...</Link>
        </table>
      </div>
      <div className={style.columnChart}>
        <p className={style.motabd}>Biểu đồ thống kê tổng đơn hàng theo tháng</p>
        <hr></hr>
        <Chart className={style.bdcot} options={columnChart.options} series={columnChart.series} type="bar" width={600} height={350} />
      </div>
      <div className={style.circleChart}>
        <p className={style.motabd}>Biểu đồ thống kê trạng thái đơn hàng</p>
        <hr></hr>
        <Chart className={style.bdtron} options={circleChart.options} series={circleChart.series} type="pie" width={450} />
      </div>

    </div>

  )
}
export default Dashboard