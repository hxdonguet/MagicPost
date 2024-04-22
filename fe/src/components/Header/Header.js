import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css'
import logo from '../../logo.png'

function Header() {
  return (
    <div className={style.container}>
      <Link to=''><img src={logo} alt='' className={style.images}/></Link>
      <ul className={style.option}>
        <li><Link to="/" className={style.link}>Trang chủ</Link></li>
        <li><Link to="/About" className={style.link}>Giới thiệu</Link></li>
        <li><Link to="/Search" className={style.link}>Tra cứu đơn hàng</Link></li>
        <li><Link to="/Login" className={style.link}>Đăng nhập/Đăng kí</Link></li>
      </ul>
    </div>
  );
}

export default Header;
