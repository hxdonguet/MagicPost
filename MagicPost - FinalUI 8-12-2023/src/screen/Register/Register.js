import React from 'react'
import { Link } from 'react-router-dom';
import style from './Register.module.css';

function Register() {
    return (
        <div className={style.registerbox}>
            <section>
                <div className={style.logoholder}>
                    <img src='/logo.png'></img>
                </div>
                <form className={style.dangform}>
                    <hr></hr>
                    <div className={style.formtdk}>
                        <label>Tên đăng nhập:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Enter Your Username...'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Số điện thoại:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Enter Your Phone Number...'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Email:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Enter Your Email...'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Mật khẩu:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Enter Your Password...'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Nhập lại mật khẩu:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Re-Enter Your Password...'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <Link to='/Login'><button className={style.submitdk} onClick={() => {alert('Đăng kí thành công. Vui lòng đăng nhập lại để tiếp tục!')}}>Đăng kí</button></Link>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <p className={style.pdn}>Đã có tài khoản?
                            <a href='/Login' className={style.adn}>  Đăng nhập</a>
                        </p>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <p className={style.mxh}>
                            Hoặc đăng kí bằng tài khoản:
                        </p>
                    </div>
                </form>
                <div className={style.listmxh}>
                    <div className={style.hangmxh}>
                        <div className={style.colchia3}>
                            <a href='https://facebook.com'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"></img></a>
                        </div>
                        <div className={style.colchia3}>
                            <a href='https://zalo.me'><img src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png"></img></a>
                        </div>
                        <div className={style.colchia3}>
                            <a href='https://gmail.com'><img src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"></img></a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className={style.camket}>Khi đăng kí, tôi hoàn toàn đồng ý với các Điều khoản và Chính sách bảo mật của MagicPost.</p>
            </section>
        </div>
    )
}

export default Register