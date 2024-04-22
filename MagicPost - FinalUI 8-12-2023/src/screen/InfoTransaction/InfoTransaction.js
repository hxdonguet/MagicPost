import React from 'react'
import style from './InfoTransaction.module.css'
function InfoTransaction() {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form} style={{ textAlign: "center" }}>Create New Transaction</div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Transaction Name:</label>
                            <input className={style.ip} type='text' placeholder='Enter Transaction Name'></input>
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
                                <a href='/TransactionPlaces'>Cancel</a></button>
                            <button type='submit' className={style.btn_update_edit}>
                                <a href='/TransactionPlaces'>Update</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InfoTransaction