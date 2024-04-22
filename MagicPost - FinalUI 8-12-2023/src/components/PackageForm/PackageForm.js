import React from 'react'
import style from './PackageForm.module.css'

function PackageForm({ close }) {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form}>Create Package</div>
                        <div className={style.user_details}>
                            <div className={style.form}>
                                <label htmlFor={style.field}>Sender</label>
                                <input style={{border: "1px solid #00002b"}} name='account' type='text' placeholder='Enter sender' />
                            </div>
                            <div className={style.form}>
                                <label htmlFor={style.field}>Sending Address</label>
                                <input style={{border: "1px solid #00002b"}} name='account' type='text' placeholder='Enter shipping address' />
                            </div>
                            <div className={style.form}>
                                <label htmlFor={style.field}>Receiver</label>
                                <input style={{border: "1px solid #00002b"}} name='account' type='text' placeholder='Enter receiver' />
                            </div>
                            <div className={style.form}>
                                <label htmlFor={style.field}>Receiving Address</label>
                                <input style={{border: "1px solid #00002b"}} name='account' type='text' placeholder='Enter delivery address' />
                            </div>
                        </div>
                        <div className={style.field}>
                            <button type='submit' className={`${style.btn_close} ${style.btn}`} onClick={() => close(false)}>
                                Close</button>
                                <button type='submit' className={`${style.btn_create} ${style.btn}`}>
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PackageForm