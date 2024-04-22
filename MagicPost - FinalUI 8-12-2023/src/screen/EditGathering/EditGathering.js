import React from 'react'
import style from './EditGathering.module.css'
function EditGathering() {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form} style={{ textAlign: "center" }}>Edit Current Gathering</div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>New Gathering Name:</label>
                            <input className={style.ip} type='text' placeholder='Enter New Gathering Name'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>New Place:</label>
                            <input className={style.ip} type='text' placeholder='Enter New Place'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>New Owner:</label>
                            <input className={style.ip} type='text' placeholder='Enter New Owner'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>New Username:</label>
                            <input className={style.ip} type='text' placeholder='Enter New Username'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>New Password:</label>
                            <input className={style.ip} type='text' placeholder='Enter New Password'></input>
                        </div><br></br>
                        <i><p>Leave the blank(s) where you don't want to change the infomation.</p></i>
                        <div className={style.field_edit}>
                            <button type='submit' className={style.btn_close_edit}>
                                <a href='/GatheringPoints'>Cancel</a></button>
                            <button type='submit' className={style.btn_update_edit}>
                                <a href='/GatheringPoints'>Update</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditGathering