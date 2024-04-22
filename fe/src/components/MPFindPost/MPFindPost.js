import React from 'react'
import style from './MPFindPost.module.css'

function MPFindPost() {
    return (
        <>
            <div className={style.subbanner7}>
                <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
                <div className={style.title7}>
                    <div className={style.contain7}>
                        <span className={style.tieude7}>TRA CỨU BƯU CỤC</span>
                    </div>
                </div>
            </div>
            <div className={style.containestimate}>
                <div className={style.service3}>
                    <h1 className={style.tieudedv3}>
                        <strong>TRANG THÔNG TIN TRA CỨU</strong>
                    </h1>
                </div>
                <div className={style.col12_trgnc}>
                    <div className={style.tabcnt}>
                        <div className={style.tabcnt_nd}>
                            <div className={style.tabcnt_title}>
                                <h3>Khách hàng tra cứu bằng cách nhập vào biểu mẫu sau:</h3>
                                <i>(Các thông tin (*) là bắt buộc)</i>
                            </div>
                            <div className={style.tabcnt_content}>
                                <form className={style.formcnt}>
                                    <div className={style.justify_tabcnt}>
                                        <div className={style.colmd6_ngoainc}>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Chọn Tỉnh/Thành phố <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Tỉnh/Thành phố...'></input>
                                                </span>
                                            </div>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Chọn Quận/Huyện <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Quận/Huyện...'></input>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.colmd6_ngoainc}>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Chọn Xã/Phường <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Xã/Phường...'></input>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.tctrgnc}>
                                            <button>Tra cứu</button>
                                        </div>

                                    </div>
                                </form>
                                <div className={style.tabcnt_title}>
                                    <p>Thông tin danh sách bưu cục chi tiết, <a className={style.lkngoai} href='https://www.ustraveldocs.com/DANH_S%C3%81CH_B%C6%AFU_C%E1%BB%A4C_08052019.pdf'>xem tại đây.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MPFindPost