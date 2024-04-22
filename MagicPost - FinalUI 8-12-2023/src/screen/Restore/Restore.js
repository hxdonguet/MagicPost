import React from 'react'
import { Link } from 'react-router-dom'
import style from './Restore.module.css'
function Restore() {
    return (
        <div className={style.signinbox}>
            <section>
                <div className={style.logoholder}>
                    <img src='/logo.png'></img>
                </div>
                <form className={style.dangform}>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>SĐT/Email Tài khoản khôi phục:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Phone Number or Email'></input>
                    </div>
                    <div className={style.formtdn}>
                        <Link to='/RestoreConfirm'><button className={style.submitdn}>Tiếp tục</button></Link>
                    </div>
                    <div className={style.formtdn}>
                        <Link to='/Login'><button className={style.submitdn}>Quay lại</button></Link>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <p className={style.pdn}>Chưa có tài khoản?
                            <Link to='/Register' className={style.adn}>  Đăng kí</Link>
                        </p>
                    </div>
                </form>
                <hr></hr>
                <p className={style.camket}>Tôi đồng ý với Điều khoản và Chính sách bảo mật của MagicPost.</p>
            </section>
        </div>
    )
}

export default Restore