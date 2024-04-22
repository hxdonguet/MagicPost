import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.container}>
      <Link to='/'><img src='./logo.png' alt='' className={style.images}/></Link>
      <ul className={style.option}>
        <li><a href="/MPAnotherServices" className={style.link}>Dịch vụ</a></li>
        <li><Link to="/Search" className={style.link}>Tra cứu</Link></li>
        <li><Link to="/News" className={style.link}>Tin tức</Link></li>
        <li><Link to="/About" className={style.link}>Giới thiệu</Link></li>
        <li><Link to="/QHCD" className={style.link}>Quan hệ cổ đông</Link></li>
        <li><Link to="/Recruitment" className={style.link}>Tuyển dụng</Link></li>
        <li><Link to="/Login" className={style.link}>Đăng nhập/Đăng kí</Link></li>
      </ul>
    </div>
  );
}

export default Header;