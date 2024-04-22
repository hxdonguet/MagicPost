import React from 'react'
import { Link } from 'react-router-dom'
import style from './RestoreConfirm.module.css'
function RestoreConfirm() {
    return (
        <div className={style.signinbox}>
            <section>
                <div className={style.logoholder}>
                    <img src='/logo.png'></img>
                </div>
                <form className={style.dangform}>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Nhập mã OTP được gửi đến SĐT/Email:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Enter OTP Here...'></input>
                    </div>
                    <div className={style.formtdn}>
                        <Link to='/RestoreAfterConfirm'><button className={style.submitdn}>Xác nhận</button></Link>
                    </div>
                    <div className={style.formtdn}>
                        <Link to='/Restore'><button className={style.submitdn}>Quay lại</button></Link>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <p className={style.pdn}>Không nhận được mã?</p>
                        <button className={style.submitdn} onClick={() => {alert('Gửi thành công. Kiểm tra hộp thư đến trong Email/SĐT.')}}>Gửi lại mã</button>
                    </div>
                </form>
                <hr></hr>
                <p className={style.camket}>Tôi đồng ý với Điều khoản và Chính sách bảo mật của MagicPost.</p>
            </section>
        </div>
    )
}

export default RestoreConfirm