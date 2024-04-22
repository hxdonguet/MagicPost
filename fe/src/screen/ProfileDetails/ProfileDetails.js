import React, { useState } from 'react'
import style from './ProfileDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useGetEmployeesByIdQuery, useChangePasswordMutation, useUpdateEmployeeMutation} from '../../app/features/api/employeeSlice'
import useAuth from '../../hook/useAuth'



function ProfileDetails() {
    const {workPlace, locationId} = useAuth()
    const { id } = useParams()
    const { data, isSuccess, isLoading, isError, error } = useGetEmployeesByIdQuery({ id })

    const [changePwd, setChangePwd] = useState({id, oldPwd: '', newPwd: '', confirmPwd: '' })
    const [inputValue, setInputValue] = useState({id, name: '', email:'', phoneNumber:''})

    let workType;
    if(workPlace == "Transaction") {
        workType= "Điểm giao dịch"
    } else {
        workType = "Điểm tập kết"
    }

    const [errors, setError] = useState('')

    const [changePassword] = useChangePasswordMutation()
    const [update] = useUpdateEmployeeMutation()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await update(inputValue).unwrap()
        }catch (err){
            console.log(err)
        }
    }

    const handleSubmitPwd = async (e) => {
        e.preventDefault()
        try {
            if(changePwd.confirmPwd === changePwd.newPwd) {
                await changePassword(changePwd).unwrap()
            } else {
                setError('Xác thực mật khẩu không đúng')
            }
        }catch(err){
            setError('Mật khẩu không chính xác')
            console.log(err)
        }
    }

    const handlePwdChange = (e) => {
        setChangePwd({...changePwd, [e.target.name] : e.target.value})
    }

    const handleInput = (e) => {
        setInputValue({...inputValue, [e.target.name]:e.target.value})
    }

    let content
    if (isLoading) {
        content = (
            <p>isLoading</p>
        )
    } else if (isSuccess) {
        const { ids, entities } = data
        console.log(entities[id])
        content = <>
            <div className={style.pagetitle}>
                <div className={style.nd1}>
                    <h3>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        &nbsp; Quản lý thông tin cá nhân
                    </h3>
                </div>
            </div>
            <div className={style.colsm6xs12}>
                <form className={style.x_fill} onSubmit={handleSubmit}>
                    <h2 className={style.titlend}>Cấu hình thông tin</h2>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>Tên đăng nhập</label>
                            <div className={style.box}>
                                <span className={style.formcd}>{entities[id].username}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>Họ và tên</label>
                            <div className={style.box}>
                                <input 
                                className={style.formnhap} 
                                type='text' 
                                name='name'
                                defaultValue={entities[id].name}
                                onChange={handleInput}></input>
                            </div>
                        </div>
                    </div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>Email</label>
                            <div className={style.box}>
                            <input 
                                className={style.formnhap} 
                                type='text' 
                                name='email'
                                defaultValue={entities[id].email}
                                onChange={handleInput}></input>
                            </div>
                        </div>
                    </div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>Số điện thoại</label>
                            <div className={style.box}>
                                <input 
                                className={style.formnhap} 
                                type='text' 
                                name='phoneNumber'
                                defaultValue={entities[id].phoneNumber}
                                onChange={handleInput}></input>
                            </div>
                        </div>
                    </div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>ID người dùng</label>
                            <div className={style.box}>
                                <span className={style.formcd}>{entities[id]._id}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>Nơi làm việc</label>
                            <div className={style.box}>
                                <span className={style.formcd}>{workType}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>ID nơi làm việc</label>
                            <div className={style.box}>
                                <span className={style.formcd}>{locationId}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.insolid}></div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <button className={style.xn} type='submit'>Cập nhật</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className={style.colsm6xs12}>
                <form className={style.x_fill} onSubmit={handleSubmitPwd}>
                    <h2 className={style.titlend}>Thay đổi mật khẩu</h2>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>Mật khẩu cũ</label>
                            <div className={style.box}>
                                <input name='oldPwd'
                                    className={style.formnhap}
                                    type='password'
                                    placeholder='Enter old password'
                                    value={changePwd.oldPwd}
                                    onChange={handlePwdChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>Mật khẩu mới</label>
                            <div className={style.box}>
                                <input
                                    name='newPwd'
                                    className={style.formnhap}
                                    type='password'
                                    placeholder='Enter new password'
                                    value={changePwd.newPwd}
                                    onChange={handlePwdChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <label className={style.labelgroup}>Xác nhận mật khẩu</label>
                            <div className={style.box}>
                                <input
                                    name='confirmPwd'
                                    className={style.formnhap}
                                    type='password'
                                    placeholder='Confirm new password'
                                    value={changePwd.confirmPwd}
                                    onChange={handlePwdChange}></input>
                            </div>
                        </div>
                    </div>
                    {errors != '' && <p className={style.error_cn} >{errors}</p>}
                    <div className={style.insolid}></div>
                    <div className={style.ndtd}>
                        <div className={style.form_group}>
                            <button className={style.xn} type='submit'>Cập nhật</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    } else if (isError) {
        <p>{error}</p>
    }
    return content

}
export default ProfileDetails