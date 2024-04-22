import React, { useState } from 'react'
import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faBuilding, faAngleLeft, faAngleDown, faTruck, faCubes, faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import useAuth from '../../hook/useAuth'
import logo from '../../logo.png';


function Sidebar() {

    const { isAdmin, isManage, isEmployee } = useAuth()

    const [selected, setSelected] = useState('dashboard')
    const [isShowPackage, setIsShowPackage] = useState(false);

    const [dropdown, setDropdown] = useState(faAngleLeft)

    const handleButtonClick = (button) => {
        setSelected(button);
    };

    const handleDropdown = () => {
        if (dropdown === faAngleLeft) {
            setDropdown(faAngleDown)
            setIsShowPackage(true)
        } else {
            setDropdown(faAngleLeft)
            setIsShowPackage(false)
        }
    }


    return (
        <div className={style.mainsb}>
            <div className={style.image}>
                <img src={logo}></img>
            </div>
            {isAdmin &&
                <>
                    <Link to='/Dashboard'
                        className={`${style.option} ${selected === 'dashboard' ? style.selected : ''}`}
                        onClick={() => handleButtonClick('dashboard')} >
                        <FontAwesomeIcon icon={faGauge} />
                        <span className={style.navnd}>Tổng quan</span>
                    </Link>
                    <Link to='/TransactionPoint/GetAll'
                        className={`${style.option} ${selected === 'transactionPoints' ? style.selected : ''}`}
                        onClick={() => handleButtonClick('transactionPoints')} >
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Điểm giao dịch</span>
                    </Link>
                    <Link to='/Warehouse/GetAll'
                        className={`${style.option} ${selected === 'warehouse' ? style.selected : ''}`}
                        onClick={() => handleButtonClick('warehouse')}>
                        <FontAwesomeIcon icon={faTruck} />
                        <span>Điểm tập kết</span>
                    </Link>
                </>}
            <div className={`${style.package} ${(selected === 'getAll' || selected === 'isComing') ? style.selected : ''}`}>
                <Link to='/Packages/GetAll'
                    className={style.multiOption}
                    onClick={() => {
                        handleButtonClick('getAll')
                        setIsShowPackage(true)
                        setDropdown(faAngleDown)
                    }}>
                    <FontAwesomeIcon icon={faCubes} />
                    <span>Hàng hóa</span>
                </Link>
                <FontAwesomeIcon icon={dropdown} className={style.more} onClick={() => handleDropdown()} />
            </div>
            {isShowPackage &&
                <>
                    <Link to='/Packages/GetAll'
                        className={`${style.option} ${selected === 'getAll' ? style.selectedOption : ''}`}
                        onClick={() => handleButtonClick('getAll')}>

                        <span className={style.navnd}>Danh sách</span>
                    </Link>
                    {!isAdmin &&  <Link to='/Packages/Arrived'
                        className={`${style.option} ${selected === 'isComing' ? style.selectedOption : ''}`}
                        onClick={() => handleButtonClick('isComing')}>
                        {/* <FontAwesomeIcon icon={faAngleRight} /> */}
                        <span className={style.navnd}>Đang vận chuyển đến</span>
                    </Link>}
                   
                </>}
            {isManage && <>
                <Link to='/Employee/GetAll'
                    className={`${style.option} ${selected === 'employees' ? style.selected : ''}`}
                    onClick={() => handleButtonClick('employees')}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Nhân viên</span>
                </Link>
            </>}

        </div>
    )
}

export default Sidebar