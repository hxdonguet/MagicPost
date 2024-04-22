import React, { useState } from 'react'
import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faBuilding, faAngleLeft, faAngleDown, faTruck, faCubes, faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function Sidebar() {
    const [isShowBranch, setisShowBranch] = useState(false);
    const [isShowBranchStaff, setisShowBranchStaff] = useState(false);
    const [isShowPackage, setisShowPackage] = useState(false);
    const [isShowEmployee, setisShowEmployee] = useState(false);
    return (
        <aside className={style.mainsb}>
            <div className={style.dropdown}>
                <a href='/Dashboard' className={style.brandlink}>
                    <h3 className={style.p0m0}>
                        <b className={style.mauchu}>MAGICPOST</b>
                    </h3>
                </a>
            </div>
            <div className={style.pb4mb4}>
                <div className={style.os_padding}>
                    <div className={style.os_viewport}>
                        <div className={style.os_content}>
                            <nav className={style.mt2}>
                                <ul className={style.navpills}>
                                    <li className={style.navdrop}>
                                        <Link to='/Dashboard'><a className={style.navlinkedit}>
                                            <FontAwesomeIcon icon={faGauge} className={style.navicon}/>
                                            <p className={style.navnd}>Trang chủ</p>
                                        </a></Link>
                                    </li>
                                    <li className={style.navdrop}>
                                       <Link to='/TransactionPlaces'><a className={style.navlinkedit}>
                                            <FontAwesomeIcon icon={faBuilding} className={style.navicon}/>
                                            <p className={style.navnd}>Điểm giao dịch</p>
                                        </a></Link> 
                                    </li>
                                    <li className={style.navdrop}>
                                        <Link to='/GatheringPoints'><a className={style.navlinkedit}>
                                            <FontAwesomeIcon icon={faTruck} className={style.navicon}/>
                                            <p className={style.navnd}>Điểm tập kết</p>
                                        </a></Link>
                                    </li>
                                    <li onClick={() => setisShowPackage(!isShowPackage)} className={style.navdrop}>
                                        <a className={style.navlinkedit}>
                                            <FontAwesomeIcon icon={faCubes} className={style.navicon}/>
                                            <p className={style.navnd}>Hàng hóa
                                                {!isShowPackage ? <FontAwesomeIcon icon={faAngleLeft} className={style.navi_branch}/> : < FontAwesomeIcon icon={faAngleDown} className={style.navi_branch} />}
                                            </p>
                                        </a>
                                        { isShowPackage &&
                                            <ul className={style.navtreeview}>
                                                <li className={style.navdmcon}>
                                                    <Link to='/Packages/GetAll'><a className={style.cssdmcon}>
                                                        <FontAwesomeIcon icon={faAngleRight} className={style.navicon}/>
                                                        <p className={style.navnd}>Danh sách</p>
                                                    </a></Link>
                                                    <Link to='/Packages/Pending'><a className={style.cssdmcon}>
                                                        <FontAwesomeIcon icon={faAngleRight} className={style.navicon}/>
                                                        <p className={style.navnd}>Hàng chờ</p>
                                                    </a></Link>
                                                    <Link to='/Packages/Transportation'><a className={style.cssdmcon}>
                                                        <FontAwesomeIcon icon={faAngleRight} className={style.navicon}/>
                                                        <p className={style.navnd}>Đang chuyển</p>
                                                    </a></Link>
                                                    <Link to='/Packages/Arrived'><a className={style.cssdmcon}>
                                                        <FontAwesomeIcon icon={faAngleRight} className={style.navicon}/>
                                                        <p className={style.navnd}>Đã nhận</p>
                                                    </a></Link>
                                                    <Link to='/Packages/Failed'><a className={style.cssdmcon}>
                                                        <FontAwesomeIcon icon={faAngleRight} className={style.navicon}/>
                                                        <p className={style.navnd}>Thất bại</p>
                                                    </a></Link>
                                                </li>
                                            </ul>
                                        }
                                    </li>
                                    <li className={style.navdrop}>
                                        <a className={style.navlinkedit} href='/Employee/GetAll'>
                                            <FontAwesomeIcon icon={faUser} className={style.navicon}/>
                                            <p className={style.navnd}>Nhân viên</p>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar