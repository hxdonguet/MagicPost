import React, { useState } from 'react'
import style from './Employee.module.css'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'
import EditEmployeeForm from '../../components/EditEmployeeForm/EditEmployeeForm'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import { useSelector } from 'react-redux'
import { selectAllEmployees } from '../../app/features/api/employeeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faEyeSlash, faEye  } from '@fortawesome/free-solid-svg-icons'
import { useGetEmployeesQuery } from '../../app/features/api/employeeSlice'



function Employee() {

  const employees = useSelector(selectAllEmployees);
  const [openModal, setOpenModal] = useState(false);
  const [openRemove, setRemove] = useState(employees.map(() => false));
  const [openEdit, setEdit] = useState(employees.map(() => false));
  const [showPassword, setShowPassword] = useState(employees.map(() => false));

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetEmployeesQuery()

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

  const toggleShowPassword = (index) => {
    let newShow = [...showPassword];
    newShow[index] = !newShow[index];
    setShowPassword(newShow);
  }
  const handlePassword = (password, check) => {
    let newPass = '';
    for (let i = 0; i < password.length; i++) {
      newPass += '*';
    }
    if (newPass.length > 8) newPass = newPass.substring(0, 8)
    if (!check) password = newPass;
    return password;
  }


  let content
  if (isLoading) {
    content =
      <tr>
        <td>Is Loading</td>
      </tr>
  } else if (isSuccess) {
    content = employees.map((employee, index) => (
      <tr key={index}>
        <td >{employee.id}</td>
        <td >{employee.employeeName}</td>
        <td >{employee.username}</td>
        <td className={style.field}>
          {handlePassword(employee.password, showPassword[index])}
          {showPassword[index] ? <FontAwesomeIcon icon={faEye} onClick={() => toggleShowPassword(index)} /> : <FontAwesomeIcon icon={faEyeSlash} onClick={() => toggleShowPassword(index)} />}
        </td>
        <td>{employee.email}</td>
        <td >{employee.phoneNumber}</td>
        <td>
          <div className={style.action}>
            <button className={`${style.btn} ${style.btn_primary}`} onClick={() => handleOpenEdit(index)}>
              <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            </button>
            {openEdit[index] && <EditEmployeeForm index={index} employee={employee} handleEdit={handleOpenEdit} />}
            <button className={`${style.btn} ${style.btn_danger}`} onClick={() => handleOpenRemove(index)}>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
            {openRemove[index] && <DeleteForm index={index} employee={employee} handleRemove={handleOpenRemove} />}
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
      {/* <div className={style.nav}>
        <form className={style.search} >
          <div className={style.search_field}>
            <input
              type="text"
              placeholder="Search content here..."
            />
          </div>
          <button className={style.button}> Search </button>
        </form>
        <button className={style.button} onClick={() => setOpenModal(true)}>Create Employee</button>
      </div> */}
      <div className={style.search}>
        <div className={style.d_flex}>
          <div className={style.serach_field_2}>
            <div className={style.search_inner}>
              <form action='POST'>
                <div className={style.search_field}>
                  <input
                    type="text"
                    placeholder="Search content here..."
                  />
                </div>
              </form>
            </div>
          </div>
          <div className={style.ms_2}>
            <button className={style.btn_1}>
              Search
            </button>
          </div>
          <div className={style.ms_2}>
            <button className={style.btn_1} onClick={() => setOpenModal(true)}>Create Employee</button>
          </div>
        </div>
      </div>

      <div className={style.content}>
        <table className={style.table}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {content}
          </tbody>
        </table>
      </div>
      {openModal && <EmployeeForm openModal={setOpenModal} />}
    </div>
  )
}

export default Employee