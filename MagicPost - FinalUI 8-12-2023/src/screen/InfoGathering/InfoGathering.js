import React from 'react'
import style from './InfoGathering.module.css'
function InfoGathering() {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form} style={{ textAlign: "center" }}>Create New Gathering Point</div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Gathering Point:</label>
                            <input className={style.ip} type='text' placeholder='Enter Gathering Point'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Place:</label>
                            <input className={style.ip} type='text' placeholder='Enter Place'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Owner:</label>
                            <input className={style.ip} type='text' placeholder='Enter Owner'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Owner's Username:</label>
                            <input className={style.ip} type='text' placeholder='Enter Owners Username'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Owner's Password:</label>
                            <input className={style.ip} type='text' placeholder='Enter Owners Password'></input>
                        </div>
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

export default InfoGathering