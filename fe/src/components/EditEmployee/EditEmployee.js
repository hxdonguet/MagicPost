import React from 'react'
import style from './EditEmployee.module.css'
import { useUpdateEmployeeMutation } from '../../app/features/api/employeeSlice'
import { useState } from 'react'

function EditEmployee(props) {

    const [resetPassword, setResetPassword] = useState(false)

    const [newPwd, setNewPwd] = useState('')

    const [isUpdate, setIsUpdate] = useState(false)

    const [edit] = useUpdateEmployeeMutation();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const employee = {
                id: props.employee.id,
                password: newPwd,

            }
            if(isUpdate) {
                await edit(employee).unwrap();
            }
            
            props.handleEdit(props.index);
        } catch (err) {
            console.log(err);
            console.error("Update failed")
        }
    }

    if(newPwd != '') setIsUpdate(true) 

    const handleInput = (e) => {
        setNewPwd(e.target.value)
    }

    return (
        <div className={style.overlay}>
            <div className={style.modal_content}>
                <div className={style.title_form}>Chỉnh sửa thông tin</div>
                <form className={style.modal_form} onSubmit={handleSubmit}>
                    <div className={style.form}>
                        <span className={style.field}>ID</span>
                        <span>{props.employee.id}</span>
                    </div>
                    <div className={style.form}>
                        <span className={style.field}>Tên nhân viên</span>
                        <span>{props.employee.name}</span>
                    </div>
                    <div className={style.form}>
                        <span className={style.field}>Tên đăng nhập</span>
                        <span>{props.employee.username}</span>
                    </div>
                    {!resetPassword && (
                        <div className={style.form}>
                            <span className={style.field}>Mật khẩu</span>
                            <span>********</span>
                            <span className={style.resetPassword} onClick={() => setResetPassword(!resetPassword)}>Đặt lại mật khẩu</span>
                        </div>
                    )}

                    {resetPassword && (
                        <>
                            <div className={style.form}>
                                <label className={style.field}>Nhập mật khẩu mới</label>
                                <input type='password' value={newPwd} onChange={handleInput} />
                            </div>
                            <div className={style.form}>
                                <label className={style.field}>Xác thực mật khẩu</label>
                                <input type='password' onChange={handleInput} />
                            </div>
                        </>

                    )}
                    <div className={style.form}>
                        <span className={style.field}>Email</span>
                        <span>{props.employee.email}</span>
                    </div>
                    <div className={style.form}>
                        <span className={style.field}>Số điện thoại</span>
                        <span>{props.employee.phoneNumber}</span>
                    </div>

                    <div className={style.button}>
                        <button className={`${style.btn_close} ${style.btn}`} >
                            Đóng</button>
                        <button className={`${style.btn_create} ${style.btn}`}>
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditEmployee