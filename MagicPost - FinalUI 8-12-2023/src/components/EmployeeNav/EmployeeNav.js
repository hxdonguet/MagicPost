import React, { useState } from 'react'
import style from './EmployeeNav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMaximize, faUser, faAngleDown, faAngleLeft, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function EmployeeNav() {
  const [isShowAdmin, setisShowAdmin] = useState(false);
  return (
    <nav className={style.mainheader}>
      <ul className={style.navbar}>
        <li className={style.navitem}>
          <a className={style.navlink}>
            <FontAwesomeIcon icon={faList} className={style.navimg} />
          </a>
        </li>
        <li>
          <a className={style.textwhite}>
            <large>
              <b>Trang Quản Trị - Administration Page</b>
            </large>
          </a>
        </li>
      </ul>
      <ul className={style.mlauto}>
        <li className={style.navitem}>
          <a className={style.navlink}>
            <FontAwesomeIcon icon={faMaximize} className={style.navimg} />
          </a>
        </li>
        <li className={style.navdropdown}>
          <a className={style.ndc}>
            <span className={style.cssspan}>
              <div className={style.dlfex}>
                <span className={style.mr2}>
                  <FontAwesomeIcon icon={faUser}/>
                </span>
                <span className={style.ndad}>
                  <b>Administator</b>
                </span>
                <span onClick={() => setisShowAdmin(!isShowAdmin)} className={style.mr3}>
                  {!isShowAdmin ? <FontAwesomeIcon icon={faAngleLeft} /> : < FontAwesomeIcon icon={faAngleDown}/>}
                </span>
              </div>
            </span>
          </a>
          {isShowAdmin &&
            <div className={style.drmenu}>
              <Link to='/InfoAdmin'><a className={style.dritem}>
                <FontAwesomeIcon icon={faUser} className={style.dricon}/>
                <span className={style.drnd}>Quản lý tài khoản</span>
              </a></Link>
              <a className={style.dritem}>
                <FontAwesomeIcon icon={faPowerOff} className={style.dricon}/>
                <Link to='/'><span className={style.drnd}>Đăng xuất</span></Link>
              </a>
            </div>
          }
        </li>
      </ul>
    </nav>
  )
}

export default EmployeeNav