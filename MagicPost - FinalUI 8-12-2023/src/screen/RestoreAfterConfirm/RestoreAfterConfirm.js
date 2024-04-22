import React from 'react'
import { Link } from 'react-router-dom'
import style from './RestoreAfterConfirm.module.css'
function RestoreAfterConfirm() {
    return (
        <div className={style.signinbox}>
            <section>
                <div className={style.logoholder}>
                    <img src='/logo.png'></img>
                </div>
                <form className={style.dangform}>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Mật khẩu mới:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Enter New Password'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Xác nhận mật khẩu:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Re-Enter New Password'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <Link to='/Dashboard'><button className={style.submitdn}>Xác nhận</button></Link>
                    </div>
                    <div className={style.formtdn}>
                        <Link to='/Login'><button className={style.submitdn}>Quay lại</button></Link>
                    </div>
                </form>
                <hr></hr>
                <p className={style.camket}>Tôi đồng ý với Điều khoản và Chính sách bảo mật của MagicPost.</p>
            </section>
        </div>
    )
}

export default RestoreAfterConfirm