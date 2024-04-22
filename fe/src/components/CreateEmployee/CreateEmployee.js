import React, { useState } from 'react'
import style from './CreateEmployee.module.css'
import { useCreateEmployeeMutation, useGetEmployeesByIdQuery } from '../../app/features/api/employeeSlice'
import useAuth from '../../hook/useAuth'


function CreateEmployee(props) {
    const { isAdmin } = useAuth()
    const [createEmployee, { isLoading }] = useCreateEmployeeMutation();
    const [role, setRole] = useState('Employee')
    const [inputValue, setInputValue] = useState({ name: '', username: '', password: "", email: "", phoneNumber: "", role: role})
  
    const handleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    }
    const canCreate = [inputValue].every(Boolean) && !isLoading;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (canCreate) {
            try {
                inputValue.role = role;
                await createEmployee(inputValue).unwrap();
                props.openModal(false);
            } catch (err) {
                console.log(err);
            }
        }
    }

    const handleRole = (e) => {
        setRole(e.target.value)
    }

    return (
        <div className={style.overlay}>
            <div className={style.modal_content}>
                <div className={style.title_form}>Tạo tài khoản nhân viên</div>
                <form className={style.modal_form} onSubmit={handleSubmit}>
                    <div className={style.user_details}>
                        <div className={style.form}>
                            <label className={style.field}>Họ và tên</label>
                            <input name='name' type='text' placeholder='Enter employee name' value={inputValue.name} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Tên đăng nhập</label>
                            <input name='username' type='text' placeholder='Enter username' value={inputValue.username} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Mật khẩu</label>
                            <input name='password' type='password' placeholder='Enter password' value={inputValue.password} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Email</label>
                            <input name='email' type='email' placeholder='Enter email' value={inputValue.email} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Số điện thoại</label>
                            <input name='phoneNumber' type='text' placeholder='Enter phone number' value={inputValue.phoneNumber} onChange={handleInput} />
                        </div>
                        {isAdmin &&
                            <div className={style.form}>
                                <label className={style.field}>Role</label>
                                <select value={role} onChange={handleRole}>
                                    <option value="Employee">Employee</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            </div>}

                    </div>
                    <div className={style.button}>
                        <button className={`${style.btn_close} ${style.btn}`} onClick={() => props.openModal(false)} >Đóng</button>
                        <button type='submit' className={`${style.btn_create} ${style.btn}`}>
                            Tạo mới
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CreateEmployee