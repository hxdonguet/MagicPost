import React from 'react'
import style from './InfoAdmin.module.css'
function InfoAdmin() {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form} style={{ textAlign: "center" }}>Information Update</div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Full Name:</label>
                            <input className={style.ip} type='text' placeholder='Enter Full Name'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Email:</label>
                            <input className={style.ip} type='text' placeholder='Enter Email'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Old Password:</label>
                            <input className={style.ip} type='password' placeholder='Enter Old Password'></input>
                        </div>
                        <i className={style.notification}>Leave this blank and two belows if you don't want to change the password.</i>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>New Password:</label>
                            <input className={style.ip} type='password' placeholder='Enter New Password'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Confirm New Password:</label>
                            <input className={style.ip} type='password' placeholder='Confirm New Password'></input>
                        </div>
                        <div className={style.field_edit}>
                            <button type='submit' className={style.btn_close_edit}>
                                <a href='/Dashboard'>Cancel</a></button>
                            <button type='submit' className={style.btn_update_edit}>
                                <a href='/Dashboard'>Update</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InfoAdmin