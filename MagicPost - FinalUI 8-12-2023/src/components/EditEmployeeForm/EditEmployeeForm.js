import React from 'react'
import style from './EditEmployeeForm.module.css'
import { useUpdateEmployeeMutation } from '../../app/features/api/employeeSlice'
import { useState } from 'react'

function EditEmployeeForm(props) {

    const [inputValue, setInputValue] = useState({
        id: props.employee.id,
        employeeName: props.employee.employeeName,
        username: props.employee.username,
        password: props.employee.password,
        email: props.employee.email,
        phoneNumber: props.employee.phoneNumber
    })
    const id = props.employee.id;

    const handleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    }

    const [edit] = useUpdateEmployeeMutation();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // console.log(inputValue)
            await edit(inputValue).unwrap();
            props.handleEdit(props.index);
        } catch (err) {
            console.log(err);
            console.error("Update failed")
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
                            <input style={{border: "1px solid #00002b"}} name='employeeName' type='text' value={inputValue.employeeName} onChange={handleInput}/>
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Username</label>
                            <input style={{border: "1px solid #00002b"}} name='username' type='text' value={inputValue.username} onChange={handleInput} />
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Password</label>
                            <input style={{border: "1px solid #00002b"}} name='password' type='text' value={inputValue.password} onChange={handleInput}/>
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Email</label>
                            <input style={{border: "1px solid #00002b"}} name='email' type='email' value={inputValue.email} onChange={handleInput}/>
                        </div>
                        <div className={style.form}>
                            <label className={style.field}>Phone Number</label>
                            <input style={{border: "1px solid #00002b"}} name='phoneNumber' type='text' value={inputValue.phoneNumber} onChange={handleInput}/>
                        </div>
                    </div>
                    <div className={style.button}>
                        <button className={`${style.btn_close} ${style.btn}`} onClick={() => props.handleEdit(props.index)} >
                            Close</button>
                        <button className={`${style.btn_create} ${style.btn}`}>
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditEmployeeForm