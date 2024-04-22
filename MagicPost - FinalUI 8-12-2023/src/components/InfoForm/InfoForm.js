import React from 'react'
import style from './InfoForm.module.css'

function InfoForm({ close }) {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form}>Infomation</div>









                        <div className={style.col_lg_12}>
                            <div className={style.row}>
                                <div className={style.col_md_12}>
                                    <div className={style.callout}>
                                        <dl>
                                            <dt>Tracking Number:</dt>
                                            <dd>abc</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className={style.row}>
                                <div className={style.col_md_6}>
                                    <div className={style.callout}>
                                        <b className={style.border_bottom}>Sender Information</b>
                                        <dl>
                                            <dt>Name:</dt>
                                            <dd>abc</dd>
                                            <dt>Address:</dt>
                                            <dd>abc</dd>
                                            <dt>Contact:</dt>
                                            <dd>abc</dd>
                                        </dl>
                                    </div>
                                    <div className={style.callout}>
                                        <b className={style.border_bottom}>Recipient Information</b>
                                        <dl>
                                            <dt>Name:</dt>
                                            <dd>abc</dd>
                                            <dt>Address:</dt>
                                            <dd>abc</dd>
                                            <dt>Contact:</dt>
                                            <dd>abc</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className={style.col_md_6}>
                                    <div className={style.callout}>
                                        <b className={style.border_bottom}>Parcel Details</b>
                                        <div className={style.row}>
                                            <div className={style.col_sm_6}>
                                                <dl>
                                                    <dt>Wight:</dt>
                                                    <dd>abc</dd>
                                                    <dt>Height:</dt>
                                                    <dd>abc</dd>
                                                    <dt>Price:</dt>
                                                    <dd>abc</dd>
                                                </dl>
                                            </div>
                                            <div className={style.col_sm_6}>
                                                <dl>
                                                    <dt>Width:</dt>
                                                    <dd>abc</dd>
                                                    <dt>length:</dt>
                                                    <dd>abc</dd>
                                                    <dt>Type:</dt>
                                                    <dd>abc</dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <dl>
                                            <dt>Branch Accepted the Parcel:</dt>
                                            <dd>abc</dd>
                                            <dt>Status:</dt>
                                            <dd>abc</dd>
                                        </dl>
                                    </div>
                                    <div className={style.field}>
                                        <button type='submit' className={`${style.btn_close} ${style.btn}`} onClick={() => close(false)}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form >
                </div >
            </div >
        </div >
    )
}

export default InfoForm