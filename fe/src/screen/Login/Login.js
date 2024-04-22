import React from 'react'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCrendential } from '../../app/features/auth/authSlice'
import { useLoginMutation } from '../../app/features/auth/authApiSlice'
import { useRef, useState, useEffect } from 'react'
import useAuth from '../../hook/useAuth'
import { jwtDecode } from 'jwt-decode'
import logo from '../../logo.png'

function Login() {
    const {isAdmin} = useAuth()
    const userRef = useRef()
    const errRef = useRef()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = await login({ username: username, password: password }).unwrap()
            dispatch(setCrendential({ ...userData, username: username }))
            setUsername('')
            setPassword('')
            const decoded = jwtDecode(userData.accessToken)
            const {role} = decoded.user
            if(role === 'Admin') {
                navigate('/dashboard')
            } else {
                navigate('/Packages/GetAll')
            }
            
        } catch (err) {
            if (!err.status) {
                setErrMsg("No Server Respone");
            } else if (err?.status === 400) {
                setErrMsg("Tài khoản hoặc mật khẩu không chính xác")
            } else if (err?.orginalStatus === 401) {
                setErrMsg('status')
            } else {
                setErrMsg("Đăng nhập thất bại")
            }
            errRef.current.focus()
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)


    let content = isLoading ? <h1>isLoading</h1> : (
        <div className={style.signinbox}>
            <div className={style.logoholder}>
                <img src={logo}></img>
            </div>
            <form className={style.dangform} onSubmit={handleSubmit}>
                <div className={style.formtdn}>
                    <label>Tên đăng nhập</label>
                    <input
                        className={style.inpcontrol}
                        type='text'
                        placeholder='Username'
                        ref={userRef}
                        value={username}
                        autoComplete='off'
                        onChange={handleUserInput}
                        required
                    />
                </div>
                <div className={style.formtdn}>
                    <label>Mật khẩu:</label>
                    <input
                        className={style.inpcontrol}
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={handlePwdInput}
                        required
                    />
                </div>
                <p ref={errRef} className={errMsg ? style.errmsg : style.offscreen} aria-live='assertive'>{errMsg}</p>
                <div className={style.formtdn}>
                    <button className={style.submitdn}>Đăng nhập</button>
                </div>
            </form>
            <div className={style.formtdn}>
                <p className={style.pdn}>
                    <Link to='/Restore' className={style.adn}>Quên mật khẩu?</Link>
                </p>
            </div>
            {/* <div className={style.formtdn}>
                <p className={style.pdn}>Chưa có tài khoản?
                    <Link to='/register' className={style.adn}> Đăng kí</Link>
                </p>
            </div> */}
            <p className={style.camket}>Khi đăng nhập, tôi hoàn toàn đồng ý với các Điều khoản và Chính sách bảo mật của MagicPost.</p>
        </div>
    )

    return content;
}

export default Login