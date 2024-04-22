import React, { useEffect, useState } from 'react'
import style from './EmployeeNav.module.css'
import useAuth from '../../hook/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,  faUser, faAngleDown, faAngleLeft, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLogOutMutation } from '../../app/features/auth/authApiSlice'

function EmployeeNav() {
  const [isShowAdmin, setIsShowAdmin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  // const { pathName } = useLocation()
  const { id, locationId, name, workPlace } = useAuth()

  let workType;
  if(workPlace == 'Transaction') {
    workType = 'Điểm giao dịch'

  } else {
    workType = 'Điểm tập kết'
  }

  

  const [logOut, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useLogOutMutation()


  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p> Logging out...</p>

  if (isError) return <p>{error?.data?.message}</p>

  return (
    <nav className={style.mainheader}>
      <ul className={style.navbar}>
        <li className={style.navitem}>
          <Link className={style.navlink}>
            <FontAwesomeIcon icon={faList} className={style.navimg} />
          </Link>
        </li>
        <li>
          <a className={style.textwhite}>
            <b>{workType}</b>
          </a>
        </li>
      </ul>
      <ul className={style.mlauto}>
        <li className={style.navdropdown}>
          <Link>
            <span onClick={() => setIsShowAdmin(!isShowAdmin)}>
              <div className={style.dlfex}>
                <span className={style.mr2}>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className={style.ndad}>
                  <b>{name}</b>
                </span>
                <span className={style.mr3}>
                  {!isShowAdmin ? <FontAwesomeIcon icon={faAngleLeft} /> : < FontAwesomeIcon icon={faAngleDown} />}
                </span>
              </div>
            </span>
          </Link>
          {isShowAdmin &&
            <div className={style.drmenu}>
              <Link to ={`employee/profile/${id}`} className={style.dritem} onClick={() => setIsShowAdmin(!isShowAdmin)}>
                <FontAwesomeIcon icon={faUser} />
                <span className={style.drnd} onClick={() => setOpenModal(true)}>Quản lý tài khoản</span>
              </Link>
              <button className={style.dritem} onClick={logOut}>
                <FontAwesomeIcon icon={faPowerOff} />
                <span className={style.drnd}>Đăng xuất</span>
              </button>
            </div>
          }
        </li>
      </ul>
    </nav>
  )
}

export default EmployeeNav