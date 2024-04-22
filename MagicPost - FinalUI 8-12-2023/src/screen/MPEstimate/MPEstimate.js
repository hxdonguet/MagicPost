import React from 'react'
import style from './MPEstimate.module.css'

function MPEstimate() {
    return (
        <>
            <div className={style.subbanner7}>
                <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
                <div className={style.title7}>
                    <div className={style.contain7}>
                        <span className={style.tieude7}>ƯỚC TÍNH CƯỚC</span>
                    </div>
                </div>
            </div>
            <div className={style.containestimate}>
                <div className={style.service3}>
                    <h1 className={style.tieudedv3}>
                        <strong>TRANG THÔNG TIN TRA CỨU</strong>
                    </h1>
                </div>
                <h2 className={style.chimuc1dv3}>
                    <strong className={style.chimuc1dv3}>I. CƯỚC PHÍ TRONG NƯỚC</strong>
                </h2>
                <hr></hr>
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
                                        <div className={style.colmd6_cnt}>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Gửi từ <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Tỉnh/Thành Phố...'></input>
                                                </span>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Quận/Huyện...'></input>
                                                </span>
                                            </div>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Trọng lượng (Gram) <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Khối Lượng...'></input>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.colmd6_cnt}>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Gửi đến <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Tỉnh/Thành Phố...'></input>
                                                </span>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Quận/Huyện...'></input>
                                                </span>
                                            </div>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Số tiền thu hộ (VNĐ) <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Số Tiền...'></input>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.tctrgnc}>
                                            <button>Tra cứu</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <p></p>
                <h2 className={style.chimuc1dv3}>
                    <strong className={style.chimuc1dv3}>II. CƯỚC PHÍ QUỐC TẾ</strong>
                </h2>
                <hr></hr>
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
                                                <label className={style.label}>Gửi từ <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Tỉnh/Thành Phố...'></input>
                                                </span>
                                            </div>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Trọng lượng (Gram) <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Khối Lượng...'></input>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.colmd6_ngoainc}>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Gửi đến <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Nhập Quốc Gia...'></input>
                                                </span>
                                            </div>
                                            <div className={style.frmgp}>
                                                <label className={style.label}>Loại bưu kiện <i className={style.tabcnt_title}>(*)</i>:</label>
                                            </div>
                                            <div className={style.luachon}>
                                                <span className={style.timkiem}>
                                                    <input type='text' placeholder='Chọn loại bưu kiện...'></input>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.tctrgnc}>
                                            <button>Tra cứu</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MPEstimate