import React from 'react'
import style from './FootBar.module.css'

function FootBar() {
  return (
    <footer className={style.footerchung}>
        <strong>Copyright © 2023 <a href="/" className={style.lkngoai}>MagicPost</a>. All rights reserved.</strong>
        <div className={style.floatright}>
            <b>Trang Quản Trị - Administration Page</b>
        </div>
    </footer>
  )
}

export default FootBar