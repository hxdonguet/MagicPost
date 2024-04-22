import React from 'react'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
function Login() {
    return (
        <div className={style.signinbox}>
            <section>
                <div className={style.logoholder}>
                    <img src='/logo.png'></img>
                </div>
                <form className={style.dangform}>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Tên đăng nhập/SĐT/Email:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Username, Phone Number or Email'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Mật khẩu:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Password'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <Link to='/Dashboard'><button className={style.submitdn}>Đăng nhập</button></Link>
                    </div>
                    <div className={style.formtdn}>
                        <p className={style.pdn}>
                            <a href='/Restore' className={style.adn}>Quên mật khẩu?</a>
                        </p>
                    </div>
                    <div className={style.formtdn}>
                        <p className={style.pdn}>Chưa có tài khoản?
                            <a href='/register' className={style.adn}>  Đăng kí</a>
                        </p>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <p className={style.mxh}>
                            Hoặc đăng nhập bằng tài khoản:
                        </p>
                    </div>
                </form>
                <div className={style.listmxh}>
                    <div className={style.hangmxh}>
                        <div className={style.colchia3}>
                            <a href='https://facebook.com'>'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"></img></a>
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
                <p className={style.camket}>Khi đăng nhập, tôi hoàn toàn đồng ý với các Điều khoản và Chính sách bảo mật của MagicPost.</p>
            </section>
        </div>
    )
}

export default Login