import React from 'react'
import { Link } from 'react-router-dom';
import style from './Register.module.css';

function Register() {
    return (
        <div className={style.registerbox}>
            <div className={style.logoholder}>
                <img src='/logo.png'></img>
            </div>
            <form className={style.dangform}>
            <div className={style.formtdn}>
                    <label>Tên người dùng:</label>
                    <input
                        className={style.inpcontrol}
                        type='text'
                        placeholder='Full Name'

                    />
                </div>
                <div className={style.formtdn}>
                    <label>Tên đăng nhập:</label>
                    <input
                        className={style.inpcontrol}
                        type='text'
                        placeholder='Username'

                    />
                </div>
                <div className={style.formtdn}>
                    <label>Mật khẩu:</label>
                    <input
                        className={style.inpcontrol}
                        type='password'
                        placeholder='Password'
                    />
                </div>
                <div className={style.formtdn}>
                    <label>Nhập lại mật khẩu:</label>
                    <input
                        className={style.inpcontrol}
                        type='password'
                        placeholder='Confirm Password Again'
                    />
                </div>
                <div className={style.formtdn}>
                    <label>Số điện thoại:</label>
                    <input
                        className={style.inpcontrol}
                        type='text'
                        placeholder='Phone Number'
                    />
                </div>
                <div className={style.formtdn}>
                    <label>Email:</label>
                    <input
                        className={style.inpcontrol}
                        type='text'
                        placeholder='Email'
                    />
                </div>
                <div className={style.formtdn}>
                    <button className={style.submitdn}>Đăng kí</button>
                </div>
            </form>
            <div className={style.formtdn}>
                <p className={style.pdn}>Đã có tài khoản?
                    <Link to='/Login' className={style.adn}> Đăng nhập</Link>
                </p>
            </div>
            <p className={style.camket}>Khi đăng kí, tôi hoàn toàn đồng ý với các Điều khoản và Chính sách bảo mật của MagicPost.</p>
        </div>
    )
}

export default Register