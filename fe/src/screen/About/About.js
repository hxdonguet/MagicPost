import React from 'react'
import style from './About.module.css'

function About() {
    return (
        <>
            <div className={style.subbanner}>
                <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
                <div className={style.title}>
                    <div className={style.contain}>
                        <span className={style.tieude}>Giới thiệu về MagicPost</span>
                    </div>
                </div>
            </div>
            <div className={style.page}>
                <div className={style.contain2}>
                    <div>
                        <div className={style.introduce}>
                            <ul>
                                <li>
                                    <p className={style.ele}> Tên giao dịch:
                                        <span className={style.td}> Tổng công ty Chuyển phát nhanh Bưu điện - Công ty Cổ phần MagicPost</span>
                                    </p>
                                </li>
                                <li>
                                    <p className={style.ele}> Tên viết tắt:
                                        <span className={style.td}> Tổng công ty MagicPost</span>
                                    </p>
                                </li>
                                <li>
                                    <p className={style.ele}> Tên giao dịch quốc tế:
                                        <span className={style.td}> MagicPost Express Corporation</span>
                                    </p>
                                </li>
                                <li>
                                    <p className={style.ele}> Tên viết tắt quốc tế:
                                        <span className={style.td}> MagicPost Việt Nam</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About