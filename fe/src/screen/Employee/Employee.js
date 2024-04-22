import React, { useState, useEffect } from 'react'
import style from './Employee.module.css'
import CreateEmployee from '../../components/CreateEmployee/CreateEmployee'
import EditEmployee from '../../components/EditEmployee/EditEmployee'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import { useSelector } from 'react-redux'
import { selectAllEmployees } from '../../app/features/api/employeeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useGetEmployeesByLocationIdQuery, useGetEmployeesQuery } from '../../app/features/api/employeeSlice'
import useAuth from '../../hook/useAuth'
import ReactPaginate from 'react-paginate';


function Employee() {

  const { locationId, isAdmin } = useAuth()

  const employees = useSelector(selectAllEmployees);
  const [openModal, setOpenModal] = useState(false);
  const [openRemove, setRemove] = useState(employees.map(() => false));
  const [openEdit, setEdit] = useState(employees.map(() => false));

  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const [newContent, setNewContent] = useState([])

  const dataHook = isAdmin ? useGetEmployeesQuery : useGetEmployeesByLocationIdQuery

  const { data: getEmployees, isSuccess, isLoading, isError, error } = dataHook({ id: locationId, role: "Employee" })

  const handleOpenRemove = (index) => {
    let newRemove = [...openRemove]
    newRemove[index] = !newRemove[index];
    setRemove(newRemove);
  }
  const handleOpenEdit = (index) => {
    let newEdit = [...openEdit]
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  }
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1)
  };

  useEffect(() => {
    if (isSuccess) {
      const { ids, entities } = getEmployees
      let newArr = ids.filter(id => {
        return search.toLowerCase() === ''
          ? entities[id]
          : entities[id]._id.toLowerCase().includes(search)
      })
      if(isAdmin) {
        newArr = newArr.filter(id => {
          return entities[id].role !== "Admin"
        })
      }
      setNewContent(newArr) 
          const nPage = Math.ceil(newArr.length / recordsPerPage)
          setTotalPage(nPage)
    }
  }, [getEmployees, isSuccess, search])



  let content
  if (isLoading) {
    content =
      <tr>
        <td>Is Loading</td>
      </tr>
  } else if (isSuccess) {
    const {entities} = getEmployees
    const records = newContent.slice(firstIndex, lastIndex)
    content = records.map((id, index) => (
      <tr key={index}>
        <td >{entities[id]._id}</td>
        <td >{entities[id].name}</td>
        <td >{entities[id].username}</td>
        <td>{entities[id].email}</td>
        <td >{entities[id].phoneNumber}</td>
        <td >{entities[id].role}</td>
        <td>
          <div className={style.action}>
            <button className={`${style.btn} ${style.btn_danger}`} onClick={() => handleOpenRemove(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            {openRemove[index] && <DeleteForm index={index} employee={entities[id]} handleRemove={handleOpenRemove} />}
          </div>
        </td>
      </tr>
    ))
  } else if (isError) {
    content =
      <tr>
        <td>{error}</td>
      </tr>
  }

  return (
    <div className={style.container}>
      {/*<div className={style.button_filter}>
        <button className={`${style.btn_manage} ${style.button}`}>Manage</button>
        <button className={`${style.btn_employee} ${style.button}`}>Employee</button>
      </div>*/}
      <div className={style.search}>
        <form className={style.form}>
          <input
            type="text"
            placeholder="Nhập ID"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={style.button}>
            Tìm kiếm
          </button>
        </form>
        <button className={style.button} onClick={() => setOpenModal(true)}>Tạo nhân viên mới</button>
      </div>

      <table className={style.table}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Tên đăng nhập</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Vai trò</th>
            <th scope="col">Xử lý</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPage}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={style.pagination}
        pageClassName={style.pageNum}
        previousClassName={style.pageNum}
        nextClassName={style.pageNum}
        activeLinkClassName={style.active}
      />
      {openModal && <CreateEmployee openModal={setOpenModal} />}
    </div>
  )
}

export default Employee