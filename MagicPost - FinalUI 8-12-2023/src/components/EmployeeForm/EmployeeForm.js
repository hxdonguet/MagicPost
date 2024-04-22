import React, { useState } from 'react'
import style from './EmployeeForm.module.css'
import { useCreateEmployeeMutation } from '../../app/features/api/employeeSlice'

function EmployeeForm(props) {
    const [createEmployee, {isLoading }] = useCreateEmployeeMutation();
    const [inputValue, setInputValue] = useState({ employeeName: '', username: '', password: "", email: "", phoneNumber: "" })
   
    const handleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    }
    const canCreate = [inputValue].every(Boolean) && !isLoading;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(canCreate){
            try{
                await createEmployee(inputValue).unwrap();
                props.openModal(false);
            } catch(err) {
                console.log(err);
            }
        }
    }

    return (
        <div className={style.overlay}>
            <div className={style.modal_content}>
                <div className={style.title_form}>Edit Employee</div>
                <form className={style.modal_form} onSubmit={handleSubmit}>
                    <div className={style.user_details}>
                        <div className={style.form}>
                            <label className={style.field}>Employee Name</label>
                            <input style={{border: "1px solid #00002b"}} name='employeeName' type='text' placeholder='Enter employee name' value={inputValue.employeeName} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Username</label>
                            <input style={{border: "1px solid #00002b"}} name='username' type='text' placeholder='Enter username' value={inputValue.username} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Password</label>
                            <input style={{border: "1px solid #00002b"}} name='password' type='password' placeholder='Enter password' value={inputValue.password} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Email</label>
                            <input style={{border: "1px solid #00002b"}} name='email' type='email' placeholder='Enter email' value={inputValue.email} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Phone Number</label>
                            <input style={{border: "1px solid #00002b"}} name='phoneNumber' type='text' placeholder='Enter phone number' value={inputValue.phoneNumber} onChange={handleInput} />
                        </div>
                    </div>
                    <div className={style.button}>
                        <button className={`${style.btn_close} ${style.btn}`} onClick={() => props.openModal(false)} >Close</button>
                        <button type='submit' className={`${style.btn_create} ${style.btn}`}>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EmployeeForm